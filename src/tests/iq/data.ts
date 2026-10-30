// IQ test question bank (original items). 48 items, 45 minutes.
// Items are written per domain from easy to hard and then interleaved (v, n, l, s, m, …).
import { IqItem, IqOption } from 'tests/types'
import {
	Cell,
	Fill,
	Seg,
	ShapeKind,
	dots,
	flipVertical,
	gridCellOption,
	matrix,
	mirrorStem,
	option,
	paperFoldStem,
	paperUnfolded,
	perimeterGrid,
	polygonWithDots,
	polyomino,
	quad,
	segments,
	series,
	shape,
	single,
	symbolGrid,
	transformCells,
	xorSeg,
} from 'tests/iq/figures'

export const IQ_TIME_LIMIT_MIN = 45

const IDS = ['a', 'b', 'c', 'd', 'e', 'f']
/** Text options a, b, c, … in the given order. */
const text = (...labels: string[]): IqOption[] => labels.map((label, i) => ({ id: IDS[i], label }))
/** Figure options a, b, c, … in the given order (each entry is 0..100 box content). */
const figs = (...contents: string[]): IqOption[] => contents.map((c, i) => ({ id: IDS[i], figure: option(c) }))

// ---------------------------------------------------------------------------
// Verbal
// ---------------------------------------------------------------------------
const VERBAL: IqItem[] = [
	{
		id: 'v01',
		domain: 'verbal',
		difficulty: 1,
		prompt: 'Quş : yuva = arı : ?',
		options: text('bal', 'çiçək', 'pətək', 'qanad'),
		answer: 'c',
		explanation: 'Yuva quşun yaşadığı yerdir; arının yaşadığı yer isə pətəkdir.',
	},
	{
		id: 'v02',
		domain: 'verbal',
		difficulty: 2,
		prompt: '“Cəsur” sözünə mənaca ən yaxın söz hansıdır?',
		options: text('qorxaq', 'səbirli', 'ağıllı', 'igid', 'sakit'),
		answer: 'd',
		explanation: '“Cəsur” və “igid” sinonimdir – hər ikisi qorxmaz, ürəkli insanı bildirir.',
	},
	{
		id: 'v03',
		domain: 'verbal',
		difficulty: 3,
		prompt: '“Səxavətli” sözünün əksmənalısı hansıdır?',
		options: text('kasıb', 'xəsis', 'qəddar', 'tənbəl', 'təvazökar'),
		answer: 'b',
		explanation: 'Səxavətli insan əlindəkini başqaları ilə həvəslə bölüşür, xəsis isə bölüşməkdən çəkinir. “Kasıb” var-dövləti az olan deməkdir, əks məna deyil.',
	},
	{
		id: 'v04',
		domain: 'verbal',
		difficulty: 3,
		prompt: 'Hansı söz digərləri ilə eyni qrupa aid deyil?',
		options: text('tar', 'kamança', 'qaval', 'skripka', 'gitara'),
		answer: 'c',
		explanation: 'Tar, kamança, skripka və gitara simli musiqi alətləridir, qaval isə zərb alətidir.',
	},
	{
		id: 'v05',
		domain: 'verbal',
		difficulty: 3,
		prompt:
			'Cümləni mənaca ən uyğun sözlə tamamlayın: “Əli imtahana yaxşı hazırlaşmışdı, ___ həyəcandan fikrini cəmləyə bilmədiyi üçün bir neçə suala cavab verə bilmədi.”',
		options: text('buna görə də', 'lakin', 'yəni', 'həmçinin', 'çünki'),
		answer: 'b',
		explanation: 'Cümlənin ikinci hissəsi birincisinə zidd nəticə bildirir, ona görə qarşılaşdırma bağlayıcısı “lakin” işlənməlidir.',
	},
	{
		id: 'v06',
		domain: 'verbal',
		difficulty: 3,
		prompt: 'Termometr : temperatur = barometr : ?',
		options: text('təzyiq', 'rütubət', 'külək', 'sürət', 'yağıntı'),
		answer: 'a',
		explanation: 'Termometr temperaturu, barometr isə atmosfer təzyiqini ölçən cihazdır.',
	},
	{
		id: 'v07',
		domain: 'verbal',
		difficulty: 4,
		prompt: '“Qələm : yazmaq” cütündəki əlaqəyə ən çox uyğun gələn cüt hansıdır?',
		options: text('rəssam : çəkmək', 'kağız : ağ', 'çəkic : mismar', 'bıçaq : kəsmək', 'dəftər : məktəb'),
		answer: 'd',
		explanation: 'Qələm yazmaq üçün alətdir, bıçaq da kəsmək üçün alətdir. “Rəssam : çəkmək” isə alət yox, işi görən şəxslə hərəkət arasındakı əlaqədir.',
	},
	{
		id: 'v08',
		domain: 'verbal',
		difficulty: 4,
		prompt: 'Hansı söz cütündəki məna əlaqəsi qalanlarından fərqlənir?',
		options: text('isti – soyuq', 'uzun – qısa', 'böyük – iri', 'gəlmək – getmək', 'gecə – gündüz'),
		answer: 'c',
		explanation: 'Qalan cütlər əksmənalı sözlərdən (antonimlərdən) ibarətdir, “böyük – iri” isə yaxınmənalı sözlərdir (sinonimdir).',
	},
	{
		id: 'v09',
		domain: 'verbal',
		difficulty: 4,
		prompt: 'Toxum : ağac = tırtıl : ?',
		options: text('barama', 'yarpaq', 'quş', 'kəpənək', 'arı'),
		answer: 'd',
		explanation: 'Toxumdan sonda ağac, tırtıldan isə sonda kəpənək yetişir. Barama yalnız aralıq mərhələdir.',
	},
	{
		id: 'v10',
		domain: 'verbal',
		difficulty: 5,
		prompt: '“Sinifdəki bütün şagirdlər tapşırığı yerinə yetirib” fikri yalandır. Hansı nəticə mütləq doğrudur?',
		options: text(
			'Heç bir şagird tapşırığı yerinə yetirməyib.',
			'Şagirdlərin yarısı tapşırığı yerinə yetirib.',
			'Müəllim tapşırığı yoxlamayıb.',
			'Bəzi şagirdlər tapşırığı yerinə yetirib.',
			'Ən azı bir şagird tapşırığı yerinə yetirməyib.',
		),
		answer: 'e',
		explanation: '“Hamı etdi” fikrinin yalan olması yalnız o deməkdir ki, ən azı bir nəfər etməyib. Neçə nəfərin etdiyini isə bu fikirdən bilmək olmur.',
	},
]

