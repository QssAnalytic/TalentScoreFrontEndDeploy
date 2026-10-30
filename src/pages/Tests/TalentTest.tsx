import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GetStage from 'services/GetStage'
import useAuth from 'hooks/useAuth'
import Stage from 'components/Stage'
import PopUp from 'components/PopUp'
import { useTestStatus } from 'components/AppShell/AppShell'
import { IconArrow, IconCheck } from 'components/AppShell/icons'
import TestHeader from './components/TestHeader'
import { talentPercent } from 'tests/store'
import { talentLabel } from 'tests/registry'
import ShareButton from 'share/ShareButton'
import { TalentShareCard } from 'share/cards'

const stageList = [
	['Təhsil', 'Məşğuliyyət, təhsil səviyyəsi, universitet, olimpiadalar'],
	['Dil bilikləri', 'Bildiyiniz dillər və səviyyələr'],
	['Xüsusi bacarıqlar', 'Yaradıcı və digər bacarıqlar, nailiyyətlər'],
	['İdman', 'İdman növləri və peşəkar nəticələr'],
	['İş təcrübəsi', 'İş yerləri, vəzifələr, müddət'],
	['Proqram bilikləri', 'Ofis, dizayn proqramları, proqramlaşdırma']
]

// Intro / result page for test 1.
export const TalentTest = () => {
	const { accessToken } = useAuth()
	const { useGetStageQuery } = GetStage(accessToken || '')
	const { data } = useGetStageQuery()
	const { done, results } = useTestStatus()
	const first = data?.[0]
	const firstChild = first?.stage_children?.[0]
	const scores = results.talent?.data

	return (
		<div className="px-6 py-10 lg:px-12">
			<div className="max-w-[1120px] mx-auto flex flex-col gap-8">
				<TestHeader number={1} title="İlkin Profil və talant qiymətləndirmə testi" subtitle="Təhsiliniz, bacarıqlarınız və təcrübəniz yaşıdlarınızla müqayisə olunur. Nəticədə pulsuz talant hesabatı alırsınız və CV bölməsi açılır." />

				{done.talent ? (
					<div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
						<div className="rounded-2xl bg-white border border-qss-border shadow-sm p-7 flex flex-col gap-5">
							<span className="self-start flex items-center gap-1 text-xs font-semibold text-qss-alternative bg-qss-transbg rounded-full px-3 py-1">
								<IconCheck /> Test tamamlanıb
							</span>
							{scores ? (
								<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
									{Object.values(scores).map(s => (
										<div key={s.text}>
											<p className="text-xs text-qss-inputText">{talentLabel(s.text)}</p>
											<p className="font-manrope text-2xl font-bold text-qss-primary tabular-nums">{talentPercent(s.score)}%</p>
											<div className="h-1.5 rounded-full bg-qss-base-400 mt-1">
												<div className="h-full rounded-full bg-qss-secondary" style={{ width: `${talentPercent(s.score)}%` }} />
											</div>
										</div>
									))}
								</div>
							) : (
								<p className="text-qss-inputText">Hesabatınız serverdə saxlanılıb. Ballara baxmaq üçün hesabatı açın.</p>
							)}
							<div className="flex flex-wrap gap-3">
								<Link to="/profile/report" className="flex items-center gap-2 text-[14px] text-white py-[10px] px-[24px] rounded-[25px] bg-qss-secondary">
									Talant hesabatı <IconArrow />
								</Link>
								<Link to="/profile/cv" className="text-[14px] py-[10px] px-[24px] rounded-[25px] border border-qss-secondary text-qss-secondary">
									CV hazırla
								</Link>
								{scores && <ShareButton title="Talant nəticəm" card={<TalentShareCard />} />}
							</div>
						</div>
						<div className="rounded-2xl bg-qss-transbg p-7 flex flex-col gap-3">
							<p className="font-semibold text-qss-primary">Növbəti addım</p>
							<p className="text-sm text-qss-inputText leading-relaxed">
								IQ, MBTI və Enneaqram testlərini də keçsəniz, tam hesabatınız şəxsiyyət və intellekt göstəricilərinizi birləşdirərək daha dəqiq karyera tövsiyələri verəcək.
							</p>
							<Link to="/profile/tests/iq" className="self-start text-sm font-semibold text-qss-secondary">
								IQ testinə keç →
							</Link>
						</div>
					</div>
				) : (
					<div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
						<div className="rounded-2xl bg-white border border-qss-border shadow-sm p-7 flex flex-col gap-5">
							<ol className="grid sm:grid-cols-2 gap-4">
								{stageList.map(([t, d], i) => (
									<li key={t} className="flex gap-3">
										<span className="w-7 h-7 shrink-0 rounded-full grid place-items-center bg-qss-transbg text-qss-alternative text-sm font-bold tabular-nums">{i + 1}</span>
										<span>
											<span className="block font-semibold text-qss-primary text-sm">{t}</span>
											<span className="text-xs text-qss-inputText">{d}</span>
										</span>
									</li>
								))}
							</ol>
							{first && firstChild ? (
								<Link
									to={`/profile/stages/${first.slug}/${firstChild.slug}`}
									state={{ stageName: first.stage_name, subStageName: firstChild.stage_name }}
									className="self-start flex items-center gap-2 text-[15px] text-white py-[12px] px-[30px] rounded-[25px] bg-gradient-to-t from-qss-gradientBottom to-qss-gradientTop"
								>
									Testə başla <IconArrow />
								</Link>
							) : (
								<p className="text-sm text-qss-inputText">Mərhələlər yüklənir…</p>
							)}
						</div>
						<div className="rounded-2xl bg-qss-transbg p-7 flex flex-col gap-3 text-sm text-qss-inputText leading-relaxed">
							<p className="font-semibold text-qss-primary text-base">Nə alacaqsınız</p>
							<p>Ümumi və yaş qrupunuz üzrə persentiliniz, 6 sahə üzrə ballar və şərh.</p>
							<p>Cavablarınızdan avtomatik hazırlanan CV — bir neçə şablonla.</p>
							<p>Talant sertifikatı və paylaşıla bilən nəticə kartı.</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

interface RootState {
	dataa: { popUp: boolean }
}

// The stage-by-stage form (routes /profile/stages/:stageSlug/:subStageSlug).
export const TalentStages = () => {
	const popUp = useSelector((state: RootState) => state.dataa.popUp)
	return (
		<div className="px-6 py-10 lg:px-12">
			<div className={`max-w-[1120px] mx-auto flex flex-col gap-8 relative ${popUp ? 'overflow-hidden' : ''}`}>
				<PopUp display={popUp === true ? 'block' : 'hidden'} />
				<TestHeader number={1} title="İlkin Profil və talant qiymətləndirmə testi" compact />
				<Stage />
			</div>
		</div>
	)
}
