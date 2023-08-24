import Select from "../../../components/Select";
import { IQuestionQuestion } from "../../../types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Radio from "../../../components/RadioInput";
import TextInput from "../../../components/TextInput";
import { Icon } from '@iconify/react';
import DateInput from "../../DateInput";
import { useEffect } from "react";
import { useAppDispatch } from "state/hooks";
import { addErrorsLength, addOption, addSelect } from "state/dataSlice";
type ExperienceAdd = {
  data: IQuestionQuestion[] | undefined;
  addExp: any;
  closeHandle: () => void;
  editData?: AddExpFormValues | undefined;
  editExp?: any;
  displayRadio: any;
  isAdding?: any;
  setIsAdding?: any;
  experiences?:any;
  setDisplayRadio?: any;
  setIsEditing?: any;
};

const schema = yup.object({
  id: yup.string(),
  haveExperience: yup.object({answer:yup.string().required(),weight:yup.string().optional().nullable()}).required(),
  company: yup.string().required(),
  profession: yup.string().required(),
  workingActivityForm: yup.object({ answer: yup.string().required(), weight: yup.string().required() }).required(),
  degreeOfProfes: yup.object({ answer: yup.string().required(), weight: yup.string().required() }).required(),
  startDate: yup.string().required(),
  currentWorking: yup.boolean(),
  endDate: yup.lazy((currrenWorking:any)=>{
    if(currrenWorking){
      return yup.string().optional()
    }
    return yup.string().required()
  })
  
});

export type AddExpFormValues = yup.InferType<typeof schema>;

const ExperienceAdd = ({
  data,
  addExp,
  editData,
  editExp,
  displayRadio,
  setDisplayRadio,
  isAdding,
  setIsAdding,
  setIsEditing,
  experiences
}: ExperienceAdd) => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
    trigger
  } = useForm<AddExpFormValues>({
    resolver:yupResolver<AddExpFormValues>(schema),
    defaultValues: editData,
  });
  const dispatch = useAppDispatch();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handleClick = () => {
    editExp ? editExp(watch()) : addExp(watch());
    dispatch(addSelect(true))
  };
  dispatch(addErrorsLength(Object.keys(errors).length ))
  useEffect(()=>{
    trigger()
    dispatch(addErrorsLength(Object.keys(errors).length ))
    
    
  },[watch("haveExperience"),watch("company"),watch("profession"),watch("workingActivityForm")
  ,watch("degreeOfProfes"),watch("startDate"),watch("endDate"),watch("currentWorking")])




  useEffect(()=>{
    dispatch(addOption(watch("haveExperience.answer")))
  },[watch("haveExperience")])

  useEffect(()=>{
    if(displayRadio===false){
      setValue('haveExperience.answer',"Bəli")
    }else{
      setValue('haveExperience.answer',"")
    }
  },[displayRadio])
  
  const inputProps = [
    { register: { ...register("haveExperience") } },
    { register: { ...register("company") } },
    { register: { ...register("profession") } },
    { register: { ...register("workingActivityForm") } },
    { register: { ...register("degreeOfProfes") } },
    { register: { ...register("startDate") } },
    { register: { ...register("endDate") } },
    { register: { ...register("currentWorking") } },
  ];
  const handleCheck = ()=>{
    if (watch("currentWorking")===false) {
      setValue("endDate","currently working")
    }else{
      setValue("endDate","")
    }
  }

  
  return (
    <div className="relative flex flex-col gap-2" onSubmit={onSubmit}>
      {displayRadio && (
        <div className="space-y-2">
          <label className="pl-2">{data?.[0].question_title}</label>
          <div className="flex gap-5">
           
              <Radio
                options={data?.[0]?.answers}
                value={watch("haveExperience")}
                register={inputProps[0].register}
                errors={errors.haveExperience}
                trigger={trigger}
              />
            
          </div>
        </div>
      )}
      {(displayRadio ? watch()?.haveExperience?.answer === "Bəli" : true) && (
        <>
          <TextInput
            label="Çalışdığınız müəssisənin adını qeyd edin.*"
            type="text"
            placeholder="QSS Analytics"
            register={inputProps[1].register}
            errors={errors.company}
           
          />
          <TextInput
            label="Vəzifənizi qeyd edin.*"
            type="text"
            placeholder="Product Manager"
            register={inputProps[2].register}
            errors={errors.profession}
          
          />
          <div className="flex gap-2.5">
            <Select
              label={data?.[2]?.question_title}
              options={data?.[2].answers}
              register={inputProps[3].register}
              value={watch()?.workingActivityForm}
              errors={errors.workingActivityForm}
              trigger={trigger}
            />
            <Select
              label={data?.[6]?.question_title}
              options={data?.[6].answers}
              register={inputProps[4].register}
              value={watch()?.degreeOfProfes}
              errors={errors.degreeOfProfes}
              trigger={trigger}
            />
          </div>
          <div className="flex gap-2.5">
            <DateInput
              label="İşə başlama tarixi:"
              type="date"
              register={inputProps[5].register}
              errors={errors.startDate}
            />
            <DateInput
              label="İşdən ayrılma tarixi:"
              type="date"
              register={inputProps[6].register}
              disabled={watch()?.currentWorking === true ? true : false}
              errors={errors.endDate}
            />
          </div>
          <label className="self-end">
            Hal hazırda çalışıram{" "}
            <input
              type="checkbox"
              onClick={handleCheck}
              {...inputProps[7].register}
            />
          </label>
          <button
            className="bg-qss-saveBtn px-12 py-2.5 items-center gap-1 font-medium text-white flex mt-2 mx-auto opacity-50 rounded-full hover:opacity-100 transition duration-500"
            type="submit"
            onClick={()=>{handleClick()}}
          >
            <span> Yadda saxla </span>
            <Icon icon="tabler:check" className="text-white" style={{fontSize:"25px"}}/>
          </button>
          {!displayRadio && (
            <button
              className="save py-2 px-4 w-40 h-10 rounded-2xl flex justify-evenly self-center bg-qss-secondary text-white"
              onClick={() => {
                isAdding ? setIsAdding() : setIsEditing();
                dispatch(addErrorsLength(0))
              }}
            >
              Siyahıya bax
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ExperienceAdd;