// ---------------------------------------------------------------------------
// Numerical
// ---------------------------------------------------------------------------
const NUMERICAL: IqItem[] = [
	{
		id: 'n01',
		domain: 'numerical',
		difficulty: 1,
		prompt: 'Sıranı davam etdirin: 3, 7, 11, 15, ?',
		options: text('19', '18', '21', '17', '20'),
		answer: 'a',
		explanation: 'Hər növbəti ədəd əvvəlkindən 4 vahid böyükdür: 15 + 4 = 19.',
	},
	{
		id: 'n02',
		domain: 'numerical',
		difficulty: 2,
		prompt: 'Sıranı davam etdirin: 2, 6, 18, 54, ?',
		options: text('162', '216', '158', '108', '72'),
		answer: 'a',
		explanation: 'Hər ədəd əvvəlkinin 3 mislidir: 54 × 3 = 162.',
	},
	{
		id: 'n03',
		domain: 'numerical',
		difficulty: 3,
		prompt: 'Sıranı davam etdirin: 2, 5, 10, 17, 26, ?',
		options: text('35', '37', '36', '39', '38'),
		answer: 'b',
		explanation: 'Ədədlər n² + 1 qaydası ilə alınır (1+1, 4+1, 9+1, …): 6² + 1 = 37. Fərqlər də 3, 5, 7, 9, 11 kimi artır.',
	},
	{
		id: 'n04',
		domain: 'numerical',
		difficulty: 3,
		prompt: 'Qiyməti 80 manat olan ayaqqabıya 25% endirim edildi. Ayaqqabının yeni qiyməti neçə manatdır?',
		options: text('55', '64', '20', '65', '60'),
		answer: 'e',
		explanation: '80 manatın 25%-i 20 manatdır, deməli yeni qiymət 80 − 20 = 60 manatdır.',
	},
	{
		id: 'n05',
		domain: 'numerical',
		difficulty: 3,
		prompt: 'Sıranı davam etdirin: 5, 10, 8, 16, 14, 28, ?',
		options: text('30', '56', '26', '24', '27'),
		answer: 'c',
		explanation: 'Növbə ilə əvvəlcə 2-yə vurulur, sonra 2 çıxılır: 28 − 2 = 26.',
	},
	{
		id: 'n06',
		domain: 'numerical',
		difficulty: 3,
		prompt: '3 fəhlə bir işi 8 günə görür. Eyni sürətlə işləyən 6 fəhlə həmin işi neçə günə görər?',
		options: text('16', '6', '2', '4', '12'),
		answer: 'd',
		explanation: 'İş 3 × 8 = 24 fəhlə-gün tələb edir; 6 fəhlə bunu 24 : 6 = 4 günə görər.',
	},
	{
		id: 'n07',
		domain: 'numerical',
		difficulty: 4,
		prompt: 'Sıranı davam etdirin: 1, 4, 5, 9, 14, 23, ?',
		options: text('32', '37', '35', '38', '41'),
		answer: 'b',
		explanation: 'Üçüncüdən başlayaraq hər ədəd özündən əvvəlki iki ədədin cəminə bərabərdir: 14 + 23 = 37.',
	},
	{
		id: 'n08',
		domain: 'numerical',
		difficulty: 4,
		prompt:
			'Cədvəlin hər sətrində ədədlər eyni qayda ilə əlaqəlidir. 1-ci sətir: 4, 3, 13. 2-ci sətir: 5, 2, 11. 3-cü sətir: 6, 4, ?. Sual işarəsinin yerinə hansı ədəd gəlməlidir?',
		options: text('24', '21', '26', '28', '25'),
		answer: 'e',
		explanation: 'Üçüncü ədəd ilk iki ədədin hasilindən 1 vahid böyükdür: 4·3 + 1 = 13, 5·2 + 1 = 11, 6·4 + 1 = 25.',
	},
	{
		id: 'n09',
		domain: 'numerical',
		difficulty: 5,
		prompt:
			'Sinifdə oğlanların sayının qızların sayına nisbəti 3 : 5-dir. Sinfə daha 4 oğlan gəldikdən sonra bu nisbət 1 : 1 oldu. Əvvəlcə sinifdə neçə şagird var idi?',
		options: text('20', '24', '16', '12', '8'),
		answer: 'c',
		explanation: 'Oğlanlar 3k, qızlar 5k olsun: 3k + 4 = 5k, buradan k = 2. Əvvəlcə 6 oğlan və 10 qız, cəmi 16 şagird var idi.',
	},
	{
		id: 'n10',
		domain: 'numerical',
		difficulty: 5,
		prompt: 'Sıranı davam etdirin: 2, 3, 7, 16, 32, 57, ?',
		options: text('93', '89', '82', '94', '100'),
		answer: 'a',
		explanation: 'Ardıcıl fərqlər tam kvadratlardır: 1, 4, 9, 16, 25; növbəti fərq 36-dır, 57 + 36 = 93.',
	},
]

