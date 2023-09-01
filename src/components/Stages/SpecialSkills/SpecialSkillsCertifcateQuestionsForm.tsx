import { Key, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetQuestionsQuery,
  useGetStageQuery,
} from "../../../services/stage";
import Radio from "../../RadioInput";
import LinkButton from "../../LinkButton";
import { updateStageForm } from "../../../state/stages/stageFormSlice";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { GeneralQuestionsFormProps } from "../Education/GeneralQuestionsForm";
import SelectMult from "components/SelectMult";
import { XCircleIcon } from "@heroicons/react/24/outline";
import TextInput from "components/TextInput";
import ClockLoader from 'react-spinners/ClockLoader'
import { useState } from "react";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import { addErrorsLength, addSelect } from "state/dataSlice";
import ButtonSave from "components/ButtonSave";
const schema  = yup.object({

})
type DynamicFields = {
  [fieldName: string]: {
    schema: yup.StringSchema<any>;
  };
};
const SpecialSkillsCertifcateQuestionsForm = ({
  stageIndex,
  subStageSlug,
}: GeneralQuestionsFormProps) => {
  const { data: stagesData } = useGetStageQuery();

  const { stage_children } = stagesData?.[stageIndex] || {};

  const {
    slug: nextSlugName,
    stage_name: nextStageName,
    stage_children: nextStageChildren,
  } = stagesData?.[stageIndex + 1] || {};

  const {
    slug: prevSlugName,
    stage_name: prevStageName,
    stage_children: prevStageChildren,
  } = stagesData?.[2] || {};
 
  const { slug: prevSubSlugName, stage_name: prevSubStageName } =
    prevStageChildren?.[0] || {};

  const { slug: subSlugName } = stage_children?.[1] || {};

  const { slug: nextSubSlugName, stage_name: nextSubStageName } =
    nextStageChildren?.[0] || {};

  const {
    data: questionsData,
    error: questionsError,
    isLoading,
  } = useGetQuestionsQuery(subSlugName);

  const dispatch = useAppDispatch();

  const { formData } =
    (useAppSelector((state) => state.stageForm)?.find(
      ({ name }) => name === subStageSlug
    ) as { formData: any }) || {};

  const { formData: prevFormData } =
    (useAppSelector((state) => state.stageForm)?.find(
      ({ name }) => name === prevSubSlugName
    ) as { formData: any }) || {};
    const [dynamicFields, setDynamicFields] = useState<DynamicFields>({});

  
    const addDynamicField =  (fieldName: string) => {
      setDynamicFields((prevDynamicFields) => ({
        ...prevDynamicFields,
        [fieldName]: {
          schema: yup
            .string()
            .required(`${fieldName} is required`),
        },
      }));
    };
  
    const dynamicSchema = yup.object().shape({
      ...schema.fields,
      ...Object.fromEntries(
        Object.entries(dynamicFields).map(([fieldName, field]) => [
          fieldName,
          field.schema,
        ])
      ),
    
    });
  const { register, handleSubmit, watch, reset, formState: { errors }, trigger } = useForm<any>({
    resolver:yupResolver(dynamicSchema),
    defaultValues: {},
  });
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  useEffect(()=>{
     if(dynamicFields){
      trigger()
     }
     
  },[dynamicFields])
  useEffect(() => {
    const subscription = watch((value) => {
      prevFormData?.specialSkills?.map(async(i: string) => {
        if (prevFormData[i].answer === 'Peşəkar')  {
           addDynamicField(`${i.toLowerCase()}Certifcate`)
          trigger()
        }
      })
     
      dispatch(
        updateStageForm({
          name: subStageSlug,
          formData: value as any,
        })
      );
    });

    reset(formData);

    return () => subscription.unsubscribe();
  }, [subStageSlug, watch]);


  if (isLoading) return <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2"><ClockLoader color="#038477" /></div>;
  if (questionsError) return <div>Error</div>;

  const questions = questionsData?.[0]?.questions;

  const arrName: any = []
  function DisplayMap() {
    prevFormData?.specialSkills?.map((i: string) => {
      if (prevFormData[i].answer === 'Peşəkar') {
        arrName.push(i)
       
      }
    })
  }
  DisplayMap()
  let skillErr: any = false
  console.log(errors);
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-7 flex-col flex gap-5"
    >
      <div className="space-y-7">
        <div className="space-y-2">
          <div className="flex flex-col gap-5">
            {arrName?.map(
              (specialSkill: string, idx: Key | null | undefined) => {
              
                if (errors) {
                  skillErr = Object.keys(errors)
                    .filter((key) => key === `${specialSkill.toLowerCase()}Certifcate`)
                    .toString();
                    
                    
                }
                return (
                  < TextInput
                    key={idx}
                    value={watch()}
                    errors={skillErr}
                    label={`${specialSkill} ${questions?.[3]?.question_title
                      .split(" ")
                      .slice(1)
                      .join(" ")}*`}
                    register={register(`${specialSkill.toLowerCase()}Certifcate`)}
                  />
                )
              }
            )}
          </div>
        </div>
      </div>
             
      <LinkButton
        nav={{
          state: { stageName: prevStageName, subStageName: prevSubStageName },
          path: { slugName: prevSlugName, subSlugName: prevSubSlugName },
        }}
        type="outline"
        onClick={()=>dispatch(addErrorsLength(0))}
        label="Geri"
        className="absolute left-0 -bottom-20"
      />
      {
        (Object.keys(errors).length !==0) ?  <ButtonSave label="Növbəti"
        className="absolute right-0 -bottom-20" onClick={()=>dispatch(addSelect(true))}/>:      <LinkButton
        nav={{
          state: { stageName: nextStageName, subStageName: nextSubStageName },
          path: { slugName: nextSlugName, subSlugName: nextSubSlugName },
        }}
        onClick={()=> dispatch(addSelect(false))}
        label="Növbəti"
        className="absolute right-0 -bottom-20"
      />
      }
    


    </form>
  );
};

export default SpecialSkillsCertifcateQuestionsForm;
