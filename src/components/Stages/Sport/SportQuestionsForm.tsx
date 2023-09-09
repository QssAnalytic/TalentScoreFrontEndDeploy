import { Fragment, useCallback, useEffect, useState } from "react";
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
import { Icon } from "@iconify/react";
import SelectMult from "../../SelectMult";
import * as yup from "yup";
import ClockLoader from "react-spinners/ClockLoader";
import SportLevels from "./components/SportLevels";
import { ISelectedValue } from "types";
import { yupResolver } from "@hookform/resolvers/yup";
import { addErrorsLength, addSelect } from "state/dataSlice";
import { useSelector } from "react-redux";
import ButtonSave from "components/ButtonSave";

const schema = yup
  .object({
    sport: yup
      .object({
        answer: yup.string().required(),
        weight: yup.string().optional().nullable(),
      })
      .required(),
    whichSport: yup.array().when("sport", {
      is: (sport: any) => sport.answer !== "Yoxdur",
      then: () => yup.array().min(1).required(),
    }),
    professionals: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required(),
          level: yup
            .object()
            .shape({
              answer: yup.string().required(),
              weight: yup.string().optional().nullable(),
            })
            .required(),
          whichScore: yup
            .object({
              answer: yup.string().optional().nullable(),
              weight: yup.string().optional().nullable(),
            })
            .optional(),
          whichPlace: yup
            .object({
              answer: yup.string().optional().nullable(),
              weight: yup.string().optional().nullable(),
            })
            .optional(),
        })
      )
      .optional(),
    amateurs: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required(),
          level: yup.object().shape({
            answer: yup.string().required(),
            weight: yup.string().optional().nullable(),
          }),
        })
      )
      .required(),
  })
  .required();

interface RootState {
  dataa: {
    errorsLength: number;
  };
}

export type SportFormValues = yup.InferType<typeof schema>;

export interface IItem {
  name: string;
  level: ISelectedValue;
  whichScore: ISelectedValue;
  whichPlace: ISelectedValue;
}

