import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useAuth from 'hooks/useAuth'
import { useTestStatus } from 'components/AppShell/AppShell'
import { ageFrom, formatDate, talentPercent } from 'tests/store'
import { talentLabel } from 'tests/registry'
import TestHeader from './components/TestHeader'
import { ScoreBar } from './components/Charts'
import { useExport } from './components/useExport'
import { ExportBar } from './iq/IqTest'
import { Bullets, Section } from './mbti/MbtiTest'
import ShareButton from 'share/ShareButton'
import { TalentShareCard } from 'share/cards'
import TalentFull from 'report/reports/TalentFull'

const KEY_BY_TEXT: Record<string, string> = { Education: 'education', 'Language skills': 'language', 'Special talent': 'special', 'Sport skills': 'sport', 'Work experience': 'work', 'Program skills': 'program' }

// What each area measures and how to read the score.
const AREA: Record<string, { what: string; high: string; mid: string; low: string; next: string }> = {
	education: { what: 'Təhsil səviyyəsi, universitetin və ixtisasın nüfuzu, qəbul nəticələri, olimpiada uğurları.', high: 'Akademik göstəriciləriniz yaşıdlarınızın böyük hissəsindən yüksəkdir.', mid: 'Təhsil göstəriciləriniz yaşıdlarınızın ortası səviyyəsindədir.', low: 'Formal təhsil göstəriciləriniz hələlik yaşıdlarınızdan aşağıdır.', next: 'Sertifikatlı kurs, magistratura və ya ixtisas üzrə olimpiada/müsabiqə nəticəsi əlavə edin.' },
	language: { what: 'Bildiyiniz dillər, səviyyələr və beynəlxalq sertifikatlar (IELTS, TOEFL və s.).', high: 'Dil bilikləriniz beynəlxalq mühitdə işləməyə imkan verir.', mid: 'Ən azı bir xarici dildə orta səviyyədə ünsiyyət qurursunuz.', low: 'Xarici dil bilikləri karyera seçimlərinizi məhdudlaşdırır.', next: 'Ən çox tələb olunan dil üzrə beynəlxalq sertifikat alın — bu bal ən sürətli artan baldır.' },
	special: { what: 'Yaradıcı və digər xüsusi bacarıqlar (musiqi, rəsm, yazı, rəqs…) və onlarla bağlı nailiyyətlər.', high: 'Xüsusi bacarığınız peşəkar səviyyəyə yaxındır və nailiyyətlə təsdiqlənib.', mid: 'Həvəskar səviyyədə inkişaf etmiş bacarıqlarınız var.', low: 'Xüsusi bacarıq qeyd edilməyib və ya nailiyyətlə təsdiqlənməyib.', next: 'Bacarığınızı müsabiqə, sərgi və ya portfoliyo ilə təsdiqləyin.' },
	sport: { what: 'İdman növləri, məşğulluq səviyyəsi və yarış nəticələri.', high: 'İdman nailiyyətləriniz intizam və rəqabət bacarığınızı göstərir.', mid: 'Müntəzəm idmanla məşğulsunuz.', low: 'İdman fəaliyyəti qeyd edilməyib və ya həvəskar səviyyədədir.', next: 'Komanda idmanı və ya yarış iştirakı CV-də liderlik və intizam siqnalı kimi dəyərlidir.' },
	work: { what: 'İş yerləri, vəzifələr, peşəkarlıq dərəcəsi və iş stajı.', high: 'Təcrübəniz yaşıdlarınızdan çoxdur və məsuliyyət səviyyəniz yüksəkdir.', mid: 'Yaşınıza uyğun iş təcrübəniz var.', low: 'İş təcrübəniz hələlik azdır.', next: 'Təcrübə proqramı, könüllü layihə və ya yarımştat iş ilə ilk təcrübəni qazanın.' },
	program: { what: 'Ofis, dizayn, ixtisas proqramları və proqramlaşdırma dilləri üzrə bilik səviyyəsi.', high: 'Rəqəmsal bacarıqlarınız əksər vakansiyaların tələbini ödəyir.', mid: 'Əsas proqramlarla rahat işləyirsiniz.', low: 'Rəqəmsal bacarıqlar inkişaf tələb edir.', next: 'Sahənizdə ən çox istənilən 1–2 proqramı (məs. Excel, SQL, Figma) praktik layihə ilə öyrənin.' }
}

const level = (v: number) => (v >= 65 ? 'high' : v >= 35 ? 'mid' : 'low')

const TalentReport = () => {
	const { user } = useAuth()
	const { results: r } = useTestStatus()
	const ref = useRef<HTMLDivElement>(null)
	const { print } = useExport(ref, 'Talant-hesabati')
	const t = r.talent
	const name = `${user?.first_name || ''} ${user?.last_name || ''}`.trim()
	if (!t)
		return (
			<div className="px-6 py-10 lg:px-12">
				<div className="max-w-[960px] mx-auto">
					<TestHeader eyebrow="Test 1" title="Talant hesabatı" subtitle="Bu profil talant testini hələ tamamlamayıb." />
				</div>
			</div>
		)
	return (
		<div className="px-4 sm:px-6 py-10 lg:px-12">
			<div className="max-w-[960px] mx-auto flex flex-col gap-6">
				<TestHeader
					eyebrow="Test 1 · Nəticə"
					title="Talant hesabatı"
					subtitle="6 sahə üzrə cavablarınız yaşıdlarınızın cavabları ilə müqayisə olunub. Faiz — yaşıdlarınızın neçə faizindən yüksək olduğunuzu göstərir."
					actions={
						<>
							<ShareButton title="Talant nəticəm" card={<TalentShareCard />} />
							<Link to="/profile/guide#talent" className="text-[14px] py-[10px] px-[22px] rounded-[25px] border border-qss-secondary text-qss-secondary">
								Suallar və izahı
							</Link>
						</>
					}
				/>
				<TalentFull t={t} />
			</div>
		</div>
	)
}

export default TalentReport
