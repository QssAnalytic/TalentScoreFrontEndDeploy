// MBTI-type (16 types) test content: question bank, pole descriptions and type profiles.
// All statements are original items written for Talent Score; they are not taken from
// any official MBTI® or 16Personalities questionnaire.
// Each axis has 16 statements: 8 keyed to each pole, so acquiescence bias cancels out.
import { MbtiQuestion, MbtiPoleText, MbtiTypeProfile } from 'tests/types'

export const MBTI_QUESTIONS: MbtiQuestion[] = [
	{ id: 'm01', axis: 'EI', keyed: 'E', text: 'Yeni bir qrupa qoşulanda adətən söhbətə ilk başlayan mən oluram.' },
	{ id: 'm02', axis: 'SN', keyed: 'N', text: 'Gündəlik işlərlə məşğul olarkən fikrim tez-tez gələcək planlara və imkanlara qaçır.' },
	{ id: 'm03', axis: 'TF', keyed: 'T', text: 'Çətin bir qərar verəndə ilk növbədə faktları və məntiqi arqumentləri ölçüb-biçirəm.' },
	{ id: 'm04', axis: 'JP', keyed: 'P', text: 'Ən yaxşı işimi son tarix yaxınlaşanda, son anın təzyiqi altında görürəm.' },
	{ id: 'm05', axis: 'EI', keyed: 'I', text: 'Cavab verməzdən əvvəl fikirlərimi öz içimdə tam qaydasına salmağı üstün tuturam.' },
	{ id: 'm06', axis: 'SN', keyed: 'S', text: 'Yeni bir işi öyrənəndə əvvəlcə konkret nümunələri və addım-addım təlimatı görmək istəyirəm.' },
	{ id: 'm07', axis: 'TF', keyed: 'F', text: 'Qərar verəndə bunun ətrafımdakı insanlara necə təsir edəcəyini birinci növbədə düşünürəm.' },
	{ id: 'm08', axis: 'JP', keyed: 'J', text: 'İmtahana hazırlaşanda əvvəlcədən dəqiq cədvəl qurur və ona sadiq qalıram.' },
	{ id: 'm09', axis: 'EI', keyed: 'I', text: 'Çox insanla keçən bir gündən sonra özümə gəlmək üçün tək qalmağa ehtiyac duyuram.' },
	{ id: 'm10', axis: 'SN', keyed: 'S', text: 'Bir ideyanı qiymətləndirəndə ilk növbədə onun indi praktikada işə yarayıb-yaramadığına baxıram.' },
	{ id: 'm11', axis: 'TF', keyed: 'T', text: 'Dostumun ideyasında səhv görəndə bunu açıq və birbaşa deməyi düzgün hesab edirəm.' },
	{ id: 'm12', axis: 'JP', keyed: 'J', text: 'Tapşırığı son günə saxlamaq əvəzinə, onu vaxtından əvvəl bitirməyə çalışıram.' },
	{ id: 'm13', axis: 'EI', keyed: 'E', text: 'Yorucu bir həftədən sonra dostlarla görüşmək mənə yenidən enerji verir.' },
	{ id: 'm14', axis: 'SN', keyed: 'N', text: 'Faktların özündən çox, onların arxasındakı gizli mənaları və əlaqələri axtarmaq mənə maraqlıdır.' },
	{ id: 'm15', axis: 'TF', keyed: 'T', text: 'Qrup işini qiymətləndirəndə hər kəsə eyni obyektiv meyarları tətbiq etməyə çalışıram.' },
	{ id: 'm16', axis: 'JP', keyed: 'P', text: 'Günümü əvvəlcədən planlamaqdansa, nə edəcəyimə əhvalıma və şəraitə görə qərar verirəm.' },
	{ id: 'm17', axis: 'EI', keyed: 'I', text: 'Böyük dost qrupundansa, bir-iki yaxın dostla dərin söhbəti daha çox sevirəm.' },
	{ id: 'm18', axis: 'SN', keyed: 'N', text: 'Bir mövzunu öyrənəndə detallardan əvvəl ümumi mənzərəni anlamağa çalışıram.' },
	{ id: 'm19', axis: 'TF', keyed: 'F', text: 'Komandada gərginlik olanda hər kəsin özünü rahat hiss etməsi mənim üçün xüsusilə vacibdir.' },
	{ id: 'm20', axis: 'JP', keyed: 'J', text: 'Səyahətə çıxmazdan əvvəl marşrutu, qalacağım yeri və əsas planları müəyyənləşdirirəm.' },
	{ id: 'm21', axis: 'EI', keyed: 'E', text: 'Bir məsələ haqqında fikirlərimi başqaları ilə danışa-danışa daha yaxşı aydınlaşdırıram.' },
	{ id: 'm22', axis: 'SN', keyed: 'S', text: 'Ətrafımdakı kiçik detalları, məsələn, rəngləri, səsləri və dəyişiklikləri asanlıqla fərq edirəm.' },
	{ id: 'm23', axis: 'TF', keyed: 'F', text: 'Kiməsə tənqid bildirməzdən əvvəl onu incitməmək üçün sözlərimi diqqətlə seçirəm.' },
	{ id: 'm24', axis: 'JP', keyed: 'P', text: 'Dostlar gözlənilmədən bir yerə getməyi təklif edəndə planlarımı asanlıqla dəyişirəm.' },
	{ id: 'm25', axis: 'EI', keyed: 'E', text: 'Dərsdə və ya iclasda sual yarananda fikrimi dərhal ucadan bildirirəm.' },
	{ id: 'm26', axis: 'SN', keyed: 'N', text: 'Tanış bir işi hər dəfə bir az fərqli, yeni bir yolla etməyə meyilliyəm.' },
	{ id: 'm27', axis: 'TF', keyed: 'T', text: 'Mübahisədə ilk növbədə hansı arqumentin məntiqcə daha güclü olduğuna diqqət edirəm.' },
	{ id: 'm28', axis: 'JP', keyed: 'P', text: 'Qərar verməyə tələsmirəm, çünki yeni məlumat gəldikcə daha yaxşı variant çıxa bilər.' },
	{ id: 'm29', axis: 'EI', keyed: 'I', text: 'Universitetdə mümkün olanda tapşırıqları qrupla deyil, təkbaşına yerinə yetirməyi seçirəm.' },
	{ id: 'm30', axis: 'SN', keyed: 'S', text: 'Sınaqdan keçmiş üsullarla işləmək mənə yeni üsullar sınamaqdan daha rahat gəlir.' },
	{ id: 'm31', axis: 'TF', keyed: 'F', text: 'Bir seçimin dəyərlərimə uyğun olması onun məntiqli görünməsindən mənim üçün daha önəmlidir.' },
	{ id: 'm32', axis: 'JP', keyed: 'J', text: 'Bir məsələ ilə bağlı qərar verib onu bağlamaq, açıq saxlamaqdan mənə daha rahat gəlir.' },
	{ id: 'm33', axis: 'EI', keyed: 'I', text: 'Telefonla danışmaq əvəzinə yazılı mesajla ünsiyyət qurmaq mənə daha rahat gəlir.' },
	{ id: 'm34', axis: 'SN', keyed: 'S', text: 'Dərsdə nəzəriyyədən çox, real həyatdan götürülmüş faktlar və rəqəmlər marağımı çəkir.' },
	{ id: 'm35', axis: 'TF', keyed: 'F', text: 'Dostum dərdini danışanda məsləhət verməkdən əvvəl ona sadəcə yanında olduğumu hiss etdirirəm.' },
	{ id: 'm36', axis: 'JP', keyed: 'P', text: 'Eyni vaxtda bir neçə layihəyə başlayıb aralarında keçid etmək mənə xoş gəlir.' },
	{ id: 'm37', axis: 'EI', keyed: 'E', text: 'İş yerində tək çalışmaqdansa, komanda ilə birlikdə işləmək mənə daha xoş gəlir.' },
	{ id: 'm38', axis: 'SN', keyed: 'N', text: 'Kitab oxuyanda və ya film izləyəndə simvollar və gizli mənalar haqqında çox düşünürəm.' },
	{ id: 'm39', axis: 'TF', keyed: 'T', text: 'Bir problemi müzakirə edəndə emosiyaları kənara qoyub səbəb-nəticə əlaqəsinə fokuslanıram.' },
	{ id: 'm40', axis: 'JP', keyed: 'J', text: 'İş masam, fayllarım və qovluqlarım müəyyən bir sistemə görə səliqə ilə düzülüb.' },
	{ id: 'm41', axis: 'EI', keyed: 'I', text: 'Boş vaxtımı kitab, musiqi və ya şəxsi hobbilərlə sakit keçirmək məni dincəldir.' },
	{ id: 'm42', axis: 'SN', keyed: 'S', text: 'Təlimatları oxuyanda hər addımı diqqətlə və ardıcıllıqla izləməyi üstün tuturam.' },
	{ id: 'm43', axis: 'TF', keyed: 'T', text: 'Tənqid alanda onun necə deyildiyindən çox, haqlı olub-olmamasına diqqət edirəm.' },
	{ id: 'm44', axis: 'JP', keyed: 'J', text: 'Planlarım son anda dəyişəndə bu məni narahat edir və uyğunlaşmağım vaxt aparır.' },
	{ id: 'm45', axis: 'EI', keyed: 'I', text: 'Yeni bir kollektivdə insanlarla yaxınlaşmazdan əvvəl bir müddət onları müşahidə edirəm.' },
	{ id: 'm46', axis: 'SN', keyed: 'N', text: 'Dostlarla söhbətdə "əgər belə olsaydı..." tipli fərziyyələr qurmaq xoşuma gəlir.' },
	{ id: 'm47', axis: 'TF', keyed: 'F', text: 'Ailədə mübahisə düşəndə tərəfləri barışdırmaq və hər kəsi anlamaq adətən mənim rolum olur.' },
	{ id: 'm48', axis: 'JP', keyed: 'P', text: 'Sərt cədvəl və qaydalar olan işdə özümü məhdudlaşdırılmış hiss edirəm.' },
	{ id: 'm49', axis: 'EI', keyed: 'E', text: 'İstirahət günümü evdə keçirməkdənsə, adətən insanlarla dolu bir yerə getmək istəyirəm.' },
	{ id: 'm50', axis: 'SN', keyed: 'N', text: 'Yeni ideyanın indiki faydasından çox, gələcəkdə nəyə çevrilə biləcəyi məni həyəcanlandırır.' },
	{ id: 'm51', axis: 'TF', keyed: 'T', text: 'Kiminsə problemini dinləyəndə dərhal onu həll etmək üçün praktik təkliflər verməyə başlayıram.' },
	{ id: 'm52', axis: 'JP', keyed: 'P', text: 'Səyahətdə hər şeyi əvvəlcədən planlamadan, yerində kəşf etməyi daha maraqlı hesab edirəm.' },
	{ id: 'm53', axis: 'EI', keyed: 'E', text: 'Tədbirlərdə tanımadığım insanlarla tanış olmaq mənim üçün asan və maraqlıdır.' },
	{ id: 'm54', axis: 'SN', keyed: 'S', text: 'Söhbətlərdə gələcək ehtimallardan çox, baş vermiş real hadisələrdən danışmağı sevirəm.' },
	{ id: 'm55', axis: 'TF', keyed: 'F', text: 'Ətrafımdakı insanların əhvalı mənim əhvalıma və iş tempimə asanlıqla təsir edir.' },
	{ id: 'm56', axis: 'JP', keyed: 'J', text: 'Gündəlik işlərimi siyahıya yazıb bitirdikcə üstündən xətt çəkmək mənə zövq verir.' },
	{ id: 'm57', axis: 'EI', keyed: 'I', text: 'İclaslarda fikrimi çox vaxt yalnız soruşulanda və ya hər şeyi götür-qoy edəndən sonra deyirəm.' },
	{ id: 'm58', axis: 'SN', keyed: 'S', text: 'Yemək bişirəndə və ya nəsə quraşdıranda reseptə və təlimata dəqiq əməl edirəm.' },
	{ id: 'm59', axis: 'TF', keyed: 'F', text: 'Haqlı olsam belə, münasibəti qorumaq üçün mübahisəni uzatmamağı seçirəm.' },
	{ id: 'm60', axis: 'JP', keyed: 'P', text: 'Otağım və ya iş masam bir az qarışıq olsa da, nəyin harada olduğunu bilirəm.' },
	{ id: 'm61', axis: 'EI', keyed: 'E', text: 'Ailə məclislərində və dost görüşlərində söhbəti canlandıran adam çox vaxt mən oluram.' },
	{ id: 'm62', axis: 'SN', keyed: 'N', text: 'Bir-biri ilə əlaqəsiz görünən sahələr arasında ortaq cəhətlər tapmaq mənə zövq verir.' },
	{ id: 'm63', axis: 'TF', keyed: 'T', text: 'Bir planın zəif tərəflərini tapmaq və onu sual altına qoymaq mənə təbii gəlir.' },
	{ id: 'm64', axis: 'JP', keyed: 'J', text: 'Həftəsonu nə edəcəyimi adətən həftənin əvvəlindən bilmək istəyirəm.' },
]

