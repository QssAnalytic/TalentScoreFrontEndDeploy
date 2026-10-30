// Big Five test content (Azerbaijani). Plain data only.
// 50 statements adapted from the public-domain IPIP Big-Five Factor Markers (Goldberg, 1992),
// 10 per domain, interleaved by domain: O, C, E, A, N, O, C, …
// N = Neyrotiklik: agreeing with a '+' item means higher emotional sensitivity.
import { Big5Domain, Big5DomainProfile, Big5Question } from 'tests/types'

export const BIG5_QUESTIONS: Big5Question[] = [
	// ---- round 1 ----
	{ id: 'b01', domain: 'O', keyed: '+', text: 'Zəngin söz ehtiyatım var.' },
	{ id: 'b02', domain: 'C', keyed: '+', text: 'İşlərə həmişə əvvəlcədən hazırlaşıram.' },
	{ id: 'b03', domain: 'E', keyed: '+', text: 'Dost məclislərində ab-havanı canlandıran adətən mən oluram.' },
	{ id: 'b04', domain: 'A', keyed: '-', text: 'Başqalarının qayğıları məni o qədər də düşündürmür.' },
	{ id: 'b05', domain: 'N', keyed: '+', text: 'Asanlıqla stresə düşürəm.' },
	// ---- round 2 ----
	{ id: 'b06', domain: 'O', keyed: '-', text: 'Mücərrəd fikirləri anlamaqda çətinlik çəkirəm.' },
	{ id: 'b07', domain: 'C', keyed: '-', text: 'Əşyalarımı çox vaxt ora-bura atıb qoyuram.' },
	{ id: 'b08', domain: 'E', keyed: '-', text: 'Çox danışan biri deyiləm.' },
	{ id: 'b09', domain: 'A', keyed: '+', text: 'İnsanları tanımaq və anlamaq mənə maraqlıdır.' },
	{ id: 'b10', domain: 'N', keyed: '-', text: 'Çox vaxt sakit və rahat oluram.' },
	// ---- round 3 ----
	{ id: 'b11', domain: 'O', keyed: '+', text: 'Canlı və zəngin təxəyyülüm var.' },
	{ id: 'b12', domain: 'C', keyed: '+', text: 'Xırda detallara diqqət yetirirəm.' },
	{ id: 'b13', domain: 'E', keyed: '+', text: 'İnsanların arasında özümü rahat hiss edirəm.' },
	{ id: 'b14', domain: 'A', keyed: '-', text: 'Bəzən sözlərimlə insanların xətrinə dəyirəm.' },
	{ id: 'b15', domain: 'N', keyed: '+', text: 'Çox şeyə görə narahat oluram.' },
	// ---- round 4 ----
	{ id: 'b16', domain: 'O', keyed: '-', text: 'Mücərrəd ideyalar mənə maraqlı gəlmir.' },
	{ id: 'b17', domain: 'C', keyed: '-', text: 'Çox vaxt işlərimi qarışdırıb dolaşığa salıram.' },
	{ id: 'b18', domain: 'E', keyed: '-', text: 'Kənarda, gözə çarpmayan yerdə qalmağa üstünlük verirəm.' },
	{ id: 'b19', domain: 'A', keyed: '+', text: 'Başqalarının dərdinə də, sevincinə də ürəkdən şərik oluram.' },
	{ id: 'b20', domain: 'N', keyed: '-', text: 'Nadir hallarda özümü qəmgin hiss edirəm.' },
	// ---- round 5 ----
	{ id: 'b21', domain: 'O', keyed: '+', text: 'Ağlıma tez-tez maraqlı ideyalar gəlir.' },
	{ id: 'b22', domain: 'C', keyed: '+', text: 'Gündəlik işləri təxirə salmadan dərhal görürəm.' },
	{ id: 'b23', domain: 'E', keyed: '+', text: 'Söhbətə adətən birinci mən başlayıram.' },
	{ id: 'b24', domain: 'A', keyed: '-', text: 'Başqalarının problemlərini dinləmək mənə maraqlı gəlmir.' },
	{ id: 'b25', domain: 'N', keyed: '+', text: 'Asanlıqla üzülürəm.' },
	// ---- round 6 ----
	{ id: 'b26', domain: 'O', keyed: '-', text: 'Təxəyyülüm o qədər də güclü deyil.' },
	{ id: 'b27', domain: 'C', keyed: '-', text: 'Əşyaları götürdüyüm yerə qaytarmağı tez-tez unuduram.' },
	{ id: 'b28', domain: 'E', keyed: '-', text: 'Söhbət zamanı deməyə çox sözüm olmur.' },
	{ id: 'b29', domain: 'A', keyed: '+', text: 'Ürəyiyumşaq insanam.' },
	{ id: 'b30', domain: 'N', keyed: '-', text: 'Gərgin anlarda da soyuqqanlılığımı qoruyuram.' },
	// ---- round 7 ----
	{ id: 'b31', domain: 'O', keyed: '+', text: 'Yeni şeyləri tez qavrayıram.' },
	{ id: 'b32', domain: 'C', keyed: '+', text: 'Hər şeyin qaydasında və səliqəli olmasını sevirəm.' },
	{ id: 'b33', domain: 'E', keyed: '+', text: 'Tədbirlərdə çoxlu müxtəlif insanla söhbət edirəm.' },
	{ id: 'b34', domain: 'A', keyed: '-', text: 'Ətrafımdakı insanlarla yaxından maraqlanmağa çox da həvəsim olmur.' },
	{ id: 'b35', domain: 'N', keyed: '+', text: 'Əhvalım tez-tez dəyişir.' },
	// ---- round 8 ----
	{ id: 'b36', domain: 'O', keyed: '-', text: 'Fəlsəfi mövzularda söhbətlərdən qaçıram.' },
	{ id: 'b37', domain: 'C', keyed: '-', text: 'Bəzən öhdəliklərimdən yayınıram.' },
	{ id: 'b38', domain: 'E', keyed: '-', text: 'Diqqəti özümə cəlb etməyi sevmirəm.' },
	{ id: 'b39', domain: 'A', keyed: '+', text: 'Məşğul olsam da, başqalarına vaxt ayırmağı bacarıram.' },
	{ id: 'b40', domain: 'N', keyed: '-', text: 'Xırda problemlər məni asanlıqla narahat etmir.' },
	// ---- round 9 ----
	{ id: 'b41', domain: 'O', keyed: '+', text: 'Hadisələr və fikirlər üzərində düşünməyə vaxt ayırıram.' },
	{ id: 'b42', domain: 'C', keyed: '+', text: 'Gündəlik planıma və cədvəlimə əməl edirəm.' },
	{ id: 'b43', domain: 'E', keyed: '+', text: 'Diqqət mərkəzində olmaq məni narahat etmir.' },
	{ id: 'b44', domain: 'A', keyed: '+', text: 'Ətrafımdakıların əhvalını və hisslərini asanlıqla duyuram.' },
	{ id: 'b45', domain: 'N', keyed: '+', text: 'Tez-tez özümü ruhdan düşmüş hiss edirəm.' },
	// ---- round 10 ----
	{ id: 'b46', domain: 'O', keyed: '-', text: 'Yeni üsulları sınamaqdansa, bildiyim yolla getməyi üstün tuturam.' },
	{ id: 'b47', domain: 'C', keyed: '-', text: 'Vaxtımı tez-tez boş şeylərə sərf edirəm.' },
	{ id: 'b48', domain: 'E', keyed: '-', text: 'Tanımadığım insanların yanında susqun oluram.' },
	{ id: 'b49', domain: 'A', keyed: '+', text: 'İnsanlar yanımda özlərini rahat hiss edirlər.' },
	{ id: 'b50', domain: 'N', keyed: '-', text: 'Məni əsəbiləşdirmək çətindir.' },
]