// ---------------------------------------------------------------------------
// Logical
// Azerbaijani alphabet: A B C Ç D E Ə F G Ğ H X I İ J K Q L M N O Ö P R S Ş T U Ü V Y Z
// ---------------------------------------------------------------------------
const LOGICAL: IqItem[] = [
	{
		id: 'l01',
		domain: 'logical',
		difficulty: 1,
		prompt: 'Anar Bəhruzdan hündürdür. Bəhruz Cavaddan hündürdür. Onlardan ən alçaq kimdir?',
		options: text('Cavad', 'Anar', 'Bəhruz', 'Müəyyən etmək olmaz'),
		answer: 'a',
		explanation: 'Boy sırası Anar > Bəhruz > Cavad şəklindədir, deməli ən alçaq Cavaddır.',
	},
	{
		id: 'l02',
		domain: 'logical',
		difficulty: 2,
		prompt: 'Azərbaycan əlifbası əsasında sıranı davam etdirin: A, C, D, Ə, G, ?',
		options: text('Ğ', 'H', 'X', 'F', 'İ'),
		answer: 'b',
		explanation: 'Əlifbada hər dəfə bir hərf buraxılır (A-b-C-ç-D-e-Ə-f-G-ğ-H), ona görə G-dən sonra Ğ buraxılır və H gəlir.',
	},
	{
		id: 'l03',
		domain: 'logical',
		difficulty: 3,
		prompt: 'Bütün rəssamlar yaradıcı insanlardır. Heç bir yaradıcı insan laqeyd deyil. Hansı nəticə mütləq doğrudur?',
		options: text(
			'Bəzi laqeyd insanlar rəssamdır.',
			'Bütün yaradıcı insanlar rəssamdır.',
			'Bəzi rəssamlar laqeyddir.',
			'Heç bir rəssam laqeyd deyil.',
			'Laqeyd olmayan hər kəs rəssamdır.',
		),
		answer: 'd',
		explanation: 'Rəssamlar tamamilə yaradıcı insanlar qrupunun içindədir, bu qrupda isə laqeyd insan yoxdur; deməli heç bir rəssam laqeyd deyil.',
	},
	{
		id: 'l04',
		domain: 'logical',
		difficulty: 3,
		prompt: 'Bəzi tələbələr idmançıdır. Bütün idmançılar səhər tezdən oyanır. Hansı nəticə mütləq doğrudur?',
		options: text(
			'Bütün tələbələr səhər tezdən oyanır.',
			'Bəzi tələbələr səhər tezdən oyanır.',
			'Səhər tezdən oyanan hər kəs idmançıdır.',
			'Bəzi idmançılar tələbə deyil.',
			'Heç bir tələbə gec oyanmır.',
		),
		answer: 'b',
		explanation: 'İdmançı olan tələbələr də idmançılar kimi səhər tezdən oyanır, deməli ən azı bəzi tələbələr tezdən oyanır. Qalan nəticələr verilənlərdən çıxmır.',
	},
	{
		id: 'l05',
		domain: 'logical',
		difficulty: 3,
		prompt: 'Şərti kodda KİTAB sözü QJUBC kimi yazılır. Həmin qayda ilə DƏFTƏR sözü necə yazılar?',
		options: text('EFĞUFS', 'EFGÜFS', 'ÇEƏŞEP', 'EFGUFS', 'EƏGUƏS'),
		answer: 'd',
		explanation: 'Hər hərf Azərbaycan əlifbasında özündən sonra gələn hərflə əvəz olunur (K→Q, İ→J): D→E, Ə→F, F→G, T→U, Ə→F, R→S.',
	},
	{
		id: 'l06',
		domain: 'logical',
		difficulty: 3,
		prompt:
			'Aysel, Bəxtiyar, Cəmilə, Dəniz və Elvin növbəyə düzülüb. Elvin birincidir, Bəxtiyar sonuncudur. Dəniz Elvindən dərhal sonra, Aysel isə Cəmilədən dərhal sonra durub. Növbədə üçüncü kimdir?',
		options: text('Aysel', 'Bəxtiyar', 'Dəniz', 'Elvin', 'Cəmilə'),
		answer: 'e',
		explanation: 'Sıra belədir: Elvin, Dəniz, Cəmilə, Aysel, Bəxtiyar. Boş qalan 3-cü və 4-cü yerləri Cəmilə və ondan dərhal sonra Aysel tutur.',
	},
	{
		id: 'l07',
		domain: 'logical',
		difficulty: 4,
		prompt: 'Azərbaycan əlifbası əsasında sıranı davam etdirin: B, Z, Ç, Y, E, V, ?',
		options: text('G', 'Ə', 'Ü', 'F', 'U'),
		answer: 'd',
		explanation: 'İki sıra növbələşir: B, Ç, E, … əlifbanın əvvəlindən bir hərf buraxaraq irəliləyir (növbəti F), Z, Y, V isə sonundan geriyə gedir.',
	},
	{
		id: 'l08',
		domain: 'logical',
		difficulty: 4,
		prompt:
			'Bir adada yaşayanlar ya həmişə doğru danışır, ya da həmişə yalan danışır. Ramil deyir: “Səbinə yalançıdır.” Səbinə deyir: “Ramil də, mən də doğru danışırıq.” Kim doğru danışır?',
		options: text('Yalnız Səbinə', 'Hər ikisi', 'Yalnız Ramil', 'Heç biri', 'Müəyyən etmək olmaz'),
		answer: 'c',
		explanation: 'Səbinə doğru danışsaydı, Ramil də doğru danışmalı idi, amma Ramil Səbinəni yalançı adlandırır – ziddiyyət yaranır. Deməli Səbinə yalançıdır, Ramilin sözü isə doğrudur.',
	},
	{
		id: 'l09',
		domain: 'logical',
		difficulty: 5,
		prompt: 'Azərbaycan əlifbası əsasında sıranı davam etdirin: A, B, Ç, Ə, H, ?',
		options: text('J', 'K', 'Q', 'İ', 'L'),
		answer: 'b',
		explanation: 'Hərflər arasındakı addım hər dəfə 1 artır: +1, +2, +3, +4; H-dən sonra 5 addım irəli (X, I, İ, J, K) K hərfidir.',
	},
	{
		id: 'l10',
		domain: 'logical',
		difficulty: 5,
		prompt:
			'Beşmərtəbəli binada Kamran, Lalə, Murad, Nərmin və Orxan hərəsi ayrı mərtəbədə yaşayır. Nərmin nə ən yuxarı, nə də ən aşağı mərtəbədə yaşayır. Kamran Lalədən iki mərtəbə yuxarıda yaşayır. Murad Orxandan dərhal bir mərtəbə aşağıda yaşayır. Orxan 5-ci mərtəbədə yaşamır. Nərmin neçənci mərtəbədə yaşayır?',
		options: text('2-ci', '3-cü', '4-cü', 'Müəyyən etmək olmaz'),
		answer: 'c',
		explanation: '5-ci mərtəbədə yalnız Kamran yaşaya bilər, deməli Lalə 3-cü mərtəbədədir. Murad və Orxan üçün yalnız 1-ci və 2-ci mərtəbələr qalır, Nərmin isə 4-cü mərtəbədə yaşayır.',
	},
]