export const MBTI_POLES: MbtiPoleText[] = [
	{
		pole: 'E',
		title: 'Ekstraversiya',
		short: 'Enerjini insanlardan, ünsiyyətdən və fəaliyyətdən alırsınız.',
		description:
			'Siz diqqətinizi daha çox xarici dünyaya — insanlara, hadisələrə və fəaliyyətə yönəldirsiniz. Fikirlərinizi çox vaxt danışa-danışa aydınlaşdırır, ünsiyyət zamanı enerji toplayırsınız. Canlı mühit və geniş sosial dairə Sizə xoş gəlir.',
	},
	{
		pole: 'I',
		title: 'İntroversiya',
		short: 'Enerjini daxili dünyanızdan, sakitlikdən və düşüncədən alırsınız.',
		description:
			'Siz diqqətinizi daha çox daxili dünyanıza — fikirlərə, hisslərə və təəssüratlara yönəldirsiniz. Danışmazdan əvvəl düşünür, az sayda, lakin dərin münasibətlərə üstünlük verirsiniz. Uzun ünsiyyətdən sonra enerjinizi bərpa etmək üçün təkbaşına vaxt Sizə lazımdır.',
	},
	{
		pole: 'S',
		title: 'Sensorika',
		short: 'Faktlara, təcrübəyə və konkret detallara güvənirsiniz.',
		description:
			'Siz məlumatı daha çox duyğu üzvləriniz və real təcrübə vasitəsilə qəbul edirsiniz. İndiki ana, konkret faktlara və praktik tətbiqə diqqət yetirirsiniz. Sınanmış üsullar və addım-addım təlimatlar Sizə daha etibarlı görünür.',
	},
	{
		pole: 'N',
		title: 'İntuisiya',
		short: 'Mənalara, əlaqələrə və gələcək imkanlara diqqət yetirirsiniz.',
		description:
			'Siz faktların arxasındakı mənaları, əlaqələri və ümumi mənzərəni görməyə meyillisiniz. Fikriniz tez-tez gələcəyə, ehtimallara və yeni ideyalara yönəlir. Nəzəriyyələr, simvollar və qeyri-adi yanaşmalar Sizi cəlb edir.',
	},
	{
		pole: 'T',
		title: 'Təfəkkür',
		short: 'Qərarları məntiq, obyektiv meyarlar və ardıcıllıq əsasında verirsiniz.',
		description:
			'Siz qərar verərkən faktları, səbəb-nəticə əlaqəsini və obyektiv meyarları ön plana çəkirsiniz. Ədaləti hər kəsə eyni qaydaların tətbiq olunması kimi görürsünüz. Dürüst və birbaşa rəyi həm verməyi, həm də almağı dəyərli hesab edirsiniz.',
	},
	{
		pole: 'F',
		title: 'Hiss',
		short: 'Qərarları dəyərlər, insanlara təsir və harmoniya əsasında verirsiniz.',
		description:
			'Siz qərar verərkən şəxsi dəyərləri və qərarın insanlara necə təsir edəcəyini ön plana çəkirsiniz. Ədaləti hər kəsin vəziyyətinin və hisslərinin nəzərə alınması kimi görürsünüz. Münasibətlərdə harmoniya və qarşılıqlı anlayış Sizin üçün xüsusilə vacibdir.',
	},
	{
		pole: 'J',
		title: 'Mühakimə',
		short: 'Planlı, nizamlı və qərarları vaxtında verilən həyat tərzini üstün tutursunuz.',
		description:
			'Siz ətrafınızda nizam, plan və aydınlıq yaratmağa çalışırsınız. Qərarı verib məsələni bağlamaq, işi vaxtından əvvəl bitirmək Sizə rahatlıq gətirir. Siyahılar, cədvəllər və aydın son tarixlər Sizin təbii alətlərinizdir.',
	},
	{
		pole: 'P',
		title: 'Qavrayış',
		short: 'Çevik, spontan və seçimləri açıq saxlayan həyat tərzini üstün tutursunuz.',
		description:
			'Siz yeni məlumatlara açıq qalmağı və şəraitə görə uyğunlaşmağı sevirsiniz. Qərarları son ana qədər açıq saxlamaq Sizə daha yaxşı variant tapmaq imkanı verir. Sərt planlar Sizi məhdudlaşdırır, son tarix yaxınlaşdıqca isə enerjiniz artır.',
	},
]