export const BIG5_DOMAINS: Record<Big5Domain, Big5DomainProfile> = {
	O: {
		id: 'O',
		name: 'Açıqlıq',
		short: 'Yeni ideyalara, təcrübələrə və yaradıcı düşüncəyə nə qədər açıq olduğunuzu göstərir.',
		highLabel: 'Maraqlı, yaradıcı, yeniliyə açıq',
		lowLabel: 'Praktik, ənənəvi, konkret',
		levels: {
			low: {
				summary:
					'Siz praktik, yerə basan və konkret nəticəyə yönəlmiş birisiniz. Sınanmış üsullara və aydın faktlara güvənir, mücərrəd nəzəriyyələrdən çox real həyatda işə yarayan həllərə dəyər verirsiniz. Bu yanaşma Sizə sabitlik və ardıcıllıq qazandırır.',
				work: 'İş və ya təhsildə aydın qaydaları, konkret tapşırıqları və ölçülə bilən nəticələri olan mühitdə özünüzü rahat hiss edirsiniz. Mövcud prosesləri etibarlı şəkildə icra etmək və bilikləri gündəlik işdə tətbiq etmək Sizin güclü tərəfinizdir.',
				relationships:
					'Münasibətlərdə sadəlik, səmimiyyət və sabitlik Sizin üçün önəmlidir. Yaxınlarınız Sizin etibarlı və sözünə güvənilən biri olmağınızı dəyərləndirir.',
				tips: [
					'Ayda bir dəfə öz sahənizdən kənar bir mövzuda qısa məqalə oxuyun və ya video izləyin.',
					'Yeni bir üsulu əvvəlcə kiçik və risksiz tapşırıqda sınaqdan keçirin.',
					'Fərqli düşünən həmkarınızdan bir problemi necə həll edəcəyini soruşun və onun yanaşmasını sonadək dinləyin.',
				],
			},
			mid: {
				summary:
					'Siz yenilik ilə sabitlik arasında balans saxlayırsınız. Maraqlı ideyalara açıqsınız, lakin onları qəbul etməzdən əvvəl praktik faydasını dəyərləndirirsiniz. Vəziyyətdən asılı olaraq həm yaradıcı, həm də sınanmış yanaşmadan istifadə edə bilirsiniz.',
				work: 'İşdə həm tanış üsulları tətbiq etməyi, həm də lazım gələndə yeni həllər təklif etməyi bacarırsınız. Bu çeviklik Sizi həm yenilikçi, həm də sabit komandalarda dəyərli üzv edir.',
				relationships: 'Münasibətlərdə yeni təcrübələrə açıqsınız, amma tanış və doğma ənənələri də qoruyursunuz.',
				tips: [
					'Hər rübdə işinizdə yeni yanaşma tətbiq edə biləcəyiniz bir sahə seçin.',
					'Yeni ideyaları qiymətləndirmək üçün sadə "fayda və risk" siyahısı hazırlayın.',
					'Həftədə bir dəfə ilk dəfə etdiyiniz bir şeyi qeyd edin: yeni yer, kitab və ya bacarıq.',
				],
			},
			high: {
				summary:
					'Siz maraqlı, yaradıcı və yeni ideyalara açıq birisiniz. Mücərrəd düşüncə, incəsənət, fəlsəfə və fərqli baxış bucaqları Sizi ruhlandırır. Mürəkkəb mövzuları tez qavrayır və onlar arasında gözlənilməz əlaqələr qurursunuz.',
				work: 'Yaradıcılıq, təhlil və problem həlli tələb edən işlərdə parlayırsınız, yeni layihələr və eksperimentlər Sizə enerji verir. Bununla belə, çox təkrarlanan və sərt çərçivəyə salınmış tapşırıqlar Sizi tez yora bilər.',
				relationships:
					'Münasibətlərdə dərin söhbətləri, birgə kəşfləri və fərqli fikirlərə hörməti dəyərləndirirsiniz. Ətrafınızdakılara yeni maraqlar və baxışlar aşılaya bilirsiniz.',
				tips: [
					'İdeyalarınızı bir dəftərdə toplayın və həftədə bir dəfə ən perspektivli birini seçib ilk addımı atın.',
					'Yeni layihəyə başlamazdan əvvəl əvvəlki layihəni hansı nəticə ilə bitirdiyinizi yoxlayın.',
					'Mürəkkəb ideyanı başqalarına izah edərkən onu 2–3 sadə cümlə və bir konkret nümunə ilə ifadə edin.',
				],
			},
		},
	},
	C: {
		id: 'C',
		name: 'Məsuliyyətlilik',
		short: 'İşlərinizi necə planlaşdırdığınızı, nə qədər nizamlı və öhdəliklərinizə sadiq olduğunuzu göstərir.',
		highLabel: 'Nizamlı, məqsədyönlü, etibarlı',
		lowLabel: 'Çevik, spontan, sərbəst',
		levels: {
			low: {
				summary:
					'Siz çevik və spontan birisiniz, sərt planlardan çox anın tələbinə uyğun hərəkət etməyi sevirsiniz. Gözlənilməz dəyişikliklərə asanlıqla uyğunlaşırsınız və qaydaların Sizi məhdudlaşdırmasını xoşlamırsınız. Bu sərbəstlik bəzən vaxtı və tapşırıqları idarə etməkdə çətinlik yarada bilər.',
				work: 'Dinamik, tez dəyişən mühitlərdə və improvizasiya tələb edən vəziyyətlərdə yaxşı nəticə göstərirsiniz. Uzunmüddətli və detallı tapşırıqlarda isə son tarixləri və kiçik addımları izləmək Sizdən əlavə səy tələb edə bilər.',
				relationships:
					'Yaxınlarınız Sizin rahat və spontan təbiətinizi sevir. Verdiyiniz vədləri vaxtında yerinə yetirmək münasibətlərdə etimadı daha da gücləndirəcək.',
				tips: [
					'Hər səhər günün ən vacib üç tapşırığını yazın və işə onlardan başlayın.',
					'Böyük işləri 25–30 dəqiqəlik kiçik hissələrə bölün və hər birini bitirdikdən sonra qısa fasilə verin.',
					'Son tarixləri telefonunuzun təqviminə xatırlatma ilə birlikdə dərhal qeyd edin.',
				],
			},
			mid: {
				summary:
					'Siz nizam ilə çeviklik arasında sağlam balans qurmusunuz. Vacib işlərdə planlı və məsuliyyətli davranır, daha az əhəmiyyətli məsələlərdə isə özünüzə sərbəstlik tanıyırsınız. Lazım gələndə həm plan qurmağı, həm də plandan kənara çıxmağı bacarırsınız.',
				work: 'İşdə öhdəliklərinizi adətən vaxtında yerinə yetirir, eyni zamanda dəyişən prioritetlərə uyğunlaşa bilirsiniz. Bu balans Sizi həm strukturlu, həm də çevik komandalarda etibarlı üzv edir.',
				relationships:
					'Münasibətlərdə həm etibarlı, həm də rahat insansınız: vacib məqamları unutmursunuz, amma hər şeyi ciddi plana da salmırsınız.',
				tips: [
					'Həftəni 10 dəqiqəlik qısa planlaşdırma ilə başlayın.',
					'Ən çox təxirə saldığınız tapşırıq növünü müəyyənləşdirin və onu günün ən məhsuldar saatına salın.',
					'Bitirdiyiniz işləri qeyd edin ki, irəliləyişinizi aydın görə biləsiniz.',
				],
			},
			high: {
				summary:
					'Siz nizamlı, məqsədyönlü və çox etibarlı birisiniz. Planlaşdırmağı, detallara diqqət yetirməyi və başladığınız işi sonadək çatdırmağı sevirsiniz. Ətrafınızdakılar Sizə arxayınlıqla məsuliyyət həvalə edə bilirlər.',
				work: 'Dəqiqlik, ardıcıllıq və son tarixlərə riayət tələb edən işlərdə yüksək nəticə göstərirsiniz. Bununla belə, hər şeyin mükəmməl olmasına çalışmaq bəzən Sizi yora və çevikliyinizi azalda bilər.',
				relationships:
					'Münasibətlərdə sözünüzün üstündə durur və yaxınlarınıza sabitlik hissi verirsiniz. Başqalarından da eyni nizamı gözləməyiniz bəzən kiçik gərginliklərə səbəb ola bilər.',
				tips: [
					'Hər tapşırıq üçün "kifayət qədər yaxşı" meyarını əvvəlcədən müəyyənləşdirin ki, ona artıq vaxt sərf etməyəsiniz.',
					'Təqviminizdə istirahət və gözlənilməz işlər üçün boş vaxt saxlayın.',
					'Tapşırıq həvalə edərkən gözlənilən nəticəni aydın izah edin, onu necə yerinə yetirməyi isə qarşı tərəfin seçiminə buraxın.',
				],
			},
		},
	},
	E: {
		id: 'E',
		name: 'Ekstraversiya',
		short: 'Enerjinizi haradan aldığınızı, sosial mühitdə nə qədər fəal və ünsiyyətcil olduğunuzu göstərir.',
		highLabel: 'Ünsiyyətcil, enerjili, fəal',
		lowLabel: 'Təmkinli, sakit, müstəqil',
		levels: {
			low: {
				summary:
					'Siz təmkinli və sakit birisiniz, enerjinizi daha çox tək qaldığınız və ya kiçik çevrədə olduğunuz anlarda bərpa edirsiniz. Danışmazdan əvvəl düşünməyi, dinləməyi və müşahidə etməyi üstün tutursunuz. Bu, Sizə dərin diqqət və düşünülmüş qərarlar qəbul etmək imkanı verir.',
				work: 'Diqqət və konsentrasiya tələb edən müstəqil işlərdə yüksək nəticə göstərirsiniz. Böyük toplantılar və fasiləsiz ünsiyyət Sizi yora bilər, ona görə də sakit iş vaxtı Sizin üçün xüsusilə dəyərlidir.',
				relationships:
					'Az sayda, lakin dərin və etibarlı münasibətlərə üstünlük verirsiniz. Yaxınlarınız Sizin diqqətli dinləyici olmağınızı yüksək qiymətləndirir.',
				tips: [
					'Toplantılara əvvəlcədən bir-iki fikir hazırlayın ki, söz almaq Sizin üçün asan olsun.',
					'Sosial baxımdan gərgin günlərdən sonra təqviminizdə özünüz üçün sakit vaxt planlaşdırın.',
					'Fikirlərinizi yazılı şəkildə (e-poçt, qeyd) bölüşməkdən çəkinməyin, bu Sizin güclü kanalınız ola bilər.',
				],
			},
			mid: {
				summary:
					'Siz həm ünsiyyətdən, həm də tək qalmaqdan zövq ala bilirsiniz. Vəziyyətə görə həm fəal danışan, həm də diqqətli dinləyici ola bilirsiniz. Bu balans Sizə müxtəlif insanlara və mühitlərə asanlıqla uyğunlaşmağa imkan verir.',
				work: 'Komanda işində də, müstəqil tapşırıqlarda da rahat çalışırsınız. Lazım olanda təqdimat edə, digər vaxtlarda isə diqqətinizi tamamilə işə yönəldə bilirsiniz.',
				relationships: 'Sosial həyatınızda həm geniş tanışlıq dairəsinə, həm də yaxın dostlarla sakit görüşlərə yer var.',
				tips: [
					'Bir həftə ərzində hansı fəaliyyətlərin Sizə enerji verdiyini, hansılarınsa yorduğunu qeyd edin.',
					'Ən vacib işləri enerjinizin ən yüksək olduğu saatlara planlaşdırın.',
					'Komandada həm təqdimat, həm də araşdırma rollarını sınayaraq güclü tərəflərinizi kəşf edin.',
				],
			},
			high: {
				summary:
					'Siz ünsiyyətcil, enerjili və fəal birisiniz, insanların arasında olmaq Sizə güc verir. Yeni tanışlıqlar qurmaq, söhbətə başlamaq və qrupda ab-havanı canlandırmaq Sizə təbii gəlir. Fikirlərinizi açıq və cəsarətlə ifadə edirsiniz.',
				work: 'Ünsiyyət, təqdimat, danışıqlar və komanda ilə iş tələb edən sahələrdə parlayırsınız. Uzun müddət tək və səssiz şəraitdə işləmək isə Sizə darıxdırıcı gələ bilər.',
				relationships:
					'Geniş dostluq dairəniz var və insanları bir araya gətirməyi sevirsiniz. Daha sakit insanlara danışmaq üçün yer vermək münasibətlərinizi daha da dərinləşdirəcək.',
				tips: [
					'Toplantılarda öz fikrinizi dedikdən sonra başqalarının, xüsusən az danışanların fikrini soruşun.',
					'Həftədə ən azı bir dəfə diqqət tələb edən iş üçün telefonsuz və bildirişsiz vaxt ayırın.',
					'Yeni öhdəlik götürməzdən əvvəl təqviminizdə ona həqiqətən vaxt olub-olmadığını yoxlayın.',
				],
			},
		},
	},
	A: {
		id: 'A',
		name: 'Xoşniyyətlilik',
		short: 'Başqaları ilə münasibətdə nə qədər əməkdaşlığa meylli, qayğıkeş və güzəştə hazır olduğunuzu göstərir.',
		highLabel: 'Qayğıkeş, əməkdaş, mehriban',
		lowLabel: 'Birbaşa, tənqidi, müstəqil',
		levels: {
			low: {
				summary:
					'Siz birbaşa, obyektiv və öz mövqeyini müdafiə etməyi bacaran birisiniz. Qərar verərkən hisslərdən çox məntiqə və faktlara əsaslanırsınız. Başqalarının fikri ilə razılaşmamaqdan çəkinmirsiniz, bu da Sizi müstəqil və tənqidi düşünən biri edir.',
				work: 'Çətin qərarlar qəbul etmək, danışıqlar aparmaq və obyektiv qiymətləndirmə vermək tələb olunan vəziyyətlərdə güclüsünüz. Komanda ilə işləyərkən isə birbaşa üslubunuz bəzən qarşı tərəfə sərt görünə bilər.',
				relationships:
					'Münasibətlərdə səmimi və açıqsınız, nə düşündüyünüzü gizlətmirsiniz. Fikrinizi deyərkən qarşı tərəfin hisslərini də nəzərə almaq bağlarınızı daha da möhkəmləndirəcək.',
				tips: [
					'Tənqidi rəy verməzdən əvvəl qarşı tərəfin işində bəyəndiyiniz bir məqamı qeyd edin.',
					'Fikir ayrılığında öz mövqeyinizi deməzdən əvvəl qarşı tərəfin fikrini öz sözlərinizlə təkrarlayın.',
					'Həftədə bir dəfə həmkarınıza və ya yaxınınıza konkret bir şeyə görə təşəkkür edin.',
				],
			},
			mid: {
				summary:
					'Siz əməkdaşlıq ilə öz maraqlarınızı qorumaq arasında balans saxlayırsınız. Başqalarına qarşı mehriban və anlayışlısınız, lakin lazım gələndə fikrinizi açıq deyə bilirsiniz. Bu, Sizə həm münasibətləri qorumağa, həm də ədalətli qərarlar qəbul etməyə imkan verir.',
				work: 'Komandada həm dəstək olmağı, həm də lazım gəldikdə etiraz etməyi bacarırsınız. Bu balans Sizi həm etibarlı həmkar, həm də obyektiv rəy verən biri edir.',
				relationships: 'Yaxınlarınıza qayğı göstərir, eyni zamanda öz sərhədlərinizi də qoruyursunuz.',
				tips: [
					'Hansı vəziyyətlərdə güzəştə getdiyinizi, hansılarda isə mövqeyinizi qoruduğunuzu müşahidə edin.',
					'Çətin söhbətlərdə "mən" ifadələrindən istifadə edin, məsələn: "Mən bu vəziyyətdə özümü narahat hiss edirəm."',
					'Kömək istəyinə cavab verməzdən əvvəl öz vaxtınızı və imkanlarınızı nəzərə alın.',
				],
			},
			high: {
				summary:
					'Siz qayğıkeş, mehriban və əməkdaşlığa meylli birisiniz. Başqalarının hisslərini asanlıqla anlayır, onlara kömək etməkdən məmnunluq duyursunuz. İnsanlar yanınızda özlərini rahat və qəbul olunmuş hiss edirlər.',
				work: 'Komanda işində, insanlarla bağlı sahələrdə və münaqişələrin həllində güclü tərəf kimi çıxış edirsiniz. Bununla belə, kimisə incitməmək üçün öz fikrinizi və ehtiyaclarınızı geri plana keçirə bilərsiniz.',
				relationships:
					'Münasibətlərdə səbirli, bağışlayan və dəstək olan birisiniz. Öz ehtiyaclarınızı da açıq ifadə etmək münasibətlərinizi daha balanslı edəcək.',
				tips: [
					'"Yox" deməyi kiçik vəziyyətlərdən başlayaraq məşq edin, məsələn: "İndi imkanım yoxdur, sabah baxa bilərəm."',
					'Komanda müzakirələrində razılaşmasanız belə, fikrinizi ən azı bir dəfə açıq ifadə edin.',
					'Başqalarına kömək etdiyiniz kimi, hər həftə özünüz üçün də ayrıca vaxt planlaşdırın.',
				],
			},
		},
	},
	N: {
		id: 'N',
		name: 'Emosional həssaslıq',
		short: 'Stresə, gərginliyə və gündəlik çətinliklərə emosional olaraq nə qədər həssas reaksiya verdiyinizi göstərir.',
		highLabel: 'Həssas, emosional, diqqətli',
		lowLabel: 'Sakit, dözümlü, emosional sabit',
		levels: {
			low: {
				summary:
					'Siz sakit, dözümlü və emosional baxımdan sabit birisiniz. Stresli vəziyyətlərdə də soyuqqanlılığınızı qoruyur, çətinliklərdən sonra tez özünüzə gəlirsiniz. Gündəlik problemlər əhvalınıza nadir hallarda uzunmüddətli təsir edir.',
				work: 'Təzyiq altında, sıx son tarixlər və gözlənilməz dəyişikliklər zamanı aydın düşünə bilirsiniz. Bu sakitliyiniz komandaya da arxayınlıq verir, lakin bəzən başqalarının narahatlığını lazımi qədər ciddi qəbul etməyə bilərsiniz.',
				relationships:
					'Yaxınlarınız üçün sabit və arxayınlıq verən dayaqsınız. Onların hisslərini dinləməyə vaxt ayırmaq münasibətlərinizi daha da yaxınlaşdıracaq.',
				tips: [
					'Həmkarınız narahatlığını bölüşəndə dərhal həll təklif etmək əvəzinə əvvəlcə onu sonadək dinləyin.',
					'Layihənin əvvəlində "Nə səhv gedə bilər?" sualına cavab olaraq qısa risk siyahısı hazırlayın.',
					'Öz hisslərinizi də vaxtaşırı yaxınlarınızla bölüşün ki, onlar Sizi daha yaxından tanısınlar.',
				],
			},
			mid: {
				summary:
					'Siz emosional baxımdan ümumən balanslı birisiniz. Gündəlik çətinliklərin öhdəsindən adətən rahat gəlirsiniz, lakin xüsusilə gərgin dövrlərdə narahatlıq və yorğunluq hiss edə bilirsiniz. Bu, təbii və sağlam reaksiyadır.',
				work: 'Normal iş tempində sabit və məhsuldar işləyirsiniz. Uzunmüddətli yüksək təzyiq dövrlərində isə istirahət və bərpa üçün vaxt ayırmaq Sizin üçün xüsusilə vacibdir.',
				relationships:
					'Hisslərinizi yaxşı anlayır və onları adətən yerində ifadə edirsiniz, bu da münasibətlərinizə səmimiyyət qatır.',
				tips: [
					'Gərginlik əlamətlərini (yuxu, əhval, enerji) erkən tanımaq üçün həftəlik qısa qeyd aparın.',
					'Gərgin günlərdə 5 dəqiqəlik nəfəs məşqi edin və ya qısa gəzintiyə çıxın.',
					'İş yükü artanda prioritetləri rəhbərinizlə və ya komandanızla vaxtında müzakirə edin.',
				],
			},
			high: {
				summary:
					'Siz emosional baxımdan həssas və diqqətli birisiniz, hadisələri dərindən hiss edirsiniz. Gərginlik, qeyri-müəyyənlik və ya tənqid Sizə başqalarına nisbətən daha güclü təsir edə bilər. Bu həssaslıq, eyni zamanda, Sizə riskləri erkən görmək və başqalarının hisslərini incəliklə duymaq imkanı verir.',
				work: 'Diqqətli olmağınız səhvləri və potensial problemləri vaxtında görməyə kömək edir. Yüksək təzyiq və qeyri-müəyyənlik isə Sizi yora bilər, ona görə də aydın gözləntilər və sabit iş rejimi Sizin üçün faydalıdır.',
				relationships:
					'Yaxınlarınızın hisslərini dərindən anlayır və emosional bağlara çox dəyər verirsiniz. Narahatlıqlarınızı açıq bölüşmək Sizə dəstək almağa və münasibətləri gücləndirməyə kömək edəcək.',
				tips: [
					'Narahat edən fikirləri kağıza yazın və onlardan hansının həqiqətən Sizin nəzarətinizdə olduğunu qeyd edin.',
					'Gün ərzində qısa fasilələr, fiziki aktivlik və müntəzəm yuxu üçün sabit vaxt ayırın.',
					'Qeyri-müəyyən tapşırıqlarda gözləntiləri əvvəlcədən dəqiqləşdirmək üçün sual verməkdən çəkinməyin.',
				],
			},
		},
	},
}

export const BIG5_ORDER: Big5Domain[] = ['O', 'C', 'E', 'A', 'N']
