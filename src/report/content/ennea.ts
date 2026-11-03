// Extended Enneagram report texts (Azerbaijani). Plain data only.
// Adds to tests/enneagram/data.ts: levels of health, work, leadership, environment, triggers, plan.
import { EnneaExtra } from './types'

export const ENNEA_EXTRA: Record<number, EnneaExtra> = {
	1: {
		type: 1,
		healthy:
			'Ən yaxşı halınızda Siz yüksək standartlarınızı başqalarına məcburən qəbul etdirmir, onları şəxsi nümunə ilə göstərirsiniz. Səhvə yanaşmanız yumşalır: onu cəza üçün deyil, öyrənmək üçün fürsət kimi görürsünüz. Nə vaxt dəqiqlik, nə vaxt isə güzəşt lazım olduğunu müdrikcəsinə seçirsiniz. Ətrafınızdakılar Sizin yanınızda aydın və ədalətli qaydalarla işləməyin rahatlığını hiss edirlər.',
		average:
			'Gündəlik həyatda Siz işləri "olması lazım olduğu kimi" görmək üçün xeyli enerji sərf edirsiniz. Siyahılar, qaydalar və planlar günü idarə etməyə kömək edir, lakin plandan kənara çıxan hər xırda şey Sizi içdən qıcıqlandıra bilər. Başqalarının işini çox vaxt səssizcə yenidən yoxlayır, bəzən isə özünüz düzəldirsiniz. Gün sonunda nəyi bitirdiyinizdən çox, nəyin yarımçıq qaldığını xatırlamağa meyillisiniz.',
		unhealthy:
			'Gərginlik uzun sürəndə Sizin üçün "doğru" ilə "yanlış" arasındakı sərhəd daha da sərtləşir və boz zonalara yer qalmır. Kiçik uyğunsuzluqlar böyük narazılığa çevrilir, həmkarlarınızın və yaxınlarınızın hərəkətlərində daim nöqsan axtarmağa başlayırsınız. İstirahət Sizə vaxt itkisi kimi görünür və bu, yorğunluğu daha da artırır. Belə dövrlərdə fasilə vermək və vəziyyətə kənardan baxmaq xüsusilə vacibdir.',
		atWork:
			'İşdə Siz prosesin hər addımının məntiqli və şəffaf olmasını istəyirsiniz. Yeni sistemə keçid, daxili təlimatların hazırlanması və ya hesabatların yoxlanması kimi tapşırıqlarda komandanın ən etibarlı üzvü olursunuz. Məsələn, bankda və ya dövlət qurumunda yeni əməliyyat qaydası tətbiq olunanda boşluqları ilk görən çox vaxt Siz olursunuz. Diqqət etməli olduğunuz məqam budur: hər işə eyni dəqiqlik səviyyəsi lazım deyil, bəzən sürət mükəmməllikdən daha vacibdir.',
		asLeader:
			'Lider kimi Siz aydın standartlar, ədalətli qiymətləndirmə və sözə sadiqlik nümunəsi göstərirsiniz. Komandanız nə gözlənildiyini dəqiq bilir və bu, onlara etimad verir. Ən böyük inkişaf sahəniz insanlara öz üsullarını seçmək azadlığı tanımaq və nəticəni yalnız səhvlərlə deyil, irəliləyişlə ölçməkdir.',
		idealEnvironment:
			'Sizə keyfiyyət meyarlarının əvvəlcədən razılaşdırıldığı, qərarların əsaslandırıldığı və etik dəyərlərin real olaraq qorunduğu mühit uyğundur. İşi tələsmədən, düzgün tamamlamağa vaxt verilən komandalarda Siz ən yaxşı nəticəni göstərirsiniz.',
		triggers: [
			'Qaydaların bəzilərinə tətbiq olunub, bəzilərinə olunmaması',
			'Keyfiyyətə zərər verən tələsik son tarixlər',
			'Səliqəsiz təhvil verilmiş və yenidən görülməli olan işlər',
			'Əsassız və ya ədalətsiz tənqid',
		],
		developmentPlan: {
			d30: [
				'Hər gün sonunda yarımçıq işlərlə yanaşı bitirdiyiniz üç işi də yazın.',
				'Bir tapşırığı qəsdən "kifayət qədər yaxşı" səviyyədə təhvil verin və nəticəni müşahidə edin.',
				'Bir həftə ərzində başqasının işini yenidən yoxlamaq istəyinizi fərq edin və ən azı iki dəfə bundan imtina edin.',
			],
			d90: [
				'Komandada bir işi tam həvalə edin və yalnız son nəticəni yoxlayın.',
				'Rəy verərkən "müsbət məqam — təklif — müsbət məqam" strukturunu ardıcıl tətbiq edin.',
				'İşlərinizi əhəmiyyətinə görə üç səviyyəyə bölün və hər səviyyə üçün fərqli keyfiyyət həddi müəyyən edin.',
			],
			y1: [
				'Prinsiplərinizi yazılı şəkildə müəyyənləşdirin və hansılarının güzəştə açıq olduğunu ayırın.',
				'Proseslərin təkmilləşdirilməsi və ya keyfiyyət idarəetməsi üzrə peşəkar sertifikat proqramını nəzərdən keçirin.',
				'Bir gənc həmkara mentorluq edərək standartları əmr yolu ilə deyil, izah yolu ilə ötürməyi öyrənin.',
			],
		},
	},

	2: {
		type: 2,
		healthy:
			'Ən yaxşı halınızda Siz qayğı göstərməyi öhdəlik və ya təsdiq ehtiyacı kimi deyil, sərbəst seçim kimi edirsiniz. Başqalarının müstəqil olmasına sevinir, onların Sizdən asılı qalmasını gözləmirsiniz. Öz hədlərinizi bilir və onları sakitcə ifadə edirsiniz, buna görə də köməyiniz daha davamlı və səmimi olur. İnsanlar Sizin yanınızda həm dəstək, həm də hörmət hiss edirlər.',
		average:
			'Gündəlik həyatda Siz ətrafdakıların əhvalını daim izləyir, kimin nəyə ehtiyacı olduğunu yadda saxlayırsınız. Həmkarın ad günü, dostun imtahanı, qohumun həkim qəbulu — bunları çox vaxt ilk xatırlayan Siz olursunuz. Bununla belə, öz planlarınızı başqalarının xahişlərinə görə tez-tez dəyişirsiniz. Gün sonunda yorğun olsanız da, bunu çox vaxt heç kimə demirsiniz.',
		unhealthy:
			'Uzun müddət diqqət görmədiyinizi hiss edəndə köməyiniz daha israrlı və nəzarətçi xarakter ala bilər. "Mənsiz bacarmazlar" düşüncəsi güclənir, insanların öz qərarlarını təkbaşına verməsini qəbul etmək çətinləşir. Gizli inciklik toplanır və bəzən gözlənilməz emosional reaksiyalarla üzə çıxır. Belə dövrlərdə öz yorğunluğunuzu etiraf etmək və özünüzə qayğı göstərmək ən doğru addımdır.',
		atWork:
			'İşdə Siz komandanın "emosional radarı" rolunu oynayırsınız: kimin yükünün ağırlaşdığını, kimin narazı olduğunu tez sezirsiniz. Yeni işçilərin uyğunlaşması, müştəri münasibətlərinin qorunması və komanda tədbirlərinin təşkili kimi işlər Sizə təbii gəlir. Lakin bu "görünməz əmək" rəsmi tapşırıqlarınız sırasında qeyd olunmadıqda qiymətləndirilməyə bilər. Ona görə də töhfənizi konkret nəticələrlə göstərmək Sizin üçün vacibdir.',
		asLeader:
			'Lider kimi Siz insanların potensialını görən və onu inkişaf etdirməyə çalışan qayğıkeş rəhbərsiniz. Komanda üzvləri Sizə çətinliklərini rahatlıqla danışır, bu da güclü etimad mühiti yaradır. İnkişaf sahəniz çətin rəyləri təxirə salmamaq və hamını razı salmaqdansa ədalətli qərar verməkdir.',
		idealEnvironment:
			'Sizə insanlarla canlı təmasın olduğu, əməkdaşlığın təşviq edildiyi və təşəkkürün səmimi ifadə olunduğu mühit uyğundur. Rolların aydın bölündüyü yerdə Siz kömək ilə öz vəzifəniz arasında sağlam sərhəd qura bilirsiniz.',
		triggers: [
			'Göstərdiyiniz səyin görülməməsi və ya qiymətləndirilməməsi',
			'Soyuq, laqeyd və ya qısa cavablar',
			'Vacib qərarların Sizsiz qəbul edilməsi',
			'Eyni vaxtda çox insanın Sizdən kömək gözləməsi',
		],
		developmentPlan: {
			d30: [
				'Hər gün ən azı bir xahişə dərhal "hə" demək əvəzinə "baxım, sonra deyim" cavabı verin.',
				'Bir həftə ərzində göstərdiyiniz köməkləri və onlara sərf etdiyiniz vaxtı qeyd edin.',
				'Yaxın bir insandan kiçik bir məsələdə kömək istəyin və onu rahatlıqla qəbul edin.',
			],
			d90: [
				'İş vaxtınızın nə qədərinin öz tapşırıqlarınıza, nə qədərinin başqalarına getdiyini ölçüb balans hədəfi qoyun.',
				'Rəhbərinizlə görüşdə "görünməz" töhfələrinizi konkret nümunələrlə müzakirə edin.',
				'Bir layihədə dəstəkləyici deyil, aparıcı rolu öz üzərinizə götürün.',
			],
			y1: [
				'Kouçinq, mentorluq və ya fasilitasiya üzrə peşəkar təlim keçərək qayğı bacarığınızı strukturlu peşə bacarığına çevirin.',
				'Şəxsi sərhədlərinizi və dəyərlərinizi yazılı şəkildə müəyyən edin və ildə iki dəfə nəzərdən keçirin.',
				'Karyera hədəflərinizi başqalarının ehtiyaclarından ayrı, yalnız öz istəkləriniz əsasında planlaşdırın.',
			],
		},
	},

	3: {
		type: 3,
		healthy:
			'Ən yaxşı halınızda Siz uğuru başqalarının alqışı üçün deyil, öz dəyərlərinizə uyğun məqsədlər üçün qurursunuz. Səmimiyyətiniz cazibənizdən daha güclü təsir bağışlayır, insanlar Sizə imicinizə görə deyil, dürüstlüyünüzə görə güvənirlər. Başqalarının uğuruna da ürəkdən sevinir, onları irəli çəkməkdən zövq alırsınız. Bu halda enerjiniz tükənmir, çünki gördüyünüz iş Sizin üçün həqiqətən mənalıdır.',
		average:
			'Gündəlik həyatda Siz təqvim, hədəflər və nəticələr ətrafında yaşayırsınız. Hər görüşün, hər tapşırığın nə qazandıracağını düşünür, vaxtınızı səmərəli bölməyə çalışırsınız. Kənardan həmişə toplanmış və hazırlıqlı görünürsünüz, hətta daxilən yorğun olsanız belə. Boş qalan bir saat Sizə rahatlıqdan çox narahatlıq gətirə bilər.',
		unhealthy:
			'Gərginlik artanda Siz nəticəni qorumaq üçün öz ehtiyaclarınızı tamamilə kənara qoyur, fasiləsiz işləməyə başlayırsınız. Uğursuzluq ehtimalı yarananda vəziyyəti olduğundan daha yaxşı göstərmək və ya problemləri gizlətmək meyli arta bilər. Başqaları ilə rəqabət hissi əməkdaşlığı kölgədə qoyur. Belə dövrlərdə dayanıb "Bu tempin mənə və yaxınlarıma bədəli nədir?" sualını vermək çox dəyərlidir.',
		atWork:
			'İşdə Siz layihəni işə salan, aydın göstəricilər (KPI) qoyan və komandanı son tarixə doğru aparan mühərriksiniz. Müştəri təqdimatı, investor görüşü və ya yeni məhsulun bazara çıxarılması kimi görünən anlarda xüsusilə parlayırsınız. Bakının sürətlə inkişaf edən startap və marketinq mühitində bu bacarıqlar Sizə tez irəliləmək imkanı verir. Diqqət etməli olduğunuz məqam odur ki, sürət naminə komanda üzvlərinin fikrini və rifahını gözdən qaçırmayasınız.',
		asLeader:
			'Lider kimi Siz ambisiyalı hədəflər qoyur və komandanı onlara inandırmağı bacarırsınız. Nəticələri ölçmək, uğurları qeyd etmək və tempi saxlamaq Sizin güclü tərəfinizdir. İnkişaf sahəniz komandada səhvləri açıq müzakirə etməyə imkan verən təhlükəsiz mühit yaratmaq və öz şübhələrinizi də bölüşməkdir.',
		idealEnvironment:
			'Sizə nəticələrin şəffaf ölçüldüyü, irəliləmə yolunun aydın olduğu və təşəbbüsün vaxtında qiymətləndirildiyi mühit uyğundur. Eyni zamanda, təşkilatın missiyası şəxsi dəyərlərinizlə üst-üstə düşəndə motivasiyanız daha davamlı olur.',
		triggers: [
			'Səylərinizin görünməz qalması və ya başqasına aid edilməsi',
			'Nəticəsi aydın olmayan uzun müzakirələr',
			'İctimai yerdə uğursuzluq və ya tənqid',
			'İrəliləyişin qeyri-müəyyən müddətə dayanması',
		],
		developmentPlan: {
			d30: [
				'Hər gün 10 dəqiqə telefonsuz qalıb "İndi nə hiss edirəm?" sualına yazılı cavab verin.',
				'Bir həftə ərzində hər görüşdə həll təklif etməzdən əvvəl ən azı bir aydınlaşdırıcı sual verin.',
				'Təqviminizdə gündə ən azı bir saatı heç bir görüş və tapşırıq olmadan boş saxlayın.',
			],
			d90: [
				'Etibar etdiyiniz bir həmkarla yaşadığınız bir uğursuzluğu və ondan çıxardığınız dərsi bölüşün.',
				'Komanda uğurlarını fərdi uğurlardan ayrı qeyd edən həftəlik ənənə qurun.',
				'Hazırkı hədəflərinizi yoxlayın və hansılarının şəxsi dəyərlərinizdən, hansılarının kənar gözləntilərdən gəldiyini ayırın.',
			],
			y1: [
				'Karyeranız üçün yalnız vəzifə deyil, məna və təsir hədəfi də daxil olan bir illik plan qurun.',
				'Liderlik və ya emosional intellekt üzrə inkişaf proqramında iştirak edin.',
				'Bir layihədə şəxsi tanınma gözləmədən, arxa planda çalışaraq başqasını ön plana çıxarın.',
			],
		},
	},

	4: {
		type: 4,
		healthy:
			'Ən yaxşı halınızda Siz hisslərinizin dərinliyini yaradıcı və faydalı işə çevirirsiniz. Özünüzü başqaları ilə müqayisə etmək əvəzinə öz yolunuzun dəyərini qəbul edirsiniz. Həm kədər, həm də sevinc Sizin üçün tam yaşanan təcrübələrdir və bu, başqalarına da öz hisslərini qəbul etməyə ilham verir. Bu mərhələdə ilham gözləmədən işləyir, ideyalarınızı ardıcıl şəkildə nəticəyə çatdırırsınız.',
		average:
			'Gündəlik həyatda Siz mühitin estetikasına, insanların tonuna və kiçik detallara çox həssassınız. Musiqi, iş masanızın görünüşü, hətta e-poçtun üslubu belə əhvalınıza təsir edir. Bəzi günlər ilhamla dolu, bəzi günlər isə ağır keçir və məhsuldarlığınız buna uyğun dəyişir. İçinizdə tez-tez "hər şey başqa cür də ola bilərdi" düşüncəsi yaşayır.',
		unhealthy:
			'Gərginlik uzun sürəndə Siz daxili dünyanıza çəkilir, ətrafdakıların Sizi anlamadığına daha çox inanırsınız. Gündəlik öhdəliklər mənasız görünməyə başlayır və onları təxirə salırsınız. Başqalarının uğurları Sizə öz əskikliyinizi xatırladır, bu da müqayisəni gücləndirir. Belə vaxtlarda sadə rutinə qayıtmaq, fiziki fəallıq və etibarlı bir insanla söhbət vəziyyəti yüngülləşdirir.',
		atWork:
			'İşdə Siz layihəyə xarakter və ruh qatan insansınız: brendin səsi, təqdimatın hekayəsi, məhsulun istifadəçi təcrübəsi Sizin əlinizdə canlanır. Hamının eyni cür düşündüyü müzakirələrdə fərqli sual verərək komandanı yeni bucağa yönəldirsiniz. Lakin rəy prosesi Sizə şəxsi qiymətləndirmə kimi gələ bilər. Rəyi əvvəlcədən razılaşdırılmış meyarlar üzrə almaq bu gərginliyi xeyli azaldır.',
		asLeader:
			'Lider kimi Siz komandada fərdiliyə hörmət edən və hər kəsin öz səsini tapmasına kömək edən rəhbərsiniz. Vizyon və məna yaratmaqda güclüsünüz, insanlar işlərinin nəyə xidmət etdiyini Sizinlə daha aydın görürlər. İnkişaf sahəniz əhvaldan asılı olmayan sabit iş ritmi və aydın qərar prosesi qurmaqdır.',
		idealEnvironment:
			'Sizə orijinal ideyalara açıq, estetik keyfiyyətə dəyər verən və fərqli olmağı cəzalandırmayan mühit uyğundur. Dərin fokus üçün sakit vaxt və işin nəticəsində öz imzanızı görmək imkanı motivasiyanızı qoruyur.',
		triggers: [
			'Fikirlərinizin səthi və ya tələsik dəyərləndirilməsi',
			'Şablon və mexaniki tapşırıqların uzun müddət davam etməsi',
			'Kollektivdə kənarda qaldığınızı hiss etmək',
			'Səmimiyyətsizlik və ya "rol oynamaq" tələb edən vəziyyətlər',
		],
		developmentPlan: {
			d30: [
				'Hər gün eyni saatda ən azı 45 dəqiqəlik yaradıcı işə başlayın — əhvalınızdan asılı olmayaraq.',
				'Bir layihə üçün rəy almazdan əvvəl qiymətləndirmə meyarlarını yazılı şəkildə razılaşdırın.',
				'Hər gün etdiyiniz bir adi işi (yazışma, sənəd, səliqə) diqqətlə və tələsmədən görün, onda gözəllik tapmağa çalışın.',
			],
			d90: [
				'Yarımçıq qalmış bir yaradıcı layihəni seçib onu kiçik mərhələlərlə tamamlayın.',
				'Ən yaxşı işlərinizdən ibarət onlayn portfolio hazırlayın və onu peşəkar şəbəkənizlə paylaşın.',
				'Rəy aldıqdan sonra cavab verməzdən əvvəl 24 saat gözləyin və rəyi konkret addımlara çevirin.',
			],
			y1: [
				'Dəyərlərinizlə üst-üstə düşən bir ixtisas istiqamətini seçib onda dərinləşin.',
				'İşlərinizi sərgi, festival, müsabiqə və ya ictimai təqdimatda geniş auditoriyaya göstərin.',
				'Ardıcıllıq tələb edən uzunmüddətli bir vərdiş (idman, xarici dil, musiqi aləti) qurun və onu bir il davam etdirin.',
			],
		},
	},

	5: {
		type: 5,
		healthy:
			'Ən yaxşı halınızda Siz biliklərinizi yalnız toplamır, onları cəsarətlə bölüşür və real problemlərin həllinə tətbiq edirsiniz. Dünyaya maraq və heyrətlə baxır, yeni sahələri açıq zehinlə öyrənirsiniz. Müstəqilliyinizi qorusanız da, insanlarla əlaqəni enerji itkisi kimi deyil, zənginlik kimi qəbul edirsiniz. Bu halda Sizin dərin anlayışınız komandaya və cəmiyyətə görünən fayda gətirir.',
		average:
			'Gündəlik həyatda Siz vaxtınızı və enerjinizi "büdcə" kimi idarə edirsiniz: hansı görüşə getmək, hansı söhbətə qoşulmaq barədə əvvəlcədən düşünürsünüz. Maraqlandığınız mövzuda saatlarla oxuya, video izləyə və ya qeydlər apara bilirsiniz. İnsanlarla münasibətdə nəzakətlisiniz, amma şəxsi mövzulara keçid Sizə vaxt aparır. Tək qaldığınız axşamlar Sizin üçün əsl dincəlmədir.',
		unhealthy:
			'Uzunmüddətli gərginlikdə Siz insanlardan və öhdəliklərdən daha çox uzaqlaşır, yalnız öz düşüncələrinizə qapanırsınız. Hazırlıq mərhələsi sonsuzlaşır, "hələ tam bilmirəm" hissi hərəkətə keçməyə mane olur. Yemək, yuxu və hərəkət kimi gündəlik ehtiyaclar arxa plana keçə bilər. Belə vaxtlarda kiçik praktiki addım atmaq və etibarlı bir insanla əlaqə saxlamaq balansı bərpa edir.',
		atWork:
			'İşdə Siz mürəkkəb sistemi başa düşən, kök səbəbi tapan və "yaxşı, bəs niyə?" sualına cavab verən ekspertsiniz. Texniki sənədlər hazırlamaq, data modelləri qurmaq və ya araşdırma aparmaq Sizə təbii gəlir. Azərbaycanın enerji, IT və bank sektorlarında belə dərin ekspertizaya tələbat yüksəkdir. Gözdən qaçırmamalı olduğunuz məqam budur: işinizin dəyəri yalnız onu başqalarına anlaşılan dildə çatdıranda tam görünür.',
		asLeader:
			'Lider kimi Siz qərarları əsaslandırılmış təhlilə söykəyən, sakit və obyektiv rəhbərsiniz. Komandanıza müstəqillik verir, xırda nəzarətdən (mikroidarəetmədən) uzaq durursunuz. İnkişaf sahəniz daha tez-tez ünsiyyət qurmaq, emosional dəstək göstərmək və qərarlarınızın səbəbini komandaya açıq izah etməkdir.',
		idealEnvironment:
			'Sizə dərin fokus üçün kəsintisiz vaxt verən, yazılı ünsiyyətə üstünlük verən və ekspertizaya hörmət edən mühit uyğundur. Görüşlərin gündəmi əvvəlcədən göndərildikdə və suallara düşünmək üçün vaxt verildikdə Siz ən yaxşı töhfəni verirsiniz.',
		triggers: [
			'Hazırlıqsız və dərhal cavab tələb olunan vəziyyətlər',
			'Şəxsi vaxtın və məkanın gözlənilmədən pozulması',
			'Səbəbi izah edilməyən qərarlar',
			'Səs-küylü, xaotik və daim kəsintiyə uğrayan iş mühiti',
		],
		developmentPlan: {
			d30: [
				'Hər həftə öyrəndiyiniz bir şeyi, hələ "tam hazır" olmasa da, bir həmkarla bölüşün.',
				'Hər görüşdə ən azı bir dəfə ilk təəssüratınızı səsli ifadə edin.',
				'Yeni bir mövzunu araşdırmaq üçün əvvəlcədən vaxt limiti qoyun və limit bitəndə qərar verin.',
			],
			d90: [
				'Bilikləriniz əsasında daxili təqdimat, məqalə və ya qısa təlim hazırlayıb keçirin.',
				'Komandadan iki nəfərlə müntəzəm qeyri-rəsmi söhbətlər (məsələn, birgə nahar) qurun.',
				'Bir layihədə analitik rolla yanaşı koordinasiya məsuliyyətini də öz üzərinizə götürün.',
			],
			y1: [
				'Ekspertiza sahənizdə konfransda çıxış edin və ya peşəkar icmada fəal iştirak edin.',
				'Texniki rolla yanaşı komanda və ya layihə rəhbərliyi təcrübəsi qazanın.',
				'Dərin biliyinizi praktik nəticəyə çevirən öz layihənizi (alət, tədqiqat, məhsul) başa çatdırın.',
			],
		},
	},

	6: {
		type: 6,
		healthy:
			'Ən yaxşı halınızda Siz narahatlığınızı hazırlığa, şübhənizi isə ağıllı suallara çevirirsiniz. Öz daxili səsinizə güvənir, qərar vermək üçün başqalarının təsdiqini gözləmirsiniz. Cəsarətiniz qorxunun olmamasından deyil, ona baxmayaraq düzgün addım atmaqdan yaranır. Belə vaxtlarda Siz komandaya həm sabitlik, həm də sakit özünəinam gətirirsiniz.',
		average:
			'Gündəlik həyatda Siz "B planı" olmadan nadir hallarda hərəkət edirsiniz: ehtiyat nüsxə, əlavə vaxt, alternativ yol həmişə ağlınızdadır. Yeni insanlara və yeni qaydalara qarşı əvvəlcə ehtiyatlı olur, onları müşahidə edərək qiymətləndirirsiniz. Qərar verməzdən əvvəl bir neçə etibarlı insanla məsləhətləşməyi sevirsiniz. Etibarınızı qazanan komanda və ya qurum üçün isə əlinizdən gələni əsirgəmirsiniz.',
		unhealthy:
			'Uzun sürən qeyri-müəyyənlikdə zehniniz mümkün təhlükələri durmadan ölçüb-biçir və bu, enerjinizi tükəndirir. Kiçik siqnalları böyük problemin əlaməti kimi yozmağa, başqalarının niyyətinə daha çox şübhə ilə yanaşmağa başlaya bilərsiniz. Bəzən həddən artıq ehtiyatlılıq, bəzən isə gözlənilməz kəskin reaksiya müşahidə olunur. Belə vaxtlarda faktlarla ehtimalları yazılı şəkildə ayırmaq və etibarlı insanla danışmaq çox kömək edir.',
		atWork:
			'İşdə Siz layihə başlamazdan əvvəl "Nə səhv gedə bilər?" sualını verən və bununla komandanı böyük itkilərdən qoruyan insansınız. Risk siyahısı tərtib etmək, prosedurları yoxlamaq və planın zəif nöqtələrini tapmaq Sizin güclü tərəfinizdir. Komandaya sadiqliyiniz Sizi çətin dövrlərdə də yerində qalan əməkdaşa çevirir. İnkişaf etdirməli olduğunuz bacarıq isə hər riskə eyni ağırlıq verməmək, onları ehtimal və təsir dərəcəsinə görə sıralamaqdır.',
		asLeader:
			'Lider kimi Siz komandasını qoruyan, ədalətli və sözünə sadiq rəhbərsiniz. İnsanlar Sizin yanınızda sabitlik və təhlükəsizlik hiss edir, çünki planlarınız müxtəlif ehtimallara hesablanıb. İnkişaf sahəniz qeyri-müəyyən şəraitdə də vaxtında qərar vermək və komandaya öz şübhələrinizdən çox aydın istiqamət ötürməkdir.',
		idealEnvironment:
			'Sizə rolların və gözləntilərin aydın olduğu, rəhbərliyin şəffaf danışdığı və komanda üzvlərinin bir-birinə arxa çıxdığı mühit uyğundur. Dəyişikliklərin əvvəlcədən elan olunduğu və səbəbinin izah edildiyi təşkilatlarda Siz ən sadiq və məhsuldar əməkdaş olursunuz.',
		triggers: [
			'Səbəbi izah edilmədən verilən qəfil qərarlar',
			'Rəhbərlikdə gizli gündəm və ya ikili standartlar hiss etmək',
			'Uzun müddət davam edən qeyri-müəyyənlik və ziddiyyətli məlumat',
			'Etibar etdiyiniz insanın sözünü tutmaması',
		],
		developmentPlan: {
			d30: [
				'Narahat düşüncələri gündə bir dəfə 15 dəqiqəlik ayrıca vaxtda yazıya köçürün və qalan vaxt onlara qayıtmayın.',
				'Bir həftə ərzində kiçik qərarları heç kimlə məsləhətləşmədən verin və nəticələrini qeyd edin.',
				'Hər axşam narahat olduğunuz bir məsələnin real nəticəsini yoxlayın: gözlədiyiniz pis ssenari baş verdimi?',
			],
			d90: [
				'Risk siyahılarınızı "ehtimal və təsir" cədvəli ilə prioritetləşdirməyi öyrənin və tətbiq edin.',
				'Komandada bir qərarı başdan sona özünüz aparın və məsuliyyətini açıq şəkildə götürün.',
				'İş yerində etibar etdiyiniz bir mentorla aylıq görüş qurun və qərarlarınızı birlikdə təhlil edin.',
			],
			y1: [
				'Risk idarəetməsi, layihə idarəetməsi və ya informasiya təhlükəsizliyi üzrə peşəkar sertifikat əldə edin.',
				'Rahatlıq zonanızdan kənar bir addım atın: yeni rol, başqa şəhərdə layihə və ya ictimai çıxış.',
				'Öz dəyərlərinizə əsaslanan qərar meyarlarınızı yazın ki, kənar təsdiqə ehtiyac azalsın.',
			],
		},
	},

	7: {
		type: 7,
		healthy:
			'Ən yaxşı halınızda Siz həyatın təkcə parlaq anlarından deyil, sadə və sakit anlarından da dərin zövq alırsınız. Bir işə tam fokuslanır və onu sona çatdırmağın verdiyi məmnunluğu yaşayırsınız. Optimizminiz problemləri görməzdən gəlmək deyil, onların içində də imkan tapmaq bacarığına çevrilir. Bu halda minnətdarlıq hissi Sizi daim daha çoxunu axtarmaqdan azad edir.',
		average:
			'Gündəlik həyatda Siz təqviminizi doldurmağı, eyni vaxtda bir neçə layihə ilə maraqlanmağı və həftəsonu üçün planlar qurmağı sevirsiniz. Brauzerinizdə çoxlu açıq səhifə, ağlınızda isə növbəti səyahət ideyası olur. Darıxdırıcı tapşırıqları sona saxlayır, onları maraqlı hala salmağın yolunu axtarırsınız. Kiminsə "bir az sakit dayan" deməsi Sizə gülməli gələ bilər.',
		unhealthy:
			'Gərginlik artanda Siz narahat hissləri yeni planlar, alış-veriş, səyahət və ya məşğuliyyətlərlə boğmağa çalışırsınız. Öhdəliklər çoxalır, amma onların az hissəsi tamamlanır. Məhdudiyyətlər və tənqid daha kəskin qəbul olunur, səbirsizlik artır. Belə vaxtlarda dayanmaq, bir işi seçib onu bitirmək və hisslərinizlə üz-üzə qalmaq ən faydalı addımdır.',
		atWork:
			'İşdə Siz beyin həmləsinin ən məhsuldar iştirakçısı, yeni istiqamətlər açan və komandaya enerji gətirən insansınız. Fərqli sahələrdən ideyaları birləşdirərək — məsələn, turizmi rəqəmsal texnologiya ilə — orijinal məhsul konsepsiyaları yarada bilirsiniz. Müştərilər və tərəfdaşlarla tez ünsiyyət qurmağınız biznesin inkişafı üçün böyük üstünlükdür. Sizin üçün ən dəyərli vərdiş isə hər layihədə "bitmə meyarını" əvvəlcədən yazmaq və ona çatmayınca yeni işə keçməməkdir.',
		asLeader:
			'Lider kimi Siz komandaya vizyon, ruh yüksəkliyi və cəsarətli hədəflər verən ilhamverici rəhbərsiniz. Yeni imkanları tez görür və komandanı dəyişikliyə rahatlıqla uyğunlaşdırırsınız. İnkişaf sahəniz prioritetləri sabit saxlamaq, çətin söhbətlərdən qaçmamaq və komandanı çoxlu paralel təşəbbüslə yükləməməkdir.',
		idealEnvironment:
			'Sizə müxtəlif tapşırıqlar, yeni insanlarla tanışlıq və təşəbbüs üçün sərbəstlik verən dinamik mühit uyğundur. Aydın, lakin çevik çərçivə — məsələn, qısa iş mərhələləri (sprintlər) və tez-tez görünən nəticələr — Sizə həm maraqlı qalmağa, həm də işi bitirməyə kömək edir.',
		triggers: [
			'Uzun müddət eyni və təkrarlanan işlə məşğul olmaq',
			'Seçimlərin və ya sərbəstliyin məhdudlaşdırılması',
			'Ağır və emosional söhbətlərdə qalmaq məcburiyyəti',
			'Planların başqası tərəfindən son anda ləğv edilməsi',
		],
		developmentPlan: {
			d30: [
				'Hər həftəni üç əsas prioritetlə başlayın, yeni ideyaları isə ayrıca "sonraya" siyahısına yazın.',
				'Yeni öhdəlik götürməzdən əvvəl 24 saat gözləmə qaydası tətbiq edin.',
				'Aylıq vaxt və pul xərclərinizi izləyərək impulsiv qərarların nə qədər olduğunu müəyyən edin.',
			],
			d90: [
				'Ən uzun müddət yarımçıq qalmış bir layihəni tam başa çatdırın.',
				'Təxirə saldığınız çətin bir söhbəti sona qədər aparın və ondan sonra hisslərinizi qeyd edin.',
				'Komandada icra mərhələsinə ayrıca cavabdeh olaraq bir layihəni başlanğıcdan təhvilə qədər aparın.',
			],
			y1: [
				'Bir istiqamətdə dərin ekspertiza qurmağa imkan verən bir illik inkişaf yolu seçin.',
				'Uzunmüddətli bir layihəni (məsələn, öz biznes ideyanızı) planlaşdırma, icra və təhlil mərhələləri ilə başa vurun.',
				'Könüllü və ya sosial layihədə müntəzəm iştirak edərək uzunmüddətli öhdəliyə sadiqlik vərdişi qurun.',
			],
		},
	},

	8: {
		type: 8,
		healthy:
			'Ən yaxşı halınızda Siz gücünüzü nəzarət üçün deyil, başqalarını qorumaq və onlara imkan yaratmaq üçün istifadə edirsiniz. Həssas tərəflərinizi göstərməkdən çəkinmir, bunu daxili gücün əlaməti kimi qəbul edirsiniz. Qərarlarınız qətiyyətli, lakin ədalətli olur və başqalarının fikrinə yer qalır. Bu halda insanlar Sizi qorxu ilə deyil, hörmət və etimadla izləyirlər.',
		average:
			'Gündəlik həyatda Siz vəziyyəti tez qiymətləndirir və kimin nəyə cavabdeh olduğunu dərhal aydınlaşdırmaq istəyirsiniz. Enerjiniz yüksəkdir, işi böyük həcmdə və sürətlə görürsünüz. Dolayı danışıq və gecikən qərarlar Sizi tez səbirsizləşdirir. Yaxınlarınız üçün isə arxasında daldalana biləcəkləri möhkəm divar kimisiniz.',
		unhealthy:
			'Uzunmüddətli gərginlikdə Siz nəzarəti əldə saxlamaq üçün daha sərt və barışmaz olursunuz. Hər etirazı meydan oxuma kimi qəbul edir, münaqişələri lazım olduğundan artıq kəskinləşdirə bilərsiniz. Yorğunluğu və həddinizi etiraf etmək çətinləşir, buna görə də bədəniniz siqnal verənədək işləməyə davam edirsiniz. Belə dövrlərdə bir addım geri çəkilmək və etibarlı bir insana açılmaq güc əlamətidir.',
		atWork:
			'İşdə Siz böhran anlarında məsuliyyəti götürən, qərarsızlığı aradan qaldıran və işi irəli aparan insansınız. Tikinti obyektində gecikmə, satışda kəskin düşüş və ya tərəfdaşla gərgin danışıq — belə vəziyyətlərdə Sizin qətiyyətiniz komandaya istiqamət verir. Birbaşa danışmağınız problemlərin tez üzə çıxmasına kömək edir. Həmkarlarınızın fərqli tempi və üslubu ilə işləmək üçün səbir göstərmək isə nəticələrinizi daha da gücləndirəcək.',
		asLeader:
			'Lider kimi Siz böyük məsuliyyətdən çəkinməyən, komandanı kənar təzyiqdən qoruyan və ədalətsizliyə dözməyən rəhbərsiniz. İnsanlar Sizin nə istədiyinizi dəqiq bilir və bu, şəffaflıq yaradır. İnkişaf sahəniz komanda üzvlərinin Sizə açıq etiraz edə və səhvlərini qorxmadan deyə biləcəyi təhlükəsiz mühit yaratmaqdır.',
		idealEnvironment:
			'Sizə səlahiyyətin və məsuliyyətin üst-üstə düşdüyü, qərarların tez verildiyi və birbaşa ünsiyyətin normal sayıldığı mühit uyğundur. Real təsir göstərə biləcəyiniz, böyük və çətin hədəfləri olan layihələr Sizi ən çox ruhlandırır.',
		triggers: [
			'Arxadan oyun, gizli gündəm və ya dolayı manipulyasiya hiss etmək',
			'Səlahiyyət verilmədən məsuliyyət yüklənməsi',
			'Zəif tərəfə qarşı ədalətsizlik',
			'Xırda nəzarət və həddən artıq bürokratiya',
		],
		developmentPlan: {
			d30: [
				'Hər görüşdə öz fikrinizi deməzdən əvvəl ən azı iki nəfərin fikrini dinləyin.',
				'Kəskin reaksiya verdiyiniz anları və onlardan əvvəlki tətikləyiciləri qeyd edin.',
				'Bu ay yaxınlarınızdan biri ilə Sizi narahat edən bir məsələni açıq bölüşün.',
			],
			d90: [
				'Komandadan anonim rəy (360 dərəcə) toplayın və ən çox təkrarlanan bir mövzu üzərində işləyin.',
				'Bir layihənin idarəsini tam başqasına verib yalnız mentor rolunda qalın.',
				'Münaqişəli bir vəziyyətdə danışığa başlamazdan əvvəl qarşı tərəfin maraqlarını yazılı şəkildə ifadə edin.',
			],
			y1: [
				'Liderlik üzrə kouçinq proqramında iştirak edərək təsir üslubunuzu genişləndirin.',
				'Gücünüzü sosial məsuliyyət layihəsində, məsələn, gənclərə mentorluqda istifadə edin.',
				'Enerjinizi bərpa edən sabit idman və istirahət rejimi qurun və onu ən gərgin dövrlərdə də qoruyun.',
			],
		},
	},

	9: {
		type: 9,
		healthy:
			'Ən yaxşı halınızda Siz həm başqalarını, həm də özünüzü eyni dərəcədə ciddi qəbul edirsiniz. Sakitliyiniz passivlikdən deyil, daxili sabitlikdən gəlir və fikir ayrılığı olanda da öz mövqeyinizi rahatlıqla deyə bilirsiniz. Prioritetlərinizi aydın bilir və enerjinizi vacib olana yönəldirsiniz. Belə vaxtlarda Sizin varlığınız qrupları birləşdirən, gərginliyi yumşaldan real gücə çevrilir.',
		average:
			'Gündəlik həyatda Siz tanış rejimə, rahat vərdişlərə və sakit ab-havaya üstünlük verirsiniz. Başqalarının planlarına asanlıqla qoşulur, mübahisə yarada biləcək məsələləri sonraya saxlayırsınız. Vacib bir işlə kiçik işlər arasında seçim olanda kiçik və asan olanlar daha cəlbedici görünə bilər. Kənardan çox rahat görünsəniz də, içinizdə deyilməmiş fikirlər yığılır.',
		unhealthy:
			'Uzunmüddətli gərginlikdə Siz problemlərdən uzaqlaşmaq üçün daha çox "avtopilot" rejiminə keçirsiniz. Vaxtınız rahat, amma mənası az olan məşğuliyyətlərə gedir, vacib qərarlar isə gözləyir. Narazılığınızı açıq deməsəniz də, səssiz müqavimət və gecikmələrlə büruzə verə bilərsiniz. Belə vaxtlarda kiçik, konkret bir addımla başlamaq və öz istəyinizi səsli ifadə etmək enerjinizi geri qaytarır.',
		atWork:
			'İşdə Siz müxtəlif şöbələr və fərqli fikirli insanlar arasında körpü quran, gərgin iclasları sakitləşdirən insansınız. Müştəri ilə uzunmüddətli münasibət, komandalar arası koordinasiya və birgə qərar tələb edən layihələrdə xüsusilə dəyərlisiniz. Sabit və ardıcıl iş tempiniz komandaya etibarlılıq verir. Sizin üçün ən faydalı vərdiş isə hər həftənin əvvəlində öz prioritetlərinizi yazmaq və başqalarının xahişlərini onlarla müqayisə etməkdir.',
		asLeader:
			'Lider kimi Siz hamını dinləyən, inklüziv və sakit rəhbərsiniz, insanlar Sizin yanınızda özlərini eşidilmiş hiss edirlər. Konsensus qurmaq və müxtəlif maraqları uzlaşdırmaq Sizin təbii üstünlüyünüzdür. İnkişaf sahəniz konsensus olmayanda da qərar vermək və komandaya aydın, qətiyyətli istiqamət göstərməkdir.',
		idealEnvironment:
			'Sizə dostyana münasibətlərin, aydın prioritetlərin və proqnozlaşdırıla bilən iş ritminin olduğu mühit uyğundur. Komandanın səmimi əməkdaşlıq etdiyi və hər kəsin töhfəsinin görüldüyü yerlərdə Siz həm sakit, həm də məhsuldar olursunuz.',
		triggers: [
			'Açıq qarşıdurma və səs-küylü mübahisələr',
			'Eyni anda bir neçə tərəfin ziddiyyətli tələb qoyması',
			'Təzyiq altında tələsik qərar vermək məcburiyyəti',
			'Fikrinizin nəzərə alınmaması və ya kənarda qalmaq',
		],
		developmentPlan: {
			d30: [
				'Hər gün sonunda bu gün nəyi başqaları üçün deyil, özünüz istədiyiniz üçün etdiyinizi bir cümlə ilə yazın.',
				'Bu ay təxirə saldığınız bir kiçik narazılığı sakit tonda müvafiq insana çatdırın.',
				'Hər iş günü 30 dəqiqəlik bildirişsiz "fokus bloku" planlaşdırın və orada yalnız öz tapşırığınızla məşğul olun.',
			],
			d90: [
				'Bir layihədə məsuliyyəti açıq şəkildə öz adınıza götürün və nəticəni özünüz təqdim edin.',
				'Həftəlik iş hesabatında öz töhfənizi konkret rəqəm və nəticələrlə qeyd edin.',
				'Enerjinizi artıran müntəzəm fiziki fəaliyyətə (idman, rəqs, yürüş) başlayın.',
			],
			y1: [
				'Şəxsi karyera hədəfinizi yazın və onu başqalarının gözləntilərindən ayrı müəyyənləşdirin.',
				'Mediasiya, fasilitasiya və ya danışıqlar üzrə təlim keçərək uzlaşdırma bacarığınızı peşəkar səviyyəyə qaldırın.',
				'Rahatlıq zonanızdan kənar, irəliləyiş tələb edən bir rola və ya vəzifəyə müraciət edin.',
			],
		},
	},
}
