import { Fragment, useEffect, useMemo, useState, useCallback } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import GetStage from "../services/GetStage";
import ProgressBar from "./ProgressBar";
import GeneralQuestionsForm from "./Stages/Education/GeneralQuestionsForm";
import EducationQuestionsForm from "./Stages/Education/EducationQuestionsForm";
import useGetSubStageName from "../hooks/useGetSubStageName";
import OlympiadQuestionsForm from "./Stages/Education/OlympiadQuestionsForm";
import LanguangeQuestionsForm from "./Stages/Languange/LanguageQuestionsForm";
import SpecialSkillsForm from "./Stages/SpecialSkills/SpecialSkillsQuestionsForm";
import SportForm from "./Stages/Sport/SportQuestionsForm";
import SportForm2 from "./Stages/Sport/ProLevelList";
import ProgramSkills from "./Stages/ProgramSkills/ProgramSkillsQuestionsForm";
import JobExperienceForm from "./Stages/JobExperience/JobExperienceForm";
import SpecialSkillsCertifcateQuestionsForm from "./Stages/SpecialSkills/SpecialSkillsCertifcateQuestionsForm";
import ClockLoader from "react-spinners/ClockLoader";
import useAuth from "hooks/useAuth";

const Stage = () => {
  
  const {accessToken} = useAuth()
  const { useGetStageQuery, useGetQuestionsQuery } = GetStage(accessToken || '')
  const { data, error, isLoading } = useGetStageQuery();

  const { stageName } = (useLocation().state as {
    stageName: string;
  }) || { subStageName: "", stageName: "" };

  const { subStageSlug, stageSlug } = useParams();
  const [progress, setProgress] = useState(0);

  const stageIndex = useMemo(
    () => data?.findIndex(({ stage_name }) => stageName === stage_name),
    [data, stageName, progress]
  );

  const subStageIndex = useMemo(
    () =>
      data?.[stageIndex || 0]?.stage_children?.findIndex(
        ({ slug }) => subStageSlug === slug
      ) ?? 0,
    [data, stageIndex, subStageSlug]
  );
  const percentage = useMemo(
    () => data?.[stageIndex || 0]?.child_count ?? 0,
    [data, stageIndex]
  );

  const subStageName = useGetSubStageName({
    slugName: stageSlug,
    subSlugName: subStageSlug,
    data: data,
  });

  const handleProgressChange = useCallback(
    (newProgress: number) => {
      setProgress(newProgress);
    },
    [setProgress]
  );

  const getSubStageForm = () => {
    switch (subStageSlug) {
      case "umumi-suallar":
        return (
          <GeneralQuestionsForm
            stageIndex={stageIndex}
            subStageSlug={subStageSlug || ""}
            num={0}
          />
        );
        
      case "orta-texniki-ve-ali-tehsil-suallari":
        return (
          <EducationQuestionsForm
            stageIndex={stageIndex}
            subStageSlug={subStageSlug || ""}
            num={0}
          />
        );

      case "olimpiada-suallari":
        return (
          <OlympiadQuestionsForm
            stageIndex={stageIndex}
            subStageSlug={subStageSlug || ""}
            num={0}
          />
        );

      case "dil-bilikleri-substage":
        return (
          <LanguangeQuestionsForm
            stageIndex={stageIndex}
            subStageSlug={subStageSlug || ""}
            num={0}
          />
        );
      case "xususi-bacariqlar-substage":
        return (
          <SpecialSkillsForm
            stageIndex={stageIndex}
            subStageSlug={subStageSlug || ""}
            num={0}
          />
        );
      case "xususi-bacariqlar-sertifikat-substage":
        return (
          <SpecialSkillsCertifcateQuestionsForm
            stageIndex={stageIndex}
            subStageSlug={subStageSlug || ""}
            num={0}
          />
        );
      case "idman-substage":
        return (
          <SportForm
            stageIndex={stageIndex}
            subStageSlug={subStageSlug || ""}
            num={0}
          />
        );
      case "idman-substage2":
        return (
          <SportForm2
            stageIndex={stageIndex}
            subStageSlug={subStageSlug || ""}
            num={0}
          />
        );
      case "is-tecrubesi-substage":
        return (
          <JobExperienceForm
            stageIndex={stageIndex}
            subStageSlug={subStageSlug || ""}
            num={0}
          />
        );
      case "proqram-bilikleri-substage":
        return (
          <ProgramSkills
            stageIndex={stageIndex}
            subStageSlug={subStageSlug || ""}
            num={0}
          />
        );
    }
  };

  useEffect(() => {
    handleProgressChange(
      parseInt((((subStageIndex + 1) * 100) / percentage).toFixed()) || 0
    );
  }, [subStageIndex, subStageSlug, data, stageIndex]);

  if (isLoading)
    return (
      <div className="py-24 grid place-items-center">
        <ClockLoader size={70} color="#038477" />
      </div>
    );
  if (error || stageName === "")
    return (
      <div className="rounded-2xl bg-white border border-qss-border p-8 max-w-xl">
        <p className="font-semibold text-qss-primary">Mərhələ yüklənmədi.</p>
        <p className="text-sm text-qss-inputText mt-1">Testə test səhifəsindən yenidən başlayın.</p>
        <Link to="/profile/tests/talent" className="inline-block mt-4 text-[14px] text-white py-[9px] px-[22px] rounded-[25px] bg-qss-secondary">Test səhifəsi</Link>
      </div>
    );

  const cleanName = (n?: string) =>
    (n || "")
      .replace(/ substage2?$/i, "")
      .replace(/^Xususi bacarıqlar sertifikat$/i, "Xüsusi bacarıqlar — sertifikatlar")
      .replace(/^Idman/i, "İdman");

  const stageHelp: Record<string, string> = {
    tehsil: "Hazırkı məşğuliyyətiniz, təhsil səviyyəniz, universitet və olimpiada nəticələriniz.",
    "dil-bilikleri": "Bildiyiniz dillər və hər birində səviyyəniz (sertifikat varsa qeyd edin).",
    "xususi-bacariqlar": "Musiqi, rəsm, aktyorluq kimi bacarıqlar və bu sahədəki nailiyyətləriniz.",
    idman: "Məşğul olduğunuz idman növləri və peşəkar nəticələriniz.",
    "is-tecrubesi": "Çalışdığınız yerlər, vəzifələr və müddət.",
    "proqram-bilikleri": "İstifadə etdiyiniz proqramlar və proqramlaşdırma dilləri, səviyyəsi ilə."
  };

  return (
    <div className="flex flex-col gap-8">
      <ol className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2" aria-label="Mərhələlər">
        {data?.map(({ stage_name, slug }, id) => {
          const current = id === stageIndex;
          const passed = (stageIndex ?? 0) > id;
          return (
            <li
              key={id}
              aria-current={current ? "step" : undefined}
              className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm border transition-colors ${
                current
                  ? "bg-qss-primary text-white border-qss-primary"
                  : passed
                  ? "bg-qss-transbg text-qss-alternative border-qss-base-400"
                  : "bg-white text-qss-inputText border-qss-border"
              }`}
            >
              <span
                className={`w-6 h-6 shrink-0 rounded-full grid place-items-center text-xs font-bold tabular-nums ${
                  current ? "bg-white text-qss-primary" : passed ? "bg-qss-secondary text-white" : "bg-qss-input text-qss-inputText"
                }`}
              >
                {passed ? "✓" : id + 1}
              </span>
              <span className="truncate">{stage_name}</span>
            </li>
          );
        })}
      </ol>

      <div className="flex flex-wrap gap-8 items-start">
        <div className="relative w-full max-w-xl mb-24">
          <div className="w-full rounded-2xl bg-white py-8 px-9 h-[611px] shadow-sm border border-qss-border">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-qss-base-300 mb-1">
              Mərhələ {(stageIndex ?? 0) + 1} / {data?.length || 6}
            </p>
            <h2 className="font-manrope text-xl font-bold text-qss-primary mb-4">{cleanName(subStageName)}</h2>
            <ProgressBar progress={progress} subStageIndex={subStageIndex} stageIndex={stageIndex} />
            {getSubStageForm()}
          </div>
        </div>
        <aside className="flex-1 min-w-[240px] max-w-sm rounded-2xl bg-qss-transbg p-6 flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-qss-alternative">Bu mərhələdə</p>
          <p className="text-qss-primary leading-relaxed">{stageHelp[stageSlug || ""] || "Suallara cavab verin və növbəti addıma keçin."}</p>
          <p className="text-sm text-qss-inputText leading-relaxed">
            Cavablarınız yaşıdlarınızla müqayisə olunur. Dəqiq cavab verin — hesabatınız və CV-niz bu məlumatlardan hazırlanır.
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Stage;
