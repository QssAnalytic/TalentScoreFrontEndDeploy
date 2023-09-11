import { Icon } from "@iconify/react";
import Select from "components/Select";
import { useCallback, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "state/hooks";
import { updateStageForm } from "state/stages/stageFormSlice";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { addErrorsLength } from "state/dataSlice";

export type IProItem = {
  item?: any;
  index: number;
  questions: any;
  handleRemoveItem: any;
  subStageSlug?: string;
  SportFormData: any;
};

const schema = yup
  .object({
    name: yup.string().required(),
    level: yup.object({
      answer: yup.string().required(),
      weight: yup.string().required(),
    }),
    whichScore: yup.object({
      answer: yup.string().required(),
      weight: yup.string().required(),
    }),
    whichPlace: yup.object({
      answer: yup.string().required(),
      weight: yup.string().required(),
    }),
  })
  .required();

export type SportLevelValues = yup.InferType<typeof schema>;

const ProLevel = ({
  item,
  index,
  questions,
  handleRemoveItem,
  subStageSlug,
  SportFormData,
}: IProItem) => {
  const dispatch = useAppDispatch();

  const {
    register,
    watch,
    setValue,
    control,
    trigger,
    formState: { errors },
  } = useForm<SportLevelValues>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  useEffect(() => {
    const subscription = watch((value) => {
      trigger();
      dispatch(addErrorsLength(Object.keys(errors).length));
    });

    return () => subscription.unsubscribe();
  }, [subStageSlug, watch]);

  const updateData = useCallback(() => {
    setValue("name", item.name);
    setValue("level", item.level);
  }, [item?.name]);

  useEffect(() => {
    updateData();
    const professionals = SportFormData?.professionals;

    const selectedIndex = professionals?.findIndex(
      (pro: SportLevelValues) => pro?.name === item?.name
    );

    const newProfessionals = [
      ...professionals.slice(0, selectedIndex),
      watch(),
      ...professionals.slice(selectedIndex + 1, professionals?.length),
    ];

    dispatch(
      updateStageForm({
        name: subStageSlug as string,
        formData: { ...SportFormData, professionals: newProfessionals },
      })
    );
  }, [watch().whichPlace, watch().whichScore]);

  console.log(watch());
  console.log("errors", errors);

  return (
    <div
      className=" border rounded-xl border-[#D8D8D8] p-2.5 mb-5 relative"
      key={index}
    >
      <DevTool control={control} placement="top-left" />
      <div className="flex justify-between">
        <label>
          <span className="text-qss-secondary font-semibold">{item?.name}</span>{" "}
          {questions?.[0]?.question_title}
        </label>
        <Icon
          icon="typcn:delete-outline"
          className="cursor-pointer text-2xl text-[#EE4A4A]/75 hover:text-[#EE4A4A]"
          onClick={() => {
            handleRemoveItem(item?.name);
          }}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Select
            label={``}
            options={questions?.[0]?.answers.slice(0, 4)}
            register={register("whichScore")}
            value={
              item?.whichScore?.answer ? item?.whichScore : watch("whichScore")
            }
            errors={errors?.whichScore}
          />
        </div>
        <div className="col-span-1 ">
          <Select
            label={``}
            options={questions?.[0]?.answers.slice(4, 8)}
            register={register("whichPlace")}
            value={
              item?.whichPlace?.answer ? item?.whichPlace : watch("whichPlace")
            }
            errors={errors?.whichPlace}
          />
        </div>
      </div>
    </div>
  );
};

export default ProLevel;
