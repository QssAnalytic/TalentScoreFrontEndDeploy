// RIASEC (Holland) career-interest test content (Azerbaijani). Plain data only.
// 48 original activities (8 per type), interleaved by type: R, I, A, S, E, C, R, I, …
import { RiasecQuestion, RiasecType, RiasecTypeProfile } from 'tests/types'

export const RIASEC_QUESTIONS: RiasecQuestion[] = [
	// ---- round 1 ----
	{ id: 'r01', type: 'R', text: 'Mebel yığmaq' },
	{ id: 'r02', type: 'I', text: 'Laboratoriyada təcrübə aparmaq' },
	{ id: 'r03', type: 'A', text: 'Qısa film çəkmək' },
	{ id: 'r04', type: 'S', text: 'Yeni gələn tələbələrə yol göstərmək' },
	{ id: 'r05', type: 'E', text: 'Kiçik biznes açmaq' },
	{ id: 'r06', type: 'C', text: 'Anbarın uçotunu aparmaq' },
	// ---- round 2 ----
	{ id: 'r07', type: 'R', text: 'Velosiped və ya elektrik skuterini təmir etmək' },
	{ id: 'r08', type: 'I', text: 'Xəstəliklərin yaranma səbəblərini araşdırmaq' },
	{ id: 'r09', type: 'A', text: 'Mahnı bəstələmək' },
	{ id: 'r10', type: 'S', text: 'Məktəblilərə dərs hazırlığında kömək etmək' },
	{ id: 'r11', type: 'E', text: 'Yeni məhsulu müştərilərə təqdim edib satmaq' },
	{ id: 'r12', type: 'C', text: 'Elektron cədvəldə məlumatları səliqəyə salmaq' },
	// ---- round 3 ----
	{ id: 'r13', type: 'R', text: 'Evdə ağıllı cihazları quraşdırıb bir-birinə qoşmaq' },
	{ id: 'r14', type: 'I', text: 'Böyük məlumat toplusunda gizli qanunauyğunluqları tapmaq' },
	{ id: 'r15', type: 'A', text: 'Mobil tətbiq üçün interfeys dizayn etmək' },
	{ id: 'r16', type: 'S', text: 'Çətin gün keçirən birini dinləyib dəstək olmaq' },
	{ id: 'r17', type: 'E', text: 'Layihə komandasına rəhbərlik etmək' },
	{ id: 'r18', type: 'C', text: 'Ailə və ya şirkət büdcəsini planlaşdırmaq' },
	// ---- round 4 ----
	{ id: 'r19', type: 'R', text: 'Dron idarə etmək' },
	{ id: 'r20', type: 'I', text: 'Çətin riyazi məsələnin həll yolunu axtarmaq' },
	{ id: 'r21', type: 'A', text: 'Hekayə və ya ssenari yazmaq' },
	{ id: 'r22', type: 'S', text: 'Xəstəyə qayğı göstərmək' },
	{ id: 'r23', type: 'E', text: 'Tərəfdaşlarla müqavilə şərtlərini danışıqla razılaşdırmaq' },
	{ id: 'r24', type: 'C', text: 'Sənədləri arxivdə sistemli şəkildə qaydaya salmaq' },
	// ---- round 5 ----
	{ id: 'r25', type: 'R', text: 'Bağda meyvə ağacları əkib onlara qulluq etmək' },
	{ id: 'r26', type: 'I', text: 'Süni intellekt modelinin necə işlədiyini öyrənmək' },
	{ id: 'r27', type: 'A', text: 'Səhnədə tamaşada rol oynamaq' },
	{ id: 'r28', type: 'S', text: 'Xeyriyyə aksiyasında könüllü olmaq' },
	{ id: 'r29', type: 'E', text: 'Onlayn mağazanın satışını artırmaq üçün reklam kampaniyası qurmaq' },
	{ id: 'r30', type: 'C', text: 'Verilənlər bazasındakı səhvləri yoxlayıb düzəltmək' },
	// ---- round 6 ----
	{ id: 'r31', type: 'R', text: 'Kompüterin hissələrini dəyişib yenidən yığmaq' },
	{ id: 'r32', type: 'I', text: 'Teleskopla ulduzları və planetləri müşahidə etmək' },
	{ id: 'r33', type: 'A', text: 'Şəhər divarına böyük rəsm (mural) çəkmək' },
	{ id: 'r34', type: 'S', text: 'Yaşlılara smartfondan istifadə etməyi öyrətmək' },
	{ id: 'r35', type: 'E', text: 'Startap ideyasını investorlara təqdim etmək' },
	{ id: 'r36', type: 'C', text: 'Böyük tədbirin dəqiq iş qrafikini tərtib etmək' },
	// ---- round 7 ----
	{ id: 'r37', type: 'R', text: 'Avtomobildə nasazlığı tapıb aradan qaldırmaq' },
	{ id: 'r38', type: 'I', text: 'Elmi məqalələri oxuyub nəticələrini müqayisə etmək' },
	{ id: 'r39', type: 'A', text: 'Yeni brend üçün loqo hazırlamaq' },
	{ id: 'r40', type: 'S', text: 'İnsanlar arasındakı mübahisəni sakitcə yoluna qoymaq' },
	{ id: 'r41', type: 'E', text: 'Tələbə təşkilatına sədr olmaq üçün namizədliyini irəli sürmək' },
	{ id: 'r42', type: 'C', text: 'Hesab-fakturaları diqqətlə yoxlamaq' },
	// ---- round 8 ----
	{ id: 'r43', type: 'R', text: 'Evin damında günəş panelləri quraşdırmaq' },
	{ id: 'r44', type: 'I', text: 'Xəzər dənizinin ekoloji vəziyyətini tədqiq etmək' },
	{ id: 'r45', type: 'A', text: 'Xalça naxışlarından ilhamlanaraq müasir geyim dizayn etmək' },
	{ id: 'r46', type: 'S', text: 'Onlayn dərslə insanlara yeni bacarıq öyrətmək' },
	{ id: 'r47', type: 'E', text: 'Böyük tədbir üçün sponsor cəlb etmək' },
	{ id: 'r48', type: 'C', text: 'Sifarişlərin vaxtında çatdırılmasını izləmək' },
]

