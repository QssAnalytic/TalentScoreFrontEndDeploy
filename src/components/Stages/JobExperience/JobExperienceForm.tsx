import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";

import {
  useGetQuestionsQuery,
  useGetStageQuery,
} from "../../../services/stage";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { addErrorsLength, addPop, addRemove, addSelect } from "state/dataSlice";
import { updateStageForm } from "../../../state/stages/stageFormSlice";

import ExperienceAdd, { AddExpFormValues } from "./ExperienceAdd";
import { GeneralQuestionsFormProps } from "../Education/GeneralQuestionsForm";
import LinkButton from "../../LinkButton";
import ButtonSave from "components/ButtonSave";

import Experiences from "./Experiences";
import Radio from "components/RadioInput";

export type JobExperienceValues = {
  haveJobExperience: { answer: string; weight: string };
  experiences: [];
};

export interface JobExperienceListItemProps {
  item: AddExpFormValues[];
  index: number;
}

interface RootState {
  dataa: {
    removeFunc: boolean;
    acceptOption: string;
    errorsLength: number;
  };
}

const schema = yup.object({
  haveJobExperience: yup
    .object({
      answer: yup.string().required(),
      weight: yup.string().optional().nullable(),
    })
    .required(),
  experiences: yup.array().when("haveJobExperience", {
    is: (haveJobExperience: any) => haveJobExperience.answer !== "Yoxdur",
    then: () => yup.array().min(1).required(),
  }),
});

const JobExperienceForm = ({
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
  } = stagesData?.[3] || {};

  const { slug: prevSubSlugName, stage_name: prevSubStageName } =
    prevStageChildren?.[0] || {};

  const { slug: subSlugName } = stage_children?.[0] || {};

  const { slug: nextSubSlugName, stage_name: nextSubStageName } =
    nextStageChildren?.[0] || {};

  const {
    data: questionsData,
    error: questionsError,
    isLoading,
  } = useGetQuestionsQuery(subSlugName);

  const questions = questionsData?.[0]?.questions;

  const dispatch = useAppDispatch();

  const remove = useSelector((state: RootState) => state.dataa.removeFunc);
  const accept = useSelector((state: RootState) => state.dataa.acceptOption);
  const errLength = useSelector((state: RootState) => state.dataa.errorsLength);

  const [idd, setId] = useState(0);

  const [isAdding, setIsAdding] = useState(true);
  const [isEditing, setIsEditing] = useState<{
    edit: boolean;
    data?: AddExpFormValues;
  }>({ edit: false });

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const {
    handleSubmit,
    reset: parentReset,
    watch,
    setValue,
    register,
    formState: { errors },
    trigger,
  } = useForm<JobExperienceValues | any>({
    resolver: yupResolver(schema),
    defaultValues: {
      haveJobExperience: { answer: "", weight: "" },
      experiences: [],
    },
  });

  const onSubmit: SubmitHandler<JobExperienceValues> = (data) => {};

  const { formData } =
    (useAppSelector((state) => state.stageForm)?.find(
      ({ name }) => name === subStageSlug
    ) as { formData: JobExperienceValues | any }) || {};

  const handleAdd = (exp: any) => {
    const data = formData?.experiences;
    setValue("experiences", [...data, exp]);
    setIsAdding(false);
    setDisplayRadio(false);
  };

  const closeHandle = () => {
    setIsAdding(false);
    setIsEditing({ edit: false });
  };

  const editExp = (editExpData: AddExpFormValues) => {
    const data = formData?.experiences;
    const editedData = data?.map((exp: AddExpFormValues, index: number) => {
      if (index === editingIndex) {
        return editExpData;
      }
      return exp;
    });

    setValue("experiences", editedData);
    setIsEditing({ edit: false });
    setEditingIndex(null);
  };

  const handleRemove = (expIndex: number) => {
    dispatch(addPop(true));
    setId(expIndex);
    dispatch(addSelect(false));
  };

  const handleEdit = (expIndex: number) => {
    const data = formData?.experiences?.[expIndex] as AddExpFormValues;
    setEditingIndex(expIndex);
    setIsEditing({ edit: true, data });
  };

  if (remove === true) {
    const filterData =
      formData?.experiences &&
      formData?.experiences?.filter((_: any, index: number) => index !== idd);
    if (formData?.experiences?.length === 1) setIsAdding(true);
    setValue("haveJobExperience", { answer: "", weight: "" });
    setValue("experiences", filterData);
    dispatch(addRemove(false));
  }

  const [displayRadio, setDisplayRadio] = useState(true);

  useEffect(() => {
    const subscription = watch((value) => {
      trigger();
      dispatch(
        updateStageForm({
          name: subStageSlug,
          formData: value as JobExperienceValues,
        })
      );
    });

    parentReset(formData);

    return () => subscription.unsubscribe();
  }, [subStageSlug, watch]);

  return (
    <form
      className="mt-5 flex-col flex gap-5 "
      onSubmit={handleSubmit(onSubmit)}
    >
      {isAdding ? (
        <>
          <ExperienceAdd
            experiences={formData?.experiences}
            data={questions}
            addExp={handleAdd}
            closeHandle={closeHandle}
            isAdding={isAdding}
            setIsAdding={setIsAdding}
          />

          {formData?.experiences?.length === 0 && (
            <div className="">
              <label className="pl-2">{questions?.[0].question_title}</label>
              <div className="flex gap-5 w-48 py-2 px-4">
                <Radio
                  value={watch("haveJobExperience")}
                  register={register("haveJobExperience")}
                  options={questions?.[0].answers}
                  errors={errors.haveJobExperience}
                />
              </div>
            </div>
          )}
        </>
      ) : isEditing?.edit ? (
        <ExperienceAdd
          experiences={formData?.experiences}
          data={questions}
          addExp={handleAdd}
          editExp={editExp}
          closeHandle={closeHandle}
          editData={isEditing?.data}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <Experiences
            formData={formData}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
            setIsAdding={setIsAdding}
          />
        </>
      )}

      <LinkButton
        nav={{
          state: { stageName: prevStageName, subStageName: prevSubStageName },
          path: { slugName: prevSlugName, subSlugName: prevSubSlugName },
        }}
        type="outline"
        onClick={() => dispatch(addErrorsLength(0))}
        label="Geri"
        className="absolute left-0 -bottom-20"
      />
      {errLength === 0 ||
      accept === "Xeyr" ||
      formData?.experiences?.length > 0 ||
      Object.keys(errors).length === 0 ? (
        <LinkButton
          onClick={() => dispatch(addSelect(false))}
          nav={{
            state: { stageName: nextStageName, subStageName: nextSubSlugName },
            path: { slugName: nextSlugName, subSlugName: nextSubSlugName },
          }}
          label="Növbəti"
          className="absolute right-0 -bottom-20"
        />
      ) : (
        <ButtonSave
          trigger={trigger}
          label="Növbəti"
          className="absolute right-0 -bottom-20"
          onClick={() => dispatch(addSelect(true))}
        />
      )}
    </form>
  );
};

export default JobExperienceForm;
