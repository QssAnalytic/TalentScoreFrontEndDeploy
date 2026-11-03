// Extended report texts for the 16-type personality test (Azerbaijani).
// These complement the type profiles in tests/mbti/data.ts and do not repeat them.
import { MbtiExtra, MbtiPoleDetail } from './types'

export const MBTI_EXTRA: Record<string, MbtiExtra> = {
	// ---------- Analitiklər (NT) ----------
	INTJ: {
		code: 'INTJ',
		idealEnvironment:
			'Sizin üçün ideal mühit məqsədlərin aydın, səlahiyyətlərin isə geniş olduğu yerdir: nə etməli olduğunuzu bilirsiniz, necə edəcəyinizi isə özünüz seçirsiniz. Fokuslanmaq üçün sakit iş saatları, qərarların məlumatla əsaslandırıldığı mədəniyyət və səriştəyə görə irəliləmə imkanı Sizə enerji verir. Bankda yeni risk modelinin qurulması və ya dövlət qurumunda rəqəmsal transformasiya strategiyası kimi uzunmüddətli layihələr marağınızı uzun müddət canlı saxlayır. Qərarların "həmişə belə olub" deyə qəbul edildiyi mühitdə isə tez soyuyursunuz.',
		teamRole:
			'Komandada Siz çox vaxt "memar" rolunu oynayırsınız: başqaları gündəlik tapşırıqlarla məşğul olarkən Siz bütün sistemin bir il sonra necə işləyəcəyini düşünürsünüz. Layihənin zəif nöqtələrini erkən görür, riskləri hələ problemə çevrilmədən adlandırırsınız. Töhfəniz ən çox planlaşdırma və strukturun dizaynı mərhələsində hiss olunur. Komandanın fikirlərinizi qəbul etməsi üçün isə yalnız nəticəni deyil, düşüncə yolunu da göstərməyiniz vacibdir.',
		asManager:
			'Menecer kimi Siz komandaya aydın istiqamət, ölçülə bilən məqsədlər və öyrənmə imkanı verirsiniz. Əməkdaşları gündəlik nəzarətlə deyil, nəticə ilə qiymətləndirir, bacarıqlı insanlara geniş sərbəstlik tanıyırsınız. Zəif tərəfiniz hər kəsin Sizin kimi müstəqil işləyə biləcəyini güman etməkdir: yeni başlayan əməkdaşlara daha çox izah və müntəzəm qısa görüşlər lazım ola bilər. Həftəlik 15 dəqiqəlik təkbətək söhbətlər komandanın Sizi daha yaxşı anlamasına kömək edər.',
		decisionMaking:
			'Qərar verərkən Siz əvvəlcə məqsədi müəyyənləşdirir, sonra variantları uzunmüddətli nəticələrinə görə müqayisə edirsiniz. Məlumat toplayır, ssenarilər qurur və seçiminizi verdikdən sonra ona möhkəm sadiq qalırsınız. Bu yanaşma çox vaxt düzgün nəticə verir, lakin qərarı gec bölüşdüyünüz üçün başqaları prosesdən kənarda qaldığını hiss edə bilər. Qərarın ilkin variantını erkən göstərmək həm dəstəyi artırır, həm də kor nöqtələri tapmağa kömək edir.',
		learningStyle:
			'Siz ən yaxşı mövzunun ümumi modelini anladıqdan sonra öyrənirsiniz: əvvəlcə "bu sistem niyə belə qurulub?", sonra detallar. Kitablar, dərin onlayn kurslar və müstəqil araşdırma Sizə mühazirədən daha səmərəli gəlir. Öyrəndiklərinizi öz qeyd sisteminizdə, sxemlər və xəritələr şəklində təşkil etməyi sevirsiniz. Tempi yavaş və təkrarçı olan qrup dərsləri isə səbrinizi sınayır.',
		conflict:
			'Münaqişədə Siz məsələni məntiqi problem kimi görür, arqumentləri sakit, lakin qətiyyətlə irəli sürürsünüz. Qarşı tərəfin emosional reaksiyasını bəzən "mövzudan yayınma" kimi qiymətləndirib gərginliyi artıra bilərsiniz. Belə hallarda əvvəlcə "Düzgün anlayıramsa, Siz deyirsiniz ki..." cümləsi ilə qarşı tərəfin fikrini öz sözlərinizlə təkrarlayın. İnsanlar eşidildiklərini hiss edəndə Sizin məntiqinizə daha açıq olurlar.',
		motivators: [
			'Mürəkkəb, hələ heç kimin həll etmədiyi problem üzərində işləmək',
			'Strategiyaya real təsir göstərmək səlahiyyəti',
			'Səriştəli və dərin düşünən həmkarlarla işləmək',
			'Öz iş qrafikinizi və metodunuzu seçmək azadlığı',
			'Uzunmüddətli planın addım-addım reallaşdığını görmək',
		],
		demotivators: [
			'Məntiqi izahı olmayan qayda və göstərişlər',
			'Nəticəsiz uzun iclaslar',
			'Səriştəyə deyil, tanışlığa əsaslanan irəliləmə',
			'Hər addımın yuxarıdan izlənildiyi mikroidarəetmə',
		],
		underPressureTips: [
			'Gərgin anda planı kağıza yazın: nəyə nəzarət edə bildiyinizi və nəyə edə bilmədiyinizi ayırın.',
			'Bir ehtiyat variant hazırlayın — B planının olması nəzarət hissini qaytarır.',
			'Gecə saatlarında işləməyi uzatmaq əvəzinə yuxu rejiminizi qoruyun; təhlil gücünüz dincəlmiş beyindən asılıdır.',
			'Ən azı bir etibarlı insana vəziyyəti danışın — fikri səsləndirmək həlli tez-tez aydınlaşdırır.',
		],
		careerPaths: [
			{
				title: 'Aktuari',
				why: 'Uzunmüddətli riskləri riyazi modellərlə proqnozlaşdırmaq Sizin gələcəyə baxan və sistemli düşüncənizə tam uyğundur. Sığorta və pensiya sahəsində bu ixtisas həm nadir, həm də yüksək qiymətləndirilir.',
			},
			{
				title: 'Maşın öyrənməsi mühəndisi',
				why: 'Mürəkkəb modelləri dizayn edib onları ardıcıl təkmilləşdirmək Sizin müstəqil və dərin iş tərzinizə cavab verir. Nəticənin dəqiq ölçülməsi isə yüksək standartlarınızı qane edir.',
			},
			{
				title: 'Şəhərsalma planlaşdırıcısı (urbanist)',
				why: 'Nəqliyyatı, mənzili və infrastrukturu onilliklərə hesablanmış vahid sistem kimi planlamaq Sizin strateji baxışınızdan maksimum istifadə edir.',
			},
			{
				title: 'Risk meneceri',
				why: 'Başqalarının görmədiyi zəif nöqtələri erkən tapmaq və onlara qarşı plan qurmaq Sizin təbii üstünlüyünüzdür. Bank və enerji şirkətlərində bu rol birbaşa rəhbərliklə işləməyə imkan verir.',
			},
			{
				title: 'Patent mütəxəssisi',
				why: 'Texniki ideyanı hüquqi məntiqlə təhlil etmək həm analitik dəqiqlik, həm də dərin müstəqil araşdırma tələb edir — hər ikisi Sizin güclü tərəfinizdir.',
			},
		],
		developmentPlan: {
			d30: [
				'Cari əsas layihəniz üçün bir səhifəlik strategiya xülasəsi yazın və onu iki həmkarınızla bölüşüb rəy istəyin.',
				'Komandanızdan iki nəfərlə 20 dəqiqəlik qeyri-rəsmi söhbət edin və onların hazırkı prioritetlərini öyrənin.',
				'Ən vacib üç uzunmüddətli məqsədinizi yazın və hər biri üçün bu ay atılacaq bir ölçülə bilən addım müəyyən edin.',
			],
			d90: [
				'Sahənizdə peşəkar sertifikat proqramına (məsələn, data elmləri və ya layihə idarəçiliyi üzrə) başlayın.',
				'Komandanızdan bir nəfərə mentorluq edin: aylıq görüşlər planlayın və onun inkişafını izləyin.',
				'Bir iş prosesini seçib ölçün, təkmilləşdirin və nəticəni rəqəmlərlə rəhbərliyə təqdim edin.',
			],
			y1: [
				'Strateji qərarların qəbul olunduğu bir rola və ya layihəyə rəhbərlik etməyi hədəfləyin.',
				'Məqalə, çıxış və ya peşəkar icma vasitəsilə ekspertizanızı sahənizdə görünən edin.',
				'İl ərzində topladığınız rəylərə əsasən ünsiyyət üslubunuzda iki konkret dəyişikliyi qiymətləndirin.',
			],
		},
		interviewTips: [
			'Qısa və ciddi cavablarınız soyuq görünə bilər — hər cavabın sonunda bu işə niyə maraq duyduğunuzu bir cümlə ilə əlavə edin.',
			'Komanda işi barədə suala yalnız öz planınızı deyil, başqalarının ideyasını necə nəzərə aldığınızı göstərən nümunə ilə cavab verin.',
			'Müsahibin fikrini düzəltmək istəyini cilovlayın; razılaşmasanız belə, fikrinizi sual şəklində ifadə edin.',
			'Strateji düşüncənizi göstərmək üçün "bu vəzifədə ilk 90 gündə nə edərdim" planını əvvəlcədən hazırlayın.',
		],
	},

	INTP: {
		code: 'INTP',
		idealEnvironment:
			'Sizin üçün ideal mühit sual verməyin təşviq olunduğu, ideyaların vəzifəyə görə deyil, məntiqinə görə qiymətləndirildiyi yerdir. Çevik iş saatları, uzaqdan işləmək imkanı və dərin fokus üçün kəsilməz zaman blokları məhsuldarlığınızı kəskin artırır. Tədqiqat laboratoriyası, məhsul komandasında texniki araşdırma və ya analitika şöbəsi kimi "niyə?" sualının dəyər yaratdığı yerlər Sizə uyğundur. Hər şeyin əvvəlcədən yazılmış təlimatla edildiyi mühitdə isə maraq tez sönür.',
		teamRole:
			'Komandada Siz "keyfiyyət yoxlayıcısı" və konseptual problem həlledicisisiniz: təklif olunan həllin məntiqi boşluqlarını hamıdan əvvəl görürsünüz. Komanda ilişib qalanda tamamilə fərqli bucaqdan yanaşma təklif etməyiniz çox vaxt düyünü açır. Dəyəriniz xüsusilə mürəkkəb texniki qərarlarda və yeni yanaşmaların sınaqdan keçirilməsi mərhələsində görünür. Töhfənizin nəzərə çarpması üçün ideyalarınızı qısa yazılı xülasə şəklində paylaşmaq faydalıdır.',
		asManager:
			'Menecer kimi Siz komandaya intellektual azadlıq verir, insanların öz həll yollarını tapmasına imkan yaradırsınız. Əməkdaşlarla iyerarxik deyil, peşəkar həmkar kimi danışırsınız və bu, güclü mütəxəssislərə çox xoş gəlir. Çətinlik isə prosesin inzibati hissəsində — hesabatlarda, son tarixlərin izlənməsində, performans söhbətlərində — yaranır. Bu hissəni sistemləşdirmək (sabit həftəlik görüş, ortaq tapşırıq lövhəsi) və ya təşkilatçı köməkçiyə həvalə etmək Sizi əsl güclü tərəfinizə qaytarır.',
		decisionMaking:
			'Qərar verərkən Siz bütün variantları məntiq süzgəcindən keçirir, hər birinin istisnalarını və zəif tərəflərini yoxlayırsınız. Bu, keyfiyyətli qərar verir, lakin məlumat heç vaxt tam olmadığı üçün proses uzana bilər. Faydalı qayda: qərarın geri qaytarıla bilən olub-olmadığını soruşun; geri qaytarıla bilənsə, tez seçin və sınaqdan keçirin. Dərin təhlil vaxtını yalnız geri dönüşü olmayan qərarlara ayırın.',
		learningStyle:
			'Siz ən yaxşı maraq dalğası ilə öyrənirsiniz: bir mövzu diqqətinizi çəkəndə saatlarla, hətta günlərlə onun içinə dalırsınız. Əsas prinsipi anlamadan əzbərləmək Sizə demək olar ki, mümkünsüz gəlir, buna görə də formulun haradan gəldiyini soruşursunuz. Sərbəst eksperiment, texniki sənədləri oxumaq və öz layihənizi qurmaq Sizə hazır kursdan daha çox şey öyrədir. Struktur olmadıqda isə maraqdan-maraqa keçib əsas mövzunu bitirməmək riski yaranır.',
		conflict:
			'Münaqişədə Siz əvvəlcə geri çəkilir, emosional gərginlik olan söhbətlərdən uzaq durmağa çalışırsınız. Mübahisə ideya üzərində olanda isə çox inadkar ola və qarşı tərəfin hər arqumentini parça-parça təhlil edə bilərsiniz. Bu, haqlı olsanız belə, insanı küsdürə bilər. Söhbətə başlamazdan əvvəl özünüzdən soruşun: "Mən haqlı çıxmaq istəyirəm, yoxsa problemi həll etmək?" — və ortaq məqsədi ilk cümlədə adlandırın.',
		motivators: [
			'Hələ cavabı bilinməyən intellektual tapmaca',
			'Öz yanaşmanızı sınamaq üçün azadlıq və vaxt',
			'İdeyalarınızı ciddi qəbul edən, məntiqlə mübahisə edən həmkarlar',
			'Yeni texnologiyanı və ya nəzəriyyəni dərindən öyrənmək imkanı',
			'Mürəkkəb sistemin nəhayət işə düşdüyünü görmək',
		],
		demotivators: [
			'Mənasını anlamadığınız bürokratik prosedurlar',
			'Eyni tapşırığın dəfələrlə təkrarlanması',
			'İdeyanın məzmunu ilə deyil, kimin dediyi ilə qiymətləndirildiyi mühit',
			'Daimi kəsintilər, səs-küylü açıq ofis və gözlənilməz zənglər',
		],
		underPressureTips: [
			'Böyük problemi ən kiçik ilk addıma qədər bölün və yalnız həmin addıma fokuslanın.',
			'Təhlili dayandırmaq üçün özünüzə vaxt limiti qoyun: "Saat 17:00-da qərar verirəm."',
			'Gün ərzində qısa gəzinti və ya fiziki fəaliyyət edin — beyniniz hərəkət edərkən yeni əlaqələr qurur.',
			'Narahatlıq yaradan sosial vəziyyəti etibarlı bir dostla müzakirə edib reallıqla müqayisə edin.',
		],
		careerPaths: [
			{
				title: 'Backend və ya sistem mühəndisi',
				why: 'Görünməyən, lakin hər şeyin üzərində dayandığı mürəkkəb sistemləri qurmaq Sizin dərin məntiqi düşüncənizə ideal uyğundur.',
			},
			{
				title: 'Kriptoqraf',
				why: 'Riyazi strukturları və onların zəif yerlərini anlamaq sırf intellektual maraq tələb edir. Bu sahədə hər yeni problem Sizin sevdiyiniz tipli tapmacadır.',
			},
			{
				title: 'Kəmiyyət analitiki (quant)',
				why: 'Maliyyə bazarlarını riyazi modellərlə izah etmək nəzəriyyəni praktik nəticəyə çevirməyə imkan verir və analitik gücünüzü birbaşa ölçülə bilən dəyərə çevirir.',
			},
			{
				title: 'Texniki yazıçı',
				why: 'Mürəkkəb sistemlərin necə işlədiyini dərindən anlayıb dəqiq strukturla yazmaq Sizin dəqiq ifadə sevginizdən istifadə edir və eyni zamanda ünsiyyət bacarığınızı inkişaf etdirir.',
			},
			{
				title: 'Süni intellekt tədqiqatçısı',
				why: 'Hələ cavabı olmayan fundamental suallar üzərində işləmək Sizin "niyə belədir?" sualı ilə yaşayan təbiətinizə cavab verir.',
			},
		],
		developmentPlan: {
			d30: [
				'Yarımçıq qalmış layihələrinizin siyahısını çıxarın və ən vacibini 30 gün ərzində bitirməyi qarşınıza məqsəd qoyun.',
				'Hər həftənin sonunda 15 dəqiqəlik "nə bitdi, nə qaldı" yoxlaması aparın və nəticələri qeyd edin.',
				'Bir texniki mövzunu sahədən kənar dostunuza 5 dəqiqə ərzində izah etməyi məşq edin.',
			],
			d90: [
				'Öyrəndiyiniz mövzu üzrə açıq kodlu layihə və ya bloq yazısı dərc edin.',
				'Komandada texniki təqdimat aparın, auditoriyanın suallarını qeyd edin və cavab üslubunuzu təhlil edin.',
				'Bir ideyanızı işlək prototipə çevirin və onu ən azı üç nəfərə sınamaq üçün verin.',
			],
			y1: [
				'Dərin ixtisaslaşmaq istədiyiniz sahəni seçin və onu təsdiqləyən sertifikat və ya magistratura proqramına başlayın.',
				'Tədqiqat və ya məhsul üzərində kiçik komandanın texniki liderliyini öz üzərinizə götürün.',
				'İl ərzində ən azı üç ideyanızı istifadəçilərə çatan tam məhsula və ya nəticəyə çevirin.',
			],
		},
		interviewTips: [
			'Sualı uzun-uzadı təhlil etməyə meyillisiniz — əvvəlcə 1–2 cümləlik qısa cavab verin, sonra "istəsəniz təfərrüatlandıra bilərəm" deyin.',
			'Düşünmək üçün fasilə lazım olanda bunu açıq deyin ki, susqunluğunuz qərarsızlıq kimi görünməsin.',
			'Bitirdiyiniz konkret layihələri nəticə rəqəmləri ilə hazırlayın — müsahiblər ideyalardan çox tamamlanmış işə baxırlar.',
			'Şirkətin prosesləri barədə tənqidi sualı nəzakətli maraq şəklində verin: "Bu qərarın arxasında hansı məntiq var?"',
		],
	},

	ENTJ: {
		code: 'ENTJ',
		idealEnvironment:
			'Sizin üçün ideal mühit iddialı məqsədlərin qoyulduğu, nəticənin şəffaf ölçüldüyü və irəliləmənin performansa bağlı olduğu yerdir. Sürətlə böyüyən şirkət, yeni bazara çıxan bank məhsulu və ya genişlənən regional şəbəkə kimi miqyas və təsir imkanı olan layihələr Sizi canlandırır. Qərarların tez verildiyi, lazımsız təsdiq zəncirinin olmadığı struktur Sizə daha uyğundur. Ambisiyası az, tempi yavaş təşkilatda isə özünüzü yerində sayan kimi hiss edirsiniz.',
		teamRole:
			'Komandada Siz təbii "sürətləndirici"siniz: müzakirə dairəvi hərəkət etməyə başlayanda onu qərara və icra planına çevirən Siz olursunuz. Kimin hansı işi daha yaxşı görəcəyini tez qiymətləndirir, resursları ona uyğun bölürsünüz. Formal rəhbər olmasanız belə, böhran anında komanda çox vaxt Sizə baxır. Bu rolun effektiv olması üçün başqalarının da liderlik göstərməsinə yer saxlamağınız vacibdir.',
		asManager:
			'Menecer kimi Siz yüksək standart, aydın KPI-lar və sürətli rəy mədəniyyəti yaradırsınız. Güclü əməkdaşları tez irəli çəkir, onlara çətin tapşırıqlar verirsiniz və bu, ambisiyalı insanları Sizə bağlayır. Risk isə komandanın yorğunluğunu gec görməkdir: Sizin üçün normal olan temp başqaları üçün tükənmə həddi ola bilər. Rüblük "temp yoxlaması" söhbətləri və ara uğurların qeyd olunması komandanın enerjisini qoruyar.',
		decisionMaking:
			'Siz qərarları tez, məqsəd və effektivlik meyarları ilə verirsiniz; qərarsızlığı səhv qərardan daha böyük risk hesab edirsiniz. Məlumatın 70–80%-i əlinizdə olanda addım atmağa hazırsınız və bu, dinamik mühitdə böyük üstünlükdür. Lakin bəzən qərarı icra edəcək insanların fikri kifayət qədər soruşulmur və icra mərhələsində müqavimət yaranır. Böyük qərarlardan əvvəl "Bunu kim icra edəcək və o nə düşünür?" sualını sistemli şəkildə verin.',
		learningStyle:
			'Siz məqsədyönlü öyrənirsiniz: bilik konkret nəticəyə çatmaq üçün lazım olanda onu ən sürətlə mənimsəyirsiniz. Real biznes keysləri, uğurlu liderlərin təcrübəsi və müzakirə formatlı seminarlar Sizə passiv mühazirədən çox şey verir. Öyrəndiyinizi dərhal tətbiq etməyə — yeni idarəetmə metodunu növbəti həftə komandada sınamağa — meyillisiniz. Praktik faydası dərhal görünməyən nəzəri mövzulara isə səbriniz azdır, halbuki uzunmüddətli strategiya üçün onlar da lazımdır.',
		conflict:
			'Münaqişədə Siz birbaşa və sürətli hərəkət edir, problemi masaya qoyub dərhal həll etmək istəyirsiniz. Bu açıqlıq dəyərlidir, lakin qarşı tərəf hücuma məruz qaldığını hiss edəndə söhbət güc mübarizəsinə çevrilə bilər. Gərgin söhbətdə əvvəlcə suallar verin, öz mövqeyinizi isə sonra bildirin. Mübahisədə qalib gəlməkdən çox, münasibəti növbəti layihəyə qədər qorumağı hədəf seçin.',
		motivators: [
			'Böyük miqyaslı, çətin və ölçülə bilən məqsədlər',
			'Qərar vermək və resursları idarə etmək səlahiyyəti',
			'Sürətli karyera yüksəlişi və performansın tanınması',
			'Ambisiyalı, səriştəli insanlarla birgə işləmək',
			'Strategiyanın bazarda real nəticəyə çevrildiyini görmək',
		],
		demotivators: [
			'Qərarların sonsuz təsdiq zəncirində ilişib qalması',
			'Məsuliyyət götürməyən və bəhanə gətirən mühit',
			'Aydın məqsədi olmayan layihələr',
			'Təşəbbüs göstərməyə imkan verməyən sərt iyerarxiya',
		],
		underPressureTips: [
			'Hər şeyi özünüz etmək istəyini fərq edin və ən azı iki tapşırığı etibarlı insana ötürün.',
			'Gərgin dövrdə idmanı və ya gəzintini təqvimə iş görüşü kimi yazın.',
			'Kəskin e-poçt və ya mesaj yazmazdan əvvəl onu bir saat gözlədin.',
			'Komandaya vəziyyəti açıq izah edin — insanlar konteksti bildikdə Sizə daha çox dəstək olurlar.',
		],
		careerPaths: [
			{
				title: 'Əməliyyatlar direktoru (COO)',
				why: 'Şirkətin bütün proseslərini vahid sistem kimi qurub nəticəyə yönəltmək Sizin təşkilatçılıq və strateji düşüncənizin ən dolğun tətbiqidir.',
			},
			{
				title: 'Vençur investoru',
				why: 'Startapların potensialını tez qiymətləndirmək, cəsarətli qərar vermək və təsisçilərə strateji istiqamət göstərmək Sizin qətiyyətinizə və böyük mənzərəni görmə bacarığınıza uyğundur.',
			},
			{
				title: 'Korporativ hüquqşünas (birləşmə və satınalmalar)',
				why: 'Yüksək riskli danışıqlarda məntiqi arqument və qətiyyət nəticəni birbaşa müəyyən edir. Bu sahə Sizi həm intellektual, həm də rəqabət baxımından stimullaşdırır.',
			},
			{
				title: 'Böyük infrastruktur layihəsinin rəhbəri',
				why: 'Yüzlərlə insanı, böyük büdcəni və son tarixləri eyni anda idarə etmək Sizin miqyas sevginizə və icraya nəzarət bacarığınıza cavab verir.',
			},
			{
				title: 'Biznes transformasiyası məsləhətçisi',
				why: 'Səmərəsiz təşkilatı təhlil edib yenidən qurmaq Sizin səmərəsizliyi tez görmə və dəyişikliyi irəli aparma qabiliyyətinizə birbaşa uyğundur.',
			},
		],
		developmentPlan: {
			d30: [
				'Bir həftə ərzində verdiyiniz bütün göstərişləri qeyd edin və onlardan hansının sual şəklində verilə biləcəyini təhlil edin.',
				'Komandanızdan qısa anonim sorğu ilə rəhbərlik üslubunuz barədə rəy toplayın.',
				'Komanda üzvlərinin hər biri ilə 15 dəqiqəlik təkbətək görüş keçirib onların karyera məqsədlərini öyrənin.',
			],
			d90: [
				'Bir komanda üzvünü Sizin yerinizə layihəyə rəhbərlik etməyə hazırlayın və nəticəni ona həvalə edin.',
				'Liderlik və ya emosional intellekt üzrə praktik təlim proqramını bitirin.',
				'Sorğu nəticələrinə əsasən rəhbərlik üslubunuzda bir dəyişiklik edin və 90 gün sonra yenidən ölçün.',
			],
			y1: [
				'Strateji səviyyədə qərar verdiyiniz rola — şöbə rəhbəri və ya biznes vahidinin meneceri — keçməyi hədəfləyin.',
				'MBA və ya icraçı idarəetmə proqramının imkanlarını araşdırıb əsaslandırılmış qərar verin.',
				'Sizdən sonra rolunuzu götürə biləcək ən azı bir lider yetişdirin.',
			],
		},
		interviewTips: [
			'Özünəinamınız müsahibədə üstünlükdür, lakin dominant görünməmək üçün sualı sonadək dinləyin və müsahibin sözünü kəsməyin.',
			'Uğurlarınızı danışarkən "mən" ilə yanaşı "biz" də deyin və komandanın töhfəsini konkret adlandırın.',
			'Səhv etdiyiniz və ondan dərs çıxardığınız bir hadisəni hazırlayın — bu, Sizi daha inandırıcı edir.',
			'İlk görüşdə vəzifə və maaş barədə danışmağa tələsməyin; əvvəlcə şirkətin məqsədlərinə marağınızı göstərin.',
		],
	},

	ENTP: {
		code: 'ENTP',
		idealEnvironment:
			'Sizin üçün ideal mühit dəyişikliyin norma olduğu, eksperimentin isə təşviq edildiyi yerdir. Startap, yeni məhsul komandası və ya innovasiya laboratoriyası kimi "bunu heç kim etməyib, gəlin sınayaq" deyilən mühitdə enerjiniz tükənmir. Eyni gündə fərqli sahələrdən olan insanlarla — dizaynerlərlə, mühəndislərlə, satış komandası ilə — işləmək Sizə maraqlıdır. Ciddi protokolların hər addımı müəyyən etdiyi təşkilatda isə tez darıxır və ya qaydaları sual altına qoymağa başlayırsınız.',
		teamRole:
			'Komandada Siz "fikir katalizatoru"sunuz: hər kəs razılaşanda belə, "Bəs tərsinə etsək?" sualı ilə yeni imkan açırsınız. Komandanı rahatlıq zonasından çıxarır, ilk versiyanı tez ortaya qoyub müzakirəni canlandırırsınız. Dəyəriniz xüsusilə layihənin başlanğıcında və standart həllərin işləmədiyi böhran anında üzə çıxır. İcra mərhələsində isə ardıcıl və detallı həmkarla cütləşmək nəticəni təmin edir.',
		asManager:
			'Menecer kimi Siz komandada açıq müzakirə və cəsarətli ideya mədəniyyəti yaradırsınız; insanlar Sizin yanınızda "sadəlövh sual" verməkdən çəkinmirlər. Komandanı daim yeni imkanlara yönəldir, onların yaradıcılığını üzə çıxarırsınız. Risk isə prioritetlərin tez-tez dəyişməsidir: Sizin üçün maraqlı olan yeni ideya komanda üçün yarımçıq qalan iş deməkdir. Rüblük əsas prioritetləri yazılı sabitləşdirmək və yeni ideyaları "növbəti rüb" siyahısına yığmaq komandanın fokusunu qoruyur.',
		decisionMaking:
			'Siz qərarları imkanlar və məntiq əsasında verirsiniz: hər variantı ağılda sınaqdan keçirir, onun gözlənilməz nəticələrini düşünürsünüz. Çox variant görmək Sizə üstünlük verir, lakin daha maraqlı seçim çıxacağı ümidi ilə qərarı uzun müddət açıq saxlaya bilərsiniz. Kiçik və tez sınaqlar Sizin qərar üslubunuza ən uyğun yoldur: iki variantı bir həftəlik mini-eksperimentlə müqayisə edin. Seçimi etdikdən sonra isə onu razılaşdırılmış müddət ərzində dəyişməməyə söz verin.',
		learningStyle:
			'Siz ən yaxşı müzakirə və mübahisə vasitəsilə öyrənirsiniz: yeni mövzunu müəllimlə və ya həmkarla "dartışanda" o, yaddaşınızda möhkəmlənir. Fərqli sahələri birləşdirmək — məsələn, psixologiyanı marketinqə, iqtisadiyyatı texnologiyaya tətbiq etmək — Sizə xüsusi zövq verir. Sürətli başlanğıc etsəniz də, mövzunun darıxdırıcı orta mərhələsində marağınız azalır. Öyrənməni real layihəyə, yarışmaya və ya hakatona bağlamaq Sizi sona qədər aparır.',
		conflict:
			'Siz münaqişədən qorxmursunuz; hətta fikir ayrılığını maraqlı intellektual oyun kimi görə bilərsiniz. Lakin başqaları üçün eyni mübahisə emosional yük daşıya bilər və hazırcavab arqumentləriniz onları müdafiə mövqeyinə keçirir. Gərginliyin artdığını görəndə arqumentdən insana keçin: "Bu məsələ Sizin üçün niyə vacibdir?" deyə soruşun. Bəzən mübahisəni uduzmaq münasibəti qazanmaq deməkdir.',
		motivators: [
			'Heç kimin sınamadığı yanaşmanı test etmək',
			'Müxtəlif və daim dəyişən tapşırıqlar',
			'Fikrinizə meydan oxuyan ağıllı həmkarlar',
			'Qaydaları təkmilləşdirmək üçün açıq qapı',
			'İdeyanın sürətlə prototipə çevrildiyini görmək',
		],
		demotivators: [
			'Hər addımın əvvəlcədən yazıldığı sərt prosedurlar',
			'Eyni hesabatın hər həftə təkrarlanması',
			'"Həmişə belə etmişik" cavabı',
			'Fikir ayrılığının sədaqətsizlik kimi qəbul edildiyi mühit',
		],
		underPressureTips: [
			'Açıq layihələrin hamısını bir siyahıya yazın və bu həftə üçün yalnız ikisini seçin.',
			'Yeni ideya ağlınıza gələndə ona dərhal başlamaq əvəzinə onu "ideya bankı" qeydinə yazın.',
			'İşin darıxdırıcı hissəsi üçün özünüzə 25 dəqiqəlik qısa fokus sessiyaları təyin edin.',
			'Xırda detallara ilişib narahat olduğunuzu fərq edəndə bir dostunuzla vəziyyəti qısaca müzakirə edib miqyası yenidən dəyərləndirin.',
		],
		careerPaths: [
			{
				title: 'Startap təsisçisi',
				why: 'Yeni bazarı kəşf etmək, məhsulu tez-tez yeniləmək və investorları inandırmaq Sizin yaradıcılığınızdan, risk iştahınızdan və natiqliyinizdən birbaşa istifadə edir.',
			},
			{
				title: 'İnnovasiya meneceri',
				why: 'Böyük şirkətin içində yeni ideyaları sınaqdan keçirmək və köhnə prosesləri sual altına qoymaq Sizin təbii rolunuzu rəsmi vəzifəyə çevirir.',
			},
			{
				title: 'Arbitraj üzrə hüquqşünas',
				why: 'Hər işdə fərqli arqument strategiyası qurmaq və rəqib mövqeyin zəif tərəflərini tapmaq Sizin hazırcavablığınıza və debat bacarığınıza ideal uyğundur.',
			},
			{
				title: 'UX strateqi',
				why: 'İstifadəçi davranışını, texnologiyanı və biznes məqsədlərini birləşdirib yeni həll yaratmaq Sizin fərqli sahələri əlaqələndirmə bacarığınızı tələb edir.',
			},
			{
				title: 'Podkast aparıcısı və ya ictimai şərhçi',
				why: 'Mürəkkəb mövzuları maraqlı formatda müzakirə etmək və fərqli baxışları qarşılaşdırmaq Sizə həm intellektual, həm də ünsiyyət baxımından enerji verir.',
			},
		],
		developmentPlan: {
			d30: [
				'Bir həftə ərzində Sizə enerji verən və enerjinizi alan işləri qeyd edin və nəticəyə görə iş gününüzü yenidən qurun.',
				'Hər gün üçün maksimum üç əsas tapşırıq yazın və günün sonunda nəticəni qeyd edin.',
				'Mübahisəyə girməzdən əvvəl qarşı tərəfin mövqeyini onun razı qalacağı şəkildə ümumiləşdirməyi məşq edin.',
			],
			d90: [
				'Bir ideyanızı minimal versiyada (prototip, pilot və ya kiçik kampaniya) real istifadəçilər üzərində sınayın və nəticəni ölçün.',
				'Layihə idarəçiliyinin əsasları üzrə qısa kurs keçin və öyrəndiyiniz bir aləti komandada tətbiq edin.',
				'Detallara güclü həmkarla birgə iş qaydası qurun: kimin nəyə cavabdeh olduğunu yazılı razılaşdırın.',
			],
			y1: [
				'Bir layihəni ideyadan tam icraya və ölçülə bilən nəticəyə qədər aparın — bu, CV-nizdə ən güclü sübut olacaq.',
				'Natiqlik bacarığınızı konfrans, universitet tədbiri və ya peşəkar icmada çıxışlarla görünən edin.',
				'Uzunmüddətli karyera istiqamətinizi seçin və növbəti üç il üçün yazılı yol xəritəsi hazırlayın.',
			],
		},
		interviewTips: [
			'Müsahibədə mövzudan-mövzuya keçmək meyliniz var — hər cavabı bir əsas fikir və bir nümunə ilə məhdudlaşdırın.',
			'Müsahiblə fikir ayrılığınız olsa belə, tonunuzu maraq üzərində saxlayın; bu, debat deyil, tanışlıq söhbətidir.',
			'Yaradıcılığınızı göstərərkən mütləq tamamlanmış nəticəni də deyin: "ideya → icra → rəqəm".',
			'Rutin tapşırıqlar barədə soruşulanda dürüst olun, lakin onları necə səmərəli etdiyinizi göstərin.',
		],
	},

	// ---------- Diplomatlar (NF) ----------
	INFJ: {
		code: 'INFJ',
		idealEnvironment:
			'Sizin üçün ideal mühit işin daha böyük məqsədə xidmət etdiyi, dəyərlərin sözdə deyil, əməldə yaşadığı yerdir. Təhsil təşəbbüsü, sosial təsir layihəsi, səhiyyədə pasiyent təcrübəsi və ya şirkətdə əməkdaşların inkişaf proqramı kimi insanlara uzunmüddətli fayda verən işlər Sizi doyurur. Dərin fokus üçün sakit iş yeri, kiçik və etibarlı komanda, rəhbərlə səmimi münasibət Sizə çox şey qazandırır. Ofis siyasətinin və səthi rəqabətin hökm sürdüyü mühitdə isə enerjinizi tez itirirsiniz.',
		teamRole:
			'Komandada Siz həm "vicdan", həm də "uzaqgörən" rolunu oynayırsınız: qərarın insanlara və təşkilatın uzunmüddətli nüfuzuna təsirini hamıdan əvvəl hiss edirsiniz. Komandadakı gizli gərginliyi və narazılığı tez sezir, onu sakitcə həll etməyə çalışırsınız. Mürəkkəb ideyaları təsirli mətnə, təqdimata və ya vizyon sənədinə çevirmək Sizin xüsusi töhfənizdir. Lakin bu "görünməz iş" çox vaxt qiymətləndirilmir, ona görə də töhfənizi adlandırmağı unutmayın.',
		asManager:
			'Menecer kimi Siz hər əməkdaşı fərd kimi tanıyır, onun inkişafı üçün fərdi yol düşünürsünüz. İnsanlar yanınızda özlərini eşidilmiş və dəyərli hiss edirlər, bu da komandada yüksək sədaqət yaradır. Çətinlik zəif performans barədə açıq söhbətdə yaranır: problemi uzun müddət yumşaq işarələrlə həll etməyə çalışırsınız. Gözləntiləri yazılı və aydın meyarlarla qoymaq həm Sizi, həm də komandanı qeyri-müəyyənlikdən qoruyur.',
		decisionMaking:
			'Siz qərarları daxili əminlik hissi ilə verirsiniz: çox vaxt nəticəni haradan bildiyinizi izah edə bilməsəniz də, düzgün yolu hiss edirsiniz. Bu intuitiv mühakimə dəyərlərlə birləşəndə güclü olur, lakin faktlarla yoxlanılmadıqda başqalarını inandırmaq çətinləşir. Qərarınızı rəqəmlərlə və konkret dəlillərlə dəstəkləmək onun qəbulunu sürətləndirir. Həmçinin, mükəmməl variantı axtararkən "kifayət qədər yaxşı" seçimin vaxtını ötürməyin.',
		learningStyle:
			'Siz ən yaxşı mövzunun mənasını və insanlara təsirini anlayanda öyrənirsiniz; hekayəyə bağlanmayan quru faktlar yaddaşda qalmır. Sakit mühitdə oxumaq, qeyd aparmaq və öyrəndiyinizi esse kimi ümumiləşdirmək Sizə çox kömək edir. Bir-iki etibarlı insanla dərin müzakirə böyük qrup dərsindən daha səmərəlidir. Mövzunu öz dəyərlərinizlə və gələcək məqsədinizlə əlaqələndirəndə motivasiyanız uzun müddət davam edir.',
		conflict:
			'Münaqişədə Siz əvvəlcə harmoniyanı qorumaq üçün güzəştə gedir, narazılığı içinizdə saxlayırsınız. Lakin dəyərlərinizə toxunulanda gözlənilmədən qəti mövqe tutur, bəzən münasibəti birdəfəlik bağlayırsınız. Bu kəskin dönüş qarşı tərəf üçün anlaşılmaz olur, çünki o, əvvəlki siqnalları görməyib. Özünüzə sadə qayda qoyun: eyni narahatlığı ikinci dəfə hiss edirsinizsə, artıq danışmaq vaxtıdır.',
		motivators: [
			'İşin insanların həyatında real dəyişiklik yaratdığını görmək',
			'Uzunmüddətli vizyon üzərində müstəqil işləmək',
			'Dəyərlərinizi bölüşən kiçik, səmimi komanda',
			'Yaradıcı və yazılı ifadə imkanı',
			'Başqasının inkişafına şahid olmaq və ona töhfə vermək',
		],
		demotivators: [
			'Etik baxımdan şübhəli göstərişlər',
			'Səthi, yalnız rəqəmlə ölçülən məqsədlər',
			'Səs-küylü, daim kəsilən iş mühiti',
			'Gizli niyyətlər və ofis siyasəti',
		],
		underPressureTips: [
			'Gün ərzində ən azı 30 dəqiqəlik tam sakit, ekransız vaxt ayırın.',
			'Hisslərinizi gündəliyə yazın — fikri kağıza köçürmək onun ağırlığını azaldır.',
			'Bu həftəki öhdəliklərinizi nəzərdən keçirin və ən az vacib olanı ertələyin.',
			'Hər şeyi qaranlıq gördüyünüz anda faktlar siyahısı yazın: nə həqiqətən baş verib, nə isə yalnız ehtimaldır?',
		],
		careerPaths: [
			{
				title: 'Klinik psixoloq',
				why: 'İnsanın deyilməyən hisslərini anlamaq və onunla birgə uzunmüddətli dəyişiklik yolu qurmaq Sizin dərin empatiyanıza və uzaqgörənliyinizə uyğundur.',
			},
			{
				title: 'Təşkilati inkişaf mütəxəssisi',
				why: 'Şirkətin mədəniyyətini, dəyərlərini və əməkdaşların inkişaf yolunu dizayn etmək həm strateji, həm də insanyönümlü düşüncənizi birləşdirir.',
			},
			{
				title: 'Ssenari müəllifi',
				why: 'İnsan motivlərini dərindən hiss etmək və onları təsirli hekayəyə çevirmək Sizin yazılı ifadə gücünüzdən tam istifadə edir.',
			},
			{
				title: 'Mediator (vasitəçi)',
				why: 'Tərəflərin gizli maraqlarını görmək və onları ortaq həllə yönəltmək Sizin sakit, lakin dərin anlama bacarığınızı tələb edir.',
			},
			{
				title: 'Təhsil proqramı dizayneri',
				why: 'Tələbələrin necə öyrəndiyini anlamaq və onların potensialını açan kurikulum qurmaq Sizin mənalı vizyonunuzu və planlı iş bacarığınızı birləşdirir.',
			},
		],
		developmentPlan: {
			d30: [
				'Hər iş gününün sonunda üç cümləlik qeyd yazın: nə etdim, nə hiss etdim, sabah nəyə fokuslanacağam.',
				'İş saatlarınızın bitmə vaxtını müəyyən edin və iş mesajlarını həmin saatdan sonra yoxlamayın.',
				'Gördüyünüz bir "görünməz" işi (məsələn, komandada gərginliyi aradan qaldırmağı) rəhbərinizə konkret şəkildə bildirin.',
			],
			d90: [
				'Vizyonunuzla bağlı kiçik layihəyə başlayın və onun ilk nəticəsini rəqəmlərlə ölçün.',
				'İdeyalarınızı qrup qarşısında daha inamla təqdim etmək üçün natiqlik və ya fasilitasiya üzrə praktik təlim keçin.',
				'Rəhbər və ya mentorla müntəzəm görüşlər qurun və karyera məqsədlərinizi açıq müzakirə edin.',
			],
			y1: [
				'Mənalı hesab etdiyiniz sahədə (təhsil, psixologiya, sosial layihələr) ixtisasınızı təsdiqləyən sertifikat və ya magistratura proqramına başlayın.',
				'Sahənizdə dərin yazılı material — məqalə, bələdçi və ya araşdırma — dərc edin.',
				'İl ərzində yorğunluq əlamətlərinizi izləyin və balansı qoruyan şəxsi qaydalar toplusu hazırlayın.',
			],
		},
		interviewTips: [
			'Təvazökarlığınız güclü tərəflərinizi gizlədə bilər — ən azı üç uğurunuzu nəticəsi ilə birlikdə əvvəlcədən hazırlayın.',
			'Şirkətin missiyası və dəyərləri barədə səmimi sual verin; bu, motivasiyanızı aydın göstərir.',
			'Mücərrəd vizyondan danışarkən hər fikri konkret nümunə ilə tamamlayın.',
			'Münaqişə ilə bağlı suala harmoniyanı qoruduğunuz nümunə ilə yanaşı, çətin söhbəti apardığınız nümunə də gətirin.',
		],
	},

	INFP: {
		code: 'INFP',
		idealEnvironment:
			'Sizin üçün ideal mühit özünüz ola bildiyiniz, işinizin dəyərlərinizlə ziddiyyət təşkil etmədiyi yerdir. Kreativ agentlik, nəşriyyat, qeyri-hökumət təşkilatı, oyun studiyası və ya təhsil platforması kimi məzmun və məna yaradan komandalar Sizə xüsusilə uyğundur. Müstəqil işləmək, öz tempinizi seçmək və nəticəni sərbəst formada təqdim etmək imkanı Sizi açır. Hər şeyin yalnız satış rəqəmi ilə ölçüldüyü, rəqabətin açıq toqquşmaya çevrildiyi mühitdə isə daxilən geri çəkilirsiniz.',
		teamRole:
			'Komandada Siz "insan baxışının səsi"siniz: məhsulun, kampaniyanın və ya qərarın son istifadəçidə hansı hissi oyadacağını düşünən Siz olursunuz. Yaradıcı ideyalar, orijinal mətnlər və emosional təsirli təqdimatlar Sizin xüsusi töhfənizdir. Kənarda qalan və ya səsi eşidilməyən insanlara diqqət yetirir, onların fikrini ortaya çıxarırsınız. Fikirlərinizin itməməsi üçün onları yazılı şəkildə paylaşmaq Sizə ən rahat yoldur.',
		asManager:
			'Menecer kimi Siz hər əməkdaşın fərdiliyinə hörmət edən, onları özləri olmağa həvəsləndirən rəhbərsiniz. Komandanızda psixoloji təhlükəsizlik yüksək olur və insanlar səhvlərini gizlətmədən danışırlar. Çətinlik isə aydın son tarixlər qoymaqda və zəif işi açıq qiymətləndirməkdə yaranır. Sadə həftəlik yoxlama sistemi və əvvəlcədən razılaşdırılmış keyfiyyət meyarları Sizə sərt görünmədən nəticə tələb etməyə imkan verir.',
		decisionMaking:
			'Siz qərarları daxili dəyərlər kompası ilə verirsiniz: seçim "bu, mənə düzgün gəlirmi?" sualından keçməlidir. Dəyərlərə aid məsələlərdə çox qətiyyətli olsanız da, praktik qərarlarda — hansı iş təklifini seçmək, hansı layihəyə başlamaq — uzun müddət tərəddüd edə bilərsiniz. Hər variant üçün "bu, mənim üç əsas dəyərimə nə dərəcədə uyğundur?" cədvəli qurmaq qərarı sürətləndirir. Qərarı verdikdən sonra onu "daha yaxşı ola bilərdi" deyə təkrar-təkrar yoxlamaqdan çəkinin.',
		learningStyle:
			'Siz ən yaxşı mövzuya şəxsi maraq və ya məna bağlayanda öyrənirsiniz; maraqsız mövzunu isə məcburiyyətlə çətin mənimsəyirsiniz. Oxumaq, yazmaq və öyrəndiyinizi öz sözlərinizlə yenidən ifadə etmək Sizin üçün ən güclü üsuldur. Rəqabətli, yüksək təzyiqli imtahan mühiti bacarığınızı tam göstərməyə mane ola bilər, ona görə də sakit, fərdi hazırlıq daha yaxşı nəticə verir. Öyrənmə prosesini yaradıcı məhsulla — esse, video və ya illüstrasiya ilə — bitirmək biliyi möhkəmləndirir.',
		conflict:
			'Münaqişədə Siz əvvəlcə susur, gərginliyi azaltmaq üçün güzəştə gedirsiniz. Lakin dəyərləriniz pozulanda gözlənilmədən qəti və emosional mövqe tuta bilərsiniz. Problem çox vaxt ondadır ki, narahatlığınızı uzun müddət dilə gətirmədiyiniz üçün qarşı tərəf nə baş verdiyini anlamır. Hisslərinizi "Mən ... hiss edirəm, çünki mənim üçün ... vacibdir" formasında ifadə etmək söhbəti ittiham deyil, anlaşma müstəvisində saxlayır.',
		motivators: [
			'İşinizin dəyərlərinizə uyğun olduğunu bilmək',
			'Yaradıcı sərbəstlik və özünüifadə imkanı',
			'Kiminsə həyatına müsbət toxunduğunuzu görmək',
			'Mehriban, mühakimə etməyən komanda',
			'Öz tempinizlə dərin işləmək üçün vaxt',
		],
		demotivators: [
			'Dəyərlərinizə zidd olan tapşırıqlar',
			'Daimi müqayisə və açıq rəqabət',
			'Sərt mikroidarəetmə',
			'Səmimiyyətsiz, yalnız görüntü üçün aparılan korporativ ünsiyyət',
		],
		underPressureTips: [
			'Özünüzü tənqid etdiyiniz anda dostunuza nə deyəcəyinizi düşünün və eyni sözləri özünüzə deyin.',
			'Böyük tapşırığı ən kiçik ilk addıma qədər bölün və yalnız onu bitirin.',
			'Gündə qısa yaradıcı fasilə — rəsm, musiqi, gəzinti — ayırın; bu, enerjinizi bərpa edir.',
			'Başqalarına qarşı sərtləşdiyinizi hiss edəndə söhbəti sabaha saxlayın və əvvəlcə dincəlin.',
		],
		careerPaths: [
			{
				title: 'UX yazıçısı',
				why: 'Məhsulun istifadəçi ilə danışdığı dili insani və aydın etmək Sizin empatiyanızı və yazı bacarığınızı birbaşa dəyərə çevirir.',
			},
			{
				title: 'Art-terapevt',
				why: 'Yaradıcılığı insanlara kömək vasitəsi kimi istifadə etmək Sizin iki əsas gücünüzü — təxəyyülü və mərhəməti — birləşdirir.',
			},
			{
				title: 'Oyun narrativ dizayneri',
				why: 'Personajlar, dünyalar və emosional hekayə xətləri qurmaq Sizin zəngin təxəyyülünüzə geniş meydan verir.',
			},
			{
				title: 'QHT-də kommunikasiya mütəxəssisi',
				why: 'İnandığınız səbəb üçün təsirli mesajlar yazmaq Sizə həm yaradıcı, həm də mənəvi məmnunluq gətirir.',
			},
			{
				title: 'Kitab redaktoru',
				why: 'Müəllifin səsini qoruyaraq mətni daha güclü etmək həssaslıq, dil duyumu və səbir tələb edir — bunlar Sizin təbii keyfiyyətlərinizdir.',
			},
		],
		developmentPlan: {
			d30: [
				'Karyeranız üçün vacib bir sənədi (CV və ya motivasiya məktubu) bu ay tam yeniləyin.',
				'Üç əsas dəyərinizi yazın və onları karyera seçimlərində istifadə edəcəyiniz meyar kimi saxlayın.',
				'Sizə ilham verən sahədə çalışan bir peşəkarla 20 dəqiqəlik məlumat görüşü təşkil edin.',
			],
			d90: [
				'Yaradıcı işlərinizdən ibarət onlayn portfolio hazırlayın və ən azı beş nümunə əlavə edin.',
				'Rəqəmsal marketinq, UX və ya redaktə kimi yaradıcılığınızı peşəyə çevirən praktik kursu bitirin.',
				'Ertələdiyiniz çətin, lakin vacib söhbəti planlayın və onu "Mən" cümlələri ilə aparın.',
			],
			y1: [
				'Dəyərlərinizə uyğun sahədə təcrübə proqramı, könüllülük və ya ilk peşəkar iş yerini təmin edin.',
				'Peşəkar şəbəkənizi genişləndirmək üçün ən azı beş sahə mütəxəssisi ilə davamlı əlaqə qurun.',
				'İl ərzində ən azı bir böyük yaradıcı layihəni (kitab fəsli, qısa film, sərgi və ya kurs) tam bitirin.',
			],
		},
		interviewTips: [
			'Təvazökarlığınız bacarıqlarınızı kölgədə qoya bilər — portfolio nümunələrini göstərərək danışın.',
			'Hisslərə əsaslanan cavabları konkret nəticə ilə tamamlayın: "Bu layihə nəticəsində 200 nəfər ..."',
			'Şirkətin dəyərləri barədə soruşmaqdan çəkinməyin; bu, uyğunluğu yoxlamağın düzgün yoludur.',
			'Stresli suallarda tələsməyin: bir nəfəs alıb sakit cavab vermək gərginliyi azaldır.',
		],
	},

	ENFJ: {
		code: 'ENFJ',
		idealEnvironment:
			'Sizin üçün ideal mühit insanların inkişafının təşkilatın əsas prioriteti olduğu və komanda ruhunun güclü olduğu yerdir. Universitet, təlim mərkəzi, sürətlə böyüyən şirkətin insan resursları şöbəsi və ya ictimai layihə kimi insanları birləşdirmək və yönləndirmək tələb edən mühitlər Sizi canlandırır. Missiyanın aydın olması və rəhbərliyin dəyərləri əməldə nümayiş etdirməsi Sizin üçün çox vacibdir. İnsanların bir-birinə soyuq və rəqabətli yanaşdığı mühitdə isə həm narahat olur, həm də onu dəyişməyə çalışıb yorulursunuz.',
		teamRole:
			'Komandada Siz "birləşdirici" və "motivator"sunuz: hər kəsin güclü tərəfini görür, onu doğru tapşırığa yönəldirsiniz. Komandanın əhvalını izləyir, kimin yorulduğunu və kimin kənarda qaldığını ilk fərq edən olursunuz. Təqdimatlar, danışıqlar və maraqlı tərəflərlə ünsiyyət çox vaxt təbii olaraq Sizin üzərinizə düşür. Bu rolda öz tapşırıqlarınızın arxa plana keçməməsinə diqqət edin.',
		asManager:
			'Menecer kimi Siz komandanın potensialını üzə çıxaran, fərdi inkişaf planları quran və uğurları açıq qeyd edən rəhbərsiniz. İnsanlar Sizin üçün daha çox çalışmaq istəyirlər, çünki onlara inandığınızı hiss edirlər. Çətinlik isə hər kəsin problemini özünüz həll etməyə çalışmaqdır: bu, həm Sizi yorur, həm də komandanın müstəqilliyini azaldır. "Sən necə həll edərdin?" sualını tez-tez vermək komandanı gücləndirir.',
		decisionMaking:
			'Siz qərarları insanlara təsir və ümumi məqsəd əsasında verirsiniz; qərarın qrupda necə qarşılanacağını əvvəlcədən hiss edirsiniz. Bu, icranı asanlaşdırır, çünki insanlar özlərini nəzərə alınmış hiss edirlər. Lakin hər kəsi razı salmaq istəyi bəzən məntiqi baxımdan zəif kompromislərə gətirib çıxarır. Qərar verməzdən əvvəl ona rəqəmlər və obyektiv meyarlar baxımından da baxın, sonra insanlara necə çatdıracağınızı planlaşdırın.',
		learningStyle:
			'Siz ən yaxşı insanlarla birlikdə — qrup layihəsində, müzakirədə, mentorla — öyrənirsiniz. Öyrəndiyinizi başqasına izah etmək biliyinizi möhkəmləndirir, ona görə də təlim aparmaq Sizin üçün həm də öyrənmə üsuludur. Mövzunun insanlara necə fayda verəcəyini gördükdə marağınız artır. Uzun müddət tək başına quru materialla işləmək isə Sizə ağır gəlir, buna görə öyrənmə qrupu yaratmaq faydalıdır.',
		conflict:
			'Münaqişədə Siz vasitəçi rolunu üzərinizə götürür, tərəfləri dinləyib ortaq məxrəc axtarırsınız. Başqalarının münaqişəsini həll etməkdə çox güclü olsanız da, özünüzün iştirak etdiyi münaqişədə incimək və rədd olunmaq qorxusu Sizi geri çəkə bilər. Bəzən harmoniyanı qorumaq üçün öz mövqeyinizdən vaxtından əvvəl imtina edirsiniz. Mövqeyinizi açıq deməyin münasibəti korlamadığını, əksinə ona hörmət qatdığını xatırlayın.',
		motivators: [
			'Başqalarının Sizin dəstəyinizlə böyüdüyünü görmək',
			'Mənalı missiya ətrafında birləşmiş komanda',
			'Təqdimat etmək və insanlara təsir göstərmək imkanı',
			'Səmimi minnətdarlıq və tanınma',
			'Komanda və təşkilat mədəniyyətini formalaşdırmaq',
		],
		demotivators: [
			'Soyuq, yalnız rəqəmlərə fokuslanan idarəetmə',
			'Komandada davamlı gərginlik və dedi-qodu',
			'Töhfənizin görünməz qaldığı vəziyyətlər',
			'Uzun müddət tək və insanlardan təcrid işləmək',
		],
		underPressureTips: [
			'Başqalarının problemlərini bir müddət kənara qoyun və öz siyahınızdakı ən vacib işə fokuslanın.',
			'Gün ərzində ən azı bir dəfə özünüzə "Mən indi nə hiss edirəm?" sualını verin.',
			'Gün ərzində ən azı bir saat telefonunuzu səssiz rejimə keçirin və mesajlara dərhal cavab verməyin.',
			'Tənqid aldığınızda cavab verməzdən əvvəl bir gün gözləyin və onu faktlar baxımından yenidən oxuyun.',
		],
		careerPaths: [
			{
				title: 'Korporativ təlim və inkişaf meneceri',
				why: 'Əməkdaşların potensialını görmək və onların inkişaf proqramını qurmaq Sizin mentorluq təbiətinizin peşəkar formasıdır.',
			},
			{
				title: 'Liderlik kouçu',
				why: 'Rəhbərlərin güclü tərəflərini üzə çıxarmaq və onları dəyişikliyə ruhlandırmaq Sizin empatiya və ruhlandırma bacarığınızdan tam istifadə edir.',
			},
			{
				title: 'Universitetdə tələbə həyatı üzrə rəhbər',
				why: 'Gənclərin akademik və şəxsi inkişafını dəstəkləyən proqramlar qurmaq Sizin insanları birləşdirmə və təşkilatçılıq bacarığınıza uyğundur.',
			},
			{
				title: 'Fandreyzinq meneceri',
				why: 'İnsanları mənalı layihəyə inandırmaq və donorlarla uzunmüddətli münasibət qurmaq Sizin təsirli ünsiyyətinizə və səmimiyyətinizə əsaslanır.',
			},
			{
				title: 'İşəgötürən brendi mütəxəssisi',
				why: 'Şirkətin mədəniyyətini və dəyərlərini potensial namizədlərə təsirli şəkildə çatdırmaq Sizin insanları anlama və ünsiyyət gücünüzü birləşdirir.',
			},
		],
		developmentPlan: {
			d30: [
				'Bu ay yalnız öz karyeranız üçün bir konkret addım atın: kursa yazılın, müraciət göndərin və ya mentorla görüşün.',
				'İclasda bir dəfə qəsdən çoxluğun fikrinə zidd, lakin əsaslandırılmış mövqe bildirin.',
				'Komandanızdakı hər kəs üçün bir cümləlik "ondan nə gözləyirəm" qeydi yazın və bunu onlarla bölüşün.',
			],
			d90: [
				'Fasilitasiya, kouçinq və ya təlimçilik üzrə sertifikat proqramına başlayın.',
				'Mentoru olduğunuz bir nəfər üçün yazılı inkişaf planı hazırlayın və nəticəni 90 gün sonra birlikdə qiymətləndirin.',
				'Analitik qərar bacarığınızı inkişaf etdirmək üçün bir layihənin büdcə və ya rəqəm tərəfinə cavabdehlik götürün.',
			],
			y1: [
				'Komanda və ya təşəbbüs rəhbərliyini rəsmi vəzifəyə çevirməyi hədəfləyin.',
				'Sahənizdə seminar və ya təlim proqramı hazırlayın və onu ən azı bir dəfə tam aparın.',
				'Yorğunluq riskini azaltmaq üçün şəxsi sərhədlər siyahısı yaradın və onu rüblük yoxlayın.',
			],
		},
		interviewTips: [
			'Müsahibə Sizin üçün təbii səhnədir, lakin həddindən artıq razılaşan görünməmək üçün ən azı bir məsələdə fərqli fikrinizi əsaslandırın.',
			'Komanda uğurlarından danışarkən Sizin konkret şəxsi töhfənizi də ayrıca vurğulayın.',
			'Çətin qərar verdiyiniz və hər kəsin razı qalmadığı bir hadisəni hazırlayın.',
			'Müsahibin reaksiyasına uyğunlaşarkən əsas mesajınızı itirməyin — cavabları əvvəlcədən 3 əsas nöqtə ilə planlaşdırın.',
		],
	},

	ENFP: {
		code: 'ENFP',
		idealEnvironment:
			'Sizin üçün ideal mühit yeni ideyaların sevinclə qarşılandığı, insanlarla canlı əməkdaşlığın gündəlik həyatın bir hissəsi olduğu yerdir. Kreativ agentlik, media layihəsi, gənclər təşkilatı, startap və ya beynəlxalq proqram kimi müxtəliflik və yenilik olan mühitlər Sizi qidalandırır. Çevik qrafik, layihədən layihəyə keçid imkanı və yaradıcı sərbəstlik məhsuldarlığınızı artırır. Hər gün eyni masada eyni prosedurla işləmək isə Sizdə qapalı qalmış hissi yaradır.',
		teamRole:
			'Komandada Siz "enerji mənbəyi" və "əlaqə qurucusu"sunuz: insanları bir-biri ilə tanış edir, ideyalar arasında körpü salırsınız. Layihənin başlanğıcında hamını həvəsləndirir, vizyonu canlı və cəlbedici edirsiniz. Komandanın əhvalı düşəndə onu qaldıran çox vaxt Siz olursunuz. Bu rolun davamlı olması üçün icra mərhələsində ardıcıl həmkarlarla aydın iş bölgüsü vacibdir.',
		asManager:
			'Menecer kimi Siz komandaya ilham verən, hər kəsin unikallığını görən və yeni ideyalara açıq rəhbərsiniz. Əməkdaşlar Sizinlə işləməyi maraqlı və inkişafverici hesab edirlər. Lakin həvəsiniz çoxlu yeni təşəbbüsə yol açır və komanda hansının həqiqətən prioritet olduğunu bilmir. Hər rübün əvvəlində üç əsas məqsəd müəyyən edib onları görünən yerdə saxlamaq həm Sizi, həm də komandanı fokusda saxlayır.',
		decisionMaking:
			'Siz qərarları imkanlar və insanlara təsir baxımından verirsiniz: "Bu, nəyə gətirib çıxara bilər və kimə fayda verər?" Həvəs anında tez razılaşmağa meyilli olduğunuz üçün sonradan öhdəliklər arasında sıxışa bilərsiniz. Vacib qərarlarda razılıq verməzdən əvvəl özünüzə üç sual verin: "Buna nə qədər vaxt gedəcək? Nədən imtina etməli olacağam? Bunu altı ay sonra da istəyəcəyəmmi?" Qərarın praktik tərəfini — vaxtı, pulu və enerjini — ayrıca yazmaq onu daha realist edir.',
		learningStyle:
			'Siz ən yaxşı müxtəliflik və qarşılıqlı əlaqə vasitəsilə öyrənirsiniz: video, müzakirə, praktik tapşırıq və qrup layihələri birləşəndə mövzu yaddaşınızda qalır. Yeni mövzuya böyük həvəslə başlayır, lakin təkrar və məşq mərhələsində marağınızı itirə bilərsiniz. Öyrənməni ictimai öhdəliyə — dostunuzla birgə kursa və ya öyrəndiklərinizi paylaşmağa — bağlamaq Sizi sona qədər aparır. Qısa, intensiv sessiyalar uzun monoton dərslərdən daha səmərəlidir.',
		conflict:
			'Münaqişədə Siz əvvəlcə atmosferi yumşaltmağa, zarafatla gərginliyi azaltmağa çalışırsınız. Dəyərlərinizə toxunulanda isə emosional reaksiya verib sonra peşman ola bilərsiniz. Münaqişəni tamamilə ertələmək də Sizə xas meyildir və bu, problemin böyüməsinə yol açır. Çətin söhbətdən əvvəl əsas fikrinizi bir cümlə ilə yazın və söhbət zamanı ona qayıdın.',
		motivators: [
			'Yeni ideyanı həyata keçirmək üçün yaşıl işıq',
			'Müxtəlif insanlarla canlı əməkdaşlıq',
			'İşin insanlara ilham verdiyini görmək',
			'Çevik qrafik və yaradıcı azadlıq',
			'Yeni bacarıq və təcrübə qazanmaq imkanı',
		],
		demotivators: [
			'Hər gün eyni rutin və təkrarlanan tapşırıqlar',
			'Detallı inzibati işlərin çoxluğu',
			'Soyuq, şəxsiyyətsiz iş mühiti',
			'İdeyaların dərhal rədd edildiyi mədəniyyət',
		],
		underPressureTips: [
			'Ağlınızdakı bütün tapşırıqları kağıza tökün və bugünkü siyahıya yalnız üçünü seçin.',
			'Fokus vaxtında telefon bildirişlərini söndürün.',
			'Etibar etdiyiniz bir insana vəziyyəti danışın — fikri səsləndirmək Sizə aydınlıq verir.',
			'Xırda səhvlərə ilişdiyinizi fərq edəndə özünüzə xatırladın ki, bu, böyük mənzərənin yalnız kiçik hissəsidir.',
		],
		careerPaths: [
			{
				title: 'Kreativ direktor',
				why: 'Komandanı vahid yaradıcı vizyon ətrafında ruhlandırmaq və yeni kampaniya ideyaları yaratmaq Sizin həvəsinizi və yaradıcılığınızı liderliyə çevirir.',
			},
			{
				title: 'İcma meneceri',
				why: 'İnsanları ortaq maraq ətrafında birləşdirmək, tədbirlər və onlayn müzakirələr aparmaq Sizin əlaqə qurma bacarığınızın birbaşa tətbiqidir.',
			},
			{
				title: 'Gənclər proqramları koordinatoru',
				why: 'Gənclərin potensialını üzə çıxaran layihələr təşkil etmək həm enerjinizi, həm də insanlara inamınızı mənalı nəticəyə çevirir.',
			},
			{
				title: 'Sosial sahibkar',
				why: 'Sosial problemə yaradıcı biznes həlli tapmaq Sizin idealizminizi və təşəbbüskarlığınızı eyni layihədə birləşdirir.',
			},
			{
				title: 'Beynəlxalq proqramlar üzrə mütəxəssis',
				why: 'Fərqli mədəniyyətlərdən olan insanlarla işləmək, mübadilə və əməkdaşlıq layihələri qurmaq Sizin yeniliyə açıqlığınıza və ünsiyyət bacarığınıza uyğundur.',
			},
		],
		developmentPlan: {
			d30: [
				'Hər həftənin sonunda 15 dəqiqə ayırıb verdiyiniz sözlərin siyahısını yoxlayın və hansının vaxtında yerinə yetirildiyini qeyd edin.',
				'Sosial şəbəkələr və mesajlaşma tətbiqləri üçün gündəlik vaxt limiti qoyun və fokus saatlarınızı qoruyun.',
				'Ən yaxşı ideyalarınızı bir "ideya bankı" faylında toplayın və hər birinin yanına ehtimal olunan faydasını yazın.',
			],
			d90: [
				'Layihə idarəçiliyi və ya vaxt idarəetməsi üzrə bir praktik metodu öyrənib ardıcıl tətbiq edin.',
				'İdeya bankından birini kiçik pilot layihəyə çevirin və nəticəsini rəqəmlərlə ölçün.',
				'Detallara güclü həmkarla birgə işləmək üçün aydın iş bölgüsü qaydası qurun.',
			],
			y1: [
				'Bir böyük layihəni əvvəldən axıra qədər aparın və onu CV-nizdə ölçülə bilən nəticə kimi göstərin.',
				'Çıxışlar, təlimlər və ya məzmun yaratmaq vasitəsilə sahənizdə peşəkar adınızı formalaşdırın.',
				'Maraqlarınız arasından əsas karyera istiqamətini seçin, digərlərini isə hobbi kimi saxlamağa qərar verin.',
			],
		},
		interviewTips: [
			'Həvəsiniz müsahibdə müsbət təəssürat yaradır, lakin cavablarınızın dağınıq görünməməsi üçün hər birini "vəziyyət — hərəkət — nəticə" ardıcıllığı ilə qurun.',
			'Çoxlu marağınızı bir xətt üzərində birləşdirən qısa "karyera hekayəsi" hazırlayın.',
			'Bitirdiyiniz layihələri rəqəmlərlə göstərin ki, Sizi yalnız ideya adamı kimi görməsinlər.',
			'Rutin və ya inzibati işlərlə bağlı suala onları necə sistemləşdirdiyinizi göstərən nümunə ilə cavab verin.',
		],
	},

	// ---------- Mühafizəçilər (SJ) ----------
	ISTJ: {
		code: 'ISTJ',
		idealEnvironment:
			'Sizin üçün ideal mühit rolların, məsuliyyətlərin və gözləntilərin yazılı şəkildə müəyyən edildiyi, sözün dəyər daşıdığı yerdir. Bank, audit şirkəti, dövlət qurumu, neft-qaz sahəsində texniki şöbə və ya logistika mərkəzi kimi dəqiqlik və etibarlılığın birbaşa nəticəyə təsir etdiyi mühitlər Sizə uyğundur. Sakit iş yeri, sabit qrafik və planlı iş axını Sizə maksimum keyfiyyət göstərməyə imkan verir. Hər gün dəyişən prioritetlər və son dəqiqə tapşırıqları isə Sizi daxilən narahat edir.',
		teamRole:
			'Komandada Siz "keyfiyyətin qoruyucusu"sunuz: sənədlərin düzgünlüyünü, son tarixlərə əməl olunmasını və prosedurların pozulmamasını təmin edirsiniz. Başqaları ideyaya həvəslənəndə Siz praktik suallar verirsiniz: "Bunun büdcəsi nədir? Kim cavabdehdir? Nə vaxta qədər?" Bu suallar layihəni reallığa bağlayır və gələcək problemlərin qarşısını alır. Komanda Sizin dəyərinizi çox vaxt yalnız Siz olmayanda — xətalar artanda — tam hiss edir.',
		asManager:
			'Menecer kimi Siz aydın standartlar, ədalətli qaydalar və proqnozlaşdırıla bilən iş mühiti yaradırsınız. Əməkdaşlar nə gözlənildiyini dəqiq bilir və bu, onlara təhlükəsizlik hissi verir. Risk isə yeni üsullara və gənc əməkdaşların fərqli yanaşmalarına şübhə ilə yanaşmaqdır. Yeniliyə "nəzarətli sınaq" formatında — kiçik pilot və aydın ölçülərlə — icazə vermək həm keyfiyyəti qoruyur, həm də komandanı motivasiya edir.',
		decisionMaking:
			'Siz qərarları keçmiş təcrübə, sübut olunmuş faktlar və mövcud qaydalar əsasında verirsiniz. "Əvvəllər bu necə nəticə verib?" sualı Sizin əsas yoxlama vasitənizdir və bu, riskləri xeyli azaldır. Lakin əvvəli olmayan yeni vəziyyətlərdə — məsələn, yeni texnologiyanın tətbiqində — bu yanaşma qərarı gecikdirə bilər. Belə hallarda lazımi məlumatı kiçik sınaqla özünüz yaratmaq ən məntiqli yoldur.',
		learningStyle:
			'Siz ən yaxşı addım-addım, məntiqi ardıcıllıqla qurulmuş materialla öyrənirsiniz: əvvəlcə əsaslar, sonra mürəkkəb hissə. Praktik nümunələr, real keyslər və dərhal tətbiq edə biləcəyiniz tapşırıqlar Sizə uzun nəzəri müzakirədən daha çox şey verir. Öyrəndiklərinizi qeyd dəftərində sistemli şəkildə saxlayır və sonra təkrar-təkrar onlara qayıdırsınız. Bu səbəbdən sertifikat imtahanları və strukturlaşdırılmış kurslar Sizin üçün çox uyğun formatdır.',
		conflict:
			'Münaqişədə Siz faktlara və qaydalara istinad edir, emosional müzakirədən qaçırsınız. "Razılaşma belə idi" mövqeyi çox vaxt haqlıdır, lakin qarşı tərəf yalnız qaydanı deyil, öz vəziyyətinin anlaşılmasını da gözləyə bilər. Həmçinin, narazılığı uzun müddət sakitcə yığıb sonra birdən ifadə etmək meyliniz var. Problemi ilk dəfə gördüyünüz anda qısa və faktlara əsaslanan söhbət açmaq münaqişənin böyüməsinin qarşısını alır.',
		motivators: [
			'Aydın məqsəd və dəqiq vəzifə təsviri',
			'Sabit, proqnozlaşdırıla bilən iş qrafiki',
			'Dəqiqliyinizin və etibarlılığınızın tanınması',
			'İşi əvvəldən axıra qədər tamamlamaq imkanı',
			'Səriştəli və öhdəliyinə sadiq həmkarlar',
		],
		demotivators: [
			'Son anda dəyişən prioritetlər',
			'Qaydaları pozub nəticəyə görə mükafatlandırılan həmkarlar',
			'Qeyri-müəyyən rollar və məsuliyyət bölgüsü',
			'Səliqəsiz, natamam sənədlərlə işləmək',
		],
		underPressureTips: [
			'Narahatlıq artanda nəyin həqiqətən baş verdiyini və nəyin yalnız ehtimal olduğunu yazılı şəkildə ayırın.',
			'Planı yenidən qurun: işi kiçik mərhələlərə bölün və hər birinə vaxt təyin edin.',
			'İş gününü sabit vaxtda bitirin — uzun saatlar narahatlığı azaltmır, yalnız yorğunluğu artırır.',
			'Gün ərzində qısa fiziki fəaliyyət (gəzinti, idman) edin; bu, gərginliyi azaldır.',
		],
		careerPaths: [
			{
				title: 'Daxili auditor',
				why: 'Proseslərin qaydalara uyğunluğunu sistemli yoxlamaq və riskləri sənədləşdirmək Sizin dəqiqliyinizin və məsuliyyət hissinizin birbaşa tətbiqidir.',
			},
			{
				title: 'Uyğunluq (compliance) mütəxəssisi',
				why: 'Bank və maliyyə qurumlarında qanunvericiliyə əməl olunmasını izləmək qaydalara sadiqliyinizi yüksək qiymətləndirilən peşəkar dəyərə çevirir.',
			},
			{
				title: 'Verilənlər bazası administratoru',
				why: 'Sistemlərin sabit, təhlükəsiz və xətasız işləməsini təmin etmək ardıcıllıq və detallara diqqət tələb edir — hər ikisi Sizin güclü tərəfinizdir.',
			},
			{
				title: 'Əməyin mühafizəsi və təhlükəsizlik (HSE) mühəndisi',
				why: 'Neft-qaz və tikinti kimi sahələrdə prosedurlara ciddi əməl olunması insanların həyatını qoruyur; Sizin intizamınız burada həlledicidir.',
			},
			{
				title: 'Vergi məsləhətçisi',
				why: 'Mürəkkəb qaydaları dəqiq tətbiq etmək və müştəriyə etibarlı həll təqdim etmək Sizin sistemli və faktlara əsaslanan düşüncənizə uyğundur.',
			},
		],
		developmentPlan: {
			d30: [
				'Ən çox vaxt aparan rutin işinizin addımlarını yazın və hansının avtomatlaşdırıla biləcəyini müəyyən edin.',
				'Rəhbərinizlə 20 dəqiqəlik görüşdə növbəti rüb üçün gözləntiləri yazılı şəkildə dəqiqləşdirin.',
				'Bir həftə ərzində gördüyünüz, lakin başqalarının xəbər tutmadığı işləri qeyd edin.',
			],
			d90: [
				'Sahənizdə tanınmış peşəkar sertifikata (məsələn, ACCA, CIA, PMP və ya ixtisasınız üzrə analoji) hazırlaşmağa başlayın.',
				'Komandanız üçün bir prosesin standart əməliyyat qaydasını yazın və onu tətbiq edin.',
				'Yeni bir yanaşma üçün nəzarətli pilot təşkil edin və nəticəni ölçün.',
			],
			y1: [
				'Sertifikat imtahanını verin və ya ixtisas üzrə növbəti mərhələyə keçin.',
				'Komandada yeni əməkdaşların mentoru olun və onların adaptasiya planını hazırlayın.',
				'Proses təkmilləşdirmə nəticələrinizi (vaxt qənaəti, səhvlərin azalması) rəqəmlərlə rəhbərliyə təqdim edin.',
			],
		},
		interviewTips: [
			'Təmkinli üslubunuz müsahibdə maraqsızlıq kimi görünə bilər — şirkətə niyə gəlmək istədiyinizi bir-iki səmimi cümlə ilə ifadə edin.',
			'Dəqiqliyinizi sübut edən konkret nümunə gətirin: tapdığınız səhv, qənaət etdiyiniz vaxt və ya qarşısını aldığınız risk.',
			'Dəyişikliyə uyğunlaşma barədə suala hazır olun və uğurla uyğunlaşdığınız real hadisəni danışın.',
			'Qısa cavablardan sonra müsahibin daha çox detal istəyib-istəmədiyini soruşun.',
		],
	},

	ISFJ: {
		code: 'ISFJ',
		idealEnvironment:
			'Sizin üçün ideal mühit insanların bir-birinə hörmət etdiyi, zəhmətin dəyərləndirildiyi və iş qaydalarının aydın olduğu yerdir. Klinika, məktəb, universitetin tələbə xidmətləri, insan resursları şöbəsi və ya ailə şirkəti kimi isti münasibətlərin və sabitliyin olduğu kollektivlər Sizə uyğundur. Gündəlik işinizin kiminsə həyatını konkret şəkildə asanlaşdırdığını görmək Sizə böyük məmnunluq verir. Sərt rəqabət, daim dəyişən strukturlar və kobud ünsiyyət isə enerjinizi tez tükəndirir.',
		teamRole:
			'Komandada Siz "görünməz dayaq"sınız: yeni əməkdaşın adaptasiyasına kömək edən, vacib tarixi xatırlayan və unudulmuş detalı tamamlayan Siz olursunuz. Layihənin arxa planında prosesləri səliqədə saxlayır, hər kəsin lazım olan məlumata çatmasını təmin edirsiniz. Komandanın ümumi rahatlığını qorumağınız məhsuldarlığı birbaşa artırır. Bu töhfənin görünməz qalmaması üçün gördüyünüz işləri qısa hesabat şəklində qeyd etmək faydalıdır.',
		asManager:
			'Menecer kimi Siz əməkdaşların ehtiyaclarını tez hiss edən, onlara dəstək olan və təhlükəsiz iş mühiti yaradan rəhbərsiniz. Komandanız Sizə etibar edir və çətin anda ilk olaraq Sizə müraciət edir. Çətinlik isə tələb qoymaqda və zəif işi açıq bildirməkdə yaranır: başqasını incitməmək üçün işi özünüz tamamlamağa meyl edirsiniz. Gözləntiləri əvvəlcədən yazılı razılaşdırmaq rəy söhbətini şəxsi deyil, peşəkar müstəviyə keçirir.',
		decisionMaking:
			'Siz qərarları təcrübə, mövcud qaydalar və qərarın konkret insanlara təsiri əsasında verirsiniz. Bu, qərarlarınızı həm praktik, həm də insanlara qarşı diqqətli edir. Lakin heç kimin narazı qalmamasını istədiyiniz üçün qərarı ertələyə və ya başqasına ötürə bilərsiniz. "Bu qərarı bir həftə gecikdirsəm, kimə və necə təsir edəcək?" sualı Sizə qərarsızlığın da bir seçim olduğunu xatırladır.',
		learningStyle:
			'Siz ən yaxşı aydın təlimatlar, praktik nümunələr və addım-addım məşqlə öyrənirsiniz. Öyrəndiyinizin kiməsə necə fayda verəcəyini bildikdə motivasiyanız artır. Səbirli, dəstəkləyici müəllim və ya mentorun yanında sürətlə irəliləyirsiniz; sərt və ictimai tənqid isə öyrənməni ləngidir. Öyrəndiklərinizi yazılı qeyd etmək və təkrarlamaq biliyi uzunmüddətli yaddaşa köçürür.',
		conflict:
			'Münaqişədə Siz əvvəlcə güzəştə gedir, gərginliyi azaltmaq üçün öz ehtiyaclarınızı arxa plana atırsınız. Uzun müddət dözüb sonra yorğunluq və inciklik hissi ilə geri çəkilmək Sizə xas ola bilər. Qarşı tərəf isə çox vaxt problemin olduğunu belə bilmir. Söhbəti "Bunu deməyim çətindir, amma münasibətimiz üçün vacibdir" cümləsi ilə açmaq Sizə həm yumşaq, həm də aydın qalmağa imkan verir.',
		motivators: [
			'Kiminsə həyatını real şəkildə asanlaşdırmaq',
			'Zəhmətinizin səmimi tanınması',
			'Sabit, mehriban və etibarlı kollektiv',
			'Aydın tapşırıqlar və gözləntilər',
			'Uzunmüddətli, dərin iş münasibətləri',
		],
		demotivators: [
			'Kobud və ya alçaldıcı ünsiyyət',
			'Səbəbsiz və tez-tez dəyişən qaydalar',
			'Zəhmətinizin başqasının adına yazılması',
			'Davamlı münaqişə və gərgin atmosfer',
		],
		underPressureTips: [
			'Gərgin gündə tapşırıqlarınızı "bu gün mütləq", "bu həftə" və "gözləyə bilər" qruplarına bölün.',
			'Bu həftəki öhdəliklərinizi yazın və ən azı birini başqasına ötürün və ya ertələyin.',
			'Sevdiyiniz kiçik gündəlik rutini (çay, gəzinti, musiqi) gərgin günlərdə də qoruyun.',
			'Ən pis ssenarini düşündüyünüz anda onun baş vermə ehtimalını real faktlarla qiymətləndirin.',
		],
		careerPaths: [
			{
				title: 'Pasiyent koordinatoru',
				why: 'Xəstələrin müalicə prosesini rahat və nizamlı etmək Sizin qayğıkeşliyinizi və detallara diqqətinizi birləşdirir.',
			},
			{
				title: 'Məktəb psixoloqu',
				why: 'Şagirdlərə sakit və etibarlı mühitdə dəstək olmaq, valideyn və müəllimlərlə əlaqə qurmaq Sizin səbrinizə və empatiyanıza uyğundur.',
			},
			{
				title: 'Əmək haqqı və kadr uçotu mütəxəssisi',
				why: 'İnsanların həyatına birbaşa təsir edən sənədləri dəqiq və vaxtında hazırlamaq Sizin məsuliyyət hissinizi və səliqəliliyinizi tələb edir.',
			},
			{
				title: 'Arxivçi',
				why: 'Tarixi və institusional yaddaşı qorumaq, sənədləri sistemli saxlamaq Sizin ənənələrə hörmətinizə və nizam sevginizə cavab verir.',
			},
			{
				title: 'Dietoloq',
				why: 'İnsanlara gündəlik həyatlarında praktik və fərdi qayğı göstərmək, onların uzunmüddətli sağlamlığını izləmək Sizə həm məna, həm də sabitlik verir.',
			},
		],
		developmentPlan: {
			d30: [
				'Bir həftə ərzində enerjinizi ən çox alan üç vəziyyəti qeyd edin və onlardan birini dəyişmək üçün plan qurun.',
				'Hər gün işə başlamazdan əvvəl öz tapşırıqlarınızı başqalarının xahişlərindən ayrı siyahıda yazın.',
				'Bir həmkarınızdan işiniz barədə konkret rəy istəyin və onu yazılı qeyd edin.',
			],
			d90: [
				'Rəhbərinizlə inkişaf istəkləriniz və növbəti il üçün məqsədləriniz barədə ayrıca görüş təşkil edin.',
				'Sahənizdə praktik bacarığınızı artıran qısa sertifikat proqramı keçin.',
				'Komandada kiçik bir yeniliyin (yeni alət və ya iş formatı) tətbiqini öz üzərinizə götürün.',
			],
			y1: [
				'Daha çox məsuliyyət daşıyan bir rola (koordinator, komanda rəhbəri) namizəd olun.',
				'Yeni əməkdaşlar üçün adaptasiya bələdçisi hazırlayıb onu təşkilatda standart halına salın.',
				'İl ərzində ehtiyaclarınızı ifadə etmə bacarığınızı yaxın birindən alacağınız rəylə qiymətləndirin.',
			],
		},
		interviewTips: [
			'Təvazökarlığınız müsahibədə zəif tərəfə çevrilə bilər — "biz etdik" əvəzinə ən azı bir dəfə "mən etdim" deyərək öz rolunuzu göstərin.',
			'Qayğıkeşliyinizi konkret nəticə ilə sübut edin: məsələn, müştəri şikayətlərinin necə azaldığını rəqəmlə deyin.',
			'Dəyişiklik və ya stresli vəziyyət barədə suala sakit qalıb planla irəlilədiyiniz real nümunə ilə cavab verin.',
			'Maaş və iş şərtləri barədə danışığa əvvəlcədən hazırlaşın və öz dəyərinizi az qiymətləndirməyin.',
		],
	},

	ESTJ: {
		code: 'ESTJ',
		idealEnvironment:
			'Sizin üçün ideal mühit aydın iyerarxiyanın, ölçülə bilən məqsədlərin və nəticəyə görə məsuliyyətin olduğu yerdir. İstehsal müəssisəsi, bank şəbəkəsi, logistika şirkəti, dövlət qurumu və ya böyük tədbir kimi çoxlu hərəkətli hissənin nizama salınmalı olduğu mühitlər Sizə uyğundur. Səlahiyyətin məsuliyyətlə birlikdə verildiyi, qərarların tez icra olunduğu struktur Sizi stimullaşdırır. Kimin nəyə cavabdeh olduğunun bilinmədiyi, "hər şeyin öz axarına buraxıldığı" mühit isə Sizi əsəbiləşdirir.',
		teamRole:
			'Komandada Siz "icra mühərriki"siniz: plan qəbul olunan kimi onu tapşırıqlara bölür, rolları müəyyən edir və irəliləyişi izləyirsiniz. Komandanın verdiyi sözü vaxtında yerinə yetirməsini təmin edir, gecikmələri erkən görürsünüz. Böhran anında nizam yaratmaq və hər kəsə dəqiq tapşırıq vermək Sizin xüsusi bacarığınızdır. Başqalarının da fikir bildirə bilməsi üçün planın ilkin mərhələsində müzakirəyə yer verin.',
		asManager:
			'Menecer kimi Siz aydın standartlar qoyan, tələbkar, lakin ədalətli rəhbərsiniz; əməkdaşlar nəyə görə qiymətləndiriləcəklərini dəqiq bilirlər. Komandanızda intizam və məsuliyyət yüksək olur, son tarixlər nadir hallarda pozulur. Risk isə hər işin Sizin üsulunuzla görülməsini tələb etməkdir və bu, yaradıcı əməkdaşları məhdudlaşdırır. Komandaya yeni üsulu sınamaq üçün nəzarətli "pilot zonası" vermək həm nəticəni qoruyur, həm də güclü əməkdaşları komandada saxlayır.',
		decisionMaking:
			'Siz qərarları tez, faktlar, təcrübə və effektivlik əsasında verirsiniz; qərarsızlığı vaxt itkisi hesab edirsiniz. Bu, gündəlik əməliyyat qərarlarında böyük üstünlükdür və komandanı irəli aparır. Lakin yeni və qeyri-müəyyən vəziyyətlərdə köhnə təcrübəyə həddindən artıq güvənmək imkanları gözdən qaçırmağa səbəb ola bilər. Strateji qərarlardan əvvəl ən azı bir alternativ yanaşmanı ciddi dəyərləndirmək üçün vaxt ayırın.',
		learningStyle:
			'Siz ən yaxşı strukturlaşdırılmış, aydın məqsədi və praktik faydası olan proqramlarda öyrənirsiniz. Real iş nümunələri, keyslər və öyrəndiyinizi dərhal tətbiq edə biləcəyiniz tapşırıqlar Sizə ən çox yarayır. Nəticəni ölçən imtahan və ya sertifikat motivasiyanızı artırır. Mücərrəd nəzəriyyə isə praktik əlaqəsi göstərilmədikdə Sizə vaxt itkisi kimi görünür.',
		conflict:
			'Münaqişədə Siz birbaşa, faktlara əsaslanan və həllyönümlü hərəkət edirsiniz: problemi müəyyən edir, məsuliyyəti aydınlaşdırır və tədbir görürsünüz. Bu yanaşma sürətli nəticə verir, lakin qarşı tərəfin hissləri nəzərə alınmadıqda "haqlıdır, amma soyuqdur" təəssüratı yarada bilər. İnsanlar özlərini eşidilmiş hiss etmədikdə razılaşma formal qalır. Söhbəti həll təklifi ilə deyil, "Sizin baxışınızdan vəziyyət necə görünür?" sualı ilə başlamaq daha davamlı nəticə verir.',
		motivators: [
			'Aydın məqsədlər və ölçülə bilən nəticələr',
			'Məsuliyyət və idarəetmə səlahiyyəti',
			'İntizamlı, sözünə sadiq komanda',
			'Zəhmətin və nəticənin rəsmi tanınması',
			'Xaosu nizama salmaq imkanı',
		],
		demotivators: [
			'Qeyri-müəyyən rollar və məsuliyyətdən yayınma',
			'Əsassız gecikmələr və vaxtında tamamlanmayan işlər',
			'Qərarsız, hər şeyi təxirə salan rəhbərlik',
			'Qaydaların hər kəsə eyni tətbiq olunmaması',
		],
		underPressureTips: [
			'Hər şeyə nəzarət etmək istəyini fərq edin, ən vacib üç sahəni seçin və qalanını həvalə edin.',
			'Gərgin anda kəskin söz deməzdən əvvəl söhbətə qısa fasilə verin.',
			'Gündəlik idmanı və ya fiziki fəaliyyəti təqvimdə sabit vaxta bağlayın.',
			'Özünüzü anlaşılmamış hiss etdiyiniz anda bunu etibarlı bir insana açıq deyin.',
		],
		careerPaths: [
			{
				title: 'Təchizat zənciri meneceri',
				why: 'Tədarükçüləri, anbarları və nəqliyyatı vahid sistem kimi idarə etmək Sizin təşkilatçılıq və nizam yaratma bacarığınızın ən birbaşa tətbiqidir.',
			},
			{
				title: 'İstehsalat müdiri',
				why: 'Növbələri, keyfiyyət standartlarını və istehsal planını idarə etmək qətiyyət və intizam tələb edir — bunlar Sizin təbii keyfiyyətlərinizdir.',
			},
			{
				title: 'Hərbi zabit',
				why: 'Aydın komanda strukturu, intizam və böhran anında sürətli qərar Sizin liderlik üslubunuza və məsuliyyət hissinizə uyğundur.',
			},
			{
				title: 'Kredit riskləri üzrə rəhbər',
				why: 'Bankda qaydaları ardıcıl tətbiq edib qərarları faktlarla əsaslandırmaq Sizin məsuliyyətli və praktik düşüncənizə cavab verir.',
			},
			{
				title: 'Tikinti layihəsinin meneceri',
				why: 'Podratçıları, büdcəni və son tarixləri sərt nəzarətdə saxlamaq Sizin nəticəyönümlü idarəetmə üslubunuzla tam üst-üstə düşür.',
			},
		],
		developmentPlan: {
			d30: [
				'Bir həftə ərzində neçə dəfə başqasının işinə qarışdığınızı qeyd edin və hansının həqiqətən lazım olduğunu təhlil edin.',
				'Komandanızdan iki nəfərə "Mənim rəhbərliyimdə nəyi dəyişməliyəm?" sualını verin və cavabı mübahisə etmədən dinləyin.',
				'Hər iş günündən sonra bir saatı tamamilə şəxsi və ailə vaxtı kimi qoruyun.',
			],
			d90: [
				'Emosional intellekt və ya kouçinq yönümlü liderlik üzrə təlim keçin.',
				'Komandadan rəhbərlik üslubunuz barədə strukturlaşdırılmış (360 dərəcə) rəy toplayın.',
				'Bir prosesdə komandanın təklif etdiyi yeniliyi pilot kimi tətbiq edib nəticəsini ölçün.',
			],
			y1: [
				'Daha geniş idarəetmə sahəsinə — şöbəyə, filiala və ya regiona — rəhbərlik etməyi hədəfləyin.',
				'Layihə idarəçiliyi və ya əməliyyatlar üzrə beynəlxalq səviyyədə tanınan sertifikat əldə edin.',
				'Rəy nəticələrinə əsasən ünsiyyət üslubunuzda iki dəyişiklik edin və il sonunda yenidən ölçün.',
			],
		},
		interviewTips: [
			'Qətiyyətiniz müsahibədə üstünlükdür, lakin çevikliyinizi də göstərmək üçün fikrinizi dəyişdiyiniz bir hadisəni hazırlayın.',
			'Komandanı idarə etdiyiniz nümunələrdə insanlara necə dəstək olduğunuzu da vurğulayın.',
			'Cavablarınızı rəqəmlərlə dəstəkləyin: büdcə, müddət, komanda ölçüsü və nəticə.',
			'Şirkətin proseslərini ilk müsahibədə tənqid etməkdən çəkinin; əvvəlcə onların niyə belə qurulduğunu soruşun.',
		],
	},

	ESFJ: {
		code: 'ESFJ',
		idealEnvironment:
			'Sizin üçün ideal mühit isti, mehriban münasibətlərin və aydın təşkilati qaydaların birləşdiyi yerdir. Xəstəxana, məktəb, otel, müştəri xidmətləri mərkəzi və ya böyük şirkətin korporativ tədbirlər şöbəsi kimi insanlarla gündəlik canlı təmasın olduğu mühitlər Sizə enerji verir. Komandada qarşılıqlı dəstək, müntəzəm rəy və birgə qeyd olunan uğurlar motivasiyanızı yüksək saxlayır. İnsanların bir-birinə laqeyd olduğu, hər kəsin yalnız öz masasında işlədiyi mühitdə isə tez solursunuz.',
		teamRole:
			'Komandada Siz "sosial yapışqan"sınız: yeni insanları tanış edir, birgə tədbirləri təşkil edir və komanda daxilində ünsiyyət kanallarını açıq saxlayırsınız. Praktik təşkilatçılıq — iclasın hazırlanması, resursların paylanması, son tarixlərin xatırladılması — çox vaxt Sizin üzərinizə düşür. Müştəri və tərəfdaşlarla münasibətləri qorumaqda xüsusilə dəyərlisiniz. Sizin varlığınız komandada etibar və aidiyyət hissini artırır.',
		asManager:
			'Menecer kimi Siz hər əməkdaşla şəxsi əlaqə quran, onların ehtiyaclarına diqqət yetirən və komanda ruhunu qoruyan rəhbərsiniz. Komandanızda insanlar özlərini qiymətləndirilmiş hiss edir, kadr axını az olur. Çətinlik isə populyar olmayan qərarlarda və zəif nəticə barədə açıq söhbətlərdə yaranır. Rəy söhbətlərini müntəzəm və planlı etmək — məsələn, aylıq təkbətək görüşlər — onları "xüsusi problem" olmaqdan çıxarır və asanlaşdırır.',
		decisionMaking:
			'Siz qərarları insanlara təsir, qrupun rahatlığı və mövcud qaydalar əsasında verirsiniz. Qərarın kimi narahat edəcəyini əvvəlcədən hiss edir və təsirini yumşaltmağın yollarını düşünürsünüz. Lakin başqalarının rəyindən həddindən artıq asılı olmaq qərarı ləngidə və ya onu ən çox səs çıxaranın xeyrinə dəyişə bilər. Qərar verməzdən əvvəl özünüzdən "Heç kim mənə fikrini deməsəydi, nəyi seçərdim?" deyə soruşmaq öz mövqeyinizi aydınlaşdırır.',
		learningStyle:
			'Siz ən yaxşı qrup içində, praktik və aydın strukturlu formatda öyrənirsiniz. Müəllimlə və ya həmkarlarla isti münasibət öyrənmə motivasiyanızı xeyli artırır. Öyrəndiyinizi dərhal real insanlarla tətbiq etmək — məsələn, yeni müştəri xidməti üsulunu ertəsi gün sınamaq — onu möhkəmləndirir. Tək başına, mücərrəd materialla uzun müddət işləmək isə Sizin üçün ən çətin formatdır.',
		conflict:
			'Münaqişədə Siz əvvəlcə hamını sakitləşdirməyə və mövzunu yumşaltmağa çalışırsınız. Lakin şəxsən inciyəndə bunu uzun müddət yadda saxlaya və münasibətdə soyuqluq yarada bilərsiniz. Gərginliyi gizlətmək qısa müddətdə harmoniya yaradır, uzun müddətdə isə problemi dərinləşdirir. Münaqişəni "Münasibətimizi qorumaq üçün bunu müzakirə etməliyik" cümləsi ilə açmaq Sizə həm dürüst, həm də qayğıkeş qalmağa imkan verir.',
		motivators: [
			'İnsanlara birbaşa kömək etmək və minnətdarlıq görmək',
			'Mehriban, birlik ruhlu kollektiv',
			'Tədbir və layihələri təşkil etmək imkanı',
			'Aydın gözləntilər və müntəzəm rəy',
			'Ənənələrin və ortaq dəyərlərin qorunması',
		],
		demotivators: [
			'Soyuq, şəxsiyyətsiz iş mühiti',
			'Zəhmətin və qayğının fərq edilməməsi',
			'Komanda daxilində davamlı gərginlik və dedi-qodu',
			'Uzun müddət tək və insanlarla təmassız işləmək',
		],
		underPressureTips: [
			'Başqalarının razı qalıb-qalmaması barədə düşüncələrinizi yazın və onların nə qədərinin faktlara əsaslandığını yoxlayın.',
			'Gərgin dövrdə əlavə könüllü öhdəliklər götürməyin.',
			'Yaxın bir insanla açıq danışın və dəstək istəyin — kömək istəmək də münasibətin bir hissəsidir.',
			'Gününüzdə yalnız özünüz üçün kiçik, sevdiyiniz bir fəaliyyətə yer saxlayın.',
		],
		careerPaths: [
			{
				title: 'Müştəri uğuru (customer success) meneceri',
				why: 'Müştərilərlə uzunmüddətli münasibət qurmaq və onların ehtiyaclarını əvvəlcədən hiss etmək Sizin sosial həssaslığınızı biznes nəticəsinə çevirir.',
			},
			{
				title: 'Korporativ tədbirlər meneceri',
				why: 'Yüzlərlə insanın rahatlığını düşünərək mürəkkəb tədbiri detallarına qədər planlamaq Sizin təşkilatçılıq və qayğıkeşlik bacarığınızı birləşdirir.',
			},
			{
				title: 'İnzibati işlər üzrə rəhbər',
				why: 'Kollektivin gündəlik işinin rahat axmasını təmin etmək Sizə həm nizam yaratmaq, həm də insanlara qayğı göstərmək imkanı verir.',
			},
			{
				title: 'Məktəb direktorunun müavini',
				why: 'Müəllim, şagird və valideyn arasında körpü olmaq, məktəbin gündəlik həyatını təşkil etmək Sizin ünsiyyət gücünüzə və məsuliyyət hissinizə uyğundur.',
			},
			{
				title: 'İctimai sağlamlıq mütəxəssisi',
				why: 'İcmalarla birbaşa işləyərək sağlam həyat proqramları təşkil etmək Sizə insanlara geniş miqyasda praktik fayda vermək imkanı yaradır.',
			},
		],
		developmentPlan: {
			d30: [
				'Hər gün ən azı bir dəfə öz fikrinizi başqalarının fikrini eşitməzdən əvvəl bildirin.',
				'Bir həftə ərzində Sizi narahat edən, lakin dilə gətirmədiyiniz məqamları qeyd edin və onlardan birini müzakirə edin.',
				'Aldığınız bir tənqidi rəyi yazın və ondan çıxara biləcəyiniz bir konkret dərsi ayırın.',
			],
			d90: [
				'Danışıqlar və ya inamlı (asertiv) ünsiyyət üzrə qısa praktik təlim keçin.',
				'Komandada bir prosesi (məsələn, yeni əməkdaşların qarşılanmasını) yenidən qurun və nəticəsini ölçün.',
				'Rəhbərinizlə karyera məqsədləriniz barədə açıq söhbət aparın və yazılı plan razılaşdırın.',
			],
			y1: [
				'İnsanların idarə olunduğu bir rola — koordinator, komanda rəhbəri və ya şöbə müdiri — keçməyi hədəfləyin.',
				'Sahənizdə peşəkar sertifikat (məsələn, insan resursları və ya tədbir menecmenti üzrə) əldə edin.',
				'Komandanızda fikir ayrılıqlarının açıq müzakirə olunduğu aylıq "retrospektiv" görüş formatını yaradın və aparın.',
			],
		},
		interviewTips: [
			'Səmimiliyiniz müsahibdə tez rəğbət yaradır; bunu konkret nəticələrlə — müştəri məmnuniyyəti, təşkil etdiyiniz tədbirin miqyası — gücləndirin.',
			'Müsahibin razılığını axtarmaq əvəzinə öz fikrinizi inamla ifadə edin, xüsusilə fikir ayrılığı ilə bağlı suallarda.',
			'Çətin müştəri və ya münaqişə barədə suala sərhəd qoyduğunuz real nümunə ilə cavab verin.',
			'Müsahibədən sonra qısa təşəkkür mesajı göndərin — bu, güclü ünsiyyət tərəfinizi əks etdirir.',
		],
	},

	// ---------- Kəşfiyyatçılar (SP) ----------
	ISTP: {
		code: 'ISTP',
		idealEnvironment:
			'Sizin üçün ideal mühit real problemlər üzərində müstəqil işləyə bildiyiniz və nəticənin dərhal göründüyü yerdir. Texniki servis mərkəzi, istehsal sahəsi, kibertəhlükəsizlik komandası, aviasiya və ya fövqəladə xidmətlər kimi praktik bacarığın həlledici olduğu mühitlər Sizə uyğundur. Az iclas, minimal bürokratiya və alətlərə, avadanlığa sərbəst çıxış məhsuldarlığınızı artırır. Hər addımın sənədləşdirildiyi, məqsədsiz iclaslarla dolu ofis gündəliyi isə Sizi tez söndürür.',
		teamRole:
			'Komandada Siz "problem həlledicisi"siniz: sistem dayananda, avadanlıq xarab olanda və ya plan işləməyəndə hamı Sizə baxır. Uzun müzakirələr əvəzinə dərhal vəziyyəti yoxlayır, səbəbi tapır və praktik həll təklif edirsiniz. Sakit və soyuqqanlı olmağınız gərgin anlarda komandanı da sakitləşdirir. Həllinizi izah etmədikdə isə başqaları ondan öyrənə bilmir, buna görə qısa izah və ya sənəd qoymaq faydalıdır.',
		asManager:
			'Menecer kimi Siz əməkdaşlara sərbəstlik verən, mikroidarəetmədən uzaq duran və şəxsi nümunə ilə öyrədən rəhbərsiniz. Komandanız Sizin texniki səriştənizə və sakitliyinizə hörmət edir. Çətinlik isə uzunmüddətli planlaşdırmada, inzibati sənədləşmədə və emosional dəstək tələb edən söhbətlərdə yaranır. Komandaya müntəzəm qısa yönləndirmə görüşləri və aydın rüblük məqsədlər vermək rəhbərliyinizi daha proqnozlaşdırıla bilən edir.',
		decisionMaking:
			'Siz qərarları anın faktları və məntiqi əsasında verirsiniz: vəziyyəti tez qiymətləndirir, ən səmərəli hərəkəti seçirsiniz. Böhranda bu bacarıq əvəzolunmazdır, çünki başqaları hələ düşünərkən Siz artıq hərəkətə keçirsiniz. Lakin uzunmüddətli qərarlarda — karyera seçimi, böyük xərc — "indi işləyir" yanaşması gələcək nəticələri nəzərdən qaçıra bilər. Belə qərarlar üçün bir-iki illik ssenarini qısaca yazıb yoxlamaq faydalıdır.',
		learningStyle:
			'Siz ən yaxşı əl ilə — sökərək, quraraq, sınayaraq — öyrənirsiniz; təlimatı oxumazdan əvvəl çox vaxt sistemi özünüz yoxlayırsınız. Simulyatorlar, laboratoriya işləri, praktik məşqlər və real layihələr Sizə nəzəri mühazirədən qat-qat çox şey verir. Öyrənmə məqsədi konkret problemlə bağlı olanda — məsələn, proqramın niyə yavaş işlədiyini tapmaq — diqqətiniz maksimuma çatır. Uzun nəzəri dərslərdə isə fikriniz tez yayınır.',
		conflict:
			'Münaqişədə Siz əvvəlcə uzaqlaşır, söhbətdən qaçmağa və problemin özü-özünə həll olunmasını gözləməyə meyl edirsiniz. Mübahisə qaçılmaz olanda isə qısa, birbaşa və faktlara əsaslanan mövqe tutursunuz. Qarşı tərəf susqunluğunuzu laqeydlik kimi qəbul edə bilər. Fikrinizi qısa olsa belə vaxtında demək — "Mən bununla razı deyiləm, səbəbi budur" — məsələnin böyüməsinin qarşısını alır.',
		motivators: [
			'Real, praktik problemi öz əlinizlə həll etmək',
			'Müstəqillik və öz üsulunuzla işləmək azadlığı',
			'Yeni alət, texnologiya və avadanlıqla işləmək',
			'Nəticəni dərhal görmək',
			'Gözlənilməz, dinamik vəziyyətlər',
		],
		demotivators: [
			'Uzun və məqsədsiz iclaslar',
			'Həddindən artıq sənədləşmə və bürokratiya',
			'Hər addımı izləyən rəhbər',
			'Praktik tətbiqi olmayan nəzəri tapşırıqlar',
		],
		underPressureTips: [
			'Gərgin anda qısa fiziki fəaliyyət edin — idman, gəzinti və ya əl işi fikrinizi təmizləyir.',
			'Problemi kiçik texniki hissələrə bölün və onları bir-bir həll edin.',
			'Tamamilə qapanmaq əvəzinə ən azı bir nəfərə vəziyyət barədə qısa məlumat verin.',
			'Stress altında riskli qərar meyliniz artır — vacib seçimləri bir gecə gözlədin.',
		],
		careerPaths: [
			{
				title: 'Təyyarə texniki xidmət mühəndisi',
				why: 'Mürəkkəb mexaniki və elektron sistemləri dəqiq diaqnoz edib təmir etmək Sizin praktik məntiqinizi və soyuqqanlılığınızı tələb edir.',
			},
			{
				title: 'Rəqəmsal kriminalistika mütəxəssisi',
				why: 'Sistemlərdəki izləri araşdırıb hadisənin necə baş verdiyini tapmaq Sizin müşahidəçiliyinizə və texniki problem həlli bacarığınıza ideal uyğundur.',
			},
			{
				title: 'Robototexnika mühəndisi',
				why: 'Fiziki avadanlıqla proqramlaşdırmanı birləşdirmək və prototipi əl ilə sınamaq Sizə həm texniki, həm də praktik məmnunluq verir.',
			},
			{
				title: 'Qazma mühəndisi',
				why: 'Neft-qaz sahəsində real vaxtda, gərgin şəraitdə texniki qərar vermək Sizin böhranda sakit qalma bacarığınızı yüksək dəyərə çevirir.',
			},
			{
				title: 'DevOps mühəndisi',
				why: 'Serverlərin və sistemlərin fasiləsiz işləməsini təmin etmək, problemi tez tapıb aradan qaldırmaq Sizin "əl ilə həll et" yanaşmanıza uyğundur.',
			},
		],
		developmentPlan: {
			d30: [
				'Tapdığınız bir texniki həlli qısa təlimat şəklində yazın və komanda ilə paylaşın.',
				'Hər həftə bir dəfə yeni bir aləti, proqramı və ya texnikanı bir saat ərzində sınayın və nəticəni qeyd edin.',
				'İş yerində ən çox vaxt aparan bir texniki problemi seçin və onu həll etmək üçün plan qurun.',
			],
			d90: [
				'Sahənizdə praktik sertifikat (məsələn, şəbəkə, təhlükəsizlik və ya avadanlıq üzrə) əldə etmək üçün hazırlaşın.',
				'Bir texniki layihəni əvvəldən sona qədər aparın və nəticəni qısa təqdimatla göstərin.',
				'Gənc bir həmkara praktik bacarıq öyrədin — bu, ünsiyyət bacarığınızı da inkişaf etdirir.',
			],
			y1: [
				'Texniki ekspert və ya komanda rəhbəri kimi növbəti karyera mərhələsinə keçməyi hədəfləyin.',
				'Gördüyünüz işlərdən ibarət praktik portfolio (layihələr, fotolar, nəticələr) yaradın.',
				'Sahənizdə peşəkar icmaya və ya klubə qoşulun və ən azı bir layihədə fəal iştirak edin.',
			],
		},
		interviewTips: [
			'Qısa cavablarınız müsahibdə maraqsızlıq kimi qəbul oluna bilər — hər cavaba bir konkret nümunə əlavə edin.',
			'Texniki bacarığınızı göstərmək üçün həll etdiyiniz real problemi addım-addım danışın.',
			'Komanda işi barədə suala hazır olun: başqaları ilə necə əməkdaşlıq etdiyinizi göstərən nümunə seçin.',
			'Uzunmüddətli planlarınız soruşulanda boş qalmamaq üçün 3–5 illik məqsədinizi əvvəlcədən düşünün.',
		],
	},

	ISFP: {
		code: 'ISFP',
		idealEnvironment:
			'Sizin üçün ideal mühit estetik baxımdan xoş, sakit və mehriban, yaradıcılığa sərbəstlik verən yerdir. Dizayn studiyası, foto və ya video istehsalı komandası, restoran mətbəxi, baytarlıq klinikası və ya təbiətlə bağlı layihə kimi əl və hiss işi tələb edən mühitlər Sizə uyğundur. Öz tempinizlə işləmək, nəticəni gözlə görmək və şəxsi üslubunuzu işə qatmaq imkanı Sizi motivasiya edir. Səs-küylü, sərt iyerarxiyalı, hər şeyin rəqəmlərlə ölçüldüyü mühitdə isə sıxılır və geri çəkilirsiniz.',
		teamRole:
			'Komandada Siz estetik və insani incəlik mənbəyisiniz: məhsulun görünüşünü, hissini və istifadəçiyə təsirini başqalarından daha incə duyursunuz. Sakit və mehriban üslubunuz komandada gərginliyi azaldır, insanlar yanınızda rahatlaşır. Praktik, əl işi tələb edən tapşırıqlarda yüksək keyfiyyət göstərirsiniz. Lakin fikirlərinizi çox vaxt səsləndirmədiyiniz üçün komanda dəyərli müşahidələrinizdən məhrum qala bilər.',
		asManager:
			'Menecer kimi Siz hər əməkdaşın fərdiliyinə hörmət edən, onları rahat və yaradıcı işləməyə həvəsləndirən rəhbərsiniz. Komandanız sakitliyinizi və mühakimə etməyən münasibətinizi yüksək qiymətləndirir. Çətinlik isə aydın son tarixlər qoymaqda, zəif nəticəni açıq bildirməkdə və uzunmüddətli planlaşdırmada yaranır. Sadə, vizual planlaşdırma lövhəsi və həftəlik qısa yoxlama görüşləri bu boşluğu təbii şəkildə doldurur.',
		decisionMaking:
			'Siz qərarları şəxsi dəyərləriniz və anın təəssüratı əsasında verirsiniz: "Bu, mənə düzgün gəlirmi?" Bu yanaşma Sizi səmimi və dəyərlərinizə sadiq saxlayır. Lakin uzunmüddətli nəticəsi olan qərarları — təhsil, iş yeri, maliyyə — son ana qədər təxirə salmaq meyliniz var. Seçimləri vizual şəkildə (cədvəl, xəritə və ya müsbət-mənfi siyahısı) qarşınıza qoymaq qərarı həm intuitiv, həm də realist edir.',
		learningStyle:
			'Siz ən yaxşı edərək və hiss edərək öyrənirsiniz: emalatxana, praktik məşq, ustanın yanında təcrübə Sizə kitabdan daha çox şey verir. Vizual materiallar, nümunələr və real obyektlərlə işləmək mövzunu yaddaşınızda canlı saxlayır. Rəqabətli, yüksək təzyiqli imtahan mühiti bacarığınızı tam göstərməyə imkan verməyə bilər. Öyrəndiyinizi kiçik yaradıcı layihəyə çevirmək həm motivasiya, həm də portfolio yaradır.',
		conflict:
			'Münaqişədə Siz əvvəlcə geri çəkilir, toqquşmadan qaçmaq üçün susmağa üstünlük verirsiniz. Lakin dəyərlərinizə toxunulanda gözlənilmədən qəti və emosional reaksiya verə bilərsiniz. Qarşı tərəf çox vaxt bu reaksiyanın səbəbini anlamır, çünki narazılığınız əvvəllər görünmürdü. Hisslərinizi sözlə ifadə etmək çətin olanda onları əvvəlcə qısa yazılı mesajla bildirmək Sizə daha rahat yol açar.',
		motivators: [
			'Yaradıcı sərbəstlik və şəxsi üslubu işə qatmaq',
			'Gözəl və keyfiyyətli nəticəni öz gözünüzlə görmək',
			'Sakit, mehriban və hörmətli iş mühiti',
			'İnsanlara, heyvanlara və ya təbiətə real fayda vermək',
			'Çevik qrafik və öz tempinizlə işləmək',
		],
		demotivators: [
			'Sərt nəzarət və daimi rəqabət',
			'Dəyərlərinizə zidd tapşırıqlar',
			'Monoton, yaradıcılığa yer qoymayan iş',
			'Kobud və ya ictimai tənqid',
		],
		underPressureTips: [
			'Gərginlik artanda qısa müddətə təbiətə çıxın və ya əl işi ilə məşğul olun.',
			'Narahatlığınızı yazın və ondan bir konkret, kiçik addım çıxarın.',
			'Hər şeyi birdən nizama salmaq istəyini fərq edin və yalnız bir sahədən başlayın.',
			'Özünüzü dəyərsiz hiss etdiyiniz anda son uğurlarınızın siyahısına baxın.',
		],
		careerPaths: [
			{
				title: 'Zərgər-dizayner',
				why: 'Kiçik detallarla incə estetik məhsul yaratmaq Sizin əl bacarığınızı və gözəllik duyğunuzu birbaşa sənətə çevirir.',
			},
			{
				title: 'Kinooperator',
				why: 'İşığı, rəngi və anı hiss edərək hekayəni təsvirlə danışmaq Sizin vizual həssaslığınızdan maksimum istifadə edir.',
			},
			{
				title: 'Erqoterapevt',
				why: 'İnsanların gündəlik həyat bacarıqlarını praktik, fərdi məşqlərlə bərpa etmək Sizin mərhəmətinizi və əl işinə meylinizi birləşdirir.',
			},
			{
				title: 'UI dizayneri',
				why: 'Tətbiqlərin görünüşünü və istifadə hissini incəliklə qurmaq Sizin estetik duyğunuzu müasir və tələb olunan peşəyə çevirir.',
			},
			{
				title: 'Ekoturizm bələdçisi',
				why: 'Təbiəti sevmək və insanlara sakit, səmimi təcrübə yaşatmaq Sizin anı yaşamaq bacarığınıza uyğundur; Azərbaycanın dağ və meşə marşrutları bu sahədə geniş imkan yaradır.',
			},
		],
		developmentPlan: {
			d30: [
				'Hər gün 15 dəqiqəni yalnız yeni bir texnikanı məşq etməyə ayırın və nəticələri fotolarla qeyd edin.',
				'Hər həftə bir dəfə komanda müzakirəsində fikrinizi ilk dəqiqələrdə bildirin.',
				'Gələn bir ay üçün sadə büdcə və vaxt planı tərtib edin.',
			],
			d90: [
				'Sahənizdə praktik bacarığınızı artıran ustad dərsi və ya sertifikat kursunu bitirin.',
				'Bir işinizi sərgidə, müsabiqədə və ya ictimai platformada təqdim edin.',
				'Bir yaradıcı layihədə başqa sahədən olan biri ilə (məsələn, proqramçı və ya marketoloqla) əməkdaşlıq edin.',
			],
			y1: [
				'Yaradıcı bacarığınızdan gəlir əldə etmək üçün ilk sifarişləri və ya peşəkar işi təmin edin.',
				'Sifarişləri peşəkar şəkildə qəbul etmək üçün qiymət siyahısı və sadə müqavilə şablonu hazırlayın.',
				'Şəxsi brendinizi (portfolio, sosial şəbəkə səhifəsi) il boyu ardıcıl şəkildə inkişaf etdirin.',
			],
		},
		interviewTips: [
			'Özünüzü təqdim etmək çətin gələ bilər — portfolio nümunələrini göstərib onların hekayəsini danışın.',
			'Sakitliyinizi zəiflik kimi deyil, gərgin anda soyuqqanlılıq kimi təqdim edin.',
			'Tez qərar tələb edən hipotetik suallara (məsələn, "Sabah layihə dəyişsə, nə edərdiniz?") əvvəlcədən cavab hazırlayın.',
			'İş mühiti və komanda mədəniyyəti barədə sual verin — bu, Sizin üçün uyğunluğu yoxlamağın vacib yoludur.',
		],
	},

	ESTP: {
		code: 'ESTP',
		idealEnvironment:
			'Sizin üçün ideal mühit sürətli, dinamik və nəticənin dərhal göründüyü yerdir. Satış komandası, sahə işi olan layihələr, idman təşkilatı, tədbir və ya danışıqlar aparan biznes inkişafı şöbəsi kimi hərəkət və təşəbbüs tələb edən mühitlər Sizə enerji verir. Masa arxasından qalxıb müştəri ilə, sahədə və ya canlı vəziyyətdə işləmək imkanı Sizi motivasiya edir. Uzun hesabatlar, yavaş təsdiq prosesi və hərəkətsiz ofis gündəliyi isə Sizi tez sıxır.',
		teamRole:
			'Komandada Siz "fürsət ovçusu" və yerində həll tapan insansınız: başqaları planı müzakirə edərkən Siz artıq müştəri ilə danışır və ya problemi aradan qaldırırsınız. Gözlənilməz vəziyyətdə tez uyğunlaşır, komandanı hərəkətə gətirirsiniz. Danışıqlar, təqdimatlar və canlı ünsiyyət çox vaxt təbii olaraq Sizə düşür. Komandanın uzunmüddətli planla uyğun qalması üçün atdığınız addımları qısa yazılı xülasə ilə paylaşmaq faydalıdır.',
		asManager:
			'Menecer kimi Siz enerjili, praktik və nəticəyə fokuslanan rəhbərsiniz; komandanı şəxsi nümunə və sürətli qərarlarla irəli aparırsınız. Komanda Sizin cəsarətinizə və real vəziyyəti dəqiq oxumağınıza güvənir. Çətinlik isə uzunmüddətli strategiyada, sistemli hesabatlarda və əməkdaşların inkişaf planlamasında yaranır. Bu hissəni strukturlaşdırmaq üçün sabit rüblük planlaşdırma sessiyası və planlaşdırmada güclü müavin böyük kömək edər.',
		decisionMaking:
			'Siz qərarları real vaxtda, gözlə gördüyünüz faktlar və praktik nəticə əsasında verirsiniz. Fürsət pəncərəsinin qısa olduğu vəziyyətlərdə — danışıqlarda, böhranda, bazar dəyişəndə — bu sürət böyük üstünlükdür. Lakin bəzən qərarın uzunmüddətli maliyyə və ya münasibət nəticələri kifayət qədər yoxlanılmır. Hər böyük qərar üçün "Altı ay sonra bunun nəticəsi nə olacaq?" sualını özünüzə verməyi vərdişə çevirin.',
		learningStyle:
			'Siz ən yaxşı edərək, sınayaraq və real vəziyyətdə öyrənirsiniz: təcrübə proqramı, sahə işi, rol oyunları və simulyasiyalar Sizin üçün ən güclü formatdır. Öyrəndiyinizin dərhal praktik faydasını görmək marağınızı canlı saxlayır. Uzun nəzəri mühazirələrdə diqqətinizi saxlamaq çətindir, ona görə qısa fasilələr və aktiv qeyd aparmaq kömək edir. Rəqabət elementi — yarış, reytinq, çağırış — öyrənmə motivasiyanızı artırır.',
		conflict:
			'Münaqişədə Siz birbaşa və sürətli davranır, məsələni dərhal açıq müzakirə edib bağlamaq istəyirsiniz. Bu, gərginliyin uzanmasının qarşısını alır, lakin qarşı tərəf üçün həddindən artıq sürətli və kəskin ola bilər. Həmçinin, zarafatla gərginliyi azaltmaq cəhdiniz bəzən problemi ciddiyə almamaq kimi qəbul olunur. Qarşı tərəfə fikrini tam söyləməyə imkan verin və həll yolunu birlikdə seçin.',
		motivators: [
			'Dərhal görünən nəticə və sürətli qələbələr',
			'Rəqabət və çağırış elementi',
			'Sahədə, insanlarla canlı iş',
			'Risk götürmək və təşəbbüs göstərmək azadlığı',
			'Performansa görə maddi mükafat',
		],
		demotivators: [
			'Uzun, hərəkətsiz masa arxası işi',
			'Yavaş, çoxmərhələli təsdiq prosesləri',
			'Praktik faydası görünməyən nəzəri tapşırıqlar',
			'Hər addımın sərt qaydalarla məhdudlaşdırılması',
		],
		underPressureTips: [
			'Stress anında risk iştahınız artır — hər riskli addımdan əvvəl ən pis halda nə itirə biləcəyinizi bir cümlə ilə yazın.',
			'Gərginliyi fiziki fəaliyyətlə boşaldın: idman, qaçış və ya komanda oyunu.',
			'Gələcəklə bağlı qaranlıq fikirlər yarananda bu həftə ata biləcəyiniz bir praktik addımı yazın.',
			'Etibarlı dostunuzla vəziyyəti açıq danışın və ondan dürüst rəy istəyin.',
		],
		careerPaths: [
			{
				title: 'Korporativ satış meneceri (B2B)',
				why: 'Böyük müştərilərlə danışıqlar aparmaq, fürsəti tez görmək və müqaviləni bağlamaq Sizin inandırıcılığınızı və sürətli reaksiyanızı birbaşa nəticəyə çevirir.',
			},
			{
				title: 'Təcili tibbi yardım feldşeri',
				why: 'Gərgin vəziyyətdə saniyələr içində qərar vermək və praktik kömək göstərmək Sizin soyuqqanlılığınıza və hərəkətə hazırlığınıza uyğundur.',
			},
			{
				title: 'İdman agenti',
				why: 'İdmançıların karyerasını idarə etmək və klublarla danışıqlar aparmaq Sizin ünsiyyət gücünüzü və rəqabət sevginizi birləşdirir.',
			},
			{
				title: 'Treyder',
				why: 'Bazardakı dəyişikliklərə real vaxtda reaksiya vermək və riskləri anında qiymətləndirmək Sizin sürətli qərarvermə bacarığınızı tələb edir.',
			},
			{
				title: 'Sahə əməliyyatları meneceri',
				why: 'Tikinti, logistika və ya enerji layihəsində sahədə komandanı idarə edib problemləri yerindəcə həll etmək Sizin praktik liderliyinizə uyğundur.',
			},
		],
		developmentPlan: {
			d30: [
				'Bir ay ərzində verdiyiniz sürətli qərarları qeyd edin və ay sonunda hansının yaxşı, hansının zəif nəticə verdiyini təhlil edin.',
				'Hər gün bir rutin, lakin vacib tapşırığı (hesabat, sənəd) günortadan əvvəl bitirin.',
				'Komandanızdan bir nəfərlə həftəlik qısa görüş keçirin və onun fikrini sözünü kəsmədən sona qədər dinləyin.',
			],
			d90: [
				'Satış, danışıqlar və ya layihə idarəçiliyi üzrə praktik sertifikat proqramını bitirin.',
				'Başladığınız bir layihəni sona qədər aparın və nəticəsini rəqəmlərlə təqdim edin.',
				'Gələn bir il üçün karyera məqsədlərinizi yazın və onları rüblük mərhələlərə bölün.',
			],
			y1: [
				'Komanda və ya regional rəhbərlik rolunu hədəfləyin.',
				'Sahənizdə tanınan yarışmada, hakatonda və ya satış müsabiqəsində iştirak edib nəticə əldə edin.',
				'Detallara güclü həmkarla uzunmüddətli əməkdaşlıq modeli yaradın.',
			],
		},
		interviewTips: [
			'Enerjiniz və xarizmanız müsahibədə üstünlükdür, lakin hazırlıqsız görünməmək üçün şirkət barədə əvvəlcədən faktlar öyrənin.',
			'Uğurlarınızı rəqəmlərlə danışın: satış həcmi, artım faizi, bağlanmış müqavilələr.',
			'Uzunmüddətli planınız soruşulanda 3–5 illik konkret məqsəd deyə bilməyiniz Sizi daha etibarlı göstərir.',
			'Zarafatı ölçülü saxlayın və müsahibin üslubuna uyğunlaşın.',
		],
	},

	ESFP: {
		code: 'ESFP',
		idealEnvironment:
			'Sizin üçün ideal mühit insanlarla dolu, canlı, rəngarəng və hər günün fərqli keçdiyi yerdir. Turizm şirkəti, tədbir agentliyi, mağaza və ya şou-rum, səhnə, media studiyası və ya uşaqlarla işləyən təhsil mərkəzi kimi enerjili mühitlər Sizə uyğundur. Komanda ruhunun güclü olduğu, uğurların birgə qeyd olunduğu və praktik işin üstünlük təşkil etdiyi kollektivdə parlayırsınız. Səssiz ofisdə uzun saatlar ekran qarşısında tək işləmək isə enerjinizi tamamilə tükəndirir.',
		teamRole:
			'Komandada Siz "əhval yaradıcısı" və insanlar arasında körpüsünüz: gərginliyi zarafatla azaldır, insanları bir araya gətirir, komandanın enerjisini qaldırırsınız. Müştəri və ya auditoriya ilə canlı təmas tələb edən işlərdə ön sırada olursunuz. Praktik, dərhal görülməli olan tapşırıqları sürətlə və həvəslə yerinə yetirirsiniz. Komandanın planlaşdırma mərhələsinə də qoşulmaq praktik baxışınızı uzunmüddətli qərarlara gətirir.',
		asManager:
			'Menecer kimi Siz əməkdaşlarla isti, səmimi münasibət quran və komandanın motivasiyasını yüksək saxlayan rəhbərsiniz. Komandanızda iş atmosferi xoş olur və insanlar işə həvəslə gəlirlər. Çətinlik isə uzunmüddətli planlaşdırmada, büdcə nəzarətində və çətin rəy söhbətlərində yaranır. Aydın həftəlik planlaşdırma ritualı və rəqəmləri izləyən sadə cədvəl enerjinizi davamlı nəticəyə çevirir.',
		decisionMaking:
			'Siz qərarları anın imkanları, insanların reaksiyası və praktik fayda əsasında verirsiniz. Bu, Sizi çevik və real vəziyyətə tez uyğunlaşan edir. Lakin xoş və maraqlı variantı seçmək meyli bəzən daha az maraqlı, amma uzunmüddətli faydası olan seçimi kölgədə qoyur. Vacib qərarlarda özünüzdən "Bu, bir il sonra da məni məmnun edəcəkmi?" deyə soruşmaq balans yaradır.',
		learningStyle:
			'Siz ən yaxşı canlı, interaktiv və praktik formatda öyrənirsiniz: rol oyunları, qrup tapşırıqları, nümayişlər və real təcrübə Sizə ən çox yarayır. Öyrəndiyinizi başqaları ilə bölüşmək və ya dərhal tətbiq etmək biliyi möhkəmləndirir. Uzun, səssiz oxu və mücərrəd nəzəriyyə Sizin üçün ən çətin formatdır. Dərsi qısa hissələrə bölmək və hər hissədən sonra praktik məşq etmək diqqətinizi saxlayır.',
		conflict:
			'Münaqişədə Siz əvvəlcə zarafatla və ya mövzunu dəyişməklə gərginliyi azaltmağa çalışırsınız. Tənqidi şəxsi qəbul etdikdə isə emosional reaksiya verə bilərsiniz. Problemi ertələmək qısa müddətdə rahatlıq gətirsə də, sonradan daha böyük gərginliyə səbəb olur. Çətin söhbəti sakit bir məkanda, əsas fikrinizi əvvəlcədən hazırlayaraq aparmaq Sizə həm səmimi, həm də aydın qalmağa imkan verir.',
		motivators: [
			'İnsanlarla canlı və müxtəlif ünsiyyət',
			'İşin nəticəsinin dərhal görünməsi və alqışlanması',
			'Komanda ilə birgə uğurları qeyd etmək',
			'Hər günün fərqli və yeni olması',
			'Estetik, gözəl mühitdə işləmək',
		],
		demotivators: [
			'Uzun müddət tək və səssiz işləmək',
			'Monoton, təkrarlanan inzibati işlər',
			'Soyuq, tənqidi və gərgin atmosfer',
			'Praktik nəticəsi görünməyən uzunmüddətli nəzəri layihələr',
		],
		underPressureTips: [
			'Problemdən qaçmaq üçün əyləncəyə yönəldiyinizi fərq edin və əvvəlcə bir kiçik praktik addım atın.',
			'Ən çətin tapşırığı günün ən enerjili saatına qoyun.',
			'Yaxın dostunuzla vəziyyəti danışın, lakin söhbəti konkret plana çevirin.',
			'Narahatlıq yaradan fikri "Mən nə edə bilərəm?" sualına çevirin və cavabı bir cümlə ilə yazın.',
		],
		careerPaths: [
			{
				title: 'Səyahət bələdçisi',
				why: 'Hər gün yeni insanlarla tanış olmaq və onlara yaddaqalan təcrübə yaşatmaq Sizin enerjinizi və ünsiyyət bacarığınızı tam açır; Bakıda və regionlarda turizmin inkişafı bu peşəyə tələbatı artırır.',
			},
			{
				title: 'Vizual merçendayzer',
				why: 'Mağaza və vitrinləri estetik və cəlbedici şəkildə tərtib etmək Sizin zövqünüzü və praktik yaradıcılığınızı birbaşa satış nəticəsinə çevirir.',
			},
			{
				title: 'Uşaq əyləncə proqramlarının təşkilatçısı',
				why: 'Uşaqlar üçün canlı, oyunlarla dolu proqramlar hazırlamaq Sizin spontanlığınızı və isti münasibətinizi mənalı işə çevirir.',
			},
			{
				title: 'Brend səfiri',
				why: 'Məhsulu tədbirlərdə, sosial mediada və canlı görüşlərdə təqdim etmək Sizin xarizmanızdan və insanlarla tez dil tapmağınızdan istifadə edir.',
			},
			{
				title: 'Rəqs müəllimi',
				why: 'Bədən hərəkəti, musiqi və insanlarla canlı enerji mübadiləsi Sizin həyatsevərliyinizə ideal uyğundur.',
			},
		],
		developmentPlan: {
			d30: [
				'Hər həftə bir dəfə gələn həftənin planını 15 dəqiqə ərzində yazın.',
				'Bir dostunuzla birlikdə 30 günlük öyrənmə və ya idman çağırışına başlayın və bir-birinizin nəticəsini izləyin.',
				'Təxirə saldığınız bir xoşagəlməz məsələni (söhbət, sənəd və ya ödəniş) həll edin.',
			],
			d90: [
				'Sahənizdə praktik sertifikat və ya kurs (məsələn, tədbir menecmenti, satış və ya bələdçilik üzrə) bitirin.',
				'Bir layihəni planlaşdırmadan icraya qədər tam aparın və nəticəsini ölçün.',
				'Uzunmüddətli bir məqsəd üçün mentor tapın və ayda bir dəfə onunla görüşün.',
			],
			y1: [
				'Uzunmüddətli karyera məqsədinizi yazın və onu rüblük addımlara bölün.',
				'İnsanlarla işləyən sahədə məsuliyyət daşıyan bir rola (komanda lideri, koordinator) keçin.',
				'İl ərzində bir xarici dildə və ya rəqəmsal bacarıqda ölçülə bilən səviyyəyə (məsələn, sertifikata) çatın.',
			],
		},
		interviewTips: [
			'Səmimiliyiniz müsahibədə tez isti atmosfer yaradır, lakin cavablarınızın konkret olması üçün hər birini real nümunə ilə bitirin.',
			'Uzunmüddətli planınız barədə suala əvvəlcədən hazırlaşın — bu, ciddiliyinizi göstərir.',
			'Komanda və müştəri ilə bağlı uğurlarınızı rəqəmlərlə gücləndirin.',
			'Geyiminizi və təqdimatınızı şirkətin mədəniyyətinə uyğunlaşdırın — estetik zövqünüz burada üstünlükdür.',
		],
	},
}

