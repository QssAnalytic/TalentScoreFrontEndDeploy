import { useEffect, useState } from "react";
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
import ClockLoader from "react-spinners/ClockLoader";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonSave from "components/ButtonSave";
import { addErrorsLength, addSelect } from "state/dataSlice";

export type SpecialSkillsFormValues = {
  haveSpecialSkills: { answer: string; weight: string };
  specialSkills: string[];
  levelSkill: string;
  certSkill: "";
  ameturs: [];
  professionals: [];
};

const schema = yup.object().shape({
  haveSpecialSkills: yup
    .object({
      answer: yup.string().required(),
      weight: yup.string().optional().nullable(),
    })
    .required(),
  specialSkills: yup.array().when("haveSpecialSkills", {
    is: (haveSpecialSkills: any) => haveSpecialSkills.answer !== "Yoxdur",
    then: () => yup.array().min(1).required(),
  }),
  levelSkill: yup.string(),
  certSkill: yup.string(),
});

type DynamicFields = {
  [fieldName: string]: {
    schema: yup.ObjectSchema<any>;
  };
};

const SpecialSkillsForm = ({
  stageIndex,
  subStageSlug,
}: GeneralQuestionsFormProps) => {
  const { data: stagesData } = useGetStageQuery();

  const { stage_children } = stagesData?.[stageIndex] || {};
  const { formData } =
    (useAppSelector((state) => state.stageForm)?.find(
      ({ name }) => name === subStageSlug
    ) as { formData: SpecialSkillsFormValues }) || {};

  const {
    slug: nextSlugName,
    stage_name: nextStageName,
    stage_children: nextStageChildren,
  } = stagesData?.[stageIndex] || {};

  const {
    slug: nextSlugNameCond,
    stage_name: nextStageNameCond,
    stage_children: nextStageChildrenCond,
  } = stagesData?.[3] || {};
  const { slug: nextSubSlugNameCond, stage_name: nextSubStageNameCond } =
    nextStageChildrenCond?.[0] || {};
  const {
    slug: prevSlugName,
    stage_name: prevStageName,
    stage_children: prevStageChildren,
  } = stagesData?.[1] || {};

  const { slug: prevSubSlugName, stage_name: prevSubStageName } =
    prevStageChildren?.[0] || {};

  const { slug: subSlugName } = stage_children?.[0] || {};

  const { slug: nextSubSlugName, stage_name: nextSubStageName } =
    nextStageChildren?.[1] || {};

  const {
    data: questionsData,
    error: questionsError,
    isLoading,
  } = useGetQuestionsQuery(subSlugName);

  const dispatch = useAppDispatch();
  let skillErr: any = false;
  const [dynamicFields, setDynamicFields] = useState<DynamicFields>({});

  const addDynamicField = (fieldName: string) => {
    setDynamicFields((prevDynamicFields) => ({
      ...prevDynamicFields,
      [fieldName]: {
        schema: yup
          .object()
          .shape({
            answer: yup.string().required(),
            weight: yup.string().optional().nullable(),
          })
          .required(`${fieldName} is required`),
      },
    }));
  };

  const removeDynamicField = (fieldName: string) => {
    setDynamicFields((prevDynamicFields) => {
      const updatedFields = { ...prevDynamicFields };
      delete updatedFields[fieldName];
      return updatedFields;
    });
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

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<SpecialSkillsFormValues | any>({
    resolver: yupResolver(dynamicSchema),
    defaultValues: {
      haveSpecialSkills: { answer: "", weight: "" },
      specialSkills: [],
      levelSkill: "",
      certSkill: "",
    },
  });

  const onSubmit: SubmitHandler<SpecialSkillsFormValues> = (data) => {
    console.log("submitData", data);
  };

  useEffect(() => {
    const subscription = watch((value) => {
      trigger();
      dispatch(
        updateStageForm({
          name: subStageSlug,
          formData: value as SpecialSkillsFormValues,
        })
      );
    });
    reset(formData);
    return () => subscription.unsubscribe();
  }, [subStageSlug, watch]);

  useEffect(() => {
    trigger();
  }, [watch("specialSkills"), dynamicFields]);

  useEffect(() => {
    if (formData?.haveSpecialSkills?.answer === "Yoxdur") {
      reset({
        haveSpecialSkills: { answer: "Yoxdur", weight: null },
        specialSkills: [],
        levelSkill: "",
        certSkill: "",
      });
    }
  }, [formData?.haveSpecialSkills?.answer]);

  useEffect(() => {
    if (formData?.specialSkills?.length === 1) {
      setValue("haveSpecialSkills", { answer: "Var", weight: null });
    } else if (
      formData?.specialSkills?.length === 0 &&
      formData.haveSpecialSkills.answer === "Var"
    ) {
      setValue("haveSpecialSkills", { answer: "", weight: null });
    }
    if (formData?.specialSkills?.length > 0) {
      formData?.specialSkills.map((item) => addDynamicField(item));
    }
  }, [formData?.specialSkills?.length]);

  if (isLoading)
    return (
      <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
        <ClockLoader color="#038477" />
      </div>
    );
  if (questionsError) return <div>Error</div>;

  const questions = questionsData?.[0]?.questions;

  const inputProps = [
    { register: register("haveSpecialSkills") },
    { register: register("specialSkills") },
    { register: register("levelSkill") },
    { register: register("certSkill") },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-7 flex-col flex gap-5"
    >
      <div className="space-y-7">
        <div className="space-y-2">
          <label className="pl-2">{questions?.[1]?.question_title}*</label>
          <div className="flex gap-5">
            <div className="w-[70%]">
              <SelectMult
                value={formData?.specialSkills}
                options={questions?.[1]?.answers}
                register={inputProps[1].register}
                placeholder={"Xüsusi bacarığını seç"}
                trigger={trigger}
                errors={errors.specialSkills}
              />
            </div>
            {
              <Radio
                options={questions?.[0]?.answers}
                value={formData?.haveSpecialSkills}
                register={inputProps[0].register}
                errors={errors.haveSpecialSkills}
                trigger={trigger}
              />
            }
          </div>
        </div>

        <>
          {formData?.specialSkills?.length > 0 ? (
            <div className="space-y-2 animate-fade-in">
              <label className="pl-2">{questions?.[2]?.question_title}*</label>
              <div className="flex gap-5 flex-col">
                {formData?.specialSkills?.map((item, idx) => {
                  if (errors) {
                    skillErr = Object.keys(errors)
                      .filter((key) => key === item)
                      .toString();
                  }

                  return (
                    <div
                      key={idx}
                      className="flex justify-between animate-fade-in w-full gap-4"
                    >
                      <div className="py-2 px-2 gap-1 rounded-full whitespace-nowrap bg-qss-input flex justify-center items-center w-64">
                        <span className="w-3/4 flex justify-center">
                          {item}
                        </span>
                        <XCircleIcon
                          onClick={() => {
                            setValue(
                              "specialSkills",
                              formData?.specialSkills?.filter(
                                (specialSkill) => specialSkill !== item
                              )
                            );
                            setValue(`${item}`, undefined);
                            removeDynamicField(item);
                            console.log(item);
                          }}
                          className="w-5 h-5 text-red-400 cursor-pointer"
                        />
                      </div>
                      <div className="flex  w-full justify-between">
                        <Radio
                          options={questions?.[2]?.answers}
                          value={watch(item)}
                          register={register(item)}
                          errors={skillErr}
                          trigger={trigger}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </>
      </div>
      {watch("haveSpecialSkills.answer") === "Yoxdur" ? (
        <LinkButton
          nav={{
            state: {
              stageName: nextStageNameCond,
              subStageName: nextSubStageNameCond,
            },
            path: {
              slugName: nextSlugNameCond,
              subSlugName: nextSubSlugNameCond,
            },
          }}
          label="Növbəti"
          className="absolute right-0 -bottom-20"
        />
      ) : Object.keys(errors).length !== 0 ? (
        <ButtonSave
          trigger={trigger}
          className="absolute right-0 -bottom-20"
          label="Növbəti"
          onClick={() => dispatch(addSelect(true))}
        />
      ) : (
        <LinkButton
          nav={{
            state: { stageName: nextStageName, subStageName: nextSubStageName },
            path: { slugName: nextSlugName, subSlugName: nextSubSlugName },
          }}
          label="Növbəti"
          className="absolute right-0 -bottom-20"
          onClick={() => dispatch(addSelect(false))}
        />
      )}

      <LinkButton
        nav={{
          state: { stageName: prevStageName, subStageName: prevSubStageName },
          path: { slugName: prevSlugName, subSlugName: prevSubSlugName },
        }}
        onClick={() => dispatch(addErrorsLength(0))}
        type="outline"
        label="Geri"
        className="absolute left-0 -bottom-20"
      />
    </form>
  );
};

export default SpecialSkillsForm;
