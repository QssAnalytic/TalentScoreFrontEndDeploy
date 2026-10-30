// Enneagram test content (Azerbaijani). Plain data only.
// 63 original statements (7 per type), interleaved by type: 1,2,…,9,1,2,…
import { EnneaQuestion, EnneaTypeProfile, EnneaCenter } from 'tests/types'

export const ENNEA_QUESTIONS: EnneaQuestion[] = [
	// ---- round 1 ----
	{ id: 'e01', type: 1, text: 'Səhv görülmüş işi görəndə onu düzəltməsəm, içimdə narahatlıq qalır.' },
	{ id: 'e02', type: 2, text: 'Başqalarının nəyə ehtiyacı olduğunu onlar heç nə demədən hiss edirəm.' },
	{ id: 'e03', type: 3, text: 'Nəticə əldə etmədiyim günü boşa keçmiş gün kimi qiymətləndirirəm.' },
	{ id: 'e04', type: 4, text: 'Çox vaxt mənim hisslərimi başqalarının tam başa düşmədiyini düşünürəm.' },
	{ id: 'e05', type: 5, text: 'Bir mövzuda fikir bildirməzdən əvvəl onu dərindən öyrənib hazır olmaq istəyirəm.' },
	{ id: 'e06', type: 6, text: 'Qərar verməzdən əvvəl nəyin səhv gedə biləcəyini ağlımda dəfələrlə götür-qoy edirəm.' },
	{ id: 'e07', type: 7, text: 'Qarşıda maraqlı planlar olmayanda özümü darıxmış və məhdudlaşmış hiss edirəm.' },
	{ id: 'e08', type: 8, text: 'Kiminsə məni idarə etməyə çalışdığını hiss edəndə dərhal müqavimət göstərirəm.' },
	{ id: 'e09', type: 9, text: 'Münaqişə yaranmasın deyə çox vaxt öz istəyimdən asanlıqla vaz keçirəm.' },
	// ---- round 2 ----
	{ id: 'e10', type: 1, text: 'İçimdə nəyi daha yaxşı edə biləcəyimi daim xatırladan tənqidi bir səs var.' },
	{ id: 'e11', type: 2, text: 'Kiməsə kömək etdikdən sonra minnətdarlıq görməyəndə içimdə inciklik yaranır.' },
	{ id: 'e12', type: 3, text: 'Başqalarının gözündə uğurlu və bacarıqlı görünmək mənim üçün çox vacibdir.' },
	{ id: 'e13', type: 4, text: 'Adi və hamı kimi olmaq fikri məni ciddi şəkildə sıxır.' },
	{ id: 'e14', type: 5, text: 'Enerjimin və vaxtımın məhdud olduğunu hiss edir, onları çox diqqətlə bölüşdürürəm.' },
	{ id: 'e15', type: 6, text: 'Yeni tanış olduğum insana güvənməzdən əvvəl onun niyyətini uzun müddət yoxlayıram.' },
	{ id: 'e16', type: 7, text: 'Bir işi bitirməmiş ağlım artıq növbəti maraqlı ideyaya keçmiş olur.' },
	{ id: 'e17', type: 8, text: 'Zəif görünmək və ya kiməsə möhtac qalmaq mənim üçün çox xoşagəlməzdir.' },
	{ id: 'e18', type: 9, text: 'Məndən nə istədiyimi soruşanda dəqiq cavab verməkdə tez-tez çətinlik çəkirəm.' },
	// ---- round 3 ----
	{ id: 'e19', type: 1, text: 'Başqaları qaydaları pozub cəzasız qalanda bu, məni gözlədiyimdən çox qəzəbləndirir.' },
	{ id: 'e20', type: 2, text: 'Öz ehtiyaclarım barədə danışmaq mənə başqalarına kömək təklif etməkdən daha çətin gəlir.' },
	{ id: 'e21', type: 3, text: 'Uğursuz ola biləcəyim işə girişməkdənsə, uğur qazanacağım sahəni seçməyə üstünlük verirəm.' },
	{ id: 'e22', type: 4, text: 'Kədərli hisslərdən qaçmıram, əksinə, onlarda müəyyən dərinlik və məna tapıram.' },
	{ id: 'e23', type: 5, text: 'Hadisələrə qarışmaqdansa, kənardan müşahidə edib onları anlamağa üstünlük verirəm.' },
	{ id: 'e24', type: 6, text: 'Vacib qərarlardan əvvəl etibar etdiyim insanların fikrini mütləq öyrənmək istəyirəm.' },
	{ id: 'e25', type: 7, text: 'Ağır və kədərli mövzulardan tez uzaqlaşıb fikrimi daha xoş şeylərə yönəldirəm.' },
	{ id: 'e26', type: 8, text: 'Fikrimi birbaşa deyirəm, hətta bu, qarşımdakını narahat etsə belə.' },
	{ id: 'e27', type: 9, text: 'Vacib işləri təxirə salıb vaxtımı daha rahat və tanış məşğuliyyətlərlə keçirirəm.' },
	// ---- round 4 ----
	{ id: 'e28', type: 1, text: 'Hirsləndiyimi büruzə verməsəm də, içimdə uzun müddət narazılıq daşıyıram.' },
	{ id: 'e29', type: 2, text: 'İnsanların həyatında vacib və əvəzolunmaz biri olmaq mənim üçün çox şey deməkdir.' },
	{ id: 'e30', type: 3, text: 'Olduğum mühitə uyğun olaraq özümü ən təsirli tərəfdən təqdim etməyi bacarıram.' },
	{ id: 'e31', type: 4, text: 'Başqalarında olan nəyinsə məndə əskik olduğunu tez-tez hiss edirəm.' },
	{ id: 'e32', type: 5, text: 'Kimsə gözlənilmədən vaxtımı və diqqətimi çox tələb edəndə sıxılmağa başlayıram.' },
	{ id: 'e33', type: 6, text: 'Hər şey yaxşı gedəndə belə, haradasa bir problemin gizləndiyini düşünürəm.' },
	{ id: 'e34', type: 7, text: 'Seçim imkanlarım məhdudlaşanda özümü qəfəsə salınmış kimi hiss edirəm.' },
	{ id: 'e35', type: 8, text: 'Vəziyyətə kimin rəhbərlik etdiyi aydın olmayanda nəzarəti öz əlimə alıram.' },
	{ id: 'e36', type: 9, text: 'Mübahisədə hər iki tərəfin haqlı olduğu məqamları asanlıqla görürəm.' },
	// ---- round 5 ----
	{ id: 'e37', type: 1, text: 'Doğru bildiyim prinsipdən güzəştə getmək mənə özümə xəyanət etmək kimi gəlir.' },
	{ id: 'e38', type: 2, text: 'Kimsə məndən uzaqlaşanda onu geri qazanmaq üçün ona daha çox qayğı göstərirəm.' },
	{ id: 'e39', type: 3, text: 'Gərgin dövrlərdə hisslərimi kənara qoyub yalnız qarşımdakı tapşırığa fokuslanıram.' },
	{ id: 'e40', type: 4, text: 'Münasibətlərdə uzaqda olan insanı yaxında olandan daha çox dəyərləndirdiyim olur.' },
	{ id: 'e41', type: 5, text: 'Hisslərimi elə anında yaşamaqdansa, sonra tək qalanda onları düşünüb anlayıram.' },
	{ id: 'e42', type: 6, text: 'Səlahiyyət sahiblərinə həm güvənmək istəyirəm, həm də onların niyyətinə şübhə ilə yanaşıram.' },
	{ id: 'e43', type: 7, text: 'Pis bir hadisəni tez bir zamanda müsbət tərəfdən izah etməyə başlayıram.' },
	{ id: 'e44', type: 8, text: 'Haqsızlıq görəndə səsimi qaldırıb vəziyyətə müdaxilə etməkdən çəkinmirəm.' },
	{ id: 'e45', type: 9, text: 'Kimsə məni sıxışdıranda açıq etiraz etmək əvəzinə səssizcə öz bildiyimi edirəm.' },
	// ---- round 6 ----
	{ id: 'e46', type: 1, text: 'Yaxınlarımın səhvlərini düzəltməyə çalışdığım üçün bəzən məni tənqidçi hesab edirlər.' },
	{ id: 'e47', type: 2, text: 'Başqalarına kömək edəndə özümü daha dəyərli və sevilən biri kimi hiss edirəm.' },
	{ id: 'e48', type: 3, text: 'İnsanların məni ilk növbədə nailiyyətlərimə görə dəyərləndirdiyini düşünürəm.' },
	{ id: 'e49', type: 4, text: 'Əhvalım bir gün ərzində bir neçə dəfə kəskin şəkildə dəyişə bilər.' },
	{ id: 'e50', type: 5, text: 'Bacarıqsız və ya məlumatsız görünmək mənim üçün ən narahatedici hallardan biridir.' },
	{ id: 'e51', type: 6, text: 'Sabitlik və təhlükəsizlik hissi mənim üçün yeni fürsətlərdən daha vacibdir.' },
	{ id: 'e52', type: 7, text: 'Dostlarım məni çox vaxt yeni macəraların və əyləncələrin təşəbbüskarı kimi tanıyır.' },
	{ id: 'e53', type: 8, text: 'Yumşaq və həssas tərəfimi yalnız tam etibar etdiyim insanlara göstərirəm.' },
	{ id: 'e54', type: 9, text: 'Ətrafımda gərginlik olanda daxili rahatlığımı qorumaq üçün ondan uzaqlaşıram.' },
	// ---- round 7 ----
	{ id: 'e55', type: 1, text: 'Dincələ bilməyim üçün əvvəlcə bütün vacib işlərin qaydasında olduğuna əmin olmalıyam.' },
	{ id: 'e56', type: 2, text: 'Yorğun olsam da, köməyimə ehtiyacı olan birinə "yox" deməkdə çətinlik çəkirəm.' },
	{ id: 'e57', type: 3, text: 'Başqası məndən daha yaxşı nəticə göstərəndə dərhal tempimi artırmaq istəyirəm.' },
	{ id: 'e58', type: 4, text: 'Mənim üçün hər şeydən əvvəl öz həqiqi kimliyimi tapmaq və onu yaşamaq vacibdir.' },
	{ id: 'e59', type: 5, text: 'Şəxsi həyatım haqqında məlumatı yalnız çox az insanla bölüşürəm.' },
	{ id: 'e60', type: 6, text: 'Narahat olanda ya həddən artıq ehtiyatlı oluram, ya da qorxumun üstünə gedirəm.' },
	{ id: 'e61', type: 7, text: 'Gündəlik və təkrarlanan işlər məni tez yorur və diqqətimi dağıdır.' },
	{ id: 'e62', type: 8, text: 'Mübahisə və qarşıdurma məni qorxutmur, əksinə, bəzən mənə enerji verir.' },
	{ id: 'e63', type: 9, text: 'Yaxın insanlarla vaxt keçirəndə onların istəklərinə uyğunlaşmaq mənim üçün təbiidir.' },
]