// ---------------------------------------------------------------------------
// Spatial
// ---------------------------------------------------------------------------
const big = (kind: ShapeKind, fill: Fill): string => shape(kind, { x: 50, y: 50, size: 56, fill, sw: 3 })
const arrow = (deg: number): string => shape('arrow', { x: 50, y: 50, size: 62, fill: 'solid', rotate: deg, sw: 2 })
const many = (kind: ShapeKind, n: number, fill: Fill): string => dots(n, kind, fill, 20)

// Asymmetric (chiral) polyominoes
const F_SHAPE: Cell[] = [
	[1, 0],
	[2, 0],
	[0, 1],
	[1, 1],
	[1, 2],
]
const P_SHAPE: Cell[] = [
	[0, 0],
	[1, 0],
	[0, 1],
	[1, 1],
	[0, 2],
	[0, 3],
]
const P_ACCENT = 5
const Y_SHAPE: Cell[] = [
	[1, 0],
	[0, 1],
	[1, 1],
	[2, 1],
	[3, 1],
]

// s08: third column = lines that appear in exactly one of the first two cells
const S08: [Seg[], Seg[]][] = [
	[
		['top', 'bottom', 'd1'],
		['top', 'left', 'd2'],
	],
	[
		['right', 'vmid', 'hmid'],
		['left', 'vmid', 'd1'],
	],
	[
		['top', 'left', 'd1', 'vmid'],
		['top', 'right', 'd1', 'hmid'],
	],
]
const S08_XOR = xorSeg(S08[2][0], S08[2][1]) // left, vmid, right, hmid