const SportForm = ({ stageIndex, subStageSlug }: GeneralQuestionsFormProps) => {
  const { data: stagesData } = useGetStageQuery();
  const errLengt = useSelector((state: RootState) => state.dataa.errorsLength);
  const { stage_children } = stagesData?.[stageIndex] || {};

  const {
    slug: nextSlugName,
    stage_name: nextStageName,
    stage_children: nextStageChildren,
  } = stagesData?.[stageIndex] || {};

  const {
    slug: nextSlugNameCond,
    stage_name: nextStageNameCond,
    stage_children: nextStageChildrenCond,
  } = stagesData?.[4] || {};

  const {
    slug: prevSlugName,
    stage_name: prevStageName,
    stage_children: prevStageChildren,
  } = stagesData?.[2] || {};

  const { slug: prevSubSlugName, stage_name: prevSubStageName } =
    prevStageChildren?.[1] || {};

  const { slug: subSlugName } = stage_children?.[0] || {};
  const { slug: nextSubSlugName, stage_name: nextSubStageName } =
    nextStageChildren?.[1] || {};
  const { slug: nextSubSlugNameCond, stage_name: nextSubStageNameCond } =
    nextStageChildrenCond?.[0] || {};
  const {
    data: questionsData,
    error: questionsError,
    isLoading,
  } = useGetQuestionsQuery(subSlugName);
  const dispatch = useAppDispatch();

  const { formData } =
    (useAppSelector((state) => state.stageForm)?.find(
      ({ name }) => name === subStageSlug
    ) as { formData: SportFormValues & any }) || ({} as any);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<SportFormValues>({
    resolver: yupResolver<SportFormValues>(schema),
    defaultValues: {
      sport: {},
      whichSport: [],
      professionals: [],
      amateurs: [],
    },
  });

  const onSubmit: SubmitHandler<SportFormValues> = (data) => console.log(data);
  useEffect(() => {
    const subscription = watch((value) => {
      trigger();
      dispatch(
        updateStageForm({
          name: subStageSlug,
          formData: value as SportFormValues,
        })
      );
    });
    reset(formData);

    return () => subscription.unsubscribe();
  }, [subStageSlug, watch]);

  const [count, setCount] = useState(false);

  console.log(errors);

  useEffect(() => {
    setCount(!count);
    if (formData?.sport?.answer === "Yoxdur") {
      reset({
        ...formData,
        whichSport: [],
        professionals: [],
        amateurs: [],
      });
    }
  }, [formData?.sport?.answer]);

  useEffect(() => {
    setCount(!count);
    if (watch("whichSport")?.length !== 0) {
      reset({
        ...formData,
        sport: { answer: "Var", weight: null },
      });
    }
    if (watch("whichSport")?.length === 0 && watch("sport.answer") === "Var") {
      setValue("sport", { answer: "", weight: null });
    }
  }, [formData?.whichSport?.length]);

  if (isLoading)
    return (
      <div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
        <ClockLoader color="#038477" />
      </div>
    );
  if (questionsError) return <div>Error</div>;

  const selectedLevel = (item: IItem) => {
    const amateurs = watch().amateurs || [];
    const professionals = watch().professionals || [];
    const isAmatExist = amateurs.some((i) => item.name === i.name);
    const isProExist = professionals.some((i) => item.name === i.name);

    if (item.level?.answer === "Həvəskar" && !isAmatExist) {
      setValue("amateurs", [...amateurs, item]);
      if (isProExist) {
        setValue(
          "professionals",
          professionals.filter((i) => item.name !== i.name)
        );
      }
    } else if (item.level?.answer === "Peşəkar" && !isProExist) {
      setValue("professionals", [...professionals, item]);
      if (isAmatExist) {
        setValue(
          "amateurs",
          amateurs.filter((i) => item.name !== i.name)
        );
      }
    }
  };

  const questions = questionsData?.[0]?.questions;

  const inputProps = [
    { register: register("sport") },
    { register: register("whichSport") },
  ];

  console.log(errLengt);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-7 flex-col flex gap-5"
    >
      <div className="space-y-7 ">
        <div className="space-y-2">
          <label className="pl-2">{questions?.[1]?.question_title}*</label>
          <div className="flex items-center gap-5">
            <div className="w-[70%]">
              <SelectMult
                placeholder="Idman növü"
                options={questions?.[1]?.answers}
                register={inputProps[1].register}
                value={formData?.whichSport}
                errors={errors.whichSport}
              />
            </div>
            <Radio
              options={questions?.[0]?.answers}
              value={formData?.sport}
              register={inputProps[0].register}
              errors={errors.sport}
              trigger={trigger}
            />
          </div>
        </div>
        <div className="pr-2 max-h-[230px] overflow-y-auto">
          {formData?.whichSport?.length !== 0 && (
            <label>{questions?.[2]?.question_title}</label>
          )}

          {formData?.whichSport?.map((item: string, index: number) => (
            <Fragment key={index}>
              <SportLevels
                item={item}
                selectedLevel={selectedLevel}
                questions={questions}
                subStageSlug={subStageSlug}
                index={index}
              />
            </Fragment>
          ))}
        </div>
      </div>

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
      {errLengt !== 0 || Object.keys(errors)?.length !== 0 ? (
        <ButtonSave
          label="Növbəti"
          className="absolute right-0 -bottom-20"
          onClick={() => dispatch(addSelect(true))}
        />
      ) : formData?.professionals?.length === 0 ? (
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
          onClick={() => dispatch(addSelect(false))}
          label="Növbəti"
          className="absolute right-0 -bottom-20"
        />
      ) : (
        <LinkButton
          nav={{
            state: { stageName: nextStageName, subStageName: nextSubStageName },
            path: { slugName: nextSlugName, subSlugName: nextSubSlugName },
          }}
          label="Növbəti"
          onClick={() => dispatch(addSelect(false))}
          className="absolute right-0 -bottom-20"
        />
      )}
    </form>
  );
};

export default SportForm;