export const ENNEA_TYPES: Record<number, EnneaTypeProfile> = {
	1: {
		type: 1,
		name: 'Mükəmməliyyətçi',
		tagline: 'Hər şeyin düzgün və ədalətli olmasına çalışan prinsipial insan.',
		coreDesire: 'Yaxşı, düzgün və vicdanlı insan olmaq, dünyanı daha yaxşı vəziyyətə gətirmək.',
		coreFear: 'Səhv, pis və ya qüsurlu olmaq, öz prinsiplərinə xəyanət etmək.',
		summary:
			'Siz güclü daxili prinsiplərə malik, məsuliyyətli və vicdanlı birisiniz. Hər işin necə görülməli olduğunu aydın təsəvvür edirsiniz və reallıq buna uyğun gəlməyəndə bunu dərhal hiss edirsiniz. İçinizdə keyfiyyəti daim yoxlayan tənqidi bir səs var: o, Sizi inkişafa sövq etsə də, bəzən dincəlməyə imkan vermir. Hirsinizi çox vaxt açıq göstərmir, onu nizam-intizam və özünənəzarət arxasında saxlayırsınız. Ən yaxşı halınızda ətrafınızdakılar üçün ədalət, dürüstlük və yüksək standartlar baxımından nümunə olursunuz.',
		strengths: [
			'Yüksək məsuliyyət və etibarlılıq',
			'Dürüstlük və güclü etik prinsiplər',
			'Detallara diqqət və keyfiyyətə tələbkarlıq',
			'Nizam-intizam və ardıcıllıq',
			'Güclü ədalət hissi',
			'Prosesləri təkmilləşdirmə bacarığı',
		],
		blindSpots: [
			'Özünə və başqalarına qarşı həddən artıq tənqidi yanaşma',
			'Başqalarının fərqli üsullarını "səhv" kimi qəbul etmək',
			'Hirsi içində saxlayıb narazılıq yığmaq',
			'Mükəmməl olmayan nəticə ilə barışmaqda çətinlik',
			'İstirahətə və əyləncəyə özünə icazə verməmək',
		],
		communication:
			'Siz aydın, dəqiq və konkret danışmağa üstünlük verirsiniz. Söhbətdə səhvləri, uyğunsuzluqları və təkmilləşdirilməli məqamları tez görürsünüz. Niyyətiniz kömək etmək olsa da, sözləriniz bəzən qarşı tərəfə tənqid kimi gəlir. Qeyri-müəyyən vədlər və səliqəsiz arqumentlər Sizi əsəbiləşdirir.',
		communicationTips: [
			'Rəy bildirməzdən əvvəl işin yaxşı alınan tərəfini qeyd edin.',
			'"Bu, səhvdir" əvəzinə "Belə də etmək olar" kimi ifadələrdən istifadə edin.',
			'Narazılığınızı yığmayın, onu vaxtında və sakit tonla deyin.',
			'Kiminsə üsulunu tənqid etməzdən əvvəl onun məntiqini soruşun.',
		],
		career:
			'Siz dəqiqlik, standart və məsuliyyət tələb edən işlərdə parlayırsınız. Qaydaların və keyfiyyət meyarlarının vacib olduğu mühitdə özünüzü rahat hiss edirsiniz. Prosesləri yaxşılaşdırmaq, səhvləri tapmaq və ədalətli sistemlər qurmaq Sizə məna verir. Daim tələsik işlənən və keyfiyyətdən güzəştə gedilən mühitlər isə Sizi tez yora bilər.',
		careers: [
			'Auditor',
			'Mühasib',
			'Hüquqşünas',
			'Keyfiyyətə nəzarət mütəxəssisi',
			'Komplayens (uyğunluq) mütəxəssisi',
			'Redaktor və korrektor',
			'Mülki mühəndis',
			'Əczaçı',
			'Cərrah',
			'Ekoloq',
		],
		workStyle:
			'Komandada Siz verdiyi sözə əməl edən, işi vaxtında və keyfiyyətlə təhvil verən birisiniz. Aydın qaydalar və bölüşdürülmüş məsuliyyət Sizə rahatlıq verir. Başqalarının işini də öz standartlarınızla ölçdüyünüz üçün bəzən həddən artıq nəzarətçi görünə bilərsiniz.',
		relationships:
			'Yaxın münasibətlərdə Siz sadiq, etibarlı və qayğıkeşsiniz, sevginizi çox vaxt əməli işlərlə göstərirsiniz. Yaxınlarınızın daha yaxşı olmasını istədiyiniz üçün onlara tez-tez məsləhət verir və ya düzəliş edirsiniz. Bu, bəzən onlarda qəbul olunmamaq hissi yarada bilər. Mükəmməl olmayanı da qəbul etməyi öyrəndikcə münasibətləriniz daha isti və rahat olur.',
		stressDirection: 4,
		stress:
			'Stress altında Siz 4-cü tipin qeyri-sağlam xüsusiyyətlərinə yaxınlaşırsınız: özünüzü anlaşılmamış, tənha və hər şeyi təkbaşına daşıyan biri kimi hiss edirsiniz. Əhvalınız tez dəyişir, kədər və inciklik artır, "heç kim mənim qədər çalışmır" düşüncəsi güclənir. Bu vəziyyətdə özünüzə qarşı tənqid də kəskinləşə bilər.',
		growthDirection: 7,
		growth:
			'İnkişaf etdikcə Siz 7-ci tipin sağlam keyfiyyətlərini mənimsəyirsiniz: daha spontan, şən və yeniliklərə açıq olursunuz. Həyatdan zövq almağın keyfiyyətə zərər vermədiyini anlayırsınız. Səhvlərə daha yumşaq baxır, yeni imkanları maraqla qarşılayırsınız.',
		growthTips: [
			'Hər gün heç bir məqsəd güdmədən, sadəcə xoşunuza gələn bir məşğuliyyətə vaxt ayırın.',
			'Bəzi işlərdə "kifayət qədər yaxşı" nəticəni qəbul etməyi məşq edin.',
			'Daxili tənqidçinizin səsini fərq edin və ona yaxın dostunuzla danışdığınız kimi yumşaq cavab verin.',
			'Narazılığınızı yığmayın: onu vaxtında, sakit və konkret ifadə edin.',
			'Başqalarının fərqli üsullarının da nəticə verə biləcəyinə imkan tanıyın.',
		],
		wings: [
			{
				wing: 9,
				name: 'İdealist',
				description:
					'1w9 tipində Siz daha sakit, təmkinli və müşahidəçisiniz. Prinsiplərinizə sadiq qalsanız da, münaqişədən qaçır və dəyişikliyi səs-küysüz, şəxsi nümunə ilə etməyə çalışırsınız. Bəzən ideallarınızla reallıq arasındakı fərqi görüb geri çəkilə bilərsiniz.',
			},
			{
				wing: 2,
				name: 'Müdafiəçi',
				description:
					'1w2 tipində Siz daha isti, ünsiyyətcil və fəalsınız. Prinsiplərinizi başqalarına kömək etmək və ədaləti müdafiə etmək üçün istifadə edirsiniz. İnsanlara doğru olanı göstərmək istəyiniz bəzən nəsihətçi tona çevrilə bilər.',
			},
		],
	},

	2: {
		type: 2,
		name: 'Köməkçi',
		tagline: 'Başqalarının ehtiyaclarını ürəkdən hiss edən və dəstək olmağa tələsən insan.',
		coreDesire: 'Sevilmək, istənilmək və başqalarının həyatında dəyərli yer tutmaq.',
		coreFear: 'Sevgiyə layiq olmamaq, istənilməmək və lazımsız olmaq.',
		summary:
			'Siz isti, səmimi və insanlara qarşı diqqətli birisiniz. Başqalarının nəyə ehtiyacı olduğunu tez hiss edir və çox vaxt onlar xahiş etmədən köməyə gəlirsiniz. İnsanlarla yaxın əlaqə qurmaq və onların həyatında yer tutmaq Sizin üçün böyük əhəmiyyət daşıyır. Lakin öz ehtiyaclarınızı arxa plana keçirdikcə qayğınızın qarşılıqsız qaldığını düşünüb incimə hiss edə bilərsiniz. Ən yaxşı halınızda heç bir əvəz gözləmədən sevən, səxavətli və ilhamverici bir insansınız.',
		strengths: [
			'Empatiya və başqalarının hisslərini duymaq bacarığı',
			'Səmimilik və istiqanlılıq',
			'Səxavət və kömək etməyə hazırlıq',
			'Güclü münasibətlər qurmaq bacarığı',
			'İnsanları ruhlandırmaq və dəstəkləmək',
			'Komandada xoş atmosfer yaratmaq',
		],
		blindSpots: [
			'Öz ehtiyaclarını və yorğunluğunu görməzdən gəlmək',
			'"Yox" deməkdə çətinlik çəkmək',
			'Köməyin əvəzində gizli şəkildə minnətdarlıq gözləmək',
			'Başqalarının həyatına lazım olandan çox qarışmaq',
			'Təqdir olunmayanda özünü dəyərsiz hiss etmək',
		],
		communication:
			'Siz isti, diqqətli və insan yönümlü ünsiyyət qurursunuz. Qarşınızdakının əhvalını tez tutur, ona uyğun söz və ton seçirsiniz. Tərif etməyi və ruhlandırmağı bacarırsınız, lakin öz istəklərinizi birbaşa deməkdə çətinlik çəkirsiniz. Soyuq və ya laqeyd cavablar Sizi gözlədiyinizdən daha çox yaralaya bilər.',
		communicationTips: [
			'İstədiyinizi eyhamla deyil, aydın və birbaşa ifadə edin.',
			'Kömək təklif etməzdən əvvəl qarşı tərəfin buna ehtiyacı olub-olmadığını soruşun.',
			'"Yox" deməyin münasibəti korlamadığını xatırlayın.',
			'Söhbətdə yalnız dinləyici olmayın, öz hisslərinizi də bölüşün.',
		],
		career:
			'Siz insanların həyatında birbaşa fərq yarada bildiyiniz işlərdə xoşbəxt olursunuz. Qayğı, ünsiyyət və etimad tələb edən sahələr təbii gücünüzə uyğundur. Komandada insanların motivasiyasını qorumaq və əlaqələri möhkəmləndirmək bacarığınız çox dəyərlidir. Tamamilə təcrid olunmuş, yalnız rəqəm və sənədlərlə işlənən vəzifələr isə Sizi tez yora bilər.',
		careers: [
			'Psixoloq',
			'Sosial işçi',
			'Ailə həkimi',
			'Məktəbəqədər təhsil müəllimi',
			'İnsan resursları (HR) mütəxəssisi',
			'Müştəri xidmətləri meneceri',
			'Fizioterapevt',
			'QHT-də sosial layihə koordinatoru',
			'Karyera məsləhətçisi',
			'Otel və qonaqpərvərlik meneceri',
		],
		workStyle:
			'Komandada Siz insanları birləşdirən, kömək əli uzadan və atmosferi isti saxlayan birisiniz. Həmkarlarınızın əhvalını hiss edib onlara dəstək olursunuz. Ancaq hamıya kömək etməyə çalışarkən öz tapşırıqlarınızı gecikdirə və tükənə bilərsiniz.',
		relationships:
			'Münasibətlərdə Siz qayğıkeş, diqqətli və fədakarsınız. Sevdiyiniz insanın ehtiyaclarını çox vaxt öz ehtiyaclarınızdan önə qoyursunuz. Buna görə bəzən özünüzü kənarda qalmış və qiymətləndirilməmiş hiss edirsiniz. Öz ehtiyaclarınızı açıq dedikcə münasibətləriniz daha bərabər və sağlam olur.',
		stressDirection: 8,
		stress:
			'Stress altında Siz 8-ci tipin qeyri-sağlam xüsusiyyətlərinə yaxınlaşırsınız: daha tələbkar, nəzarətçi və kəskin olursunuz. Etdiyiniz yaxşılıqların görülmədiyini hiss edəndə bunu açıq qəzəblə və ya iradla ifadə edə bilərsiniz. "Mən sizin üçün bu qədər şey etdim" düşüncəsi güclənir.',
		growthDirection: 4,
		growth:
			'İnkişaf etdikcə Siz 4-cü tipin sağlam keyfiyyətlərinə yaxınlaşırsınız: öz hisslərinizi və ehtiyaclarınızı daha dərindən tanıyırsınız. Yalnız başqalarına deyil, özünüzə də diqqət ayırmağı öyrənirsiniz. Köməyiniz artıq təsdiq axtarışından deyil, sərbəst seçimdən irəli gəlir.',
		growthTips: [
			'Hər gün özünüzdən "Mən indi nə hiss edirəm və nəyə ehtiyacım var?" deyə soruşun.',
			'Gücünüzün çatmadığı xahişlərə nəzakətlə "yox" deməyi məşq edin.',
			'Kömək etməzdən əvvəl niyyətinizi yoxlayın: bunu əvəzində heç nə gözləmədən edirsinizmi?',
			'Başqalarından kömək istəməyi və onu rahatlıqla qəbul etməyi öyrənin.',
			'Yalnız özünüz üçün olan bir hobbiyə müntəzəm vaxt ayırın.',
		],
		wings: [
			{
				wing: 1,
				name: 'Qayğıkeş',
				description:
					'2w1 tipində Siz daha prinsipial, ciddi və vəzifə hissi güclü birisiniz. Köməyinizi çox vaxt səssizcə, "belə etmək lazımdır" düşüncəsi ilə göstərirsiniz. Özünüzə qarşı tələbkar olduğunuz üçün öz ehtiyaclarınızı daha çox gizlədə bilərsiniz.',
			},
			{
				wing: 3,
				name: 'Cazibədar',
				description:
					'2w3 tipində Siz daha ünsiyyətcil, enerjili və cəlbedicisiniz. İnsanlarla tez yaxınlaşır, sosial mühitdə rahat və parlaq görünürsünüz. Sevgi və tanınma ehtiyacınız bəzən başqalarının gözündə xüsusi yer tutmaq istəyinə çevrilə bilər.',
			},
		],
	},

	3: {
		type: 3,
		name: 'Nailiyyətçi',
		tagline: 'Məqsədə fokuslanan, mühitə tez uyğunlaşan və uğura can atan enerjili insan.',
		coreDesire: 'Dəyərli, bacarıqlı və uğurlu olmaq, buna görə qəbul görmək.',
		coreFear: 'Dəyərsiz və uğursuz görünmək, nailiyyətləri olmadan heç kimə maraqlı olmamaq.',
		summary:
			'Siz məqsədyönlü, enerjili və nəticə əldə etməyi sevən birisiniz. Hədəf qoymaq, plan qurmaq və ona çatmaq Sizə güclü motivasiya verir. Müxtəlif mühitlərə tez uyğunlaşır, özünüzü ən təsirli tərəfdən təqdim etməyi bacarırsınız. Bununla belə, dəyərinizi yalnız nailiyyətlərinizlə ölçdükdə öz həqiqi hisslərinizdən uzaqlaşa bilərsiniz. Ən yaxşı halınızda başqalarını da öz potensialına çatmağa ruhlandıran səmimi və bacarıqlı bir lidersiniz.',
		strengths: [
			'Məqsədyönlülük və yüksək motivasiya',
			'Səmərəlilik və nəticəyə fokuslanmaq',
			'Mühitə tez uyğunlaşmaq bacarığı',
			'Özünü və ideyalarını təqdim etmək bacarığı',
			'Başqalarını ruhlandırmaq',
			'Çətin hədəflər qarşısında dözümlülük',
		],
		blindSpots: [
			'Öz dəyərini yalnız nailiyyətlərlə ölçmək',
			'Hissləri işə görə təxirə salmaq',
			'İmicə həddən artıq diqqət yetirmək',
			'Uğursuzluğu etiraf etməkdə çətinlik',
			'Həddən artıq işləyib tükənmək',
		],
		communication:
			'Siz qısa, konkret və nəticəyönümlü danışırsınız. Fikirlərinizi inandırıcı və cəlbedici təqdim etməyi bacarırsınız. Uzun və məqsədsiz söhbətlər Sizi səbirsizləşdirə bilər. Bəzən qarşı tərəfin hisslərini dinləmək əvəzinə həll yolu təklif etməyə tələsirsiniz.',
		communicationTips: [
			'Söhbətdə yalnız nəticələri deyil, hisslərinizi də bölüşün.',
			'Həll təklif etməzdən əvvəl qarşı tərəfi sona qədər dinləyin.',
			'Uğursuzluqlarınız barədə danışmaqdan çəkinməyin: bu, etimadı artırır.',
			'Başqalarından tələsik qərar gözləmək əvəzinə onlara düşünmək üçün vaxt verin.',
		],
		career:
			'Siz aydın hədəflərin, ölçülə bilən nəticələrin və irəliləmə imkanlarının olduğu mühitdə ən yaxşı nəticəni göstərirsiniz. Rəqabət, təqdimat və təşkilatçılıq tələb edən işlər Sizə enerji verir. Uğurun görünən olduğu və zəhmətin qiymətləndirildiyi sahələr Sizi daha çox motivasiya edir. Yavaş, dəyişməyən və nəticəsi görünməyən işlər isə Sizi tez darıxdıra bilər.',
		careers: [
			'Satış meneceri',
			'Marketinq meneceri',
			'Layihə meneceri',
			'Sahibkar',
			'Biznesin inkişafı üzrə mütəxəssis',
			'İnvestisiya və maliyyə məsləhətçisi',
			'İctimaiyyətlə əlaqələr (PR) mütəxəssisi',
			'Brend meneceri',
			'Televiziya aparıcısı',
			'İdarəetmə üzrə məsləhətçi',
		],
		workStyle:
			'Komandada Siz tempi müəyyən edən, işi sürətlə irəli aparan və hədəfləri xatırladan birisiniz. Səmərəsiz görüşlər və qeyri-müəyyən tapşırıqlar Sizi narahat edir. Nəticəyə çatmaq istəyi bəzən komanda üzvlərinin hisslərini və tempini görməməyinizə səbəb ola bilər.',
		relationships:
			'Münasibətlərdə Siz diqqətli, fəal və sevdiyiniz insanlar üçün çox şey etməyə hazırsınız. Bununla belə, iş və hədəflər bəzən yaxınlarınıza ayırdığınız vaxtı azalda bilər. Yaxınlarınızın Sizi nailiyyətlərinizə görə deyil, olduğunuz kimi sevdiyini qəbul etmək Sizin üçün vacib addımdır. Zəif tərəflərinizi göstərməyə cəsarət etdikcə münasibətləriniz dərinləşir.',
		stressDirection: 9,
		stress:
			'Stress altında Siz 9-cu tipin qeyri-sağlam xüsusiyyətlərinə yaxınlaşırsınız: motivasiyanız birdən düşür, işləri təxirə salır, mənasız məşğuliyyətlərə qaçırsınız. Həmişəki enerjinizin yerini laqeydlik və yorğunluq tutur. Problemlərlə üzləşmək əvəzinə onları görməzdən gəlməyə başlayırsınız.',
		growthDirection: 6,
		growth:
			'İnkişaf etdikcə Siz 6-cı tipin sağlam keyfiyyətlərini mənimsəyirsiniz: komandaya daha çox güvənir, şəxsi uğurdan çox ümumi nəticəyə xidmət edirsiniz. Daha səmimi, sadiq və əməkdaşlığa açıq olursunuz. İmicdən çox, həqiqi bağlılıq Sizin üçün dəyər qazanır.',
		growthTips: [
			'Həftədə bir dəfə heç bir nəticə gözləmədən, sadəcə zövq aldığınız bir işlə məşğul olun.',
			'Özünüzdən "Bu hədəfi həqiqətən mən istəyirəm, yoxsa başqaları gözləyir?" deyə soruşun.',
			'Etibar etdiyiniz insanlarla uğursuzluqlarınızı və şübhələrinizi bölüşün.',
			'Hisslərinizi işdən sonraya saxlamayın, onları elə anında fərq etməyə çalışın.',
			'Komandanın uğurunu şəxsi uğurunuz qədər qeyd edin.',
		],
		wings: [
			{
				wing: 2,
				name: 'Ulduz',
				description:
					'3w2 tipində Siz daha cazibədar, ünsiyyətcil və insanlara yönəlmisiniz. Uğurunuzu çox vaxt insanlarla münasibətlər vasitəsilə qurur, sevilmək və bəyənilmək istəyirsiniz. Bəzən başqalarının gözləntilərinə uyğunlaşmaq üçün öz istəklərinizi arxa plana keçirə bilərsiniz.',
			},
			{
				wing: 4,
				name: 'Peşəkar',
				description:
					'3w4 tipində Siz daha ciddi, təmkinli və işinizin keyfiyyətinə fokuslanmısınız. Uğurla yanaşı, özünəməxsus və mənalı bir iş görmək də Sizin üçün vacibdir. Daxilən daha həssas olduğunuz üçün tənqidi şəxsən qəbul edə bilərsiniz.',
			},
		],
	},

	4: {
		type: 4,
		name: 'Fərdiyyətçi',
		tagline: 'Dərin hissləri, özünəməxsus baxışı və həqiqi olmaq istəyi ilə seçilən insan.',
		coreDesire: 'Öz həqiqi kimliyini tapmaq və həyatda özünəməxsus məna yaratmaq.',
		coreFear: 'Kimliksiz, adi və ya mahiyyətcə əskik olmaq.',
		summary:
			'Siz həssas, dərin hissləri olan və həyata özünəməxsus baxışla yanaşan birisiniz. Həqiqi olmaq, özünüzü olduğunuz kimi ifadə etmək Sizin üçün hər şeydən vacibdir. Çox vaxt başqalarının Sizi tam anlamadığını və həyatınızda nəyinsə əskik olduğunu hiss edirsiniz. Kədər və nostalji kimi hisslərdən qaçmır, onlarda məna və gözəllik tapırsınız. Ən yaxşı halınızda yaradıcılığınız və empatiyanızla başqalarına öz hisslərini anlamağa kömək edirsiniz.',
		strengths: [
			'Yaradıcılıq və orijinal düşüncə',
			'Emosional dərinlik və empatiya',
			'İncə estetik zövq',
			'Səmimilik və həqiqi olmaq istəyi',
			'Çətin hissləri anlamaq və qəbul etmək bacarığı',
			'Özünü dərk etməyə güclü meyil',
		],
		blindSpots: [
			'Özünü tez-tez başqaları ilə müqayisə etmək',
			'Hisslərə həddən artıq qapılmaq',
			'Əhval dəyişkənliyi',
			'Adi və gündəlik işləri dəyərsiz saymaq',
			'Anlaşılmadığını hiss edib geri çəkilmək',
		],
		communication:
			'Siz səmimi, emosional və obrazlı danışırsınız. Səthi söhbətlərdən çox, dərin və mənalı mövzular Sizi cəlb edir. Hisslərinizi ifadə etmək Sizin üçün təbiidir, lakin qarşı tərəfin anlamadığını görəndə tez geri çəkilə bilərsiniz. Tənqidi çox vaxt şəxsiyyətinizə yönəlmiş kimi qəbul edirsiniz.',
		communicationTips: [
			'Hisslərinizi bölüşərkən konkret istəyinizi də ifadə edin.',
			'Tənqidi şəxsiyyətinizə verilən qiymət kimi deyil, işinizə aid rəy kimi dinləyin.',
			'Kiminsə Sizi anlamadığını düşünəndə susmaq əvəzinə fikrinizi başqa sözlərlə izah edin.',
			'Gündəlik, sadə söhbətlərin də yaxınlıq yaratdığını xatırlayın.',
		],
		career:
			'Siz yaradıcılığınızı, şəxsi baxışınızı və emosional dərinliyinizi göstərə bildiyiniz işlərdə özünüzü tapırsınız. İşin mənalı olması və dəyərlərinizlə üst-üstə düşməsi Sizin üçün maaşdan az vacib deyil. Fərdi yanaşmaya və orijinallığa yer verən mühitlər Sizi ruhlandırır. Sərt şablonlar və təkrarlanan proseslər isə Sizə boğucu gələ bilər.',
		careers: [
			'Qrafik dizayner',
			'Memar',
			'İnteryer dizayneri',
			'Kopirayter və ya kontent müəllifi',
			'Fotoqraf',
			'Musiqiçi',
			'Aktyor',
			'Psixoterapevt',
			'Moda dizayneri',
			'UX/UI dizayner',
		],
		workStyle:
			'Komandada Siz yeni baxış bucağı və yaradıcı ideyalar gətirən birisiniz. Özünüzü işə tam həsr etmək üçün onun mənalı olduğunu hiss etməlisiniz. Əhvalınız iş tempinizə təsir edə bilər, buna görə sabit gündəlik rejim qurmaq Sizə kömək edir.',
		relationships:
			'Münasibətlərdə Siz dərin, səmimi və emosional yaxınlıq axtarırsınız. Partnyorunuzu həqiqətən anlamaq və onun tərəfindən anlaşılmaq istəyirsiniz. Bəzən uzaqda olanı idealizə edib yaxında olanın qüsurlarına fokuslana bilərsiniz. Gündəlik qayğının və sabitliyin də sevginin ifadəsi olduğunu gördükcə münasibətləriniz möhkəmlənir.',
		stressDirection: 2,
		stress:
			'Stress altında Siz 2-ci tipin qeyri-sağlam xüsusiyyətlərinə yaxınlaşırsınız: başqalarına həddən artıq bağlanır, onların diqqətini və təsdiqini qazanmağa çalışırsınız. Özünüzü lazımsız hiss edəndə bunu gizli inciklik və ya tələbkarlıqla ifadə edə bilərsiniz. Öz ehtiyaclarınızı başqaları vasitəsilə ödəməyə cəhd edirsiniz.',
		growthDirection: 1,
		growth:
			'İnkişaf etdikcə Siz 1-ci tipin sağlam keyfiyyətlərini mənimsəyirsiniz: daha intizamlı, ardıcıl və prinsipial olursunuz. İlham gözləmədən hərəkətə keçir, ideyalarınızı reallığa çevirirsiniz. Əhvalınızdan asılı olmadan dəyərlərinizə uyğun yaşamağı öyrənirsiniz.',
		growthTips: [
			'Sadə gündəlik rejim qurun və əhvalınızdan asılı olmayaraq ona əməl edin.',
			'Yaradıcı ideyalarınızdan birini kiçik addımlara bölüb sona qədər çatdırın.',
			'Özünüzü başqaları ilə müqayisə etdiyinizi fərq edəndə diqqətinizi öz irəliləyişinizə yönəldin.',
			'Hazırda həyatınızda olan yaxşı şeylər üçün minnətdarlıq siyahısı tutun.',
			'Hisslərinizi qəbul edin, amma qərarlarınızı yalnız onlara əsaslanaraq verməyin.',
		],
		wings: [
			{
				wing: 3,
				name: 'İfaçı',
				description:
					'4w3 tipində Siz daha ünsiyyətcil, iddialı və özünüzü göstərməyə meyillisiniz. Yaradıcılığınızı başqalarının görməsini və qiymətləndirməsini istəyirsiniz. Həm orijinal, həm də uğurlu olmaq istəyi bəzən daxili gərginlik yarada bilər.',
			},
			{
				wing: 5,
				name: 'Bohem',
				description:
					'4w5 tipində Siz daha qapalı, düşüncəli və daxili dünyanıza yönəlmisiniz. Qeyri-adi ideyalara və dərin mövzulara maraq göstərir, çox vaxt təkliyi seçirsiniz. Cəmiyyətin gözləntilərinə uyğunlaşmaq Sizin üçün xüsusilə çətin ola bilər.',
			},
		],
	},

	5: {
		type: 5,
		name: 'Tədqiqatçı',
		tagline: 'Dünyanı dərindən anlamağa çalışan müstəqil və müşahidəçi zehin.',
		coreDesire: 'Bacarıqlı, bilikli və müstəqil olmaq, dünyanın necə işlədiyini anlamaq.',
		coreFear: 'Aciz və bacarıqsız olmaq, başqalarının tələbləri qarşısında tükənmək.',
		summary:
			'Siz maraqlı, analitik və müstəqil düşünən birisiniz. Hadisələrə qarışmazdan əvvəl onları kənardan müşahidə edib anlamağa üstünlük verirsiniz. Bilik və bacarıq Sizə təhlükəsizlik hissi verir, buna görə maraqlandığınız sahəni dərindən öyrənirsiniz. Vaxtınızı, enerjinizi və şəxsi məkanınızı qorumağa çalışır, çox tələbkar mühitlərdən uzaq durursunuz. Ən yaxşı halınızda dərin biliklərinizi cəsarətlə tətbiq edən, yenilikçi və müdrik bir insansınız.',
		strengths: [
			'Analitik və məntiqi düşüncə',
			'Dərin biliyə can atmaq',
			'Müstəqillik və özünə kifayət etmək',
			'Obyektivlik və soyuqqanlılıq',
			'Mürəkkəb problemləri sistemli həll etmək',
			'Diqqətli müşahidə qabiliyyəti',
		],
		blindSpots: [
			'Hərəkətə keçmək əvəzinə həddən artıq hazırlaşmaq',
			'Emosional cəhətdən uzaq və soyuq görünmək',
			'İnsanlardan və münasibətlərdən geri çəkilmək',
			'Vaxtı və enerjini həddən artıq qorumaq',
			'Bilik və resursları bölüşməkdə xəsislik',
		],
		communication:
			'Siz az, amma dəqiq və düşünülmüş danışırsınız. Yaxşı bildiyiniz mövzuda ətraflı izah verməyi sevirsiniz. Şəxsi və emosional mövzulardan isə çox vaxt uzaq durursunuz. Gözlənilməz suallar və təzyiq altında dərhal cavab vermək Sizi narahat edə bilər.',
		communicationTips: [
			'Fikrinizi bölüşmək üçün tam hazır olmağı gözləməyin: ilkin fikirləriniz də dəyərlidir.',
			'Söhbətdə yalnız faktları deyil, münasibətinizi və hisslərinizi də ifadə edin.',
			'Düşünməyə vaxt lazımdırsa, bunu açıq deyin: "Bir az fikirləşib sonra cavab verim."',
			'Mürəkkəb ideyaları sadə nümunələrlə izah etməyə çalışın.',
		],
		career:
			'Siz dərin bilik, analiz və müstəqil iş tələb edən sahələrdə ən yaxşı nəticəni göstərirsiniz. Diqqətinizi uzun müddət bir problemə yönəldə bildiyiniz sakit mühit Sizin üçün idealdır. Mürəkkəb sistemləri anlamaq və yeni həllər tapmaq Sizə məmnunluq gətirir. Daimi ünsiyyət və səs-küy tələb edən işlər isə enerjinizi tez tükəndirə bilər.',
		careers: [
			'Proqram mühəndisi',
			'Data analitiki',
			'Kibertəhlükəsizlik mütəxəssisi',
			'Elmi işçi',
			'Neft-qaz geoloqu',
			'Aktuari',
			'Maliyyə analitiki',
			'Universitet müəllimi',
			'Sistem arxitektoru',
			'Laboratoriya mütəxəssisi',
		],
		workStyle:
			'Komandada Siz dərin ekspert biliyi və obyektiv təhlil gətirən birisiniz. Müstəqil işləmək və öz tempinizdə düşünmək imkanı Sizin üçün vacibdir. Çoxsaylı görüşlər və daimi ünsiyyət Sizi yora bilər, buna görə iş vaxtınızı aydın bölmək kömək edir.',
		relationships:
			'Münasibətlərdə Siz sadiq, hörmətcil və şəxsi sərhədlərə həssassınız. Hisslərinizi sözlə deyil, daha çox diqqət və etibarlılıqla göstərirsiniz. Yaxınlarınız bəzən Sizi uzaq və ya qapalı hiss edə bilər. Daxili dünyanızı tədricən açdıqca münasibətləriniz daha isti və yaxın olur.',
		stressDirection: 7,
		stress:
			'Stress altında Siz 7-ci tipin qeyri-sağlam xüsusiyyətlərinə yaxınlaşırsınız: diqqətiniz dağılır, bir mövzudan digərinə keçirsiniz. Gərginlikdən qaçmaq üçün impulsiv qərarlar verə və ya diqqətinizi yayındıran məşğuliyyətlərə qapıla bilərsiniz. Həmişəki dərin fokusunuzu itirirsiniz.',
		growthDirection: 8,
		growth:
			'İnkişaf etdikcə Siz 8-ci tipin sağlam keyfiyyətlərini mənimsəyirsiniz: daha qətiyyətli, özünəinamlı və fəal olursunuz. Biliklərinizi yalnız toplamır, onları cəsarətlə praktikada tətbiq edirsiniz. Öz gücünüzü hiss edərək liderlik etməkdən çəkinmirsiniz.',
		growthTips: [
			'Yeni bir şeyi tam öyrənməzdən əvvəl kiçik bir praktiki addım atın.',
			'Hər həftə ən azı bir dəfə yaxınlarınızla şəxsi hissləriniz barədə danışın.',
			'Bədəninizə diqqət yetirin: idman və fiziki fəallıq zehninizi də canlandırır.',
			'Biliklərinizi təqdimat, yazı və ya mentorluq vasitəsilə başqaları ilə bölüşün.',
			'Ehtiyaclarınızı azaltmağa çalışmaq əvəzinə onları qəbul edin və ödəyin.',
		],
		wings: [
			{
				wing: 4,
				name: 'Orijinal mütəfəkkir',
				description:
					'5w4 tipində Siz daha yaradıcı, həssas və qeyri-adi ideyalara meyillisiniz. Bilikləri incəsənət, fəlsəfə və ya yenilikçi layihələrlə birləşdirməyi sevirsiniz. Daxili dünyanıza daha çox qapanaraq cəmiyyətdən uzaqlaşa bilərsiniz.',
			},
			{
				wing: 6,
				name: 'Problem həlledici',
				description:
					'5w6 tipində Siz daha praktik, sistemli və təhlükəsizliyə yönəlmisiniz. Biliklərinizi real problemləri həll etmək üçün istifadə edir, etibarlı nəticələrə dəyər verirsiniz. Komanda ilə işləməyə daha açıqsınız, lakin risklərə qarşı ehtiyatlı ola bilərsiniz.',
			},
		],
	},

	6: {
		type: 6,
		name: 'Sadiq',
		tagline: 'Etibarlı, məsuliyyətli və riskləri qabaqcadan görən insan.',
		coreDesire: 'Təhlükəsizlik, dəstək və etibarlı bir dayaq tapmaq.',
		coreFear: 'Dəstəksiz və istiqamətsiz qalmaq, təhlükə qarşısında tək olmaq.',
		summary:
			'Siz məsuliyyətli, sadiq və ətrafdakı riskləri tez görən birisiniz. Mümkün problemləri qabaqcadan düşünmək Sizə təhlükəsizlik hissi verir və çox vaxt başqalarının görmədiyi təhlükələri fərq edirsiniz. Etibar etdiyiniz insanlara və qruplara güclü bağlılıq göstərir, onlar üçün çox şeyə hazır olursunuz. Bununla belə, şübhə və narahatlıq qərar verməyinizi çətinləşdirə bilər. Ən yaxşı halınızda cəsarətli, etibarlı və başqalarına dayaq olan bir insansınız.',
		strengths: [
			'Sədaqət və etibarlılıq',
			'Riskləri qabaqcadan görmək',
			'Məsuliyyət hissi və çalışqanlıq',
			'Komanda ruhu və əməkdaşlıq',
			'Problemlərə hazırlıqlı olmaq',
			'Ədalətsizliyə qarşı həssaslıq',
		],
		blindSpots: [
			'Həddən artıq narahat olmaq və ən pis ssenarini düşünmək',
			'Qərar verməkdə tərəddüd',
			'Başqalarının niyyətinə şübhə ilə yanaşmaq',
			'Öz bacarığına az güvənmək',
			'Səlahiyyət sahiblərinə qarşı ziddiyyətli münasibət',
		],
		communication:
			'Siz diqqətli, ehtiyatlı və sual verməyə meyilli danışırsınız. Bir fikri qəbul etməzdən əvvəl onun zəif tərəflərini və mümkün riskləri yoxlayırsınız. Səmimiyyət və açıqlıq Sizin üçün çox vacibdir, gizli niyyət hiss edəndə tez narahat olursunuz. Bəzən ehtiyatlılığınız qarşı tərəfə inamsızlıq kimi görünə bilər.',
		communicationTips: [
			'Narahatlığınızı bildirərkən onunla yanaşı mümkün həll yolunu da təklif edin.',
			'Şübhələrinizi ittiham kimi deyil, sual kimi ifadə edin.',
			'Başqalarının fikrini soruşmazdan əvvəl öz fikrinizi formalaşdırın.',
			'Söhbətdə yaxşı gedən məqamları da qeyd etməyi unutmayın.',
		],
		career:
			'Siz aydın struktur, etibarlı komanda və sabit gələcək təklif edən mühitlərdə ən yaxşı nəticəni göstərirsiniz. Riskləri təhlil etmək, sistemləri qorumaq və planlaşdırmaq bacarığınız bir çox sahədə dəyərlidir. Komanda üzvü kimi Siz işi sona qədər çatdıran, etibar edilə bilən birisiniz. Qeyri-müəyyən və daim dəyişən mühitlər isə narahatlığınızı artıra bilər.',
		careers: [
			'Risk meneceri',
			'Daxili auditor',
			'İnformasiya təhlükəsizliyi mütəxəssisi',
			'Əməyin mühafizəsi (HSE) mütəxəssisi',
			'Sığorta mütəxəssisi',
			'Bank mütəxəssisi',
			'Dövlət qulluqçusu',
			'Logistika və təchizat mütəxəssisi',
			'Polis əməkdaşı',
			'Həkim',
		],
		workStyle:
			'Komandada Siz etibarlı, məsuliyyətli və ümumi məqsədə bağlı birisiniz. Mümkün problemləri qabaqcadan görüb komandanı xəbərdar edirsiniz. Aydın rəhbərlik və açıq kommunikasiya olmayanda isə narahatlığınız arta bilər.',
		relationships:
			'Münasibətlərdə Siz sadiq, qayğıkeş və uzunmüddətli bağlılığa dəyər verən birisiniz. Etimad qurmaq Sizə vaxt aparır, amma bir dəfə güvəndikdən sonra çox bağlı olursunuz. Narahat olduğunuz dövrlərdə partnyorunuzdan təminat və təsdiq gözləyə bilərsiniz. Açıq və səmimi ünsiyyət münasibətlərinizin təməlini təşkil edir.',
		stressDirection: 3,
		stress:
			'Stress altında Siz 3-cü tipin qeyri-sağlam xüsusiyyətlərinə yaxınlaşırsınız: narahatlığı boğmaq üçün həddən artıq işləyir, durmadan məşğul olmağa çalışırsınız. Özünüzü daha bacarıqlı və etibarlı göstərmək üçün imicə fokuslana bilərsiniz. Hisslərinizdən uzaqlaşıb yalnız tapşırıqlara qapılırsınız.',
		growthDirection: 9,
		growth:
			'İnkişaf etdikcə Siz 9-cu tipin sağlam keyfiyyətlərini mənimsəyirsiniz: daha sakit, rahat və özünüzə güvənən olursunuz. Hər şeyi nəzarətdə saxlamaq ehtiyacı azalır, həyata daha çox etimadla baxırsınız. Daxili sabitlik tapdıqca başqalarına da sakitlik verirsiniz.',
		growthTips: [
			'Narahat düşüncələr gələndə onların fakt, yoxsa ehtimal olduğunu yoxlayın.',
			'Kiçik qərarları başqalarına müraciət etmədən özünüz verməyi məşq edin.',
			'Nəfəs məşqləri, gəzinti və ya meditasiya ilə bədəninizi sakitləşdirin.',
			'Keçmişdə çətinliklərin öhdəsindən necə gəldiyinizi yazın və xatırlayın.',
			'Ən pis ssenari ilə yanaşı ən yaxşı və ən real ssenarini də düşünün.',
		],
		wings: [
			{
				wing: 5,
				name: 'Qoruyucu',
				description:
					'6w5 tipində Siz daha analitik, təmkinli və müstəqilsiniz. Təhlükəsizliyi bilik və hazırlıqda axtarır, qərarlarınızı dərin təhlilə əsaslandırırsınız. Daha qapalı olduğunuz üçün etimadınızı qazanmaq daha çox vaxt tələb edir.',
			},
			{
				wing: 7,
				name: 'Səmimi yoldaş',
				description:
					'6w7 tipində Siz daha ünsiyyətcil, zarafatcıl və insanlara açıqsınız. Narahatlığınızı çox vaxt yumor və sosial fəallıqla yüngülləşdirirsiniz. Dəstəyi əsasən dostlarınızda və yaxın çevrənizdə axtarırsınız.',
			},
		],
	},

	7: {
		type: 7,
		name: 'Entuziast',
		tagline: 'Həyatdan zövq alan, yeni imkanlara açıq və enerjili insan.',
		coreDesire: 'Xoşbəxt və məmnun olmaq, həyatın bütün imkanlarını yaşamaq.',
		coreFear: 'Məhrumiyyət, ağrı və bir yerdə ilişib qalmaq.',
		summary:
			'Siz optimist, maraqlı və həyat enerjisi ilə dolu birisiniz. Yeni təcrübələr, ideyalar və imkanlar Sizi ruhlandırır, gələcək üçün plan qurmaq isə Sizə xüsusi zövq verir. Müxtəlif sahələrdəki fikirləri tez birləşdirib yaradıcı həllər tapırsınız. Bununla belə, ağır hisslərdən və məhdudiyyətlərdən qaçmaq istəyi işləri yarımçıq qoymağınıza səbəb ola bilər. Ən yaxşı halınızda dərin məmnunluq və minnətdarlıqla yaşayan, ətrafına sevinc yayan birisiniz.',
		strengths: [
			'Optimizm və pozitiv enerji',
			'Yeni ideyalar yaratmaq bacarığı',
			'Çevik düşüncə və uyğunlaşma',
			'Ünsiyyətcillik və yumor hissi',
			'Fərqli sahələri birləşdirmək bacarığı',
			'Çətinlikdən tez toparlanmaq',
		],
		blindSpots: [
			'İşləri yarımçıq qoymaq',
			'Ağır hisslərdən və problemlərdən qaçmaq',
			'İmpulsiv qərarlar vermək',
			'Həddən artıq öhdəlik götürmək',
			'Uzunmüddətli bağlılıqdan çəkinmək',
		],
		communication:
			'Siz canlı, enerjili və zarafatcıl danışırsınız. Söhbəti bir mövzudan digərinə tez keçirir, maraqlı ideya və hekayələrlə insanları cəlb edirsiniz. Ağır və ya kədərli mövzularda isə söhbəti yüngülləşdirməyə və ya mövzunu dəyişməyə meyilli ola bilərsiniz. Uzun və detallı izahlar Sizi səbirsizləşdirir.',
		communicationTips: [
			'Ciddi söhbətlərdə mövzunu dəyişməyə tələsməyin, çətin hissləri də sona qədər dinləyin.',
			'Verdiyiniz vədləri qeyd edin və onlara əməl olunduğunu yoxlayın.',
			'Yeni ideya təklif etməzdən əvvəl mövcud mövzunu yekunlaşdırın.',
			'Qarşı tərəfin sözünü kəsmədən dinləməyi məşq edin.',
		],
		career:
			'Siz müxtəliflik, yaradıcılıq və yenilik olan işlərdə özünüzü ən yaxşı hiss edirsiniz. Çoxsaylı layihələr, yeni insanlar və dəyişən tapşırıqlar Sizə enerji verir. İdeya yaratmaq, insanları ruhlandırmaq və yeni istiqamətlər açmaq Sizin güclü tərəfinizdir. Monoton, sərt qaydalarla məhdudlaşdırılmış işlər isə motivasiyanızı tez söndürə bilər.',
		careers: [
			'Tədbir meneceri',
			'Turizm meneceri',
			'Reklam agentliyində kreativ mütəxəssis',
			'Jurnalist',
			'Startap təsisçisi',
			'Məhsul meneceri',
			'Sosial media meneceri',
			'Turist bələdçisi',
			'Radio və ya televiziya aparıcısı',
			'Korporativ təlimçi',
		],
		workStyle:
			'Komandada Siz ideya mənbəyi və enerji daşıyıcısısınız. Beyin həmləsi, yeni layihələrin başlanğıcı və insanları ruhlandırmaq Sizin güclü tərəfinizdir. Detallı və uzunmüddətli işlərdə isə strukturlu həmkarlarla əməkdaşlıq Sizə kömək edir.',
		relationships:
			'Münasibətlərdə Siz şən, səxavətli və macəra dolu partnyorsunuz. Yaxınlarınızla yeni təcrübələr yaşamağı və birgə planlar qurmağı sevirsiniz. Lakin münasibət ağırlaşanda və ya məhdudlaşdırıcı görünəndə uzaqlaşmaq istəyi yarana bilər. Çətin anlarda da yaxınlarınızın yanında qalmağı öyrəndikcə münasibətləriniz dərinləşir.',
		stressDirection: 1,
		stress:
			'Stress altında Siz 1-ci tipin qeyri-sağlam xüsusiyyətlərinə yaxınlaşırsınız: əsəbi, tənqidi və səbirsiz olursunuz. Başqalarının yavaşlığına və ya səhvlərinə kəskin reaksiya verə bilərsiniz. Həmişəki çevikliyinizin yerini sərtlik və "hər şey mənim dediyim kimi olmalıdır" yanaşması tutur.',
		growthDirection: 5,
		growth:
			'İnkişaf etdikcə Siz 5-ci tipin sağlam keyfiyyətlərini mənimsəyirsiniz: daha fokuslu, dərin və düşüncəli olursunuz. Hər şeyi sınamaq əvəzinə bir sahəni dərindən öyrənməkdən zövq alırsınız. İndiki anda qalmağı və daxili sakitliyi tapmağı öyrənirsiniz.',
		growthTips: [
			'Yeni layihəyə başlamazdan əvvəl ən azı bir köhnə işi tamamlayın.',
			'Hər gün bir neçə dəqiqə telefonsuz və plansız, sadəcə indiki anda qalın.',
			'Narahatedici hisslərdən qaçmaq əvəzinə onları gündəliyə yazın və ya bir dostla bölüşün.',
			'Sizi maraqlandıran bir sahəni seçib onu ardıcıl və dərindən öyrənin.',
			'Vacib qərar verməzdən əvvəl onun uzunmüddətli nəticələrini yazılı şəkildə düşünün.',
		],
		wings: [
			{
				wing: 6,
				name: 'Əyləndirici',
				description:
					'7w6 tipində Siz daha mehriban, zarafatcıl və insanlara bağlısınız. Əyləncəni dostlarınızla bölüşməyi sevir, komandaya enerji gətirirsiniz. Bəzən narahatlığınızı yumorla gizlədə və ya başqalarının dəstəyinə ehtiyac duya bilərsiniz.',
			},
			{
				wing: 8,
				name: 'Təşəbbüskar',
				description:
					'7w8 tipində Siz daha qətiyyətli, iddialı və praktiksiniz. İstədiyinizə çatmaq üçün cəsarətlə hərəkətə keçir, imkanları tez reallığa çevirirsiniz. Bəzən səbirsiz və tələbkar görünə bilərsiniz.',
			},
		],
	},

	8: {
		type: 8,
		name: 'Lider',
		tagline: 'Həm özünü, həm də başqalarını qorumağa hazır olan güclü və qətiyyətli insan.',
		coreDesire: 'Öz həyatına nəzarət etmək, güclü və müstəqil olmaq.',
		coreFear: 'Başqalarının nəzarəti altına düşmək, zəif və müdafiəsiz qalmaq.',
		summary:
			'Siz güclü iradəli, qətiyyətli və birbaşa danışan birisiniz. Çətinliklərdən qaçmır, əksinə onlarla üz-üzə gəlməyi və vəziyyəti öz əlinizə almağı üstün tutursunuz. Ədalətsizliyə qarşı həssassınız və zəif olanı qorumağa hazırsınız. Bununla belə, zəif görünmək qorxusu Sizi yumşaq tərəflərinizi gizlətməyə və bəzən həddən artıq sərt olmağa vadar edə bilər. Ən yaxşı halınızda gücünüzü başqalarını qorumaq və ruhlandırmaq üçün istifadə edən səxavətli bir lidersiniz.',
		strengths: [
			'Qətiyyət və özünəinam',
			'Liderlik və məsuliyyət götürmək',
			'Birbaşalıq və açıqlıq',
			'Zəifləri qorumaq istəyi',
			'Çətin vəziyyətlərdə cəsarət',
			'Sürətli qərar vermək bacarığı',
		],
		blindSpots: [
			'Həddən artıq nəzarətçi olmaq',
			'Başqalarının hisslərini nəzərə almadan sərt danışmaq',
			'Zəifliyi və həssaslığı göstərməkdən qaçmaq',
			'Münaqişəni lazım olandan çox kəskinləşdirmək',
			'Başqalarının fikrini dinləməkdə səbirsizlik',
		],
		communication:
			'Siz açıq, birbaşa və enerjili danışırsınız. Dolayı danışmağı və fikrini gizlədən insanları sevmirsiniz. Mübahisə Sizin üçün münasibəti aydınlaşdırmaq vasitəsidir, lakin qarşı tərəf bunu hücum kimi qəbul edə bilər. Ən çox hörmət etdiyiniz insanlar çox vaxt Sizə cəsarətlə etiraz edə bilənlərdir.',
		communicationTips: [
			'Fikrinizi deməzdən əvvəl qarşı tərəfə də danışmaq imkanı verin.',
			'Tonunuzun təsirini fərq edin: sakit danışmaq fikrinizin gücünü azaltmır.',
			'Sizinlə razılaşmayan insanları rəqib kimi deyil, fərqli baxış bucağı kimi qəbul edin.',
			'Yaxınlarınıza həssas tərəflərinizi də görməyə imkan verin.',
		],
		career:
			'Siz məsuliyyət, səlahiyyət və müstəqil qərar vermək imkanı olan işlərdə ən yaxşı nəticəni göstərirsiniz. Çətin vəziyyətləri idarə etmək, böhranları həll etmək və komandanı irəli aparmaq Sizin təbii gücünüzdür. Ədaləti qorumaq və real təsir göstərmək imkanı Sizi motivasiya edir. Həddən artıq nəzarət olunan, bürokratik mühitlər isə Sizi məhdudlaşdırır.',
		careers: [
			'Sahibkar',
			'Şirkət rəhbəri (baş direktor)',
			'Vəkil',
			'Prokuror',
			'Tikinti layihəsinin rəhbəri',
			'Əməliyyatlar direktoru',
			'Hərbi zabit',
			'Satış direktoru',
			'İstehsalat müdiri',
			'İdman məşqçisi',
		],
		workStyle:
			'Komandada Siz istiqamət verən, qərar qəbul edən və məsuliyyəti öz üzərinə götürən birisiniz. Çətin vəziyyətlərdə komandanı qoruyur və irəli aparırsınız. Başqalarının təşəbbüsünə yer vermək və səlahiyyətləri bölüşdürmək Sizin üçün inkişaf sahəsidir.',
		relationships:
			'Münasibətlərdə Siz sadiq, qoruyucu və səxavətlisiniz. Sevdiyiniz insanlar üçün hər şeyə hazırsınız, lakin yumşaq və həssas tərəfinizi yalnız tam güvəndiyiniz insanlara göstərirsiniz. Nəzarəti əldən vermək qorxusu bəzən münasibətdə güc mübarizəsinə səbəb ola bilər. Özünüzə həssas olmağa icazə verdikcə yaxınlığınız dərinləşir.',
		stressDirection: 5,
		stress:
			'Stress altında Siz 5-ci tipin qeyri-sağlam xüsusiyyətlərinə yaxınlaşırsınız: insanlardan uzaqlaşır, qapanır və tək qalmaq istəyirsiniz. Növbəti addımı gizlicə planlaşdırır, ətrafınıza qarşı daha şübhəli olursunuz. Həmişəki enerjinizin yerini yorğunluq və geri çəkilmə tutur.',
		growthDirection: 2,
		growth:
			'İnkişaf etdikcə Siz 2-ci tipin sağlam keyfiyyətlərini mənimsəyirsiniz: daha qayğıkeş, açıqürəkli və həssas olursunuz. Gücünüzü nəzarət üçün deyil, başqalarına dəstək olmaq üçün istifadə edirsiniz. Yumşaqlığın zəiflik deyil, cəsarət olduğunu kəşf edirsiniz.',
		growthTips: [
			'Qərar verməzdən əvvəl komandanızın fikrini soruşun və onu həqiqətən dinləyin.',
			'Hirslənəndə reaksiya verməzdən əvvəl bir neçə dəfə dərindən nəfəs alın.',
			'Etibar etdiyiniz bir insanla qorxularınız və zəif tərəfləriniz barədə danışın.',
			'Bəzi işlərdə nəzarəti başqasına həvalə edib nəticəyə güvənməyi məşq edin.',
			'Gücünüzü kiməsə dəstək olmaq üçün istifadə etdiyiniz anları fərq edin və çoxaldın.',
		],
		wings: [
			{
				wing: 7,
				name: 'Mübariz',
				description:
					'8w7 tipində Siz daha enerjili, ünsiyyətcil və risk etməyə hazırsınız. Böyük hədəflər qoyur, imkanları tez görür və sürətlə hərəkətə keçirsiniz. Bəzən impulsiv və səbirsiz ola bilərsiniz.',
			},
			{
				wing: 9,
				name: 'Sakit güc',
				description:
					'8w9 tipində Siz daha sakit, təmkinli və sabitsiniz. Gücünüzü səs-küysüz, lakin qətiyyətlə göstərir, ətrafınızdakılara dayaq olursunuz. Uzun müddət səbir edə bilərsiniz, amma sərhədləriniz pozulanda reaksiyanız çox güclü olur.',
			},
		],
	},

	9: {
		type: 9,
		name: 'Sülhpərvər',
		tagline: 'Sakit, anlayışlı və ətrafında harmoniya yaradan insan.',
		coreDesire: 'Daxili sakitlik və harmoniya, ətrafda barışıq mühit.',
		coreFear: 'Münaqişə, ayrılıq və yaxın insanlarla əlaqənin qırılması.',
		summary:
			'Siz sakit, dözümlü və insanlara qarşı anlayışlı birisiniz. Müxtəlif baxış bucaqlarını asanlıqla görür, insanlar arasında körpü olmağı bacarırsınız. Harmoniya Sizin üçün çox vacibdir, buna görə münaqişədən qaçır və çox vaxt başqalarının istəklərinə uyğunlaşırsınız. Lakin bu zaman öz istəklərinizi və prioritetlərinizi unuda bilərsiniz. Ən yaxşı halınızda həm özünüzə, həm də ətrafınıza dərin sakitlik və birlik gətirən güclü bir insansınız.',
		strengths: [
			'Sakitlik və təmkin',
			'Müxtəlif fikirləri anlamaq bacarığı',
			'Vasitəçilik və tərəfləri uzlaşdırmaq',
			'Səbir və dözümlülük',
			'İnsanları mühakimə etmədən qəbul etmək',
			'Komandada sabitlik yaratmaq',
		],
		blindSpots: [
			'Münaqişədən qaçmaq üçün öz fikrini gizlətmək',
			'Vacib işləri təxirə salmaq',
			'Öz istəklərini və prioritetlərini unutmaq',
			'Narazılığı açıq demək əvəzinə səssiz inadkarlıq göstərmək',
			'Dəyişikliyə qarşı passiv müqavimət',
		],
		communication:
			'Siz sakit, mülayim və dinləməyə üstünlük verən həmsöhbətsiniz. İnsanlar Sizinlə danışanda özlərini rahat və qəbul edilmiş hiss edirlər. Lakin fikriniz başqalarınınkından fərqli olanda onu deməkdən çox vaxt çəkinirsiniz. "Fərqi yoxdur" və "necə istəyirsiniz" ifadələri söhbətlərinizdə tez-tez səslənə bilər.',
		communicationTips: [
			'Fikriniz soruşulanda "fərqi yoxdur" əvəzinə ən azı bir seçiminizi deyin.',
			'Narazılığınızı yığmayın, onu hələ kiçik ikən sakit şəkildə bildirin.',
			'Fərqli fikir söyləməyin münasibəti pozmadığını xatırlayın.',
			'Uzun izahlarda əsas fikrinizi əvvəlcə qısa şəkildə deyin.',
		],
		career:
			'Siz sabit, əməkdaşlığa əsaslanan və gərginliyi az olan mühitlərdə ən yaxşı nəticəni göstərirsiniz. İnsanları dinləmək, fərqli tərəfləri uzlaşdırmaq və komandada balans yaratmaq bacarığınız çox dəyərlidir. Aydın prioritetlər və strukturlu tapşırıqlar Sizə fokuslanmağa kömək edir. Daimi rəqabət və münaqişə olan işlər isə Sizi tez yorur.',
		careers: [
			'Mediator',
			'Diplomat',
			'Psixoloji məsləhətçi',
			'Müəllim',
			'Kitabxanaçı',
			'Landşaft dizayneri',
			'Baytar',
			'Müştəri dəstəyi mütəxəssisi',
			'İnsan resursları üzrə əlaqələndirici',
			'Sosial layihələr koordinatoru',
		],
		workStyle:
			'Komandada Siz sakitləşdirici, birləşdirici və hamını dinləyən birisiniz. Gərginlik yarananda tərəfləri uzlaşdırmağa və ortaq məxrəc tapmağa çalışırsınız. Prioritetləri aydın müəyyən etmək və öz töhfənizi açıq göstərmək Sizin üçün inkişaf sahəsidir.',
		relationships:
			'Münasibətlərdə Siz rahat, qəbul edən və sabit partnyorsunuz. Yaxınlarınızın istəklərinə asanlıqla uyğunlaşır, mübahisə yaratmamağa çalışırsınız. Lakin öz ehtiyaclarınızı demədikdə içinizdə səssiz narazılıq yığıla bilər. Öz istəklərinizi açıq ifadə etdikcə münasibətləriniz daha canlı və bərabər olur.',
		stressDirection: 6,
		stress:
			'Stress altında Siz 6-cı tipin qeyri-sağlam xüsusiyyətlərinə yaxınlaşırsınız: narahat, şübhəli və tərəddüdlü olursunuz. Ən pis ssenariləri düşünməyə başlayır, başqalarından təsdiq və təminat gözləyirsiniz. Həmişəki sakitliyinizin yerini həyəcan və qərarsızlıq tutur.',
		growthDirection: 3,
		growth:
			'İnkişaf etdikcə Siz 3-cü tipin sağlam keyfiyyətlərini mənimsəyirsiniz: daha enerjili, məqsədyönlü və fəal olursunuz. Öz istəklərinizi tanıyır və onlara çatmaq üçün addım atırsınız. Öz dəyərinizi və bacarıqlarınızı göstərməkdən çəkinmirsiniz.',
		growthTips: [
			'Hər səhər günün ən vacib işini müəyyən edin və onu birinci yerinə yetirin.',
			'Gündəlik kiçik qərarlarda öz seçiminizi ilk olaraq deyin.',
			'Özünüzdən müntəzəm olaraq "Mən həqiqətən nə istəyirəm?" deyə soruşun və cavabı yazın.',
			'Münaqişəni münasibətin sonu deyil, onu aydınlaşdırmaq imkanı kimi görün.',
			'Diqqətinizi yayındıran rahat məşğuliyyətlərə (seriallar, sosial şəbəkələr) vaxt limiti qoyun.',
		],
		wings: [
			{
				wing: 8,
				name: 'Arbitr',
				description:
					'9w8 tipində Siz daha qətiyyətli, praktik və ayaqları yerə möhkəm basan birisiniz. Sakit olsanız da, lazım gələndə sərhədlərinizi qətiyyətlə qoruyursunuz. İnsanlar Sizi həm mehriban, həm də güclü biri kimi görürlər.',
			},
			{
				wing: 1,
				name: 'Xəyalpərəst',
				description:
					'9w1 tipində Siz daha idealist, prinsipial və nizamlısınız. Dünyanın daha ədalətli və harmonik olmasını arzulayır, öz dəyərlərinizə sadiq qalırsınız. Daxili tənqidçiniz güclü olduğu üçün narazılığınızı daha çox içinizdə saxlaya bilərsiniz.',
			},
		],
	},
}

