
import  { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Icon } from "@iconify/react";
import { useSelector } from 'react-redux';

import Radio from "../../../RadioInput";
import Select from "../../../Select";
import TextInput from "../../../TextInput";

import DateInput from "components/DateInput";
import SelectMult from "components/SelectMult";

import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { addData, addElave, addTehsilPage } from "state/dataSlice";
import { EducationQuestionsFormValues } from '../EducationQuestionsForm';
import { IQuestionQuestion } from "types";
import SelectSearch from "components/SelectSearch";
interface RootState {
  dataa: {
    tehsil:string,
    elave:boolean
  };
}
interface Copy {
  id:number,
  country: any,
  university: string,
  specialty: any,
  local:any,
  tehsil:any,
  date: any,
  criterian:any,
  criteria: {
    criterion_type:any,
    lokal_test:any,
    application:[
      {
        application_type:string,
        score:any
      },
      {
        application_type:string,
        language_type:[
          {
            language_name:string,
            language_score:any
          },
          {
              language_name:string,
              language_score:any     
          }
        ]
      },
      {
        application_type:string,
        score:any
      },
      {
        other_test:any
      } 
    ]
  },
}
const schema = yup
  .object({
    id: yup.number().required(),
    tehsil:yup.object({ answer: yup.string().required(), weight: yup.string().required() }).required(),
    country: yup.object({ answer: yup.string().required(), weight: yup.string().required() }).required(),
    university: yup.string().required(),
    specialty: yup.object({ answer: yup.string().required(), weight: yup.string().required() }).required(),
    date: yup.object({ start: yup.string().required(), end: yup.string().required() }).required(),
    criterian: yup.object({
      answer: yup.string().required(),
      weight:yup.string().required()
    }).required(),
    local: yup.object({
      examName: yup.string().required(),
      score: yup.string().required(),
      maxScore: yup.string().required(),
    }).required(),
    Att: yup.string().optional(),
    SAT:yup.string().optional(),
    otherExam:yup.object({name:yup.string().optional(),    
      score: yup.string().optional(),
      maxScore: yup.string().optional(),}).optional(),
  ielts:yup.string().optional(),
  toefl:yup.string().optional(),
  currentWorking:yup.boolean().optional(),
    application: yup.array().optional()
  })
  .required();

