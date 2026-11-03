// Extended Big Five report texts (Azerbaijani). Plain data only.
// Adds to tests/big5/data.ts: career fit, behaviour under stress, ideal roles, watch-outs.
// N = "Emosional həssaslıq": described non-clinically; low N = calm and stress-resistant.
import { Big5Extra } from './types'

export const BIG5_EXTRA: Big5Extra = {
	O: {
		low: {
			careerFit:
				'Siz qaydaların, sınanmış metodların və konkret nəticələrin önəmli olduğu sahələrdə uzunmüddətli uğur qazanırsınız. Əməliyyat, istehsal, mühasibat və texniki xidmət kimi istiqamətlərdə sabitlik və ardıcıllığınız birbaşa keyfiyyətə çevrilir. Tez-tez strategiya dəyişən startap mühitindən çox, möhkəm prosesləri olan şirkətlər Sizə daha uyğun gələ bilər.',
			underStress:
				'Gərginlik zamanı Siz tanış üsullara daha möhkəm bağlanır və yeni təklifləri əvvəlcədən rədd etməyə meyilli olursunuz. Bu, qısa müddətdə sabitlik versə də, dəyişən şəraitdə çeviklik imkanını azalda bilər.',
			idealRoles: [
				'Mühasib',
				'Əməliyyatlar mütəxəssisi',
				'Logistika koordinatoru',
				'Texniki xidmət mühəndisi',
				'Bank əməliyyatçısı',
			],
			watchOut:
				'Sahənizdə texnologiya dəyişdikcə (avtomatlaşdırma, süni intellekt alətləri) yeniliklərdən uzaq qalmaq bacarıqlarınızın köhnəlməsinə səbəb ola bilər. Hər il ən azı bir yeni iş alətini öyrənməyi qayda halına salın.',
		},
		mid: {
			careerFit:
				'Siz həm mövcud prosesləri qoruyan, həm də onları ehtiyatla təkmilləşdirən rollarda güclüsünüz. Layihə idarəetməsi, biznes təhlili, tədris və ya məhsul dəstəyi kimi sahələrdə yenilik ilə praktikliyi birləşdirmək bacarığınız Sizi "körpü" insana çevirir. Yaradıcı komandalarla icra komandaları arasında əlaqələndirici rolunda xüsusilə faydalısınız.',
			underStress:
				'Təzyiq altında Siz adətən sınanmış yola qayıdır, yeni ideyaları sonraya saxlayırsınız. Bu, ağıllı müvəqqəti strategiyadır, sadəcə gərginlik keçəndən sonra təxirə salınan ideyalara geri dönməyi unutmayın.',
			idealRoles: [
				'Layihə meneceri',
				'Biznes analitiki',
				'Məhsul dəstəyi mütəxəssisi',
				'Müəllim',
				'Marketinq koordinatoru',
			],
			watchOut:
				'Balanslı mövqe bəzən qərarsızlığa çevrilə bilər: həm yeni, həm köhnə yolu dəstəkləyəndə komanda Sizin real mövqeyinizi anlamaya bilər. Seçim anında hansı tərəfə daha yaxın olduğunuzu açıq deyin.',
		},
		high: {
			careerFit:
				'Siz yenilik, tədqiqat, dizayn və strategiya kimi qeyri-müəyyənliyin və yaradıcı axtarışın gündəlik iş olduğu sahələrdə özünüzü tam açırsınız. Fənlərarası layihələr — məsələn, data ilə dizaynı və ya texnologiya ilə təhsili birləşdirən işlər — Sizin üçün xüsusilə cəlbedicidir. Bakıda inkişaf edən kreativ sənaye, IT və tədqiqat mərkəzləri belə profil üçün geniş imkan yaradır.',
			underStress:
				'Gərginlik zamanı ağlınız eyni anda çoxlu alternativ ssenari qurur və bu, fokusu dağıda bilər. Bəzən problemi həll etmək əvəzinə onu yenidən təsvir etməyə və yeni yanaşma axtarmağa vaxt sərf edirsiniz.',
			idealRoles: [
				'UX tədqiqatçısı',
				'Strateji planlaşdırma mütəxəssisi',
				'Elmi tədqiqatçı',
				'Kreativ direktor',
				'Məhsul dizayneri',
			],
			watchOut:
				'İdeyalar çox olanda icra arxada qala bilər. Hər yeni ideyanı "kimə, nə vaxta, hansı nəticə ilə?" sualları ilə yoxlamaq onu reallığa yaxınlaşdırır.',
		},
	},
	C: {
		low: {
			careerFit:
				'Siz improvizasiya, sürətli reaksiya və çevikliyin rəsmi plandan daha vacib olduğu işlərdə özünüzü rahat hiss edirsiniz. Canlı tədbirlər, yaradıcı istehsal, sahə işləri və ya müştəri ilə birbaşa təmas tələb edən vəzifələr Sizin üçün uyğun ola bilər. Strukturu Sizin əvəzinizə saxlayan güclü koordinatorla işləmək isə nəticələrinizi xeyli artırır.',
			underStress:
				'Son tarixlər yaxınlaşanda Siz çox vaxt işi son ana saxlayıb sonra intensiv tempdə tamamlamağa çalışırsınız. Bu, bəzən alınsa da, keyfiyyətə və yuxu rejiminizə zərər verə bilər.',
			idealRoles: [
				'Tədbir meneceri',
				'Kontent yaradıcısı',
				'Satış nümayəndəsi',
				'Turist bələdçisi',
				'Video operatoru',
			],
			watchOut:
				'Kiçik unutqanlıqlar (cavabsız e-poçt, gecikmiş hesabat) toplandıqca peşəkar nüfuzunuza təsir edə bilər. Sadə tapşırıq tətbiqi və ya həftəlik yoxlama siyahısı bu riski xeyli azaldır.',
		},
		mid: {
			careerFit:
				'Siz həm planlı, həm də çevik yanaşma tələb edən hibrid rollarda yaxşı nəticə göstərirsiniz. Layihə koordinasiyası, marketinq, jurnalistika və ya müştəri xidməti kimi sahələrdə həm son tarixlərə riayət etmək, həm də plana gözlənilməz dəyişikliklər daxil etmək bacarığınız dəyərlidir. Prosesin həddən artıq sərt olmadığı, amma aydın hədəflərin qoyulduğu komandalar Sizə ən uyğundur.',
			underStress:
				'Gərginlik artanda Siz prioritet saydığınız işlərə fokuslanır, ikinci dərəcəli işləri isə tamamilə kənara qoya bilərsiniz. Bu, adətən effektivdir, amma unudulan kiçik öhdəliklər sonradan yığılıb problem yarada bilər.',
			idealRoles: [
				'Layihə koordinatoru',
				'Marketinq meneceri',
				'Müştəri uğuru meneceri',
				'İnsan resursları (HR) mütəxəssisi',
				'Jurnalist',
			],
			watchOut:
				'Vacib saymadığınız işlərdəki sərbəstlik bəzən başqalarının vacib saydığı işlərə də keçə bilər. Komandanızın prioritetlərini öz prioritetlərinizlə vaxtaşırı tutuşdurun.',
		},
		high: {
			careerFit:
				'Siz dəqiqlik, nizam və etibarlılığın birbaşa nəticəyə təsir etdiyi sahələrdə yüksək dəyər yaradırsınız. Maliyyə, audit, layihə idarəetməsi, mühəndislik və tibb kimi istiqamətlərdə ardıcıllığınız və intizamınız uzunmüddətli karyera üstünlüyünə çevrilir. Rəhbərlər Sizə çox vaxt mürəkkəb, çoxmərhələli və məsuliyyətli layihələri etibar edirlər.',
			underStress:
				'Gərginlik zamanı Siz nəzarəti artırmağa, daha çox iş saatı sərf etməyə və hər detalı özünüz yoxlamağa meyilli olursunuz. Bu, qısa müddətdə nəticə versə də, tükənmə riskini və komandada gərginliyi artırır.',
			idealRoles: ['Layihə meneceri', 'Auditor', 'Maliyyə nəzarətçisi', 'Keyfiyyət mühəndisi', 'Əczaçı'],
			watchOut:
				'Plana sadiqlik bəzən daha yaxşı fürsət yarananda belə istiqaməti dəyişməyə mane ola bilər. Planı məqsəd deyil, vasitə kimi görmək çevikliyinizi qoruyur.',
		},
	},
	E: {
		low: {
			careerFit:
				'Siz dərin konsentrasiya, müstəqil təhlil və yazılı ünsiyyətin üstünlük təşkil etdiyi işlərdə ən yaxşı nəticəni göstərirsiniz. Proqramlaşdırma, tədqiqat, redaktə, mühasibat və dizayn kimi sahələrdə sakit diqqətiniz keyfiyyətə çevrilir. Uzaqdan və ya hibrid iş formatı da Sizə enerjinizi daha effektiv idarə etmək imkanı verir.',
			underStress:
				'Gərginlik zamanı Siz ünsiyyəti minimuma endirir və problemi təkbaşına həll etməyə çalışırsınız. Bu, komandanın vəziyyətdən xəbərsiz qalmasına və lazımi dəstəyin gecikməsinə səbəb ola bilər.',
			idealRoles: ['Proqram mühəndisi', 'Data analitiki', 'Redaktor', 'Laboratoriya mütəxəssisi', 'Arxivçi'],
			watchOut:
				'Karyerada irəliləyiş çox vaxt görünürlükdən də asılıdır, ona görə də nəticələrinizi qısa hesabatlarla müntəzəm paylaşmaq vacibdir. Səssizliyiniz bəzən marağın olmaması kimi yanlış anlaşıla bilər.',
		},
		mid: {
			careerFit:
				'Siz həm komanda ilə ünsiyyət, həm də fərdi fokus tələb edən rollarda rahat işləyirsiniz. Məsləhətçilik, məhsul idarəetməsi, tədris və ya HR kimi sahələrdə insanlarla iş və dərin təhlil arasında keçid etmək bacarığınız böyük üstünlükdür. Görüşlərin və sakit iş vaxtının balanslı bölündüyü iş rejimi Sizin üçün idealdır.',
			underStress:
				'Təzyiq altında Siz vəziyyətə görə ya insanlara yaxınlaşıb dəstək axtarır, ya da tək qalıb fikirlərinizi toplayırsınız. Hansı yolun Sizə həqiqətən kömək etdiyini bilmək bərpa müddətini qısaldır.',
			idealRoles: [
				'İdarəetmə məsləhətçisi',
				'Məhsul meneceri',
				'Universitet müəllimi',
				'HR biznes tərəfdaşı',
				'UX tədqiqatçısı',
			],
			watchOut:
				'Hər iki mühitə uyğunlaşa bildiyiniz üçün bəzən öz real ehtiyacınızı gözdən qaçıra bilərsiniz. Təqviminiz həddən artıq görüşlə və ya həddən artıq təkliklə dolanda bunu vaxtında tənzimləyin.',
		},
		high: {
			careerFit:
				'Siz ünsiyyətin, təqdimatın və insanlara təsir etmənin işin mərkəzində olduğu sahələrdə parlayırsınız. Satış, biznesin inkişafı, ictimaiyyətlə əlaqələr, tədbir idarəçiliyi, media və liderlik rolları Sizin təbii enerjinizi nəticəyə çevirir. Şəbəkə qurmaq bacarığınız Bakının biznes mühitində yeni fürsətlərə tez çıxış imkanı yaradır.',
			underStress:
				'Gərginlik zamanı Siz daha çox danışmağa, daha çox insanla əlaqə saxlamağa və problemi fəal hərəkətlə həll etməyə meyilli olursunuz. Bu, bəzən dayanıb düşünməyə və diqqətli təhlilə vaxt qoymur.',
			idealRoles: [
				'Satış meneceri',
				'Biznesin inkişafı meneceri',
				'İctimaiyyətlə əlaqələr (PR) mütəxəssisi',
				'Tədbir meneceri',
				'Televiziya və ya radio aparıcısı',
			],
			watchOut:
				'Çoxlu görüş və tanışlıq bəzən dərin hazırlıq tələb edən işlərin hesabına olur. Vacib təqdimat və danışıqlardan əvvəl təhlilə ayrıca vaxt ayırmaq inandırıcılığınızı daha da artırır.',
		},
	},
	A: {
		low: {
			careerFit:
				'Siz obyektivlik, sərt danışıq və çətin qərarların gündəlik iş olduğu sahələrdə güclü mövqe tutursunuz. Hüquq, satınalma, investisiya, audit və ya böhran idarəetməsi kimi istiqamətlərdə emosiyadan çox faktlara söykənməyiniz üstünlükdür. Rəqabətli və nəticəyönümlü təşkilatlarda Sizin açıq mövqeyiniz qiymətləndirilir.',
			underStress:
				'Gərginlik zamanı Siz daha kəskin və tənqidi ola bilər, başqalarının fikrini dinləməyə səbriniz azalır. Bu, qısa müddətdə qərarı sürətləndirsə də, komandada müqavimət yarada bilər.',
			idealRoles: [
				'Vəkil',
				'Satınalma meneceri',
				'İnvestisiya analitiki',
				'Auditor',
				'Böhran idarəetməsi mütəxəssisi',
			],
			watchOut:
				'Düz danışmağınız dəyərli olsa da, etimad qazanılmadan verilən sərt rəy çox vaxt qəbul olunmur. Münasibət qurmağa vaxt ayırmaq təsir gücünüzü artırır.',
		},
		mid: {
			careerFit:
				'Siz həm əməkdaşlıq, həm də lazım olanda qətiyyətli mövqe tələb edən rollarda güclüsünüz. Layihə idarəetməsi, müştəri münasibətləri, komanda rəhbərliyi və ya məsləhətçilikdə həm münasibəti qoruyub, həm də maraqları müdafiə etmək bacarığınız böyük dəyərdir. Danışıqlarda hər iki tərəfə sərfəli həll axtarmaq Sizə təbii gəlir.',
			underStress:
				'Gərginlik zamanı Siz vəziyyətə görə ya güzəştə gedir, ya da mövqeyinizi sərtləşdirirsiniz. Hansı seçimi niyə etdiyinizi anlamaq daha ardıcıl davranmağa kömək edir.',
			idealRoles: [
				'Komanda rəhbəri',
				'Müştəri münasibətləri meneceri',
				'Layihə meneceri',
				'HR biznes tərəfdaşı',
				'Satış meneceri',
			],
			watchOut:
				'Bəzən münasibəti qorumaq üçün vacib narazılığı gecikdirə və ya əksinə, gərgin anda lazım olduğundan sərt deyə bilərsiniz. Çətin mövzunu planlı və sakit vaxtda açmaq daha yaxşı nəticə verir.',
		},
		high: {
			careerFit:
				'Siz qayğı, etimad və əməkdaşlığın işin əsasını təşkil etdiyi sahələrdə özünüzü tapırsınız. Tibb, təhsil, sosial xidmət, HR, müştəri dəstəyi və komanda koordinasiyası kimi istiqamətlərdə insanlarla isti münasibət qurmağınız nəticəyə birbaşa təsir edir. Yardımlaşma mədəniyyəti güclü olan təşkilatlarda Siz uzunmüddətli və sadiq əməkdaş olursunuz.',
			underStress:
				'Gərginlik zamanı Siz münaqişədən qaçmaq üçün başqalarının yükünü də öz üzərinizə götürə bilərsiniz. Bu, qısa müddətdə gərginliyi azaltsa da, Sizin yorğunluğunuzu artırır.',
			idealRoles: [
				'Tibb bacısı və ya tibb qardaşı',
				'Müəllim',
				'Sosial işçi',
				'Müştəri dəstəyi meneceri',
				'Psixoloji məsləhətçi',
			],
			watchOut:
				'Maaş, vəzifə və ya iş yükü ilə bağlı danışıqlarda Siz öz maraqlarınızı lazım olduğundan az müdafiə edə bilərsiniz. Danışıqdan əvvəl minimum şərtlərinizi yazılı müəyyən etmək Sizi qoruyur.',
		},
	},
	N: {
		low: {
			careerFit:
				'Siz yüksək təzyiq, sürətli qərar və gözlənilməz vəziyyətlərin adi hal olduğu sahələrdə sabit performans göstərirsiniz. Təcili tibbi yardım, aviasiya, böhran idarəetməsi, maliyyə bazarları və ya böyük layihələrin rəhbərliyi kimi rollarda soyuqqanlılığınız böyük üstünlükdür. Gərgin dövrlərdə komandanın Sizə baxıb sakitləşməsi Sizi təbii dayaq nöqtəsinə çevirir.',
			underStress:
				'Ciddi təzyiq altında da Siz adətən aydın düşünür və emosiyalarınızı idarə edirsiniz, lakin yorğunluğu gec hiss edə bilərsiniz. Bu səbəbdən bədəninizin verdiyi siqnalları (yuxu pozuntusu, enerji düşkünlüyü) diqqətlə izləmək vacibdir.',
			idealRoles: [
				'Təcili yardım həkimi',
				'Pilot',
				'Böhran idarəetməsi meneceri',
				'Maliyyə treyderi',
				'Tikinti layihəsinin rəhbəri',
			],
			watchOut:
				'Sakitliyiniz bəzən başqalarına laqeydlik kimi görünə bilər. Vacib anlarda vəziyyətə münasibətinizi və diqqətinizi sözlə ifadə etmək komandada etimadı artırır.',
		},
		mid: {
			careerFit:
				'Siz orta təzyiq səviyyəsi olan əksər peşə mühitlərində sabit və məhsuldar işləyirsiniz. Layihə idarəetməsi, təhsil, analitika, marketinq və ya xidmət sahələrində həm gərgin dövrlərə dözmək, həm də riskləri vaxtında görmək bacarığınız balanslı nəticə verir. Pik dövrlərdən sonra bərpa üçün vaxt qalan iş ritmi Sizə ən uyğundur.',
			underStress:
				'Qısamüddətli gərginlik Sizi çox vaxt səfərbər edir, lakin uzun sürən təzyiq dövrlərində yorğunluq və əsəbilik özünü göstərə bilər. Belə vaxtlarda iş yükünü planlı şəkildə azaltmaq tez bərpaya kömək edir.',
			idealRoles: [
				'Layihə meneceri',
				'Marketinq mütəxəssisi',
				'Müəllim',
				'Biznes analitiki',
				'Müştəri xidmətləri meneceri',
			],
			watchOut:
				'Yüksək təzyiqli layihələri ard-arda götürəndə balansınız pozula bilər. Böyük layihələr arasında qısa da olsa "nəfəsalma" dövrü planlaşdırın.',
		},
		high: {
			careerFit:
				'Siz diqqət, empatiya və incə detalları görmək bacarığının vacib olduğu sahələrdə xüsusi dəyər yaradırsınız. Keyfiyyətə nəzarət, risk təhlili, redaktə, dizayn və ya tədqiqat kimi işlərdə həssaslığınız başqalarının gözündən qaçanları görməyə imkan verir. Aydın gözləntiləri, dəstəkləyici rəhbəri və proqnozlaşdırıla bilən iş qrafiki olan komandalar potensialınızı ən yaxşı şəkildə üzə çıxarır.',
			underStress:
				'Təzyiq altında Siz hadisələri daha dərindən hiss edir və mümkün nəticələri ağlınızda tez-tez götür-qoy edirsiniz. Belə vaxtlarda böyük tapşırığı kiçik və idarə olunan addımlara bölmək Sizə tez toparlanmağa kömək edir.',
			idealRoles: [
				'Keyfiyyətə nəzarət mütəxəssisi',
				'Redaktor',
				'UX dizayner',
				'Risk analitiki',
				'Elmi tədqiqatçı',
			],
			watchOut:
				'Tənqidi rəy bəzən Sizə olduğundan daha ağır təsir edə bilər. Rəyi aldıqdan sonra cavab verməzdən əvvəl bir az vaxt ayırmaq və onu konkret addımlara çevirmək daha məhsuldar yanaşmadır.',
		},
	},
}