export const RIASEC_TYPES: Record<RiasecType, RiasecTypeProfile> = {
	R: {
		id: 'R',
		name: 'Realist',
		short: 'Əllə, alətlə və texnika ilə real nəticə yaratmağı sevən praktik insan.',
		description:
			'Sən nəticəsi gözlə görünən, toxunula bilən işlərdən zövq alırsan. Alətlər, maşınlar, cihazlar və təbiətlə işləmək sənə uzun müzakirələrdən daha mənalı gəlir. Problemi nəzəriyyə ilə yox, praktik yolla — sınayaraq, quraraq, təmir edərək həll etməyi üstün tutursan. Etibarlılığın və işin öhdəsindən gəlmə bacarığın ətrafındakılar üçün böyük dəyərdir.',
		workEnvironment:
			'Sənə emalatxana, laboratoriya, tikinti sahəsi, açıq hava və ya texniki avadanlıqla dolu məkan kimi fiziki fəaliyyətə imkan verən mühit uyğundur. Tapşırıqların aydın, nəticənin isə ölçülə bilən olduğu, uzun iclasların az olduğu yerlərdə özünü ən yaxşı hiss edirsən.',
		strengths: [
			'Praktik düşüncə və əl bacarığı',
			'Texnika və alətlərlə inamlı işləmə',
			'Problemi yerindəcə tez həll etmə',
			'Dözümlülük və fiziki aktivlik',
			'Etibarlılıq və sözə əməl etmə',
		],
		careers: [
			'Mexatronika mühəndisi',
			'Elektrik mühəndisi',
			'Elektromobil texniki',
			'Dron operatoru',
			'Bərpa olunan enerji sistemləri texniki',
			'İnşaat mühəndisi',
			'Aqronom',
			'Kompüter avadanlığı və şəbəkə texniki',
			'Neft-qaz mühəndisi',
			'Aşpaz',
		],
		majors: [
			'Mexanika mühəndisliyi',
			'Elektrik mühəndisliyi',
			'Mexatronika və robototexnika mühəndisliyi',
			'İnşaat mühəndisliyi',
			'Neft-qaz mühəndisliyi',
			'Aqronomluq',
		],
	},
	I: {
		id: 'I',
		name: 'Tədqiqatçı',
		short: 'Suallara cavab axtaran, faktları və ideyaları təhlil etməyi sevən analitik insan.',
		description:
			'Sən "niyə?" və "necə?" suallarından ilham alırsan. Bir hadisənin arxasındakı səbəbi tapmaq, məlumatları təhlil etmək və mürəkkəb problemi addım-addım çözmək sənə xüsusi zövq verir. Qərar verməzdən əvvəl faktları yoxlamağı, fərziyyələri sınaqdan keçirməyi üstün tutursan. Müstəqil düşünmək və dərin bilik toplamaq sənin əsas gücündür.',
		workEnvironment:
			'Sənə sakit düşünmək, araşdırmaq və yeni şeylər öyrənmək üçün vaxt verən mühit uyğundur — laboratoriya, tədqiqat mərkəzi, analitika komandası və ya texnoloji şirkət. Müstəqil işləyə bildiyin, ideyaların məntiq və sübutla qiymətləndirildiyi yerlərdə ən yaxşı nəticəni göstərirsən.',
		strengths: [
			'Analitik və tənqidi düşüncə',
			'Mürəkkəb məlumatı sistemləşdirmə',
			'Maraq və öyrənmə həvəsi',
			'Dəqiqlik və sübuta əsaslanma',
			'Müstəqil işləmə bacarığı',
		],
		careers: [
			'Məlumat analitiki',
			'Süni intellekt mühəndisi',
			'Həkim',
			'Biotexnoloq',
			'Kibertəhlükəsizlik analitiki',
			'Kimyaçı',
			'Ekoloq',
			'İqtisadi tədqiqatçı',
			'Əczaçı',
			'Geoloq',
		],
		majors: ['Kompüter elmləri', 'Riyaziyyat', 'Fizika', 'Kimya', 'Biologiya', 'Müalicə işi'],
	},
	A: {
		id: 'A',
		name: 'Yaradıcı',
		short: 'Özünü ifadə etməyi, yeni forma və ideyalar yaratmağı sevən orijinal insan.',
		description:
			'Sən dünyaya fərqli baxır və gördüklərini söz, rəng, səs və ya dizayn vasitəsilə ifadə etmək istəyirsən. Hazır şablonlar və sərt qaydalar səni sıxır, orijinal bir şey ortaya qoymaq isə ruhlandırır. Təxəyyülün, estetik duyumun və emosiyaları hiss etmək bacarığın güclüdür. Yeni ideyaları cəsarətlə sınamaq sənə xasdır.',
		workEnvironment:
			'Sənə sərbəstlik verən, yeni ideyaların təşviq olunduğu çevik mühit uyğundur — dizayn studiyası, media şirkəti, reklam agentliyi, teatr və ya kreativ komanda. İşin nəticəsində öz baxışını görə bildiyin, rutinin az olduğu yerlərdə enerjin artır.',
		strengths: [
			'Təxəyyül və orijinallıq',
			'Estetik duyum',
			'Özünü ifadə etmə bacarığı',
			'Qeyri-standart həll yolları tapma',
			'Emosiyaları hiss edib başqalarına çatdırma',
		],
		careers: [
			'UX/UI dizayner',
			'Qrafik dizayner',
			'Videoqraf və montajçı',
			'Kontent yaradıcısı',
			'Memar',
			'Kopirayter',
			'Animasiya rəssamı',
			'Moda dizayneri',
			'Musiqi prodüseri',
			'Aktyor',
		],
		majors: ['Dizayn', 'Memarlıq', 'Jurnalistika', 'Təsviri sənət', 'Rejissorluq', 'Filologiya'],
	},
	S: {
		id: 'S',
		name: 'Sosial',
		short: 'İnsanlara kömək etməkdən, öyrətməkdən və onları dəstəkləməkdən güc alan insan.',
		description:
			'Sən insanlarla ünsiyyətdən enerji alır, başqalarının inkişafına töhfə verəndə işinin mənasını hiss edirsən. Dinləmək, izah etmək, qayğı göstərmək və insanları bir araya gətirmək sənə təbii gəlir. Başqalarının hisslərini tez duyur, etibarlı münasibət qurmağı bacarırsan. Sənin üçün uğur həm də ətrafındakıların yaxşılığa doğru dəyişməsidir.',
		workEnvironment:
			'Sənə komanda ruhunun güclü olduğu, insanlarla birbaşa təmasda olduğun mühit uyğundur — məktəb, universitet, xəstəxana, sosial xidmət mərkəzi və ya insan resursları şöbəsi. Əməkdaşlığın rəqabətdən daha çox dəyərləndirildiyi yerlərdə özünü rahat hiss edirsən.',
		strengths: [
			'Empatiya və diqqətlə dinləmə',
			'Aydın izah etmə və öyrətmə',
			'Əməkdaşlıq və komanda ruhu',
			'Münaqişələri yumşaltma',
			'Başqalarını motivasiya etmə',
		],
		careers: [
			'Müəllim',
			'Psixoloq',
			'Tibb bacısı və ya tibb qardaşı',
			'Sosial işçi',
			'Fizioterapevt',
			'İnsan resursları (HR) mütəxəssisi',
			'Karyera məsləhətçisi',
			'Loqoped',
			'Onlayn təlimçi',
		],
		majors: [
			'Psixologiya',
			'Sosial iş',
			'Pedaqogika',
			'İbtidai sinif müəllimliyi',
			'İctimai səhiyyə',
			'Xüsusi təhsil',
		],
	},
	E: {
		id: 'E',
		name: 'Təşəbbüskar',
		short: 'İnsanları ideya ətrafında birləşdirməyi, təşəbbüs göstərib nəticə qazanmağı sevən lider.',
		description:
			'Sən fürsətləri tez görür və onları reallığa çevirmək üçün ilk addımı atmaqdan çəkinmirsən. İnsanları inandırmaq, komandanı bir hədəf ətrafında toplamaq və qərar vermək sənə enerji verir. Rəqabət və məsuliyyət səni ruhdan salmır, əksinə, motivasiya edir. Sənin üçün uğur ölçülə bilən nəticə və real təsir deməkdir.',
		workEnvironment:
			'Sənə dinamik, sürətli qərarların və təşəbbüsün qiymətləndirildiyi mühit uyğundur — startap, satış komandası, biznesin inkişafı şöbəsi və ya öz şirkətin. Liderlik etmək, danışıqlar aparmaq və nəticəyə görə tanınmaq imkanı olan yerlərdə özünü ən yaxşı göstərirsən.',
		strengths: [
			'Liderlik və təşəbbüskarlıq',
			'İnandırıcı ünsiyyət',
			'Risk götürmə cəsarəti',
			'Sürətli qərar qəbul etmə',
			'Danışıq aparma bacarığı',
		],
		careers: [
			'Sahibkar',
			'Məhsul meneceri',
			'Satış meneceri',
			'Rəqəmsal marketinq meneceri',
			'Biznesin inkişafı meneceri',
			'Layihə meneceri',
			'Hüquqşünas',
			'İctimaiyyətlə əlaqələr (PR) mütəxəssisi',
			'Turizm meneceri',
			'Daşınmaz əmlak agenti',
		],
		majors: [
			'Biznesin idarə edilməsi',
			'Marketinq',
			'Menecment',
			'Hüquqşünaslıq',
			'Beynəlxalq münasibətlər',
			'Turizm və otelçilik',
		],
	},
	C: {
		id: 'C',
		name: 'Təşkilatçı',
		short: 'Qaydanı, dəqiqliyi və sistemi sevən, işi səliqəli və etibarlı quran insan.',
		description:
			'Sən aydın struktur, dəqiq rəqəmlər və düzgün qurulmuş sistem gördükdə rahatlıq hiss edirsən. Məlumatı səliqəyə salmaq, prosesləri planlaşdırmaq və hər detalın yerində olmasına əmin olmaq sənin güclü tərəfindir. Başqalarının gözündən qaçan kiçik səhvləri asanlıqla tutursan. Sənin sayəndə işlər vaxtında, düzgün və etibarlı şəkildə görülür.',
		workEnvironment:
			'Sənə qaydaların və vəzifələrin aydın olduğu, işin planlı və proqnozlaşdırıla bilən şəkildə getdiyi mühit uyğundur — bank, maliyyə şöbəsi, logistika şirkəti, dövlət qurumu və ya böyük təşkilatın ofisi. Dəqiqliyin və məsuliyyətin dəyərləndirildiyi yerlərdə sənin töhfən xüsusilə görünür.',
		strengths: [
			'Dəqiqlik və detallara diqqət',
			'Planlaşdırma və təşkilatçılıq',
			'Rəqəmlərlə inamlı işləmə',
			'Məsuliyyət və ardıcıllıq',
			'Sistem və qayda qurma bacarığı',
		],
		careers: [
			'Mühasib',
			'Maliyyə analitiki',
			'Auditor',
			'Logistika mütəxəssisi',
			'Bank əməliyyatçısı',
			'Verilənlər bazası administratoru',
			'Ofis meneceri',
			'Vergi məsləhətçisi',
			'Keyfiyyətə nəzarət mütəxəssisi',
			'Arxivçi və informasiya mütəxəssisi',
		],
		majors: [
			'Mühasibat uçotu və audit',
			'Maliyyə',
			'İqtisadiyyat',
			'Statistika',
			'Logistika və nəqliyyat texnologiyaları',
			'İnformasiya texnologiyaları',
		],
	},
}

export const RIASEC_ORDER: RiasecType[] = ['R', 'I', 'A', 'S', 'E', 'C']

export const RIASEC_SCALE = [
	{ value: 1, label: 'Heç xoşlamazdım' },
	{ value: 2, label: 'Xoşlamazdım' },
	{ value: 3, label: 'Fərqi yoxdur' },
	{ value: 4, label: 'Xoşlayardım' },
	{ value: 5, label: 'Çox xoşlayardım' },
]