export const MBTI_POLE_DETAIL: Record<string, MbtiPoleDetail> = {
	E: {
		pole: 'E',
		atWork:
			'İş yerində Siz komanda ilə birbaşa ünsiyyət, iclaslar və birgə beyin fırtınası vasitəsilə ən yaxşı nəticəni göstərirsiniz. Tapşırıqlara tez başlayır, fikirləri başqaları ilə səsləndirərək inkişaf etdirirsiniz. Uzun müddət tək işləmək lazım olanda enerji səviyyəniz nəzərəçarpacaq dərəcədə düşə bilər.',
		inCommunication:
			'Ünsiyyətdə Siz təşəbbüskarsınız: söhbəti başlayır, sualları dərhal verir və fikri danışa-danışa formalaşdırırsınız. Canlı görüş və telefon zəngi Sizə uzun yazışmadan daha rahat gəlir. Sürətli tempiniz söhbətə enerji qatır, lakin sakit həmsöhbətlərə danışmaq üçün yer qoymaq vacibdir.',
		blindSpot:
			'Ucadan düşündüyünüz üçün başqaları ilkin ideyanızı yekun qərar kimi qəbul edə bilər. Həmçinin, susqun həmkarların dəyərli fikirlərini eşitmək üçün kifayət qədər fasilə verməyə bilərsiniz.',
		tip: 'Vacib iclaslarda öz fikrinizi deməzdən əvvəl ən sakit iştirakçının fikrini soruşun. Ucadan düşünəndə bunu "Hələ fikirləşirəm" deyərək qeyd edin.',
	},
	I: {
		pole: 'I',
		atWork:
			'İş yerində Siz dərin fokus və müstəqil iş tələb edən tapşırıqlarda xüsusilə güclüsünüz. İşi əvvəlcə daxilən düşünüb planlaşdırır, sonra keyfiyyətli nəticə ilə ortaya çıxırsınız. Daimi kəsintilər və açıq ofisin səs-küyü məhsuldarlığınızı ciddi şəkildə azalda bilər.',
		inCommunication:
			'Ünsiyyətdə Siz dinləyən və düşünərək cavab verən tərəfsiniz; yazılı ünsiyyət çox vaxt fikirlərinizi daha dəqiq ifadə etməyə imkan verir. Təkbətək söhbətlərdə böyük qrupdakından daha açıq və rahatsınız. Cavabdan əvvəlki fasiləniz başqalarına maraqsızlıq kimi görünə bilər, halbuki bu, düşüncənin əlamətidir.',
		blindSpot:
			'Fikrinizi tam hazır olana qədər bölüşmədiyiniz üçün qərarlar bəzən Sizin töhfəniz olmadan qəbul edilir. Susqunluğunuz isə razılıq və ya maraqsızlıq kimi yanlış yozula bilər.',
		tip: 'İclasdan əvvəl gündəliyi istəyin və əsas fikrinizi qısa qeyd edin ki, onu müzakirənin ilk yarısında səsləndirə biləsiniz. Ehtiyac olanda "Bu barədə düşünüb yazılı cavab verərəm" deyin.',
	},
	S: {
		pole: 'S',
		atWork:
			'İş yerində Siz faktlara, real məlumatlara və sınaqdan keçmiş üsullara əsaslanaraq dəqiq və etibarlı nəticə verirsiniz. Başqalarının gözdən qaçırdığı praktik detalları — rəqəmdəki səhvi, prosesdəki boşluğu — tez görürsünüz. Planın reallığa uyğun olub-olmadığını yoxlamaq komandada çox vaxt Sizin rolunuz olur.',
		inCommunication:
			'Ünsiyyətdə Siz konkret nümunələr, rəqəmlər və addım-addım izahlarla danışırsınız. Başqalarından da aydın və praktik məlumat gözləyir, mücərrəd ifadə eşidəndə "Konkret olaraq nəyi nəzərdə tutursunuz?" deyə soruşursunuz. Bu, ünsiyyəti dəqiq edir, lakin vizyondan danışan həmkarlarla anlaşmanı çətinləşdirə bilər.',
		blindSpot:
			'Bugünkü reallığa fokuslandığınız üçün gələcəkdə yarana biləcək trendləri və yeni imkanları gec görə bilərsiniz. Həmçinin, hələ sübut olunmamış ideyaları vaxtından əvvəl rədd etmək riski var.',
		tip: 'Yeni ideyanı qiymətləndirəndə "Bu, nə vaxtsa işləyə bilərmi?" sualını da verin. İlk reaksiyanız şübhə olsa belə, ideyaya kiçik sınaq şansı tanıyın.',
	},
	N: {
		pole: 'N',
		atWork:
			'İş yerində Siz böyük mənzərəni görən, trendləri əvvəlcədən hiss edən və yeni yanaşmalar təklif edən insansınız. Strategiya, innovasiya və uzunmüddətli planlaşdırma tələb edən işlərdə xüsusilə dəyərlisiniz. Eyni üsulla təkrarlanan tapşırıqlar isə marağınızı tez azaldır.',
		inCommunication:
			'Ünsiyyətdə Siz ideyalar, metaforalar və "əgər..." fərziyyələri ilə danışır, söhbətin ümumi mənasına və arxasındakı əlaqələrə fokuslanırsınız. Fikirdən-fikrə sürətlə keçməyiniz həmsöhbətinizi çaşdıra bilər. Praktik düşünən insanlar üçün ideyanızı konkret nümunə ilə tamamlamaq anlaşmanı xeyli asanlaşdırır.',
		blindSpot:
			'Gələcək imkanlara fokuslandığınız üçün bugünkü praktik detalları və icra addımlarını nəzərdən qaçıra bilərsiniz. Bu isə parlaq ideyanın real nəticəyə çevrilməsini gecikdirir.',
		tip: 'Hər yeni ideyanı ən azı bir konkret ilk addım və son tarixlə birlikdə təqdim edin. Detallara güclü həmkarın rəyini erkən alın.',
	},
	T: {
		pole: 'T',
		atWork:
			'İş yerində Siz problemləri obyektiv təhlil edir, səbəb-nəticə əlaqəsini tapır və qərarları məntiqi meyarlarla əsaslandırırsınız. Emosional gərginlik olan vəziyyətlərdə belə soyuqqanlı qala bilməyiniz komandaya aydınlıq gətirir. Performansın ölçüldüyü, şəffaf qaydaları olan mühitdə ən rahat işləyirsiniz.',
		inCommunication:
			'Ünsiyyətdə Siz birbaşa, qısa və məzmuna yönəlmiş danışırsınız; rəy verəndə əsas diqqəti işin keyfiyyətinə yönəldirsiniz. Mübahisəni fikirlərin sınağı kimi görür, onu şəxsi qəbul etmirsiniz. Lakin həmsöhbətiniz bu yanaşmanı bölüşməyəndə sözləriniz gözlədiyinizdən daha sərt təsir bağışlaya bilər.',
		blindSpot:
			'Məntiqə fokuslandığınız üçün qərarların insanların motivasiyasına və münasibətlərə təsirini kifayət qədər nəzərə almaya bilərsiniz. Nəticədə doğru qərar komandanın müqaviməti ilə qarşılaşa bilər.',
		tip: 'Tənqidi rəydən əvvəl bir konkret müsbət cəhəti qeyd edin. Qərarı elan edərkən onun insanlara necə təsir edəcəyini də bir cümlə ilə izah edin.',
	},
	F: {
		pole: 'F',
		atWork:
			'İş yerində Siz komandanın əhvalını hiss edən, insanlar arasında etimad quran və qərarların insani tərəfini düşünən həmkarsınız. Müştəri, tələbə və ya pasiyentlə işləyən sahələrdə bu həssaslıq birbaşa keyfiyyətə çevrilir. Dəyərlərinizə uyğun olan iş Sizə gözləniləndən çox enerji və əzm verir.',
		inCommunication:
			'Ünsiyyətdə Siz isti, nəzakətli və diqqətlisiniz; sözlərinizi qarşı tərəfi incitməmək üçün seçirsiniz. İnsanlar Sizinlə danışanda eşidildiklərini hiss edirlər. Lakin çətin mesajı həddindən artıq yumşaltdıqda onun əsas mənası itə bilər.',
		blindSpot:
			'Harmoniyanı qorumaq istəyi bəzən zəruri, lakin xoşagəlməz qərarları və açıq rəyi ertələməyə səbəb olur. Həmçinin, obyektiv meyarlar əvəzinə şəxsi münasibətə əsaslanan qiymətləndirmə riski yarana bilər.',
		tip: 'Çətin rəyi verərkən əvvəlcə faktı, sonra onun təsirini, sonra isə dəstək təklifinizi deyin. Qərar verməzdən əvvəl "Bu, rəqəmlər baxımından da düzgündürmü?" sualını əlavə edin.',
	},
	J: {
		pole: 'J',
		atWork:
			'İş yerində Siz planlaşdıran, prioritet qoyan və işləri son tarixdən əvvəl bitirən insansınız. Layihənin başlanğıcında aydın mərhələlər və məsuliyyət bölgüsü yaratmaq Sizin təbii bacarığınızdır. Komanda Sizin vaxtında nəticə verəcəyinizə güvənir.',
		inCommunication:
			'Ünsiyyətdə Siz müzakirəni qərara və konkret razılaşmaya doğru aparmağa çalışırsınız. "Beləliklə, kim nə vaxta nə edir?" sualı söhbətlərinizin təbii sonudur. Açıq qalan və nəticəsiz bitən müzakirələr isə Sizi narahat edir.',
		blindSpot:
			'Qərarı tez bağlamaq istəyi bəzən yeni və daha yaxşı məlumatı nəzərə almağa imkan vermir. Planlarınızın gözlənilmədən dəyişməsi Sizə lazım olduğundan çox stress yarada bilər.',
		tip: 'Planlarınıza qəsdən "çeviklik zonası" — ehtiyat vaxt və alternativ variant — əlavə edin. Vacib qərarı bağlamazdan əvvəl "Gözlədiyimiz yeni məlumat varmı?" deyə soruşun.',
	},
	P: {
		pole: 'P',
		atWork:
			'İş yerində Siz dəyişən şərtlərə tez uyğunlaşan, gözlənilməz problemə yerindəcə həll tapan insansınız. Çoxlu variantı açıq saxlamaq Sizə yaradıcı və çevik yanaşmalar tapmağa imkan verir. Son tarix yaxınlaşanda fokusunuz və məhsuldarlığınız kəskin artır.',
		inCommunication:
			'Ünsiyyətdə Siz açıq fikirli, yeni ideyalara və fərqli baxışlara həvəslisiniz. Müzakirəni tez bağlamaq əvəzinə imkanları araşdırmağı sevirsiniz. Lakin bu, qərar gözləyən həmkarlarda qeyri-müəyyənlik hissi yarada bilər.',
		blindSpot:
			'Seçimləri açıq saxlamaq meyli bəzən qərarın və ya işin həddindən artıq gecikməsinə səbəb olur. Son anda işləmək üslubu Sizə uyğun olsa da, planlı həmkarlarınız üçün stress mənbəyinə çevrilə bilər.',
		tip: 'Böyük tapşırıqlar üçün rəsmi son tarixdən əvvəl özünüzə ara son tarixlər qoyun. Qərarı açıq saxladığınızda komandaya nə vaxt qəti cavab verəcəyinizi bildirin.',
	},
}
