import { IqDomain } from 'tests/types'

export function levelOf(index: number): 'high' | 'above' | 'avg' | 'below' {
	if (index >= 120) return 'high'
	if (index >= 108) return 'above'
	if (index >= 92) return 'avg'
	return 'below'
}

export const LEVEL_LABEL = { high: 'Güclü tərəf', above: 'Ortadan yuxarı', avg: 'Orta səviyyə', below: 'İnkişaf sahəsi' }

const TEXT: Record<IqDomain, Record<ReturnType<typeof levelOf>, string>> = {
	verbal: {
		high: 'Anlayışlar arasındakı incə əlaqələri sürətlə görürsünüz, söz ehtiyatınız geniş və dəqiqdir. Mürəkkəb mətnləri başa düşmək, fikri aydın ifadə etmək və arqument qurmaq sizin üçün təbii prosesdir.',
		above: 'Söz mənalarını və anlayışlar arasındakı əlaqələri yaxşı tutursunuz. Mətnlə işləyən, yazı və təqdimat tələb edən tapşırıqlarda rahat olacaqsınız.',
		avg: 'Gündəlik və peşəkar dil tapşırıqlarının öhdəsindən yaxşı gəlirsiniz. Analoji və mücərrəd söz əlaqələri bəzən əlavə vaxt tələb edir.',
		below: 'Mücərrəd söz əlaqələri və analogiyalar hazırda daha çətin gəlir. Mütəmadi oxu və yeni sözləri kontekstdə işlətmək bu sahəni sürətlə gücləndirir.'
	},
	numerical: {
		high: 'Ədədlər arasında qanunauyğunluqları tez görürsünüz və hesablamalarda dəqiqsiniz. Faiz, nisbət və ardıcıllıq tələb edən məsələlər sizin üçün güclü sahədir.',
		above: 'Rəqəmsal məlumatla rahat işləyirsiniz; ardıcıllıqları və gündəlik riyazi məsələləri əksər hallarda düzgün həll edirsiniz.',
		avg: 'Əsas rəqəmsal tapşırıqları həll edirsiniz; mürəkkəb ardıcıllıqlarda və çoxaddımlı məsələlərdə səhv ehtimalı artır.',
		below: 'Rəqəmsal məsələlər hazırda vaxt aparır. Gündəlik zehni hesab və ardıcıllıq tapşırıqları ilə məşq bu bacarığı tez inkişaf etdirir.'
	},
	logical: {
		high: 'Şərtlərdən düzgün nəticə çıxarmaqda və gizli qaydaları tapmaqda çox güclüsünüz. Analitik problem həlli, planlaşdırma və strateji düşüncə tələb edən işlər sizə uyğundur.',
		above: 'Məntiqi ardıcıllıqları və qaydaları yaxşı izləyirsiniz; əksər deduktiv tapşırıqları dəqiq həll edirsiniz.',
		avg: 'Sadə və orta çətinlikli məntiq tapşırıqlarını həll edirsiniz; çoxşərtli məsələlərdə addım-addım yazmaq dəqiqliyi artıracaq.',
		below: 'Çoxşərtli məntiq tapşırıqları hələ çətindir. Şahmat, sudoku və məntiq oyunları, həmçinin problemləri yazılı addımlara bölmək kömək edəcək.'
	},
	spatial: {
		high: 'Fiqurları zehnən çevirmək və vizual qanunauyğunluqları görmək sizin güclü tərəfinizdir. Dizayn, mühəndislik və memarlıq kimi sahələrdə bu böyük üstünlükdür.',
		above: 'Vizual nümunələri və fiqur çevrilmələrini yaxşı başa düşürsünüz; qrafik və sxemlərlə işləmək sizə rahat gəlir.',
		avg: 'Sadə vizual qanunauyğunluqları tanıyırsınız; çoxqaydalı matris və fırlanma tapşırıqları əlavə diqqət tələb edir.',
		below: 'Fiqurların zehni çevrilməsi hələ çətindir. Puzzle, Tetris, LEGO və eskiz çəkmək məkan təfəkkürünü inkişaf etdirir.'
	},
	memory: {
		high: 'Qısamüddətli və işçi yaddaşınız çox güclüdür: məlumatı tez yadda saxlayır və onunla eyni anda işləyə bilirsiniz.',
		above: 'Yaddaşınız etibarlıdır; ardıcıllıqları və siyahıları yaxşı yadda saxlayırsınız.',
		avg: 'Yaddaş göstəriciniz orta səviyyədədir; uzun ardıcıllıqlarda qruplaşdırma üsulu nəticəni yaxşılaşdıracaq.',
		below: 'Qısamüddətli yaddaş tapşırıqları hazırda çətindir. Məlumatı 3–4 elementlik qruplara bölmək və yaddaş oyunları ilə məşq etmək kömək edəcək.'
	}
}

