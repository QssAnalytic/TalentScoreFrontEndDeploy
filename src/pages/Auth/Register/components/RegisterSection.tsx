import LoginRegisterButton from "pages/Auth/components/LoginRegisterButton";
import LoginRegisterTextInput from "pages/Auth/components/LoginRegisterTextInput";
import LoginRegisterPasswordInput from "pages/Auth/components/LoginRegisterPasswordInput";
import LoginRegisterSelect from "pages/Auth/components/LoginRegisterSelect";
import TalentScore from 'assets/logo-second.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import LoginRegisterDatePickerInput from "pages/Auth/components/LoginRegisterDateInput";
import axios from "axios";
import axiosInstance from "axioss";
import { useEffect, useState } from "react";
import useAuth from "hooks/useAuth";
import SelectSearch from "components/SelectSearch";
import { uploadProfilePhoto } from "pages/Tests/Dashboard";

export type IRegisterFormValues = Yup.InferType<typeof RegisterSchema>;

const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(3, "Ad ən azı 3 hərf olmalıdır").required("Adınızı daxil edin"),
    surname: Yup.string().min(3, "Soyad ən azı 3 hərf olmalıdır").required("Soyadınızı daxil edin"),
    country: Yup.object().shape({
        answer:Yup.string().required("Ölkəni seçin"),
        answer_weight:Yup.string()
    }),
    nativelanguage: Yup.string().min(2, "Ana dilinizi daxil edin").required("Ana dilinizi daxil edin"),
    gender: Yup.string().required("Cinsinizi seçin"),
    email: Yup.string().required("E-poçt tələb olunur").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Düzgün e-poçt daxil edin"),
    password: Yup.string().required("Şifrə tələb olunur").min(8, "Şifrə ən azı 8 simvol olmalıdır").max(50),
    confirmpassword: Yup.string().required().oneOf([Yup.ref('password')], 'Şifrələr eyni deyil'),
    day: Yup.string().required(""),
    month: Yup.string().required(""),
    year: Yup.string().required("")
})
const RegisterSection = () => {
    const { register, handleSubmit, watch, formState: { errors }, trigger, reset } = useForm<IRegisterFormValues>({
        resolver: yupResolver(RegisterSchema),
        defaultValues: {
            name: "",
            surname: "",
            gender: "",
            country: {
                answer:'',
                answer_weight:''
            },
            nativelanguage: "",
            email: "",
            password: "",
            confirmpassword: "",
            day: "",
            month: "",
            year: "",
        }
    });



    const [countryList, setCountryList] = useState({})
    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState('');
    const [photoError, setPhotoError] = useState('');
    const [serverError, setServerError] = useState('');
    const { setAccessToken, setCSRFToken } = useAuth();

    const navigate = useNavigate();
    const { user } = useAuth()


    useEffect(() => {
        if (user.first_name) {
            navigate('/')
        }
    }, [user])

    useEffect(() => {
        async function getCountries() {
            const { data } = await axiosInstance('user/get-countries')
            setCountryList((last) => {
                return data.map((elem: any, index: number) => {
                    return {
                        id: index,
                        answer_title: elem.name,
                        stage_fit: "",
                        answer_weight: '',
                        answer_dependens_on: null,

                    }
                })
            })
        }
        getCountries()
    }, [])

    const onPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0]
        if (!f) return
        if (!f.type.startsWith('image/')) { setPhotoError('Şəkil faylı seçin (JPG, PNG).'); return }
        setPhoto(f)
        setPhotoError('')
        setPhotoPreview(URL.createObjectURL(f))
    }
    const onSubmit: SubmitHandler<IRegisterFormValues> = data => {
        if (!photo) { setPhotoError('Hesabatlarda və sertifikatlarda istifadə üçün profil şəkli əlavə edin.'); return }
        setLoading(true)
        setServerError('')
        const sendedData = {
            first_name: data.name,
            last_name: data.surname,
            birth_date: Number(data.year) + "-" + Number(data.month) + "-" + Number(data.day),
            gender: data.gender,
            native_language: data.nativelanguage,
            country: data.country.answer,
            email: data.email,
            password: data.password,
            password2: data.confirmpassword
        }

        console.log(sendedData);


        const signUp = async () => {

            try {
                await axiosInstance.post('user/register/', JSON.stringify(sendedData))
                // Sign straight in and attach the photo, so reports and certificates can use it.
                const response = await axiosInstance.post('user/login/', JSON.stringify({ email: data.email, password: data.password }))
                const token = response?.data?.access_token
                localStorage.setItem('access_token', token)
                setAccessToken(token)
                setCSRFToken(response.headers['x-csrftoken'])
                try { await uploadProfilePhoto(data.email, photo) } catch { /* kept locally */ }
                setLoading(false)
                navigate('/profile')
            } catch (error: any) {
                setLoading(false)
                const d = error?.response?.data
                setServerError(d?.email ? 'Bu e-poçtla artıq hesab var. Daxil olun.' : d?.password ? 'Şifrələr eyni deyil.' : 'Qeydiyyat alınmadı. Məlumatları yoxlayıb yenidən cəhd edin.')
            }
        }
        signUp()

    };


    return (
        <div className="px-20 py-16 bg-white w-6/12 flex flex-col gap-14 ">
            <div className="flex items-center justify-start gap-5" >
                <img className="w-44" src={TalentScore} alt="Logo" />
                <h3 className="font-manrope text-2xl font-medium text-qss-primary">Qeydiyyat</h3>
            </div>

            <div className=" gap-5 flex flex-col w-full">
                <form className="flex flex-col gap-1 overflow-auto w-9/12 h-[500px]" onSubmit={handleSubmit(onSubmit)}>
                    <div className="px-2 flex flex-col gap-7 overflow-auto w-full h-[500px]">
                        <div className="flex items-center gap-4">
                            <label className="relative w-20 h-20 shrink-0 rounded-full p-[3px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop cursor-pointer">
                                {photoPreview ? <img src={photoPreview} alt="" className="w-full h-full rounded-full object-cover bg-white" /> : <span className="w-full h-full rounded-full bg-white grid place-items-center text-[11px] text-qss-secondary text-center leading-tight px-1">Şəkil seç</span>}
                                <input type="file" accept="image/*" className="sr-only" onChange={onPhoto} />
                            </label>
                            <div className="text-sm">
                                <p className="text-qss-primary font-medium">Profil şəkli*</p>
                                <p className="text-qss-inputText text-xs">Hesabatlarda, sertifikatlarda və paylaşım kartlarında görünəcək.</p>
                                {photoError && <p className="text-red-500 text-xs mt-1">{photoError}</p>}
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex flex-col gap-1">
                                <LoginRegisterTextInput errors={errors.name} label="Ad" type="" icon="" register={register("name")} value={watch("name")} trigger={trigger} name="name" />
                                <p className="text-red-500  leading-4">{errors.name ? errors.name.message : ""}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <LoginRegisterTextInput errors={errors.surname} label="Soyad" type="" icon="" register={register("surname")} value={watch('surname')} trigger={trigger} name="surname" />
                                <p className="text-red-500 leading-4">{errors.surname ? errors.surname.message : ""}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <LoginRegisterDatePickerInput label="Doğum tarixi" register={register} day='day' month='month' year="year" errors={errors} trigger={trigger} reset={reset} />
                            <p className="text-red-500  leading-4">{(errors.day || errors.month || errors.year) ? "Doğum tarixini daxil edin" : ""}</p>

                        </div>
                        <div className="flex flex-col gap-1 ">
                            <LoginRegisterSelect errors={errors.gender} label="Cins" options={["Male", "Female"]} register={register('gender')} defaultvalue="Cins..." value={watch('gender')} />
                            <p className="text-red-500  leading-4">{errors.gender ? errors.gender.message : ""}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <LoginRegisterTextInput errors={errors.country} label="Ölkə" type="select" icon="" register={register("country")} value={watch('country')} options={countryList} trigger={trigger} name="country" />

                        
                            <p className="text-red-500  leading-4">{errors.country ? errors.country.message : ""}</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <LoginRegisterTextInput errors={errors.nativelanguage} label="Ana dili" type="" icon="pajamas:earth" register={register("nativelanguage")} value={watch("nativelanguage")} trigger={trigger} name="nativelanguage" />


                            <p className="text-red-500  leading-4">{errors.nativelanguage ? errors.nativelanguage.message : ""}</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <LoginRegisterTextInput errors={errors.email} label="E-poçt ünvanı" type="email" icon="ic:baseline-alternate-email" register={register("email")} value={watch('email')} trigger={trigger} name="email" />
                            <p className="text-red-500  leading-4">{errors.email ? errors.email.message : ""}</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <LoginRegisterPasswordInput errors={errors.password} label="Şifrə" icon="ic:outline-lock" register={register("password")} value={watch('password')} trigger={trigger} name="password" />
                            <p className="text-red-500  leading-4">{errors.password ? errors.password.message : ""}</p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <LoginRegisterPasswordInput errors={errors.confirmpassword} label="Şifrəni təkrarla" icon="ic:outline-lock" register={register("confirmpassword")} value={watch('confirmpassword')} trigger={trigger} name="confirmpassword" />
                            <p className="text-red-500  leading-4">{errors.confirmpassword ? errors.confirmpassword.message : ""}</p>
                        </div>
                    </div>
                    {serverError && <p className="text-red-500 text-sm mt-2">{serverError}</p>}
                    <LoginRegisterButton type="submit" text={`${loading ? 'Gözləyin...' : 'Qeydiyyatdan keç'}`} buttonClassName={`${loading ? 'disabled' : ''}w-full bg-qss-primary rounded-3xl  p-3 text-center text-white mt-3 `} />
                    <p className="w-full text-end text-qss-primary font-normal cursor-pointer my-3">Şifrəni unutmusunuz?</p>
                    <p className="text-center w-[405px]"> Hesabınız var? <Link to={{pathname:'/login'}} className='text-qss-primary'>Daxil olun</Link></p>
                </form>
            </div>
        </div>
    )
}

export default RegisterSection