export const MBTI_TYPES: Record<string, MbtiTypeProfile> = {
	// ---------- Analitiklər (NT) ----------
	INTJ: {
		code: 'INTJ',
		name: 'Strateq',
		tagline: 'Uzaqgörən plan quran və mürəkkəb sistemləri müstəqil şəkildə təkmilləşdirən düşüncə sahibi.',
		summary:
			'Siz gələcəyə baxan, ideyaları sistemli plana çevirən və onu sona qədər aparan insansınız. Mürəkkəb problemlərdə başqalarının görmədiyi əlaqələri tez tutur, uzunmüddətli nəticəni düşünürsünüz. Müstəqil işləməyi və öz yüksək standartlarınıza uyğun hərəkət etməyi üstün tutursunuz. Səmərəsiz qaydalar və əsaslandırılmamış qərarlar Sizi tez yorur. Biliyi və səriştəni yüksək qiymətləndirir, daim öyrənməyə can atırsınız. Ətrafdakılar Sizi bəzən soyuq hesab edə bilər, lakin yaxın insanlarınıza qarşı sadiq və etibarlısınız.',
		strengths: [
			'Uzunmüddətli strateji düşüncə və planlaşdırma',
			'Mürəkkəb sistemləri təhlil edib təkmilləşdirmək bacarığı',
			'Müstəqillik və güclü daxili motivasiya',
			'Qərarlarda məntiqli və ardıcıl olmaq',
			'Yüksək keyfiyyət standartları',
			'Yeni bilikləri tez mənimsəmək',
		],
		weaknesses: [
			'Başqalarının hisslərini və emosional ehtiyaclarını kifayət qədər nəzərə almamaq',
			'Fikirləri və insanları həddindən artıq tənqidi qiymətləndirmək',
			'Başqalarının yavaş tempinə qarşı səbirsizlik',
			'Kömək istəməkdə və işi başqasına həvalə etməkdə çətinlik',
			'Kiçik söhbətlərə və sosial rituallara maraqsızlıq',
		],
		communication:
			'Siz qısa, dəqiq və məzmunlu danışırsınız; söhbətin bir məqsədə xidmət etməsini istəyirsiniz. Fikirlərinizi arqumentlərlə əsaslandırır, başqalarından da eyni yanaşmanı gözləyirsiniz. Birbaşa üslubunuz bəzən sərt qəbul oluna bilər, halbuki məqsədiniz sadəcə məsələni aydınlaşdırmaqdır. Mövzu Sizi maraqlandıranda isə uzun və dərin müzakirələrə hazırsınız.',
		communicationTips: [
			'Tənqid bildirməzdən əvvəl ideyanın güclü tərəfini də qeyd edin.',
			'Qərarınızın arxasındakı düşüncəni izah edin — başqaları Sizin mühakimə yolunuzu görmür.',
			'Söhbətin əvvəlində qısa şəxsi sual vermək komanda ilə əlaqəni gücləndirir.',
			'Razılaşmadığınız fikri dərhal rədd etmək əvəzinə, əvvəlcə sual verərək aydınlaşdırın.',
		],
		career:
			'Sizə müstəqillik, intellektual çətinlik və uzunmüddətli nəticə görmək imkanı verən işlər uyğundur. Strategiya, sistem dizaynı, tədqiqat və analitika kimi sahələrdə güclü tərəflərinizi tam istifadə edə bilərsiniz. Səlahiyyət və məsuliyyət birlikdə verildikdə ən yaxşı nəticəni göstərirsiniz. Mikroidarəetmə və təkrarlanan rutin olan mühit isə motivasiyanızı azaldır.',
		careers: [
			'Strateji planlaşdırma mütəxəssisi',
			'Data analitik',
			'Proqram arxitekti',
			'Kibertəhlükəsizlik mütəxəssisi',
			'Maliyyə analitiki',
			'İdarəetmə məsləhətçisi',
			'Elmi tədqiqatçı',
			'Mühəndis',
			'Hüquqşünas',
			'Layihə meneceri',
		],
		majors: ['Kompüter elmləri', 'Riyaziyyat', 'İqtisadiyyat', 'Sistem mühəndisliyi', 'Hüquqşünaslıq', 'Fizika'],
		workStyle:
			'Komandada Siz uzaqgörən planı quran və prosesləri təkmilləşdirən insansınız. Aydın məqsəd və müstəqil iş sahəsi verildikdə ən səmərəli şəkildə çalışırsınız. Uzun iclaslar və məqsədsiz müzakirələr əvəzinə konkret nəticəyə fokuslanmağı üstün tutursunuz.',
		leadership:
			'Lider kimi aydın vizyon qurur, komandanı strateji məqsədə doğru yönəldirsiniz. Səriştəni və nəticəni dəyərləndirir, insanlardan yüksək standart gözləyirsiniz. Komanda üzvlərinə daha tez-tez rəy və təşəkkür bildirmək liderliyinizi daha da gücləndirər.',
		relationships:
			'Münasibətlərdə Siz ciddi, sadiq və dürüst tərəfdaşsınız. Hisslərinizi sözlə ifadə etməkdən çox, əməli addımlarla göstərirsiniz. Sizin üçün intellektual uyğunluq və qarşılıqlı hörmət vacibdir. Tərəfdaşınızın emosional ehtiyaclarını soruşmaq və dinləmək münasibətinizi daha da möhkəmləndirər.',
		friendship:
			'Dost dairəniz kiçik, lakin keyfiyyətlidir. Maraqlarınızı bölüşən, dərin söhbətlərə açıq insanlarla dostluq edirsiniz. Dostlarınız Sizin dürüst məsləhətinizə və etibarlılığınıza güvənir.',
		stress:
			'Stress altında Siz özünüzə qapanır, nəzarəti itirmək hissindən narahat olursunuz. Bəzən Sizə xas olmayan şəkildə hisslərə qapılır və ya xırda detallara ilişib qalırsınız. Tək qalıb vəziyyəti təhlil etmək və planı yenidən qurmaq Sizə balansı bərpa etməyə kömək edir.',
		growth: [
			'Hər həftə komandanızdan ən azı bir nəfərə konkret təşəkkür bildirin.',
			'Qərar verməzdən əvvəl özünüzə "Bu, insanlara necə təsir edəcək?" sualını verin.',
			'Tam hazır olmayan ideyaları da müzakirəyə çıxarın — başqalarının rəyi planı gücləndirər.',
			'Həftədə bir dəfə planlaşdırılmamış, sırf istirahət üçün bir fəaliyyətə vaxt ayırın.',
			'Tapşırıqların bir hissəsini başqalarına həvalə edin və icra üsulunu onlara buraxın.',
		],
	},

	INTP: {
		code: 'INTP',
		name: 'Mütəfəkkir',
		tagline: 'Dünyanın necə işlədiyini anlamağa can atan, ideyalarla düşünməyi sevən müstəqil təhlilçi.',
		summary:
			'Siz maraqlı, analitik və orijinal düşüncəli insansınız. Hər hansı fikri, nəzəriyyəni və ya sistemi parçalara ayırıb onun məntiqini anlamaq Sizə zövq verir. Hazır cavabları olduğu kimi qəbul etmir, "niyə belədir?" sualını təkrar-təkrar verirsiniz. Ən yaxşı ideyalarınız çox vaxt sakit, təkbaşına düşündüyünüz anlarda yaranır. Qaydalardan və rutindən çox, problemin özü Sizi motivasiya edir. Bəzən ideyalarınızı praktik nəticəyə çevirmək onları düşünməkdən daha çətin olur.',
		strengths: [
			'Dərin analitik və tənqidi təfəkkür',
			'Orijinal, qeyri-standart həll yolları tapmaq',
			'Mürəkkəb nəzəriyyələri tez anlamaq',
			'Obyektivlik və açıq fikirlilik',
			'Müstəqil öyrənmə bacarığı',
			'Səhvləri və ziddiyyətləri tez görmək',
		],
		weaknesses: [
			'Başlanan işləri sona çatdırmaqda çətinlik',
			'Gündəlik praktik işləri və son tarixləri unutmaq',
			'Hissləri ifadə etməkdə və başqalarının emosiyalarını oxumaqda çətinlik',
			'Həddindən artıq təhlil səbəbindən qərarı gecikdirmək',
			'Fikirləri başqalarına sadə dildə izah etməkdə çətinlik',
		],
		communication:
			'Siz dəqiq ifadələr seçir, fikirlərinizi məntiqi ardıcıllıqla qurursunuz. Maraqlı bir mövzuda saatlarla müzakirə apara, lakin gündəlik kiçik söhbətlərdə susqun qala bilərsiniz. Bəzən ucadan düşündüyünüz fikri başqaları yekun qərar kimi qəbul edə bilər. Mübahisəni şəxsi qarşıdurma kimi deyil, həqiqəti tapmağın yolu kimi görürsünüz.',
		communicationTips: [
			'Mürəkkəb ideyanı izah edəndə əvvəlcə əsas nəticəni, sonra təfərrüatları deyin.',
			'Başqasının fikrini tənqid edəndə ona hörmətinizi də göstərin.',
			'Düşünmək üçün vaxt lazımdırsa, bunu açıq deyin: "Bu barədə düşünüb sabah cavab verərəm."',
			'Yalnız arqumentlərə deyil, həmsöhbətinizin emosional reaksiyasına da diqqət edin.',
		],
		career:
			'Sizə intellektual azadlıq, mürəkkəb problemlər və yeni biliklər təklif edən işlər uyğundur. Proqramlaşdırma, tədqiqat, analitika və sistem dizaynı kimi sahələrdə analitik gücünüz tam açılır. Sərt iyerarxiya və çoxlu rutin olan mühitdə isə tez darıxırsınız. Çevik iş qrafiki və öz yolunuzla işləmək imkanı Sizin üçün xüsusilə dəyərlidir.',
		careers: [
			'Proqram mühəndisi',
			'Data analitik',
			'Elmi tədqiqatçı',
			'Kibertəhlükəsizlik mütəxəssisi',
			'Riyaziyyatçı',
			'Sistem analitiki',
			'Oyun tərtibatçısı',
			'Universitet müəllimi',
			'Memar',
			'Maliyyə analitiki',
		],
		majors: [
			'Kompüter elmləri',
			'Riyaziyyat',
			'Fizika',
			'Fəlsəfə',
			'Kompüter mühəndisliyi',
			'İnformasiya təhlükəsizliyi',
		],
		workStyle:
			'Komandada Siz mürəkkəb problemləri həll edən və ideyaları sınaqdan keçirən "beyin mərkəzi"siniz. Müstəqil işləyə bildikdə məhsuldarlığınız xeyli artır. Gündəlik hesabatlar və rəsmi prosedurlar isə enerjinizi tez azaldır.',
		leadership:
			'Lider kimi Siz nəzarətlə deyil, ideyalarınız və səriştənizlə ilham verirsiniz. Komanda üzvlərinə azadlıq tanıyır, onları müstəqil düşünməyə həvəsləndirirsiniz. Son tarixlərə və prosesin təşkilinə daha çox diqqət ayırmaq liderliyinizi möhkəmləndirər.',
		relationships:
			'Münasibətlərdə Siz sadiq, səmimi və anlayışlı tərəfdaşsınız, lakin hisslərinizi sözlə ifadə etmək Sizə çətin gələ bilər. Yaxınlıq Sizin üçün ortaq maraqlar və dərin söhbətlər vasitəsilə yaranır. Şəxsi məkanınıza hörmət edən insanın yanında özünüzü rahat hiss edirsiniz. Sevginizi kiçik jestlərlə göstərmək tərəfdaşınız üçün böyük məna daşıya bilər.',
		friendship:
			'Dostlarınız az, lakin maraqlarınızı bölüşən insanlardır. Onlarla saatlarla ideyalar, kitablar və ya texnologiya haqqında danışa bilərsiniz. Dostluqda dürüstlük və şəxsi azadlıq Sizin üçün əsasdır.',
		stress:
			'Stress altında Siz ya tamamilə özünüzə qapanır, ya da gözlənilmədən emosional reaksiya verə bilərsiniz. Başqalarının Sizi necə qiymətləndirdiyi barədə həddindən artıq düşünməyə başlayırsınız. Sakit mühitdə tək qalmaq və problemi kiçik hissələrə bölmək Sizə yenidən balans tapmağa kömək edir.',
		growth: [
			'Hər yeni ideya üçün kiçik bir praktik addım müəyyən edin və onu həmin həftə atın.',
			'Son tarixləri təqvimə yazın və xatırlatmalardan istifadə edin.',
			'Yaxın insanlarınıza hisslərinizi sadə cümlələrlə ifadə etməyə çalışın.',
			'Mükəmməl həlli gözləmədən "kifayət qədər yaxşı" variantla işə başlamağı öyrənin.',
			'Fikirlərinizi sahədən uzaq bir insana izah etməklə ünsiyyət bacarığınızı məşq edin.',
		],
	},

	ENTJ: {
		code: 'ENTJ',
		name: 'Komandir',
		tagline: 'Məqsədə qətiyyətlə irəliləyən, insanları və resursları nəticə üçün təşkil edən təbii lider.',
		summary:
			'Siz qətiyyətli, enerjili və nəticəyönümlü insansınız. Məqsəd qoyur, ona çatmaq üçün plan qurur və insanları bu plan ətrafında səfərbər edirsiniz. Səmərəsizliyi tez görür və onu aradan qaldırmaq üçün dərhal addım atırsınız. Çətin qərarlar verməkdən çəkinmir, məsuliyyəti üzərinizə götürməyi bacarırsınız. İnkişaf və uğur Sizin üçün daimi hərəkətverici qüvvədir. Bəzən tempiniz və tələbkarlığınız ətrafdakılara ağır gələ bilər.',
		strengths: [
			'Güclü liderlik və təşkilatçılıq bacarığı',
			'Strateji düşüncə və uzunmüddətli planlaşdırma',
			'Qərar qəbul etməkdə qətiyyət',
			'Özünəinam və təşəbbüskarlıq',
			'Səmərəsizlikləri tez aşkar edib aradan qaldırmaq',
			'Çətin məqsədlərə can atmaq və başqalarını da buna ruhlandırmaq',
		],
		weaknesses: [
			'Başqalarının hisslərinə qarşı səbirsizlik',
			'Tənqidi və hökmlü tonda danışmaq',
			'İşə həddindən artıq qapılıb istirahəti unutmaq',
			'Öz fikrində israr edib alternativləri az dinləmək',
			'Hər şeyə nəzarət etmək istəyi',
		],
		communication:
			'Siz birbaşa, inamlı və konkret danışırsınız. Müzakirəni tez nəticəyə və qərara doğru aparmağı sevirsiniz. Mübahisədən çəkinmir, güclü arqumentə hörmət edirsiniz. Lakin tonunuz bəzən əmr kimi qəbul oluna və həmsöhbətinizi müdafiə mövqeyinə sala bilər.',
		communicationTips: [
			'Qərarı elan etməzdən əvvəl komandanın fikrini soruşun və həqiqətən dinləyin.',
			'Tənqidi rəyi təşəkkür və tanınma ilə balanslaşdırın.',
			'Tempinizi bir az azaldın: hər kəs Sizin sürətinizlə düşünmür.',
			'"Nə üçün?" sualına cavab verin — insanlar səbəbi anlayanda işə daha həvəslə qoşulurlar.',
		],
		career:
			'Sizə idarəetmə, strateji qərarlar və böyük məsuliyyət tələb edən işlər uyğundur. Mürəkkəb layihələri təşkil etmək, komandaları idarə etmək və biznesi böyütmək Sizin güclü sahənizdir. Karyera yüksəlişi və ölçülə bilən nəticələr motivasiyanızı artırır. Təşəbbüs göstərməyə imkan verməyən mühit isə Sizi məhdudlaşdırır.',
		careers: [
			'Sahibkar',
			'Layihə meneceri',
			'İdarəetmə məsləhətçisi',
			'Şirkət rəhbəri',
			'Hüquqşünas',
			'Maliyyə meneceri',
			'Satış direktoru',
			'İnvestisiya analitiki',
			'Strateji planlaşdırma mütəxəssisi',
			'Dövlət idarəçiliyi mütəxəssisi',
		],
		majors: [
			'Biznesin idarə edilməsi',
			'Menecment',
			'Hüquqşünaslıq',
			'Maliyyə',
			'Dövlət və bələdiyyə idarəetməsi',
			'İqtisadiyyat',
		],
		workStyle:
			'Komandada Siz təbii olaraq istiqaməti müəyyənləşdirən və işi irəli aparan şəxssiniz. Aydın məqsədlər, rollar və son tarixlər qoyursunuz. Komanda üzvlərinin səriştəsinə güvəndikdə onlara geniş səlahiyyət verirsiniz.',
		leadership:
			'Liderlik Sizin üçün təbii roldur: vizyonu qurur, planı yaradır və icranı izləyirsiniz. Komandadan yüksək nəticə gözləyir, çətin qərarlardan qaçmırsınız. İnsanların motivasiyasına və rifahına daha çox diqqət yetirmək komandanın Sizə bağlılığını artırar.',
		relationships:
			'Münasibətlərdə Siz sadiq, məsuliyyətli və birgə gələcək quran tərəfdaşsınız. Ortaq məqsədlər və bir-birinin inkişafını dəstəkləmək Sizin üçün vacibdir. Problemləri birbaşa müzakirə edib həll etməyə üstünlük verirsiniz. Bəzən problemi həll etməyə tələsmək əvəzinə tərəfdaşınızı sadəcə dinləmək daha çox kömək edir.',
		friendship:
			'Dostluqda Siz enerjili, səxavətli və dəstəkləyici insansınız. Məqsədyönlü, inkişafa açıq insanlarla vaxt keçirməyi sevirsiniz. Dostlarınız çətin anda Sizdən praktik kömək və aydın məsləhət alacaqlarını bilirlər.',
		stress:
			'Stress altında Siz daha da tələbkar, səbirsiz və nəzarətçi ola bilərsiniz. Bəzən hissləriniz gözlənilmədən üzə çıxır və bu, Sizi çaşdırır. Fiziki fəaliyyət, istirahətə vaxt ayırmaq və etibar etdiyiniz insanla açıq söhbət Sizə tarazlığı qaytarır.',
		growth: [
			'İclaslarda əvvəlcə başqalarını dinləyin, öz fikrinizi sonda bildirin.',
			'Hər layihədən sonra komanda üzvlərinin necə hiss etdiyi barədə qısa rəy toplayın.',
			'Təqviminizdə işdən tamamilə uzaq istirahət vaxtı qeyd edin və ona əməl edin.',
			'Səhv etdiyinizi qəbul etməyi zəiflik yox, güc kimi görməyə çalışın.',
			'Başqalarının ideyalarını planınıza daxil edəndə bunu açıq şəkildə qeyd edin.',
		],
	},

	ENTP: {
		code: 'ENTP',
		name: 'Novator',
		tagline: 'Yeni ideyalar yaradan, mövcud qaydaları sual altına qoyan çevik və hazırcavab düşüncə sahibi.',
		summary:
			'Siz maraqlı, hazırcavab və yaradıcı insansınız. Yeni ideyalar, imkanlar və qeyri-adi həll yolları Sizi həvəsləndirir. Mövcud qaydaları sual altına qoymağı, fərqli baxış bucaqlarını sınamağı sevirsiniz. Mübahisə və fikir mübadiləsi Sizin üçün düşünmənin bir yoludur. Eyni anda çoxlu layihəyə başlaya bilər, lakin rutin mərhələdə marağınızı itirə bilərsiniz. Dəyişikliyə tez uyğunlaşır, böhran anlarında belə yeni çıxış yolu tapırsınız.',
		strengths: [
			'Yaradıcı və innovativ düşüncə',
			'Sürətli uyğunlaşma və çeviklik',
			'Güclü arqumentasiya və natiqlik',
			'Problemlərə fərqli bucaqdan baxmaq',
			'Enerji və ünsiyyətcillik',
			'Risk götürməyə və yeni şeyləri sınamağa hazırlıq',
		],
		weaknesses: [
			'Rutin işlərə və detallara səbirsizlik',
			'Layihələri yarımçıq qoymaq',
			'Mübahisəni həddindən artıq uzadıb başqalarını yormaq',
			'Planlaşdırmaya və son tarixlərə laqeyd yanaşmaq',
			'Başqalarının hisslərini nəzərə almadan tənqid etmək',
		],
		communication:
			'Siz canlı, sürətli və yumorla danışırsınız. İdeyaları müzakirə edərkən tez-tez qəsdən əks mövqe tutub fikri sınağa çəkirsiniz. Söhbəti maraqlı və dinamik saxlamağı bacarırsınız. Lakin başqaları bəzən Sizin oyun xarakterli mübahisənizi şəxsi hücum kimi qəbul edə bilər.',
		communicationTips: [
			'Mübahisəyə başlamazdan əvvəl həmsöhbətinizin buna hazır olub-olmadığını hiss etməyə çalışın.',
			'Yeni ideyanı təklif edəndə onun praktik icra yolunu da göstərin.',
			'Başqasını dinləyərkən sözünü kəsməyin, suallarınızı sonra verin.',
			'Ciddi və emosional mövzularda zarafatı bir az kənara qoyun.',
		],
		career:
			'Sizə yenilik, müxtəliflik və problem həlli tələb edən işlər uyğundur. Startaplar, məhsul inkişafı, marketinq strategiyası və məsləhətçilik kimi sahələrdə yaradıcılığınız tam açılır. Daim dəyişən, dinamik mühitdə ən yaxşı nəticəni göstərirsiniz. Dəqiq qaydalar və monoton tapşırıqlar isə motivasiyanızı tez söndürür.',
		careers: [
			'Sahibkar',
			'Məhsul meneceri',
			'Marketoloq',
			'İdarəetmə məsləhətçisi',
			'Hüquqşünas',
			'Jurnalist',
			'Proqram mühəndisi',
			'Reklam strateqi',
			'Biznes inkişaf meneceri',
			'Siyasi analitik',
		],
		majors: [
			'Biznesin idarə edilməsi',
			'Marketinq',
			'Hüquqşünaslıq',
			'Jurnalistika',
			'Kompüter elmləri',
			'Beynəlxalq münasibətlər',
		],
		workStyle:
			'Komandada Siz yeni ideyaların mənbəyi və beyin fırtınasının hərəkətverici qüvvəsisiniz. Prosesləri sual altına qoyaraq daha yaxşı yol tapırsınız. İcranın detallı hissəsini diqqətli həmkarlarla bölüşdükdə ən yaxşı nəticə əldə olunur.',
		leadership:
			'Lider kimi Siz komandanı yeniliyə, cəsarətli ideyalara və eksperimentə ruhlandırırsınız. Açıq müzakirə mühiti yaradır, fərqli fikirləri dəyərləndirirsiniz. Strategiyanı ardıcıl icraya çevirmək üçün sistem qurmaq liderliyinizi gücləndirər.',
		relationships:
			'Münasibətlərdə Siz əyləncəli, maraqlı və daim yenilik gətirən tərəfdaşsınız. Tərəfdaşınızla birlikdə öyrənmək, səyahət etmək və yeni şeylər sınamaq Sizə xoşdur. İntellektual uyğunluq Sizin üçün vacibdir. Gündəlik qayğı və sabitlik göstərmək münasibəti daha da dərinləşdirər.',
		friendship:
			'Dostluqda Siz hər zaman yeni macəra və maraqlı söhbət təklif edən insansınız. Geniş dost dairəniz var və müxtəlif insanlarla asanlıqla ortaq dil tapırsınız. Fikirlərinizə meydan oxuyan dostları xüsusilə dəyərləndirirsiniz.',
		stress:
			'Stress altında Siz səpələnir, eyni anda çox işə girişib heç birini bitirə bilmirsiniz. Bəzən xırda detallara ilişib qalır, sağlamlığınız və ya kiçik problemlər barədə həddindən artıq narahat olursunuz. Prioritetləri sadələşdirmək və bir işi sona çatdırmaq Sizə nəzarət hissini qaytarır.',
		growth: [
			'Yeni layihəyə başlamazdan əvvəl mövcud layihələrdən birini bitirin.',
			'Hər ideya üçün konkret icra planı və son tarix yazın.',
			'Mübahisədə qalib gəlməkdən çox, qarşı tərəfi anlamağa fokuslanın.',
			'Gündəlik rutin işlər üçün sadə sistem (siyahı, xatırlatma) qurun.',
			'Yaxınlarınızın hissləri barədə sual verməyi vərdişə çevirin.',
		],
	},

	// ---------- Diplomatlar (NF) ----------
	INFJ: {
		code: 'INFJ',
		name: 'Müdrik',
		tagline: 'İnsanları dərindən anlayan, mənalı məqsəd uğrunda sakit, lakin qətiyyətlə çalışan uzaqgörən insan.',
		summary:
			'Siz həssas, uzaqgörən və dərin düşüncəli insansınız. İnsanların motivlərini və hisslərini tez anlayır, çox vaxt deyilməyənləri də hiss edirsiniz. Sizin üçün iş və həyat mənalı olmalı, müəyyən bir dəyərə xidmət etməlidir. Gələcəyə dair aydın təsəvvürünüz olur və onu həyata keçirmək üçün planlı hərəkət edirsiniz. Sakit görünsəniz də, inandığınız məsələdə prinsipial və qətiyyətlisiniz. Başqalarına çox enerji verdiyiniz üçün vaxtaşırı tək qalıb bərpa olunmağa ehtiyacınız var.',
		strengths: [
			'Güclü empatiya və insanları anlamaq bacarığı',
			'Uzaqgörənlik və mənalı vizyon qurmaq',
			'Prinsipiallıq və dəyərlərə sadiqlik',
			'Yazılı və şifahi ifadədə dərinlik',
			'Planlı və məqsədyönlü hərəkət',
			'Başqalarının potensialını görmək və inkişafına dəstək olmaq',
		],
		weaknesses: [
			'Mükəmməliyyətçilik və özünə qarşı həddindən artıq tələbkarlıq',
			'Tənqidə qarşı həssaslıq',
			'Öz ehtiyaclarını arxa plana atıb tükənmək',
			'Münaqişədən qaçmaq, narazılığı içində saxlamaq',
			'Şəxsi həyatını başqalarına açmaqda çətinlik',
		],
		communication:
			'Siz diqqətlə dinləyir, sözlərinizi düşünərək və ehtiyatla seçirsiniz. Səthi söhbətlərdən çox, mənalı və dərin mövzular Sizi cəlb edir. Yazılı ünsiyyətdə xüsusilə güclüsünüz, fikirlərinizi obrazlı və təsirli ifadə edirsiniz. Bəzən fikirlərinizi tam bölüşmədiyiniz üçün başqaları Sizi qapalı hesab edə bilər.',
		communicationTips: [
			'Narazılığınızı yığmayın — kiçik problemləri vaxtında və sakit tonda dilə gətirin.',
			'Başqalarının niyyətini təxmin etmək əvəzinə, onları birbaşa soruşun.',
			'Tənqidi şəxsiyyətinizə deyil, konkret işə aid rəy kimi qəbul etməyə çalışın.',
			'Vizyonunuzu izah edərkən konkret addımlar və nümunələr əlavə edin.',
		],
		career:
			'Sizə insanlara kömək etmək, dəyər yaratmaq və dərindən düşünmək imkanı verən işlər uyğundur. Psixologiya, təhsil, yazıçılıq, sosial layihələr və insan resursları kimi sahələrdə özünüzü tapa bilərsiniz. İşin mənası və etik dəyərləri Sizin üçün maaşdan az əhəmiyyət daşımır. Səs-küylü, sərt rəqabətli və səthi mühit isə Sizi tez yorur.',
		careers: [
			'Psixoloq',
			'Müəllim',
			'Yazıçı',
			'İnsan resursları mütəxəssisi',
			'Sosial işçi',
			'Karyera məsləhətçisi',
			'UX tədqiqatçısı',
			'Redaktor',
			'Həkim',
			'QHT layihə meneceri',
		],
		majors: ['Psixologiya', 'Pedaqogika', 'Filologiya', 'Sosial iş', 'Sosiologiya', 'Tibb (Müalicə işi)'],
		workStyle:
			'Komandada Siz insanları birləşdirən, ümumi məqsədi xatırladan və keyfiyyətə diqqət edən həmkarsınız. Sakit, fokuslanmağa imkan verən mühitdə daha məhsuldar olursunuz. İşin niyə vacib olduğunu anladıqda böyük əzmlə çalışırsınız.',
		leadership:
			'Lider kimi Siz ruhlandırıcı vizyon və şəxsi nümunə ilə idarə edirsiniz. Hər komanda üzvünün güclü tərəflərini görür və onları inkişaf etdirməyə çalışırsınız. Çətin qərarları və açıq münaqişələri ertələmədən həll etmək liderliyinizi daha da gücləndirər.',
		relationships:
			'Münasibətlərdə Siz dərin, səmimi və sadiq tərəfdaşsınız. Mənəvi yaxınlıq və qarşılıqlı anlaşma Sizin üçün hər şeydən önəmlidir. Tərəfdaşınızın ehtiyaclarını çox vaxt o demədən hiss edirsiniz. Öz ehtiyaclarınızı da açıq ifadə etmək münasibətdə balansı qorumağa kömək edir.',
		friendship:
			'Dostluqlarınız az sayda, lakin çox dərindir. Dostlarınız Sizə ən şəxsi hisslərini etibar edə bilirlər. Qarşılıqlı səmimiyyət olmayan münasibətlərdən isə tədricən uzaqlaşırsınız.',
		stress:
			'Stress altında Siz ya özünüzə qapanır, ya da diqqətinizi yayındırmaq üçün ekrana, alış-verişə və ya başqa həzz verən şeylərə həddindən artıq yönəlirsiniz. Xırda detallara ilişib qala, hər şeyi qaranlıq görə bilərsiniz. Tək qalmaq, hisslərinizi yazmaq və etibarlı bir insanla danışmaq Sizə balansı qaytarır.',
		growth: [
			'Həftədə ən azı bir dəfə yalnız özünüz üçün dincəlmə vaxtı planlaşdırın.',
			'"Xeyr" deməyi məşq edin və şəxsi sərhədlərinizi aydın göstərin.',
			'Mükəmməl olmayan işi də təqdim etməyə özünüzə icazə verin — rəy onu təkmilləşdirəcək.',
			'Narahat olduğunuz məsələni bir gün ərzində müzakirə etməyi qayda halına salın.',
			'Böyük vizyonunuzu kiçik, ölçülə bilən addımlara bölün.',
		],
	},

	INFP: {
		code: 'INFP',
		name: 'İdealist',
		tagline: 'Daxili dəyərlərinə sadiq qalan, dünyaya mərhəmət və yaradıcılıqla baxan həssas insan.',
		summary:
			'Siz səmimi, yaradıcı və dərin hissli insansınız. Güclü daxili dəyərləriniz var və qərarlarınızı çox vaxt onlara əsasən verirsiniz. İnsanlarda və hadisələrdə yaxşı tərəfi görməyə, onların potensialını üzə çıxarmağa çalışırsınız. Təxəyyülünüz zəngindir; söz, musiqi, rəsm və ya başqa yaradıcı yollarla özünüzü ifadə etməyi sevirsiniz. Sakit görünsəniz də, inandığınız məsələ uğrunda böyük əzm göstərə bilərsiniz. Saxtakarlıq və ədalətsizlik Sizi xüsusilə narahat edir.',
		strengths: [
			'Empatiya və başqalarını mühakimə etmədən anlamaq',
			'Zəngin təxəyyül və yaradıcılıq',
			'Dəyərlərə sadiqlik və səmimilik',
			'Açıq fikirlilik və fərqliliklərə hörmət',
			'Yazılı ifadə bacarığı',
			'Mənalı məqsəd üçün güclü daxili motivasiya',
		],
		weaknesses: [
			'Tənqidi şəxsi qəbul etmək',
			'Praktik detallara və planlaşdırmaya az diqqət',
			'Qərar verməkdə tərəddüd',
			'Münaqişədən qaçmaq',
			'Reallığı idealla müqayisə edib məyus olmaq',
		],
		communication:
			'Siz yumşaq, diqqətli və səmimi ünsiyyət qurursunuz. Həmsöhbətinizi anlamağa çalışır, onu mühakimə etməkdən çəkinirsiniz. Ən dərin fikirlərinizi çox vaxt yazılı şəkildə və ya yaxın insanlarla təkbətək söhbətdə bölüşürsünüz. Dəyərlərinizə toxunan mövzularda isə gözlənilməz dərəcədə qətiyyətli danışa bilərsiniz.',
		communicationTips: [
			'Fikrinizi sonraya saxlamayın: vacib olan şeyi sakit və aydın şəkildə dilə gətirin.',
			'Rəyi şəxsiyyətinizə yox, işə aid məlumat kimi qəbul etməyə çalışın.',
			'Hisslərinizi izah edərkən konkret nümunələr və ehtiyaclarınızı göstərin.',
			'Qrup müzakirələrində ən azı bir dəfə öz fikrinizi bildirməyi qarşınıza məqsəd qoyun.',
		],
		career:
			'Sizə yaradıcılıq, şəxsi dəyərlərə uyğunluq və insanlara fayda vermək imkanı yaradan işlər uyğundur. Yazı, dizayn, psixologiya, təhsil və sosial sahələrdə özünüzü ən yaxşı şəkildə ifadə edə bilərsiniz. Çevik və müstəqil iş mühitində daha məhsuldar olursunuz. Sərt rəqabət və yalnız rəqəmlərlə ölçülən nəticə isə motivasiyanızı azaldır.',
		careers: [
			'Yazıçı',
			'Qrafik dizayner',
			'Psixoloq',
			'Tərcüməçi',
			'Müəllim',
			'Kontent yaradıcısı',
			'Sosial işçi',
			'Redaktor',
			'Musiqiçi',
			'İllüstrator',
		],
		majors: ['Filologiya', 'Psixologiya', 'Dizayn', 'Tərcümə', 'Jurnalistika', 'Rəssamlıq'],
		workStyle:
			'Komandada Siz yaradıcı ideyalar gətirən, insanların fikirlərinə hörmət edən və ahəng yaradan həmkarsınız. İşin məqsədinə inandığınızda böyük fədakarlıq göstərirsiniz. Müstəqil və çevik iş rejimi Sizə daha uyğundur.',
		leadership:
			'Lider kimi Siz şəxsi nümunə, dəyərlər və hər kəsə qarşı diqqətli münasibətlə idarə edirsiniz. Komandada hər kəsin səsinin eşidilməsinə çalışırsınız. Çətin qərarları vaxtında vermək və aydın struktur qurmaq liderliyinizi daha effektiv edər.',
		relationships:
			'Münasibətlərdə Siz romantik, sadiq və dərin bağlılıq axtaran tərəfdaşsınız. Tərəfdaşınızı olduğu kimi qəbul edir, ona dəstək olmağa çalışırsınız. Sizin üçün emosional səmimiyyət və qarşılıqlı anlayış vacibdir. Narazılığı içinizdə saxlamaq əvəzinə vaxtında müzakirə etmək münasibəti qoruyar.',
		friendship:
			'Dostluqda Siz anlayışlı, sadiq və dinləməyi bacaran insansınız. Dostlarınız az olsa da, onlarla bağınız çox güclüdür. Sizi olduğunuz kimi qəbul edən insanların yanında açılırsınız.',
		stress:
			'Stress altında Siz özünüzü tənqid edir, hər şeyi mənfi görməyə başlayırsınız. Bəzən başqalarına qarşı gözlənilməz dərəcədə sərt və tənqidi ola bilərsiniz. Yaradıcı fəaliyyət, təbiətdə vaxt keçirmək və hisslərinizi yazmaq Sizə sakitlik qaytarır.',
		growth: [
			'Böyük məqsədlərinizi həftəlik konkret tapşırıqlara bölün.',
			'Qərar verərkən özünüzə son tarix qoyun və ona əməl edin.',
			'Hər həftə yaradıcı işlərinizdən birini başqaları ilə bölüşün.',
			'Rəy alanda əvvəlcə özünüzdən "Bundan nə öyrənə bilərəm?" deyə soruşun.',
			'Sadə büdcə və vaxt planı ilə praktik bacarıqlarınızı gücləndirin.',
		],
	},

	ENFJ: {
		code: 'ENFJ',
		name: 'Mentor',
		tagline: 'İnsanların potensialını görən və onları ümumi məqsəd ətrafında birləşdirən qayğıkeş lider.',
		summary:
			'Siz səmimi, ünsiyyətcil və başqalarının inkişafına həqiqətən önəm verən insansınız. İnsanları tez anlayır, onların güclü tərəflərini görür və onları inkişafa ruhlandırırsınız. Qrupda harmoniya yaratmaq, hər kəsi ümumi məqsəd ətrafında birləşdirmək Sizin təbii bacarığınızdır. Planlı və təşkilatçısınız, ideyaları real fəaliyyətə çevirməyi bacarırsınız. Başqalarına kömək etməkdən böyük məmnunluq duyursunuz. Bəzən başqalarının qayğısına qalarkən öz ehtiyaclarınızı unudursunuz.',
		strengths: [
			'Güclü ünsiyyət və natiqlik bacarığı',
			'İnsanları ruhlandırmaq və motivasiya etmək',
			'Empatiya və sosial həssaslıq',
			'Təşkilatçılıq və komanda qurmaq',
			'Başqalarının potensialını görmək',
			'Məsuliyyətlilik və etibarlılıq',
		],
		weaknesses: [
			'Başqalarının problemlərini həddindən artıq üzərinə götürmək',
			'Tənqidə və rədd edilməyə qarşı həssaslıq',
			'Hər kəsi razı salmaq istəyi',
			'Öz ehtiyaclarını unudub tükənmək',
			'Başqalarına istəmədikləri halda da məsləhət vermək',
		],
		communication:
			'Siz isti, inamlı və təsirli danışırsınız. Auditoriyanın əhvalını tez hiss edir, mesajınızı ona uyğunlaşdırırsınız. İnsanları dinləməyi və onları danışmağa həvəsləndirməyi bacarırsınız. Bəzən harmoniyanı qorumaq üçün açıq tənqiddən çəkinə bilərsiniz.',
		communicationTips: [
			'Açıq və dürüst rəy vermək də qayğının bir formasıdır — onu ertələməyin.',
			'Məsləhət verməzdən əvvəl qarşı tərəfin buna ehtiyacı olub-olmadığını soruşun.',
			'Öz ehtiyaclarınızı da başqalarının ehtiyacları qədər aydın ifadə edin.',
			'Fikir ayrılığını münasibətə təhlükə kimi deyil, normal müzakirə kimi qəbul edin.',
		],
		career:
			'Sizə insanlarla işləmək, onları inkişaf etdirmək və təşkilata təsir göstərmək imkanı verən işlər uyğundur. Təhsil, insan resursları, kouçinq, ictimaiyyətlə əlaqələr və idarəetmə sahələrində güclü olursunuz. Komanda ruhu və mənalı missiyası olan təşkilatlarda ən yaxşı nəticəni göstərirsiniz. Təkbaşına və insanlarla əlaqəsi olmayan işlər isə Sizi tez darıxdırır.',
		careers: [
			'Müəllim',
			'Təlimçi (trener)',
			'İnsan resursları meneceri',
			'Psixoloq',
			'İctimaiyyətlə əlaqələr mütəxəssisi',
			'Layihə meneceri',
			'Karyera məsləhətçisi',
			'Marketoloq',
			'Diplomat',
			'Tədbir təşkilatçısı',
		],
		majors: ['Pedaqogika', 'Psixologiya', 'Beynəlxalq münasibətlər', 'Menecment', 'Sosiologiya', 'Jurnalistika'],
		workStyle:
			'Komandada Siz insanları birləşdirən, motivasiyanı yüksək saxlayan və hər kəsin töhfəsini görən həmkarsınız. Əməkdaşlıq və açıq ünsiyyət olan mühitdə ən məhsuldar olursunuz. Planlaşdırma və təşkilatçılıq bacarığınız komandanın işini nizama salır.',
		leadership:
			'Lider kimi Siz ruhlandırıcı, insanyönümlü və inkişafa fokuslanan rəhbərsiniz. Hər bir əməkdaşın güclü tərəfini üzə çıxarmağa çalışırsınız. Çətin, populyar olmayan qərarları da qətiyyətlə vermək liderliyinizi tamamlayar.',
		relationships:
			'Münasibətlərdə Siz qayğıkeş, sadiq və tərəfdaşının xoşbəxtliyinə çox önəm verən insansınız. Birgə inkişaf və açıq ünsiyyət Sizin üçün vacibdir. Münaqişəni tez həll etmək istəyirsiniz. Tərəfdaşınıza öz yolunu tapması üçün məkan vermək münasibətinizi sağlam saxlayar.',
		friendship:
			'Dostluqda Siz həmişə dəstək olan, dostlarını bir araya gətirən və görüşlər təşkil edən insansınız. Geniş dost dairəniz var və hər birinə diqqət ayırmağa çalışırsınız. Dostlarınız Sizin səmimi marağınızı və köməyinizi yüksək qiymətləndirir.',
		stress:
			'Stress altında Siz özünüzü həddindən artıq tənqid edir, başqalarının Sizə münasibəti barədə çox narahat olursunuz. Bəzən soyuq və sərt məntiqə keçib ətrafdakılara kəskin sözlər deyə bilərsiniz. Tək qalıb dincəlmək və öz hisslərinizi anlamağa çalışmaq Sizə bərpa olunmağa kömək edir.',
		growth: [
			'Həftəlik planınıza yalnız özünüz üçün ayrılmış vaxt əlavə edin.',
			'Hər yeni xahişə dərhal "bəli" demək əvəzinə, düşünmək üçün vaxt istəyin.',
			'Çətin rəyi "müsbət cəhət — inkişaf sahəsi — dəstək" ardıcıllığı ilə verməyi məşq edin.',
			'Qərarlarınızı yalnız insanlara təsirinə görə deyil, məntiqi meyarlarla da yoxlayın.',
			'Başqalarının problemini həll etməyə tələsməyin, onlara öz həllini tapmağa imkan verin.',
		],
	},

	ENFP: {
		code: 'ENFP',
		name: 'İlhamverici',
		tagline: 'Enerjisi və həvəsi ilə ətrafındakıları ruhlandıran, hər yerdə yeni imkan görən yaradıcı insan.',
		summary:
			'Siz enerjili, səmimi və yaradıcı insansınız. Yeni ideyalar, insanlar və təcrübələr Sizi həyəcanlandırır. Hər vəziyyətdə imkan görür, başqalarını da öz həvəsinizlə ruhlandırırsınız. İnsanlarla tez ünsiyyət qurur, onların hisslərini və potensialını yaxşı anlayırsınız. Azadlıq və özünüifadə Sizin üçün çox vacibdir. Lakin çoxlu maraq və layihə arasında enerjinizi səpələmək riski də var.',
		strengths: [
			'Güclü həvəs və enerji',
			'Yaradıcılıq və yeni ideyalar irəli sürmək',
			'İnsanlarla tez əlaqə qurmaq',
			'Empatiya və başqalarını ruhlandırmaq',
			'Çeviklik və yeniliyə açıqlıq',
			'Ünsiyyət və təqdimat bacarığı',
		],
		weaknesses: [
			'Diqqətin tez yayınması və fokusu itirmək',
			'Rutin və inzibati işlərdən qaçmaq',
			'Həddindən artıq öhdəlik götürmək',
			'Planlaşdırma və vaxtı idarə etməkdə çətinlik',
			'Əhvalın tez-tez dəyişməsi',
		],
		communication:
			'Siz isti, coşqulu və ifadəli danışırsınız; söhbətə enerji qatırsınız. Bir mövzudan digərinə tez keçir, ideyalar arasında əlaqələr qurursunuz. Həmsöhbətinizə səmimi maraq göstərir, ona özünü dəyərli hiss etdirirsiniz. Bəzən həvəsiniz başqalarının danışmasına az yer qoya bilər.',
		communicationTips: [
			'Vacib müzakirələrdə əsas fikri əvvəldə qısa ifadə edin, sonra təfərrüatlara keçin.',
			'Söhbətdə başqalarının da danışmasına imkan vermək üçün fasilələr edin.',
			'Söz verməzdən əvvəl vaxtınızın buna çatıb-çatmayacağını yoxlayın.',
			'Yazılı mesajlarda əsas qərarları və son tarixləri ayrıca qeyd edin.',
		],
		career:
			'Sizə yaradıcılıq, insanlarla ünsiyyət və müxtəliflik təklif edən işlər uyğundur. Marketinq, media, təhsil, psixologiya və sahibkarlıq kimi sahələrdə həvəsiniz və ideyalarınız dəyər yaradır. Çevik iş qrafiki və yeni layihələr Sizi motivasiya edir. Monoton, çox qaydalı və insanlardan təcrid olunmuş işlər isə enerjinizi azaldır.',
		careers: [
			'Marketoloq',
			'Kontent yaradıcısı',
			'Jurnalist',
			'Psixoloq',
			'Təlimçi (trener)',
			'Sahibkar',
			'Tədbir təşkilatçısı',
			'İctimaiyyətlə əlaqələr mütəxəssisi',
			'Müəllim',
			'Brend meneceri',
		],
		majors: ['Marketinq', 'Jurnalistika', 'Psixologiya', 'Pedaqogika', 'Dizayn', 'Beynəlxalq münasibətlər'],
		workStyle:
			'Komandada Siz yeni ideyalar və müsbət enerji gətirən həmkarsınız. Beyin fırtınası, layihənin başlanğıc mərhələsi və insanlarla iş Sizin güclü tərəfinizdir. Sistemli həmkarlarla birlikdə işləmək ideyalarınızın icrasını asanlaşdırır.',
		leadership:
			'Lider kimi Siz komandanı vizyon və həvəslə ruhlandırır, hər kəsə özünü dəyərli hiss etdirirsiniz. Yeniliyə və təşəbbüsə açıq mühit yaradırsınız. Aydın prioritetlər və ardıcıl nəzarət sistemi qurmaq liderliyinizi daha davamlı edər.',
		relationships:
			'Münasibətlərdə Siz romantik, səmimi və tərəfdaşına çox diqqət ayıran insansınız. Dərin emosional bağ və birgə yeni təcrübələr Sizin üçün önəmlidir. Tərəfdaşınızın inkişafını dəstəkləyir, onu ruhlandırırsınız. Gündəlik məsuliyyətlərdə ardıcıl olmaq münasibətə sabitlik qatar.',
		friendship:
			'Dostluqda Siz şən, səxavətli və hər kəsi bir araya gətirən insansınız. Müxtəlif dairələrdən çoxlu dostunuz var. Dostlarınız Sizin səmimi marağınızı və onları ruhlandırmağınızı xüsusilə sevir.',
		stress:
			'Stress altında Siz özünüzü yorğun və dağınıq hiss edir, xırda detallara və səhvlərə həddindən artıq fikir verməyə başlayırsınız. Bəzən özünüzə qapanır, hər şeyi mənfi görə bilərsiniz. Yaxın insanlarla danışmaq, yaradıcı fəaliyyət və prioritetləri sadələşdirmək Sizə yenidən enerji verir.',
		growth: [
			'Hər gün üçün ən vacib üç tapşırığı seçin və əvvəlcə onları bitirin.',
			'Yeni öhdəlik götürməzdən əvvəl bir gün düşünün.',
			'Təqvim və tapşırıq siyahısından müntəzəm istifadə edin.',
			'Başladığınız bir layihəni sona çatdırmağı ayrıca məqsəd kimi qoyun.',
			'Əhvalınızın kəskin dəyişdiyi anlarda vacib qərarları bir müddət təxirə salın.',
		],
	},

	// ---------- Mühafizəçilər (SJ) ----------
	ISTJ: {
		code: 'ISTJ',
		name: 'Dayaq',
		tagline: 'Sözünün üstündə duran, işi dəqiq, ardıcıl və vaxtında yerinə yetirən etibarlı insan.',
		summary:
			'Siz məsuliyyətli, dəqiq və praktik insansınız. Verdiyiniz sözü tutur, öhdəlik götürdüyünüz işi sona qədər aparırsınız. Faktlara, təcrübəyə və sınaqdan çıxmış üsullara güvənirsiniz. Nizam, aydın qaydalar və planlı iş Sizə rahatlıq verir. Detallara diqqətiniz səhvlərin qarşısını alır və komandaya sabitlik qazandırır. Dəyişikliyə ehtiyatla yanaşsanız da, onun məntiqini anlayanda uyğunlaşmağı bacarırsınız.',
		strengths: [
			'Yüksək məsuliyyət hissi və etibarlılıq',
			'Detallara diqqət və dəqiqlik',
			'Planlı və sistemli iş',
			'Faktlara əsaslanan praktik qərarlar',
			'Səbir və əzmkarlıq',
			'Qaydalara və öhdəliklərə sadiqlik',
		],
		weaknesses: [
			'Gözlənilməz dəyişikliklərə çətin uyğunlaşmaq',
			'Yeni, sınanmamış ideyalara şübhə ilə yanaşmaq',
			'Hisslərini ifadə etməkdə həddindən artıq təmkinli olmaq',
			'Hər şeyi təkbaşına etməyə çalışmaq',
			'Başqalarından da eyni dəqiqliyi gözləyib onları sərt mühakimə etmək',
		],
		communication:
			'Siz aydın, konkret və faktlara əsaslanan ünsiyyət qurursunuz. Lazımsız təfərrüatlardan və şişirtmədən qaçırsınız. Danışmazdan əvvəl düşünür, dəqiq bildiyiniz şeyi deyirsiniz. Bəzən təmkinli üslubunuz başqalarına soyuqluq kimi görünə bilər.',
		communicationTips: [
			'Razılığınızı və təşəkkürünüzü sözlə də ifadə edin — başqaları onu həmişə hiss etmir.',
			'Yeni ideyanı dərhal rədd etmək əvəzinə, onun haqqında bir-iki sual verin.',
			'Dəyişiklik təklif olunanda onun səbəbini soruşun və öz narahatlığınızı aydın bildirin.',
			'Rəy verərkən səhvlərlə yanaşı, yaxşı görülmüş işi də qeyd edin.',
		],
		career:
			'Sizə dəqiqlik, nizam, məsuliyyət və aydın struktur tələb edən işlər uyğundur. Maliyyə, mühasibat, hüquq, mühəndislik, logistika və dövlət idarəçiliyi kimi sahələrdə güclü olursunuz. Sabitlik, aydın vəzifə təlimatları və ölçülə bilən nəticələr motivasiyanızı artırır. Daimi xaos və qeyri-müəyyənlik olan mühitdə isə narahat olursunuz.',
		careers: [
			'Mühasib',
			'Auditor',
			'Maliyyə analitiki',
			'Hüquqşünas',
			'Mühəndis',
			'Logistika mütəxəssisi',
			'Data analitik',
			'Bank mütəxəssisi',
			'Dövlət qulluqçusu',
			'Keyfiyyətə nəzarət mütəxəssisi',
		],
		majors: [
			'Mühasibat uçotu və audit',
			'Maliyyə',
			'Hüquqşünaslıq',
			'Neft-qaz mühəndisliyi',
			'Logistika',
			'İqtisadiyyat',
		],
		workStyle:
			'Komandada Siz işin vaxtında və keyfiyyətlə görülməsini təmin edən etibarlı həmkarsınız. Aydın tapşırıqlar və prosedurlarla işləməyi üstün tutursunuz. Başqaları Sizin sözünüzə və hazırladığınız sənədlərə tam güvənə bilir.',
		leadership:
			'Lider kimi Siz aydın qaydalar, ədalətli tələblər və şəxsi nümunə ilə idarə edirsiniz. Sabitlik və nizam yaradır, öhdəliklərin yerinə yetirilməsinə nəzarət edirsiniz. Komandanın yeni ideyalarına daha açıq olmaq liderliyinizi çevikləşdirər.',
		relationships:
			'Münasibətlərdə Siz sadiq, etibarlı və sabit tərəfdaşsınız. Sevginizi böyük sözlərdən çox, gündəlik qayğı və əməli işlərlə göstərirsiniz. Ənənələr və birgə qurulmuş vərdişlər Sizin üçün dəyərlidir. Hisslərinizi daha tez-tez sözlə ifadə etmək tərəfdaşınızı Sizə daha da yaxınlaşdırar.',
		friendship:
			'Dostluqda Siz uzunmüddətli, sınanmış münasibətlərə üstünlük verirsiniz. Dostunuz çətinliyə düşəndə ilk kömək edənlərdən olursunuz. Dürüstlük və sədaqət Sizin dostluğunuzun əsasıdır.',
		stress:
			'Stress altında Siz ən pis ssenariləri təsəvvür etməyə və gələcəkdən narahat olmağa başlayırsınız. Bəzən əsəbi və tənqidi olur, qaydalara daha da sərt əməl etmək istəyirsiniz. Planı yenidən qurmaq, sakit mühitdə dincəlmək və fiziki fəaliyyət Sizə balansı qaytarır.',
		growth: [
			'Hər ay sınanmamış bir üsulu və ya aləti kiçik bir işdə yoxlayın.',
			'Planlarınızda gözlənilməz hallar üçün ehtiyat vaxt ayırın.',
			'Yaxınlarınıza və həmkarlarınıza minnətdarlığınızı sözlə ifadə edin.',
			'Bəzi tapşırıqları başqalarına həvalə edin və onların öz üsulu ilə işləməsinə imkan verin.',
			'Qəti mövqe tutmazdan əvvəl fərqli fikirdə olan bir nəfəri dinləyin.',
		],
	},

	ISFJ: {
		code: 'ISFJ',
		name: 'Qoruyucu',
		tagline: 'Başqalarının qayğısına sakit və fədakarlıqla qalan diqqətli və etibarlı insan.',
		summary:
			'Siz qayğıkeş, diqqətli və sadiq insansınız. Başqalarının ehtiyaclarını tez hiss edir və çox vaxt xahiş edilmədən kömək edirsiniz. Məsuliyyətlərinizi ciddi qəbul edir, işi dəqiq və səliqəli görürsünüz. Ənənələrə, sabitliyə və təcrübəyə dəyər verirsiniz. İnsanlarla bağlı kiçik detalları — ad günlərini, sevdikləri şeyləri — yaxşı yadda saxlayırsınız. Təvazökarlığınız səbəbindən zəhmətiniz bəzən diqqətdən kənarda qala bilər.',
		strengths: [
			'Qayğıkeşlik və başqalarına dəstək',
			'Məsuliyyətlilik və etibarlılıq',
			'Detallara və insanların ehtiyaclarına diqqət',
			'Səbir və təmkin',
			'Praktik və səliqəli iş',
			'İnsanlarla bağlı detalları yaxşı yadda saxlamaq',
		],
		weaknesses: [
			'"Xeyr" deməkdə çətinlik',
			'Öz ehtiyaclarını arxa plana atmaq',
			'Dəyişiklik və qeyri-müəyyənlik qarşısında narahatlıq',
			'Tənqidi həddindən artıq şəxsi qəbul etmək',
			'Uğurlarını gizlətmək və özünü az qiymətləndirmək',
		],
		communication:
			'Siz nəzakətli, yumşaq və diqqətli ünsiyyət qurursunuz. Danışmaqdan çox dinləyir, həmsöhbətinizin əhvalına həssaslıqla yanaşırsınız. Fikrinizi konkret nümunələrə və təcrübəyə əsaslanaraq ifadə edirsiniz. Münaqişədən qaçmaq üçün bəzən narazılığınızı açıq bildirmirsiniz.',
		communicationTips: [
			'Ehtiyaclarınızı açıq deyin — başqaları onları həmişə özləri hiss etmir.',
			'Narazılığı yığmadan, hələ kiçik ikən sakit şəkildə müzakirə edin.',
			'Uğurlarınızdan danışmaqdan çəkinməyin; bu, təvazökarlığa zidd deyil.',
			'Rəyi şəxsi münasibət kimi deyil, konkret işə aid məlumat kimi qəbul edin.',
		],
		career:
			'Sizə insanlara praktik kömək etmək, nizam yaratmaq və sabit mühitdə işləmək imkanı verən işlər uyğundur. Tibb, təhsil, sosial xidmətlər, inzibati iş və mühasibat sahələrində özünüzü rahat hiss edirsiniz. Zəhmətinizin dəyərləndirildiyi və komandada isti münasibətlərin olduğu yerdə ən yaxşı nəticəni göstərirsiniz. Sərt rəqabət və daimi qeyri-müəyyənlik isə Sizi yorur.',
		careers: [
			'Tibb bacısı (qardaşı)',
			'Həkim',
			'Müəllim',
			'Mühasib',
			'Sosial işçi',
			'İnsan resursları mütəxəssisi',
			'Ofis meneceri',
			'Əczaçı',
			'Kitabxanaçı',
			'Uşaq bağçası tərbiyəçisi',
		],
		majors: [
			'Tibb (Müalicə işi)',
			'Pedaqogika',
			'Mühasibat uçotu və audit',
			'Sosial iş',
			'Əczaçılıq',
			'Məktəbəqədər təhsil',
		],
		workStyle:
			'Komandada Siz hər kəsin rahatlığına diqqət yetirən və işin detallarını nəzarətdə saxlayan həmkarsınız. Tapşırıqlarınızı vaxtında və səliqəli yerinə yetirirsiniz. Aydın gözləntilər və sabit iş rejimi Sizə daha uyğundur.',
		leadership:
			'Lider kimi Siz qayğıkeş, ədalətli və dəstək olan rəhbərsiniz. Komanda üzvlərinin ehtiyaclarını nəzərə alır, sabit və etibarlı mühit yaradırsınız. Daha qətiyyətli tələblər qoymaq və dəyişiklikləri özünüz irəli aparmaq liderliyinizi tamamlayar.',
		relationships:
			'Münasibətlərdə Siz sadiq, qayğıkeş və fədakar tərəfdaşsınız. Sevginizi gündəlik diqqət, kiçik sürprizlər və praktik köməklə göstərirsiniz. Sabitlik və qarşılıqlı etibar Sizin üçün çox vacibdir. Öz istəklərinizi də açıq ifadə etmək münasibətdə balans yaradar.',
		friendship:
			'Dostluqda Siz ən çətin anda yanında olan və heç nəyi unutmayan dostsunuz. Uzun illər davam edən dostluqlara üstünlük verirsiniz. Dostlarınız Sizin sədaqətinizi və qayğınızı yüksək qiymətləndirir.',
		stress:
			'Stress altında Siz gələcəkdən narahat olur, ən pis ssenariləri təsəvvür etməyə başlayırsınız. Həddindən artıq yüklənəndə özünüzə qapanır və ya əsəbi ola bilərsiniz. Planı sadələşdirmək, kömək istəmək və sevdiyiniz gündəlik rutinə qayıtmaq Sizə sakitlik qaytarır.',
		growth: [
			'Yeni xahişə razılıq verməzdən əvvəl vaxtınızı və enerjinizi nəzərə alın; lazım olanda nəzakətlə "xeyr" deyin.',
			'Həftədə bir dəfə yalnız özünüz üçün sevdiyiniz bir işə vaxt ayırın.',
			'Gördüyünüz işlərin nəticələrini qeyd edin və onları rəhbərinizlə bölüşün.',
			'Kiçik dəyişiklikləri — yeni marşrut, yeni hobbi — sınamaqla çevikliyinizi artırın.',
			'Kömək istəməyi zəiflik deyil, normal komanda işi kimi qəbul edin.',
		],
	},

	ESTJ: {
		code: 'ESTJ',
		name: 'Təşkilatçı',
		tagline: 'Nizam yaradan, məsuliyyəti ön plana çəkən və işi nəticəyə çatdıran praktik lider.',
		summary:
			'Siz enerjili, praktik və təşkilatçı insansınız. Aydın qaydalar, plan və strukturla işləyir, başqalarını da bu nizam ətrafında birləşdirirsiniz. Məsuliyyət götürməkdən çəkinmir, qərarları tez və qətiyyətlə verirsiniz. Dürüstlük, zəhmət və verilən sözə sadiqlik Sizin əsas dəyərlərinizdir. İşin səmərəli və vaxtında görülməsi Sizin üçün çox vacibdir. Bəzən öz üsulunuzu yeganə düzgün yol kimi görə bilərsiniz.',
		strengths: [
			'Güclü təşkilatçılıq və idarəetmə bacarığı',
			'Qətiyyət və tez qərar vermək',
			'Məsuliyyətlilik və intizam',
			'Praktik və nəticəyönümlü düşüncə',
			'Açıq və dürüst ünsiyyət',
			'Prosesləri sistemləşdirmək',
		],
		weaknesses: [
			'Yeni üsullara müqavimət və az çeviklik',
			'Başqalarının hisslərini nəzərə almadan birbaşa danışmaq',
			'Nəzarəti əldən verməmək üçün hər şeyə qarışmaq',
			'Öz standartlarını başqalarına məcbur etmək',
			'İstirahətə və emosional ehtiyaclara az vaxt ayırmaq',
		],
		communication:
			'Siz birbaşa, aydın və konkret danışırsınız. Gözləntiləri dəqiq ifadə edir, başqalarından da eyni aydınlığı gözləyirsiniz. Müzakirələri qərara və icraya doğru yönəldirsiniz. Birbaşa üslubunuz bəzən həmsöhbətinizə sərt görünə bilər.',
		communicationTips: [
			'Göstəriş verməzdən əvvəl komandanın fikrini soruşun.',
			'Tənqidi rəyi təşəkkür və konkret təkliflə birlikdə təqdim edin.',
			'Fərqli üsul təklif edənləri dinləyin — nəticə eyni, hətta daha yaxşı ola bilər.',
			'Söhbətdə faktlarla yanaşı, insanların hisslərinə də diqqət yetirin.',
		],
		career:
			'Sizə idarəetmə, nizam və aydın nəticə tələb edən işlər uyğundur. Layihə idarəçiliyi, əməliyyatlar, maliyyə, hüquq və dövlət idarəçiliyi sahələrində güclü olursunuz. Aydın iyerarxiya və ölçülə bilən məqsədlər olan təşkilatlarda sürətlə yüksəlirsiniz. Qeyri-müəyyən, strukturu olmayan mühit isə Sizi əsəbiləşdirir.',
		careers: [
			'Layihə meneceri',
			'Əməliyyatlar meneceri',
			'Maliyyə meneceri',
			'Hüquqşünas',
			'Auditor',
			'Logistika meneceri',
			'Bank filialının rəhbəri',
			'Satış meneceri',
			'Dövlət qulluqçusu',
			'Məktəb direktoru',
		],
		majors: [
			'Biznesin idarə edilməsi',
			'Menecment',
			'Maliyyə',
			'Hüquqşünaslıq',
			'Logistika',
			'Dövlət və bələdiyyə idarəetməsi',
		],
		workStyle:
			'Komandada Siz rolları bölən, son tarixləri izləyən və işi irəli aparan həmkarsınız. Hər kəsin öz məsuliyyətini bilməsi Sizin üçün vacibdir. Səmərəli iclaslar və aydın hesabatlar iş üslubunuzun əsasını təşkil edir.',
		leadership:
			'Lider kimi Siz qətiyyətli, ədalətli və nəticəyə fokuslanmış rəhbərsiniz. Aydın standartlar qoyur və onlara əməl olunmasını təmin edirsiniz. Komanda üzvlərinə daha çox sərbəstlik vermək və yeniliklərə açıq olmaq liderliyinizi gücləndirər.',
		relationships:
			'Münasibətlərdə Siz sadiq, məsuliyyətli və sabitlik yaradan tərəfdaşsınız. Ailənizin və yaxınlarınızın rifahı üçün praktik addımlar atırsınız. Gözləntilərin açıq danışılmasına üstünlük verirsiniz. Tərəfdaşınızın hisslərini dinləməyə vaxt ayırmaq münasibəti daha isti edər.',
		friendship:
			'Dostluqda Siz etibarlı, fəal və birgə fəaliyyətlər təşkil edən insansınız. Dostlarla görüşləri planlaşdırmaq və ortaq ənənələri qorumaq Sizə xoşdur. Dostlarınız Sizin dürüstlüyünüzə və sözünüzə güvənirlər.',
		stress:
			'Stress altında Siz daha nəzarətçi, səbirsiz və tənqidi ola bilərsiniz. Bəzən özünüzü anlaşılmamış və tək hiss edir, hisslərinizlə necə davranacağınızı bilmirsiniz. Fiziki fəaliyyət, aydın plan və yaxın insanla səmimi söhbət Sizə balansı qaytarır.',
		growth: [
			'Hər iclasda ən azı bir fərqli fikri dinləyib onu ciddi şəkildə müzakirə edin.',
			'Komanda üzvlərinə gözlədiyiniz nəticəni deyin, üsulu isə onların seçiminə buraxın.',
			'Həftədə bir dəfə planlaşdırılmamış, spontan bir fəaliyyətə yer verin.',
			'Çətin xəbəri çatdırmazdan əvvəl onun insanlara emosional təsirini düşünün.',
			'Həmkarlarınızın uğurlarını açıq şəkildə təbrik edin.',
		],
	},

	ESFJ: {
		code: 'ESFJ',
		name: 'Qayğıkeş',
		tagline: 'İnsanları bir araya gətirən, hər kəsin özünü rahat və dəyərli hiss etməsinə çalışan səmimi insan.',
		summary:
			'Siz mehriban, ünsiyyətcil və məsuliyyətli insansınız. Başqalarının ehtiyaclarına diqqət yetirir, praktik köməklə onların həyatını asanlaşdırırsınız. Harmoniya, nizam və yaxşı münasibətlər Sizin üçün çox vacibdir. Ailə, dostlar və komanda üçün tədbirlər təşkil etmək, insanları birləşdirmək Sizə xoşdur. Sabit dəyərlərə və ənənələrə hörmət edirsiniz. Başqalarının rəyi Sizin üçün önəmli olduğundan tənqid Sizi asanlıqla incidə bilər.',
		strengths: [
			'Güclü sosial bacarıqlar və mehribanlıq',
			'Təşkilatçılıq və praktik qayğı',
			'Məsuliyyətlilik və sədaqət',
			'Komandada harmoniya yaratmaq',
			'İnsanların ehtiyaclarını tez hiss etmək',
			'Ənənələrə və öhdəliklərə hörmət',
		],
		weaknesses: [
			'Başqalarının təsdiqinə həddindən artıq ehtiyac',
			'Tənqidə qarşı həssaslıq',
			'Münaqişədən qaçmaq',
			'Dəyişikliyə və qeyri-adi yanaşmalara müqavimət',
			'Başqalarının işlərinə həddindən artıq qarışmaq',
		],
		communication:
			'Siz isti, səmimi və nəzakətli danışırsınız. Söhbətdə hər kəsin özünü rahat hiss etməsinə çalışır, insanları bir-biri ilə tanış edirsiniz. Praktik və konkret mövzulardan danışmağı sevirsiniz. Gərginlik yarananda isə mövzunu yumşaltmağa və ya dəyişməyə meyilli olursunuz.',
		communicationTips: [
			'Fikir ayrılığını açıq müzakirə etmək münasibəti zəiflətmir, əksinə gücləndirir.',
			'Kömək təklif etməzdən əvvəl qarşı tərəfin buna ehtiyacı olub-olmadığını soruşun.',
			'Rəyi şəxsiyyətinizə yox, işə aid məlumat kimi qəbul edin.',
			'Öz ehtiyaclarınızı da başqalarınınkı qədər aydın ifadə edin.',
		],
		career:
			'Sizə insanlarla birbaşa ünsiyyət, xidmət və təşkilatçılıq tələb edən işlər uyğundur. Səhiyyə, təhsil, insan resursları, müştəri xidmətləri və tədbir təşkilatçılığı sahələrində güclü olursunuz. Komanda ruhunun güclü olduğu və zəhmətin dəyərləndirildiyi mühitdə ən yaxşı nəticəni göstərirsiniz. Təcrid olunmuş, yalnız nəzəri işlər isə Sizi tez darıxdırır.',
		careers: [
			'Müəllim',
			'Tibb bacısı (qardaşı)',
			'Həkim',
			'İnsan resursları mütəxəssisi',
			'Tədbir təşkilatçısı',
			'Müştəri xidmətləri meneceri',
			'Sosial işçi',
			'Satış mütəxəssisi',
			'Otel meneceri',
			'Ofis meneceri',
		],
		majors: [
			'Pedaqogika',
			'Tibb (Müalicə işi)',
			'Turizm və otel işinin təşkili',
			'Sosial iş',
			'Menecment',
			'İbtidai sinif müəllimliyi',
		],
		workStyle:
			'Komandada Siz hər kəsin özünü rahat hiss etməsini təmin edən və işləri nizamlı aparan həmkarsınız. Əməkdaşlıq və qarşılıqlı dəstək iş üslubunuzun əsasıdır. Aydın vəzifələr və müntəzəm rəy almaq motivasiyanızı artırır.',
		leadership:
			'Lider kimi Siz qayğıkeş, təşkilatçı və komanda ruhunu qoruyan rəhbərsiniz. Hər bir əməkdaşın ehtiyaclarına diqqət yetirir, sabit mühit yaradırsınız. Populyar olmayan qərarları da vaxtında vermək liderliyinizi daha effektiv edər.',
		relationships:
			'Münasibətlərdə Siz qayğıkeş, sadiq və tərəfdaşına diqqətli insansınız. Sevginizi praktik qayğı, ortaq ənənələr və birgə keçirilən vaxtla göstərirsiniz. Münasibətdə sabitlik və qarşılıqlı minnətdarlıq Sizin üçün vacibdir. Öz hisslərinizi və istəklərinizi açıq ifadə etmək münasibəti daha sağlam edər.',
		friendship:
			'Dostluqda Siz görüşləri təşkil edən, ad günlərini unutmayan və hər kəsi bir araya gətirən insansınız. Dostlarınızın çətin anında ilk yanında olanlardan olursunuz. Qarşılıqlı diqqət və sədaqət Sizin üçün dostluğun əsasıdır.',
		stress:
			'Stress altında Siz özünüzü dəyərləndirilməmiş hiss edə, insanların Sizə münasibətindən narahat ola bilərsiniz. Bəzən həddindən artıq tənqidi olur və ya gözlənilmədən özünüzə qapanırsınız. Yaxın insanla açıq söhbət və öz ehtiyaclarınıza vaxt ayırmaq Sizə balansı qaytarır.',
		growth: [
			'Hər xahişə dərhal razılıq vermək əvəzinə, öz imkanlarınızı nəzərə alın.',
			'Başqalarının təsdiqindən asılı olmayan şəxsi məqsədlər qoyun.',
			'Fərqli fikirdə olan insanlarla sakit və açıq müzakirə aparmağı məşq edin.',
			'Yeni yanaşmaları sınamağa açıq olun və kiçik bir layihədən başlayın.',
		],
	},

	// ---------- Kəşfiyyatçılar (SP) ----------
	ISTP: {
		code: 'ISTP',
		name: 'Usta',
		tagline: 'Problemləri həm əli, həm də məntiqi ilə həll edən sakit, çevik və praktik insan.',
		summary:
			'Siz sakit, müşahidəçi və praktik düşüncəli insansınız. Əşyaların və sistemlərin necə işlədiyini anlamaq, onları sökmək, təmir etmək və təkmilləşdirmək Sizə maraqlıdır. Böhran anlarında soyuqqanlı qalır, problemi tez və məntiqi şəkildə həll edirsiniz. Müstəqilliyə və şəxsi azadlığa böyük dəyər verirsiniz. Nəzəriyyədən çox real təcrübə və nəticə Sizi cəlb edir. Uzunmüddətli planlardan çox, anın tələblərinə uyğun hərəkət etməyi üstün tutursunuz.',
		strengths: [
			'Praktik problem həlli və texniki bacarıqlar',
			'Böhran anlarında soyuqqanlılıq',
			'Məntiqi və obyektiv təhlil',
			'Çeviklik və tez uyğunlaşma',
			'Müstəqillik və özünəkifayətlik',
			'Resurslardan səmərəli istifadə',
		],
		weaknesses: [
			'Hissləri ifadə etməkdə çətinlik',
			'Uzunmüddətli planlardan və öhdəliklərdən qaçmaq',
			'Rutin işlərdə tez darıxmaq',
			'Riskli qərarlara meyillilik',
			'Başqalarına qapalı və laqeyd görünmək',
		],
		communication:
			'Siz az, lakin konkret danışırsınız. Lazımsız sözlərdən və uzun izahlardan qaçır, birbaşa mahiyyətə keçirsiniz. Söhbətdən çox, birgə fəaliyyət vasitəsilə insanlarla əlaqə qurursunuz. Maraqlı texniki mövzu olanda isə gözlənilmədən çox danışa bilərsiniz.',
		communicationTips: [
			'Qısa cavablarınızın soyuq qəbul olunmaması üçün bir cümləlik izah əlavə edin.',
			'Planlarınızı dəyişəndə bu barədə digərlərinə vaxtında xəbər verin.',
			'Yaxın insanlarınızla hisslərinizi bölüşmək üçün sakit anlar seçin.',
			'Komanda müzakirələrində fikrinizi sona saxlamadan, erkən bildirin.',
		],
		career:
			'Sizə praktik iş, texniki problem həlli və müstəqillik təklif edən işlər uyğundur. Mühəndislik, texnologiya, mexanika, təhlükəsizlik və idman sahələrində bacarıqlarınızı tam göstərə bilərsiniz. Nəticəni öz gözünüzlə gördüyünüz dinamik işlər Sizi motivasiya edir. Çoxlu bürokratiya və uzun iclaslar isə Sizi yorur.',
		careers: [
			'Mexanika mühəndisi',
			'Proqram mühəndisi',
			'Kibertəhlükəsizlik mütəxəssisi',
			'Elektrik mühəndisi',
			'Pilot',
			'Avtomobil texniki',
			'Neft-qaz mühəndisi',
			'Data analitik',
			'Fövqəladə hallar mütəxəssisi',
			'İdman məşqçisi',
		],
		majors: [
			'Mexanika mühəndisliyi',
			'Elektrik mühəndisliyi',
			'Kompüter mühəndisliyi',
			'Neft-qaz mühəndisliyi',
			'İnformasiya təhlükəsizliyi',
			'Bədən tərbiyəsi və idman',
		],
		workStyle:
			'Komandada Siz problem çıxanda dərhal praktik həll tapan həmkarsınız. Müstəqil işləməyi, tapşırığı öz üsulunuzla həll etməyi üstün tutursunuz. Aydın məqsəd verilib təfərrüatlar Sizə həvalə olunanda ən yaxşı nəticəni göstərirsiniz.',
		leadership:
			'Lider kimi Siz sözlə deyil, işlə nümunə göstərirsiniz. Böhran vəziyyətlərində sakit və effektiv qərarlar verirsiniz. Komandaya uzunmüddətli məqsədləri və gözləntiləri aydın izah etmək liderliyinizi gücləndirər.',
		relationships:
			'Münasibətlərdə Siz sakit, sadiq və şəxsi məkana hörmət edən tərəfdaşsınız. Sevginizi sözlə deyil, praktik kömək və birgə fəaliyyətlərlə göstərirsiniz. Azadlığınıza hörmət edilməsi Sizin üçün vacibdir. Hisslərinizi vaxtaşırı sözlə ifadə etmək tərəfdaşınızın özünü daha əmin hiss etməsinə kömək edər.',
		friendship:
			'Dostluqda Siz sadə, rahat və birgə macəralara açıq insansınız. Dostlarınızla söhbətdən çox idman, səyahət və ya hobbilərlə vaxt keçirməyi sevirsiniz. Ehtiyac olanda isə hər zaman praktik kömək göstərirsiniz.',
		stress:
			'Stress altında Siz özünüzə qapanır, ünsiyyətdən qaçırsınız. Bəzən gözlənilmədən emosional partlayışlar yaşaya, insanların Sizə münasibəti barədə həddindən artıq düşünə bilərsiniz. Fiziki fəaliyyət, əl işi və təkbaşına vaxt Sizə sakitlik qaytarır.',
		growth: [
			'Hər rüb üçün bir uzunmüddətli məqsəd yazın və onu aylıq addımlara bölün.',
			'Yaxınlarınızla həftədə bir dəfə hissləriniz barədə açıq danışmağa çalışın.',
			'Riskli qərar verməzdən əvvəl mümkün nəticələri yazılı şəkildə müqayisə edin.',
			'Rutin tapşırıqları qısa hissələrə bölüb hər birini kiçik bir çağırış kimi yerinə yetirin.',
		],
	},

	ISFP: {
		code: 'ISFP',
		name: 'Sənətkar',
		tagline: 'Gözəlliyi incəliklə hiss edən, özünü sözdən çox yaradıcılıq və əməllə ifadə edən həssas insan.',
		summary:
			'Siz sakit, mehriban və estetik duyğusu güclü insansınız. Rəng, səs, forma və təbiət kimi detalları incəliklə hiss edirsiniz. Özünüzü sözlərdən çox yaradıcılıq və əməllərlə ifadə etməyi üstün tutursunuz. Şəxsi dəyərlərinizə sadiqsiniz, lakin öz fikirlərinizi başqalarına məcbur etmirsiniz. Anı yaşamağı, çevik qalmağı və azadlığınızı qorumağı sevirsiniz. İnsanlara qarşı mərhəmətli və anlayışlısınız, onlara səssiz də olsa dəstək verirsiniz.',
		strengths: [
			'Estetik duyğu və yaradıcılıq',
			'Empatiya və mehribanlıq',
			'Çeviklik və açıq fikirlilik',
			'Praktik əl bacarıqları',
			'Anı yaşamaq və həyatdan zövq almaq',
			'Səmimilik və dəyərlərə sadiqlik',
		],
		weaknesses: [
			'Uzunmüddətli planlaşdırmadan qaçmaq',
			'Münaqişədən və tənqiddən çəkinmək',
			'Özünü təqdim etməkdə və uğurlarını göstərməkdə çətinlik',
			'Gərgin rəqabət mühitində tez yorulmaq',
			'Qərarları son ana qədər təxirə salmaq',
		],
		communication:
			'Siz yumşaq, nəzakətli və diqqətli danışırsınız. Münasibətinizi çox vaxt sözdən çox əməl və jestlərlə göstərirsiniz. İnsanları dinləyir, onları mühakimə etmədən qəbul edirsiniz. Yeni insanlar arasında əvvəlcə susqun olsanız da, tanıdığınız insanlarla səmimi və isti ünsiyyət qurursunuz.',
		communicationTips: [
			'Fikrinizi bildirmək üçün mükəmməl anı gözləməyin — sakit tonda elə indi deyin.',
			'Vacib məsələlərdə hisslərinizi və ehtiyaclarınızı konkret sözlərlə ifadə edin.',
			'Rəy alanda onu şəxsiyyətinizə deyil, konkret işə aid məlumat kimi qəbul edin.',
			'İşinizi təqdim edərkən onun arxasındakı fikri qısaca izah edin.',
		],
		career:
			'Sizə yaradıcılıq, praktik iş və şəxsi dəyərlərə uyğunluq təklif edən işlər uyğundur. Dizayn, incəsənət, səhiyyə, heyvanlara və ya təbiətə qayğı kimi sahələrdə özünüzü rahat hiss edirsiniz. Çevik iş rejimi və nəticəni gözlə görmək imkanı Sizi motivasiya edir. Sərt iyerarxiya və gərgin rəqabət isə yaradıcılığınızı məhdudlaşdırır.',
		careers: [
			'Qrafik dizayner',
			'İnteryer dizayneri',
			'Fotoqraf',
			'Musiqiçi',
			'Fizioterapevt',
			'Baytar həkimi',
			'Aşpaz',
			'Moda dizayneri',
			'Tibb bacısı (qardaşı)',
			'Landşaft dizayneri',
		],
		majors: ['Dizayn', 'Rəssamlıq', 'Musiqi', 'Memarlıq', 'Baytarlıq', 'Biologiya'],
		workStyle:
			'Komandada Siz sakit, mehriban və işinə səliqə ilə yanaşan həmkarsınız. Gərginlik olmayan, dəstəkləyici mühitdə ən yaxşı nəticəni verirsiniz. Öz tempinizlə və yaradıcı sərbəstliklə işləmək imkanı Sizin üçün vacibdir.',
		leadership:
			'Lider kimi Siz şəxsi nümunə, mehribanlıq və hər kəsin fərdiliyinə hörmətlə idarə edirsiniz. Komanda üzvlərinə sərbəstlik verir, onların yaradıcılığını dəstəkləyirsiniz. Aydın gözləntilər qoymaq və çətin söhbətləri ertələməmək liderliyinizi gücləndirər.',
		relationships:
			'Münasibətlərdə Siz həssas, sadiq və romantik tərəfdaşsınız. Sevginizi sözlərdən çox diqqətli jestlər və birgə yaşanan gözəl anlarla göstərirsiniz. Qarşılıqlı hörmət və şəxsi azadlıq Sizin üçün vacibdir. Narazılığı içinizdə saxlamaq əvəzinə vaxtında bölüşmək münasibəti qoruyar.',
		friendship:
			'Dostluqda Siz sadiq, anlayışlı və mühakimə etməyən insansınız. Dostlarınızla gəzinti, musiqi və ya yaradıcı fəaliyyət kimi sakit, xoş anlar keçirməyi sevirsiniz. Dost dairəniz kiçik, lakin səmimidir.',
		stress:
			'Stress altında Siz özünüzə qapanır, özünüzü dəyərsiz hiss etməyə başlaya bilərsiniz. Bəzən gözlənilmədən sərt və tənqidi olur, hər şeyi birdən nizama salmağa çalışırsınız. Təbiətdə vaxt keçirmək, yaradıcı fəaliyyət və yaxın dostla söhbət Sizə sakitlik qaytarır.',
		growth: [
			'Yaradıcı işlərinizdən portfolio hazırlayın və onu müntəzəm yeniləyin.',
			'Bir illik sadə plan qurun: hansı bacarıqları öyrənmək istədiyinizi yazın.',
			'Narahat olduğunuz məsələni bir həftə ərzində müzakirə etməyi qayda halına salın.',
			'Uğurlarınızı qeyd edin və onları başqalarına təqdim etməyi məşq edin.',
		],
	},

	ESTP: {
		code: 'ESTP',
		name: 'Təşəbbüskar',
		tagline: 'Anı yaşayan, fürsəti tez tutan, enerjisi və cəsarəti ilə dərhal hərəkətə keçən praktik insan.',
		summary:
			'Siz enerjili, cəsarətli və hərəkətə hazır insansınız. Uzun müzakirələrdən çox birbaşa iş görməyi və nəticəni dərhal görməyi sevirsiniz. Ətrafdakı detalları və fürsətləri tez fərq edir, vəziyyətə anında uyğunlaşırsınız. Ünsiyyətcilsiniz, insanları asanlıqla cəlb edir və onlara enerji verirsiniz. Risk və yeni təcrübələr Sizi qorxutmur, əksinə həvəsləndirir. Bəzən tələsik qərarlar uzunmüddətli nəticələri nəzərdən qaçırmağınıza səbəb ola bilər.',
		strengths: [
			'Tez qərar vermək və hərəkətə keçmək',
			'Praktiklik və real vəziyyəti dəqiq qiymətləndirmək',
			'Ünsiyyətcillik və inandırıcılıq',
			'Gözlənilməz vəziyyətlərə tez uyğunlaşmaq',
			'Cəsarət və risk götürmək bacarığı',
			'Enerji və yumor hissi',
		],
		weaknesses: [
			'Uzunmüddətli planlaşdırmaya səbirsizlik',
			'Tələsik və impulsiv qərarlar',
			'Nəzəri və monoton işlərdə tez darıxmaq',
			'Qaydaları məhdudiyyət kimi görüb onlardan yan keçmək',
			'Başqalarının hisslərini bəzən nəzərdən qaçırmaq',
		],
		communication:
			'Siz canlı, birbaşa və yumorla danışırsınız. Mürəkkəb mövzuları sadə və praktik dillə izah etməyi bacarırsınız. İnsanları tez "oxuyur", söhbəti onların reaksiyasına uyğun dəyişirsiniz. Uzun və nəzəri müzakirələrdə isə səbirsizlik göstərə bilərsiniz.',
		communicationTips: [
			'Vacib qərarlardan əvvəl başqalarının fikrini dinləmək üçün fasilə verin.',
			'Zarafat edərkən həmsöhbətinizin əhvalını və vəziyyəti nəzərə alın.',
			'Verdiyiniz sözləri və razılaşmaları yazılı qeyd edin.',
			'Nəzəri izahı dinləyərkən əsas fikri öz sözlərinizlə təkrarlayın — bu, diqqəti saxlayır.',
		],
		career:
			'Sizə dinamik, nəticəsi dərhal görünən və insanlarla ünsiyyət tələb edən işlər uyğundur. Satış, sahibkarlıq, idman, fövqəladə xidmətlər və danışıqlar sahələrində güclü olursunuz. Sürətli qərar və təşəbbüs tələb edən mühit Sizi motivasiya edir. Uzun müddət masa arxasında oturmaq və monoton prosedurlar isə enerjinizi azaldır.',
		careers: [
			'Sahibkar',
			'Satış meneceri',
			'Marketoloq',
			'Daşınmaz əmlak agenti',
			'İdman məşqçisi',
			'Fövqəladə hallar mütəxəssisi',
			'Biznes inkişaf meneceri',
			'Polis əməkdaşı',
			'Tədbir təşkilatçısı',
			'Reportyor',
		],
		majors: [
			'Biznesin idarə edilməsi',
			'Marketinq',
			'Bədən tərbiyəsi və idman',
			'Menecment',
			'Turizm və otel işinin təşkili',
			'Jurnalistika',
		],
		workStyle:
			'Komandada Siz işi hərəkətə gətirən və problemi yerindəcə həll edən həmkarsınız. Uzun planlaşdırma əvəzinə dərhal başlamaq və yol boyu düzəliş etmək Sizə uyğundur. Detallı sənədləşmə tələb edən hissələri başqaları ilə bölüşmək komandanın effektivliyini artırır.',
		leadership:
			'Lider kimi Siz enerjili, cəsarətli və böhran anında qətiyyətli rəhbərsiniz. Komandanı şəxsi nümunə ilə hərəkətə gətirir, fürsətləri tez dəyərləndirirsiniz. Uzunmüddətli strategiya və ardıcıl proseslər qurmaq liderliyinizi daha davamlı edər.',
		relationships:
			'Münasibətlərdə Siz əyləncəli, səxavətli və həyatı birgə yaşamağı sevən tərəfdaşsınız. Birgə macəralar və yeni təcrübələr Sizin üçün münasibətin vacib hissəsidir. Problemləri uzatmadan, praktik şəkildə həll etməyə çalışırsınız. Dərin hissləri danışmağa vaxt ayırmaq münasibətinizi daha da möhkəmləndirər.',
		friendship:
			'Dostluqda Siz şən, fəal və hər zaman yeni plan təklif edən insansınız. Geniş dost dairəniz var və hər yerdə tez dost qazanırsınız. Dostlarınız Sizin enerjinizi və çətin anda göstərdiyiniz real köməyi yüksək qiymətləndirir.',
		stress:
			'Stress altında Siz daha impulsiv ola, düşünmədən risk götürə bilərsiniz. Bəzən gələcəklə bağlı qaranlıq fikirlərə qapılır, hər şeyin pis bitəcəyini düşünürsünüz. Fiziki fəaliyyət, sakit təhlil və etibarlı dostla söhbət Sizə tarazlığı qaytarır.',
		growth: [
			'Böyük qərarlardan əvvəl bir gün gözləyin və ən azı bir nəfərlə məsləhətləşin.',
			'Maliyyə və karyera məqsədlərinizi yazılı şəkildə planlaşdırın və hər ay yoxlayın.',
			'Başladığınız işi sona çatdırmaq üçün özünüzə kiçik mükafatlar təyin edin.',
			'Qarşınızdakı insanın hisslərini soruşmağı söhbətin adi hissəsinə çevirin.',
		],
	},

	ESFP: {
		code: 'ESFP',
		name: 'Həyatsevər',
		tagline: 'Adi anı bayrama çevirən, ətrafındakılara enerji və sevinc bəxş edən səmimi və spontan insan.',
		summary:
			'Siz enerjili, şən və həyatı dolğun yaşamağı sevən insansınız. İnsanlarla olmaq, yeni təcrübələr qazanmaq və anı yaşamaq Sizə böyük zövq verir. İnsanların əhvalını, detalları və imkanları tez hiss edirsiniz. Praktik və çeviksiniz, problemləri yerindəcə, real yollarla həll edirsiniz. Səmimiliyiniz və isti münasibətiniz insanları Sizə yaxınlaşdırır. Bəzən gələcəyi planlamaq əvəzinə bu günün maraqlı imkanlarına daha çox fokuslanırsınız.',
		strengths: [
			'Ünsiyyətcillik və insanlarla tez dil tapmaq',
			'Enerji, şənlik və müsbət əhval',
			'Praktik problem həlli',
			'Çeviklik və spontanlıq',
			'Estetik zövq və təqdimat bacarığı',
			'İnsanların ehtiyacını hiss edib dərhal kömək etmək',
		],
		weaknesses: [
			'Uzunmüddətli planlaşdırmadan qaçmaq',
			'Diqqətin tez yayınması',
			'Tənqidə qarşı həssaslıq',
			'Pulu və vaxtı idarə etməkdə çətinlik',
			'Çətin və xoşagəlməz məsələləri təxirə salmaq',
		],
		communication:
			'Siz isti, canlı və ifadəli danışırsınız; söhbətə yumor və enerji qatırsınız. Mövzuları konkret nümunələr və şəxsi təcrübələrlə izah edirsiniz. Qarşınızdakının əhvalını tez hiss edib ona uyğunlaşırsınız. Ciddi və nəzəri müzakirələr isə Sizə bəzən yorucu gəlir.',
		communicationTips: [
			'Ciddi söhbətlərdə zarafatı bir qədər kənara qoyub mövzuya fokuslanın.',
			'Vacib razılaşmaları və tarixləri yazılı qeyd edin.',
			'Çətin xəbəri də ertələmədən, səmimi və sakit tonda çatdırın.',
			'Tənqidi Sizə qarşı deyil, işin yaxşılaşması üçün təklif kimi qəbul edin.',
		],
		career:
			'Sizə insanlarla canlı ünsiyyət, müxtəliflik və praktik fəaliyyət tələb edən işlər uyğundur. Tədbir təşkilatçılığı, turizm, satış, media, səhnə sənəti və xidmət sahələrində parlaya bilərsiniz. Dinamik, komanda ruhu güclü olan mühit Sizi motivasiya edir. Təcrid olunmuş, monoton və həddindən artıq nəzəri işlər isə enerjinizi azaldır.',
		careers: [
			'Tədbir təşkilatçısı',
			'Turizm meneceri',
			'Satış mütəxəssisi',
			'Aktyor',
			'Teleaparıcı',
			'Fitnes təlimçisi',
			'Marketoloq',
			'Otel meneceri',
			'İbtidai sinif müəllimi',
			'Stilist',
		],
		majors: [
			'Turizm və otel işinin təşkili',
			'Aktyor sənəti',
			'Marketinq',
			'Bədən tərbiyəsi və idman',
			'İbtidai sinif müəllimliyi',
			'Jurnalistika',
		],
		workStyle:
			'Komandada Siz müsbət atmosfer yaradan və insanları birləşdirən həmkarsınız. Praktik tapşırıqlar və insanlarla birbaşa iş Sizin güclü tərəfinizdir. Planlaşdırma və sənədləşmə üçün aydın sistem olduqda daha da məhsuldar olursunuz.',
		leadership:
			'Lider kimi Siz komandanı enerji, həvəs və şəxsi diqqətlə ruhlandırırsınız. İş mühitini xoş və motivasiyaedici edirsiniz. Uzunmüddətli məqsədlər qoymaq və çətin qərarları ertələməmək liderliyinizi gücləndirər.',
		relationships:
			'Münasibətlərdə Siz səmimi, romantik və diqqətli tərəfdaşsınız. Tərəfdaşınızla birgə əylənmək, səyahət etmək və yeni təcrübələr yaşamaq Sizə xoşdur. Sevginizi isti sözlər və diqqətli jestlərlə açıq göstərirsiniz. Gələcək planlarınızı birlikdə qurmağa vaxt ayırmaq münasibətə sabitlik qatar.',
		friendship:
			'Dostluqda Siz hər görüşü yaddaqalan edən şən və səxavətli insansınız. Çoxlu dostunuz var və onları bir araya gətirməyi sevirsiniz. Dostlarınız çətin anda Sizin isti dəstəyinizə arxalana bilər.',
		stress:
			'Stress altında Siz gələcəklə bağlı qaranlıq fikirlərə qapıla və hər şeyin səhv gedəcəyindən narahat ola bilərsiniz. Bəzən problemdən qaçmaq üçün əyləncəyə və ya alış-verişə daha çox yönəlirsiniz. Problemi yaxın insanla açıq müzakirə etmək və kiçik praktik addımlar atmaq Sizə nəzarət hissini qaytarır.',
		growth: [
			'Aylıq büdcə planı hazırlayın və xərclərinizi izləyin.',
			'Hər ay bir uzunmüddətli məqsədə — təhsil, sertifikat və ya yeni bacarığa — vaxt ayırın.',
			'Xoşagəlməz tapşırıqları günün əvvəlində yerinə yetirin.',
			'Vacib qərarlardan əvvəl müsbət və mənfi tərəfləri yazılı müqayisə edin.',
		],
	},
}
