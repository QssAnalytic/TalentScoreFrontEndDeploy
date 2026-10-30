// The tests (the recommended chain order), in the order they appear in the sidebar and on the dashboard.
export type TestId = 'talent' | 'iq' | 'mbti' | 'ennea' | 'big5' | 'riasec'

export interface TestInfo {
	id: TestId
	number: number
	title: string
	short: string
	path: string
	measures: string
	minutes: string
	questions: string
}

export const TESTS: TestInfo[] = [
	{
		id: 'talent',
		number: 1,
		title: 'İlkin Profil və talant qiymətləndirmə testi',
		short: 'Talant testi',
		path: '/profile/tests/talent',
		measures: 'Təhsil, dil bilikləri, xüsusi bacarıqlar, idman, iş təcrübəsi və proqram bilikləri üzrə yaşıdlarınızla müqayisədə yeriniz.',
		minutes: '10–15 dəq',
		questions: '6 mərhələ'
	},
	{
		id: 'iq',
		number: 2,
		title: 'IQ testi',
		short: 'IQ testi',
		path: '/profile/tests/iq',
		measures: 'Verbal, rəqəmsal, məntiqi, məkan və yaddaş bacarıqları üzrə intellektual göstəriciniz.',
		minutes: '45 dəq',
		questions: '48 sual'
	},
	{
		id: 'mbti',
		number: 3,
		title: '16 tip şəxsiyyət testi',
		short: '16 tip testi',
		path: '/profile/tests/mbti',
		measures: '16 şəxsiyyət tipindən hansına uyğun gəldiyiniz: ünsiyyət, karyera, münasibətlər və iş tərzi.',
		minutes: '10–12 dəq',
		questions: '64 ifadə'
	},
	{
		id: 'ennea',
		number: 4,
		title: 'Enneaqram testi',
		short: 'Enneaqram',
		path: '/profile/tests/enneagram',
		measures: 'Əsas motivasiyanız, qorxularınız, stress və inkişaf istiqamətləriniz — 9 tip üzrə.',
		minutes: '10 dəq',
		questions: '63 ifadə'
	},
	{
		id: 'big5',
		number: 5,
		title: 'Big Five şəxsiyyət testi',
		short: 'Big Five',
		path: '/profile/tests/big5',
		measures: 'Açıqlıq, məsuliyyətlilik, ekstraversiya, xoşniyyətlilik və emosional həssaslıq — işəgötürənlərin ən çox etibar etdiyi model.',
		minutes: '8–10 dəq',
		questions: '50 ifadə'
	},
	{
		id: 'riasec',
		number: 6,
		title: 'Karyera maraqları testi (RIASEC)',
		short: 'Karyera maraqları',
		path: '/profile/tests/riasec',
		measures: 'Hansı fəaliyyətlərdən zövq aldığınız və sizə uyğun iş mühiti — 6 Holland tipi üzrə.',
		minutes: '8 dəq',
		questions: '48 fəaliyyət'
	}
]

export function talentLabel(text: string) {
	const map: Record<string, string> = {
		Education: 'Təhsil',
		'Language skills': 'Dil bilikləri',
		'Special talent': 'Xüsusi bacarıqlar',
		'Sport skills': 'İdman',
		'Work experience': 'İş təcrübəsi',
		'Program skills': 'Proqram bilikləri'
	}
	return map[text] || text
}