// s12: circle moves 1 step clockwise, square moves 2 steps anticlockwise (perimeter positions 0..7)
const s12Circle = (t: number): number => t % 8
const s12Square = (t: number): number => (((5 - 2 * t) % 8) + 8) % 8

const SPATIAL: IqItem[] = [
	{
		id: 's01',
		domain: 'spatial',
		difficulty: 1,
		prompt: 'Ardıcıllıqda növbəti fiqur hansıdır?',
		figure: series([dots(1), dots(2), dots(3), dots(4), null]),
		options: figs(dots(6), dots(5), dots(4), dots(5, 'square')),
		answer: 'b',
		explanation: 'Hər növbəti xanada bir dairə artır: 1, 2, 3, 4, deməli növbəti xanada 5 dairə olmalıdır.',
	},
	{
		id: 's02',
		domain: 'spatial',
		difficulty: 2,
		prompt: 'Qanunauyğunluğu tapın: sual işarəsinin yerinə hansı fiqur gəlməlidir?',
		figure: matrix([
			[big('circle', 'empty'), big('square', 'empty'), big('triangle', 'empty')],
			[big('square', 'solid'), big('triangle', 'solid'), big('circle', 'solid')],
			[big('triangle', 'accent'), big('circle', 'accent'), null],
		]),
		options: figs(
			big('square', 'solid'),
			big('circle', 'accent'),
			big('square', 'accent'),
			big('square', 'empty'),
			big('triangle', 'accent'),
		),
		answer: 'c',
		explanation: 'Hər sətirdə dairə, kvadrat və üçbucaq bir dəfə təkrarlanır, rəng isə sətir boyu eynidir. Üçüncü sətirdə rəngli kvadrat çatışmır.',
	},
	{
		id: 's03',
		domain: 'spatial',
		difficulty: 2,
		prompt: 'Hansı fiqur digərlərindən fərqlənir?',
		options: figs(
			polygonWithDots(3, 3),
			polygonWithDots(4, 4),
			polygonWithDots(6, 6),
			polygonWithDots(5, 4),
			polygonWithDots(7, 7),
		),
		answer: 'd',
		explanation: 'Fiqurların içindəki nöqtələrin sayı tərəflərin sayına bərabərdir. Yalnız beşbucaqlının içində 5 yox, 4 nöqtə var.',
	},
	{
		id: 's04',
		domain: 'spatial',
		difficulty: 3,
		prompt: 'Hansı fiqur verilmiş fiqurun sadəcə döndərilmiş variantıdır (güzgü əksi deyil)?',
		figure: single(polyomino(F_SHAPE)),
		options: figs(
			polyomino(transformCells(F_SHAPE, 180, true)),
			polyomino(transformCells(F_SHAPE, 90, true)),
			polyomino(transformCells(F_SHAPE, 0, true)),
			polyomino(transformCells(F_SHAPE, 270, true)),
			polyomino(transformCells(F_SHAPE, 90)),
		),
		answer: 'e',
		explanation: 'Doğru cavab fiqurun saat əqrəbi istiqamətində 90° döndərilmiş halıdır. Qalan variantlar fiqurun güzgü əksidir və heç bir döndərmə ilə ona çevrilmir.',
	},
	{
		id: 's05',
		domain: 'spatial',
		difficulty: 3,
		prompt: 'Fiqurun sağındakı qırıq xəttə görə güzgü əksi hansıdır?',
		figure: mirrorStem(P_SHAPE, P_ACCENT),
		options: figs(
			polyomino(transformCells(P_SHAPE, 180), P_ACCENT),
			polyomino(transformCells(P_SHAPE, 0, true), P_ACCENT),
			polyomino(transformCells(P_SHAPE, 0), P_ACCENT),
			polyomino(flipVertical(transformCells(P_SHAPE, 0)), P_ACCENT),
			polyomino(transformCells(P_SHAPE, 90), P_ACCENT),
		),
		answer: 'b',
		explanation: 'Şaquli güzgüdə fiqurun sağı ilə solu yer dəyişir, yuxarı və aşağı isə dəyişmir; rəngli xana da aşağıda qalır, amma digər tərəfə keçir.',
	},
	{
		id: 's06',
		domain: 'spatial',
		difficulty: 3,
		prompt: 'Qanunauyğunluğu tapın: sual işarəsinin yerinə hansı fiqur gəlməlidir?',
		figure: matrix([
			[arrow(0), arrow(45), arrow(90)],
			[arrow(90), arrow(135), arrow(180)],
			[arrow(180), arrow(225), null],
		]),
		options: figs(arrow(270), arrow(90), arrow(180), arrow(315), arrow(225)),
		answer: 'a',
		explanation: 'Sətir boyu ox hər dəfə saat əqrəbi istiqamətində 45° dönür (sütun boyu isə 90°). 225°-dən sonra ox 270°-yə, yəni sola baxmalıdır.',
	},
	{
		id: 's07',
		domain: 'spatial',
		difficulty: 3,
		prompt: 'Ardıcıllıqda növbəti fiqur hansıdır?',
		figure: series([quad(0, 3), quad(1, 2), quad(2, 1), quad(3, 0), null]),
		options: figs(quad(1, 3), quad(0, 2), quad(0, 3), quad(3, 0), quad(2, 1)),
		answer: 'c',
		explanation: 'Tünd xana hər addımda saat əqrəbi istiqamətində, rəngli xana isə əks istiqamətdə bir xana hərəkət edir. Növbəti addımda tünd xana yuxarı sola, rəngli xana aşağı sola keçir.',
	},
	{
		id: 's08',
		domain: 'spatial',
		difficulty: 4,
		prompt: 'Qanunauyğunluğu tapın: sual işarəsinin yerinə hansı fiqur gəlməlidir?',
		figure: matrix(S08.map(([a, b], i) => [segments(a), segments(b), i === 2 ? null : segments(xorSeg(a, b))])),
		options: figs(
			segments(S08_XOR),
			segments([...S08_XOR, 'bottom']),
			segments(['top', 'd1']),
			segments(['top', 'left', 'd1', 'vmid', 'right', 'hmid']),
			segments(S08_XOR.filter((s) => s !== 'hmid')),
		),
		answer: 'a',
		explanation: 'Üçüncü sütundakı fiqur ilk iki fiqurun üst-üstə qoyulmasından alınır: hər ikisində olan xətlər silinir, yalnız birində olan xətlər qalır.',
	},
	{
		id: 's09',
		domain: 'spatial',
		difficulty: 4,
		prompt:
			'Kvadrat kağız şəkildəki kimi əvvəlcə soldan sağa, sonra yuxarıdan aşağıya qatlanır və deşilir. Kağızı açsaq, o necə görünəcək?',
		figure: paperFoldStem([70, 60]),
		options: figs(
			paperUnfolded([
				[70, 40],
				[70, 60],
			]),
			paperUnfolded([
				[30, 40],
				[70, 40],
				[30, 60],
				[70, 60],
			]),
			paperUnfolded([
				[40, 30],
				[60, 30],
				[40, 70],
				[60, 70],
			]),
			paperUnfolded([
				[30, 10],
				[70, 10],
				[30, 90],
				[70, 90],
			]),
			paperUnfolded([
				[30, 60],
				[70, 40],
				[70, 60],
			]),
		),
		answer: 'b',
		explanation: 'İki qatlamadan sonra kağız 4 qat olur, ona görə 4 deşik yaranır. Deşiklər hər iki qatlama xəttinə görə simmetrik yerləşir: (70; 60) nöqtəsinin əksləri (30; 60), (70; 40) və (30; 40) olur.',
	},
	{
		id: 's10',
		domain: 'spatial',
		difficulty: 4,
		prompt: 'Dörd fiqur eyni fiqurun döndərilmiş variantlarıdır. Hansı fiqur onlardan fərqlənir?',
		options: figs(
			polyomino(transformCells(Y_SHAPE, 90)),
			polyomino(transformCells(Y_SHAPE, 0)),
			polyomino(transformCells(Y_SHAPE, 180, true)),
			polyomino(transformCells(Y_SHAPE, 270)),
			polyomino(transformCells(Y_SHAPE, 180)),
		),
		answer: 'c',
		explanation: 'Bu fiqur qalanlarının güzgü əksidir: onu müstəvidə nə qədər döndərsək də, digərləri ilə üst-üstə düşmür.',
	},
	{
		id: 's11',
		domain: 'spatial',
		difficulty: 5,
		prompt: 'Qanunauyğunluğu tapın: sual işarəsinin yerinə hansı fiqur gəlməlidir?',
		figure: matrix([
			[many('circle', 1, 'empty'), many('square', 2, 'solid'), many('triangle', 3, 'accent')],
			[many('triangle', 2, 'solid'), many('circle', 3, 'accent'), many('square', 5, 'empty')],
			[many('square', 3, 'accent'), many('triangle', 1, 'empty'), null],
		]),
		options: figs(
			many('circle', 3, 'solid'),
			many('circle', 4, 'empty'),
			many('square', 4, 'solid'),
			many('circle', 5, 'solid'),
			many('circle', 4, 'solid'),
			many('circle', 4, 'accent'),
		),
		answer: 'e',
		explanation: 'Hər sətirdə hər fiqur növü və hər rəng bir dəfə işlənir, üçüncü xanadakı fiqurların sayı isə ilk iki xananın cəminə bərabərdir. Deməli 3 + 1 = 4 tünd dairə olmalıdır.',
	},
	{
		id: 's12',
		domain: 'spatial',
		difficulty: 5,
		prompt: 'Ardıcıllıqda növbəti fiqur hansıdır?',
		figure: series([...[0, 1, 2, 3].map((t) => perimeterGrid(s12Circle(t), s12Square(t))), null]),
		options: figs(
			perimeterGrid(3, 5),
			perimeterGrid(5, 6),
			perimeterGrid(4, 1),
			perimeterGrid(s12Circle(4), s12Square(4)), // 4, 5
			perimeterGrid(4, 6),
		),
		answer: 'd',
		explanation: 'Dairə kənar xanalar üzrə hər dəfə 1 xana saat əqrəbi istiqamətində, kvadrat isə 2 xana əks istiqamətdə hərəkət edir. Növbəti addımda dairə aşağı sağ küncə, kvadrat isə aşağı orta xanaya keçir.',
	},
]

