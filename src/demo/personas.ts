// 20 invented demo people. Names, companies, phone numbers and stories are fictional.
import { PersonaSpec } from './types'

export const PERSONAS: PersonaSpec[] = [
	// ---------- Məktəblilər ----------
	{
		id: 'p01',
		first_name: 'Nihad',
		last_name: 'Rzazadə',
		gender: 'Male',
		birth_date: '2009-04-17',
		city: 'Bakı',
		phone: '+994 50 000 00 01',
		headline: 'Riyaziyyat olimpiadasının qalibi, ixtisas seçimi qarşısında olan 11-ci sinif şagirdi',
		story: '11-ci sinifdə oxuyur, ötən il riyaziyyat üzrə respublika olimpiadasında birinci yeri tutub. Proqramlaşdırma ilə öz-özünə məşğul olur, kiçik oyunlar və alqoritm məsələləri yazır. Kompüter elmləri ilə tətbiqi riyaziyyat arasında seçim edə bilmir və hansı ixtisasın ona daha uyğun olduğunu bilmək istəyir.',
		avatar: { skin: 'light', hair: 'short', hairColor: 'black', facialHair: 'none', glasses: true },
		occupation: 'Məktəbli',
		schoolPerformance: 'Əla',
		education: [],
		olympiad: { subject: 'Riyaziyyat', level: 'Respublika', rank: '1-ci yer' },
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'İngilis dili', level: 'B2' },
			{ language: 'Rus dili', level: 'B1' }
		],
		special: [{ skill: 'Robototexnika', level: 'Həvəskar', achievement: 'Məktəblərarası robototexnika yarışında finalçı' }],
		sports: [],
		work: [],
		programs: [
			{ name: 'Python', level: 'Orta' },
			{ name: 'C++', level: 'Başlanğıc' },
			{ name: 'Excel', level: 'Orta' }
		],
		completed: ['talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec'],
		talent: { education: 94, language: 70, special: 55, sport: 5, work: 0, program: 62 },
		iq: 138,
		iqTilt: { numerical: 10, logical: 8, spatial: 4, verbal: -4, memory: 0 },
		mbti: 'INTP',
		mbtiClarity: [78, 70, 74, 66],
		ennea: { type: 5, wing: 6 },
		big5: { O: 86, C: 52, E: 24, A: 44, N: 42 },
		riasec: { R: 52, I: 94, A: 38, S: 18, E: 24, C: 48 },
		jobProfile: { titles: ['Proqramlaşdırma üzrə təcrübəçi', 'Data analitikası üzrə təcrübəçi'], sectors: ['İT və proqramlaşdırma', 'Data və analitika'], cities: ['Bakı'], remoteOk: true, years: 0, education: 'Orta', minSalary: 400 },
		plan: 'start',
		badges: ['iq'],
		applications: []
	},
	{
		id: 'p02',
		first_name: 'Nərmin',
		last_name: 'Talıbova',
		gender: 'Female',
		birth_date: '2010-03-08',
		city: 'Lənkəran',
		phone: '+994 50 000 00 02',
		headline: 'Lənkəranda 10-cu sinif şagirdi, turizm və tibb arasında seçim edir',
		story: 'Lənkərandakı məktəblərdən birində 10-cu sinifdə oxuyur, voleybol komandasında oynayır və rayon festivallarında xalq rəqsləri ilə çıxış edir. Yayda xalasının qonaq evində turistləri qarşılamağa kömək edib və bu ona çox xoş gəlib. Hələ ki yalnız IQ və karyera maraqları testlərini keçib, növbəti il hansı istiqamətə hazırlaşacağını müəyyənləşdirmək istəyir.',
		avatar: { skin: 'medium', hair: 'long', hairColor: 'brown' },
		occupation: 'Məktəbli',
		schoolPerformance: 'Yaxşı',
		education: [],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'A2' },
			{ language: 'İngilis dili', level: 'A2' }
		],
		special: [{ skill: 'Xalq rəqsləri', level: 'Həvəskar', achievement: 'Rayon festivalında ansamblla çıxış' }],
		sports: [{ sport: 'Voleybol', level: 'Məktəb komandası', result: 'Rayon birinciliyində 2-ci yer' }],
		work: [],
		programs: [{ name: 'MS Word', level: 'Başlanğıc' }],
		completed: ['iq', 'riasec'],
		talent: { education: 50, language: 35, special: 45, sport: 48, work: 0, program: 12 },
		iq: 99,
		iqTilt: { verbal: 5, memory: 4, numerical: -6, spatial: -2, logical: 0 },
		mbti: 'ESFP',
		mbtiClarity: [80, 72, 68, 75],
		ennea: { type: 7, wing: 6 },
		big5: { O: 62, C: 38, E: 82, A: 72, N: 44 },
		riasec: { R: 30, I: 32, A: 66, S: 74, E: 62, C: 24 },
		jobProfile: { titles: ['Turizm üzrə təcrübəçi (bələdçi köməkçisi)', 'Müştəri xidmətləri üzrə təcrübəçi'], sectors: ['Turizm və xidmət', 'Səhiyyə'], cities: ['Lənkəran', 'Bakı'], remoteOk: false, years: 0, education: 'Orta', minSalary: 300 },
		plan: 'none',
		badges: [],
		applications: []
	},

	// ---------- Tələbələr ----------
	{
		id: 'p03',
		first_name: 'Günel',
		last_name: 'Səfərli',
		gender: 'Female',
		birth_date: '2006-02-11',
		city: 'Bakı',
		phone: '+994 50 000 00 03',
		headline: 'UNEC-də maliyyə üzrə son kurs tələbəsi, audit və maliyyə analitikasına hədəflənir',
		story: 'Azərbaycan Dövlət İqtisad Universitetində maliyyə ixtisası üzrə son kursda oxuyur, bu yay audit şirkətində iki aylıq təcrübə keçib. Exceli yaxşı bilir, hazırda Power BI öyrənir və ACCA-nın ilk imtahanına hazırlaşır. Məzun olmamışdan əvvəl audit və ya maliyyə analitikası sahəsində yarım ştat iş tapmaq istəyir.',
		avatar: { skin: 'light', hair: 'bun', hairColor: 'brown' },
		occupation: 'Tələbə',
		schoolPerformance: 'Əla',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Dövlət İqtisad Universiteti (UNEC)', specialty: 'Maliyyə', country: 'Azərbaycan', start: '2023-09', end: '2027-06', admission: 'DİM qəbul imtahanı', examScore: '638' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'İngilis dili', level: 'B2', certificate: 'IELTS 6.5' },
			{ language: 'Rus dili', level: 'B1' }
		],
		special: [{ skill: 'Debat', level: 'Universitet klubu', achievement: 'Tələbə debat turnirində yarımfinalçı' }],
		sports: [{ sport: 'Üzgüçülük', level: 'Həvəskar' }],
		work: [{ profession: 'Audit üzrə təcrübəçi', company: 'Orbita Audit Partnyorları', form: 'Təcrübə', level: 'Təcrübəçi', start: '2026-07', end: '2026-08' }],
		programs: [
			{ name: 'Excel', level: 'Yaxşı' },
			{ name: '1C', level: 'Başlanğıc' },
			{ name: 'Power BI', level: 'Başlanğıc' }
		],
		completed: ['talent', 'iq', 'big5', 'riasec'],
		talent: { education: 72, language: 68, special: 35, sport: 22, work: 32, program: 55 },
		iq: 112,
		iqTilt: { numerical: 7, logical: 3, verbal: 0, spatial: -4, memory: 2 },
		mbti: 'ESTJ',
		mbtiClarity: [72, 70, 74, 80],
		ennea: { type: 3, wing: 2 },
		big5: { O: 46, C: 84, E: 70, A: 56, N: 34 },
		riasec: { R: 18, I: 56, A: 16, S: 40, E: 70, C: 84 },
		jobProfile: { titles: ['Kiçik auditor', 'Data analitikası üzrə təcrübəçi', 'Maliyyə analitiki'], sectors: ['Maliyyə və bank', 'Data və analitika'], cities: ['Bakı'], remoteOk: false, years: 0, education: 'Bakalavr', minSalary: 600 },
		plan: 'start',
		badges: [],
		applications: [
			{ vacancy: 's014', status: 'test', daysAgo: 4, mode: 'manual', replySent: true, note: 'Salam, Günel xanım! Müraciətiniz bizi maraqlandırdı. Növbəti mərhələ olaraq Excel və maliyyə hesabatları üzrə 40 dəqiqəlik onlayn tapşırıq göndəririk, 3 gün ərzində tamamlamağınızı xahiş edirik.' },
			{ vacancy: 's009', status: 'viewed', daysAgo: 2, mode: 'manual' },
			{ vacancy: 's013', status: 'rejected', daysAgo: 9, mode: 'manual', note: 'Təşəkkür edirik. Bu vakansiya üçün ən azı 3 il mühasibat təcrübəsi tələb olunur. Məzun olduqdan sonra yenidən müraciət etməyinizi gözləyirik.' }
		]
	},
	{
		id: 'p04',
		first_name: 'Kamran',
		last_name: 'Novruzlu',
		gender: 'Male',
		birth_date: '2005-06-22',
		city: 'Bakı',
		phone: '+994 50 000 00 04',
		headline: 'ADA Universitetində kompüter elmləri tələbəsi, hakaton həvəskarı',
		story: 'ADA Universitetində kompüter elmləri üzrə son kursdadır, iki dəfə tələbə hakatonunda qalib komandada olub. Dostları ilə universitet tədbirləri üçün bilet satışı tətbiqi yazıb və frilans olaraq kiçik veb saytlar hazırlayır. İndi real komandada işləyib təcrübə toplamaq üçün təcrübə proqramı və ya kiçik mütəxəssis vəzifəsi axtarır.',
		avatar: { skin: 'medium', hair: 'curly', hairColor: 'black', facialHair: 'none' },
		occupation: 'Tələbə',
		schoolPerformance: 'Əla',
		education: [{ level: 'Bakalavr', university: 'ADA Universiteti', specialty: 'Kompüter elmləri', country: 'Azərbaycan', start: '2023-09', end: '2027-06', admission: 'DİM qəbul imtahanı', examScore: '668' }],
		olympiad: { subject: 'İnformatika', level: 'Şəhər', rank: '3-cü yer' },
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'İngilis dili', level: 'C1', certificate: 'IELTS 7.5' },
			{ language: 'Rus dili', level: 'B2' },
			{ language: 'Türk dili', level: 'B2' }
		],
		special: [{ skill: 'Hakaton', level: 'Tələbə', achievement: 'Tələbə hakatonunda 1-ci yer (2025)' }],
		sports: [{ sport: 'Futbol', level: 'Həvəskar', result: 'Universitet liqası' }],
		work: [
			{ profession: 'Proqram təminatı üzrə təcrübəçi', company: 'Lampa Tech Studio', form: 'Təcrübə', level: 'Təcrübəçi', start: '2025-06', end: '2025-08' },
			{ profession: 'Veb proqramçı', company: 'Kətan Rəqəmsal', form: 'Frilans', level: 'Kiçik mütəxəssis', start: '2024-06', end: null }
		],
		programs: [
			{ name: 'JavaScript', level: 'Yaxşı' },
			{ name: 'React', level: 'Orta' },
			{ name: 'Python', level: 'Yaxşı' },
			{ name: 'Git', level: 'Orta' },
			{ name: 'Figma', level: 'Başlanğıc' }
		],
		completed: ['talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec'],
		talent: { education: 85, language: 88, special: 70, sport: 30, work: 52, program: 80 },
		iq: 124,
		iqTilt: { logical: 6, numerical: 4, verbal: 3, spatial: 0, memory: -3 },
		mbti: 'ENTP',
		mbtiClarity: [76, 80, 64, 72],
		ennea: { type: 7, wing: 8 },
		big5: { O: 88, C: 40, E: 78, A: 42, N: 30 },
		riasec: { R: 44, I: 82, A: 62, S: 28, E: 76, C: 30 },
		jobProfile: { titles: ['Proqramlaşdırma üzrə təcrübəçi', 'Frontend proqramçı (React)', 'QA test mühəndisi'], sectors: ['İT və proqramlaşdırma'], cities: ['Bakı'], remoteOk: true, years: 1, education: 'Bakalavr', minSalary: 800 },
		plan: 'pro',
		badges: ['talent', 'iq', 'mbti'],
		applications: [
			{ vacancy: 's003', status: 'interview', daysAgo: 3, mode: 'auto', note: 'Salam, Kamran! Sizi ofisimizdə texniki müsahibəyə dəvət edirik. Müsahibə təxminən bir saat çəkəcək, kiçik bir alqoritm tapşırığı da olacaq.' },
			{ vacancy: 's005', status: 'viewed', daysAgo: 5, mode: 'auto' },
			{ vacancy: 's001', status: 'rejected', daysAgo: 8, mode: 'manual', note: 'Kamran, portfoliyonuz maraqlıdır, lakin bu vəzifə üçün ən azı 2 il kommersiya təcrübəsi lazımdır. Gələcək təcrübə proqramlarımız barədə sizə xəbər verəcəyik.' },
			{ vacancy: 's009', status: 'sent', daysAgo: 0, mode: 'auto' }
		]
	},
	{
		id: 'p05',
		first_name: 'Elvin',
		last_name: 'Qurbanlı',
		gender: 'Male',
		birth_date: '2004-07-18',
		city: 'Sumqayıt',
		phone: '+994 50 000 00 05',
		headline: 'ADNSU-da qazma texnologiyası üzrə magistrant, sahə işinə həvəslidir',
		story: 'Sumqayıtda böyüyüb, ADNSU-nu neft-qaz işi üzrə bitirib və indi qazma texnologiyası üzrə magistraturanın birinci kursundadır. Sərbəst güləş üzrə gənclər arasında respublika mükafatçısıdır, ofisdən çox sahədə işləməyi sevir. Dərsləri ilə paralel enerji sektorunda təcrübə proqramına düşmək istəyir.',
		avatar: { skin: 'tan', hair: 'short', hairColor: 'black', facialHair: 'beard' },
		occupation: 'Tələbə',
		schoolPerformance: 'Yaxşı',
		education: [
			{ level: 'Bakalavr', university: 'Azərbaycan Dövlət Neft və Sənaye Universiteti (ADNSU)', specialty: 'Neft-qaz işi', country: 'Azərbaycan', start: '2022-09', end: '2026-06', admission: 'DİM qəbul imtahanı', examScore: '541' },
			{ level: 'Magistr', university: 'Azərbaycan Dövlət Neft və Sənaye Universiteti (ADNSU)', specialty: 'Qazma texnologiyası', country: 'Azərbaycan', start: '2026-09', end: '2028-06', admission: 'Magistratura qəbul imtahanı' }
		],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'B2' },
			{ language: 'İngilis dili', level: 'B1' }
		],
		special: [],
		sports: [{ sport: 'Sərbəst güləş', level: 'Peşəkar idmançı', result: 'Gənclər arasında respublika çempionatında 3-cü yer' }],
		work: [{ profession: 'Qazma üzrə təcrübəçi', company: 'Xəzər Dərinlik Servis', form: 'Təcrübə', level: 'Təcrübəçi', start: '2025-07', end: '2025-09' }],
		programs: [
			{ name: 'Excel', level: 'Orta' },
			{ name: 'AutoCAD', level: 'Orta' },
			{ name: 'MATLAB', level: 'Başlanğıc' }
		],
		completed: ['talent', 'iq', 'riasec'],
		talent: { education: 66, language: 50, special: 8, sport: 85, work: 30, program: 48 },
		iq: 113,
		iqTilt: { spatial: 9, numerical: 5, logical: 2, verbal: -6, memory: 0 },
		mbti: 'ESTP',
		mbtiClarity: [74, 76, 70, 72],
		ennea: { type: 8, wing: 7 },
		big5: { O: 50, C: 55, E: 76, A: 40, N: 28 },
		riasec: { R: 86, I: 66, A: 14, S: 26, E: 58, C: 42 },
		jobProfile: { titles: ['Enerji sektoru üzrə təcrübəçi', 'Qazma mühəndisi'], sectors: ['Neft-qaz və enerji', 'Mühəndislik və istehsal'], cities: ['Bakı', 'Sumqayıt'], remoteOk: false, years: 0, education: 'Magistr', minSalary: 600 },
		plan: 'start',
		badges: [],
		applications: [
			{ vacancy: 's060', status: 'offer', daysAgo: 1, mode: 'manual', replySent: true, note: 'Təbriklər, Elvin! Müsahibəni uğurla keçdiniz. 6 aylıq təcrübə proqramına 1 dekabrdan başlamağınızı təklif edirik, aylıq təqaüd 650 AZN.' },
			{ vacancy: 's059', status: 'viewed', daysAgo: 6, mode: 'manual' },
			{ vacancy: 's031', status: 'rejected', daysAgo: 12, mode: 'manual', note: 'Müraciətiniz üçün təşəkkür edirik. Bu təcrübə proqramı inşaat mühəndisliyi tələbələri üçün nəzərdə tutulub, sizin profiliniz enerji istiqamətinə daha uyğundur.' }
		]
	},
	{
		id: 'p06',
		first_name: 'Səbinə',
		last_name: 'Hüseynzadə',
		gender: 'Female',
		birth_date: '2007-05-03',
		city: 'Bakı',
		phone: '+994 50 000 00 06',
		headline: 'BDU-da hüquq üzrə 3-cü kurs tələbəsi, əmək hüququ ilə maraqlanır',
		story: 'Bakı Dövlət Universitetinin hüquq fakültəsində oxuyur və universitetin hüquq klinikasında könüllü kimi vətəndaşlara pulsuz məsləhətlərin hazırlanmasına kömək edir. Moot court yarışmasında komandası ilə ikinci yeri tutub. İşçilərin hüquqlarının qorunması ilə məşğul olmaq istəyir və ilk peşəkar təcrübəsini hüquq firmasında qazanmağı hədəfləyir.',
		avatar: { skin: 'light', hair: 'wavy', hairColor: 'auburn', glasses: true },
		occupation: 'Tələbə',
		schoolPerformance: 'Əla',
		education: [{ level: 'Bakalavr', university: 'Bakı Dövlət Universiteti (BDU)', specialty: 'Hüquqşünaslıq', country: 'Azərbaycan', start: '2024-09', end: '2028-06', admission: 'DİM qəbul imtahanı', examScore: '655' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'C1' },
			{ language: 'İngilis dili', level: 'B2' },
			{ language: 'Fransız dili', level: 'A2' }
		],
		special: [
			{ skill: 'Moot court (hüquqi yarışma)', level: 'Tələbə', achievement: 'Respublika tələbə moot court yarışmasında 2-ci yer' },
			{ skill: 'Esse yazımı', level: 'Həvəskar' }
		],
		sports: [],
		work: [{ profession: 'Hüquq klinikasında könüllü', company: 'Universitet Hüquq Klinikası', form: 'Könüllü', level: 'Təcrübəçi', start: '2025-10', end: null }],
		programs: [
			{ name: 'MS Word', level: 'Yaxşı' },
			{ name: 'Excel', level: 'Başlanğıc' },
			{ name: 'Hüquqi məlumat bazaları', level: 'Orta' }
		],
		completed: ['talent', 'mbti', 'ennea'],
		talent: { education: 80, language: 72, special: 66, sport: 4, work: 25, program: 35 },
		iq: 118,
		iqTilt: { verbal: 9, memory: 4, logical: 2, numerical: -5, spatial: -3 },
		mbti: 'INFJ',
		mbtiClarity: [70, 68, 62, 74],
		ennea: { type: 1, wing: 2 },
		big5: { O: 74, C: 78, E: 38, A: 70, N: 56 },
		riasec: { R: 12, I: 68, A: 52, S: 74, E: 48, C: 56 },
		jobProfile: { titles: ['Hüquq üzrə təcrübəçi', 'Müqavilələr üzrə hüquqşünas'], sectors: ['Hüquq', 'Dövlət və QHT'], cities: ['Bakı'], remoteOk: false, years: 0, education: 'Bakalavr', minSalary: 500 },
		plan: 'start',
		badges: [],
		applications: [
			{ vacancy: 's045', status: 'interview', daysAgo: 5, mode: 'manual', interviewDone: true, note: 'Səbinə xanım, salam! Sizi ofisimizdə müsahibəyə dəvət edirik. Özünüzlə yazdığınız hüquqi esse nümunəsini də gətirməyinizi xahiş edirik.' },
			{ vacancy: 's048', status: 'sent', daysAgo: 1, mode: 'manual' }
		]
	},
	{
		id: 'p07',
		first_name: 'Aytən',
		last_name: 'Kərimli',
		gender: 'Female',
		birth_date: '2004-09-14',
		city: 'Bakı',
		phone: '+994 50 000 00 07',
		headline: 'Rəssamlıq Akademiyasında qrafik dizayn tələbəsi, illüstrasiya və brend dizaynını sevir',
		story: 'Şəkidə doğulub, Bakıda Azərbaycan Dövlət Rəssamlıq Akademiyasında qrafik dizayn üzrə son kursda oxuyur. Sosial şəbəkədə öz illüstrasiyalarını paylaşır, kiçik kafelər üçün loqo və menyu dizaynı edib. Hələ iş müraciəti etməyib, əvvəlcə hansı istiqamətin — brend dizaynı, UI/UX, yoxsa animasiya — ona daha uyğun olduğunu anlamaq istəyir.',
		avatar: { skin: 'light', hair: 'long', hairColor: 'black' },
		occupation: 'Tələbə',
		schoolPerformance: 'Yaxşı',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Dövlət Rəssamlıq Akademiyası', specialty: 'Qrafik dizayn', country: 'Azərbaycan', start: '2023-09', end: '2027-06', admission: 'DİM qəbul imtahanı və ixtisas imtahanı', examScore: '512' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'İngilis dili', level: 'B1' },
			{ language: 'Rus dili', level: 'A2' }
		],
		special: [
			{ skill: 'İllüstrasiya', level: 'Yarımpeşəkar', achievement: 'Gənc rəssamların sərgisində iştirak (2025)' },
			{ skill: 'Musiqi (gitara)', level: 'Həvəskar' }
		],
		sports: [{ sport: 'Yoqa', level: 'Həvəskar' }],
		work: [{ profession: 'Qrafik dizayner', company: 'Frilans (kiçik bizneslər üçün)', form: 'Frilans', level: 'Kiçik mütəxəssis', start: '2024-03', end: null }],
		programs: [
			{ name: 'Adobe Illustrator', level: 'Yaxşı' },
			{ name: 'Adobe Photoshop', level: 'Yaxşı' },
			{ name: 'Figma', level: 'Orta' },
			{ name: 'Procreate', level: 'Peşəkar' }
		],
		completed: ['talent', 'mbti', 'big5', 'riasec'],
		talent: { education: 58, language: 40, special: 82, sport: 14, work: 28, program: 76 },
		iq: 107,
		iqTilt: { spatial: 10, verbal: 3, memory: 1, logical: -2, numerical: -8 },
		mbti: 'INFP',
		mbtiClarity: [74, 78, 70, 80],
		ennea: { type: 4, wing: 5 },
		big5: { O: 92, C: 36, E: 30, A: 68, N: 66 },
		riasec: { R: 40, I: 46, A: 94, S: 48, E: 22, C: 14 },
		jobProfile: { titles: ['Qrafik dizayner', 'UI/UX dizayner', 'Marketinq üzrə təcrübəçi'], sectors: ['Dizayn və media'], cities: ['Bakı'], remoteOk: true, years: 2, education: 'Bakalavr', minSalary: 700 },
		plan: 'none',
		badges: [],
		applications: []
	},

	// ---------- Təzə məzunlar ----------
	{
		id: 'p08',
		first_name: 'Fərid',
		last_name: 'Əhmədli',
		gender: 'Male',
		birth_date: '2003-12-05',
		city: 'Bakı',
		phone: '+994 50 000 00 08',
		headline: 'Tətbiqi riyaziyyat məzunu, ilk data analitik işini axtarır',
		story: 'Bu yay BDU-nun tətbiqi riyaziyyat ixtisasını yüksək ballarla bitirib, buraxılış işini Bakıda mənzil qiymətlərinin proqnozlaşdırılması üzrə yazıb. Kaggle müsabiqələrində iştirak edir, SQL və Python-u yaxşı bilir, lakin real iş təcrübəsi yalnız üç aylıq təcrübədən ibarətdir. İki aydır hər gün müraciət göndərir və müsahibələrdə özünü daha inamlı göstərməyi öyrənmək istəyir.',
		avatar: { skin: 'light', hair: 'short', hairColor: 'brown', facialHair: 'none', glasses: true },
		occupation: 'İş axtarıram',
		schoolPerformance: 'Əla',
		education: [{ level: 'Bakalavr', university: 'Bakı Dövlət Universiteti (BDU)', specialty: 'Tətbiqi riyaziyyat', country: 'Azərbaycan', start: '2022-09', end: '2026-06', admission: 'DİM qəbul imtahanı', examScore: '662' }],
		olympiad: { subject: 'Riyaziyyat', level: 'Şəhər', rank: '2-ci yer' },
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'İngilis dili', level: 'C1', certificate: 'IELTS 7.0' },
			{ language: 'Rus dili', level: 'B2' }
		],
		special: [{ skill: 'Data müsabiqələri (Kaggle)', level: 'Orta', achievement: 'Kaggle müsabiqəsində ilk 15% (bürünc medal)' }],
		sports: [{ sport: 'Şahmat', level: 'Həvəskar' }],
		work: [{ profession: 'Data analitikası üzrə təcrübəçi', company: 'Mərcan Retail Qrup', form: 'Təcrübə', level: 'Təcrübəçi', start: '2026-02', end: '2026-04' }],
		programs: [
			{ name: 'Python', level: 'Yaxşı' },
			{ name: 'SQL', level: 'Yaxşı' },
			{ name: 'Power BI', level: 'Orta' },
			{ name: 'Excel', level: 'Yaxşı' },
			{ name: 'Git', level: 'Orta' }
		],
		completed: ['talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec'],
		talent: { education: 84, language: 84, special: 58, sport: 18, work: 22, program: 82 },
		iq: 129,
		iqTilt: { numerical: 9, logical: 7, spatial: 3, memory: -1, verbal: -2 },
		mbti: 'INTJ',
		mbtiClarity: [80, 66, 78, 70],
		ennea: { type: 6, wing: 5 },
		big5: { O: 72, C: 80, E: 22, A: 46, N: 64 },
		riasec: { R: 36, I: 90, A: 28, S: 20, E: 30, C: 72 },
		jobProfile: { titles: ['Data analitik', 'Data analitikası üzrə təcrübəçi', 'BI mütəxəssisi'], sectors: ['Data və analitika', 'İT və proqramlaşdırma', 'Maliyyə və bank'], cities: ['Bakı'], remoteOk: true, years: 0, education: 'Bakalavr', minSalary: 900 },
		plan: 'none',
		badges: [],
		applications: [
			{ vacancy: 's008', status: 'test', daysAgo: 3, mode: 'manual', replySent: true, note: 'Fərid, salam! CV-niz komandamızın diqqətini çəkdi. SQL və Python üzrə ev tapşırığını əlavə edirik, 5 gün ərzində göndərə bilərsiniz.' },
			{ vacancy: 's009', status: 'interview', daysAgo: 6, mode: 'manual', interviewDone: true, note: 'Fərid bəy, salam! Sizi analitika komandamızla tanışlıq müsahibəsinə dəvət edirik. Kaggle layihənizi qısa təqdim etməyiniz çox yaxşı olardı.' },
			{ vacancy: 's011', status: 'rejected', daysAgo: 10, mode: 'manual', note: 'Təşəkkür edirik. Hazırda DAX və Power BI üzrə ən azı 3 illik təcrübəsi olan namizədə üstünlük veririk.' },
			{ vacancy: 's012', status: 'rejected', daysAgo: 13, mode: 'manual', note: 'Profiliniz güclüdür, lakin bu vəzifə MLOps üzrə böyük mütəxəssis təcrübəsi tələb edir. Bir neçə ildən sonra yenidən görüşmək ümidi ilə.' },
			{ vacancy: 's005', status: 'sent', daysAgo: 1, mode: 'manual' },
			{ vacancy: 's003', status: 'viewed', daysAgo: 4, mode: 'manual' }
		]
	},
	{
		id: 'p09',
		first_name: 'Lalə',
		last_name: 'Hacıyeva',
		gender: 'Female',
		birth_date: '2003-04-27',
		city: 'Gəncə',
		phone: '+994 50 000 00 09',
		headline: 'Aqronomluq məzunu, ailə bağında təcrübə qazanıb, ilk peşəkar işini axtarır',
		story: 'Gəncədə Azərbaycan Dövlət Aqrar Universitetini aqronomluq ixtisası üzrə bitirib. Tələbəlikdə ailəsinin üzüm və alma bağında damcı suvarma sisteminin qurulmasında iştirak edib və torpaq analizləri aparıb. İndi bitkiçilik və ya qida emalı sahəsində işləmək istəyir, lazım olsa Lənkəran və ya Şəki kimi bölgələrə köçməyə hazırdır.',
		avatar: { skin: 'medium', hair: 'long', hairColor: 'brown' },
		occupation: 'İş axtarıram',
		schoolPerformance: 'Yaxşı',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Dövlət Aqrar Universiteti', specialty: 'Aqronomluq', country: 'Azərbaycan', start: '2022-09', end: '2026-06', admission: 'DİM qəbul imtahanı', examScore: '498' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'B1' },
			{ language: 'İngilis dili', level: 'A2' }
		],
		special: [{ skill: 'Bağçılıq və tinglik', level: 'Praktik', achievement: 'Universitetin təcrübə sahəsində yeni sortların sınağında iştirak' }],
		sports: [{ sport: 'Velosiped', level: 'Həvəskar' }],
		work: [{ profession: 'Aqronom köməkçisi', company: 'Ailə təsərrüfatı (Göygöl)', form: 'Yarım ştat', level: 'Təcrübəçi', start: '2023-04', end: '2026-08' }],
		programs: [
			{ name: 'Excel', level: 'Orta' },
			{ name: 'MS Word', level: 'Orta' }
		],
		completed: ['talent', 'riasec'],
		talent: { education: 52, language: 32, special: 40, sport: 15, work: 30, program: 30 },
		iq: 94,
		iqTilt: { spatial: 4, memory: 3, logical: 0, verbal: -3, numerical: -5 },
		mbti: 'ISFP',
		mbtiClarity: [72, 74, 66, 70],
		ennea: { type: 9, wing: 1 },
		big5: { O: 58, C: 60, E: 32, A: 76, N: 40 },
		riasec: { R: 82, I: 60, A: 38, S: 50, E: 20, C: 44 },
		jobProfile: { titles: ['Aqronom', 'Çay emalı üzrə texnoloq'], sectors: ['Kənd təsərrüfatı'], cities: ['Gəncə', 'Lənkəran', 'Şəki'], remoteOk: false, years: 1, education: 'Bakalavr', minSalary: 700 },
		plan: 'none',
		badges: [],
		applications: [
			{ vacancy: 's064', status: 'interview', daysAgo: 2, mode: 'manual', note: 'Lalə xanım, salam! Müsahibə və istehsal sahəsi ilə tanışlıq üçün sizi gələn çərşənbə axşamı fabrikimizə dəvət edirik. Yol xərclərinizi qarşılayırıq.' },
			{ vacancy: 's061', status: 'rejected', daysAgo: 7, mode: 'manual', note: 'Müraciətiniz üçün təşəkkür edirik. Bu vəzifəyə ən azı 3 illik müstəqil aqronom təcrübəsi tələb olunur. Növbəti mövsüm köməkçi aqronom vakansiyası açsaq, sizinlə əlaqə saxlayacağıq.' },
			{ vacancy: 's015', status: 'viewed', daysAgo: 5, mode: 'manual' }
		]
	},

	// ---------- Orta karyera mərhələsində olanlar ----------
	{
		id: 'p10',
		first_name: 'Rəşad',
		last_name: 'Bağırlı',
		gender: 'Male',
		birth_date: '1996-09-10',
		city: 'Bakı',
		phone: '+994 50 000 00 10',
		headline: 'Backend proqramçı, 8 il təcrübə, Node.js və PostgreSQL üzrə ixtisaslaşıb',
		story: 'Səkkiz ildir backend proqramçı kimi işləyir, son beş ildə logistika şirkətləri üçün sifariş izləmə sistemi yazan komandadadır. Kod keyfiyyəti və testlərə çox önəm verir, komandada kod baxışlarına o cavabdehdir. İndi daha böyük miqyaslı sistemlərdə işləmək və DevOps tərəfini də öyrənmək üçün yeni iş yeri axtarır.',
		avatar: { skin: 'medium', hair: 'short', hairColor: 'black', facialHair: 'beard' },
		occupation: 'İşləyirəm',
		schoolPerformance: 'Yaxşı',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Texniki Universiteti (AzTU)', specialty: 'İnformasiya texnologiyaları və sistemləri mühəndisliyi', country: 'Azərbaycan', start: '2013-09', end: '2017-06', admission: 'TQDK qəbul imtahanı', examScore: '565' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'C1' },
			{ language: 'İngilis dili', level: 'B2' }
		],
		special: [{ skill: 'Açıq mənbə layihələri', level: 'Orta', achievement: 'GitHub-da 300-dən çox ulduzlu kitabxana müəllifi' }],
		sports: [{ sport: 'Qaçış', level: 'Həvəskar', result: 'Yarımmarafon iştirakçısı' }],
		work: [
			{ profession: 'Kiçik backend proqramçı', company: 'Dalğa Proqram Həlləri', form: 'Tam ştat', level: 'Kiçik mütəxəssis', start: '2018-03', end: '2020-12' },
			{ profession: 'Backend proqramçı', company: 'Mavi Kod Studiyası', form: 'Tam ştat', level: 'Mütəxəssis', start: '2021-01', end: null }
		],
		programs: [
			{ name: 'Node.js', level: 'Peşəkar' },
			{ name: 'TypeScript', level: 'Peşəkar' },
			{ name: 'PostgreSQL', level: 'Yaxşı' },
			{ name: 'Docker', level: 'Yaxşı' },
			{ name: 'Git', level: 'Peşəkar' },
			{ name: 'Redis', level: 'Orta' }
		],
		completed: ['talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec'],
		talent: { education: 56, language: 66, special: 48, sport: 26, work: 78, program: 90 },
		iq: 117,
		iqTilt: { logical: 7, numerical: 5, memory: 2, spatial: 0, verbal: -4 },
		mbti: 'ISTJ',
		mbtiClarity: [76, 70, 74, 82],
		ennea: { type: 1, wing: 9 },
		big5: { O: 54, C: 88, E: 28, A: 52, N: 38 },
		riasec: { R: 50, I: 78, A: 22, S: 18, E: 26, C: 80 },
		jobProfile: { titles: ['Backend proqramçı (Node.js)', 'DevOps mühəndisi', 'Data mühəndisi'], sectors: ['İT və proqramlaşdırma', 'Data və analitika'], cities: ['Bakı'], remoteOk: true, years: 8, education: 'Bakalavr', minSalary: 3500 },
		plan: 'pro',
		badges: ['talent', 'iq', 'big5'],
		applications: [
			{ vacancy: 's002', status: 'interview', daysAgo: 4, mode: 'auto', interviewDone: true, note: 'Rəşad bəy, salam! Sizi komandamızın aparıcı mühəndisləri ilə texniki müsahibəyə dəvət edirik. Müsahibədə real layihələrinizdən birinin arxitekturasını müzakirə edəcəyik.' },
			{ vacancy: 's004', status: 'test', daysAgo: 6, mode: 'auto', replySent: true, note: 'Salam! Növbəti mərhələ: Docker və CI/CD üzrə praktik tapşırıq. Repozitoriya linkini e-poçtla göndərdik, son tarix — 7 gün.' },
			{ vacancy: 's010', status: 'viewed', daysAgo: 3, mode: 'auto' },
			{ vacancy: 's007', status: 'rejected', daysAgo: 11, mode: 'manual', note: 'Təcrübəniz təsiredicidir, lakin bu vəzifədə ən azı bir neçə illik komanda rəhbərliyi təcrübəsi axtarırıq. Sizi böyük mütəxəssis vakansiyalarımızda görmək istərdik.' },
			{ vacancy: 's001', status: 'sent', daysAgo: 0, mode: 'auto' }
		]
	},
	{
		id: 'p11',
		first_name: 'Nigar',
		last_name: 'Rüstəmova',
		gender: 'Female',
		birth_date: '1997-01-19',
		city: 'Bakı',
		phone: '+994 50 000 00 11',
		headline: 'Rəqəmsal marketinq mütəxəssisi, 8 il təcrübə, kampaniya və kontent strategiyası',
		story: 'Kosmetika brendində SMM ilə başlayıb, son beş ildə reklam agentliyində ərzaq və moda müştəriləri üçün Meta və Google kampaniyalarını idarə edir. Yaradıcı ideyalarla doludur, amma uzun hesabatlar onu yorur. Brendin özündə, komandaya rəhbərlik edə biləcəyi daha strateji vəzifəyə keçmək istəyir.',
		avatar: { skin: 'light', hair: 'wavy', hairColor: 'blonde' },
		occupation: 'İşləyirəm',
		schoolPerformance: 'Yaxşı',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Dövlət İqtisad Universiteti (UNEC)', specialty: 'Marketinq', country: 'Azərbaycan', start: '2014-09', end: '2018-06', admission: 'TQDK qəbul imtahanı', examScore: '588' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'İngilis dili', level: 'C1', certificate: 'TOEFL iBT 102' },
			{ language: 'Türk dili', level: 'C1' },
			{ language: 'Rus dili', level: 'B2' }
		],
		special: [{ skill: 'Fotoqrafiya', level: 'Yarımpeşəkar', achievement: 'Mobil fotoqrafiya müsabiqəsində mükafat' }],
		sports: [{ sport: 'Rəqs (salsa)', level: 'Həvəskar' }],
		work: [
			{ profession: 'SMM mütəxəssisi', company: 'Zəfəran Kosmetika', form: 'Tam ştat', level: 'Kiçik mütəxəssis', start: '2018-09', end: '2021-05' },
			{ profession: 'Rəqəmsal marketinq mütəxəssisi', company: 'Atəşgah Media Agentliyi', form: 'Tam ştat', level: 'Mütəxəssis', start: '2021-06', end: null }
		],
		programs: [
			{ name: 'Meta Ads Manager', level: 'Peşəkar' },
			{ name: 'Google Analytics 4', level: 'Yaxşı' },
			{ name: 'Canva', level: 'Peşəkar' },
			{ name: 'Adobe Photoshop', level: 'Orta' },
			{ name: 'Excel', level: 'Orta' }
		],
		completed: ['talent', 'mbti', 'ennea', 'big5', 'riasec'],
		talent: { education: 60, language: 86, special: 62, sport: 20, work: 66, program: 74 },
		iq: 109,
		iqTilt: { verbal: 8, memory: 3, spatial: 0, logical: -2, numerical: -6 },
		mbti: 'ENFP',
		mbtiClarity: [82, 76, 68, 78],
		ennea: { type: 7, wing: 6 },
		big5: { O: 86, C: 42, E: 84, A: 64, N: 46 },
		riasec: { R: 12, I: 40, A: 82, S: 60, E: 80, C: 28 },
		jobProfile: { titles: ['Rəqəmsal marketinq mütəxəssisi', 'Marketinq rəhbəri', 'Kreativ direktor'], sectors: ['Satış və marketinq', 'Dizayn və media'], cities: ['Bakı'], remoteOk: true, years: 8, education: 'Bakalavr', minSalary: 2200 },
		plan: 'start',
		badges: ['talent'],
		applications: [
			{ vacancy: 's019', status: 'offer', daysAgo: 1, mode: 'manual', note: 'Nigar xanım, təbrik edirik! Sizə 2 300 AZN əməkhaqqı ilə rəqəmsal marketinq mütəxəssisi vəzifəsini təklif edirik. Cavabınızı bu həftənin sonunadək gözləyirik.' },
			{ vacancy: 's022', status: 'rejected', daysAgo: 9, mode: 'manual', note: 'Profiliniz üçün təşəkkür edirik. Bu mərhələdə komanda idarəetməsində ən azı 5 illik təcrübəsi olan namizədlə davam edirik.' },
			{ vacancy: 's044', status: 'viewed', daysAgo: 4, mode: 'manual' }
		]
	},
	{
		id: 'p12',
		first_name: 'Ülviyyə',
		last_name: 'Nəsibova',
		gender: 'Female',
		birth_date: '1990-06-02',
		city: 'Gəncə',
		phone: '+994 50 000 00 12',
		headline: 'Gəncədə ailə həkimi, 10 il klinik təcrübə, xroniki xəstəliklərin idarəsi üzrə',
		story: 'Tibb Universitetini bitirib, ailə təbabəti üzrə rezidenturanı keçib və on ilə yaxındır Gəncədə pasiyent qəbul edir. Diabet və hipertoniyası olan pasiyentlərlə uzunmüddətli iş onun ən sevdiyi hissədir. Ailəsinə yaxın qalmaq üçün Gəncədə, elektron tibbi qeydlər sistemi olan daha müasir klinikada işləmək istəyir.',
		avatar: { skin: 'medium', hair: 'bun', hairColor: 'black', glasses: true },
		occupation: 'İşləyirəm',
		schoolPerformance: 'Əla',
		education: [
			{ level: 'Bakalavr', university: 'Azərbaycan Tibb Universiteti', specialty: 'Müalicə işi', country: 'Azərbaycan', start: '2007-09', end: '2013-06', admission: 'TQDK qəbul imtahanı', examScore: '670' },
			{ level: 'Magistr', university: 'Azərbaycan Tibb Universiteti', specialty: 'Ailə təbabəti (rezidentura)', country: 'Azərbaycan', start: '2013-09', end: '2016-06', admission: 'Rezidentura qəbul imtahanı' }
		],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'C1' },
			{ language: 'İngilis dili', level: 'B2' }
		],
		special: [{ skill: 'Tibbi maarifləndirmə', level: 'Peşəkar', achievement: 'Bölgədə 20-dən çox sağlamlıq seminarının aparıcısı' }],
		sports: [{ sport: 'Üzgüçülük', level: 'Həvəskar' }],
		work: [
			{ profession: 'Ümumi praktika həkimi', company: 'Dəmirçay Tibb Mərkəzi', form: 'Tam ştat', level: 'Mütəxəssis', start: '2016-09', end: '2020-12' },
			{ profession: 'Ailə həkimi', company: 'Nəbz Ailə Klinikası', form: 'Tam ştat', level: 'Böyük mütəxəssis', start: '2021-01', end: null }
		],
		programs: [
			{ name: 'Elektron tibbi qeydlər sistemi', level: 'Yaxşı' },
			{ name: 'MS Word', level: 'Yaxşı' },
			{ name: 'Excel', level: 'Orta' }
		],
		completed: ['talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec'],
		talent: { education: 82, language: 64, special: 50, sport: 18, work: 82, program: 45 },
		iq: 121,
		iqTilt: { memory: 8, verbal: 6, logical: 2, numerical: -2, spatial: -6 },
		mbti: 'ISFJ',
		mbtiClarity: [68, 72, 64, 78],
		ennea: { type: 2, wing: 1 },
		big5: { O: 58, C: 82, E: 40, A: 86, N: 42 },
		riasec: { R: 40, I: 78, A: 24, S: 86, E: 30, C: 56 },
		jobProfile: { titles: ['Ailə həkimi'], sectors: ['Səhiyyə'], cities: ['Gəncə'], remoteOk: false, years: 10, education: 'Magistr', minSalary: 2500 },
		plan: 'pro',
		badges: ['talent', 'iq'],
		applications: [
			{ vacancy: 's071', status: 'offer', daysAgo: 2, mode: 'auto', replySent: true, interviewDone: true, note: 'Hörmətli Ülviyyə xanım, müsahibədən sonra komandamız yekdil qərara gəldi. Sizə ailə həkimi vəzifəsini təklif edirik; iş qrafiki və əməkhaqqı şərtləri məktuba əlavə olunub.' }
		]
	},
	{
		id: 'p13',
		first_name: 'Ləman',
		last_name: 'Zeynalova',
		gender: 'Female',
		birth_date: '1993-11-25',
		city: 'Sumqayıt',
		phone: '+994 50 000 00 13',
		headline: 'İngilis dili müəllimi, 12 il təcrübə, IELTS hazırlığı üzrə ixtisaslaşıb',
		story: 'On iki ildir Sumqayıtda məktəbdə ingilis dili dərs deyir, axşamlar isə tədris mərkəzində IELTS qrupları aparır. Şagirdlərinin bir çoxu xaricdə təqaüdlə oxumağa qəbul olunub və bununla çox fəxr edir. Bakıda daha müasir yanaşmalı özəl məktəbdə işləmək və ya onlayn kurs hazırlayan komandaya qoşulmaq istəyir.',
		avatar: { skin: 'light', hair: 'long', hairColor: 'auburn' },
		occupation: 'İşləyirəm',
		schoolPerformance: 'Yaxşı',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Dillər Universiteti', specialty: 'İngilis dili müəllimliyi', country: 'Azərbaycan', start: '2010-09', end: '2014-06', admission: 'TQDK qəbul imtahanı', examScore: '602' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'İngilis dili', level: 'C2', certificate: 'IELTS 8.0, CELTA' },
			{ language: 'Rus dili', level: 'B2' }
		],
		special: [{ skill: 'Məktəb teatrı', level: 'Dərnək rəhbəri', achievement: 'Şagirdlərlə ingilisdilli tamaşa — şəhər festivalında 1-ci yer' }],
		sports: [],
		work: [
			{ profession: 'İngilis dili müəllimi', company: 'Dövlət ümumtəhsil məktəbi (Sumqayıt)', form: 'Tam ştat', level: 'Mütəxəssis', start: '2014-09', end: null },
			{ profession: 'IELTS müəllimi', company: 'Ləpə Tədris Mərkəzi', form: 'Yarım ştat', level: 'Mütəxəssis', start: '2019-02', end: null }
		],
		programs: [
			{ name: 'MS Word', level: 'Yaxşı' },
			{ name: 'PowerPoint', level: 'Yaxşı' },
			{ name: 'Google Classroom', level: 'Yaxşı' },
			{ name: 'Canva', level: 'Orta' }
		],
		completed: ['talent', 'mbti', 'ennea', 'big5'],
		talent: { education: 64, language: 94, special: 55, sport: 5, work: 70, program: 50 },
		iq: 104,
		iqTilt: { verbal: 11, memory: 5, logical: 0, spatial: -6, numerical: -8 },
		mbti: 'ESFJ',
		mbtiClarity: [80, 66, 76, 72],
		ennea: { type: 2, wing: 3 },
		big5: { O: 60, C: 76, E: 80, A: 84, N: 40 },
		riasec: { R: 14, I: 36, A: 60, S: 92, E: 64, C: 50 },
		jobProfile: { titles: ['İngilis dili müəllimi', 'Tədris proqramı dizayneri'], sectors: ['Təhsil'], cities: ['Sumqayıt', 'Bakı'], remoteOk: true, years: 12, education: 'Bakalavr', minSalary: 1300 },
		plan: 'start',
		badges: [],
		applications: [
			{ vacancy: 's065', status: 'test', daysAgo: 5, mode: 'manual', replySent: true, note: 'Ləman xanım, salam! Növbəti mərhələ olaraq 20 dəqiqəlik nümunə dərs keçməyinizi xahiş edirik. Mövzunu və uyğun tarixləri məktuba əlavə etmişik.' },
			{ vacancy: 's067', status: 'sent', daysAgo: 1, mode: 'manual' }
		]
	},
	{
		id: 'p14',
		first_name: 'Elşən',
		last_name: 'Nəcəfli',
		gender: 'Male',
		birth_date: '1988-02-14',
		city: 'Mingəçevir',
		phone: '+994 50 000 00 14',
		headline: 'Mingəçevirdə elektrik mühəndisi, 17 il sahə təcrübəsi, günəş enerjisinə keçmək istəyir',
		story: 'On yeddi ildir Mingəçevirdə elektrik şəbəkələrinin quraşdırılması və təmiri ilə məşğuldur, sakit və praktik insandır. Son illərdə həyət evlərinə günəş panelləri quraşdıran tanışlarına kömək edib və bu sahə ona çox maraqlı gəlib. Bərpa olunan enerji sahəsində rəsmi işə keçmək və AutoCAD biliyini təkmilləşdirmək istəyir.',
		avatar: { skin: 'tan', hair: 'short', hairColor: 'black', facialHair: 'moustache' },
		occupation: 'İşləyirəm',
		schoolPerformance: 'Yaxşı',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Texniki Universiteti (AzTU)', specialty: 'Elektroenergetika', country: 'Azərbaycan', start: '2005-09', end: '2009-06', admission: 'TQDK qəbul imtahanı', examScore: '480' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'B2' },
			{ language: 'İngilis dili', level: 'A2' }
		],
		special: [{ skill: 'Elektrik avadanlığının təmiri', level: 'Peşəkar' }],
		sports: [{ sport: 'Voleybol', level: 'Həvəskar' }],
		work: [
			{ profession: 'Elektrik montajçısı', company: 'Kür Enerji Servis', form: 'Tam ştat', level: 'Kiçik mütəxəssis', start: '2009-09', end: '2015-08' },
			{ profession: 'Elektrik mühəndisi', company: 'Dalğa Elektrotexnika', form: 'Tam ştat', level: 'Mütəxəssis', start: '2015-09', end: null }
		],
		programs: [
			{ name: 'AutoCAD', level: 'Orta' },
			{ name: 'Excel', level: 'Orta' }
		],
		completed: ['talent', 'iq'],
		talent: { education: 40, language: 30, special: 45, sport: 16, work: 80, program: 38 },
		iq: 105,
		iqTilt: { spatial: 10, numerical: 3, logical: 1, memory: -2, verbal: -7 },
		mbti: 'ISTP',
		mbtiClarity: [72, 78, 72, 70],
		ennea: { type: 9, wing: 8 },
		big5: { O: 44, C: 64, E: 30, A: 60, N: 26 },
		riasec: { R: 90, I: 58, A: 20, S: 32, E: 28, C: 52 },
		jobProfile: { titles: ['Günəş enerjisi sistemləri mühəndisi', 'Elektrik mühəndisi'], sectors: ['Neft-qaz və enerji', 'Mühəndislik və istehsal'], cities: ['Mingəçevir', 'Bakı'], remoteOk: false, years: 17, education: 'Bakalavr', minSalary: 1400 },
		plan: 'none',
		badges: [],
		applications: [
			{ vacancy: 's059', status: 'viewed', daysAgo: 3, mode: 'manual' },
			{ vacancy: 's028', status: 'sent', daysAgo: 8, mode: 'manual' }
		]
	},
	{
		id: 'p15',
		first_name: 'Xəyalə',
		last_name: 'Rzayeva',
		gender: 'Female',
		birth_date: '1994-08-08',
		city: 'Bakı',
		phone: '+994 50 000 00 15',
		headline: 'İşə qəbul mütəxəssisi, 9 il HR təcrübəsi, HR biznes tərəfdaşı olmaq istəyir',
		story: 'Psixologiya təhsilini HR magistraturası ilə tamamlayıb və son altı ildə pərakəndə şirkətində ildə 200-dən çox işçinin seçimini idarə edir. Namizədlərlə səmimi ünsiyyəti və hər kəsə geri dönüş verməsi ilə tanınır. İndi işə qəbuldan kənara çıxıb performans idarəetməsi və təşkilati inkişafla məşğul olmaq üçün HRBP vəzifəsinə keçmək istəyir.',
		avatar: { skin: 'light', hair: 'wavy', hairColor: 'brown' },
		occupation: 'İşləyirəm',
		schoolPerformance: 'Əla',
		education: [
			{ level: 'Bakalavr', university: 'Bakı Dövlət Universiteti (BDU)', specialty: 'Psixologiya', country: 'Azərbaycan', start: '2011-09', end: '2015-06', admission: 'TQDK qəbul imtahanı', examScore: '621' },
			{ level: 'Magistr', university: 'Azərbaycan Dövlət İqtisad Universiteti (UNEC)', specialty: 'İnsan resurslarının idarə edilməsi', country: 'Azərbaycan', start: '2015-09', end: '2017-06', admission: 'Magistratura qəbul imtahanı' }
		],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'İngilis dili', level: 'C1', certificate: 'IELTS 7.0' },
			{ language: 'Rus dili', level: 'C1' },
			{ language: 'Türk dili', level: 'B2' }
		],
		special: [{ skill: 'Kouçinq', level: 'Sertifikatlı', achievement: 'Beynəlxalq kouçinq proqramını bitirib' }],
		sports: [{ sport: 'Pilates', level: 'Həvəskar' }],
		work: [
			{ profession: 'İnsan resursları üzrə mütəxəssis', company: 'Arxa Plan Konsaltinq', form: 'Tam ştat', level: 'Kiçik mütəxəssis', start: '2017-09', end: '2020-08' },
			{ profession: 'İşə qəbul mütəxəssisi', company: 'Kəhkəşan Retail', form: 'Tam ştat', level: 'Mütəxəssis', start: '2020-09', end: null }
		],
		programs: [
			{ name: 'Excel', level: 'Yaxşı' },
			{ name: 'ATS sistemləri', level: 'Yaxşı' },
			{ name: 'LinkedIn Recruiter', level: 'Peşəkar' },
			{ name: 'Power BI', level: 'Başlanğıc' }
		],
		completed: ['talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec'],
		talent: { education: 76, language: 88, special: 60, sport: 18, work: 74, program: 62 },
		iq: 111,
		iqTilt: { verbal: 7, memory: 4, logical: 0, numerical: -3, spatial: -5 },
		mbti: 'ENFJ',
		mbtiClarity: [78, 70, 72, 74],
		ennea: { type: 3, wing: 2 },
		big5: { O: 70, C: 74, E: 84, A: 80, N: 36 },
		riasec: { R: 10, I: 44, A: 46, S: 88, E: 80, C: 52 },
		jobProfile: { titles: ['HR biznes tərəfdaşı', 'İşə qəbul mütəxəssisi'], sectors: ['İnsan resursları'], cities: ['Bakı'], remoteOk: true, years: 9, education: 'Magistr', minSalary: 2200 },
		plan: 'pro',
		badges: ['mbti', 'ennea', 'big5'],
		applications: [
			{ vacancy: 's040', status: 'interview', daysAgo: 3, mode: 'auto', interviewDone: true, note: 'Xəyalə xanım, salam! Sizi HR direktorumuz və iki şöbə rəhbəri ilə görüşə dəvət edirik. Performans idarəetməsi üzrə bir keys üzərində birlikdə düşünəcəyik.' },
			{ vacancy: 's038', status: 'offer', daysAgo: 5, mode: 'auto', note: 'Təbriklər! Sizə işə qəbul mütəxəssisi vəzifəsini 1 900 AZN əməkhaqqı, tibbi sığorta və illik təlim büdcəsi ilə təklif edirik. Cavabınızı gözləyirik.' },
			{ vacancy: 's053', status: 'viewed', daysAgo: 8, mode: 'manual' }
		]
	},

	// ---------- Böyük mütəxəssislər və rəhbərlər ----------
	{
		id: 'p16',
		first_name: 'Ramil',
		last_name: 'Şükürov',
		gender: 'Male',
		birth_date: '1988-01-29',
		city: 'Bakı',
		phone: '+994 50 000 00 16',
		headline: 'Texniki rəhbər, 14 il proqramlaşdırma təcrübəsi, 12 nəfərlik komandaya rəhbərlik edir',
		story: 'ODTÜ-də kompüter mühəndisliyi üzrə magistraturanı bitirib, on dörd ildir fintex və bulud layihələrində işləyir. Hazırda 12 nəfərlik komandanın texniki rəhbəridir və arxitektura qərarlarını o verir. Son vaxtlar maşın öyrənməsi ilə dərindən maraqlanır: ya süni intellekt komandasına rəhbərlik, ya da güclü mühəndis kimi ML-ə keçid imkanını araşdırır.',
		avatar: { skin: 'light', hair: 'short', hairColor: 'grey', facialHair: 'beard', glasses: true },
		occupation: 'İşləyirəm',
		schoolPerformance: 'Əla',
		education: [
			{ level: 'Bakalavr', university: 'Bakı Dövlət Universiteti (BDU)', specialty: 'Tətbiqi riyaziyyat', country: 'Azərbaycan', start: '2005-09', end: '2009-06', admission: 'TQDK qəbul imtahanı', examScore: '681' },
			{ level: 'Magistr', university: 'Orta Doğu Texniki Universiteti (ODTÜ)', specialty: 'Kompüter mühəndisliyi', country: 'Türkiyə', start: '2010-09', end: '2012-06', admission: 'ALES və müsahibə' }
		],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Türk dili', level: 'C2' },
			{ language: 'İngilis dili', level: 'C1', certificate: 'IELTS 7.5' },
			{ language: 'Rus dili', level: 'C1' }
		],
		special: [{ skill: 'Konfrans çıxışları', level: 'Peşəkar', achievement: 'Regional proqramçılar konfransında spiker' }],
		sports: [{ sport: 'Dağçılıq', level: 'Həvəskar', result: 'Bazardüzü zirvəsinə qalxış' }],
		work: [
			{ profession: 'Proqramçı', company: 'Kəlağayı Soft', form: 'Tam ştat', level: 'Mütəxəssis', start: '2012-09', end: '2016-05' },
			{ profession: 'Böyük backend proqramçı', company: 'Cənub Fintex', form: 'Tam ştat', level: 'Böyük mütəxəssis', start: '2016-06', end: '2021-03' },
			{ profession: 'Texniki rəhbər', company: 'Mərmər Bulud Texnologiyaları', form: 'Tam ştat', level: 'Rəhbər', start: '2021-04', end: null }
		],
		programs: [
			{ name: 'Python', level: 'Peşəkar' },
			{ name: 'Node.js', level: 'Peşəkar' },
			{ name: 'PostgreSQL', level: 'Peşəkar' },
			{ name: 'Kubernetes', level: 'Yaxşı' },
			{ name: 'AWS', level: 'Yaxşı' },
			{ name: 'PyTorch', level: 'Orta' }
		],
		completed: ['talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec'],
		talent: { education: 90, language: 92, special: 64, sport: 34, work: 94, program: 95 },
		iq: 131,
		iqTilt: { logical: 8, numerical: 6, spatial: 4, verbal: 0, memory: -2 },
		mbti: 'INTJ',
		mbtiClarity: [82, 78, 80, 76],
		ennea: { type: 5, wing: 6 },
		big5: { O: 84, C: 82, E: 26, A: 40, N: 30 },
		riasec: { R: 48, I: 92, A: 40, S: 22, E: 58, C: 62 },
		jobProfile: { titles: ['Texniki rəhbər (Tech Lead)', 'Maşın öyrənməsi mühəndisi', 'Data mühəndisi'], sectors: ['İT və proqramlaşdırma', 'Data və analitika'], cities: ['Bakı'], remoteOk: true, years: 14, education: 'Magistr', minSalary: 6000 },
		plan: 'pro',
		badges: ['talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec'],
		applications: [
			{ vacancy: 's007', status: 'interview', daysAgo: 2, mode: 'auto', note: 'Ramil bəy, salam! Sizi sistem dizaynı üzrə müsahibəyə dəvət edirik. Müsahibə 90 dəqiqə davam edəcək, texniki direktorumuz da iştirak edəcək.' },
			{ vacancy: 's012', status: 'test', daysAgo: 5, mode: 'auto', replySent: true, note: 'Növbəti mərhələ: NLP üzrə kiçik model qurmaq tapşırığı. Məlumat dəsti və təlimat əlavə olunub, 7 gün vaxtınız var.' },
			{ vacancy: 's010', status: 'viewed', daysAgo: 1, mode: 'auto' },
			{ vacancy: 's004', status: 'rejected', daysAgo: 10, mode: 'auto', note: 'Təcrübəniz çox güclüdür, lakin bu vəzifədə gündəlik Terraform və Kubernetes infrastrukturu ilə işləyəcək praktik mühəndis axtarırıq. Texniki rəhbər vakansiyalarımızla maraqlanmağınızı tövsiyə edirik.' }
		]
	},
	{
		id: 'p17',
		first_name: 'Elçin',
		last_name: 'Sadıqlı',
		gender: 'Male',
		birth_date: '1976-03-03',
		city: 'Bakı',
		phone: '+994 50 000 00 17',
		headline: 'Maliyyə direktoru, 29 il təcrübə, sığorta və holdinq strukturlarında',
		story: 'Karyerasına mühasib kimi başlayıb, sığorta şirkətində maliyyə şöbəsini sıfırdan qurub və 13 ildir holdinqdə maliyyə direktorudur. ACCA sertifikatlıdır, gənc maliyyəçilərə mentorluq edir. Hazırda iş axtarmır, lakin növbəti beş il üçün idarə heyəti səviyyəsində rola hazırlıq məqsədilə potensialını və liderlik üslubunu obyektiv qiymətləndirmək istəyir.',
		avatar: { skin: 'medium', hair: 'bald', hairColor: 'grey', facialHair: 'moustache', glasses: true },
		occupation: 'İşləyirəm',
		schoolPerformance: 'Əla',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Dövlət İqtisad Universiteti (UNEC)', specialty: 'Maliyyə və kredit', country: 'Azərbaycan', start: '1993-09', end: '1997-06', admission: 'Qəbul imtahanı', examScore: '590' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'C2' },
			{ language: 'İngilis dili', level: 'C1', certificate: 'IELTS 7.0' }
		],
		special: [{ skill: 'Mentorluq', level: 'Peşəkar', achievement: 'Gənc maliyyəçilər üçün mentorluq proqramının təşəbbüskarı' }],
		sports: [{ sport: 'Tennis', level: 'Həvəskar', result: 'Korporativ turnirdə 2-ci yer' }],
		work: [
			{ profession: 'Mühasib', company: 'Abşeron Ticarət Evi', form: 'Tam ştat', level: 'Mütəxəssis', start: '1997-09', end: '2003-06' },
			{ profession: 'Maliyyə meneceri', company: 'Dayaq Sığorta Şirkəti', form: 'Tam ştat', level: 'Böyük mütəxəssis', start: '2003-07', end: '2012-12' },
			{ profession: 'Maliyyə direktoru', company: 'Ləngər Holdinq', form: 'Tam ştat', level: 'Rəhbər', start: '2013-01', end: null }
		],
		programs: [
			{ name: 'Excel', level: 'Peşəkar' },
			{ name: 'SAP', level: 'Yaxşı' },
			{ name: '1C', level: 'Yaxşı' },
			{ name: 'Power BI', level: 'Orta' }
		],
		completed: ['talent', 'iq', 'mbti', 'ennea', 'big5', 'riasec'],
		talent: { education: 70, language: 86, special: 58, sport: 38, work: 98, program: 80 },
		iq: 122,
		iqTilt: { numerical: 9, logical: 5, verbal: 2, memory: -3, spatial: -5 },
		mbti: 'ENTJ',
		mbtiClarity: [80, 64, 82, 84],
		ennea: { type: 8, wing: 9 },
		big5: { O: 62, C: 86, E: 74, A: 34, N: 24 },
		riasec: { R: 20, I: 62, A: 18, S: 34, E: 88, C: 80 },
		jobProfile: { titles: ['Maliyyə direktoru'], sectors: ['Maliyyə və bank'], cities: ['Bakı'], remoteOk: false, years: 29, education: 'Bakalavr', minSalary: 7000 },
		plan: 'pro',
		badges: ['talent', 'iq', 'big5'],
		applications: []
	},
	{
		id: 'p18',
		first_name: 'Arif',
		last_name: 'Qasımlı',
		gender: 'Male',
		birth_date: '1971-05-20',
		city: 'Bakı',
		phone: '+994 50 000 00 18',
		headline: 'Təchizat zənciri direktoru, 30 il logistika təcrübəsi, yeni rəhbər vəzifə axtarır',
		story: 'Otuz ilə yaxındır logistika sahəsindədir: ekspeditorluqdan başlayıb, son on bir ildə 40 mağazalıq ticarət şəbəkəsinin təchizat zəncirini idarə edib. Şirkət birləşmədən sonra strukturunu dəyişəndə vəzifəsi ləğv olunub. 55 yaşında yenidən iş axtarmağın çətin olduğunu bilir, amma təcrübəsini və intizamını rəqəmlərlə göstərmək istəyir.',
		avatar: { skin: 'tan', hair: 'short', hairColor: 'grey', facialHair: 'moustache' },
		occupation: 'İş axtarıram',
		schoolPerformance: 'Yaxşı',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Texniki Universiteti (AzTU)', specialty: 'Nəqliyyat mühəndisliyi', country: 'Azərbaycan', start: '1988-09', end: '1993-06', admission: 'Qəbul imtahanı' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'C2' },
			{ language: 'Türk dili', level: 'B2' },
			{ language: 'İngilis dili', level: 'B1' }
		],
		special: [{ skill: 'Gömrük prosedurları', level: 'Peşəkar' }],
		sports: [{ sport: 'Futbol', level: 'Veteranlar liqası' }],
		work: [
			{ profession: 'Ekspeditor', company: 'Bayraq Ekspeditor', form: 'Tam ştat', level: 'Mütəxəssis', start: '1994-03', end: '2002-12' },
			{ profession: 'Logistika şöbəsinin müdiri', company: 'Sahil Distribusiya', form: 'Tam ştat', level: 'Böyük mütəxəssis', start: '2003-01', end: '2014-08' },
			{ profession: 'Təchizat zənciri direktoru', company: 'Kəhrəba Ticarət Şəbəkəsi', form: 'Tam ştat', level: 'Rəhbər', start: '2014-09', end: '2025-12' }
		],
		programs: [
			{ name: 'Excel', level: 'Yaxşı' },
			{ name: '1C', level: 'Yaxşı' },
			{ name: 'SAP', level: 'Orta' }
		],
		completed: ['talent', 'iq', 'mbti', 'big5'],
		talent: { education: 44, language: 56, special: 40, sport: 22, work: 96, program: 52 },
		iq: 97,
		iqTilt: { numerical: 4, memory: 2, spatial: 0, logical: -2, verbal: -3 },
		mbti: 'ESTJ',
		mbtiClarity: [76, 80, 72, 86],
		ennea: { type: 1, wing: 2 },
		big5: { O: 32, C: 90, E: 70, A: 50, N: 30 },
		riasec: { R: 50, I: 30, A: 10, S: 36, E: 78, C: 88 },
		jobProfile: { titles: ['Təchizat zənciri meneceri', 'Gömrük rəsmiləşdirməsi üzrə mütəxəssis', 'Logistika koordinatoru'], sectors: ['Logistika'], cities: ['Bakı', 'Sumqayıt'], remoteOk: false, years: 30, education: 'Bakalavr', minSalary: 3500 },
		plan: 'start',
		badges: ['talent'],
		applications: [
			{ vacancy: 's035', status: 'interview', daysAgo: 4, mode: 'manual', note: 'Arif bəy, salam! Sizi baş direktorumuzla görüşə dəvət edirik. Zəhmət olmasa son üç ildə xərclərin optimallaşdırılması üzrə nəticələrinizi qısa təqdimatla gətirin.' },
			{ vacancy: 's036', status: 'viewed', daysAgo: 7, mode: 'manual' },
			{ vacancy: 's034', status: 'rejected', daysAgo: 12, mode: 'manual', note: 'Təcrübəniz bu vəzifə üçün xeyli yüksəkdir və təklif etdiyimiz əməkhaqqı gözləntilərinizə uyğun gəlməyəcək. Rəhbər vakansiyalarımız açılanda sizinlə əlaqə saxlayacağıq.' }
		]
	},

	// ---------- Karyera dəyişən ----------
	{
		id: 'p19',
		first_name: 'Rauf',
		last_name: 'Bayramov',
		gender: 'Male',
		birth_date: '1990-12-11',
		city: 'Bakı',
		phone: '+994 50 000 00 19',
		headline: 'Dövlət qulluğundan data analitikasına keçir, 11 il statistik hesabat təcrübəsi',
		story: 'On bir il Mingəçevirdə dövlət qurumunda statistik hesabatlar hazırlayıb, Excel cədvəllərində saatlarla əl ilə iş görüb. Bir il əvvəl Python və SQL öyrənməyə başlayıb, beynəlxalq data analitikası sertifikatı alıb və ailəsi ilə Bakıya köçüb. Yaşına görə gənc namizədlərlə rəqabətdən narahatdır, amma sahə biliyi ilə fərqlənmək istəyir.',
		avatar: { skin: 'medium', hair: 'short', hairColor: 'black', facialHair: 'beard' },
		occupation: 'İş axtarıram',
		schoolPerformance: 'Yaxşı',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Respublikasının Prezidenti yanında Dövlət İdarəçilik Akademiyası', specialty: 'Dövlət və bələdiyyə idarəçiliyi', country: 'Azərbaycan', start: '2008-09', end: '2012-06', admission: 'TQDK qəbul imtahanı', examScore: '574' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'C1' },
			{ language: 'İngilis dili', level: 'B2' }
		],
		special: [{ skill: 'Statistik hesabatlar', level: 'Peşəkar', achievement: 'Regional sosial-iqtisadi göstəricilər hesabatının müəllifi' }],
		sports: [],
		work: [
			{ profession: 'Statistika üzrə baş mütəxəssis', company: 'Regional statistika idarəsi (Mingəçevir)', form: 'Tam ştat', level: 'Böyük mütəxəssis', start: '2014-02', end: '2026-03' },
			{ profession: 'Data analitikası üzrə təcrübəçi', company: 'Bulaq Analitika', form: 'Təcrübə', level: 'Təcrübəçi', start: '2026-05', end: '2026-08' }
		],
		programs: [
			{ name: 'Excel', level: 'Peşəkar' },
			{ name: 'SPSS', level: 'Yaxşı' },
			{ name: 'SQL', level: 'Orta' },
			{ name: 'Power BI', level: 'Orta' },
			{ name: 'Python', level: 'Başlanğıc' }
		],
		completed: ['talent', 'iq', 'mbti', 'big5', 'riasec'],
		talent: { education: 50, language: 62, special: 38, sport: 4, work: 58, program: 70 },
		iq: 103,
		iqTilt: { numerical: 6, memory: 3, logical: 2, verbal: -4, spatial: -5 },
		mbti: 'ISTJ',
		mbtiClarity: [70, 74, 66, 80],
		ennea: { type: 6, wing: 5 },
		big5: { O: 56, C: 84, E: 34, A: 58, N: 58 },
		riasec: { R: 24, I: 70, A: 16, S: 34, E: 26, C: 86 },
		jobProfile: { titles: ['Data analitik', 'BI mütəxəssisi', 'Monitorinq və qiymətləndirmə mütəxəssisi'], sectors: ['Data və analitika', 'Dövlət və QHT'], cities: ['Bakı', 'Lənkəran'], remoteOk: true, years: 11, education: 'Bakalavr', minSalary: 1200 },
		plan: 'pro',
		badges: ['iq', 'riasec'],
		applications: [
			{ vacancy: 's009', status: 'interview', daysAgo: 3, mode: 'auto', interviewDone: true, note: 'Rauf bəy, salam! Sizi analitika komandamızla müsahibəyə dəvət edirik. Dövlət statistikası ilə bağlı təcrübəniz bizim üçün xüsusilə maraqlıdır.' },
			{ vacancy: 's054', status: 'test', daysAgo: 5, mode: 'auto', replySent: true, note: 'Salam! Növbəti mərhələdə SPSS-də qısa sorğu nəticələrinin təhlili tapşırığı göndəririk, 4 gün vaxtınız var.' },
			{ vacancy: 's008', status: 'rejected', daysAgo: 9, mode: 'auto', note: 'Təşəkkür edirik. Bu vəzifə üçün Python ilə ən azı 2 illik kommersiya təcrübəsi tələb olunur. Təcrübəçi proqramımıza müraciət etməyinizi tövsiyə edirik.' },
			{ vacancy: 's011', status: 'rejected', daysAgo: 13, mode: 'auto', note: 'Müraciətinizi diqqətlə nəzərdən keçirdik, lakin hazırda DAX üzrə daha təcrübəli namizədlə davam edirik.' },
			{ vacancy: 's005', status: 'viewed', daysAgo: 4, mode: 'auto' },
			{ vacancy: 's053', status: 'sent', daysAgo: 1, mode: 'auto' },
			{ vacancy: 's025', status: 'sent', daysAgo: 0, mode: 'auto' }
		]
	},

	// ---------- Fasilədən sonra işə qayıdan ----------
	{
		id: 'p20',
		first_name: 'Röya',
		last_name: 'Mirzəli',
		gender: 'Female',
		birth_date: '1985-08-16',
		city: 'Şəki',
		phone: '+994 50 000 00 20',
		headline: 'Altı illik fasilədən sonra turizmə qayıdan bələdçi və resepşn əməkdaşı',
		story: 'Şəkidə 12 il otel resepşnində və turist bələdçisi kimi işləyib, xarici qonaqlara şəhərin tarixini danışmağı çox sevirdi. İkinci övladı doğulandan sonra altı il evdə uşaqlarla qalıb, indi uşaqlar məktəbə gedir. Fasilədən sonra özünə inamı bir az azalıb, amma Şəkidə və ya uzaqdan, yarım ştat da olsa, işə qayıtmaq istəyir.',
		avatar: { skin: 'light', hair: 'hijab', hairColor: 'black' },
		occupation: 'İş axtarıram',
		schoolPerformance: 'Yaxşı',
		education: [{ level: 'Bakalavr', university: 'Azərbaycan Dövlət Pedaqoji Universitetinin Şəki filialı', specialty: 'Tarix', country: 'Azərbaycan', start: '2003-09', end: '2007-06', admission: 'TQDK qəbul imtahanı', examScore: '455' }],
		languages: [
			{ language: 'Azərbaycan dili', level: 'Ana dili' },
			{ language: 'Rus dili', level: 'B2' },
			{ language: 'İngilis dili', level: 'B1' }
		],
		special: [
			{ skill: 'Yerli tarix və mədəniyyət', level: 'Peşəkar', achievement: 'Şəki tarixi üzrə bələdçi sertifikatı' },
			{ skill: 'Şəki halvasının hazırlanması', level: 'Ev səviyyəsi' }
		],
		sports: [],
		work: [
			{ profession: 'Resepşn əməkdaşı', company: 'Ələmli Butik Otel', form: 'Tam ştat', level: 'Kiçik mütəxəssis', start: '2008-05', end: '2014-03' },
			{ profession: 'Turist bələdçisi', company: 'Kiş Yolu Turları', form: 'Yarım ştat', level: 'Mütəxəssis', start: '2014-04', end: '2020-06' }
		],
		programs: [
			{ name: 'MS Word', level: 'Orta' },
			{ name: 'Rezervasiya sistemi', level: 'Orta' },
			{ name: 'Excel', level: 'Başlanğıc' }
		],
		completed: ['talent', 'ennea', 'big5'],
		talent: { education: 42, language: 48, special: 52, sport: 3, work: 50, program: 25 },
		iq: 83,
		iqTilt: { memory: 6, verbal: 5, logical: -3, spatial: -4, numerical: -9 },
		mbti: 'ISFJ',
		mbtiClarity: [66, 72, 70, 74],
		ennea: { type: 6, wing: 7 },
		big5: { O: 48, C: 72, E: 44, A: 84, N: 64 },
		riasec: { R: 30, I: 22, A: 44, S: 84, E: 46, C: 62 },
		jobProfile: { titles: ['Resepşn əməkdaşı', 'Turizm üzrə təcrübəçi (bələdçi köməkçisi)', 'Onlayn çat dəstək operatoru'], sectors: ['Turizm və xidmət', 'Müştəri xidmətləri'], cities: ['Şəki'], remoteOk: true, years: 12, education: 'Bakalavr', minSalary: 600 },
		plan: 'none',
		badges: [],
		applications: [
			{ vacancy: 's049', status: 'interview', daysAgo: 2, mode: 'manual', note: 'Röya xanım, salam! Təcrübəniz bizim üçün çox dəyərlidir. Müsahibə üçün cümə günü saat 10:00-da otelimizə gələ bilərsinizmi?' },
			{ vacancy: 's052', status: 'viewed', daysAgo: 4, mode: 'manual' },
			{ vacancy: 's026', status: 'test', daysAgo: 6, mode: 'manual', replySent: true, note: 'Salam! Növbəti mərhələ — 15 dəqiqəlik yazılı ünsiyyət testi. Link e-poçtunuza göndərilib, istədiyiniz vaxt keçə bilərsiniz.' },
			{ vacancy: 's023', status: 'rejected', daysAgo: 11, mode: 'manual', note: 'Müraciətiniz üçün təşəkkür edirik. Bu vəzifə yalnız Bakı ofisində növbəli iş tələb edir. Uzaqdan iş imkanı yarananda sizinlə əlaqə saxlayacağıq.' }
		]
	}
]
