// Extended IQ report texts (Azerbaijani): 5 domains × 5 levels, plus 6 overall bands. Plain data only.
// The IQ is an online estimate (Rasch model, IQ = 100 + 15θ), not a clinical score.
import { IqDomain } from 'tests/types'
import { IqBandContent, IqDomainContent } from './types'

export const IQ_DOMAINS: Record<IqDomain, IqDomainContent> = {
	// ---------------------------------------------------------------- Verbal
	verbal: {
		id: 'verbal',
		name: 'Verbal',
		what: 'Verbal qabiliyyət sözlər və anlayışlarla düşünmək bacarığıdır: söz ehtiyatı, anlayışlar arasındakı məna əlaqələrini görmək və verilmiş məlumatdan nəticə çıxarmaq. Bu testdə o, analogiyalar («toxum : ağac = tırtıl : ?»), əksmənalı sözlər və kənar sözü tapma kimi tapşırıqlarla ölçülür.',
		everyday: 'Gündəlik həyatda verbal qabiliyyət kitab və məqaləni tez anlamaqda, fikrinizi aydın və qısa ifadə etməkdə, mübahisədə qarşı tərəfin arqumentini düzgün tutmaqda özünü göstərir. Yeni sözlərin mənasını kontekstdən təxmin etmək, zarafat və eyhamların incə mənasını anlamaq da bu bacarığa bağlıdır.',
		work: 'Hüquq, jurnalistika, müəllimlik, marketinq, diplomatiya və idarəetmə kimi sahələrdə verbal bacarıq əsas iş alətidir. Təhsildə humanitar fənlər, esse yazımı, imtahanlardakı mətn əsaslı suallar və xarici dil öyrənmə bu qabiliyyətdən birbaşa asılıdır.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — sözlərlə düşünmək Sizin güclü tərəfinizdir',
				summary: 'Verbal tapşırıqlarda nəticəniz iştirakçıların ən yüksək təxminən 10%-i səviyyəsindədir. Siz anlayışlar arasındakı incə əlaqələri tez görür, mücərrəd analogiyaları çətinlik çəkmədən həll edirsiniz. Söz ehtiyatınız geniş və dəqiqdir, bu da mürəkkəb fikirləri asanlıqla anlamağa və ifadə etməyə imkan verir. Bu, akademik və peşəkar həyatda çox dəyərli üstünlükdür.',
				detail: 'Praktikada bu səviyyə özünü mürəkkəb elmi və ya hüquqi mətni bir dəfə oxuyub əsas ideyasını çıxarmaqda, eyni fikri müxtəlif auditoriyalar üçün fərqli üslubda ifadə etməkdə göstərir. Siz çox güman ki, analogiyalarda ilk ağla gələn əlaqəni deyil, ən dəqiq əlaqəni seçirsiniz. Mübahisədə zəif arqumentləri tez sezir, öz mövqeyinizi inandırıcı qurursunuz. Yeni dil öyrənərkən də qrammatik qanunauyğunluqları və söz köklərini tez tanıyırsınız. Bu bacarığı tam üzə çıxarmaq üçün onu yazı, çıxış və təhlil kimi görünən nəticələrə çevirmək vacibdir.',
				strengths: [
					'Geniş və dəqiq söz ehtiyatı',
					'Mücərrəd anlayışlar arasında incə əlaqələri görmə',
					'Mürəkkəb mətnləri tez anlama və xülasə etmə',
					'İnandırıcı arqument qurma və fikri aydın ifadə etmə'
				],
				risks: [
					'Söz ustalığına güvənib faktları və rəqəmləri yoxlamağı unutmaq',
					'Həddən artıq mürəkkəb dil işlədib auditoriyanı itirmək',
					'Bu bacarığı yazı və çıxışla praktikada sınamamaq'
				],
				actions: [
					'Peşəkar səviyyəli esse, bloq və ya məqalə yazmağa başlayın və onları müntəzəm paylaşın',
					'Debat klubuna və ya ictimai çıxış təliminə qoşulun',
					'Yeni xarici dil öyrənməyə başlayın — verbal gücünüz bu prosesi sürətləndirəcək',
					'Elmi-populyar və fəlsəfi ədəbiyyat oxuyaraq mücərrəd düşüncənizi daha da dərinləşdirin',
					'Mürəkkəb mövzuları sadə dildə izah etməyi məşq edin — bu, ekspert ünsiyyətinin açarıdır'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — zəngin və çevik dil düşüncəsi',
				summary: 'Verbal tapşırıqlarda nəticəniz ortadan aydın şəkildə yüksəkdir. Söz mənalarını, əksmənalı sözləri və analogiyalardakı əlaqələri əksər hallarda düzgün tutursunuz. Bu, yaxşı oxu vərdişinin və güclü dil intuisiyasının göstəricisidir. Ən çətin, çoxmənalı tapşırıqlarda bir az daha diqqətli olmaq Sizi ən yüksək səviyyəyə yaxınlaşdıra bilər.',
				detail: 'Bu səviyyədə olan insanlar adətən mətnləri rahat oxuyur, əsas fikri tez tapır və yazılı tapşırıqlarda yaxşı nəticə göstərirlər. Analogiyalarda əlaqəni çox vaxt düzgün müəyyən edirsiniz, lakin bir-birinə yaxın iki variant arasında seçim bəzən vaxt aparır. Bu, əlaqə növlərini (hissə–bütöv, alət–funksiya, səbəb–nəticə) daha dəqiq adlandırmaqla asanlıqla yaxşılaşdırıla bilər. Təqdimat, yazışma və müzakirələrdə fikrinizi aydın çatdırırsınız. Mütəmadi mürəkkəb mətn oxumaq bu güclü tərəfi daha da kəskinləşdirəcək.',
				strengths: [
					'Yaxşı söz ehtiyatı və mənaları kontekstdən tutma',
					'Mətnin əsas ideyasını tez tapma',
					'Yazılı və şifahi ünsiyyətdə aydınlıq'
				],
				risks: [
					'Yaxın variantlar arasında tələsik seçim edib incə fərqi qaçırmaq',
					'Yalnız rahat janrlarda oxuyub mürəkkəb mətnlərdən yayınmaq'
				],
				actions: [
					'Analogiyalarda əvvəlcə əlaqə növünü adlandırın (hissə–bütöv, alət–funksiya, səbəb–nəticə), sonra variantlara baxın',
					'Ayda ən azı bir ciddi qeyri-bədii kitab oxuyun və qısa xülasəsini yazın',
					'Yeni öyrəndiyiniz sözləri bir həftə ərzində ən azı üç dəfə öz nitqinizdə işlədin',
					'Məqalələrdə müəllifin əsas fərziyyəsini və arqumentin zəif nöqtəsini tapmağı məşq edin',
					'Həftədə bir dəfə 300–400 sözlük fikir yazısı yazın'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — gündəlik dil tapşırıqlarında etibarlı',
				summary: 'Verbal nəticəniz iştirakçıların əksəriyyətinin olduğu orta diapazondadır. Siz gündəlik və peşəkar dil tapşırıqlarının öhdəsindən rahat gəlir, sadə analogiyaları və söz əlaqələrini düzgün tapırsınız. Daha mücərrəd və çoxmənalı tapşırıqlar isə bəzən əlavə vaxt və diqqət tələb edir. Bu, məqsədyönlü oxu və söz məşqləri ilə ən yaxşı inkişaf etdirilən bacarıqlardandır.',
				detail: 'Praktikada bu səviyyə özünü adi mətnləri rahat anlamaqda, yazışma və söhbətdə fikri çatdıra bilməkdə göstərir. Çətinlik adətən elmi və ya rəsmi üslublu mətnlərdə, nadir işlənən sözlərdə və iki addımlı analogiyalarda yaranır. Bəzən düzgün cavab «hiss olunur», amma onu əsaslandırmaq çətin olur. Verbal qabiliyyət söz ehtiyatı ilə sıx bağlıdır, söz ehtiyatı isə oxu ilə böyüyür — buna görə burada irəliləyiş çox realdır. Hər gün 20–30 dəqiqə müxtəlif janrlarda oxu bir neçə ay ərzində fərq yaradır.',
				strengths: [
					'Gündəlik ünsiyyətdə aydınlıq',
					'Sadə və orta çətinlikli mətnləri rahat anlama',
					'Məşq ilə tez inkişaf edə bilən baza'
				],
				risks: [
					'Tanış olmayan sözləri ötürüb mətnin mənasını yarımçıq anlamaq',
					'Analogiyalarda ilk ağla gələn əlaqəni yoxlamadan seçmək'
				],
				actions: [
					'Hər gün 20–30 dəqiqə müxtəlif janrlarda (bədii, elmi-populyar, xəbər) oxuyun',
					'Yeni sözləri xüsusi dəftərə və ya tətbiqə qeyd edib həftəlik təkrarlayın',
					'Oxuduğunuz hər məqalənin əsas fikrini 2–3 cümlə ilə yazın',
					'Krossvord və söz tapmacaları ilə həftədə bir neçə dəfə məşğul olun',
					'Analogiya tapşırıqlarında hər variant üçün əlaqəni bir cümlə ilə ifadə edib sonra seçim edin'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — inkişaf üçün aydın imkan',
				summary: 'Verbal tapşırıqlarda nəticəniz orta diapazondan bir qədər aşağıdır. Bu, dil bacarığınızın zəif olduğunu deyil, mücərrəd söz əlaqələri və analogiyalar formatının Sizə hələ az tanış olduğunu göstərə bilər. Gündəlik ünsiyyətdə tamamilə rahat ola bilərsiniz, lakin test formatlı tapşırıqlar xüsusi vərdiş tələb edir. Müntəzəm oxu və söz məşqləri ilə bu sahə ən tez inkişaf edən sahələrdən biridir.',
				detail: 'Bu səviyyədə adətən sözlərin mənasını başa düşmək problem yaratmır, lakin onlar arasındakı əlaqənin növünü müəyyən etmək (məsələn, «alət və onun funksiyası» və ya «səbəb və nəticə») daha çətin olur. Əksmənalı söz və kənar sözü tapma tapşırıqlarında bir neçə variant eyni dərəcədə doğru görünə bilər. Bu, çox vaxt az oxu təcrübəsi, test formatına öyrəşməmək və ya gündəlik həyatda başqa dildə daha çox oxumaqla bağlı olur. Yaxşı xəbər odur ki, verbal qabiliyyət təcrübə ilə inkişaf etməyə davam edir. Hər gün qısa oxu və yeni söz öyrənmə bir neçə ay ərzində nəticəni nəzərəçarpacaq dərəcədə dəyişə bilər.',
				strengths: [
					'Gündəlik ünsiyyətdə praktik dil bacarığı',
					'Məşqə sürətli cavab verən sahə',
					'Konkret və aydın ifadəyə meyil'
				],
				risks: [
					'Test nəticəsinə görə özünü «dil insanı deyiləm» deyə qiymətləndirmək',
					'Uzun mətnlərdən yayınıb yalnız qısa məlumatlarla kifayətlənmək'
				],
				actions: [
					'Hər gün 15–20 dəqiqə maraqlandığınız mövzuda məqalə və ya kitab oxuyun',
					'Hər həftə 10 yeni söz öyrənin və onlarla cümlə qurun',
					'Sözləri qruplara ayırma məşqi edin: məsələn, alətlər, peşələr, hisslər',
					'Analogiyalarda əvvəlcə birinci cütün əlaqəsini sadə cümlə ilə deyin: «termometr temperaturu ölçür»',
					'Oxuduğunuz mətni başqasına danışın — izah etmək anlamağı dərinləşdirir'
				]
			},
			basic: {
				title: 'İlkin səviyyə — başlanğıc nöqtəsi',
				summary: 'Bu testdə verbal tapşırıqlar Sizin üçün hazırda çətin olub. Bu nəticə dil qabiliyyətiniz haqqında yekun hökm deyil: test formatı, yorğunluq, tələsik cavablar və ya bu tip tapşırıqlara öyrəşməmək nəticəyə güclü təsir edə bilər. Bir çox insan gündəlik həyatda çox yaxşı ünsiyyət qurur, lakin mücərrəd söz testlərində çətinlik çəkir. Kiçik, müntəzəm məşqlərlə bu sahədə görünən irəliləyiş əldə etmək mümkündür.',
				detail: 'Bu səviyyədə analogiyalar, əksmənalı sözlər və kənar sözü tapma kimi tapşırıqlar çox vaxt təxmini cavablarla həll olunur. Bunun səbəbi adətən söz ehtiyatının hələ formalaşma mərhələsində olması və ya mücərrəd əlaqələr qurmaq vərdişinin az olmasıdır. Hər iki səbəb də məşqlə dəyişən amillərdir. Ən effektiv yol sadədən mürəkkəbə getməkdir: əvvəlcə sözləri qruplaşdırmaq, sonra sadə əlaqələr qurmaq, daha sonra isə analogiyalara keçmək. Testi yaxşı dincəlmiş halda, sakit mühitdə yenidən keçmək də daha dəqiq mənzərə verə bilər.',
				strengths: [
					'Məşq ilə ölçülə bilən irəliləyiş imkanı',
					'Konkret və praktik düşüncə tərzi',
					'Hər yeni söz və vərdişin nəticəyə birbaşa təsiri'
				],
				risks: [
					'Bir test nəticəsinə əsaslanıb özünə inamı itirmək',
					'Oxunu tamamilə kənara qoymaq'
				],
				actions: [
					'Gündə 10–15 dəqiqə Sizə maraqlı olan sadə mətnlər oxuyun — xəbər, hekayə, hobbi məqalələri',
					'Hər gün 3–5 yeni söz öyrənin və onları nitqinizdə işlədin',
					'Sinonim və antonim cütləri ilə kart oyunları oynayın',
					'Sadə söz tapmacaları ilə başlayıb tədricən çətinləşdirin',
					'Bir neçə həftəlik məşqdən sonra testi sakit mühitdə, yaxşı dincəlmiş halda yenidən keçin'
				]
			}
		},
		exercises: [
			'Hər gün 20–30 dəqiqə müxtəlif janrlarda oxuyun və hər mətndən 3 yeni söz qeyd edin',
			'Oxuduğunuz məqalənin əsas fikrini 3 cümləlik xülasə ilə yazın',
			'Gündə 5 analogiya qurun: «həkim : xəstəxana = müəllim : ?» kimi cütləri özünüz yaradın',
			'Bir söz seçib ona 5 sinonim və 3 antonim tapın, sonra hər biri ilə cümlə qurun',
			'Krossvord və ya söz tapmacalarını həftədə 3 dəfə həll edin',
			'Həftədə bir mövzu seçib 2 dəqiqəlik şifahi izah hazırlayın və özünüzü səsə yazıb dinləyin'
		]
	},

	// ---------------------------------------------------------------- Rəqəmsal
	numerical: {
		id: 'numerical',
		name: 'Rəqəmsal',
		what: 'Rəqəmsal qabiliyyət ədədlərlə düşünmək, ədəd ardıcıllıqlarında qanunauyğunluq tapmaq və faiz, nisbət kimi praktik hesablamaları düzgün aparmaq bacarığıdır. Bu testdə o, «2, 6, 18, 54, ?» kimi sıraları davam etdirmək və qısa mətnli məsələləri həll etməklə ölçülür.',
		everyday: 'Gündəlik həyatda bu bacarıq endirimləri və kredit faizlərini hesablamaqda, ailə büdcəsini planlaşdırmaqda, qiymətləri müqayisə etməkdə və xəbərlərdəki statistikanı düzgün anlamaqda özünü göstərir. Mağazada hansı qablaşdırmanın daha sərfəli olduğunu tez hiss etmək də rəqəmsal düşüncənin nümunəsidir.',
		work: 'Maliyyə, mühasibat, mühəndislik, data analitikası, iqtisadiyyat və İT sahələrində rəqəmsal qabiliyyət əsas tələbdir. Təhsildə riyaziyyat, fizika, kimya və iqtisadi fənlər, həmçinin DİM imtahanlarının riyaziyyat bölməsi birbaşa bu bacarığa söykənir.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — ədədlərlə sərbəst düşüncə',
				summary: 'Rəqəmsal tapşırıqlarda nəticəniz iştirakçıların ən yüksək təxminən 10%-i səviyyəsindədir. Ədəd sıralarındakı gizli qaydaları, hətta iki qaydanın növbələşdiyi hallarda belə, tez görürsünüz. Çoxaddımlı hesablamalarda dəqiqsiniz və rəqəmlər Sizi qorxutmur, əksinə maraqlandırır. Bu, analitik və kəmiyyət yönümlü sahələr üçün güclü təməldir.',
				detail: 'Praktikada bu səviyyə özünü cədvəl və qrafiklərə baxaraq tendensiyanı dərhal sezməkdə, böyük hesablamaları zehnən təxmini aparıb nəticəni yoxlamaqda göstərir. «5, 10, 8, 16, 14, 28, ?» kimi növbələşən əməliyyatlı sıralar Sizin üçün maraqlı tapmacadır. Siz çox güman ki, maliyyə qərarlarında faizləri, riskləri və alternativləri tez müqayisə edirsiniz. Bu güclü tərəf riyaziyyat olimpiadalarında, iqtisadi modellərdə və proqramlaşdırmada xüsusilə parlaq görünür. Onu tam reallaşdırmaq üçün statistika, data analitikası və ya maliyyə modelləşdirməsi kimi praktik alətlərlə birləşdirmək vacibdir.',
				strengths: [
					'Ədəd qanunauyğunluqlarını sürətlə tanıma',
					'Çoxaddımlı hesablamalarda dəqiqlik',
					'Rəqəmsal məlumatdan nəticə çıxarma və təxmin etmə',
					'Kəmiyyət yönümlü problemlərə maraq və inam'
				],
				risks: [
					'Sürətə güvənib sadə hesablama səhvlərini yoxlamamaq',
					'Rəqəmlərin arxasındakı insan və kontekst amillərini nəzərdən qaçırmaq'
				],
				actions: [
					'Statistika və ehtimal nəzəriyyəsi üzrə dərin onlayn kurs keçin',
					'Python və ya R ilə data analitikasına başlayın — rəqəmsal intuisiyanız burada böyük üstünlükdür',
					'Riyaziyyat olimpiadalarında və ya kəmiyyət yönümlü keys müsabiqələrində iştirak edin',
					'Açıq məlumat dəstlərini (iqtisadi göstəricilər, idman statistikası) təhlil edib nəticələrinizi yazın',
					'Mürəkkəb rəqəmsal nəticələri qeyri-mütəxəssislərə sadə dildə izah etməyi məşq edin'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — rəqəmlərlə inamlı iş',
				summary: 'Rəqəmsal nəticəniz ortadan aydın şəkildə yüksəkdir. Ədəd ardıcıllıqlarını və gündəlik riyazi məsələləri əksər hallarda düzgün və tez həll edirsiniz. Faiz, nisbət və hesablama tələb edən tapşırıqlar Sizə rahat gəlir. Ən mürəkkəb, iki qaydalı sıralarda bir az daha sistemli yanaşma Sizi ən yüksək səviyyəyə qaldıra bilər.',
				detail: 'Bu səviyyədə olan insanlar adətən cədvəllərlə rahat işləyir, büdcə və hesablama tapşırıqlarında səhvsiz nəticə çıxarır. Sadə ədədi və həndəsi silsilələri dərhal tanıyırsınız; çətinlik yalnız iki fərqli əməliyyatın növbələşdiyi və ya qaydanın gizli olduğu hallarda yarana bilər. Belə sıralarda qonşu ədədlər arasındakı fərqləri və nisbətləri yazmaq qaydanı tez üzə çıxarır. Riyazi təfəkkürünüz iqtisadiyyat, mühəndislik və ya İT təhsili üçün yaxşı bazadır. Müntəzəm çətin məsələ həll etmək bu bacarığı daha da kəskinləşdirəcək.',
				strengths: [
					'Sürətli və dəqiq zehni hesab',
					'Faiz və nisbət məsələlərində inam',
					'Cədvəl və qrafiklərlə rahat işləmə'
				],
				risks: [
					'Mürəkkəb sıralarda ilk tapılan qaydanı yoxlamadan qəbul etmək',
					'Çoxaddımlı məsələlərdə ara nəticələri yazmayıb səhv etmək'
				],
				actions: [
					'Ədəd sıralarında hər qonşu cüt arasındakı fərqi və nisbəti yazaraq qaydanı yoxlayın',
					'Həftədə 3 dəfə 20 dəqiqəlik çətin məntiqi-riyazi məsələ həll edin',
					'Excel-də öz maliyyə və ya statistik modelinizi qurun',
					'Statistikanın əsasları üzrə qısa kurs keçin',
					'DİM və ya beynəlxalq imtahanların riyaziyyat bölməsindən çətin tapşırıqları vaxt ölçərək həll edin'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — praktik hesablamalarda etibarlı',
				summary: 'Rəqəmsal nəticəniz iştirakçıların əksəriyyətinin olduğu orta diapazondadır. Əsas hesablama və sadə ardıcıllıq tapşırıqlarını yaxşı həll edirsiniz. Mürəkkəb, çoxaddımlı məsələlərdə və gizli qaydalı sıralarda isə səhv ehtimalı artır. Bu bacarıq müntəzəm məşqə çox yaxşı cavab verir.',
				detail: 'Praktikada bu səviyyə gündəlik riyazi işlərin — alış-veriş hesabı, faiz, vaxt və məsafə hesablamaları — rahat görülməsi deməkdir. Çətinlik adətən məsələnin bir neçə addıma bölünməli olduğu və ya ədəd sırasında iki qaydanın növbələşdiyi hallarda yaranır. Bəzən səhv biliyin olmamasından deyil, tələsik hesablamadan və ara nəticələrin yazılmamasından irəli gəlir. Hər məsələni yazılı addımlara bölmək və cavabı təxmini yoxlamaq dəqiqliyi nəzərəçarpacaq dərəcədə artırır. Gündəlik 5–10 dəqiqəlik zehni hesab vərdişi isə sürəti yaxşılaşdırır.',
				strengths: [
					'Gündəlik riyazi tapşırıqlarda müstəqillik',
					'Sadə ardıcıllıqları tanıma',
					'Məşq ilə tez inkişaf edə bilən baza'
				],
				risks: [
					'Tələsik hesablama və ara nəticələri yazmamaq',
					'Rəqəmli məsələlərdən yayınıb onları başqasına həvalə etmək'
				],
				actions: [
					'Hər gün 5–10 dəqiqə zehni hesab məşqi edin',
					'Hər məsələni addımlara bölün və hər addımın nəticəsini yazın',
					'Cavabı aldıqdan sonra onu təxmini hesabla yoxlayın: «nəticə məntiqli görünürmü?»',
					'Həftədə bir neçə dəfə ədəd sırası tapşırıqları həll edin və qaydanı sözlə ifadə edin',
					'Öz aylıq xərclərinizi cədvəldə izləyib faiz bölgüsünü hesablayın'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — rəqəmsal inamı qurmaq vaxtıdır',
				summary: 'Rəqəmsal tapşırıqlarda nəticəniz orta diapazondan bir qədər aşağıdır. Bu, adətən hesablama qabiliyyətinin yoxluğunu deyil, test formatını, vaxt təzyiqini və ya riyaziyyatla uzun müddət məşğul olmamağı əks etdirir. Bir çox insan gündəlik həyatda rəqəmləri yaxşı idarə edir, lakin mücərrəd sıra tapşırıqlarında çətinlik çəkir. Kiçik, müntəzəm məşqlər bu sahədə sürətli irəliləyiş gətirir.',
				detail: 'Bu səviyyədə sadə toplama və vurma əməliyyatları problem yaratmır, lakin ədəd sırasının qaydasını tapmaq və ya mətnli məsələni riyazi ifadəyə çevirmək vaxt aparır. Bəzən «riyaziyyat mənlik deyil» düşüncəsi gərginlik yaradır və bu da nəticəyə mənfi təsir edir. Halbuki rəqəmsal düşüncə ən çox məşqlə inkişaf edən bacarıqlardandır. Ən effektiv yanaşma sadə tapşırıqlarla inam qazanmaq və onları tədricən çətinləşdirməkdir. Real həyat nümunələri — büdcə, endirim, səyahət hesablamaları — bu prosesi həm maraqlı, həm də faydalı edir.',
				strengths: [
					'Gündəlik həyatda praktik rəqəm təcrübəsi',
					'Məşq ilə tez görünən irəliləyiş',
					'Konkret, real nümunələrlə yaxşı öyrənmə'
				],
				risks: [
					'Riyaziyyatla bağlı gərginlik səbəbindən rəqəmli tapşırıqlardan tamamilə qaçmaq',
					'Vaxt təzyiqi altında tələsib sadə səhvlər etmək'
				],
				actions: [
					'Hər gün 5 dəqiqə zehni hesab tətbiqi ilə məşq edin',
					'Alış-verişdə endirimləri və ümumi məbləği əvvəlcə zehnən hesablayın, sonra yoxlayın',
					'Sadə ədəd sıralarında qonşu ədədlərin fərqini yazmaqla qaydanı tapmağı öyrənin',
					'Mətnli məsələləri oxuyarkən məlum və naməlumları ayrıca qeyd edin',
					'Əvvəlcə vaxt məhdudiyyəti olmadan məşq edin, inam yarandıqdan sonra vaxtı tədricən azaldın'
				]
			},
			basic: {
				title: 'İlkin səviyyə — rəqəmlərlə dostluğun başlanğıcı',
				summary: 'Bu testdə rəqəmsal tapşırıqlar Sizin üçün hazırda çətin olub. Bu nəticə riyazi qabiliyyətiniz haqqında yekun qərar deyil — o, test anındakı vəziyyəti, yorğunluğu və ya bu tip tapşırıqlarla az rastlaşmağı əks etdirə bilər. Rəqəmsal bacarıqlar sadə və müntəzəm məşqlə hər yaşda inkişaf etdirilə bilər. Ən yaxşı başlanğıc gündəlik həyatdakı real hesablamalardır.',
				detail: 'Bu səviyyədə ədəd sıraları və mətnli məsələlər çox vaxt təxminlə həll edilir və qaydanı tapmaq üçün aydın strategiya olmur. Bu tamamilə öyrənilə bilən bir bacarıqdır: məsələn, sıradakı hər iki qonşu ədəd arasındakı fərqi yazmaq qaydaların böyük hissəsini üzə çıxarır. Riyaziyyatla bağlı keçmiş mənfi təcrübələr də inamı azalda bilər, lakin bu, bacarığın deyil, öyrənmə şəraitinin nəticəsidir. Kiçik uğurlarla başlamaq — sadə tapşırıqları vaxt məhdudiyyəti olmadan həll etmək — inamı tədricən bərpa edir. Bir neçə həftəlik məşqdən sonra testi yenidən keçmək irəliləyişi görməyə imkan verəcək.',
				strengths: [
					'Hər kiçik məşqin nəticəyə görünən təsiri',
					'Praktik, real həyata yönəlmiş düşüncə',
					'Sadə strategiyalarla tez inkişaf imkanı'
				],
				risks: [
					'«Riyaziyyat mənlik deyil» inancı ilə öyrənməyi dayandırmaq',
					'Çətin tapşırıqlarla başlayıb ruhdan düşmək'
				],
				actions: [
					'Vurma cədvəlini və əsas faizləri (10%, 25%, 50%) zehnən hesablamağı təkrarlayın',
					'Gündə 5 dəqiqə sadə zehni hesab oyunları oynayın',
					'Ədəd sıralarında hər qonşu cüt arasındakı fərqi yazmaq vərdişi yaradın',
					'Gündəlik xərclərinizi qeyd edib həftənin sonunda toplayın',
					'Riyaziyyatı sadə dildə izah edən video dərslərlə əsasları təkrarlayın'
				]
			}
		},
		exercises: [
			'Gündə 5–10 dəqiqə zehni hesab məşqi edin (toplama, vurma, faiz)',
			'Ədəd sıralarında qonşu ədədlərin fərqini və nisbətini yazaraq qaydanı tapın',
			'Alış-verişdə endirimli qiyməti və ümumi məbləği kassaya çatmadan zehnən hesablayın',
			'Həftədə 3 dəfə mətnli riyazi məsələ həll edin və hər addımı yazın',
			'Aylıq xərclərinizi cədvəldə izləyib kateqoriyalar üzrə faiz bölgüsünü hesablayın',
			'Xəbərlərdəki statistik rəqəmləri təhlil edin: «bu artım faizlə nə qədərdir?»'
		]
	},

	// ---------------------------------------------------------------- Məntiqi
	logical: {
		id: 'logical',
		name: 'Məntiqi',
		what: 'Məntiqi qabiliyyət verilmiş şərtlərdən düzgün nəticə çıxarmaq, gizli qaydanı tapıb onu yeni vəziyyətə tətbiq etmək bacarığıdır. Bu testdə o, «Anar Bəhruzdan hündürdür...» tipli sıralama məsələləri, «bəzi tələbələr idmançıdır» kimi deduktiv nəticələr və hərf kodları ilə ölçülür.',
		everyday: 'Gündəlik həyatda məntiqi düşüncə qərar verməzdən əvvəl variantları ölçüb-biçməkdə, reklam və xəbərlərdəki yanlış nəticələri sezməkdə, planı addımlara bölməkdə özünü göstərir. «Əgər belə olarsa, onda nə baş verəcək?» sualını təbii şəkildə vermək də bu bacarığın əlamətidir.',
		work: 'Proqramlaşdırma, hüquq, mühəndislik, strateji planlaşdırma, elmi tədqiqat və analitika kimi sahələrdə məntiqi qabiliyyət əsas tələbdir. Təhsildə riyazi isbatlar, elmi təcrübələrin təhlili və imtahanlardakı məntiq sualları bu bacarığa birbaşa bağlıdır.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — analitik düşüncənin ustası',
				summary: 'Məntiqi tapşırıqlarda nəticəniz iştirakçıların ən yüksək təxminən 10%-i səviyyəsindədir. Çoxşərtli məsələlərdə düzgün nəticəni tez tapır, «mütləq doğrudur» ilə «ola bilər» arasındakı fərqi aydın görürsünüz. Gizli qaydaları tanımaq və onları yeni vəziyyətə tətbiq etmək Sizin üçün təbii prosesdir. Bu, problem həlli və strateji düşüncə tələb edən hər sahədə böyük üstünlükdür.',
				detail: 'Praktikada bu səviyyə özünü mürəkkəb problemi hissələrə bölməkdə, mübahisədə məntiqi səhvi dərhal görməkdə və planın zəif nöqtələrini əvvəlcədən sezməkdə göstərir. Siz çox güman ki, «bəzi», «bütün», «heç biri» kimi sözlərin nəticəyə necə təsir etdiyini intuitiv olaraq hiss edirsiniz. Şahmat, proqramlaşdırma və strateji oyunlar Sizə xüsusi zövq verə bilər. Bu səviyyədə ən böyük inkişaf imkanı analitik gücü real, qeyri-müəyyən vəziyyətlərdə — natamam məlumatla qərar verməkdə — sınamaqdır. Məntiqi gücünüzü insan amilini nəzərə alan qərarlarla tamamlamaq Sizi güclü lider edə bilər.',
				strengths: [
					'Çoxşərtli məsələlərdə dəqiq deduktiv nəticə',
					'Gizli qaydaları tez tanıma və ümumiləşdirmə',
					'Arqumentlərdə məntiqi səhvləri sezmə',
					'Strateji və sistemli planlaşdırma'
				],
				risks: [
					'Hər şeyi məntiqə əsaslandırıb emosional və sosial amilləri nəzərə almamaq',
					'Natamam məlumatla qərar verməkdən çəkinmək, «mükəmməl analiz» gözləmək'
				],
				actions: [
					'Alqoritmlər və proqramlaşdırma ilə məşğul olun — məntiqi gücünüz burada birbaşa nəticəyə çevrilir',
					'Formal məntiq və ya tənqidi təfəkkür üzrə universitet səviyyəli kurs keçin',
					'Keys müsabiqələrində və ya strateji oyun turnirlərində iştirak edin',
					'Real biznes keyslərini təhlil edib alternativ ssenarilər yazın',
					'Məntiqi nəticələrinizi başqalarına izah edərkən onların baxış bucağını da nəzərə almağı məşq edin'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — sistemli və dəqiq düşüncə',
				summary: 'Məntiqi nəticəniz ortadan aydın şəkildə yüksəkdir. Qaydaları və ardıcıllıqları yaxşı izləyir, əksər deduktiv tapşırıqları dəqiq həll edirsiniz. Şərtlərdən nəticə çıxarmaq və variantları sistemli yoxlamaq Sizə rahat gəlir. Ən mürəkkəb, çoxaddımlı məsələlərdə yazılı sxemdən istifadə Sizi daha da irəli aparacaq.',
				detail: 'Bu səviyyədə olan insanlar adətən problemlərə ardıcıl yanaşır, qərar verməzdən əvvəl variantları müqayisə edir və planlaşdırmada güclü olurlar. Sıralama məsələlərini və sadə sillogizmləri tez həll edirsiniz; çətinlik yalnız bir neçə şərtin eyni anda yadda saxlanılmalı olduğu tapşırıqlarda yarana bilər. Belə hallarda şərtləri qısa sxem, cədvəl və ya oxlarla yazmaq səhv ehtimalını kəskin azaldır. Bu güclü tərəf proqramlaşdırma, hüquq, mühəndislik və layihə idarəetməsi üçün yaxşı təməldir. Müntəzəm məntiq tapşırıqları və strateji oyunlar bu bacarığı daha da kəskinləşdirəcək.',
				strengths: [
					'Qaydaları tez tanıma və tətbiq etmə',
					'Ardıcıl və sistemli problem həlli',
					'Planlaşdırma və variantları müqayisə etmə'
				],
				risks: [
					'Çoxşərtli məsələlərdə hər şeyi zehnən saxlamağa çalışıb səhv etmək',
					'Tələsikdən «ola bilər» ilə «mütləq doğrudur» arasındakı fərqi qaçırmaq'
				],
				actions: [
					'Çoxşərtli məsələlərdə şərtləri sxem, cədvəl və ya Venn diaqramı ilə yazmağı vərdişə çevirin',
					'Həftədə 3 dəfə sudoku, kakuro və ya məntiq tapmacaları həll edin',
					'Şahmat və ya strateji oyunlarla müntəzəm məşğul olun',
					'Proqramlaşdırmanın əsaslarını öyrənin — bu, məntiqi düşüncənin ən praktik tətbiqidir',
					'Oxuduğunuz arqumentlərdə əsas fərziyyəni və nəticəni ayrıca yazın'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — praktik məntiqdə etibarlı',
				summary: 'Məntiqi nəticəniz iştirakçıların əksəriyyətinin olduğu orta diapazondadır. Sadə və orta çətinlikli məntiq tapşırıqlarını yaxşı həll edirsiniz. Bir neçə şərtin eyni anda nəzərə alınmalı olduğu məsələlərdə isə dəqiqlik azala bilər. Addım-addım yazma vərdişi və müntəzəm tapmaca məşqi bu sahədə tez nəticə verir.',
				detail: 'Praktikada bu səviyyə gündəlik qərarlarda sağlam düşüncəyə əsaslanmaq, sadə planlar qurmaq və aydın qaydaları izləmək deməkdir. Çətinlik adətən «bəzi» və «bütün» kimi sözlərin nəticəni necə dəyişdiyini müəyyən etməkdə və ya üç-dörd şərtin birləşdiyi sıralama məsələlərində yaranır. Bu, çox vaxt məlumatı yalnız zehnən saxlamağa çalışmaqdan irəli gəlir. Şərtləri kağıza yazmaq və sadə sxem çəkmək dərhal fərq yaradır. Məntiq bacarığı şahmat, sudoku və proqramlaşdırma kimi fəaliyyətlərlə əyləncəli şəkildə inkişaf etdirilə bilər.',
				strengths: [
					'Gündəlik qərarlarda sağlam düşüncə',
					'Aydın qaydaları izləmə və tətbiq etmə',
					'Sadə və orta çətinlikli problemlərdə müstəqillik'
				],
				risks: [
					'Çoxşərtli məsələlərdə tələsik nəticə çıxarmaq',
					'Şərtləri yazmadan yalnız zehnən işləmək'
				],
				actions: [
					'Hər məntiq məsələsində şərtləri ayrı-ayrı sətirlərdə yazın və hər birini yoxlayın',
					'Hər gün bir sudoku və ya məntiq tapmacası həll edin',
					'Sillogizm tapşırıqlarında Venn diaqramı çəkməyi öyrənin',
					'Şahmat oynamağa başlayın və ya həftədə bir neçə partiya oynayın',
					'Gündəlik qərarlarınızda «əgər ... olarsa, onda ...» sxemi ilə variantları yazmağı sınayın'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — strategiya ilə sürətli irəliləyiş',
				summary: 'Məntiqi tapşırıqlarda nəticəniz orta diapazondan bir qədər aşağıdır. Bu, düşünmə qabiliyyətinizin zəif olduğunu deyil, formal məntiq tapşırıqlarına hələ az öyrəşdiyinizi göstərə bilər. Real həyatda çox yaxşı praktik qərarlar verən bir çox insan test formatlı məntiq məsələlərində çətinlik çəkir. Bir neçə sadə strategiya ilə bu sahədə tez irəliləmək mümkündür.',
				detail: 'Bu səviyyədə sıralama və sillogizm tapşırıqlarında şərtlər bir-birinə qarışa bilər, xüsusən də hamısı zehnən saxlanıldıqda. «Bəzi tələbələr idmançıdır» kimi ifadələrdən hansı nəticənin «mütləq» çıxdığını müəyyən etmək çətin görünə bilər. Bu, tamamilə öyrənilə bilən bir bacarıqdır: məsələn, sıralama məsələsində adları xətt üzərində yerləşdirmək cavabı dərhal aydınlaşdırır. Məntiq tapmacaları, sadə strateji oyunlar və addım-addım düşünmə vərdişi bu sahəni gücləndirir. Əsas odur ki, tələsməyəsiniz və hər şərti ayrıca yoxlayasınız.',
				strengths: [
					'Real həyatda praktik qərar vermə təcrübəsi',
					'Sadə strategiyalara tez cavab verən sahə',
					'Konkret nümunələrlə yaxşı anlama'
				],
				risks: [
					'Bütün şərtləri zehnən saxlamağa çalışıb qarışdırmaq',
					'Test nəticəsinə görə özünü «məntiqli insan deyiləm» deyə qiymətləndirmək'
				],
				actions: [
					'Sıralama məsələlərində adları xətt üzərində yerləşdirib vizual sxem qurun',
					'Hər şərti oxuduqdan sonra ondan nə çıxdığını bir cümlə ilə yazın',
					'Asan səviyyəli sudoku və məntiq tapmacaları ilə başlayın, tədricən çətinləşdirin',
					'Dama, şahmat və ya sadə strateji oyunları dostlarla oynayın',
					'Vaxt məhdudiyyəti olmadan məşq edin — əvvəlcə dəqiqlik, sonra sürət'
				]
			},
			basic: {
				title: 'İlkin səviyyə — məntiqi vərdişlərin təməli',
				summary: 'Bu testdə məntiqi tapşırıqlar Sizin üçün hazırda çətin olub. Bu nəticə düşünmə qabiliyyətiniz haqqında yekun qərar deyil: test formatı, tələsik cavab, yorğunluq və ya bu tip tapşırıqlarla az rastlaşmaq nəticəyə güclü təsir edir. Məntiqi düşüncə məşqlə formalaşan vərdişlərdən biridir. Sadə tapmacalar və addım-addım düşünmə ilə başlamaq Sizə qısa müddətdə irəliləyiş gətirəcək.',
				detail: 'Bu səviyyədə məntiq tapşırıqları çox vaxt intuisiya ilə və ya təxminlə həll olunur, şərtləri sistemli yoxlamaq üçün hazır strategiya isə hələ formalaşmayıb. Bu normaldır: formal məntiq məktəbdə ayrıca fənn kimi az öyrədilir. Gündəlik həyatda verdiyiniz praktik qərarlar göstərir ki, məntiqi düşüncə Sizdə var — sadəcə onu test formatına uyğunlaşdırmaq lazımdır. Ən effektiv yol çox sadə tapşırıqlarla başlamaq, hər addımı yazmaq və düzgün cavabın niyə düzgün olduğunu təhlil etməkdir. Bir neçə həftəlik müntəzəm məşqdən sonra testi sakit mühitdə yenidən keçmək daha dəqiq mənzərə verəcək.',
				strengths: [
					'Gündəlik həyatda praktik sağlam düşüncə',
					'Hər yeni strategiyanın nəticəyə görünən təsiri',
					'Sadədən mürəkkəbə gedə bilən, öyrənməyə açıq yanaşma'
				],
				risks: [
					'Çətin tapşırıqla başlayıb ruhdan düşmək',
					'Tələsik cavab verib şərtləri tam oxumamaq'
				],
				actions: [
					'Hər tapşırığı ən azı iki dəfə oxuyun və şərtləri ayrıca qeyd edin',
					'Yeniyetmələr üçün nəzərdə tutulmuş sadə məntiq tapmacaları ilə başlayın',
					'Dama və ya sadə stolüstü strateji oyunları həftədə bir neçə dəfə oynayın',
					'Səhv etdiyiniz tapşırıqlarda düzgün cavabın niyə doğru olduğunu öz sözlərinizlə yazın',
					'Bir neçə həftə sonra testi yaxşı dincəlmiş halda, sakit mühitdə yenidən keçin'
				]
			}
		},
		exercises: [
			'Hər gün bir sudoku, kakuro və ya məntiq tapmacası həll edin',
			'Sıralama məsələlərində adları xətt üzərində yerləşdirib vizual sxem qurun',
			'Sillogizm tapşırıqlarında Venn diaqramı çəkərək nəticəni yoxlayın',
			'Həftədə bir neçə partiya şahmat oynayın və hər gedişdən əvvəl rəqibin cavabını təxmin edin',
			'Oxuduğunuz arqumentlərdə fərziyyəni, sübutu və nəticəni ayrıca yazın',
			'Proqramlaşdırmanın əsaslarını (şərtlər, dövrlər) sadə tapşırıqlarla öyrənin'
		]
	},

	// ---------------------------------------------------------------- Məkan
	spatial: {
		id: 'spatial',
		name: 'Məkan',
		what: 'Məkan qabiliyyəti fiqurları zehnən çevirmək, güzgü əksini təsəvvür etmək və vizual nümunələrdəki qanunauyğunluqları tanımaq bacarığıdır. Bu testdə o, matris tapşırıqları («sual işarəsinin yerinə hansı fiqur gəlməlidir?»), güzgü əksi və qatlanmış kağız kimi tapşırıqlarla ölçülür.',
		everyday: 'Gündəlik həyatda məkan düşüncəsi xəritəyə baxıb yol tapmaqda, avtomobili dar yerdə park etməkdə, mebeli otağa necə yerləşdirəcəyinizi əvvəlcədən təsəvvür etməkdə və təlimatla əşya yığmaqda özünü göstərir. Çamadanı səliqə ilə yığmaq da bu bacarığın kiçik nümunəsidir.',
		work: 'Memarlıq, mühəndislik, dizayn, pilotluq, 3D modelləşdirmə və oyun yaradıcılığı kimi sahələrdə məkan qabiliyyəti əsas rol oynayır. Təhsildə həndəsə, fizika, rəsmxət və kimyada molekul quruluşlarını anlamaq bu bacarığa söykənir.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — güclü vizual təxəyyül',
				summary: 'Məkan tapşırıqlarında nəticəniz iştirakçıların ən yüksək təxminən 10%-i səviyyəsindədir. Fiqurları zehnən fırlatmaq, güzgü əksini və qatlanmış kağızın açılmış formasını təsəvvür etmək Sizin üçün asan və sürətlidir. Matris tapşırıqlarında bir neçə qaydanın eyni anda işlədiyini belə tez görürsünüz. Bu, texniki və yaradıcı sahələrdə nadir və çox dəyərli bacarıqdır.',
				detail: 'Praktikada bu səviyyə özünü sxem və çertyojları bir baxışda anlamaqda, üçölçülü obyekti müxtəlif bucaqlardan zehnən görməkdə və yeni yerdə tez istiqamət tapmaqda göstərir. Siz çox güman ki, fikirlərinizi sözdən çox eskiz, diaqram və vizual model vasitəsilə izah etməyi sevirsiniz. Bu güclü tərəf memarlıq, mühəndislik, sənaye dizaynı, 3D qrafika və oyun yaradıcılığında birbaşa üstünlük verir. Həndəsə və fizika kimi fənlərdə də çətin məsələləri «görərək» həll edə bilirsiniz. Bu bacarığı tam reallaşdırmaq üçün onu CAD, 3D modelləşdirmə və ya vizual dizayn alətləri ilə birləşdirmək tövsiyə olunur.',
				strengths: [
					'Fiqurları zehnən sürətlə fırlatma və çevirmə',
					'Mürəkkəb vizual qanunauyğunluqları tanıma',
					'Sxem, çertyoj və xəritələri asan anlama',
					'Fikirləri vizual model vasitəsilə izah etmə'
				],
				risks: [
					'Vizual həllə güvənib onu sözlə və ya rəqəmlə əsaslandırmamaq',
					'Bu nadir bacarığı peşə seçimində nəzərə almamaq'
				],
				actions: [
					'3D modelləşdirmə və ya CAD proqramlarından birini öyrənməyə başlayın',
					'Memarlıq, mühəndislik və ya dizayn sahəsində qısa layihədə və ya təcrübə proqramında iştirak edin',
					'Mürəkkəb 3D tapmacalar və konstruktor dəstləri ilə çətinlik səviyyəsini artırın',
					'Fikirlərinizi vizual diaqram və infoqrafika ilə təqdim etməyi məşq edin',
					'Həndəsə və fizika olimpiadası tapşırıqları ilə vizual düşüncənizi riyazi əsaslandırma ilə birləşdirin'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — inamlı vizual düşüncə',
				summary: 'Məkan nəticəniz ortadan aydın şəkildə yüksəkdir. Vizual nümunələri və fiqur çevrilmələrini yaxşı başa düşür, matris tapşırıqlarının əksəriyyətini düzgün həll edirsiniz. Qrafik, sxem və xəritələrlə işləmək Sizə rahat gəlir. Çoxqaydalı və üçölçülü tapşırıqlarda daha sistemli yanaşma Sizi ən yüksək səviyyəyə yaxınlaşdıracaq.',
				detail: 'Bu səviyyədə olan insanlar adətən təlimatla əşyaları asanlıqla yığır, yeni yerdə tez istiqamət tapır və vizual materialları yaxşı xatırlayırlar. Sadə fırlanma və güzgü əksi tapşırıqları Sizin üçün çətin deyil; çətinlik yalnız eyni anda bir neçə dəyişikliyin (forma, rəng, mövqe) baş verdiyi matrislərdə yarana bilər. Belə hallarda hər xüsusiyyəti ayrıca — əvvəlcə formanı, sonra rəngi, sonra mövqeyi — izləmək həlli asanlaşdırır. Bu bacarıq dizayn, mühəndislik və texniki sahələr üçün yaxşı təməldir. Müntəzəm vizual tapmacalar və konstruktor fəaliyyətləri onu daha da inkişaf etdirəcək.',
				strengths: [
					'Fiqur çevrilmələrini düzgün təsəvvür etmə',
					'Qrafik və sxemlərlə rahat işləmə',
					'Yaxşı istiqamət hissi'
				],
				risks: [
					'Çoxqaydalı matrislərdə bütün dəyişiklikləri eyni anda izləməyə çalışıb səhv etmək',
					'Vizual bacarığı praktik fəaliyyətlə inkişaf etdirməmək'
				],
				actions: [
					'Matris tapşırıqlarında hər xüsusiyyəti (forma, rəng, say, mövqe) ayrıca təhlil edin',
					'Həftədə bir neçə dəfə 3D tapmaca və ya fırlanma oyunları ilə məşğul olun',
					'Əşyaların eskizini üç fərqli bucaqdan çəkməyi məşq edin',
					'Sadə 3D modelləşdirmə proqramı ilə tanış olun',
					'Yeni yerə getməzdən əvvəl xəritəyə baxıb marşrutu zehnən qurun'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — vizual qanunauyğunluqlarda etibarlı',
				summary: 'Məkan nəticəniz iştirakçıların əksəriyyətinin olduğu orta diapazondadır. Sadə vizual qanunauyğunluqları və fiqur çevrilmələrini tanıyırsınız. Çoxqaydalı matris, fırlanma və qatlanma tapşırıqları isə əlavə diqqət və vaxt tələb edir. Vizual düşüncə oyun və praktik fəaliyyətlə çox əyləncəli şəkildə inkişaf etdirilə bilər.',
				detail: 'Praktikada bu səviyyə xəritə və sxemləri anlamaqda, gündəlik məkan tapşırıqlarında — park etmək, mebel yerləşdirmək — çətinlik çəkməmək deməkdir. Test tapşırıqlarında çətinlik adətən fiqurun eyni anda həm fırlandığı, həm də əks olunduğu, yaxud kağızın bir neçə dəfə qatlandığı hallarda yaranır. Belə tapşırıqlarda zehni təsvir bəzən «qarışır» — bu, çox geniş yayılmış haldır. Hər çevrilməni ayrıca addım kimi təsəvvür etmək və ya kağız üzərində sınamaq dəqiqliyi artırır. Tetris, puzzle və LEGO kimi fəaliyyətlər məkan düşüncəsini həm də zövqlə inkişaf etdirir.',
				strengths: [
					'Sadə vizual qanunauyğunluqları tanıma',
					'Gündəlik məkan tapşırıqlarında rahatlıq',
					'Vizual məşqə yaxşı cavab verən baza'
				],
				risks: [
					'Mürəkkəb çevrilmələrdə bütün addımları eyni anda təsəvvür etməyə çalışmaq',
					'Tələsik vizual oxşarlığa görə cavab seçmək'
				],
				actions: [
					'Mürəkkəb çevrilmələri addımlara bölün: əvvəlcə fırladın, sonra əks etdirin',
					'Kağız qatlama tapşırıqlarını real kağızla sınayaraq yoxlayın',
					'Həftədə bir neçə dəfə Tetris, puzzle və ya 3D tapmaca oyunları oynayın',
					'Otağınızın sadə planını yuxarıdan baxışla çəkin',
					'Matris tapşırıqlarında əvvəlcə sətirləri, sonra sütunları ayrıca təhlil edin'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — vizual düşüncəni oyatmaq vaxtı',
				summary: 'Məkan tapşırıqlarında nəticəniz orta diapazondan bir qədər aşağıdır. Bu, çox vaxt məkan qabiliyyətinin yox, bu tip vizual tapşırıqlarla az məşğul olmağın göstəricisidir. Məkan düşüncəsi təcrübə ilə ən çox inkişaf edən bacarıqlardan biridir — konstruktor, rəsm və vizual oyunlarla böyüyən insanlarda o, adətən daha güclü olur. Sadə və maraqlı məşqlərlə bu sahədə tez irəliləmək mümkündür.',
				detail: 'Bu səviyyədə fiqurları zehnən fırlatmaq və güzgü əksini təsəvvür etmək çətin görünə bilər, matris tapşırıqlarında isə bir neçə dəyişikliyi eyni anda izləmək yorucu olur. Bu tamamilə normaldır: vizual təsəvvür əzələ kimidir və istifadə olunduqca güclənir. Başlanğıcda tapşırıqları real əşyalarla — kağız, kub, LEGO — sınamaq zehni təsviri formalaşdırmağa kömək edir. Hər dəyişikliyi ayrıca izləmək (əvvəlcə forma, sonra mövqe) çətin matrisləri sadə addımlara çevirir. Müntəzəm vizual oyunlar bir neçə həftə ərzində fərq yaradır.',
				strengths: [
					'Konkret, əl ilə toxunula bilən nümunələrlə yaxşı öyrənmə',
					'Məşq və oyunla tez inkişaf potensialı',
					'Gündəlik praktik məkan təcrübəsi'
				],
				risks: [
					'Vizual tapşırıqlardan tamamilə yayınmaq',
					'Bütün dəyişiklikləri eyni anda görməyə çalışıb çaşmaq'
				],
				actions: [
					'Fırlanma və əks etdirmə tapşırıqlarını əvvəlcə real əşya və ya kağız fiqurla sınayın',
					'Həftədə bir neçə dəfə 15 dəqiqə puzzle və ya Tetris tipli oyun oynayın',
					'Sadə əşyaların (fincan, kitab, stul) eskizini müxtəlif tərəflərdən çəkin',
					'Matris tapşırıqlarında yalnız bir xüsusiyyəti izləyərək başlayın, sonra ikincisini əlavə edin',
					'Origami ilə məşğul olun — o, qatlama və açılma məntiqini əyani şəkildə öyrədir'
				]
			},
			basic: {
				title: 'İlkin səviyyə — vizual təsəvvürün ilk addımları',
				summary: 'Bu testdə məkan tapşırıqları Sizin üçün hazırda çətin olub. Bu nəticə vizual qabiliyyətiniz haqqında yekun hökm deyil — kiçik ekran, tələsmə, yorğunluq və bu tip tapşırıqlarla ilk dəfə rastlaşmaq nəticəyə ciddi təsir edə bilər. Məkan düşüncəsi təcrübə ilə inkişaf edən bacarıqdır. Sadə, əl ilə görülən fəaliyyətlərlə başlamaq Sizə qısa müddətdə irəliləyiş gətirəcək.',
				detail: 'Bu səviyyədə fiqur çevrilmələri, güzgü əksləri və matris tapşırıqları çox vaxt təxminlə həll olunur, çünki zehni təsvir hələ aydın formalaşmır. Bunun səbəbi çox vaxt uşaqlıqda konstruktor, rəsm və vizual oyunlarla az məşğul olmaqdır — yəni söhbət qabiliyyətdən deyil, imkandan gedir. Bu bacarıq istənilən yaşda inkişaf etdirilə bilər və ilk irəliləyişlər adətən tez görünür. Ən yaxşı yol tapşırıqları əvvəlcə real əşyalarla sınamaq, sonra zehnən təkrarlamaqdır. Testi böyük ekranda, sakit mühitdə və tələsmədən yenidən keçmək də daha dəqiq nəticə verə bilər.',
				strengths: [
					'Hər kiçik məşqin nəticəyə görünən təsiri',
					'Praktik, əl ilə öyrənməyə hazırlıq',
					'Digər sahələrdəki güclü tərəflərə söykənmək imkanı'
				],
				risks: [
					'«Vizual düşüncəm yoxdur» kimi yanlış inanc',
					'Tapşırıqları kiçik ekranda tələsik həll etməyə çalışmaq'
				],
				actions: [
					'Sadə LEGO və ya konstruktor dəstlərini təlimata baxaraq yığın',
					'Kağızı qatlayıb deşik açın və açılmış formanı əvvəlcə təxmin edin, sonra yoxlayın',
					'Güzgü qarşısında sadə fiqurların əksini müşahidə edin',
					'Sadə vizual tapmacalarla başlayıb tədricən çətinləşdirin',
					'Testi böyük ekranda, sakit mühitdə və tələsmədən yenidən keçin'
				]
			}
		},
		exercises: [
			'Həftədə bir neçə dəfə Tetris, puzzle və ya 3D tapmaca oyunları oynayın',
			'Əşyaların eskizini üç fərqli bucaqdan (öndən, yandan, yuxarıdan) çəkin',
			'Kağızı qatlayıb kəsin və açılmış formanı əvvəlcə təxmin edin, sonra yoxlayın',
			'Origami ilə məşğul olun — qatlama ardıcıllığı məkan təfəkkürünü inkişaf etdirir',
			'Yeni yerə getməzdən əvvəl xəritədə marşrutu zehnən qurun, sonra naviqasiyasız gedin',
			'LEGO və ya konstruktor dəstlərini təlimatdakı şəklə baxaraq yığın'
		]
	},

	// ---------------------------------------------------------------- Yaddaş
	memory: {
		id: 'memory',
		name: 'Yaddaş',
		what: 'Yaddaş bölməsi qısamüddətli və işçi yaddaşı ölçür: məlumatı qısa müddətə yadda saxlamaq və eyni zamanda onunla işləmək bacarığını. Bu testdə o, bir neçə saniyə göstərilən rəqəm ardıcıllıqlarını düz və tərs sırada xatırlamaq, fiqurun hansı xanada olduğunu yadda saxlamaq kimi tapşırıqlarla qiymətləndirilir.',
		everyday: 'Gündəlik həyatda işçi yaddaş telefon nömrəsini yazana qədər yadda saxlamaqda, söhbət zamanı bir neçə fikri eyni anda izləməkdə, resepti kitaba baxmadan addım-addım icra etməkdə özünü göstərir. Tapşırıqlar arasında keçid edərkən harada qaldığınızı unutmamaq da bu bacarığa bağlıdır.',
		work: 'İşçi yaddaş demək olar ki, bütün mürəkkəb idrak fəaliyyətlərinin — zehni hesab, oxuyub anlama, proqramlaşdırma, sinxron tərcümə — əsasında dayanır. Təhsildə yeni mövzunu mənimsəmək, mühazirədə qeyd tutmaq və imtahanda çoxaddımlı məsələ həll etmək işçi yaddaşın gücündən birbaşa asılıdır.',
		levels: {
			expert: {
				title: 'Ekspert səviyyə — çox güclü işçi yaddaş',
				summary: 'Yaddaş tapşırıqlarında nəticəniz iştirakçıların ən yüksək təxminən 10%-i səviyyəsindədir. Məlumatı tez yadda saxlayır və onu zehnən çevirə — məsələn, uzun rəqəm sırasını tərs ardıcıllıqla təkrarlaya — bilirsiniz. Bu, eyni anda bir neçə məlumat parçası ilə işləməyə imkan verən nadir bacarıqdır. Mürəkkəb, çoxaddımlı işlərdə bu, Sizin gizli üstünlüyünüzdür.',
				detail: 'Praktikada bu səviyyə özünü mühazirəni qeyd tutmadan da yaxşı izləməkdə, uzun təlimatları bir dəfə eşidib icra etməkdə, söhbətdə bir neçə mövzunu eyni anda saxlamaqda göstərir. Siz çox güman ki, zehni hesabda və tapşırıqlar arasında sürətli keçiddə rahatsınız. Güclü işçi yaddaş proqramlaşdırma, tərcümə, analitika və idarəetmə kimi sahələrdə birbaşa məhsuldarlığa çevrilir. Lakin unutmayın: işçi yaddaş yorğunluğa və gərginliyə həssasdır, buna görə istirahət və yuxu rejimi bu üstünlüyü qorumaq üçün vacibdir. Bu bacarığı uzunmüddətli yaddaş strategiyaları ilə birləşdirmək öyrənmə sürətinizi daha da artıra bilər.',
				strengths: [
					'Məlumatı tez yadda saxlama və zehnən çevirmə',
					'Eyni anda bir neçə məlumat parçası ilə işləmə',
					'Uzun təlimat və ardıcıllıqları dəqiq izləmə',
					'Zehni hesab və çoxaddımlı düşüncədə rahatlıq'
				],
				risks: [
					'Yaddaşa güvənib vacib məlumatları yazmamaq',
					'Çox sayda tapşırığı eyni anda üzərinizə götürüb yüklənmək'
				],
				actions: [
					'Aralıqlı təkrar (spaced repetition) üsulu ilə işçi yaddaşda olanı uzunmüddətli biliyə çevirin',
					'Yaddaş sarayı (loci) texnikasını öyrənib böyük həcmli məlumat üzərində sınayın',
					'Yeni xarici dil və ya proqramlaşdırma dili öyrənin — güclü işçi yaddaş bu prosesi sürətləndirir',
					'Mürəkkəb layihələrdə bu üstünlüyü strukturlaşdırılmış qeydlər sistemi ilə tamamlayın',
					'Yuxu və istirahət rejiminizə diqqət edin — işçi yaddaşın keyfiyyəti buna birbaşa bağlıdır'
				]
			},
			advanced: {
				title: 'Qabaqcıl səviyyə — etibarlı və çevik yaddaş',
				summary: 'Yaddaş nəticəniz ortadan aydın şəkildə yüksəkdir. Rəqəm ardıcıllıqlarını və fiqurların yerini yaxşı xatırlayır, məlumatı qısa müddətdə dəqiq saxlayırsınız. Bu, öyrənmə və çoxaddımlı tapşırıqlarda Sizə ciddi dəstək verir. Ən uzun ardıcıllıqlarda qruplaşdırma üsulu Sizi ən yüksək səviyyəyə qaldıra bilər.',
				detail: 'Bu səviyyədə olan insanlar adətən yeni adları, nömrələri və təlimatları yaxşı yadda saxlayır, dərslərdə və iclaslarda əsas məqamları itirmirlər. Qısa rəqəm sıralarını həm düz, həm də tərs ardıcıllıqla rahat təkrarlayırsınız; çətinlik yalnız sıra uzandıqca və ya diqqət yayındıqda yarana bilər. Uzun ardıcıllıqları 3–4 elementlik qruplara bölmək (telefon nömrəsi kimi) tutumu nəzərəçarpacaq dərəcədə artırır. Bu güclü tərəf dil öyrənmədə, imtahan hazırlığında və proqramlaşdırmada xüsusilə faydalıdır. Müntəzəm işçi yaddaş məşqləri və yaxşı istirahət onu daha da möhkəmləndirəcək.',
				strengths: [
					'Yeni məlumatı tez mənimsəmə',
					'Qısa ardıcıllıqları düz və tərs sırada dəqiq xatırlama',
					'Dərs və iclaslarda əsas məqamları izləmə'
				],
				risks: [
					'Diqqət yayındıqda nəticənin kəskin düşməsi',
					'Uzun ardıcıllıqları strategiyasız, yalnız təkrarla yadda saxlamağa çalışmaq'
				],
				actions: [
					'Uzun ardıcıllıqları 3–4 elementlik qruplara bölmək vərdişini yaradın',
					'Həftədə bir neçə dəfə N-back tipli işçi yaddaş məşqləri edin',
					'Öyrəndiyiniz yeni məlumatı 1 gün, 3 gün və 1 həftə sonra təkrarlayın',
					'İş zamanı bildirişləri söndürün — diqqətin yayınmaması işçi yaddaşı qoruyur',
					'Yeni məlumatı tanış obrazlarla əlaqələndirərək (assosiasiya) yadda saxlamağı məşq edin'
				]
			},
			intermediate: {
				title: 'Orta səviyyə — gündəlik işlərdə etibarlı yaddaş',
				summary: 'Yaddaş nəticəniz iştirakçıların əksəriyyətinin olduğu orta diapazondadır. Qısa ardıcıllıqları və sadə vizual məlumatları yaxşı xatırlayırsınız. Uzun və ya tərs sırada təkrarlanmalı olan ardıcıllıqlarda isə səhv ehtimalı artır. Düzgün strategiyalarla — qruplaşdırma və assosiasiya — bu sahədə tez irəliləyiş əldə etmək mümkündür.',
				detail: 'Praktikada bu səviyyə gündəlik məlumatları — görüş vaxtları, qısa siyahılar, adlar — əsasən yadda saxlamaq, lakin uzun təlimatlarda və ya eyni anda bir neçə iş görərkən bəzi detalları unutmaq deməkdir. Test tapşırıqlarında çətinlik adətən 6–7 elementdən uzun sıralarda və rəqəmləri tərs ardıcıllıqla təkrarlamaqda yaranır. Bu, çox geniş yayılmış haldır: işçi yaddaşın tutumu təbii olaraq məhduddur. Fərqi əsasən strategiya yaradır — məlumatı qruplara bölmək, obrazlarla əlaqələndirmək və ya səslə təkrarlamaq. Yuxu, diqqət və gərginlik səviyyəsi də yaddaş nəticəsinə birbaşa təsir edir.',
				strengths: [
					'Gündəlik məlumatları etibarlı yadda saxlama',
					'Qısa ardıcıllıqlarda dəqiqlik',
					'Strategiyalara yaxşı cavab verən baza'
				],
				risks: [
					'Uzun ardıcıllıqları strategiyasız yadda saxlamağa çalışmaq',
					'Çoxlu işi eyni anda görməyə çalışıb detalları itirmək'
				],
				actions: [
					'Rəqəm sıralarını 3–4 elementlik qruplara bölərək yadda saxlamağı məşq edin',
					'Tərs ardıcıllıq üçün əvvəlcə sıranı qruplara bölün, sonra qrupları sondan başlayaraq təkrarlayın',
					'Gündə 10 dəqiqə yaddaş oyunları (kart cütləri, ardıcıllıq oyunları) oynayın',
					'Alış-veriş siyahısını yazmazdan əvvəl yadda saxlamağa çalışın, sonra yoxlayın',
					'Bir anda bir işə fokuslanın — çoxişlilik işçi yaddaşı yükləyir'
				]
			},
			novice: {
				title: 'Başlanğıc səviyyə — strategiya ilə güclənən yaddaş',
				summary: 'Yaddaş tapşırıqlarında nəticəniz orta diapazondan bir qədər aşağıdır. Bu, çox vaxt yaddaşın zəifliyini deyil, diqqətin yayınmasını, yorğunluğu və ya yadda saxlama strategiyalarından istifadə etməməyi əks etdirir. Qısamüddətli yaddaş test anındakı vəziyyətə çox həssasdır. Bir neçə sadə üsulla bu nəticəni nəzərəçarpacaq dərəcədə yaxşılaşdırmaq mümkündür.',
				detail: 'Bu səviyyədə qısa ardıcıllıqlar adətən yadda qalır, lakin sıra uzandıqca və ya tərs təkrarlanmalı olduqda məlumat «itməyə» başlayır. Fiqurun hansı xanada olduğunu xatırlamaq tapşırıqlarında da diqqətin bir anlıq yayınması nəticəyə təsir edir. Bu tamamilə normaldır və ən çox strategiya ilə həll olunur: məsələn, «7 2 4 9 1 6» sırasını «72 – 49 – 16» kimi üç cütə bölmək onu yadda saxlamağı xeyli asanlaşdırır. Məlumatı səslə və ya pıçıltı ilə təkrarlamaq da işçi yaddaşı dəstəkləyir. Testi yaxşı dincəlmiş halda və sakit mühitdə keçmək də nəticəyə müsbət təsir göstərir.',
				strengths: [
					'Qısa ardıcıllıqları yadda saxlama',
					'Sadə strategiyalara tez cavab verən sahə',
					'Konkret və mənalı məlumatı daha yaxşı xatırlama'
				],
				risks: [
					'Diqqəti yayındıran mühitdə (telefon, səs-küy) yadda saxlamağa çalışmaq',
					'Yaddaş nəticəsini dəyişməz xüsusiyyət hesab edib məşq etməmək'
				],
				actions: [
					'Rəqəm sıralarını cütlərə və ya üçlüklərə bölərək yadda saxlamağı hər gün 5 dəqiqə məşq edin',
					'Yeni məlumatı səslə təkrarlayın və ya onu tanış obrazla əlaqələndirin',
					'Kart cütü tapma kimi sadə yaddaş oyunlarını həftədə bir neçə dəfə oynayın',
					'Öyrənərkən telefonu başqa otaqda saxlayın',
					'Testi yaxşı dincəlmiş halda və sakit mühitdə yenidən keçin'
				]
			},
			basic: {
				title: 'İlkin səviyyə — yaddaş vərdişlərinin başlanğıcı',
				summary: 'Bu testdə yaddaş tapşırıqları Sizin üçün hazırda çətin olub. Qısamüddətli yaddaş test anındakı vəziyyətə — yorğunluğa, diqqətin yayınmasına, həyəcana — çox həssas olduğu üçün bu nəticə yaddaşınız haqqında yekun hökm deyil. Bir çox insan gündəlik həyatda vacib məlumatları yaxşı xatırlayır, lakin sürətli rəqəm testlərində çətinlik çəkir. Sadə strategiyalar və müntəzəm məşq bu sahədə görünən irəliləyiş gətirəcək.',
				detail: 'Bu səviyyədə göstərilən ardıcıllıqlar çox qısa müddətdə yaddaşdan «silinir» və ya bir-birinə qarışır. Bunun ən geniş yayılmış səbəbləri diqqətin yayınması, test zamanı tələsmə və yadda saxlama üsullarından istifadə etməməkdir. Yaxşı xəbər odur ki, işçi yaddaşdan gündəlik istifadə strategiyalarla xeyli yaxşılaşdırıla bilər: qruplaşdırma, səslə təkrar və obrazlarla əlaqələndirmə. Gündəlik həyatda qeyd dəftəri, xatırlatmalar və siyahılar kimi köməkçi alətlər də tamamilə normal və ağıllı həll yoludur. Testi yaxşı dincəlmiş halda, səs-küysüz mühitdə yenidən keçmək daha dəqiq mənzərə verəcək.',
				strengths: [
					'Gündəlik həyatda praktik xatırlama üsulları',
					'Hər yeni strategiyanın nəticəyə görünən təsiri',
					'Köməkçi alətlərdən ağıllı istifadə bacarığı'
				],
				risks: [
					'Bir test nəticəsinə görə yaddaşınıza inamı itirmək',
					'Səs-küylü mühitdə və yorğun halda öyrənməyə çalışmaq'
				],
				actions: [
					'Gündə 5 dəqiqə 3–4 rəqəmlik qısa sıraları yadda saxlayıb təkrarlamaqla başlayın, tədricən uzadın',
					'Hər yeni məlumatı səslə təkrarlayın',
					'Sadə kart cütü tapma oyunlarını həftədə bir neçə dəfə oynayın',
					'Vacib məlumatlar üçün qeyd və xatırlatma sistemi qurun — bu, yaddaşı yükdən azad edir və diqqəti artırır',
					'Testi yaxşı dincəlmiş halda, sakit mühitdə yenidən keçin'
				]
			}
		},
		exercises: [
			'Rəqəm və söz ardıcıllıqlarını 3–4 elementlik qruplara bölərək yadda saxlayın',
			'N-back tipli işçi yaddaş məşqlərini gündə 10 dəqiqə edin',
			'Eşitdiyiniz rəqəm sırasını tərs ardıcıllıqla təkrarlamağı məşq edin',
			'Kart cütü tapma oyununu tədricən daha çox kartla oynayın',
			'Alış-veriş siyahısını yaddaş sarayı (loci) üsulu ilə yadda saxlayın, sonra yoxlayın',
			'Öyrəndiyiniz məlumatı 1 gün, 3 gün və 1 həftə sonra təkrarlayın (aralıqlı təkrar)'
		]
	}
}

export const IQ_BANDS: IqBandContent[] = [
	{
		band: 'Çox yüksək',
		narrative: 'Nəticəniz bu testdə «Çox yüksək» diapazondadır — bu, iştirakçıların təxminən ən yüksək 2%-nin çatdığı səviyyədir. Siz mücərrəd qanunauyğunluqları tez görür, mürəkkəb, çoxaddımlı tapşırıqları dəqiq həll edirsiniz. Bu nəticə çox güman ki, bir neçə idrak sahəsində eyni vaxtda güclü performansdan yaranıb. Belə profil yeni və çətin bilikləri sürətlə mənimsəməyə, qeyri-standart problemlərə orijinal həll tapmağa imkan verir. Lakin yüksək qabiliyyət yalnız potensialdır: onu nəticəyə çevirən maraq, səbir və ardıcıl əməkdir. Sizin üçün əsas sual «bacarırammı?» deyil, «bu gücü harada ən böyük təsirə çevirə bilərəm?» olmalıdır.',
		learning: 'Siz ən yaxşı sürətli tempdə, dərin və çətin materialla öyrənirsiniz; həddən artıq təkrar və sadə tapşırıqlar Sizdə tez maraq itkisinə səbəb ola bilər. Özünüzə çağırış yaradan layihələr, tədqiqat tapşırıqları və müstəqil öyrənmə Sizə ən çox uyğundur. Olimpiadalar, akademik müsabiqələr və mentorla birgə iş potensialınızı üzə çıxarmağa kömək edir. Eyni zamanda, komanda layihələri Sizə fikirlərinizi başqalarına izah etməyi və birgə işləməyi öyrədir.',
		careers: 'Bu profil elmi tədqiqat, proqram mühəndisliyi, süni intellekt, tibb, hüquq, maliyyə analitikası və strateji idarəetmə kimi intellektual baxımdan ən tələbkar sahələrdə uğur üçün güclü əsas yaradır. Bununla belə, peşə seçimi yalnız IQ-ya deyil, maraqlarınıza, dəyərlərinizə və şəxsiyyət xüsusiyyətlərinizə də əsaslanmalıdır. Hansı sahəni seçsəniz, mürəkkəb problemlər üzərində işləmək və öyrənməyə davam etmək imkanı olan mühit Sizə ən çox zövq verəcək. Talent Score-un şəxsiyyət və karyera testləri bu seçimi dəqiqləşdirməyə kömək edə bilər.',
		caution: 'Bu nəticə onlayn testə əsaslanan təxmini göstəricidir və geniş norma qrupunda standartlaşdırılmış klinik IQ testini əvəz etmir. Çox yüksək nəticələrdə ölçmə xətası daha böyük olur, buna görə dəqiq rəqəmdən çox ümumi diapazona diqqət yetirin.'
	},
	{
		band: 'Yüksək',
		narrative: 'Nəticəniz «Yüksək» diapazondadır və iştirakçıların təxminən ən güclü 10%-inə daxil olduğunuzu göstərir. Siz analitik və mücərrəd tapşırıqlarda əksəriyyətdən irəlidəsiniz. Yeni mövzuları tez mənimsəyir, qaydaları tanıyır və onları müxtəlif vəziyyətlərə tətbiq edə bilirsiniz. Bu nəticə çətin akademik proqramlar və rəqabətli peşələr üçün güclü baza deməkdir. Domen nəticələrinizə baxaraq hansı sahələrin xüsusilə güclü olduğunu görə bilərsiniz — çox vaxt bir-iki sahə ümumi nəticəni yuxarı çəkir. Bu güclü tərəfləri məqsədyönlü şəkildə inkişaf etdirmək Sizi öz sahənizdə fərqləndirəcək.',
		learning: 'Siz izah olunan mövzunu tez tutur və ondan sonra müstəqil şəkildə dərinləşməyi xoşlayırsınız. Sizin üçün ən effektiv öyrənmə üsulu nəzəriyyəni dərhal praktik tapşırıqla birləşdirməkdir: məsələ həlli, layihə, keys təhlili. Çətinlik səviyyəsi tədricən artan materiallar motivasiyanızı qoruyur. Öyrəndiklərinizi başqalarına izah etmək biliyinizi daha da möhkəmləndirəcək.',
		careers: 'Bu profil mühəndislik, İT, tibb, hüquq, iqtisadiyyat, data analitikası və elmi fəaliyyət kimi intellektual yükü yüksək olan sahələrdə uğur üçün güclü əsas yaradır. Rəqabətli universitet proqramları və xaricdə təhsil təqaüdləri də Sizin üçün real hədəflərdir. Peşə seçərkən domen nəticələrinizə — verbal, rəqəmsal, məntiqi, məkan və yaddaş — baxmaq istiqaməti dəqiqləşdirir. Unutmayın ki, uzunmüddətli uğurda qabiliyyət qədər maraq və ardıcıllıq da həlledici rol oynayır.',
		caution: 'Bu nəticə onlayn testə əsaslanan təxmini göstəricidir və klinik IQ diaqnozu deyil. Yorğunluq, vaxt məhdudiyyəti və test şəraiti nəticəni bir neçə bal yuxarı və ya aşağı dəyişə bilər.'
	},
	{
		band: 'Ortadan yuxarı',
		narrative: 'Nəticəniz «Ortadan yuxarı» diapazondadır — bu, iştirakçıların təxminən 75–90%-indən yüksək nəticədir. Siz əksər idrak tapşırıqlarının öhdəsindən rahat gəlir, bir neçə sahədə isə aydın güclü tərəflər göstərirsiniz. Yeni məlumatı yaxşı mənimsəyir və onu praktikada tətbiq etməyi bacarırsınız. Bu səviyyə akademik və peşəkar həyatda çox geniş imkanlar açır. Domen nəticələriniz arasındakı fərqlər təbii güclü tərəflərinizi göstərir — onları bilmək düzgün istiqamət seçmək üçün çox faydalıdır. Məqsədyönlü məşq və maraqlı sahədə dərinləşmə bu potensialı real üstünlüyə çevirəcək.',
		learning: 'Siz strukturlu izah və praktik nümunələr birləşdikdə ən yaxşı öyrənirsiniz. Mövzunu əvvəlcə ümumi mənzərədə görmək, sonra detallara keçmək Sizə uyğundur. Müntəzəm təkrar və öyrəndiklərinizi real tapşırıqlarda sınamaq biliyi möhkəmləndirir. Güclü olduğunuz sahədən başlayıb zəif sahələri onunla əlaqələndirmək öyrənməni daha səmərəli edəcək.',
		careers: 'Bu profil ilə mühəndislik, İT, maliyyə, menecment, marketinq, təhsil, səhiyyə və hüquq kimi geniş peşə spektrində uğurlu olmaq üçün yaxşı baza var. Ən uyğun istiqaməti domen nəticələrinizdəki güclü tərəflər və maraqlarınız birlikdə müəyyən edir. Bu səviyyədə ardıcıl əmək və düzgün bacarıqlar (dil, proqram bilikləri, ünsiyyət) qabiliyyət fərqindən daha həlledicidir. Hədəfli inkişafla rəqabətli vəzifələrə çatmaq Sizin üçün tamamilə realdır.',
		caution: 'Bu nəticə onlayn testə əsaslanan təxmini göstəricidir və klinik IQ testini əvəz etmir. Test şəraiti və diqqət səviyyəsi nəticəyə təsir edə bilər, buna görə onu dəqiq rəqəm deyil, ümumi istiqamət kimi qəbul edin.'
	},
	{
		band: 'Orta',
		narrative: 'Nəticəniz «Orta» diapazondadır — insanların təxminən yarısı məhz bu aralıqda yerləşir. Bu, gündəlik həyatın, təhsilin və əksər peşələrin tələblərinin öhdəsindən uğurla gəlmək üçün möhkəm idrak bazası deməkdir. Orta diapazon geniş aralıqdır və burada olan insanların güclü tərəfləri çox müxtəlif olur. Domen nəticələrinizə baxın: çox güman ki, bəzi sahələrdə ortadan yüksək, bəzilərində isə inkişaf üçün yer olan nəticələriniz var. Həyatda uğuru yalnız IQ deyil, motivasiya, bacarıqlar, ünsiyyət və ardıcıllıq müəyyən edir — bu sahələrdə hər kəs böyük irəliləyiş əldə edə bilər. Güclü sahələrinizə əsaslanan seçimlər və məqsədli məşq Sizə ən yaxşı nəticəni verəcək.',
		learning: 'Siz aydın strukturlu, addım-addım izah olunan və real həyatla əlaqələndirilmiş materiallarla ən yaxşı öyrənirsiniz. Yeni mövzunu kiçik hissələrə bölmək və hər hissəni praktik tapşırıqla möhkəmləndirmək çox effektivdir. Müntəzəm təkrar və qısa, lakin gündəlik məşğələlər uzun və nizamsız oxudan daha yaxşı nəticə verir. Qrup halında öyrənmək və başqalarına izah etmək də biliyi dərinləşdirir.',
		careers: 'Orta diapazon peşə seçimini məhdudlaşdırmır: insanların böyük əksəriyyəti, o cümlədən bir çox uğurlu sahibkar, menecer və mütəxəssis məhz bu aralıqdadır. Burada peşə uğurunu əsasən bacarıqlar, təcrübə, maraq və iş etikası müəyyən edir. Domen nəticələrinizdəki ən güclü sahəni və şəxsiyyət testlərinizin nəticələrini birlikdə nəzərə alaraq Sizə ən uyğun istiqaməti seçə bilərsiniz. Dil, proqram bilikləri və praktik təcrübə kimi öyrənilə bilən bacarıqlar burada ən böyük fərqi yaradır.',
		caution: 'Bu nəticə onlayn testə əsaslanan təxmini göstəricidir və klinik IQ diaqnozu deyil. Yorğunluq, diqqətin yayınması və test formatına öyrəşməmək nəticəni aşağı sala bilər, buna görə testi başqa vaxt təkrar keçmək fərqli nəticə verə bilər.'
	},
	{
		band: 'Ortadan aşağı',
		narrative: 'Nəticəniz bu testdə «Ortadan aşağı» diapazondadır. Bu, test tapşırıqlarının hazırda Sizin üçün iştirakçıların əksəriyyətinə nisbətən daha çətin olduğunu göstərir, lakin qabiliyyətiniz haqqında yekun hökm deyil. Onlayn testlərin nəticəsi yorğunluq, tələsmə, diqqəti yayındıran mühit və bu tip tapşırıqlara öyrəşməmək kimi amillərdən güclü şəkildə asılıdır. Domen nəticələrinizə baxın: çox güman ki, bəzi sahələrdə nəticəniz ümumi göstəricidən yüksəkdir və bu, Sizin güclü tərəfinizdir. Test tipli tapşırıqlarda performans məşq və düzgün strategiyalarla nəzərəçarpacaq dərəcədə yaxşılaşa bilər. Həyatda uğur isə yalnız test nəticəsindən deyil, bacarıqlardan, təcrübədən, xarakterdən və əməkdən asılıdır.',
		learning: 'Siz praktik, konkret nümunələrə əsaslanan və addım-addım izah olunan materiallarla ən yaxşı öyrənirsiniz. Yeni mövzunu kiçik hissələrə bölmək, hər hissəni möhkəmləndirdikdən sonra növbətiyə keçmək çox effektivdir. Vizual materiallar, videolar və əl ilə görülən tapşırıqlar uzun nəzəri izahdan daha yaxşı nəticə verə bilər. Tələsmədən, öz tempinizdə öyrənmək və müntəzəm təkrar etmək uğurun açarıdır.',
		careers: 'Bu nəticə heç bir peşə yolunu bağlamır: əksər sahələrdə uğuru praktik bacarıqlar, təcrübə, məsuliyyət və insanlarla işləmə bacarığı müəyyən edir. İstədiyiniz istiqamətdə irəliləmək üçün ən effektiv yol öyrənməni kiçik, praktik addımlara bölmək və real təcrübə qazanmaqdır. Domen nəticələrinizdəki ən güclü sahə və maraqlarınız Sizə ən uyğun başlanğıc nöqtəsini göstərəcək. Peşə hazırlığı kursları, təcrübə proqramları və mentorluq bu yolda sürətli irəliləyiş gətirir.',
		caution: 'Bu nəticə onlayn testə əsaslanan təxmini göstəricidir və klinik IQ diaqnozu deyil; onun əsasında heç bir mühüm qərar verilməməlidir. Testi yaxşı dincəlmiş halda, sakit mühitdə yenidən keçmək çox vaxt daha dəqiq mənzərə verir.'
	},
	{
		band: 'Aşağı',
		narrative: 'Bu testdə nəticəniz «Aşağı» diapazonda çıxıb, yəni tapşırıqların çoxu hazırda Sizin üçün çətin olub. Bu nəticəni ehtiyatla qəbul etmək vacibdir: onlayn testlərdə yorğunluq, həyəcan, tələsmə, texniki problemlər, səs-küylü mühit və ya tapşırıqların dili nəticəni ciddi şəkildə aşağı sala bilər. Bu göstərici Sizin dəyərinizi, istedadlarınızı və gələcək imkanlarınızı ölçmür. Domen nəticələrinizə nəzər salın — bəzi sahələrdə nəticəniz digərlərindən yüksək ola bilər və bu, inkişaf üçün yaxşı başlanğıc nöqtəsidir. Test tipli tapşırıqlarda performans məşq və düzgün strategiyalarla yaxşılaşa bilər. Ən vacibi odur ki, bu nəticəni yekun hökm kimi deyil, özünüzü daha yaxşı tanımaq üçün bir məlumat kimi qəbul edəsiniz.',
		learning: 'Siz çox güman ki, konkret, praktik və vizual materiallarla, öz tempinizdə ən yaxşı öyrənirsiniz. Mövzuları kiçik addımlara bölmək, hər addımı əvvəlcə nümunədə görmək və sonra özünüz təkrarlamaq çox effektivdir. Müəllim, mentor və ya Sizi dəstəkləyən biri ilə birlikdə öyrənmək motivasiyanı və inamı artırır. Kiçik uğurları qeyd etmək və tez-tez qısa təkrar etmək biliyi möhkəmləndirir.',
		careers: 'Bu nəticə Sizin üçün heç bir qapını bağlamır: həyatda və işdə uğur məsuliyyətdən, səbirdən, insanlarla münasibətdən, praktik bacarıqdan və əməksevərlikdən çox asılıdır. Sizə maraqlı olan sahədə qısa, praktik peşə hazırlığı kursları və real iş təcrübəsi ən etibarlı irəliləyiş yoludur. Talent Score-un digər testləri — şəxsiyyət, maraqlar və istedad sahələri — güclü tərəflərinizi daha geniş göstərəcək. Öz tempinizdə, ardıcıl addımlarla irəliləmək ən yaxşı nəticəni verir.',
		caution: 'Bu nəticə onlayn testə əsaslanan təxmini göstəricidir, klinik IQ testi deyil və onun əsasında heç bir tibbi, psixoloji və ya təhsil qərarı verilməməlidir. Testi yaxşı dincəlmiş halda, sakit mühitdə yenidən keçmək daha dəqiq mənzərə verəcək; ehtiyac olduqda ixtisaslı mütəxəssislə məsləhətləşmək olar.'
	}
]
