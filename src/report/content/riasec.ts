// Extended RIASEC report texts (Azerbaijani). Plain data only.
// Adds to tests/riasec/data.ts: typical day, values, learning style, development tips,
// and a description for every two-letter combination (this type first, the other second).
import { RiasecType } from 'tests/types'
import { RiasecExtra } from './types'

export const RIASEC_EXTRA: Record<RiasecType, RiasecExtra> = {
	R: {
		id: 'R',
		typicalDay:
			'İdeal iş gününüz səhər avadanlığın, sahənin və ya obyektin yoxlanılması ilə başlayır və Siz günün planını real tapşırıqlar üzərində qurursunuz. Günortaya qədər bir nasazlığı tapıb aradan qaldırır, bir quraşdırmanı başa çatdırır və ya bir prototipi sınaqdan keçirirsiniz. Gün sonunda gördüyünüz işin nəticəsi gözünüzün qabağında olur — işləyən mexanizm, yığılmış konstruksiya və ya qulluq edilmiş sahə.',
		values: [
			'Görünən və ölçülə bilən nəticə',
			'Praktiklik və səmərəlilik',
			'Müstəqil iş və öz sahəsinə cavabdehlik',
			'Real bacarığa və ustalığa hörmət',
		],
		learningStyle:
			'Siz ən yaxşı əllə edərək, sınaq-səhv yolu ilə və real avadanlıq üzərində öyrənirsiniz. Uzun nəzəri mühazirələrdən çox laboratoriya məşğələsi, təcrübəçilik və təcrübəli ustanın yanında işləmək Sizə daha çox şey verir. Yeni texnologiyanı öyrənərkən əvvəlcə onu söküb-yığmaq və ya praktiki layihədə tətbiq etmək marağınızı qoruyur.',
		developmentTips: [
			'Peşə sertifikatları (elektrik təhlükəsizliyi, qaynaq, CAD proqramları və s.) ilə praktik bacarıqlarınızı rəsmiləşdirin.',
			'Texniki işlə yanaşı rəqəmsal alətləri — sensorlar, avtomatlaşdırma, 3D modelləşdirmə — öyrənərək gələcəyin əmək bazarına hazırlaşın.',
			'Gördüyünüz işləri foto və qısa təsvirlərlə portfolioda toplayın ki, işəgötürənə bacarığınızı əyani göstərə biləsiniz.',
			'Texniki məsələni qeyri-mütəxəssisə sadə dillə izah etməyi məşq edin — bu, Sizi usta səviyyəsindən rəhbər səviyyəsinə qaldırır.',
		],
		pairs: {
			I: 'RI profilində Siz həm əllə işləməyi, həm də sistemin necə işlədiyini dərindən anlamağı sevirsiniz: problemi yalnız düzəltmir, səbəbini də araşdırırsınız. Mexatronika mühəndisi, avtomobil diaqnostika mütəxəssisi, laboratoriya texnoloqu və ya neft-qaz mühəndisi kimi peşələr bu iki marağı birləşdirir.',
			A: 'RA profilində Siz praktik bacarığı estetik duyumla birləşdirir, əlinizlə həm gözəl, həm də funksional əşyalar yaradırsınız. Mebel dizayneri, zərgər, landşaft dizayneri, aşpaz və ya səhnə dekoratoru kimi peşələrdə həm ustalığınız, həm də zövqünüz üzə çıxır.',
			S: 'RS profilində Siz praktik bacarıqlarınızı insanlara birbaşa kömək etmək üçün istifadə etməyi sevirsiniz. Fizioterapevt, peşə təlimçisi, təcili yardım feldşeri, idman məşqçisi və ya xilasedici kimi peşələr bu birləşməyə uyğundur.',
			E: 'RE profilində Siz texniki işi yaxşı bilir və eyni zamanda onu təşkil edib idarə etməyə həvəslisiniz. Tikinti layihəsinin rəhbəri, istehsalat müdiri, texniki satış mütəxəssisi və ya öz emalatxanasını açan sahibkar kimi rollarda bu iki güc birləşir.',
			C: 'RC profilində Siz praktik işi dəqiqlik, standartlar və ardıcıl proseslər əsasında aparmağı sevirsiniz. Keyfiyyətə nəzarət texniki, anbar və təchizat meneceri, geodeziya mütəxəssisi və ya texniki xidmət planlaşdırıcısı kimi peşələr bu profilə yaxşı uyğun gəlir.',
		},
	},
	I: {
		id: 'I',
		typicalDay:
			'İdeal iş gününüz bir sualla başlayır: məlumatlar niyə belə görünür, təcrübə niyə gözlənilən nəticəni vermədi? Günün əsas hissəsini sakit fokusla təhlilə, mənbə oxumağa, model qurmağa və ya fərziyyə sınamağa sərf edirsiniz. Axşam yeni bir qanunauyğunluğu kəşf etdiyinizi və ya mürəkkəb problemin bir hissəsini çözdüyünüzü hiss etdiyiniz an günün ən dəyərli anı olur.',
		values: [
			'Həqiqət və sübuta əsaslanan bilik',
			'İntellektual müstəqillik',
			'Daimi öyrənmə və maraq',
			'Dəqiqlik və metodoloji düzgünlük',
		],
		learningStyle:
			'Siz ən yaxşı dərin oxu, müstəqil araşdırma və "niyə?" sualına cavab axtararaq öyrənirsiniz. Mövzunun əsas prinsiplərini anladıqdan sonra detalları özünüz bərpa edə bilirsiniz, buna görə əzbərçilik Sizə darıxdırıcı gəlir. Onlayn kurslar, elmi məqalələr və real data üzərində kiçik layihələr Sizin üçün ən effektiv vasitələrdir.',
		developmentTips: [
			'Maraqlandığınız sahədə kiçik, lakin tam başa çatmış tədqiqat və ya data layihəsi hazırlayıb onu açıq şəkildə paylaşın.',
			'Tapıntılarınızı qeyri-mütəxəssislər üçün qısa və vizual formada təqdim etməyi öyrənin.',
			'Proqramlaşdırma (məsələn, Python), statistika və ya laboratoriya metodları kimi fundamental alətlərdə möhkəm baza qurun.',
			'Universitet laboratoriyası, tədqiqat mərkəzi və ya şirkətin analitika şöbəsində təcrübə proqramlarına müraciət edin.',
		],
		pairs: {
			R: 'IR profilində Siz nəzəri biliyi real texnikaya və fiziki sistemlərə tətbiq etməyi sevirsiniz: əvvəlcə anlayır, sonra qurub sınayırsınız. Robototexnika mühəndisi, elektronika mühəndisi, geofizik və ya tibbi avadanlıq mühəndisi kimi peşələr bu birləşmənin təbii yoludur.',
			A: 'IA profilində Sizin analitik zehniniz yaradıcı təxəyyüllə birləşir: mürəkkəb ideyaları həm araşdırır, həm də orijinal formada ifadə edirsiniz. Data vizuallaşdırma mütəxəssisi, UX tədqiqatçısı, memar, elmi jurnalist və ya oyun dizayneri kimi peşələr hər iki marağa yer verir.',
			S: 'IS profilində Siz elmi bilikdən insanların həyatını yaxşılaşdırmaq üçün istifadə etmək istəyirsiniz. Həkim, klinik psixoloq, ictimai səhiyyə tədqiqatçısı, dietoloq və ya universitet müəllimi kimi peşələr bu birləşməyə xüsusilə uyğundur.',
			E: 'IE profilində Siz dərin təhlili biznes qərarlarına və strategiyaya çevirməyi bacarırsınız. Məhsul analitiki, strateji məsləhətçi, iqtisadçı, texnoloji startap təsisçisi və ya investisiya analitiki kimi peşələrdə bu iki güc birləşir.',
			C: 'IC profilində Siz tədqiqat marağınızı səliqə, dəqiqlik və sistemlə birləşdirirsiniz: məlumatı həm araşdırır, həm də etibarlı strukturda saxlayırsınız. Data mühəndisi, aktuari, statistik, bioinformatik və ya maliyyə risk analitiki kimi peşələr bu profil üçün idealdır.',
		},
	},
	A: {
		id: 'A',
		typicalDay:
			'İdeal iş gününüz ilhamla başlayır: referanslara baxır, eskiz çəkir, ideyalar üzərində sərbəst düşünürsünüz. Günün ortasında konsepsiyanı formaya salır — dizayn, mətn, səs və ya video üzərində dərin fokusla işləyirsiniz. Gün sonunda ortaya qoyduğunuz işdə öz baxışınızı və üslubunuzu görmək Sizə ən böyük məmnunluğu verir.',
		values: [
			'Özünü ifadə etmək azadlığı',
			'Orijinallıq və estetik keyfiyyət',
			'Yaradıcı sərbəstlik və çevik iş rejimi',
			'Emosional təsir və məna yaratmaq',
		],
		learningStyle:
			'Siz ən yaxşı ilham mənbələrini müşahidə edərək, təcrübə edərək və öz layihələriniz üzərində işləyərək öyrənirsiniz. Sərt qaydalarla keçirilən dərslərdən çox emalatxana formatı, ustad dərsləri və rəyə əsaslanan iş Sizə daha çox fayda verir. Nəticəni görünən və ya eşidilən formada görmək öyrənmə motivasiyanızı artırır.',
		developmentTips: [
			'Ən güclü 8–12 işinizi əhatə edən səliqəli onlayn portfolio hazırlayın və onu mütəmadi yeniləyin.',
			'Yaradıcılığınızı peşəyə çevirmək üçün texniki tapşırığı (brifi) oxumaq, son tarixə işləmək və müştəri rəyini qəbul etmək bacarıqlarını inkişaf etdirin.',
			'Dizayn proqramları, montaj alətləri və süni intellektlə işləyən yaradıcı alətlərdə texniki biliyinizi gücləndirin.',
			'Yerli müsabiqələrdə, festivallarda və yaradıcı icmalarda iştirak edərək peşəkar şəbəkə qurun.',
		],
		pairs: {
			R: 'AR profilində Siz yaradıcı ideyalarınızı əl işi və material vasitəsilə həyata keçirməyi sevirsiniz. Keramika ustası, xalçaçı-rəssam, mebel və interyer dizayneri, fotoqraf və ya kino operatoru kimi peşələr bu iki marağı birləşdirir.',
			I: 'AI profilində yaradıcılığınızın arxasında güclü intellektual maraq dayanır: sadəcə gözəl deyil, düşündürücü işlər yaratmaq istəyirsiniz. Memar, UX/UI dizayner, sənədli film rejissoru, elmi illüstrator və ya araşdırmaçı jurnalist kimi peşələr bu profilə uyğun gəlir.',
			S: 'AS profilində Siz yaradıcılığı insanlarla bölüşmək, onları ruhlandırmaq və öyrətmək üçün istifadə edirsiniz. Musiqi və ya rəsm müəllimi, teatr pedaqoqu, təhsil kontenti yaradıcısı, uşaq kitabları müəllifi və ya mədəniyyət layihələri koordinatoru kimi peşələr bu birləşməyə yaxındır.',
			E: 'AE profilində Siz yaradıcı ideyaları bazara çıxarmaq, onları təqdim edib satmaq və ətrafınıza komanda toplamaqdan zövq alırsınız. Kreativ direktor, brend meneceri, reklam agentliyinin təsisçisi, prodüser və ya moda brendi sahibkarı kimi rollar bu iki gücü birləşdirir.',
			C: 'AC profilində Siz yaradıcılığı səliqə, sistem və dəqiq detallarla birləşdirirsiniz. Nəşriyyat redaktoru, maket dizayneri, dizayn sistemləri mütəxəssisi, muzey kolleksiyalarının kuratoru və ya brend standartları meneceri kimi peşələrdə həm estetika, həm də nizam vacibdir.',
		},
	},
	S: {
		id: 'S',
		typicalDay:
			'İdeal iş gününüz insanlarla canlı ünsiyyətdə keçir: dərs, konsultasiya, komanda görüşü və ya qəbul saatı. Gün ərzində kiminsə problemini dinləyir, ona yol göstərir və ya yeni bir bacarığı öyrədirsiniz. Gün sonunda "bu gün kiməsə həqiqətən kömək etdim" hissi Sizin üçün ən böyük mükafat olur.',
		values: [
			'İnsanlara real fayda vermək',
			'Səmimi və etibarlı münasibətlər',
			'Əməkdaşlıq və bərabərlik',
			'Başqalarının inkişafına töhfə',
		],
		learningStyle:
			'Siz ən yaxşı qrup müzakirələrində, rol oyunlarında və real insanlarla işləyərək öyrənirsiniz. Bilikləri başqasına izah etdikcə onları daha yaxşı mənimsəyirsiniz, buna görə də birlikdə öyrənmə və mentorluq Sizin üçün effektiv üsullardır. Nəzəriyyənin insanlara necə təsir etdiyini real hadisələr üzərində görmək marağınızı artırır.',
		developmentTips: [
			'Könüllülük, təcrübəçilik və ya mentorluq proqramları vasitəsilə insanlarla iş üzrə real təcrübə toplayın.',
			'Fasilitasiya, kouçinq və ya ilk tibbi yardım kimi sahələrdə sertifikatlı təlim keçin.',
			'Peşəkar sərhədlər qoymağı və özünüzə qayğı göstərməyi erkən öyrənin ki, başqalarına kömək edərkən enerjiniz tükənməsin.',
			'Sosial sahədə də data və rəqəmsal alətlərin rolu artır — sadə analitikanı və onlayn tədris platformalarını öyrənin.',
		],
		pairs: {
			R: 'SR profilində Siz insanlara kömək etməyi praktik, əllə görülən işlərlə birləşdirirsiniz. Fizioterapevt, tibb bacısı və ya tibb qardaşı, idman məşqçisi, peşə təhsili ustası və ya xilasedici kimi peşələr bu profilə uyğundur.',
			I: 'SI profilində Sizin üçün insanlara kömək etmək həm də onların ehtiyaclarını elmi əsasla anlamaq deməkdir. Psixoloq, ailə həkimi, loqoped, təhsil tədqiqatçısı və ya ictimai səhiyyə mütəxəssisi kimi peşələr bu iki marağı birləşdirir.',
			A: 'SA profilində Siz insanlarla işləyərkən yaradıcı üsullardan — hekayə, oyun, incəsənət — istifadə etməyi sevirsiniz. Məktəbəqədər təhsil müəllimi, xarici dil müəllimi, təlim materialları dizayneri, uşaq teatrı rejissoru və ya tədbir aparıcısı kimi peşələr bu birləşməyə yaxındır.',
			E: 'SE profilində Siz insanlara qayğını liderlik bacarığı ilə birləşdirir, onları ümumi məqsəd ətrafında toplayırsınız. HR meneceri, məktəb direktoru, QHT rəhbəri, korporativ təlim meneceri və ya müştəri xidmətləri rəhbəri kimi rollar bu profil üçün uyğundur.',
			C: 'SC profilində Siz insanlara kömək etməyi səliqəli proseslər və aydın qaydalarla təşkil etməyi bacarırsınız. Tədris hissəsi müdiri, sosial xidmət koordinatoru, xəstəxana administratoru, HR əməliyyatları mütəxəssisi və ya tələbə qəbulu üzrə mütəxəssis kimi peşələr bu birləşməni tələb edir.',
		},
	},
	E: {
		id: 'E',
		typicalDay:
			'İdeal iş gününüz sürətli tempdə keçir: səhər komandaya hədəfləri xatırladır, günortadan əvvəl müştəri və ya tərəfdaşla danışıq aparırsınız. Gün ərzində bir neçə qərar verir, yeni fürsətləri qiymətləndirir və layihəni irəli aparırsınız. Gün sonunda bağlanmış müqavilə, artan satış və ya razılaşdırılmış plan Sizə real nailiyyət hissi verir.',
		values: [
			'Təsir və nəticə əldə etmək',
			'Təşəbbüs və risk etmək azadlığı',
			'Tanınma və irəliləmə imkanı',
			'Ambisiyalı hədəflər və sağlam rəqabət',
		],
		learningStyle:
			'Siz ən yaxşı real layihələr, biznes keysləri və birbaşa təcrübə vasitəsilə öyrənirsiniz. Uğurlu insanların təcrübəsini dinləmək, simulyasiya oyunları və öyrəndiyinizi dərhal tətbiq etmək Sizə çox fayda verir. Uzun nəzəri kurslar yalnız praktiki faydası aydın olanda marağınızı saxlayır.',
		developmentTips: [
			'Tələbə təşkilatı, startap müsabiqəsi və ya kiçik öz layihəniz vasitəsilə real liderlik təcrübəsi toplayın.',
			'Maliyyə savadınızı artırın: büdcə, mənfəət və zərər hesabatı, pul axını kimi anlayışları öyrənin.',
			'Qərar verməzdən əvvəl data və təhlilə əsaslanmaq vərdişi qurun — bu, inandırıcılığınızı artırır.',
			'Mentor tapın və peşəkar şəbəkənizi biznes tədbirləri, inkubasiya proqramları və peşəkar icmalar vasitəsilə genişləndirin.',
		],
		pairs: {
			R: 'ER profilində Siz biznes təşəbbüskarlığını texniki və praktik sahələrlə birləşdirirsiniz. Tikinti şirkətinin rəhbəri, kənd təsərrüfatı sahibkarı, istehsalat meneceri, logistika şirkətinin təsisçisi və ya texniki satış meneceri kimi rollar bu profilə uyğundur.',
			I: 'EI profilində Siz cəsarətli qərarlarınızı dərin təhlil və data ilə əsaslandırırsınız. Məhsul meneceri, strategiya məsləhətçisi, investisiya meneceri, texnoloji startap təsisçisi və ya biznes analitikası rəhbəri kimi peşələr bu iki gücü birləşdirir.',
			A: 'EA profilində Siz yaradıcı ideyaları cəlbedici şəkildə təqdim edib onları kommersiya uğuruna çevirməyi bacarırsınız. Marketinq direktoru, PR meneceri, media prodüseri, brend strateqi və ya tədbir agentliyinin sahibi kimi rollar bu profil üçün idealdır.',
			S: 'ES profilində Siz insanları ilhamlandırır, onları inkişaf etdirir və komanda kimi nəticəyə aparırsınız. HR direktoru, təhsil müəssisəsinin rəhbəri, sosial sahibkar, satış təlimçisi və ya müştəri uğuru meneceri kimi rollar bu birləşməyə uyğundur.',
			C: 'EC profilində Siz ambisiyalı hədəfləri nizamlı planlaşdırma və dəqiq nəzarətlə birləşdirirsiniz. Əməliyyatlar meneceri, maliyyə direktoru, bank filialının müdiri, satınalma meneceri və ya layihə portfelinin meneceri kimi peşələr bu profilə xüsusilə uyğundur.',
		},
	},
	C: {
		id: 'C',
		typicalDay:
			'İdeal iş gününüz aydın tapşırıqlar siyahısı ilə başlayır və Siz hər bəndi ardıcıl şəkildə yerinə yetirirsiniz. Gün ərzində hesabatları yoxlayır, məlumatları sistemləşdirir, prosesdəki uyğunsuzluqları tapıb düzəldirsiniz. Gün sonunda hər şeyin qaydasında olduğunu və rəqəmlərin üst-üstə düşdüyünü görmək Sizə dərin rahatlıq və məmnunluq verir.',
		values: [
			'Sabitlik və proqnozlaşdırıla bilən iş',
			'Dəqiqlik və etibarlılıq',
			'Aydın qaydalar və şəffaf proseslər',
			'Məsuliyyət və öhdəliyə sadiqlik',
		],
		learningStyle:
			'Siz ən yaxşı strukturlu proqramlarla, addım-addım təlimatlarla və aydın nümunələrlə öyrənirsiniz. Öyrəndiyinizi cədvəl, sxem və ya qeydlər şəklində sistemləşdirmək biliklərinizi möhkəmləndirir. Hər mərhələnin sonunda ölçülə bilən nəticə və ya sertifikat görmək motivasiyanızı artırır.',
		developmentTips: [
			'Mühasibat, maliyyə, logistika və ya layihə idarəetməsi üzrə beynəlxalq peşə sertifikatlarını (məsələn, ACCA, CIMA, PMP) planlaşdırın.',
			'Elektron cədvəllərin irəli funksiyalarını, SQL və ya biznes analitikası (BI) alətlərini öyrənərək rutin işləri avtomatlaşdırın.',
			'Gözlənilməz dəyişikliklərə çevik reaksiya verməyi öyrənmək üçün kiçik, qeyri-müəyyən layihələrdə də iştirak edin.',
			'Proseslərin təkmilləşdirilməsi ilə bağlı təkliflərinizi rəhbərliyə yazılı şəkildə və rəqəmlərlə əsaslandıraraq təqdim edin.',
		],
		pairs: {
			R: 'CR profilində Siz nizam və dəqiqlik sevginizi texniki və fiziki proseslərlə birləşdirirsiniz. Anbar meneceri, keyfiyyətə nəzarət mütəxəssisi, texniki sənədləşmə mütəxəssisi, geodeziya mütəxəssisi və ya istehsalat planlaşdırıcısı kimi peşələr bu profilə uyğundur.',
			I: 'CI profilində Siz sistemli işi analitik düşüncə ilə birləşdirir, rəqəmlərdə həm səhvi, həm də qanunauyğunluğu görürsünüz. Maliyyə analitiki, statistik, verilənlər bazası administratoru, aktuari və ya daxili auditor kimi peşələr bu iki marağı birləşdirir.',
			A: 'CA profilində Siz səliqə və nizamı estetik zövqlə birləşdirərək həm düzgün, həm də gözəl nəticə əldə edirsiniz. Redaktor-korrektor, maket dizayneri, kitabxana və arxiv mütəxəssisi, veb kontent meneceri və ya dizayn layihələrinin koordinatoru kimi peşələr bu profilə yaxındır.',
			S: 'CS profilində Siz nizamlı iş bacarığınızı insanlara xidmət etmək üçün istifadə edirsiniz. HR administratoru, tədris hissəsi mütəxəssisi, xəstəxana qeydiyyat şöbəsinin meneceri, bank müştəri xidmətləri mütəxəssisi və ya ofis meneceri kimi peşələr bu birləşməyə uyğundur.',
			E: 'CE profilində Siz dəqiq sistemlər qurub onları biznes məqsədlərinə xidmət etdirməyi bacarırsınız. Maliyyə meneceri, əməliyyatlar rəhbəri, komplayens meneceri, vergi məsləhətçisi və ya bank kredit meneceri kimi peşələr bu profil üçün idealdır.',
		},
	},
}