const TRAIN: Record<IqDomain, string[]> = {
	verbal: ['Hər gün 20–30 dəqiqə müxtəlif janrda mətn oxuyun və yeni sözləri qeyd edin.', 'Oxuduğunuzu 3–4 cümlə ilə xülasə edin.', 'Analogiya və sinonim tapşırıqları həll edin.'],
	numerical: ['Gündəlik zehni hesab məşqləri (5–10 dəqiqə).', 'Ədəd ardıcıllıqları və faiz məsələləri həll edin.', 'Büdcə və statistika ilə bağlı real məlumatlarla işləyin.'],
	logical: ['Məntiq oyunları: şahmat, sudoku, kakuro.', 'Mürəkkəb məsələləri yazılı addımlara bölün.', 'Arqumentlərdə əsas fərziyyəni tapmağı məşq edin.'],
	spatial: ['Puzzle, Tetris və 3D konstruktorlar.', 'Əşyaların eskizini müxtəlif bucaqlardan çəkin.', 'Xəritə ilə istiqamət tapma tapşırıqları.'],
	memory: ['Rəqəm və söz ardıcıllıqlarını qruplaşdıraraq yadda saxlayın.', 'N-back kimi işçi yaddaş məşqləri.', 'Kifayət qədər yuxu və fasilələr yaddaşa birbaşa təsir edir.']
}

export const domainText = (d: IqDomain, index: number) => TEXT[d][levelOf(index)]
export const domainTraining = (d: IqDomain) => TRAIN[d]

export function overallText(iq: number, name: string) {
	if (iq >= 130) return `${name}, nəticəniz iştirakçıların çox kiçik hissəsinin çatdığı səviyyədədir. Mücərrəd düşüncə, yeni məlumatı sürətlə mənimsəmə və mürəkkəb problemləri həll etmə qabiliyyətiniz yüksəkdir.`
	if (iq >= 120) return `${name}, nəticəniz yüksək səviyyədədir. Analitik və mücərrəd tapşırıqlarda əksər yaşıdlarınızdan irəlidəsiniz və çətin akademik və peşəkar istiqamətlərdə uğur üçün güclü bazanız var.`
	if (iq >= 110) return `${name}, nəticəniz ortadan yuxarıdır. Bir neçə sahədə aydın güclü tərəfləriniz var; düzgün istiqamət seçimi ilə onları peşəkar üstünlüyə çevirə bilərsiniz.`
	if (iq >= 90) return `${name}, nəticəniz əhalinin əksəriyyətinin olduğu orta diapazondadır. Güclü sahələrinizə əsaslanan karyera seçimi və məqsədli məşq ən yaxşı nəticəni verəcək.`
	return `${name}, nəticəniz bu testdə orta diapazondan aşağıdır. Bu, test günü, yorğunluq və test formatına öyrəşməmək kimi amillərdən də asılı ola bilər. Ən güclü sahənizə fokuslanın və məşq tövsiyələrini tətbiq edin.`
}

export const METHOD_NOTE =
	'Nəticə 48 sualdan ibarət testə əsasən Rasch (1 parametrli IRT) modeli ilə hesablanır: hər sualın çətinliyi nəzərə alınır və bal IQ şkalasına (orta 100, standart sapma 15) çevrilir. Test hələ geniş norma qrupunda standartlaşdırılmayıb, buna görə nəticə klinik IQ diaqnozu deyil, təxmini göstəricidir. Yorğunluq, diqqətin yayınması və vaxt məhdudiyyəti nəticəyə təsir edə bilər.'