export const ENNEA_CENTERS: EnneaCenter[] = [
	{
		id: 'gut',
		name: 'Bədən (instinkt) mərkəzi',
		types: [8, 9, 1],
		description:
			'Bu mərkəzin tipləri dünyanı ilk növbədə instinkt və bədən hissləri vasitəsilə qavrayır. Onların əsas mövzusu müstəqillik, nəzarət və şəxsi sərhədlər, əsas emosiyası isə hirsdir. 8-ci tip hirsini açıq ifadə edir, 9-cu tip onu görməzdən gəlir, 1-ci tip isə onu nizam-intizam və özünənəzarətlə cilovlayır.',
	},
	{
		id: 'heart',
		name: 'Ürək (hiss) mərkəzi',
		types: [2, 3, 4],
		description:
			'Bu mərkəzin tipləri dünyanı hisslər və münasibətlər vasitəsilə qavrayır. Onların əsas mövzusu kimlik, dəyər və başqalarının gözündə necə görünməkdir, əsas emosiyası isə utanc hissidir. 2-ci tip sevgi və qayğı ilə, 3-cü tip nailiyyətlərlə, 4-cü tip isə özünəməxsusluq axtarışı ilə bu hisslə başa çıxmağa çalışır.',
	},
	{
		id: 'head',
		name: 'Baş (düşüncə) mərkəzi',
		types: [5, 6, 7],
		description:
			'Bu mərkəzin tipləri dünyanı düşüncə, təhlil və planlaşdırma vasitəsilə qavrayır. Onların əsas mövzusu təhlükəsizlik və dəstəkdir, əsas emosiyası isə qorxu və narahatlıqdır. 5-ci tip bilik toplayıb geri çəkilərək, 6-cı tip etibarlı dayaq axtararaq, 7-ci tip isə yeni imkanlara yönələrək bu narahatlıqla başa çıxmağa çalışır.',
	},
]