export type AddEduFormValues = yup.InferType<typeof schema>;
type EducationAdd = {
  name:string,
  questions:IQuestionQuestion[] |undefined,
  formData:EducationQuestionsFormValues,
  handleAddEdu: (eduData:AddEduFormValues) => void
};
const FormEducations = ({questions,formData,handleAddEdu,name}:EducationAdd) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AddEduFormValues>({
    defaultValues:{
      id:0,
      tehsil:{answer:"", weight:""},
      country: {answer:"", weight:""},
      university:"",
      specialty: {answer:"", weight:""},
      date:{start:"",end:""},
      criterian: {answer:"",weight:""},
      local: {examName:"",score:"",maxScore:""},
      Att: "",
      SAT:"",
      otherExam:{name:"",score:"",maxScore:""},
    ielts:"",
    toefl:"",
    application: []
    }
  });
  
  const [other,setOther] = useState(false)
  const dispatch: Dispatch = useDispatch();
  const [end,setEnd] = useState(false)
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  const tehsil= useSelector((state: RootState) => state.dataa.tehsil);
  const elave= useSelector((state: RootState) => state.dataa.elave);
  const [ count,setCount] = useState(0)
  const copy:Copy = {
    id:formData.education.length+1,
    country: watch().country,
    university: watch().university,
    specialty: watch().specialty,
    date: watch().date,
    local:undefined,
    tehsil:undefined,
    criterian:undefined,
    criteria: {
      criterion_type:watch().criterian,
      lokal_test:watch().local,
      application:[
        {
          application_type:"Atestat",
          score:watch().Att
        },
        {
          application_type:"language",
          language_type:[
            {
              language_name:"IELTS",
              language_score:watch().ielts
            },
            {
              
                language_name:"TOFEL",
                language_score:watch().toefl
              
            }
          ]
        },
        {
          application_type:"SAT",
          score:watch().SAT
        },
        {
          other_test:watch().otherExam
        }
       
      ]
    },
  }
  const handleDelete =useCallback((elem:any)=>{
    const copyy  = watch("application")?.indexOf(elem)
    if (copyy !==-1) {
      watch("application")?.splice(copyy as number,1)
    }

    setCount(count+1)
  },[count])
  console.log(questions);
  
  const handleClick=()=>{
    if (tehsil!==name) {
      handleAddEdu(copy)
      dispatch(addTehsilPage(1))
      
    }else{
      handleAddEdu(copy)
      dispatch(addElave(true))
      dispatch(addData(1))
    }

  }

  console.log(watch());
  const handleEndDate = ()=>{
      setEnd(!end)
      setValue("date.end","Hazırda çalışıram")
  }
  return (
    <div className="h-[460px] overflow-y-scroll">
      {
        elave ===true && formData?.education.length!==0?<Select register={register("tehsil")} label={`${formData.education.length + 1}-ci Təhsilinizi qeyd edin`} options={[
          {
            id: 10,
            answer_title: "Peşə təhsili",
            stage_fit:"",
            answer_weight: null,
            answer_dependens_on: null
        },
        {
          id: 11,
          answer_title: "Bakalavr",
          stage_fit:"",
          answer_weight: null,
          answer_dependens_on: null
      },{
        id: 12,
        answer_title: "Magistratura",
        stage_fit:"",
        answer_weight: null,
        answer_dependens_on: null
    },{
      id: 13,
      answer_title: "PhD",
      stage_fit:"",
      answer_weight: null,
      answer_dependens_on: null
  }]}/>:null
      }
      <div className="mb-5 mt-3">
        <label><span style={{color:'#038477'}}>{elave===true? watch("tehsil").answer:name}-</span>{ `${questions?.[0]?.question_title}`}</label>
        <SelectSearch
        defaultValue="Ölkə"
        label=""
          options={questions?.[0]?.answers}
          value={watch("country")}
          register={register("country")}
          />
      </div>
      <div className="mb-5">
      <TextInput
          label={tehsil==="Peşə təhsili"?"Kollecin adı ":questions?.[1]?.question_title}
          placeholder="ADNSU"
          value={watch().university}
          register={register("university")}
        />
      </div>
      <div className="mb-5">
      <SelectSearch
        label={questions?.[2]?.question_title}
        defaultValue="İnformasiya Texnologiyaları"
          options={questions?.[2]?.answers}
          value={watch("specialty")}
          register={register("specialty")}
          />
      </div>


        
        <div className="flex  items-center gap-3 mb-3">
        <DateInput
        label={tehsil==="Peşə təhsili"?"Kollecə qəbul olma tarixi ":"Universitetə  qəbul olma tarixi"}
        type="date"
        register={register("date.start")}/>
        <DateInput
        label={tehsil==="Peşə təhsili"?"Kolleci bitirmə tarixi ":"Universiteti  bitirmə tarixi"}
        type="date"
        register={register("date.end")}
        disabled={end===true?true:false}
        />
        </div>
        <div className="flex w-full justify-end">   
      <label className="self-end">
            Hal hazırda çalışıram{" "}
            <input
              type="checkbox"
              onClick={handleEndDate}
            />
          </label></div>
        <label className="mt-5">{questions?.[4]?.question_title}</label>
        <div className="flex items-center justify-between mt-3 mb-3">
            
                    <Radio value={watch().criterian}  options={questions?.[4]?.answers}  register={register("criterian")}/>

            
        </div>
        {
          watch()?.criterian?.answer === 'Lokal imtahan'?
            <div>
                <label>
        {questions?.[5]?.question_title}
    
        </label>
        <div className="flex gap-5">
            <div className="w-4/4">
            <TextInput 
            placeholder="Imtahan"
            register={register("local.examName")}
        />
            </div>
               <TextInput 
            placeholder="bal"
            register={register("local.score")}
                 />
               <TextInput 
            placeholder="max bal"
            register={register("local.maxScore")}
        />
        </div>
            </div>
          :null
        }
        {
          watch()?.criterian?.answer === 'Müraciyyət'?
            <div>
               <label>{questions?.[6]?.question_title}</label>
        <div className="flex">
            <div className="w-8/12">
            <SelectMult 
            options={questions?.[6]?.answers}
            label=""
            placeholder='Attestat - GPA'
            register={register("application")}
            />
            </div>
            <button className="ms-5  rounded-full bg-qss-input px-[30px] transition duration-500   py-[2px] hover:text-qss-secondary"  onClick={()=> setOther(!other)}>Əlavə et +</button>
        </div>
        
            </div>
          :null
        }
       {
        watch()?.criterian?.answer ==='Hər ikisi'?
        <div>
            <label>
        {questions?.[5]?.question_title}
    
        </label>
        <div className="flex gap-5">
            <div className="w-4/4">
            <TextInput 
            placeholder="Imtahan"
            register={register("local.examName")}
        />
            </div>
               <TextInput 
            placeholder="bal"
            register={register("local.score")}
                 />
               <TextInput 
            placeholder="max bal"
            register={register("local.maxScore")}
        />
        </div>
        <label>{questions?.[6]?.question_title}</label>
        <div className="flex">
            <div className="w-8/12 ">
            <SelectMult 
            options={questions?.[6]?.answers}
            placeholder='Attestat - GPA'
            label=""
            register={register("application")}
            />
            </div>
            <button className="ms-5  rounded-full bg-qss-input px-[30px] transition duration-500  hover:text-qss-secondary" onClick={()=> setOther(!other)}>Əlavə et +</button>
        </div>
        
        </div>
        
        :null
       }
       {
        watch()?.criterian?.answer ==='Hər ikisi' || watch()?.criterian?.answer === 'Müraciyyət'?
        <div>
          {
            watch("application")?.map((elem,index)=>(
              <div key={index} className={`${elem}`}>
                 <div className={` border rounded-xl p-5 mt-5 `}>
              <div className="flex justify-between  mb-3">
                <label><span style={{color:'#038477'}}>{elem}</span> üzrə, nəticəni qeyd edin</label>
                <Icon
          icon="typcn:delete-outline"
          className="cursor-pointer text-2xl text-[#EE4A4A]/75 hover:text-[#EE4A4A]" onClick={()=> handleDelete(elem)} />
              </div>
              {
                elem==='Language test (IELTS TOEFL)'?
                <div> <div className="mb-5">
                <TextInput  placeholder='İELTS Nəticə' register={register("ielts")}/>
            </div>
            <TextInput   placeholder='TOEFL Nəticə' register={register("toefl")}/></div>:     
            <TextInput   placeholder='Nəticə' register={register(elem.substr(0, 3))}/>
              }
         
              </div>
              </div>
             
            ))
          }
        </div>:null
       }
       {
        other? <div className="border rounded-xl p-5 mt-5">
        <div className="flex justify-between  mb-3">
            <label>Seçdiyiniz imtahanın adını,balınızı və max.bal qeyd edin</label>
            <Icon
          icon="typcn:delete-outline"
          className="cursor-pointer text-2xl text-[#EE4A4A]/75 hover:text-[#EE4A4A]" onClick={()=> setOther(false)} />
        </div>
        <div className="flex gap-3">        
        <div className="w-3/4">
        <TextInput  placeholder='Testin adı' register={register("otherExam.name")}/>   </div>        
                     
                <TextInput  placeholder='Balınız' register={register("otherExam.score")}/>

        <TextInput  placeholder='Maksimal Bal' register={register("otherExam.maxScore")}/>
        </div>
</div>:null
       }
       <div className="w-full flex items-center justify-center mt-5">
         <button onClick={handleClick} className="bg-qss-saveBtn px-12 py-2.5 items-center gap-1 font-medium text-white flex mt-5 mx-auto opacity-50 rounded-full hover:opacity-100 transition duration-500">Yadda saxla <Icon icon="tabler:check" className="text-white" style={{fontSize:"25px"}}/></button>
       </div>
        
    </div>
  );
};

export default FormEducations;