// ---------------------------------------------------------------------------
// Memory
// ---------------------------------------------------------------------------
const MEMORY: IqItem[] = [
	{
		id: 'm01',
		domain: 'memory',
		difficulty: 2,
		prompt: 'Az əvvəl göstərilən rəqəmlər ardıcıllığını seçin.',
		memorize: { content: '7 2 9 4 1 6', seconds: 5 },
		options: text('7 2 4 9 1 6', '7 9 2 4 1 6', '7 2 9 4 1 6', '7 2 9 4 6 1', '2 7 9 4 1 6'),
		answer: 'c',
		explanation: 'Göstərilən ardıcıllıq 7 2 9 4 1 6 idi; digər variantlarda iki rəqəmin yeri dəyişdirilib.',
	},
	{
		id: 'm02',
		domain: 'memory',
		difficulty: 2,
		prompt: 'Hansı söz siyahıda YOX idi?',
		memorize: { content: 'alma, kitab, dəniz, saat, qələm, bulud, çanta, körpü, xalça', seconds: 8 },
		options: text('dəniz', 'saat', 'körpü', 'yağış', 'çanta'),
		answer: 'd',
		explanation: 'Siyahıda “yağış” sözü yox idi; o, “bulud” sözü ilə məna yaxınlığına görə tanış görünə bilər.',
	},
	{
		id: 'm03',
		domain: 'memory',
		difficulty: 3,
		prompt: 'Üçbucaq hansı xanada idi?',
		memorize: {
			content: symbolGrid([
				{ row: 0, col: 2, kind: 'star', fill: 'accent' },
				{ row: 1, col: 0, kind: 'circle', fill: 'solid' },
				{ row: 1, col: 1, kind: 'square', fill: 'solid' },
				{ row: 2, col: 1, kind: 'triangle', fill: 'empty' },
			]),
			seconds: 6,
		},
		options: [
			{ id: 'a', figure: gridCellOption(2, 0) },
			{ id: 'b', figure: gridCellOption(1, 1) },
			{ id: 'c', figure: gridCellOption(0, 1) },
			{ id: 'd', figure: gridCellOption(2, 2) },
			{ id: 'e', figure: gridCellOption(2, 1) },
		],
		answer: 'e',
		explanation: 'Üçbucaq aşağı sətrin orta xanasında idi; ulduz yuxarı sağda, dairə orta sətrin solunda, kvadrat isə mərkəzdə yerləşirdi.',
	},
	{
		id: 'm04',
		domain: 'memory',
		difficulty: 3,
		prompt: 'Az əvvəl göstərilən rəqəmlər ardıcıllığını seçin.',
		memorize: { content: '5 8 3 1 9 4 7 2', seconds: 6 },
		options: text('5 8 3 9 1 4 7 2', '5 8 3 1 9 4 7 2', '5 8 1 3 9 4 7 2', '5 8 3 1 9 7 4 2', '5 3 8 1 9 4 7 2'),
		answer: 'b',
		explanation: 'Göstərilən ardıcıllıq 5 8 3 1 9 4 7 2 idi; digər variantlarda qonşu iki rəqəmin yeri dəyişdirilib.',
	},
	{
		id: 'm05',
		domain: 'memory',
		difficulty: 4,
		prompt: 'Az əvvəl göstərilən rəqəmləri TƏRS sırada (sondan əvvələ) seçin.',
		memorize: { content: '3 9 6 2 8 5 1', seconds: 7 },
		options: text('3 9 6 2 8 5 1', '1 5 8 6 2 9 3', '1 8 5 2 6 9 3', '1 5 8 2 9 6 3', '1 5 8 2 6 9 3'),
		answer: 'e',
		explanation: 'Göstərilən 3 9 6 2 8 5 1 ardıcıllığı sondan əvvələ oxunduqda 1 5 8 2 6 9 3 alınır.',
	},
	{
		id: 'm06',
		domain: 'memory',
		difficulty: 5,
		prompt: 'Az əvvəl göstərilən rəqəmlər ardıcıllığını seçin.',
		memorize: { content: '4 1 7 3 8 2 6 9 5', seconds: 8 },
		options: text(
			'4 1 7 8 3 2 6 9 5',
			'4 7 1 3 8 2 6 9 5',
			'4 1 7 3 8 2 9 6 5',
			'4 1 7 3 8 2 6 9 5',
			'4 1 7 3 2 8 6 9 5',
		),
		answer: 'd',
		explanation: 'Göstərilən ardıcıllıq 4 1 7 3 8 2 6 9 5 idi; digər variantlarda qonşu iki rəqəmin yeri dəyişdirilib.',
	},
]

/** Interleave domains so that each domain progresses (easy → hard) at the same relative pace. */
function interleave(groups: IqItem[][]): IqItem[] {
	const pos = groups.map(() => 0)
	const total = groups.reduce((s, g) => s + g.length, 0)
	const out: IqItem[] = []
	while (out.length < total) {
		let best = -1
		let bestScore = Infinity
		groups.forEach((g, i) => {
			if (pos[i] >= g.length) return
			const score = pos[i] / g.length
			if (score < bestScore - 1e-9) {
				best = i
				bestScore = score
			}
		})
		out.push(groups[best][pos[best]++])
	}
	return out
}

export const IQ_ITEMS: IqItem[] = interleave([VERBAL, NUMERICAL, LOGICAL, SPATIAL, MEMORY])
