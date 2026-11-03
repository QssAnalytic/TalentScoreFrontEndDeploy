// Extended talent-test report texts (Azerbaijani): 6 areas × 5 levels. Plain data only.
// Scores are percentiles against participants of the same age; levels: expert (top ~10%) … basic.
import { TalentArea, TalentAreaContent } from './types'

export const TALENT_AREAS: Record<TalentArea, TalentAreaContent> = {
	// ---------------------------------------------------------------- Təhsil
	education: {
		id: 'education',
		name: 'Təhsil',
		what: 'Təhsil sahəsi akademik yolunuzu bütöv şəkildə qiymətləndirir: orta məktəb göstəriciləri, hazırkı təhsil pilləsi, universitet və ixtisas, qəbul imtahanının nəticəsi və olimpiada uğurları. Məqsəd yalnız diplomun olub-olmamasını deyil, bu yolu hansı keyfiyyətlə keçdiyinizi görməkdir.',
		how: 'Hər cavabın öz çəkisi var: DİM-in qəbul imtahanında yüksək bal, nüfuzlu universitet, magistratura və ya PhD pilləsi, xüsusən də respublika və beynəlxalq olimpiada mükafatları balı əhəmiyyətli dərəcədə artırır. Yekun bal Sizin yaşınızda olan digər iştirakçılarla müqayisədə persentil kimi hesablanır: məsələn, 80 o deməkdir ki, akademik profiliniz yaşıdlarınızın təxminən 80%-indən güclüdür.',
		why: 'İşəgötürənlər təhsil göstəricilərinə sistemli işləmək, yeni biliyi mənimsəmək və uzunmüddətli məqsədə sadiq qalmaq bacarığının sübutu kimi baxırlar. Universitetlər və təqaüd proqramları, o cümlədən xaricdə təhsil proqramları isə qəbul zamanı ilk növbədə akademik nəticələri, imtahan ballarını və olimpiada uğurlarını nəzərə alır.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — yaşıdlarınızın ən güclü 10%-i',
				summary: 'Akademik göstəriciləriniz yaşıdlarınızın böyük əksəriyyətindən aydın şəkildə irəlidədir. Bu nəticə adətən yüksək qəbul balı, güclü universitet və ya olimpiada mükafatları kimi nadir nailiyyətlərin birləşməsindən yaranır. Siz təkcə yaxşı oxumursunuz — çətin rəqabət mühitində nəticə göstərə bildiyinizi də sübut etmisiniz. İndi əsas sual bu bazanı hansı istiqamətdə ən böyük təsirə çevirəcəyinizdir.',
				detail: 'Praktikada bu səviyyə, məsələn, DİM imtahanında 600-dən çox bal toplayıb ölkənin aparıcı universitetlərindən birinə qəbul olmuş və ya respublika fənn olimpiadasında medal qazanmış gənclərin profilinə bənzəyir. Belə profil xaricdə təhsil təqaüdlərinə, rəqabətli magistr proqramlarına və güclü şirkətlərin təcrübə proqramlarına müraciətdə ciddi üstünlük verir. Müəllimlər və rəhbərlər Sizdən adətən daha çox gözləyir və Sizə daha mürəkkəb tapşırıqlar etibar edirlər. Bu səviyyədə fərqi artıq qiymətlər deyil, elmi layihələr, nəşrlər, beynəlxalq yay məktəbləri və mentorluq əlaqələri yaradır. Növbəti addımınız bilikləri nümayiş etdirməkdən onları real nəticəyə çevirməyə keçməkdir.',
				strengths: [
					'Yüksək akademik intizam və uzunmüddətli məqsədə sadiqlik',
					'Rəqabətli imtahan və müsabiqə mühitində sübut olunmuş nəticə',
					'Yeni və mürəkkəb mövzuları sürətlə mənimsəmə bacarığı',
					'Təqaüd və seçmə proqramlarda güclü ilkin mövqe'
				],
				risks: [
					'Yalnız qiymət və ballara fokuslanıb praktik təcrübəni, komanda işini və ünsiyyət bacarıqlarını arxa plana atmaq',
					'Mükəmməllik təzyiqi səbəbindən yorulmaq və ya səhv etmək qorxusu ilə risk almamaq',
					'Uğurlu yolu avtomatik davam etdirib ixtisas seçimini öz maraqlarınızla yoxlamamaq'
				],
				actions: [
					'Xaricdə magistratura və ya mübadilə proqramları üçün təqaüd imkanlarını indidən araşdırın və son müraciət tarixlərini təqvimə yazın',
					'Universitetdə bir müəllimin rəhbərliyi altında elmi tədqiqat layihəsinə və ya tələbə konfransına qoşulun',
					'Biliklərinizi praktikaya çevirmək üçün sahənizdə nüfuzlu şirkətin təcrübə (internship) proqramına müraciət edin',
					'Olimpiada və akademik təcrübənizi gənc tələbələrə mentorluq vasitəsilə ötürün — bu, liderlik bacarığınızı da göstərir',
					'Nailiyyətlərinizi (diplom, sertifikat, layihə) bir portfelə toplayın və CV-nizdə aydın təqdim edin'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — yaşıdlarınızın çoxundan irəlidə',
				summary: 'Akademik profiliniz güclüdür və yaşıdlarınızın böyük hissəsini qabaqlayır. Yaxşı qəbul balı, nüfuzlu universitet, ardıcıl yüksək qiymətlər və ya olimpiada iştirakı kimi göstəricilər Sizi rəqabətli namizədə çevirir. Ən yüksək pilləyə çatmaq üçün Sizə çox az şey çatışmır. Bir-iki məqsədyönlü addım bu bazanı ekspert səviyyəsinə qaldıra bilər.',
				detail: 'Bu səviyyə çox vaxt orta məktəbi əla və ya yaxşı qiymətlərlə bitirmiş, qəbul imtahanında yüksək bal toplayıb istədiyi ixtisasa daxil olmuş insanlarda görünür. Bəziləri rayon və ya region olimpiadalarında mükafat qazanıb, lakin respublika mərhələsinə hələ çatmayıb. Belə profil yerli şirkətlərin təcrübə proqramlarında və magistratura qəbulunda yaxşı qarşılanır. Fərqi artırmaq üçün əsas imkan akademik nəticəni daha geniş tanınan bir göstərici ilə tamamlamaqdır: yüksək ÜOMG, tədqiqat işi və ya beynəlxalq müsabiqədə iştirak. Siz artıq düzgün yoldasınız; indi məsələ sürəti və istiqaməti dəqiqləşdirməkdir.',
				strengths: [
					'Sabit və etibarlı akademik nəticələr',
					'Öyrənməyə və imtahan hazırlığına sistemli yanaşma',
					'Seçmə proqramlar üçün rəqabətli namizəd profili'
				],
				risks: [
					'«Kifayət qədər yaxşıdır» düşüncəsi ilə inkişafı dayandırmaq',
					'Akademik nəticəni dil sertifikatı, layihə və ya təcrübə ilə tamamlamamaq',
					'Çox sayda fəaliyyətə eyni anda girib heç birində dərinləşməmək'
				],
				actions: [
					'ÜOMG-nizi növbəti semestrdə yüksəltmək üçün konkret fənlər üzrə yazılı plan qurun',
					'Sahənizdə bir olimpiada, keys müsabiqəsi və ya hakaton seçin və ona 2–3 ay hədəfli hazırlaşın',
					'Magistratura və ya xaricdə təhsil düşünürsünüzsə, IELTS və ya TOEFL sertifikatını əvvəlcədən alın',
					'Bir müəllimlə yaxından işləyərək kurs işinizi tədqiqat məqaləsinə və ya konfrans təqdimatına çevirin',
					'Hər semestrin sonunda nailiyyətlərinizi qeyd edib CV-nizi yeniləyin'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — yaşıdlarınızın əksəriyyəti ilə bir sırada',
				summary: 'Akademik göstəriciləriniz yaşıdlarınızın əksəriyyətinə yaxındır: möhkəm bazanız var, amma Sizi kəskin fərqləndirən nailiyyətlər hələ azdır. Bu, ən geniş və ən çevik qrupdur — buradan yuxarı qalxmaq tamamilə realdır. Çox vaxt bir neçə yaxşı seçilmiş addım (yüksək qəbul balı, olimpiada iştirakı, güclü magistr proqramı) profili əhəmiyyətli dərəcədə dəyişir. Sizin üçün əsas məsələ enerjini düzgün istiqamətə yönəltməkdir.',
				detail: 'Bu səviyyədə adətən orta məktəbi yaxşı qiymətlərlə bitirmiş, orta bal ilə universitetə qəbul olmuş və ya peşə təhsili almış insanlar olur. Biliklər mövcuddur, lakin onlar hələ ölçülə bilən, başqalarına göstərilə bilən nəticələrə — mükafat, sertifikat, tədqiqat — tam çevrilməyib. İşəgötürən baxımından belə profil «etibarlı, amma fərqlənməyən» kimi görünə bilər, buna görə digər sahələrdəki güclü tərəfləriniz (dil, proqram bilikləri, iş təcrübəsi) xüsusilə önəmlidir. Yaxşı xəbər odur ki, təhsil ən çox idarə edilə bilən sahələrdəndir. Düzgün plan və bir-iki il ardıcıl əmək nəticəni görünən şəkildə yüksəldir.',
				strengths: [
					'Möhkəm ümumi bilik bazası',
					'Müxtəlif istiqamətlərə keçmək üçün çeviklik',
					'Böyümə üçün geniş və real imkan'
				],
				risks: [
					'Hədəfsiz oxumaq — vaxt sərf edib ölçülə bilən nəticə əldə etməmək',
					'Özünüzü daim yaşıdlarınızla müqayisə edib motivasiyanı itirmək',
					'İxtisas seçimini yalnız bala görə edib maraq və bacarıqları nəzərə almamaq'
				],
				actions: [
					'Önümüzdəki 6 ay üçün bir ölçülə bilən akademik hədəf qoyun: ÜOMG-ni artırmaq, magistratura imtahanına hazırlaşmaq və ya bir sertifikat almaq',
					'Ən güclü olduğunuz fənni seçin və onu olimpiada, müsabiqə və ya onlayn kursla dərinləşdirin',
					'Həftəlik oxu cədvəli qurun: hər gün qısa, amma ardıcıl məşğələ uzun və nizamsız oxudan daha effektivdir',
					'Tələbə klublarına, elmi dərnəklərə və ya könüllü layihələrə qoşularaq təhsilinizi praktik fəaliyyətlə tamamlayın',
					'Müəllim və ya tyutorla danışıb zəif mövzularınızı müəyyənləşdirin və onlar üzrə ayrıca plan qurun'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — inkişaf üçün geniş meydan',
				summary: 'Təhsil göstəriciləriniz hazırda yaşıdlarınızın ortasından bir qədər aşağıdır. Bu, bacarıqsızlıq demək deyil: çox vaxt belə nəticə imkanların, istiqamətin və ya vaxtın hələ düzgün bölüşdürülmədiyini göstərir. Təhsil geri qalmanı aradan qaldırmaq üçün ən aydın yolları olan sahədir. Siz indi başlanğıc nöqtəsindəsiniz və buradan atılan hər addım nəticədə tez görünəcək.',
				detail: 'Bu səviyyədə olan insanlar çox vaxt orta məktəbi bitirib hələ ali təhsilə başlamamış və ya qəbul imtahanında istədikləri nəticəni ala bilməmiş olurlar. Bəziləri isə ailə, iş və ya digər səbəblərə görə təhsilə fasilə verib. Uğur qazanmış bir çox insanın akademik yolu da məhz belə başlayıb: təkrar qəbul imtahanı, kollec və ya peşə təhsili, sonra bakalavr və magistratura. Bu gün peşə təhsili, kolleclər və onlayn kurslar ənənəvi yolun dəyərli alternativi kimi getdikcə daha çox tanınır. Əsas odur ki, özünüz üçün aydın və real növbəti addımı müəyyən edəsiniz.',
				strengths: [
					'Hər kiçik irəliləyişin yekun nəticəyə nəzərəçarpacaq təsiri',
					'Öz yolunuzu seçmək azadlığı — hazır trayektoriyaya bağlı deyilsiniz',
					'Peşə təhsili, kollec və onlayn kurslar kimi alternativ yolların açıq olması'
				],
				risks: [
					'Bir uğursuz imtahanı yekun hökm kimi qəbul edib cəhdi dayandırmaq',
					'Təhsil planını daim «sonraya» saxlamaq',
					'Real olmayan hədəf qoyub tez ruhdan düşmək'
				],
				actions: [
					'Növbəti 12 ay üçün bir aydın təhsil məqsədi seçin: qəbul imtahanına təkrar hazırlaşmaq, kollecə və ya peşə məktəbinə daxil olmaq, yaxud bir onlayn kursu bitirmək',
					'DİM-in sınaq imtahanlarında iştirak edərək hazırkı səviyyənizi ölçün və zəif fənləri müəyyənləşdirin',
					'Gündə 45–60 dəqiqəlik sabit oxu vaxtı ayırın və bunu ən azı bir ay pozmayın',
					'Sizi dəstəkləyəcək müəllim, repetitor və ya oxu yoldaşı tapın — tək hazırlaşmaq daha çətindir',
					'Hər ayın sonunda nə öyrəndiyinizi qeyd edin ki, irəliləyişi öz gözünüzlə görəsiniz'
				]
			},
			basic: {
				title: 'İlkin səviyyə — yolun ən əvvəli',
				summary: 'Təhsil sahəsində hazırda çox az göstərici qeyd olunub və ya nəticələr hələ formalaşma mərhələsindədir. Bu, potensialınız haqqında deyil, sadəcə bugünkü vəziyyətin şəkli haqqında məlumatdır. Bir çox insan akademik yoluna gec və ya fasilədən sonra başlayır və böyük uğur qazanır. Sizin üçün ən dəyərli addım ilk, kiçik və real məqsədi seçməkdir.',
				detail: 'Bu səviyyədə adətən orta təhsili hələ tamamlanmamış, təhsilə uzun fasilə vermiş və ya rəsmi təhsil nəticələri azsaylı olan profillər olur. Bunun çoxlu səbəbi ola bilər: erkən işə başlamaq, ailə öhdəlikləri, yaşayış yerinin dəyişməsi və ya sadəcə maraq tapmamaq. Unutmayın ki, test yalnız formal göstəriciləri ölçür; həyatda öyrəndikləriniz və praktik biliyiniz burada tam əks olunmaya bilər. Peşə məktəbləri, kolleclər, ixtisasartırma kursları və pulsuz onlayn təhsil bu gün hər yaşda yeni başlanğıc üçün imkan yaradır. İlk addım Sizə maraqlı olan bir sahəni seçmək və orada qısa, tamamlana bilən bir kurs bitirməkdir.',
				strengths: [
					'Hər yeni nailiyyətin nəticəni sürətlə yüksəltməsi',
					'Maraqlarınıza uyğun yolu sıfırdan qurmaq imkanı',
					'Formal təhsildən kənarda qazandığınız həyat təcrübəsi'
				],
				risks: [
					'«Artıq gecdir» düşüncəsi ilə imkanları görməzdən gəlmək',
					'Çox böyük məqsəd qoyub ilk çətinlikdə dayanmaq'
				],
				actions: [
					'Sizə maraqlı olan bir sahə seçin və 4–8 həftəlik qısa, sertifikatlı kursla başlayın',
					'Orta təhsiliniz tamamlanmayıbsa, onu bitirmək üçün mövcud imkanları (məsələn, eksternat qaydasında imtahan) araşdırın',
					'Peşə məktəbləri və kolleclərin qəbul şərtləri ilə tanış olun — bu, sürətli və praktik bir yol ola bilər',
					'Hər gün 20–30 dəqiqəlik oxu vərdişi yaradın: kitab, məqalə və ya video dərs',
					'Kiçik nailiyyətlərinizi qeyd edin və 3 aydan sonra bu testi yenidən keçərək irəliləyişi yoxlayın'
				]
			}
		},
		resources: [
			'DİM-in qəbul imtahanlarına hazırlıq üçün rəsmi sınaq imtahanları və test topluları',
			'Fənn olimpiadalarına hazırlıq dərnəkləri və əvvəlki illərin olimpiada tapşırıqları',
			'Açıq onlayn kurs (MOOC) platformalarında universitet səviyyəli pulsuz kurslar',
			'Xaricdə təhsil və təqaüd proqramları haqqında məlumat verən dövlət və universitet portalları',
			'Universitetlərin elmi tələbə cəmiyyətləri, yay məktəbləri və tədqiqat layihələri'
		],
		careerLink: 'Təhsil profiliniz hansı peşələrə qapının daha asan açılacağını göstərir: güclü akademik nəticə tədqiqat, mühəndislik, tibb, hüquq və maliyyə kimi rəqabətli sahələrə yol açır. Lakin ixtisas seçimi yalnız bala görə deyil, maraqlarınıza və digər testlərdəki güclü tərəflərinizə görə edilməlidir — Talent Score-un şəxsiyyət və karyera testləri bu seçimdə Sizə kömək edə bilər.'
	},

	// ---------------------------------------------------------------- Dil bilikləri
	language: {
		id: 'language',
		name: 'Dil bilikləri',
		what: 'Dil bilikləri sahəsi bildiyiniz xarici dillərin sayını, hər biri üzrə səviyyənizi (Avropa şkalası üzrə A1-dən C2-yə qədər) və beynəlxalq sertifikatlarınızı qiymətləndirir. Burada əsas məsələ yalnız «dil bilirəm» demək deyil, bu biliyin nə qədər dərin olması və rəsmi şəkildə təsdiqlənməsidir.',
		how: 'Hər dil üçün səviyyə əsas çəki daşıyır: C1 və C2 səviyyələri B1–B2-dən, onlar da A1–A2-dən xeyli yüksək qiymətləndirilir. IELTS, TOEFL iBT və ya digər beynəlxalq sertifikat biliyi rəsmi təsdiqlədiyi üçün balı əlavə artırır, ikinci və üçüncü xarici dil isə profili daha da gücləndirir. Yekun nəticə Sizin yaşınızdakı iştirakçılarla müqayisədə persentil kimi göstərilir.',
		why: 'Beynəlxalq şirkətlərdə, bank və neft-qaz sektorunda, turizm və diplomatiyada ingilis dili çox vaxt işə qəbulun ilkin şərtidir, ikinci xarici dil isə namizədi fərqləndirir. Xaricdə təhsil və təqaüd proqramları üçün IELTS və ya TOEFL nəticəsi adətən məcburidir, yerli universitetlərin magistraturasında da xarici dil imtahanı tələb olunur.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — yaşıdlarınızın ən güclü 10%-i',
				summary: 'Dil bilikləriniz yaşıdlarınızın böyük əksəriyyətindən xeyli irəlidədir. Çox güman ki, ən azı bir xarici dildə C1–C2 səviyyəsində sərbəst danışır və bunu beynəlxalq sertifikatla təsdiqləmisiniz, ya da bir neçə dili yüksək səviyyədə bilirsiniz. Bu, beynəlxalq mühitdə özünüzü evdəki kimi rahat hiss etməyə imkan verir. Bu bacarıq artıq sadəcə üstünlük deyil, karyeranızın açar alətidir.',
				detail: 'Praktikada bu səviyyə, məsələn, IELTS-dən 7.0 və ya daha yüksək, TOEFL iBT-dən 100-dən yuxarı bal toplamış, ingilis dilində akademik məqalə oxuyub yaza bilən insanlara uyğundur. Bəziləri buna əlavə olaraq rus, türk, alman və ya fransız dilini də işgüzar səviyyədə bilir. Belə profil xarici universitetlərə birbaşa müraciət, beynəlxalq təşkilatlarda iş və uzaqdan çalışma imkanlarını açır. Siz danışıqlarda, təqdimatlarda və yazışmalarda xarici dildə də fikrinizi incəliklə ifadə edə bilirsiniz. Bu səviyyədə növbəti inkişaf peşəkar terminologiya, işgüzar yazı üslubu və ya yeni dil öyrənməkdir.',
				strengths: [
					'Xarici dildə sərbəst və dəqiq ünsiyyət',
					'Rəsmi sertifikatla təsdiqlənmiş, beynəlxalq səviyyədə tanınan bilik',
					'Xarici mənbələrdən birbaşa öyrənmə imkanı',
					'Fərqli mədəniyyətlərdən olan insanlarla rahat işləmə'
				],
				risks: [
					'Sertifikatın müddətinin bitməsi — IELTS və TOEFL nəticələri adətən 2 il etibarlıdır',
					'Dilə arxayınlaşıb onu peşəkar sahə bilikləri ilə tamamlamamaq',
					'Dildən istifadə azaldıqda səviyyənin tədricən zəifləməsi'
				],
				actions: [
					'Sahənizə aid peşəkar terminologiyanı (hüquq, maliyyə, İT, tibb və s.) xarici dildə sistemli öyrənin',
					'Biliyi canlı saxlamaq üçün həftədə ən azı bir dəfə xarici dildə təqdimat, yazı və ya müzakirədə iştirak edin',
					'İkinci və ya üçüncü xarici dili B2 səviyyəsinə çatdırmağı növbəti məqsəd kimi qoyun',
					'Tərcümə, könüllü redaktə və ya gənclərə dil mentorluğu ilə biliyinizi görünən nəticəyə çevirin',
					'Sertifikatınızın etibarlılıq müddətini izləyin və vacib müraciətlərdən əvvəl onu yeniləyin'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — xarici dildə inamlı ünsiyyət',
				summary: 'Dil biliklərinizlə yaşıdlarınızın əksəriyyətindən irəlidəsiniz. Çox güman ki, ən azı bir xarici dildə B2–C1 səviyyəsindəsiniz: gündəlik və işgüzar söhbəti rahat aparır, mətnləri çətinlik çəkmədən başa düşürsünüz. Ekspert səviyyəsinə keçmək üçün çox vaxt yalnız rəsmi sertifikat və ya daha dərin akademik dil bacarığı çatışmır. Bu, qısa müddətdə çatıla bilən hədəfdir.',
				detail: 'Bu səviyyədə olan insanlar adətən ingilis dilində filmləri altyazısız izləyə, işgüzar e-poçt yaza və müsahibədə özlərini təqdim edə bilirlər. IELTS nəticəsi varsa, o, çox vaxt 6.0–6.5 aralığında olur. Bəziləri bir dili güclü, ikincisini isə orta səviyyədə bilir. Bu profil yerli şirkətlərin əksəriyyəti üçün kifayət qədər güclüdür, lakin xaricdə təhsil və beynəlxalq vəzifələr üçün çox zaman 7.0 və daha yüksək IELTS balı tələb olunur. Akademik yazı və mürəkkəb mövzularda sərbəst danışıq Sizin növbəti inkişaf nöqtələrinizdir.',
				strengths: [
					'Gündəlik və işgüzar mövzularda inamlı ünsiyyət',
					'Xarici dildə məlumat axtarmaq və öyrənmək bacarığı',
					'Qısa hazırlıqla sertifikat imtahanında yüksək nəticə əldə etmək potensialı'
				],
				risks: [
					'Biliyi rəsmi sertifikatla təsdiqləməyi təxirə salmaq',
					'«Başa düşürəm, amma danışanda çətinlik çəkirəm» vəziyyətində qalmaq',
					'Yazı bacarığının danışıq bacarığından geri qalması'
				],
				actions: [
					'2–3 aylıq plan qurub IELTS və ya TOEFL iBT imtahanına yazılın — konkret tarix motivasiyanı artırır',
					'Hər həftə ən azı iki akademik esse yazın və müəllimə və ya dili güclü bilən dostunuza yoxlatdırın',
					'Danışıq klubuna və ya onlayn dil mübadiləsinə qoşularaq həftədə 2–3 saat canlı danışıq təcrübəsi toplayın',
					'Sahənizə dair xarici dildə kitab, podkast və ya peşəkar bloq izləyin',
					'İkinci xarici dil üçün A2 səviyyəsinə çatmağı yeni məqsəd kimi qoyun'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — möhkəm baza, növbəti pillə yaxındır',
				summary: 'Dil biliyiniz yaşıdlarınızın əksəriyyəti ilə eyni səviyyədədir. Çox güman ki, bir xarici dildə B1–B2 səviyyəsində ünsiyyət qura, sadə mətnləri və söhbətləri başa düşə bilirsiniz. Bu, gündəlik işlər üçün kifayətdir, lakin rəqabətli vakansiyalar və xaricdə təhsil üçün hələ yetərli olmaya bilər. Ardıcıl məşqlə bir il ərzində növbəti səviyyəyə keçmək tamamilə realdır.',
				detail: 'Bu səviyyədə adətən məktəbdə və ya kursda ingilis və ya rus dilini öyrənmiş, səyahətdə və sadə yazışmada çətinlik çəkməyən insanlar olur. Mürəkkəb mövzularda danışmaq, sürətli nitqi tutmaq və rəsmi mətn yazmaq isə hələ əlavə səy tələb edir. Sertifikat çox vaxt olmur və ya IELTS nəticəsi 5.0–5.5 aralığında olur. İşəgötürən gözündə bu, «dili bilir, amma onunla işləyə bilmir» kimi görünə bilər. Danışıq təcrübəsini və söz ehtiyatını məqsədyönlü artırmaq Sizi tez bir zamanda daha güclü qrupa keçirəcək.',
				strengths: [
					'Gündəlik ünsiyyət üçün yetərli dil bazası',
					'Qrammatikanın əsas strukturlarının mənimsənilməsi',
					'Növbəti səviyyəyə keçmək üçün aydın və ölçülə bilən yol'
				],
				risks: [
					'«Orta səviyyə platosu» — uzun müddət eyni yerdə qalıb irəliləməmək',
					'Yalnız passiv öyrənmə (oxu, dinləmə) ilə kifayətlənib danışmamaq',
					'Səhv etmək qorxusu ilə danışıqdan yayınmaq'
				],
				actions: [
					'Hər gün 15–20 yeni söz öyrənin və onları cümlələrdə işlədin — aralıqlı təkrar tətbiqləri bunu asanlaşdırır',
					'Həftədə ən azı iki dəfə xarici dildə 30 dəqiqəlik danışıq təcrübəsi təşkil edin',
					'Sevdiyiniz serialları hədəf dildə əvvəlcə həmin dildə altyazı ilə, sonra altyazısız izləyin',
					'Qısa gündəlik yazın: hər gün xarici dildə 5–6 cümlə',
					'6 ay sonra IELTS sınaq testi keçirərək irəliləyişi ölçün'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — dil yolunun ilk mərhələləri',
				summary: 'Xarici dil bilikləriniz hazırda ilkin mərhələdədir: çox güman ki, A1–A2 səviyyəsində sadə ifadələri başa düşür və özünüzü qısa cümlələrlə təqdim edə bilirsiniz. Bu, yaxşı bir başlanğıc nöqtəsidir. Dil öyrənmə ən aydın ölçülən bacarıqlardan biridir: hər ay görünən irəliləyiş əldə etmək mümkündür. Gündəlik qısa məşq bir il ərzində Sizi orta səviyyəyə qaldıra bilər.',
				detail: 'Bu səviyyədə olan insanlar adətən məktəbdə dil dərsləri keçmiş, lakin onu praktikada az istifadə etmiş olurlar. Salamlaşmaq, sadə suallar vermək, menyunu və ya yol nişanlarını oxumaq mümkündür, amma uzun söhbət və mətn hələ çətindir. Bu tamamilə normaldır: dil bacarığı istifadə olunduqca inkişaf edir. Ən böyük maneə çox vaxt bilik çatışmazlığı deyil, səhv etmək qorxusudur. Kiçik, lakin gündəlik təcrübə — söz kartları, qısa videolar, sadə yazışmalar — burada ən effektiv yoldur.',
				strengths: [
					'Əsas sözləri və ifadələri tanıma',
					'Sürətli irəliləyiş potensialı — başlanğıc mərhələdə nəticələr tez görünür',
					'Hansı dilə fokuslanacağınızı maraq və karyera məqsədinə görə seçmək imkanı'
				],
				risks: [
					'Bir neçə dilə eyni anda başlayıb heç birində irəliləməmək',
					'Yalnız qrammatika qaydalarına fokuslanıb danışığa keçməmək',
					'Motivasiyanın ilk həftələrdən sonra zəifləməsi'
				],
				actions: [
					'Karyera məqsədinizə ən uyğun bir dili (çox vaxt ingilis dili) seçin və 6 ay ona fokuslanın',
					'Hər gün 15 dəqiqə dil tətbiqi və ya söz kartları ilə məşğul olun — ardıcıllıq müddətdən vacibdir',
					'İlk 2–3 ay üçün ən çox işlənən 500 sözü öyrənməyi məqsəd kimi qoyun',
					'Hədəf dildə sadə videolar və cizgi filmləri izləyin — onların dili aydın və anlaşıqlıdır',
					'Strukturlu öyrənmə üçün qrup dil kursuna yazılın və ya repetitorla həftədə 2 dərs keçin'
				]
			},
			basic: {
				title: 'İlkin səviyyə — ilk addım üçün ən doğru vaxt',
				summary: 'Hazırda xarici dil biliyiniz ya qeyd olunmayıb, ya da çox ilkin mərhələdədir. Bu, heç bir halda qabiliyyətsizlik demək deyil — sadəcə bu sahəyə hələ vaxt ayırmamısınız. Ana dilinizi mükəmməl öyrənmisinizsə, başqa bir dili də öyrənə bilərsiniz. İlk 100 söz və ilk sadə dialoq Sizin üçün yeni bir qapı açacaq.',
				detail: 'Bu səviyyədə profillər adətən məktəbdə dil dərslərini az mənimsəmiş və ya xarici dillə praktikada rastlaşmamış insanlara aiddir. Azərbaycanda bir çox insan rus və ya türk dilini yaxşı başa düşür, lakin bunu ayrıca «xarici dil» kimi qeyd etmir — bu Sizə aiddirsə, testi yenidən keçəndə onu da əlavə edin. Bu gün dil öyrənmək üçün pulsuz tətbiqlər, videolar və onlayn dərslər hər kəsə açıqdır. İlk aylar əsasən vərdiş yaratmaq üçündür: hər gün az, amma mütləq. Bir ildən sonra sadə söhbət apara bilmək tamamilə real hədəfdir.',
				strengths: [
					'Təmiz başlanğıc — səhv vərdişləri düzəltməyə ehtiyac yoxdur',
					'Hansı dili öyrənəcəyinizi tamamilə öz məqsədinizə görə seçmək imkanı',
					'İlk irəliləyişlərin çox tez hiss olunması'
				],
				risks: [
					'«Mən dil öyrənə bilmirəm» kimi yanlış inanc',
					'Çətin materialla başlayıb tez ruhdan düşmək'
				],
				actions: [
					'Bir dil seçin və pulsuz dil tətbiqi ilə gündə 10 dəqiqə məşğul olmağa başlayın',
					'İlk ay üçün məqsəd: 100 əsas söz və özünüzü təqdim etmək üçün 5 cümlə',
					'Telefonunuzun və ya sevdiyiniz tətbiqlərin dilini hədəf dilə dəyişin',
					'Başlanğıc səviyyəli qrup kursuna yazılın — müəllim və qrup motivasiyanı qoruyur',
					'Rus və ya türk dilini başa düşürsünüzsə, bunu testdə qeyd edin və həmin dili sistemli şəkildə gücləndirin'
				]
			}
		},
		resources: [
			'Beynəlxalq dil sertifikatı (IELTS/TOEFL) hazırlıq kursları və rəsmi sınaq testləri',
			'Dil mübadiləsi (tandem) platformaları və danışıq klubları',
			'Hədəf dildə podkastlar, xəbər saytları və altyazılı filmlər',
			'Söz ehtiyatı üçün aralıqlı təkrar (spaced repetition) əsaslı kart tətbiqləri',
			'Xarici dildə könüllülük proqramları və beynəlxalq gənclər mübadilələri'
		],
		careerLink: 'Güclü dil bilikləri Sizi yerli bazarla məhdudlaşdırmır: beynəlxalq layihələr, uzaqdan iş, xaricdə təhsil, tərcümə, diplomatiya və turizm kimi istiqamətlər məhz bu bacarığa söykənir. Dil özlüyündə peşə olmasa da, demək olar ki, istənilən peşədə dəyərinizi artıran ən universal alətlərdən biridir.'
	},

	// ---------------------------------------------------------------- Xüsusi bacarıqlar
	special: {
		id: 'special',
		name: 'Xüsusi bacarıqlar',
		what: 'Xüsusi bacarıqlar sahəsi yaradıcı istedadlarınızı — rəsm, musiqi, rəqs və yazıçılıq kimi fəaliyyətləri qiymətləndirir. Burada həm bu işlə hansı səviyyədə (həvəskar və ya peşəkar) məşğul olduğunuz, həm də müsabiqə, sərgi, konsert və ya nəşr kimi nailiyyətləriniz nəzərə alınır.',
		how: 'Peşəkar səviyyədə fəaliyyət həvəskar məşğuliyyətdən, rəsmi nailiyyətlər (müsabiqə mükafatları, sərgilər, çıxışlar, nəşr olunmuş əsərlər) isə sadəcə məşğuliyyətdən daha yüksək qiymətləndirilir; bir neçə sahədə bacarıq balı əlavə artırır. Nəticə yaşıdlarınızla müqayisədə persentil kimi hesablanır: məsələn, 16 yaşlı gəncin şəhər müsabiqəsindəki qələbəsi öz yaş qrupunda böyük nailiyyət sayılır.',
		why: 'Yaradıcı fəaliyyət təxəyyülü, səbri, intizamı və özünüifadə bacarığını göstərir — bunlar dizayn, marketinq, media və təhsil kimi sahələrdə birbaşa, digər peşələrdə isə dolayısı ilə dəyərlidir. Bir çox universitet və təqaüd proqramı da namizədi seçərkən akademik nəticələrdən kənar istedadlara və portfelə baxır.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — yaşıdlarınızın ən güclü 10%-i',
				summary: 'Yaradıcı bacarıqlarınız yaşıdlarınız arasında nadir səviyyədədir. Çox güman ki, bu sahədə peşəkar səviyyədə çalışır və ya ciddi müsabiqə, sərgi, konsert və nəşr kimi tanınmış nailiyyətlərə sahibsiniz. Bu, təkcə istedadın deyil, illərlə davam edən zəhmətin və intizamın nəticəsidir. Sizin üçün sual artıq «bacarırammı?» deyil, «bunu hansı formada davam etdirim?» sualıdır.',
				detail: 'Praktikada bu səviyyə respublika və ya beynəlxalq müsabiqədə mükafat qazanmış gənc musiqiçiyə, əsərləri sərgilərdə nümayiş olunan rəssama, peşəkar ansamblda çıxış edən rəqqasa və ya hekayələri jurnallarda dərc olunmuş yazara bənzəyir. Belə profillər incəsənət universitetlərinə qəbulda, beynəlxalq festivallarda və yaradıcı rezidensiya proqramlarında güclü mövqeyə malikdir. Sizin işiniz artıq başqaları tərəfindən qiymətləndirilir və tanınır. Bu mərhələdə inkişafın əsas istiqaməti öz üslubunuzu dərinləşdirmək, auditoriya qurmaq və yaradıcılığı dayanıqlı gəlir mənbəyinə çevirməyi öyrənməkdir.',
				strengths: [
					'Uzun illik məşqlə formalaşmış yüksək texniki ustalıq',
					'Müsabiqə və səhnə təzyiqi altında nəticə göstərmə bacarığı',
					'Tanınmış nailiyyətlər və güclü portfel',
					'Yaradıcı intizam və öz üzərində işləmə vərdişi'
				],
				risks: [
					'Yaradıcılıq ilə təhsil və iş arasında balans qurmaqda çətinlik və yorğunluq',
					'Yalnız sənətə fokuslanıb müəllif hüququ, müqavilə və təqdimat kimi biznes məsələlərini öyrənməmək',
					'Daim kənar qiymətləndirmədən asılı olub öz yaradıcı səsinizi itirmək'
				],
				actions: [
					'Ən yaxşı işlərinizdən ibarət peşəkar onlayn portfel və ya video arxiv yaradın',
					'Bu il beynəlxalq festival, müsabiqə və ya rezidensiya proqramlarından birinə müraciət edin',
					'Sahənizdə tanınmış mütəxəssisdən ustad dərsi alın və ya mentorluq əlaqəsi qurun',
					'Yaradıcılığın biznes tərəfini öyrənin: müəllif hüquqları, qiymət təyini, sosial mediada təqdimat',
					'Gənc istedadlara dərs və ya emalatxana keçərək biliyinizi bölüşün — bu, həm gəlir, həm də yeni baxış verir'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — görünən və inkişaf edən istedad',
				summary: 'Yaradıcı bacarıqlarınız yaşıdlarınızın əksəriyyətindən yüksəkdir. Çox güman ki, bu sahə ilə ciddi məşğulsunuz, ixtisaslaşmış məktəbdə və ya müəllimlə təhsil alırsınız, ya da ilk nailiyyətlərinizi — şəhər və rayon müsabiqələrində mükafat, konsert çıxışları, kiçik sərgilər — artıq qazanmısınız. Bu, aydın istedadın və davamlı əməyin göstəricisidir. Növbəti pillə daha geniş auditoriya və daha yüksək səviyyəli müsabiqələrdir.',
				detail: 'Bu səviyyədə olan insanlar çox vaxt musiqi məktəbini bitirmiş, rəsm studiyasında illərlə məşğul olmuş, rəqs ansamblında çıxış edən və ya ədəbi müsabiqələrdə iştirak edən gənclərdir. Onların işi artıq dost və ailə çərçivəsindən kənarda da qiymətləndirilir. Peşəkar səviyyəyə keçid adətən iki şeydən asılıdır: daha ciddi müsabiqə və platformalarda iştirak, həm də texnikanın sistemli şəkildə təkmilləşdirilməsi. Bu mərhələdə yaxşı müəllim və ya mentor çox böyük fərq yaradır. Siz bu bacarığı peşəyə çevirmək və ya güclü hobbi kimi saxlamaq arasında seçim etmək üçün yaxşı mövqedəsiniz.',
				strengths: [
					'Möhkəm texniki baza və ardıcıl məşq vərdişi',
					'İlk ictimai nailiyyətlər və tanınma',
					'Tənqidə açıq olmaq və öz işini təkmilləşdirmək bacarığı'
				],
				risks: [
					'Rahat səviyyədə qalıb daha çətin müsabiqələrə müraciət etməkdən çəkinmək',
					'Nailiyyətləri sənədləşdirməmək — diplomlar, video və fotolar itə bilər',
					'Təhsil və imtahan yükü artdıqca məşqləri tamamilə dayandırmaq'
				],
				actions: [
					'Bu il ən azı bir respublika və ya beynəlxalq səviyyəli müsabiqəyə, festivala və ya sərgiyə müraciət edin',
					'Bütün diplom, sertifikat, çıxış videoları və əsərlərinizi bir rəqəmsal portfeldə toplayın',
					'Həftəlik məşq cədvəlinizi yazılı şəkildə qurun və texnikanızın zəif tərəfi üzərində ayrıca işləyin',
					'Daha təcrübəli müəllim və ya mentor tapın və ondan müntəzəm rəy alın',
					'İşlərinizi sosial mediada və ya yaradıcı platformalarda paylaşaraq ilk auditoriyanızı qurun'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — davamlı maraq, formalaşan bacarıq',
				summary: 'Yaradıcı fəaliyyətlə müntəzəm məşğulsunuz və bu sahədə yaşıdlarınızın əksəriyyəti ilə eyni səviyyədəsiniz. Çox güman ki, həvəskar səviyyədə rəsm çəkir, musiqi alətində çalır, rəqs edir və ya yazırsınız, lakin rəsmi nailiyyətləriniz hələ azdır. Bu, tamamilə təbii bir mərhələdir. Daha sistemli məşq və ilk ictimai çıxış bu bacarığı növbəti səviyyəyə qaldıra bilər.',
				detail: 'Bu səviyyədə adətən yaradıcılığı sevən, ona boş vaxtını həsr edən, amma onu hələ ciddi məqsədə çevirməmiş insanlar olur. Bəziləri uşaqlıqda musiqi və ya rəsm məktəbinə gedib sonra fasilə verib, bəziləri isə özbaşına, videolar vasitəsilə öyrənir. Bacarığın əsas elementləri var, lakin texnika və üslub hələ formalaşır. Ən böyük sıçrayış adətən müəllimlə və ya qrupla işləməyə başladıqda və işinizi ilk dəfə ictimaiyyətə təqdim etdikdə baş verir. Unutmayın: yaradıcı bacarıq peşə olmasa belə, stressin idarəsi, özünüifadə və şəxsi brend üçün böyük dəyər daşıyır.',
				strengths: [
					'Yaradıcılığa səmimi maraq və daxili motivasiya',
					'Əsas texniki bacarıqların mövcudluğu',
					'Fərqli üslub və istiqamətləri sınamaq üçün açıqlıq'
				],
				risks: [
					'Məşqlərin nizamsız olması səbəbindən irəliləyişin yavaşlaması',
					'İşinizi başqalarına göstərməkdən çəkinmək',
					'Özünüzü peşəkarlarla müqayisə edib ruhdan düşmək'
				],
				actions: [
					'Həftədə ən azı 3 dəfə 30–45 dəqiqəlik sabit məşq vaxtı ayırın',
					'Bir müəllimə, studiyaya və ya yaradıcı dərnəyə qoşulun — strukturlu rəy irəliləyişi sürətləndirir',
					'Yaxın 3 ay ərzində ilk ictimai çıxışınızı planlaşdırın: məktəb tədbiri, yerli müsabiqə və ya onlayn paylaşım',
					'30 günlük yaradıcı çağırışla (məsələn, hər gün bir eskiz və ya bir şeir) vərdişi möhkəmləndirin',
					'Sevdiyiniz ustadların işlərini təhlil edin və onların texnikasını təkrarlamağa çalışın'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — yaradıcılığın ilk izləri',
				summary: 'Yaradıcı fəaliyyətlə hazırda arabir və ya yeni-yeni məşğul olursunuz. Bu, istedadın olmaması deyil — sadəcə bacarıq hələ müntəzəm inkişaf mərhələsinə keçməyib. Rəsm, musiqi, rəqs və yazı hər yaşda öyrənilə bilən bacarıqlardır. Kiçik, lakin müntəzəm təcrübə qısa müddətdə Sizə həm zövq, həm də görünən irəliləyiş gətirəcək.',
				detail: 'Bu səviyyədə olan insanlar çox vaxt yaradıcılığa maraq göstərir, amma ona ayrıca vaxt ayırmır: arabir eskiz çəkir, gitara akkordlarını sınayır, rəqs videolarına baxır və ya dəftərə şeir yazırlar. Əsas texnika və nəzəriyyə hələ formalaşmayıb, buna görə nəticələr qeyri-sabit ola bilər. Bu mərhələ eksperiment üçün idealdır: hansı sahənin Sizə daha çox zövq verdiyini kəşf edə bilərsiniz. Yaradıcı bacarıq istedad qədər vərdişdən də asılıdır. Gündə 15 dəqiqə belə bir neçə ay ərzində əhəmiyyətli dəyişiklik yaradır.',
				strengths: [
					'Yeni sahələri kəşf etmək üçün maraq və açıqlıq',
					'Nəticə təzyiqi olmadan sərbəst sınamaq imkanı',
					'İlk mərhələdə sürətli irəliləyiş potensialı'
				],
				risks: [
					'Mükəmməl nəticə gözləyib erkən dayanmaq',
					'Bir neçə sahə arasında daim keçid edib heç birində dərinləşməmək'
				],
				actions: [
					'Sizə ən çox zövq verən bir yaradıcı sahə seçin və 2 ay ona fokuslanın',
					'Pulsuz onlayn dərs seriyası ilə əsas texnikanı addım-addım öyrənin',
					'Həftədə 3 dəfə 15–20 dəqiqəlik məşq vaxtını təqvimə yazın',
					'İşlərinizi tarixlə saxlayın ki, bir neçə aydan sonra irəliləyişi müqayisə edə biləsiniz',
					'Yaxınlıqdakı gənclər mərkəzində və ya yaradıcılıq dərnəyində sınaq dərsinə gedin'
				]
			},
			basic: {
				title: 'İlkin səviyyə — kəşf olunmağı gözləyən sahə',
				summary: 'Bu testdə hələ xüsusi yaradıcı bacarıq qeyd olunmayıb və ya o, çox ilkin mərhələdədir. Bu, tamamilə normaldır: hər kəsin istedadı rəsm, musiqi, rəqs və ya yazıda üzə çıxmır. Bəzən yaradıcılıq foto, video montaj, əl işi, kulinariya və ya ideya yaratmaq kimi başqa formalarda özünü göstərir. Sizin üçün bu sahə kəşf və sınaq üçün açıq bir meydandır.',
				detail: 'Bu səviyyədə profillər adətən yaradıcı fəaliyyətə hələ vaxt ayırmamış və ya bu imkanı tapmamış insanlara aiddir. Bir çox gənc uşaqlıqda musiqi və ya rəsm dərsinə getmək imkanı olmadan böyüyür — bu, qabiliyyətin deyil, imkanın göstəricisidir. Yaradıcı bacarıqlar yaşdan asılı olmayaraq öyrənilə bilər və hətta qısa təcrübə də təfəkkürü, səbri və özünüifadəni inkişaf etdirir. Sizdən peşəkar olmaq tələb olunmur; məqsəd sadəcə özünüzə uyğun yaradıcı «çıxış yolunu» tapmaqdır. Unutmayın ki, digər sahələrdəki güclü tərəfləriniz bu nəticədən asılı deyil.',
				strengths: [
					'Hazır çərçivə olmadan istənilən sahəni sınamaq azadlığı',
					'Kiçik təcrübələrin belə yeni maraq kəşf etdirə bilməsi',
					'Enerjinizi hansı sahələrə yönəltmək barədə aydın mənzərə'
				],
				risks: [
					'«Mən yaradıcı insan deyiləm» kimi yanlış inanc',
					'Yaradıcı fəaliyyəti vaxt itkisi hesab edib tamamilə kənara qoymaq'
				],
				actions: [
					'Bir ay ərzində üç fərqli yaradıcı fəaliyyəti sınayın: məsələn, eskiz, sadə musiqi tətbiqi və qısa hekayə yazmaq',
					'Gənclər mərkəzində və ya onlayn platformada pulsuz başlanğıc emalatxanasına qoşulun',
					'Gündəlik həyatdakı yaradıcılığınızı (foto, video, dekor, kulinariya) da dəyərləndirin və inkişaf etdirin',
					'Konsert, sərgi və ya teatra gedin — ilham çox vaxt başqalarının işini görəndə yaranır',
					'Sizə ən yaxın gələn fəaliyyəti seçib 3 ay sonra bu testi yenidən keçin'
				]
			}
		},
		resources: [
			'Musiqi, rəssamlıq və incəsənət məktəbləri, uşaq-gənclər yaradıcılıq mərkəzləri',
			'Gənclər üçün respublika və beynəlxalq yaradıcılıq müsabiqələri və festivallar',
			'Onlayn portfel platformaları və yaradıcı icmalar',
			'Ustad dərsləri (master-class), yaradıcılıq emalatxanaları və yay düşərgələri',
			'Ədəbi dərnəklər, gənc yazarlar üçün jurnal və almanaxlar'
		],
		careerLink: 'Xüsusi bacarıqlar həm müstəqil yaradıcı karyera (rəssam, musiqiçi, xoreoqraf, yazıçı), həm də dizayn, reklam, kino, oyun sənayesi və müəllimlik kimi yaxın sahələr üçün təməl ola bilər. Yaradıcı peşə seçməsəniz belə, bu bacarıqlar Sizi komandada fərqləndirən keyfiyyət kimi CV-nizdə yer almağa layiqdir.'
	},

	// ---------------------------------------------------------------- İdman
	sport: {
		id: 'sport',
		name: 'İdman',
		what: 'İdman sahəsi fiziki fəallığınızı və idman nailiyyətlərinizi qiymətləndirir: hansı idman növləri ilə məşğul olduğunuzu, bunu həvəskar və ya peşəkar səviyyədə etdiyinizi, həmçinin rayon, region, respublika, dünya və Olimpiya səviyyəli yarışlarda hansı yerləri tutduğunuzu. Şahmat kimi zehni idman növləri də bura daxildir.',
		how: 'Peşəkar səviyyəli məşğuliyyət həvəskar məşğuliyyətdən daha yüksək qiymətləndirilir, yarış nailiyyətləri isə həm yarışın miqyasına (rayondan Olimpiadaya qədər), həm də tutulan yerə görə çəki alır. Məsələn, respublika çempionatında qızıl medal rayon yarışında iştirakdan dəfələrlə yüksək bal gətirir. Nəticə yaşıdlarınızla müqayisədə persentil kimi hesablanır.',
		why: 'İdman nailiyyətləri intizamı, komanda ruhunu, təzyiq altında soyuqqanlı qalmağı və məğlubiyyətdən sonra yenidən ayağa qalxmağı göstərir — işəgötürənlərin ən çox axtardığı keyfiyyətlər. Bir çox universitet, xüsusən xaricdə, uğurlu idmançılara ayrıca təqaüd və qəbul üstünlükləri təklif edir.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — yaşıdlarınızın ən güclü 10%-i',
				summary: 'İdman nailiyyətləriniz yaşıdlarınız arasında nadir rast gəlinən səviyyədədir. Çox güman ki, peşəkar səviyyədə məşq edir və respublika və ya beynəlxalq yarışlarda mükafat qazanmısınız. Bu nəticənin arxasında illərlə erkən məşqlər, ciddi rejim və böyük iradə dayanır. Siz artıq idmançı kimi formalaşmısınız — indi bu təcrübəni uzunmüddətli karyera planına çevirmək vaxtıdır.',
				detail: 'Praktikada bu səviyyə, məsələn, güləş, cüdo və ya şahmat üzrə Azərbaycan çempionatında medal qazanmış, milli yığmanın gənclər heyətində yer almış və ya Avropa və dünya birinciliklərində çıxış etmiş idmançıya uyğundur. Belə nəticələr klub müqavilələrinə, idman təqaüdlərinə və xarici universitetlərin idman proqramlarına yol açır. Siz təzyiq altında qərar verməyi, məğlubiyyəti qəbul etməyi və yenidən hazırlaşmağı yaxşı bilirsiniz. Bu səviyyədə ən vacib məsələlərdən biri idman karyerası ilə təhsili paralel aparmaq və idmandan sonrakı həyatı da əvvəlcədən düşünməkdir. Unutmayın: idmanda qazandığınız intizam istənilən sahədə Sizin ən güclü kapitalınızdır.',
				strengths: [
					'Yüksək intizam, rejimə sadiqlik və iradə gücü',
					'Böyük yarışların təzyiqi altında nəticə göstərmə təcrübəsi',
					'Məğlubiyyətdən dərs çıxarıb yenidən ayağa qalxmaq bacarığı',
					'Komanda və məşqçi ilə peşəkar əməkdaşlıq vərdişi'
				],
				risks: [
					'Ağır yüklənmə və yetərsiz bərpa səbəbindən zədələnmə riski',
					'Təhsili və idmandan sonrakı karyera planını arxa plana atmaq',
					'Bütün kimliyi yalnız nəticələrə bağlamaq — uğursuz mövsüm özgüvəni çox sarsıda bilər'
				],
				actions: [
					'Məşqçinizlə birlikdə bərpa və zədə profilaktikası planını mütəmadi nəzərdən keçirin',
					'İdman təqaüdü təklif edən yerli və xarici universitetləri araşdırın və müraciət tələblərini öyrənin',
					'Təhsili dayandırmayın: distant kurslar və ya çevik cədvəlli proqramlarla paralel ixtisas qazanın',
					'Gələcək üçün məşqçilik, idman menecmenti və ya idman jurnalistikası kimi istiqamətlərlə tanış olun',
					'Nailiyyətlərinizi (diplom, reytinq, video) sənədləşdirin və idman CV-si hazırlayın'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — yarış təcrübəsi olan idmançı',
				summary: 'İdman sahəsində yaşıdlarınızın əksəriyyətindən irəlidəsiniz. Çox güman ki, müntəzəm məşq edir, rayon və ya region yarışlarında uğur qazanmısınız, bəlkə də respublika səviyyəsində çıxış etmisiniz. Bu, ciddi zəhmətin və idmana sadiqliyin göstəricisidir. Daha yüksək səviyyəli yarışlara hədəfli hazırlıq Sizi ekspert səviyyəsinə yaxınlaşdıra bilər.',
				detail: 'Bu səviyyədə adətən idman məktəbində və ya klubda illərlə məşq edən, yarışlarda müntəzəm iştirak edən və bəzən mükafat qazanan idmançılar olur. Bəziləri həvəskar statusda olsa da yüksək nəticələr göstərir, bəziləri isə peşəkar səviyyəyə yeni keçir. Belə təcrübə məktəb və universitet komandalarında liderlik rolu, idman təqaüdlərinə müraciət və məşqçi köməkçisi kimi ilk iş imkanları yaradır. Növbəti pillə adətən daha güclü məşqçi, daha sistemli məşq planı və respublika səviyyəli yarışlarda müntəzəm iştirakla bağlıdır. Bu mərhələdə rejim və bərpa nəticələrə birbaşa təsir edir.',
				strengths: [
					'Müntəzəm məşq vərdişi və yaxşı fiziki hazırlıq',
					'Yarış atmosferinə öyrəşmə və rəqabət ruhu',
					'Komanda daxilində məsuliyyət və liderlik təcrübəsi'
				],
				risks: [
					'Təhsil və idman arasında vaxt bölgüsündə çətinlik',
					'Plato effekti — uzun müddət eyni nəticələrdə qalmaq',
					'Bərpaya və yuxuya az diqqət yetirmək'
				],
				actions: [
					'Növbəti mövsüm üçün konkret yarış hədəfi qoyun: məsələn, respublika çempionatında ilk üçlüyə düşmək',
					'Məşqçinizlə birlikdə yazılı məşq və bərpa planı hazırlayın',
					'Hər məşqi və yarışı qısa gündəlikdə qeyd edin — zəif tərəfləri görmək asanlaşacaq',
					'Federasiyanın və ya klubun seçmə düşərgələrinə və turnirlərinə müraciət edin',
					'İdmanda qazandığınız liderlik və komanda işi təcrübəsini CV-nizdə aydın təsvir edin'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — fəal və sağlam həyat tərzi',
				summary: 'İdmanla müntəzəm məşğulsunuz və bu sahədə yaşıdlarınızın əksəriyyəti ilə eyni səviyyədəsiniz. Çox güman ki, həvəskar səviyyədə futbol, basketbol, voleybol, döyüş növləri və ya fitneslə məşğul olursunuz, bəlkə də məktəb və ya rayon yarışlarında iştirak etmisiniz. Bu, sağlam vərdiş və yaxşı enerji mənbəyidir. İstəsəniz, onu daha ciddi yarış təcrübəsinə çevirmək üçün real imkanınız var.',
				detail: 'Bu səviyyədə olan insanlar idmanı həyatın bir hissəsi kimi görür: həftədə bir neçə dəfə məşq edir, dostlarla oynayır, bəzən həvəskar turnirlərdə çıxış edirlər. Rəsmi yarış nailiyyətləri isə hələ az və ya yerli səviyyədədir. İşəgötürənlər üçün bu profil fəal, enerjili və komanda oyununu bilən insan təsəvvürü yaradır. Daha yüksək nəticəyə çatmaq üçün çox vaxt bir idman növü seçib onda məşqçi ilə sistemli işləmək lazımdır. Yarış hədəfi olmasa belə, müntəzəm idman diqqəti, əhval-ruhiyyəni və iş məhsuldarlığını dəstəkləyir.',
				strengths: [
					'Müntəzəm fiziki fəallıq və enerji',
					'Komanda oyunlarında əməkdaşlıq təcrübəsi',
					'İdmanı həyat tərzinin bir hissəsinə çevirmək bacarığı'
				],
				risks: [
					'İmtahan və gərgin iş dövrlərində məşqləri tamamilə dayandırmaq',
					'Məşqçisiz və plansız çalışdıqda zədə riski',
					'İrəliləyişi ölçməmək — məqsəd olmadıqda motivasiya zəifləyir'
				],
				actions: [
					'Ən çox zövq aldığınız idman növünü seçin və yaxınlıqdakı klubda və ya idman məktəbində qeydiyyatdan keçin',
					'Növbəti 6 ay üçün ölçülə bilən hədəf qoyun: həvəskar turnirdə iştirak, 5 km qaçış, yeni kəmər və s.',
					'Həftəlik məşq cədvəlini təqvimə yazın və onu dərs və iş qədər ciddi qəbul edin',
					'Universitet və ya iş yerindəki idman komandasına qoşulun',
					'Məşqlərinizi tətbiqlə izləyin və aylıq irəliləyişi qeyd edin'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — hərəkətə keçmək üçün yaxşı vaxt',
				summary: 'İdmanla hazırda nizamsız və ya yeni-yeni məşğul olursunuz və bu sahədə yaşıdlarınızın ortasından bir qədər aşağıdasınız. Lakin idman irəliləyişin ən tez hiss olunduğu sahələrdən biridir. Çox insan bir neçə həftəlik müntəzəm məşqdən sonra özünü daha enerjili hiss etdiyini deyir. Sizdən çempion olmaq tələb olunmur — əsas məqsəd hərəkəti vərdişə çevirməkdir.',
				detail: 'Bu səviyyədə olan insanlar çox vaxt məktəbdə bədən tərbiyəsi dərslərində iştirak etmiş, arabir futbol oynamış və ya idman zalına bir neçə dəfə getmiş olurlar, lakin bu, müntəzəm xarakter almayıb. Dərs, iş və ya digər öhdəliklər idmana vaxt ayırmağı çətinləşdirə bilər. Yaxşı xəbər odur ki, başlamaq üçün bahalı avadanlıq və ya xüsusi istedad lazım deyil: gəzinti, qaçış, ev məşqləri və ya dostlarla oyun yaxşı başlanğıcdır. İdmanda irəliləyiş çox aydın görünür, bu da motivasiyanı qoruyur. Bir neçə ay ərzində bir idman növünü seçib orada müntəzəm məşq etmək tamamilə real məqsəddir.',
				strengths: [
					'İdmana müsbət münasibət və ilkin təcrübə',
					'Başlanğıcda irəliləyişin çox tez hiss olunması',
					'Sizə uyğun idman növünü sərbəst seçmək imkanı'
				],
				risks: [
					'Çox ağır yüklə başlayıb tez yorulmaq və ya zədələnmək',
					'«Vaxtım yoxdur» bəhanəsi ilə başlanğıcı təxirə salmaq'
				],
				actions: [
					'Həftədə 3 dəfə 30 dəqiqəlik fəallıqla başlayın: sürətli gəzinti, qaçış və ya ev məşqi',
					'Dostunuzla birlikdə məşq edin — birgə öhdəlik davamlılığı artırır',
					'Bir neçə idman növünün sınaq məşqinə gedin və ən çox xoşunuza gələni seçin',
					'Gündəlik addım sayınızı izləyin və onu tədricən artırın',
					'İlk ay üçün kiçik məqsəd qoyun: məsələn, 12 məşqi buraxmadan tamamlamaq'
				]
			},
			basic: {
				title: 'İlkin səviyyə — ilk addımın dəyəri',
				summary: 'Bu testdə hələ idman fəaliyyəti və ya nailiyyəti qeyd olunmayıb. Bu, sadəcə indiki vəziyyəti göstərir və gələcək imkanlarınızı heç bir şəkildə məhdudlaşdırmır. Hər bir idmançı nə vaxtsa ilk məşqdən başlayıb. Sizin üçün ən dəyərli addım hərəkəti gündəlik həyatın kiçik, amma sabit bir hissəsinə çevirməkdir.',
				detail: 'Bu səviyyədə profillər adətən idmana vaxt ayırmaq imkanı olmamış, maraq tapmamış və ya idmanı yalnız yarış kimi qəbul edib özünü ondan kənarda saymış insanlara aiddir. Unutmayın ki, idman yalnız medal üçün deyil: o, diqqəti, gün ərzində enerjini və stressin idarəsini dəstəkləyən vərdişdir. Başlamaq üçün idman zalına üzv olmaq vacib deyil — parkda gəzinti, pilləkəndən istifadə, evdə 15 dəqiqəlik məşq belə önəmli addımdır. Şahmat kimi zehni idman növləri də bu sahəyə daxildir və fərqli maraqları olan insanlar üçün yaxşı seçim ola bilər. Əsas odur ki, özünüzə uyğun formanı tapasınız.',
				strengths: [
					'Sıfırdan başlamaq — Sizə uyğun idman növünü sərbəst seçmək imkanı',
					'İlk həftələrdə belə hiss olunan irəliləyiş',
					'Şahmat kimi zehni idman növləri daxil olmaqla geniş seçim'
				],
				risks: [
					'İdmanı yalnız peşəkarlar üçün sayıb özünü kənarda saxlamaq',
					'Çətin proqramla başlayıb ilk həftədə dayanmaq'
				],
				actions: [
					'Gündə 20 dəqiqəlik gəzintiyə başlayın və bunu 2 həftə ərzində vərdişə çevirin',
					'Evdə avadanlıqsız qısa məşq proqramını sınayın',
					'Fiziki idman növləri Sizə yaxın deyilsə, şahmat klubuna və ya həvəskar turnirlərə qoşulmağı düşünün',
					'Yaxınlıqdakı idman klublarında pulsuz və ya sınaq məşqlərini araşdırın',
					'3 ay sonra seçdiyiniz fəaliyyətdə müntəzəmliyinizi qiymətləndirin və testi yenidən keçin'
				]
			}
		},
		resources: [
			'Olimpiya idman kompleksləri, idman məktəbləri və federasiyaların gənclər bölmələri',
			'Peşəkar məşqçi ilə fərdi və ya qrup məşq proqramları',
			'Məktəb və universitet idman komandaları, həvəskar liqalar',
			'İdman qidalanması, bərpa və zədələrin qarşısının alınması üzrə etibarlı mənbələr',
			'Məşq gündəliyi və fəallıq izləmə tətbiqləri'
		],
		careerLink: 'Yüksək idman nailiyyəti peşəkar idman, məşqçilik, idman menecmenti, fiziki reabilitasiya və bədən tərbiyəsi müəllimliyi kimi karyeralara birbaşa yol açır. Digər peşələrdə isə idman təcrübəsi liderlik, stressə davamlılıq və komanda işi bacarığının inandırıcı sübutu kimi CV-ni gücləndirir.'
	},

	// ---------------------------------------------------------------- İş təcrübəsi
	work: {
		id: 'work',
		name: 'İş təcrübəsi',
		what: 'İş təcrübəsi sahəsi əmək fəaliyyətinizin həm müddətini, həm də keyfiyyətini qiymətləndirir: hansı formada (fiziki əmək, sənət, ali ixtisas tələb edən iş və ya sahibkarlıq) çalışdığınızı, nə qədər müddət işlədiyinizi, vəzifənizi və peşəkarlıq dərəcənizi — təcrübəçidən C-level rəhbərə qədər.',
		how: 'Daha uzun iş stajı, ali ixtisas tələb edən iş və ya sahibkarlıq, həmçinin yüksək peşəkarlıq dərəcəsi (mütəxəssis, baş mütəxəssis, bölmə və ya departament rəhbəri) balı artırır; bir neçə iş yerindəki təcrübə birlikdə nəzərə alınır. Ən vacibi odur ki, nəticə yaşıdlarınızla müqayisə olunur: 18 yaşında bir illik təcrübə güclü göstərici sayıldığı halda, 30 yaşında eyni müddət ortadan aşağı ola bilər.',
		why: 'İşəgötürənlər üçün real iş təcrübəsi namizədin məsuliyyət daşıdığını, komandada işləyə bildiyini və nəticə verdiyini göstərən ən birbaşa sübutdur. Hətta tələbəlikdə keçilən təcrübə proqramları, yarımştat iş və ya könüllülük də ilk vakansiyalarda namizədi digərlərindən fərqləndirir.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — yaşıdlarınızın ən güclü 10%-i',
				summary: 'İş təcrübəniz yaşıdlarınızın böyük əksəriyyətindən həm müddət, həm də məsuliyyət baxımından irəlidədir. Çox güman ki, uzun müddət ali ixtisas tələb edən vəzifədə çalışır, komandaya və ya bölməyə rəhbərlik edir, ya da öz biznesinizi idarə edirsiniz. Bu, nəticə verə bildiyinizi və başqalarının Sizə etibar etdiyini göstərir. İndi əsas məsələ bu təcrübəni daha geniş təsirə və strateji rola çevirməkdir.',
				detail: 'Praktikada bu səviyyə, məsələn, bankda və ya beynəlxalq şirkətdə baş mütəxəssis, bölmə rəhbəri və ya departament müdiri kimi çalışan, yaxud bir neçə il ərzində öz biznesini qurub işçi götürmüş insanlara uyğundur. Gənc yaşda bu səviyyəyə çatanlar adətən tələbəlikdən işə başlamış və sürətlə irəliləmiş olurlar. Siz artıq yalnız tapşırıq icra etmir, qərar verir, prioritetləri müəyyənləşdirir və insanları idarə edirsiniz. Bu mərhələdə inkişafı ən çox strateji düşüncə, maliyyə savadlılığı, mentorluq bacarığı və sahədən kənar peşəkar şəbəkə müəyyən edir. Təcrübənizi MBA, peşəkar sertifikatlar və ya ictimai çıxışlarla gücləndirmək Sizi sahənizdə tanınan ekspertə çevirə bilər.',
				strengths: [
					'Uzunmüddətli və sabit peşəkar təcrübə',
					'Rəhbərlik, qərar qəbulu və məsuliyyət daşımaq bacarığı',
					'Real nəticələr və geniş peşəkar əlaqələr',
					'Mürəkkəb iş situasiyalarında sınanmış dayanıqlıq'
				],
				risks: [
					'Rutinə düşüb yeni bacarıqları (rəqəmsal alətlər, süni intellekt, yeni metodlar) öyrənməyi təxirə salmaq',
					'Həddən artıq iş yükü və iş-həyat balansının pozulması',
					'Bir şirkətə və ya sahəyə çox bağlanıb alternativ imkanları görməmək'
				],
				actions: [
					'Növbəti 2–3 il üçün karyera vizyonunuzu yazın: daha yüksək rəhbər vəzifə, öz biznesiniz və ya ekspert-məsləhətçi rolu',
					'Komandanızda gələcək lideri yetişdirmək üçün mentorluğa başlayın',
					'Sahənizdə tanınmış peşəkar sertifikat (PMP, ACCA, CFA və s.) və ya MBA imkanlarını qiymətləndirin',
					'Konfrans və tədbirlərdə çıxış edərək və ya peşəkar yazılar paylaşaraq ekspert kimi görünürlüyünüzü artırın',
					'Nailiyyətlərinizi rəqəmlərlə ifadə edin (gəlir artımı, layihə sayı, komanda ölçüsü) və CV-nizi buna uyğun yeniləyin'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — etibarlı peşəkar təcrübə',
				summary: 'İş təcrübəniz yaşıdlarınızın əksəriyyətindən güclüdür. Çox güman ki, bir neçə il ixtisasınız üzrə mütəxəssis kimi çalışmısınız və ya yaşınıza görə erkən işə başlayıb ciddi məsuliyyət daşımısınız. Bu təcrübə Sizi əmək bazarında rəqabətli namizəd edir. Rəhbər vəzifəyə və ya daha dərin ixtisaslaşmaya keçid üçün yaxşı mövqedəsiniz.',
				detail: 'Bu səviyyədə adətən 2–5 illik təcrübəsi olan mütəxəssislər, tələbəlikdən yarımştat çalışıb artıq tam ştata keçmiş gənclər və ya kiçik biznesini uğurla idarə edən insanlar olur. Siz iş proseslərini yaxşı tanıyır, tapşırıqları müstəqil yerinə yetirir və komandada etibarlı üzv kimi qəbul olunursunuz. Növbəti pillə çox vaxt layihəyə və ya kiçik komandaya rəhbərlik etmək, yaxud nadir və yüksək tələb olunan ixtisas biliyini dərinləşdirməkdir. Bu mərhələdə iş yerini dəyişmək və fərqli şirkət mədəniyyətini görmək də inkişaf üçün faydalı ola bilər. Əsas odur ki, təcrübənizi «illər» deyil, «nəticələr» dili ilə təqdim edəsiniz.',
				strengths: [
					'Müstəqil işləmək və tapşırıqları sona çatdırmaq bacarığı',
					'Sahə üzrə praktik bilik və iş proseslərini tanıma',
					'Əmək bazarında rəqabətli və etibarlı profil'
				],
				risks: [
					'Eyni vəzifədə uzun müddət qalıb inkişafın dayanması',
					'Rəhbərlik və ünsiyyət bacarıqlarını texniki biliklər qədər inkişaf etdirməmək',
					'Görülən işin nəticələrini sənədləşdirməmək'
				],
				actions: [
					'Rəhbərinizlə növbəti vəzifəyə keçmək üçün lazım olan bacarıqlar barədə açıq söhbət edin',
					'Kiçik bir layihəyə və ya yeni işçinin adaptasiyasına rəhbərliyi könüllü öz üzərinizə götürün',
					'Sahənizdə tanınmış peşəkar sertifikat və ya ixtisasartırma kursu seçin',
					'Peşəkar şəbəkə profilinizi yeniləyin və həmkarlarınızdan tövsiyə alın',
					'Hər rübün sonunda əsas nailiyyətlərinizi rəqəmlərlə yazıb saxlayın'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — formalaşan peşəkar yol',
				summary: 'İş təcrübəniz yaşıdlarınızın əksəriyyəti ilə müqayisə ediləndir. Çox güman ki, bir və ya bir neçə yerdə təcrübəçi, kiçik mütəxəssis və ya yarımştat işçi kimi çalışmısınız. Bu, iş mühitini tanıdığınızı və əsas peşəkar vərdişlərə yiyələndiyinizi göstərir. İndi məqsəd bu təcrübəni ixtisasınızla əlaqələndirib daha məsuliyyətli rola keçməkdir.',
				detail: 'Bu səviyyədə adətən 1–2 illik təcrübəsi olan gənclər, tələbəlikdə yay təcrübəsi keçmiş, xidmət sektorunda çalışmış və ya ailə biznesində kömək etmiş insanlar olur. Siz artıq iş intizamını, müştəri və həmkarlarla ünsiyyəti, vaxtında hesabat verməyi bilirsiniz. Lakin təcrübə hələ ixtisas üzrə dərinləşməmiş və ya vəzifə məsuliyyəti məhdud ola bilər. Bu mərhələdə ən dəyərli addım öz sahənizdə ixtisaslı təcrübə qazanmaqdır: hətta qısa, lakin məzmunlu bir təcrübə proqramı CV-nizi əhəmiyyətli dərəcədə gücləndirir. Hər iş təcrübəsini öyrəndiyiniz bacarıqlar baxımından təhlil etmək növbəti addımı aydınlaşdıracaq.',
				strengths: [
					'Real iş mühitində işləmək təcrübəsi',
					'Əsas peşəkar vərdişlər: intizam, ünsiyyət, məsuliyyət',
					'Fərqli sahələri sınayıb özünüzə uyğun olanı seçmək imkanı'
				],
				risks: [
					'İxtisasla əlaqəsi olmayan işlərdə uzun müddət qalmaq',
					'Qısa müddətli işləri tez-tez dəyişib heç birində dərinləşməmək',
					'Öyrəndiyiniz bacarıqları CV-də aydın təsvir etməmək'
				],
				actions: [
					'İxtisasınıza uyğun 3–5 şirkətin təcrübə və gənc mütəxəssis proqramlarını araşdırın və müraciət edin',
					'Hər iş yerində öyrəndiyiniz 3 əsas bacarığı yazın və CV-nizə əlavə edin',
					'Hazırkı işinizdə əlavə məsuliyyət tələb edən bir tapşırıq istəyin',
					'Sahənizdə çalışan bir mütəxəssislə tanış olun və ondan karyera məsləhəti alın',
					'İşə uyğun qısa təlim (Excel, layihə idarəetməsi, işgüzar yazışma) keçərək profilinizi tamamlayın'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — ilk peşəkar addımlar',
				summary: 'İş təcrübəniz hazırda məhduddur və yaşıdlarınızın ortasından bir qədər aşağıdır. Çox güman ki, qısa müddətli iş, təcrübə proqramı və ya könüllülük təcrübəniz var, lakin hələ sabit peşəkar fəaliyyətə keçməmisiniz. Bu, xüsusilə tələbəlik və karyeranın ilk illərində çox geniş yayılmış vəziyyətdir. Hər yeni təcrübə — hətta bir aylıq təcrübə proqramı — profilinizi nəzərəçarpacaq dərəcədə gücləndirəcək.',
				detail: 'Bu səviyyədə olan insanlar adətən təhsilə fokuslandıqları üçün işə vaxt ayırmamış, ya da qısa müddətli, qeyri-rəsmi işlərdə çalışmış olurlar. Əmək bazarına ilk giriş çox vaxt ən çətin mərhələdir: vakansiyalar təcrübə tələb edir, təcrübə üçün isə iş lazımdır. Bu dövrəni qırmağın ən yaxşı yolları təcrübə proqramları, könüllülük, layihə əsaslı işlər və frilans tapşırıqlardır. Unutmayın ki, böyük tədbirdə könüllü kimi iştirak, tələbə təşkilatında rəhbərlik və ya ailə biznesində kömək də dəyərli iş təcrübəsidir. Əsas odur ki, bu təcrübələri düzgün sənədləşdirib təqdim edəsiniz.',
				strengths: [
					'Öyrənməyə açıqlıq və yeni mühitə uyğunlaşma potensialı',
					'Karyera istiqamətini hələ çevik şəkildə seçmək imkanı',
					'İlk təcrübələrin profilə sürətli təsiri'
				],
				risks: [
					'«Təcrübəm yoxdur» deyə müraciət etməkdən çəkinmək',
					'Könüllülük və qısa layihələri dəyərsiz sayıb CV-yə daxil etməmək'
				],
				actions: [
					'İlk peşəkar CV-nizi hazırlayın: təhsil, layihələr, könüllülük və bacarıqları daxil edin',
					'Növbəti 3 ayda ən azı 10 təcrübə proqramına və ya gənc mütəxəssis vakansiyasına müraciət edin',
					'Beynəlxalq və ya yerli tədbirlərdə könüllü kimi iştirak edin — bu, real iş mühiti təcrübəsidir',
					'Bacarıqlarınıza uyğun kiçik frilans tapşırıqlar götürün: tərcümə, dizayn, məlumat daxiletmə və s.',
					'Müsahibə bacarıqlarınızı dostunuzla və ya universitetin karyera mərkəzində məşq edin'
				]
			},
			basic: {
				title: 'İlkin səviyyə — karyeranın başlanğıc nöqtəsi',
				summary: 'Bu testdə hələ iş təcrübəsi qeyd olunmayıb. Yaşınızdan və təhsil mərhələnizdən asılı olaraq bu, tamamilə təbii ola bilər — məsələn, məktəblilər və birinci kurs tələbələri üçün. Hər bir peşəkar karyerasına sıfırdan başlayıb. Sizin üçün əsas məsələ ilk real təcrübəni qazanmaq üçün kiçik və konkret addım atmaqdır.',
				detail: 'Bu səviyyədə profillər adətən hələ təhsil alan, ailə öhdəlikləri səbəbindən işə başlamamış və ya uzun fasilədən sonra əmək bazarına qayıtmaq istəyən insanlara aiddir. Rəsmi iş olmasa belə, məktəb və universitet layihələrində, ailəyə köməklikdə, könüllülükdə və hobbi layihələrində qazandığınız bacarıqlar dəyərlidir. Əmək bazarına girişin ən asan yolu çox vaxt qısa təcrübə proqramları və könüllülükdür: onlar həm təcrübə, həm də tövsiyə məktubu verir. Dövlət məşğulluq xidmətlərinin pulsuz peşə hazırlığı kursları da yaxşı başlanğıc ola bilər. İlk təcrübədən sonra bu sahədə nəticəniz sürətlə yüksələcək.',
				strengths: [
					'Karyera yolunuzu sıfırdan, öz maraqlarınıza uyğun qurmaq imkanı',
					'İlk təcrübənin nəticəyə çox böyük təsiri',
					'Formal işdən kənar layihə və könüllülük bacarıqları'
				],
				risks: [
					'Təcrübə olmadığı üçün müraciət etməyi tamamilə təxirə salmaq',
					'Yalnız «ideal» iş gözləyib kiçik imkanları qaçırmaq'
				],
				actions: [
					'Universitetinizin karyera mərkəzinə və ya dövlət məşğulluq xidmətinə müraciət edib mövcud proqramları öyrənin',
					'Bir könüllü layihəyə və ya tədbirə qoşulun — bu, ilk iş təcrübəsi kimi CV-yə yazıla bilər',
					'İlk CV-nizi hazırlayın və onu təcrübəli birinə yoxlatdırın',
					'Maraqlandığınız sahədə qısa müddətli təcrübə və ya «iş kölgəsi» (job shadowing) imkanı axtarın',
					'İşgüzar e-poçt yazmaq və müsahibəyə hazırlaşmaq kimi əsas bacarıqları indidən öyrənin'
				]
			}
		},
		resources: [
			'Şirkətlərin tələbə təcrübə (internship) və gənc mütəxəssis proqramları',
			'Dövlət məşğulluq xidmətlərinin vakansiya bazası və peşə hazırlığı kursları',
			'Könüllülük platformaları və beynəlxalq tədbirlərin könüllü proqramları',
			'Peşəkar şəbəkə platformaları və sahə üzrə networking tədbirləri',
			'Liderlik, layihə idarəetməsi və işgüzar ünsiyyət üzrə qısa təlimlər'
		],
		careerLink: 'İş təcrübəniz karyeranızın hazırda hansı mərhələdə olduğunu və növbəti addımın nə ola biləcəyini göstərir: ilk təcrübə, mütəxəssis səviyyəsinə keçid, rəhbər vəzifə və ya öz biznesiniz. Bu təcrübəni şəxsiyyət və maraq testlərinizin nəticələri ilə tutuşdurmaq hazırkı yolunuzun Sizə nə dərəcədə uyğun olduğunu anlamağa kömək edir.'
	},

	// ---------------------------------------------------------------- Proqram bilikləri
	program: {
		id: 'program',
		name: 'Proqram bilikləri',
		what: 'Proqram bilikləri sahəsi rəqəmsal bacarıqlarınızı qiymətləndirir: MS Office (Word, Excel, PowerPoint və s.), proqramlaşdırma dilləri, dizayn proqramları və sahəyə xas digər proqramlar. Hər biri üzrə səviyyəniz — ilkin, orta, irəli, proqramlaşdırmada isə Junior, Middle və ya Senior — nəzərə alınır.',
		how: 'Proqramlaşdırma və peşəkar dizayn alətləri kimi daha mürəkkəb bacarıqlar, eləcə də yüksək səviyyə (irəli, Senior) balı daha çox artırır, bir neçə növ proqram bilmək isə profili genişləndirir. Məsələn, Excel-i irəli səviyyədə bilmək ilkin səviyyədən, Middle səviyyəli proqramlaşdırma bilikləri isə yalnız ofis proqramlarından xeyli yüksək qiymətləndirilir. Nəticə yaşıdlarınızla müqayisədə persentil kimi hesablanır.',
		why: 'Bu gün demək olar ki, bütün peşələr rəqəmsal alətlərə söykənir: mühasib Excel, dizayner qrafik redaktorlar, analitik SQL və Python, mühəndis CAD proqramları ilə işləyir. İşəgötürənlər proqram biliklərini birbaşa məhsuldarlıq göstəricisi kimi qəbul edir, proqramlaşdırma isə əmək bazarında ən çox tələb olunan və yaxşı ödənilən bacarıqlardandır.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — yaşıdlarınızın ən güclü 10%-i',
				summary: 'Rəqəmsal bacarıqlarınız yaşıdlarınız arasında ən yüksək səviyyədədir. Çox güman ki, ən azı bir proqramlaşdırma dilində Middle–Senior səviyyəsində işləyir, bir neçə peşəkar aləti dərindən bilir və real layihələrdə istifadə edirsiniz. Bu, əmək bazarında ən çox axtarılan və ən yaxşı qiymətləndirilən profillərdən biridir. Növbəti məqsəd texniki ustalığı arxitektura, liderlik və ya məhsul düşüncəsi ilə tamamlamaqdır.',
				detail: 'Praktikada bu səviyyə, məsələn, Python, JavaScript və ya Java ilə müstəqil şəkildə veb-tətbiq və ya data həlli qura bilən, kod yoxlaması (code review) aparan və gənc proqramçılara kömək edən mütəxəssislərə uyğundur. Bəziləri isə dizayn və ya mühəndislik proqramlarında (Figma, Adobe paketləri, AutoCAD) peşəkar səviyyədədir və real müştərilərlə işləyir. Belə bacarıqlar yerli İT şirkətlərində, bankların rəqəmsal bölmələrində və beynəlxalq uzaqdan iş platformalarında yüksək tələbat görür. Bu mərhələdə inkişaf daha çox sistem dizaynından, komanda işindən, sənədləşmədən və biznes ehtiyaclarını anlamaqdan keçir. Açıq mənbəli layihələrə töhfə və ictimai portfel Sizi sahədə görünən edir.',
				strengths: [
					'Mürəkkəb texniki problemləri müstəqil həll etmək bacarığı',
					'Real layihələrdə sınanmış, bazarda yüksək tələb olunan bilik',
					'Yeni texnologiyaları sürətlə mənimsəmək',
					'Proseslərin avtomatlaşdırılması və səmərəliliyin artırılması'
				],
				risks: [
					'Yalnız texniki tərəfə fokuslanıb ünsiyyət, sənədləşmə və komanda bacarıqlarını geri qoymaq',
					'Texnologiyaların sürətlə dəyişdiyi bir dövrdə bir alətə həddən artıq bağlanmaq',
					'Uzun iş saatları səbəbindən tükənmə'
				],
				actions: [
					'Ən yaxşı layihələrinizdən ibarət ictimai portfel (kod repozitoriyası və ya dizayn portfeli) qurun',
					'Sistem dizaynı və proqram arxitekturası üzrə dərin kurs və ya kitabla biliyinizi genişləndirin',
					'Bir açıq mənbəli layihəyə müntəzəm töhfə verin və ya öz kitabxananızı paylaşın',
					'Gənc proqramçılara mentorluq edin və ya texniki mövzuda çıxış hazırlayın',
					'Bulud texnologiyaları və ya süni intellekt kimi yüksək tələbatlı sahədə sertifikat almağı düşünün'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — güclü rəqəmsal alət dəsti',
				summary: 'Proqram bilikləriniz yaşıdlarınızın əksəriyyətindən irəlidədir. Çox güman ki, MS Office proqramlarını irəli səviyyədə bilir, bir proqramlaşdırma dilində Junior–Middle səviyyəsindəsiniz və ya dizayn proqramlarında inamla işləyirsiniz. Bu, Sizi istənilən ofis və ya texniki mühitdə dəyərli işçi edir. Bir istiqamətdə dərinləşmək Sizi ekspert səviyyəsinə aparacaq.',
				detail: 'Bu səviyyədə adətən Excel-də pivot cədvəllər, mürəkkəb düsturlar və qrafiklərlə rahat işləyən, sadə skriptlər yaza bilən və ya qrafik redaktorlarda müstəqil dizayn hazırlayan insanlar olur. Bəziləri tədris layihələri və ya kiçik frilans işləri ilə ilk real təcrübəni artıq qazanıb. Bu profil analitik, marketinq, maliyyə və İT dəstək vəzifələrinə müraciətdə güclü üstünlük verir. Növbəti pillə adətən bir aləti tam peşəkar səviyyədə mənimsəmək və onunla real, görünən layihələr yaratmaqdır. Proqramlaşdırma ilə məşğulsunuzsa, komanda layihəsində iştirak və kod keyfiyyətinə diqqət Sizi Middle səviyyəsinə keçirəcək.',
				strengths: [
					'Bir neçə rəqəmsal aləti inamla istifadə etmək',
					'Gündəlik işləri avtomatlaşdırma və sürətləndirmə bacarığı',
					'Texniki vakansiyalara müraciət üçün möhkəm baza'
				],
				risks: [
					'Çox alətə səthi yanaşıb heç birində dərinləşməmək',
					'Biliyi real layihələrlə sübut etməmək — portfel olmadan bacarığı göstərmək çətindir',
					'Yalnız video dərslərə baxıb praktik tapşırıq həll etməmək'
				],
				actions: [
					'Karyera məqsədinizə ən uyğun bir aləti seçin və onu 3–6 ay ərzində irəli səviyyəyə çatdırın',
					'Real problemi həll edən 2–3 layihə hazırlayıb portfelə əlavə edin',
					'Hakatona və ya komanda layihəsinə qoşularaq birgə işləmə təcrübəsi qazanın',
					'Bacarığınızı tanınmış onlayn sertifikatla təsdiqləyin',
					'Kiçik frilans sifarişləri və ya təcrübə proqramı ilə ilk kommersiya təcrübəsini qazanın'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — inamlı istifadəçi',
				summary: 'Proqram bilikləriniz yaşıdlarınızın əksəriyyəti ilə eyni səviyyədədir. Çox güman ki, Word, Excel və PowerPoint-də əsas işləri rahat görür, bəlkə də bir proqramlaşdırma dili və ya dizayn proqramı ilə tanışlığa başlamısınız. Bu, gündəlik iş və təhsil üçün möhkəm bazadır. Bir istiqaməti seçib dərinləşmək Sizi tez bir zamanda rəqabətli namizədə çevirəcək.',
				detail: 'Bu səviyyədə olan insanlar adətən sənəd hazırlaya, təqdimat qura və Excel-də sadə cədvəl və hesablama apara bilirlər. Daha mürəkkəb funksiyalar — VLOOKUP, pivot cədvəllər, makroslar — və ya proqramlaşdırmanın əsas anlayışları hələ tam mənimsənilməyib. Bu, ofis mühitində işləmək üçün kifayətdir, lakin analitik və texniki vakansiyalarda daha dərin bilik tələb olunur. Yaxşı xəbər odur ki, rəqəmsal bacarıqlar ən çox pulsuz resursu olan sahədir və ardıcıl öyrənmə ilə 3–6 ay ərzində ciddi irəliləyiş mümkündür. İstiqaməti karyera məqsədiniz müəyyən etməlidir: analitika üçün Excel və SQL, İT üçün Python və ya JavaScript, yaradıcı sahələr üçün dizayn alətləri.',
				strengths: [
					'Əsas ofis proqramlarında sərbəst işləmə',
					'Rəqəmsal mühitə uyğunlaşma və yeni alətləri öyrənməyə hazırlıq',
					'Bir neçə istiqaməti sınamaq üçün yaxşı baza'
				],
				risks: [
					'«Kompüteri bilirəm» düşüncəsi ilə daha dərin bacarıqları öyrənməmək',
					'Kursa başlayıb yarımçıq buraxmaq',
					'Öyrəndiklərini praktikada tətbiq etməmək'
				],
				actions: [
					'Excel-də VLOOKUP/XLOOKUP, pivot cədvəllər və şərti formatlaşdırmanı öyrənin — ofis işində ən böyük fərqi bunlar yaradır',
					'Karyera məqsədinizə uyğun bir proqramlaşdırma dili və ya dizayn proqramı seçib pulsuz başlanğıc kursunu sona qədər bitirin',
					'Hər həftə öyrəndiyinizi kiçik real tapşırıqda tətbiq edin: məsələn, şəxsi büdcə cədvəli və ya sadə veb-səhifə',
					'Onlayn icmalara qoşulun və suallarınızı orada verin',
					'Öyrənmə irəliləyişinizi cədvəldə izləyin və 3 aydan sonra özünüzü yenidən qiymətləndirin'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — rəqəmsal bacarıqların təməli',
				summary: 'Proqram bilikləriniz hazırda ilkin mərhələdədir və yaşıdlarınızın ortasından bir qədər aşağıdır. Çox güman ki, əsas kompüter işlərini görür və bəzi proqramlardan ilkin səviyyədə istifadə edirsiniz. Bu sahədə irəliləmək üçün xüsusi istedad deyil, ardıcıl məşq lazımdır. Gündəlik qısa təcrübə ilə bir neçə ay ərzində inamlı istifadəçiyə çevrilə bilərsiniz.',
				detail: 'Bu səviyyədə olan insanlar adətən Word-də sadə mətn yaza, internetdə məlumat axtara və e-poçt göndərə bilirlər, lakin Excel cədvəlləri, təqdimat hazırlığı və ya fayl idarəçiliyi hələ çətinlik yaradır. Bu, çox vaxt kompüterə məhdud çıxış və ya ehtiyacın olmaması ilə bağlıdır. Rəqəmsal bacarıqlar bu gün demək olar ki, hər vakansiyada tələb olunur, buna görə burada qoyulan hər əmək iş imkanlarınızı birbaşa genişləndirir. Ən səmərəli yanaşma real tapşırıqla öyrənməkdir: məsələn, öz xərclərinizi Excel-də izləmək və ya bir mövzu üzrə təqdimat hazırlamaq. Əsas bacarıqlar möhkəmləndikdən sonra proqramlaşdırma və ya dizayn kimi daha mürəkkəb istiqamətlərə keçmək asanlaşacaq.',
				strengths: [
					'Rəqəmsal mühitlə ilkin tanışlıq',
					'Sürətli və görünən irəliləyiş potensialı',
					'Çoxlu pulsuz öyrənmə resursunun mövcudluğu'
				],
				risks: [
					'Texnologiyadan çəkinib yeni alətləri sınamamaq',
					'Sistemsiz, təsadüfi videolarla öyrənib əsasları buraxmaq'
				],
				actions: [
					'Word, Excel və PowerPoint üzrə başlanğıc səviyyəli pulsuz kursu bitirin',
					'Excel-də şəxsi və ya ailə büdcəsi cədvəli qurun — real tapşırıq öyrənməni sürətləndirir',
					'Hər həftə bir yeni funksiya və ya klaviatura qısayolu öyrənin və onu dərhal işlədin',
					'Bulud əsaslı sənəd və cədvəl alətləri ilə birgə iş üsullarını öyrənin',
					'Əsasları mənimsədikdən sonra proqramlaşdırma və ya dizayna giriş kursunu sınayın'
				]
			},
			basic: {
				title: 'İlkin səviyyə — rəqəmsal yolun başlanğıcı',
				summary: 'Bu testdə hələ proqram bilikləri qeyd olunmayıb və ya onlar çox ilkin səviyyədədir. Bu, öyrənmə qabiliyyətiniz haqqında deyil, sadəcə indiyədək bu sahəyə vaxt ayırmaq imkanınızın olub-olmaması haqqında məlumatdır. Rəqəmsal bacarıqlar hər yaşda, sıfırdan öyrənilə bilər. Sizin üçün ilk addım sadə və gündəlik həyatda işə yarayan bir proqramla başlamaqdır.',
				detail: 'Bu səviyyədə profillər adətən kompüterdən az istifadə etmiş, daha çox smartfonla işləyən və ya işində rəqəmsal alətlərə ehtiyac duymamış insanlara aiddir. Smartfonda mesajlaşma, foto və tətbiqlərdən istifadə də rəqəmsal təcrübədir və kompüter proqramlarını öyrənmək üçün yaxşı təməldir. İlk mərhələdə məqsəd mürəkkəb proqramlar deyil: mətn yazmaq, faylı saxlamaq, sadə cədvəl qurmaq və e-poçt göndərmək kifayətdir. Bir çox kitabxana, gənclər mərkəzi və məşğulluq xidməti pulsuz kompüter savadlılığı kursları təklif edir. Bir-iki ay ərzində bu əsasları mənimsəmək tamamilə realdır və iş imkanlarınızı dərhal genişləndirir.',
				strengths: [
					'Smartfon və gündəlik tətbiqlərlə mövcud rəqəmsal təcrübə',
					'Hər yeni bacarığın nəticəyə dərhal təsiri',
					'Sıfırdan düzgün vərdişlərlə öyrənmək imkanı'
				],
				risks: [
					'«Texnologiya mənlik deyil» kimi yanlış inanc',
					'Əsasları öyrənmədən birbaşa mürəkkəb proqramlara keçmək'
				],
				actions: [
					'Kompüter savadlılığı üzrə pulsuz başlanğıc kursuna yazılın',
					'Hər gün 20 dəqiqə kompüterdə praktik işlə məşğul olun: mətn yazmaq, faylları qovluqlara yığmaq, e-poçt göndərmək',
					'Word-də sadə CV hazırlayın — bu, həm öyrənmə, həm də faydalı nəticədir',
					'Sizdən yaxşı bilən dost və ya ailə üzvündən həftədə bir dəfə kiçik dərs alın',
					'2 ay sonra Excel-in əsaslarına keçin və testi yenidən keçərək irəliləyişi ölçün'
				]
			}
		},
		resources: [
			'Proqramlaşdırma və data analitikası üzrə interaktiv onlayn kurslar və bootcamp proqramları',
			'MS Office və Excel üzrə sertifikatlı təlimlər',
			'Açıq mənbəli layihələr və kod nümunələri paylaşılan platformalar',
			'Dizayn proqramları üzrə video dərs seriyaları və portfel icmaları',
			'Hakatonlar, İT icmalarının görüşləri və texnologiya klubları'
		],
		careerLink: 'Proqram bilikləriniz İT, data analitikası, dizayn, mühəndislik və maliyyə kimi sahələrə birbaşa yol açır, digər sahələrdə isə Sizi daha səmərəli və avtomatlaşdırmanı bacaran mütəxəssis edir. Rəqəmsal bacarıqlar həm də uzaqdan və beynəlxalq işə ən sürətli giriş biletidir.'
	}
}
