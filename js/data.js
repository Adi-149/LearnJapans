/**
 * data.js
 * Pusat data untuk aplikasi Belajar Bahasa Jepang (Lyrics, Kanji, Kana, Kosakata, Kuis)
 */

// 1. DATA LIRIK LENGKAP DENGAN SYLLABLE MAPPING (romajiParts)
const lyricsData = [
    {
        japanese: "其処へ辿り着けるのなら",
        romaji: "Soko e tadoritsukeru no nara",
        romajiParts: [
            { text: "Soko", type: "kanji" },
            { text: " e ", type: "hiragana" },
            { text: "tado", type: "kanji" },
            { text: "ri", type: "hiragana" },
            { text: "tsu", type: "kanji" },
            { text: "keru no nara", type: "hiragana" }
        ],
        meaning: "Jika aku bisa tiba di sana."
    },
    {
        japanese: "僕の白い羽がたとえ",
        romaji: "Boku no shiroi hane ga tatoe",
        romajiParts: [
            { text: "Boku", type: "kanji" },
            { text: " no ", type: "hiragana" },
            { text: "shiro", type: "kanji" },
            { text: "i ", type: "hiragana" },
            { text: "hane", type: "kanji" },
            { text: " ga tatoe", type: "hiragana" }
        ],
        meaning: "Meskipun nanti sayap putihku ini..."
    },
    {
        japanese: "白じゃなくなるほどに 汚れても かまいやしない",
        romaji: "Shiro ja nakunaru hodo ni yogorete mo kamai ya shinai",
        romajiParts: [
            { text: "Shiro", type: "kanji" },
            { text: " ja nakunaru hodo ni ", type: "hiragana" },
            { text: "yogo", type: "kanji" },
            { text: "rete mo kamai ya shinai", type: "hiragana" }
        ],
        meaning: "Sangat kotor hingga tak putih lagi, aku tidak peduli."
    },
    {
        japanese: "夢を叶える為にする 挫折や苦労のすべてを",
        romaji: "Yume o kanaeru tame ni suru zasetsu ya kurou no subete o",
        romajiParts: [
            { text: "Yume", type: "kanji" },
            { text: " o ", type: "hiragana" },
            { text: "kana", type: "kanji" },
            { text: "eru ", type: "hiragana" },
            { text: "tame", type: "kanji" },
            { text: " ni suru ", type: "hiragana" },
            { text: "zasetsu", type: "kanji" },
            { text: " ya ", type: "hiragana" },
            { text: "kurou", type: "kanji" },
            { text: " no subete o", type: "hiragana" }
        ],
        meaning: "Agar mimpi ini terwujud, semua masalah dan rintangan ini..."
    },
    {
        japanese: "僕は平気な顔をして 「しあわせ」と呼ぶんだ",
        romaji: "Boku wa heiki na kao o shite 'shiawase' to yobu n da",
        romajiParts: [
            { text: "Boku", type: "kanji" },
            { text: " wa ", type: "hiragana" },
            { text: "heiki", type: "kanji" },
            { text: " na ", type: "hiragana" },
            { text: "kao", type: "kanji" },
            { text: " o shite '", type: "hiragana" },
            { text: "shiawase", type: "hiragana" },
            { text: "' to ", type: "hiragana" },
            { text: "yobu", type: "kanji" },
            { text: " n da", type: "hiragana" }
        ],
        meaning: "Dengan wajah tenang, kusebut sebagai kebahagiaan."
    },
    {
        japanese: "君を笑顔にする為に 必要な遠回りならば",
        romaji: "Kimi o egao ni suru tame ni hitsuyou na toomawari naraba",
        romajiParts: [
            { text: "Kimi", type: "kanji" },
            { text: " o ", type: "hiragana" },
            { text: "egao", type: "kanji" },
            { text: " ni suru ", type: "hiragana" },
            { text: "tame", type: "kanji" },
            { text: " ni ", type: "hiragana" },
            { text: "hitsuyou", type: "kanji" },
            { text: " na ", type: "hiragana" },
            { text: "too", type: "kanji" },
            { text: "mawa", type: "kanji" },
            { text: "ri naraba", type: "hiragana" }
        ],
        meaning: "Agar kau tersenyum, kalaupun harus memutar jauh..."
    },
    {
        japanese: "僕は平気なフリをして 「しあわせ」と呼ぶんだ",
        romaji: "Boku wa heiki na furi o shite 'shiawase' to yobu n da",
        romajiParts: [
            { text: "Boku", type: "kanji" },
            { text: " wa ", type: "hiragana" },
            { text: "heiki", type: "kanji" },
            { text: " na ", type: "hiragana" },
            { text: "furi", type: "katakana" },
            { text: " o shite '", type: "hiragana" },
            { text: "shiawase", type: "hiragana" },
            { text: "' to ", type: "hiragana" },
            { text: "yobu", type: "kanji" },
            { text: " n da", type: "hiragana" }
        ],
        meaning: "Dengan pura-pura tenang, kusebut sebagai kebahagiaan."
    },
    {
        japanese: "それは強がりなんだけど どっか本音も混じってて",
        romaji: "Sore wa tsuyogari nan da kedo dokka honne mo majittete",
        romajiParts: [
            { text: "Sore wa ", type: "hiragana" },
            { text: "tsuyo", type: "kanji" },
            { text: "gari nan da kedo dokka ", type: "hiragana" },
            { text: "honne", type: "kanji" },
            { text: " mo ", type: "hiragana" },
            { text: "ma", type: "kanji" },
            { text: "jittete", type: "hiragana" }
        ],
        meaning: "Itu hanya pura-pura, tapi kadang bercampur dengan keinginanku."
    },
    {
        japanese: "だから辛いハズの日々も 笑顔があふれてた",
        romaji: "Dakara tsurai hazu no hibi mo egao ga afureteta",
        romajiParts: [
            { text: "Dakara ", type: "hiragana" },
            { text: "tsura", type: "kanji" },
            { text: "i ", type: "hiragana" },
            { text: "hazu", type: "katakana" },
            { text: " no ", type: "hiragana" },
            { text: "hibi", type: "kanji" },
            { text: " mo ", type: "hiragana" },
            { text: "egao", type: "kanji" },
            { text: " ga afureteta", type: "hiragana" }
        ],
        meaning: "Karena itu, di hari yang seharusnya menyakitkan pun aku tersenyum."
    },
    {
        japanese: "あの頃までは…",
        romaji: "Ano koro made wa...",
        romajiParts: [
            { text: "Ano ", type: "hiragana" },
            { text: "koro", type: "kanji" },
            { text: " made wa...", type: "hiragana" }
        ],
        meaning: "Sampai saat itu..."
    },
    {
        japanese: "「夢を叶えられた日には",
        romaji: "'Yume o kanaerareta hi ni wa",
        romajiParts: [
            { text: "'", type: "neutral" },
            { text: "Yume", type: "kanji" },
            { text: " o ", type: "hiragana" },
            { text: "kana", type: "kanji" },
            { text: "erareta ", type: "hiragana" },
            { text: "hi", type: "kanji" },
            { text: " ni wa", type: "hiragana" }
        ],
        meaning: "Di hari mimpiku terwujud..."
    },
    {
        japanese: "君をきっと迎えに行く」",
        romaji: "Kimi o kitto mukae ni iku",
        romajiParts: [
            { text: "Kimi", type: "kanji" },
            { text: " o kitto ", type: "hiragana" },
            { text: "muka", type: "kanji" },
            { text: "e ni ", type: "hiragana" },
            { text: "i", type: "kanji" },
            { text: "ku", type: "hiragana" }
        ],
        meaning: "Aku pasti akan menjemputmu."
    },
    {
        japanese: "そんなもう風化した 約束が 僕を支える",
        romaji: "Sonna mou fuuka shita yakusoku ga boku o sasaeru",
        romajiParts: [
            { text: "Sonna mou ", type: "hiragana" },
            { text: "fuuka", type: "kanji" },
            { text: " shita ", type: "hiragana" },
            { text: "yakusoku", type: "kanji" },
            { text: " ga ", type: "hiragana" },
            { text: "boku", type: "kanji" },
            { text: " o ", type: "hiragana" },
            { text: "sasa", type: "kanji" },
            { text: "eru", type: "hiragana" }
        ],
        meaning: "Pada janji yang sudah lapuk itu, aku bersandar."
    },
    {
        japanese: "はだしで歩く僕を見て 「可哀想だね」と皆に",
        romaji: "Hadashi de aruku boku o mite 'kawaisou da ne' to minna ni",
        romajiParts: [
            { text: "Hadashi de ", type: "hiragana" },
            { text: "aru", type: "kanji" },
            { text: "ku ", type: "hiragana" },
            { text: "boku", type: "kanji" },
            { text: " o ", type: "hiragana" },
            { text: "mi", type: "kanji" },
            { text: "te '", type: "hiragana" },
            { text: "kawaisou", type: "kanji" },
            { text: " da ne' to ", type: "hiragana" },
            { text: "minna", type: "kanji" },
            { text: " ni", type: "hiragana" }
        ],
        meaning: "Aku berjalan tanpa alas kaki, meskipun orang-orang berkata kasihan."
    },
    {
        japanese: "心配するよなフリして たとえ笑われても",
        romaji: "Shinpai suru you na furi shite tatoe warawarete mo",
        romajiParts: [
            { text: "Shinpai", type: "kanji" },
            { text: " suru you na ", type: "hiragana" },
            { text: "furi", type: "katakana" },
            { text: " shite tatoe ", type: "hiragana" },
            { text: "wara", type: "kanji" },
            { text: "warete mo", type: "hiragana" }
        ],
        meaning: "Oleh orang-orang yang pura-pura khawatir, meskipun aku ditertawakan."
    },
    {
        japanese: "今はまだ無駄な努力に 見えるよなそんな努力が",
        romaji: "Ima wa mada muda na doryoku ni mieru you na sonna doryoku ga",
        romajiParts: [
            { text: "Ima", type: "kanji" },
            { text: " wa mada ", type: "hiragana" },
            { text: "muda", type: "kanji" },
            { text: " na ", type: "hiragana" },
            { text: "doryoku", type: "kanji" },
            { text: " ni ", type: "hiragana" },
            { text: "mi", type: "kanji" },
            { text: "eru you na sonna ", type: "hiragana" },
            { text: "doryoku", type: "kanji" },
            { text: " ga", type: "hiragana" }
        ],
        meaning: "Usaha yang sekarang terlihat seperti sia-sia itu..."
    },
    {
        japanese: "積もり、 橋になると信じ…たとえ笑われても",
        romaji: "Tsumori, hashi ni naru to shinji... tatoe warawarete mo",
        romajiParts: [
            { text: "Tsu", type: "kanji" },
            { text: "mori, ", type: "hiragana" },
            { text: "hashi", type: "kanji" },
            { text: " ni naru to ", type: "hiragana" },
            { text: "shin", type: "kanji" },
            { text: "ji... tatoe ", type: "hiragana" },
            { text: "wara", type: "kanji" },
            { text: "warete mo", type: "hiragana" }
        ],
        meaning: "Aku percaya akan menjadi jembatan, meskipun ditertawakan."
    },
    {
        japanese: "それでも歩いて来たけど いつかふたりのその距離は",
        romaji: "Soredemo aruite kita kedo itsuka futari no sono kyori wa",
        romajiParts: [
            { text: "Soredemo ", type: "hiragana" },
            { text: "aru", type: "kanji" },
            { text: "ite ", type: "hiragana" },
            { text: "ki", type: "kanji" },
            { text: "ta kedo itsuka futari no sono ", type: "hiragana" },
            { text: "kyori", type: "kanji" },
            { text: " wa", type: "hiragana" }
        ],
        meaning: "Meskipun aku sudah berjalan, jarak antara kita berdua..."
    },
    {
        japanese: "夢に近づくそのたびに 少しづつ離れた…",
        romaji: "Yume ni chikazuku sono tabi ni sukoshi zutsu hanareta...",
        romajiParts: [
            { text: "Yume", type: "kanji" },
            { text: " ni ", type: "hiragana" },
            { text: "chika", type: "kanji" },
            { text: "zuku sono tabi ni ", type: "hiragana" },
            { text: "suko", type: "kanji" },
            { text: "shi zutsu ", type: "hiragana" },
            { text: "hana", type: "kanji" },
            { text: "reta...", type: "hiragana" }
        ],
        meaning: "Semakin dekat dengan mimpi, kenyataannya sedikit demi sedikit semakin jauh."
    },
    {
        japanese: "心も…ともに",
        romaji: "Kokoro mo... tomo ni",
        romajiParts: [
            { text: "Kokoro", type: "kanji" },
            { text: " mo... tomo ni", type: "hiragana" }
        ],
        meaning: "Perasaanmu... juga begitu."
    },
    {
        japanese: "元気ですか？",
        romaji: "Genki desu ka?",
        romajiParts: [
            { text: "Genki", type: "kanji" },
            { text: " desu ka?", type: "hiragana" }
        ],
        meaning: "Kau baik-baik saja?"
    },
    {
        japanese: "はだしで歩く僕を見て 「可哀想だね」と皆に",
        romaji: "Hadashi de aruku boku o mite 'kawaisou da ne' to minna ni",
        romajiParts: [
            { text: "Hadashi de ", type: "hiragana" },
            { text: "aru", type: "kanji" },
            { text: "ku ", type: "hiragana" },
            { text: "boku", type: "kanji" },
            { text: " o ", type: "hiragana" },
            { text: "mi", type: "kanji" },
            { text: "te '", type: "hiragana" },
            { text: "kawaisou", type: "kanji" },
            { text: " da ne' to ", type: "hiragana" },
            { text: "minna", type: "kanji" },
            { text: " ni", type: "hiragana" }
        ],
        meaning: "Aku berjalan tanpa alas kaki, meskipun orang-orang berkata kasihan."
    },
    {
        japanese: "心配するよなフリして たとえ笑われても",
        romaji: "Shinpai suru you na furi shite tatoe warawarete mo",
        romajiParts: [
            { text: "Shinpai", type: "kanji" },
            { text: " suru you na ", type: "hiragana" },
            { text: "furi", type: "katakana" },
            { text: " shite tatoe ", type: "hiragana" },
            { text: "wara", type: "kanji" },
            { text: "warete mo", type: "hiragana" }
        ],
        meaning: "Oleh orang-orang yang pura-pura khawatir, meskipun aku ditertawakan."
    },
    {
        japanese: "今はまだ無駄な努力に 見えるよなそんな努力が",
        romaji: "Ima wa mada muda na doryoku ni mieru you na sonna doryoku ga",
        romajiParts: [
            { text: "Ima", type: "kanji" },
            { text: " wa mada ", type: "hiragana" },
            { text: "muda", type: "kanji" },
            { text: " na ", type: "hiragana" },
            { text: "doryoku", type: "kanji" },
            { text: " ni ", type: "hiragana" },
            { text: "mi", type: "kanji" },
            { text: "eru you na sonna ", type: "hiragana" },
            { text: "doryoku", type: "kanji" },
            { text: " ga", type: "hiragana" }
        ],
        meaning: "Usaha yang sekarang terlihat seperti sia-sia itu..."
    },
    {
        japanese: "積もり、 橋になると信じ…たとえ笑われても",
        romaji: "Tsumori, hashi ni naru to shinji... tatoe warawarete mo",
        romajiParts: [
            { text: "Tsu", type: "kanji" },
            { text: "mori, ", type: "hiragana" },
            { text: "hashi", type: "kanji" },
            { text: " ni naru to ", type: "hiragana" },
            { text: "shin", type: "kanji" },
            { text: "ji... tatoe ", type: "hiragana" },
            { text: "wara", type: "kanji" },
            { text: "warete mo", type: "hiragana" }
        ],
        meaning: "Aku percaya akan menjadi jembatan, meskipun ditertawakan."
    },
    {
        japanese: "それでも歩いて来たけど それでも歩いて来たけど",
        romaji: "Soredemo aruite kita kedo soredemo aruite kita kedo",
        romajiParts: [
            { text: "Soredemo ", type: "hiragana" },
            { text: "aru", type: "kanji" },
            { text: "ite ", type: "hiragana" },
            { text: "ki", type: "kanji" },
            { text: "ta kedo soredemo ", type: "hiragana" },
            { text: "aru", type: "kanji" },
            { text: "ite ", type: "hiragana" },
            { text: "ki", type: "kanji" },
            { text: "ta kedo", type: "hiragana" }
        ],
        meaning: "Meskipun aku sudah berjalan, meskipun aku sudah berjalan..."
    },
    {
        japanese: "いざ君を振り返っても 約束の場所には",
        romaji: "Iza kimi o furikaette mo yakusoku no basho ni wa",
        romajiParts: [
            { text: "Iza ", type: "hiragana" },
            { text: "kimi", type: "kanji" },
            { text: " o ", type: "hiragana" },
            { text: "furi", type: "kanji" },
            { text: "kae", type: "kanji" },
            { text: "tte mo ", type: "hiragana" },
            { text: "yakusoku", type: "kanji" },
            { text: " no ", type: "hiragana" },
            { text: "basho", type: "kanji" },
            { text: " ni wa", type: "hiragana" }
        ],
        meaning: "Meskipun aku menoleh ke arahmu, di tempat yang dijanjikan itu..."
    },
    {
        japanese: "君はもう…いない",
        romaji: "Kimi wa mou... inai",
        romajiParts: [
            { text: "Kimi", type: "kanji" },
            { text: " wa mou... inai", type: "hiragana" }
        ],
        meaning: "Kau sudah... tidak ada."
    },
    {
        japanese: "君をいつか連れて行くと誓い",
        romaji: "Kimi o itsuka tsurete iku to chikai",
        romajiParts: [
            { text: "Kimi", type: "kanji" },
            { text: " o itsuka ", type: "hiragana" },
            { text: "tsu", type: "kanji" },
            { text: "rete ", type: "hiragana" },
            { text: "i", type: "kanji" },
            { text: "ku to ", type: "hiragana" },
            { text: "chika", type: "kanji" },
            { text: "i", type: "hiragana" }
        ],
        meaning: "Aku bersumpah suatu hari akan membawamu pergi."
    },
    {
        japanese: "歩き続けたのに…。",
        romaji: "Aruki tsuzuketa noni...",
        romajiParts: [
            { text: "Aru", type: "kanji" },
            { text: "ki ", type: "hiragana" },
            { text: "tsuzu", type: "kanji" },
            { text: "keta noni...", type: "hiragana" }
        ],
        meaning: "Padahal aku terus berjalan..."
    }
];

// 2. DATA BACAAN KANJI (Lengkap mencakup 108 Kanji di Lirik & Kosakata)
const kanjiReadings = {
    "其": {
        "kana": "そ",
        "romaji": "So",
        "word": "其処（そこ）",
        "meaning": "Di sana / tempat itu"
    },
    "処": {
        "kana": "こ / ところ",
        "romaji": "Ko",
        "word": "其処（そこ）",
        "meaning": "Tempat / di sana"
    },
    "辿": {
        "kana": "たど",
        "romaji": "Tado",
        "word": "辿り着く（たどりつく）",
        "meaning": "Mencapai / tiba setelah berjuang"
    },
    "着": {
        "kana": "つ / ちゃく",
        "romaji": "Tsu",
        "word": "辿り着く（たどりつく）",
        "meaning": "Tiba / sampai"
    },
    "僕": {
        "kana": "ぼく",
        "romaji": "Boku",
        "word": "僕（ぼく）",
        "meaning": "Aku / saya (pria / kasual)"
    },
    "白": {
        "kana": "しろ",
        "romaji": "Shiro",
        "word": "白い（しろい）",
        "meaning": "Putih"
    },
    "羽": {
        "kana": "はね",
        "romaji": "Hane",
        "word": "羽（はね）",
        "meaning": "Sayap / bulu"
    },
    "汚": {
        "kana": "よご",
        "romaji": "Yogo",
        "word": "汚れる（よごれる）",
        "meaning": "Kotor / ternoda"
    },
    "夢": {
        "kana": "ゆめ",
        "romaji": "Yume",
        "word": "夢（ゆめ）",
        "meaning": "Mimpi / cita-cita"
    },
    "叶": {
        "kana": "かな",
        "romaji": "Kana",
        "word": "叶える（かなえる）",
        "meaning": "Mewujudkan / mengabulkan"
    },
    "為": {
        "kana": "ため",
        "romaji": "Tame",
        "word": "為（ため）",
        "meaning": "Demi / untuk / alasan"
    },
    "挫": {
        "kana": "ざ",
        "romaji": "Za",
        "word": "挫折（ざせつ）",
        "meaning": "Patah arang / kemunduran"
    },
    "折": {
        "kana": "せつ / お",
        "romaji": "Setsu",
        "word": "挫折（ざせつ）",
        "meaning": "Patah / gagal"
    },
    "苦": {
        "kana": "く / くる",
        "romaji": "Ku",
        "word": "苦労（くろう）",
        "meaning": "Kesusahan / penderitaan"
    },
    "労": {
        "kana": "ろう",
        "romaji": "Rou",
        "word": "苦労（くろう）",
        "meaning": "Kerja keras / jerih payah"
    },
    "平": {
        "kana": "へい / たい",
        "romaji": "Hei",
        "word": "平気（へいき）",
        "meaning": "Tenang / datar / biasa saja"
    },
    "気": {
        "kana": "き",
        "romaji": "Ki",
        "word": "平気（へいき） / 元気（げんき）",
        "meaning": "Perasaan / hawa / kondisi"
    },
    "顔": {
        "kana": "かお / がお",
        "romaji": "Kao / Gao",
        "word": "笑顔（えがお） / 顔（かお）",
        "meaning": "Wajah / raut muka"
    },
    "呼": {
        "kana": "よ",
        "romaji": "Yo",
        "word": "呼ぶ（よぶ）",
        "meaning": "Memanggil / menyebut"
    },
    "君": {
        "kana": "きみ",
        "romaji": "Kimi",
        "word": "君（きみ）",
        "meaning": "Kamu / engkau"
    },
    "笑": {
        "kana": "え / わら",
        "romaji": "E / Wara",
        "word": "笑顔（えがお） / 笑う（わらう）",
        "meaning": "Senyum / tertawa"
    },
    "必": {
        "kana": "ひつ",
        "romaji": "Hitsu",
        "word": "必要（ひつよう）",
        "meaning": "Pasti / mutlak / wajib"
    },
    "要": {
        "kana": "よう / い",
        "romaji": "You",
        "word": "必要（ひつよう）",
        "meaning": "Perlu / penting / butuh"
    },
    "遠": {
        "kana": "とお",
        "romaji": "Too",
        "word": "遠回り（とおまわり）",
        "meaning": "Jauh / berjarak"
    },
    "回": {
        "kana": "まわ / かい",
        "romaji": "Mawa",
        "word": "遠回り（とおまわり）",
        "meaning": "Memutar / berkeliling"
    },
    "強": {
        "kana": "つよ / きょう",
        "romaji": "Tsuyo",
        "word": "強がり（つよがり）",
        "meaning": "Kuat / pura-pura tegar"
    },
    "本": {
        "kana": "ほん",
        "romaji": "Hon",
        "word": "本音（ほんね）",
        "meaning": "Asli / sejati / sumber"
    },
    "音": {
        "kana": "ね / おと",
        "romaji": "Ne / Oto",
        "word": "本音（ほんね）",
        "meaning": "Suara / bunyi / isi hati"
    },
    "混": {
        "kana": "ま",
        "romaji": "Ma",
        "word": "混じる（まじる）",
        "meaning": "Bercampur / terbaur"
    },
    "辛": {
        "kana": "つら / から",
        "romaji": "Tsura",
        "word": "辛い（つらい）",
        "meaning": "Pedih / menyakitkan / pahit"
    },
    "日": {
        "kana": "ひ / び",
        "romaji": "Hi / Bi",
        "word": "日々（ひび） / 日（ひ）",
        "meaning": "Hari / masa"
    },
    "頃": {
        "kana": "ころ",
        "romaji": "Koro",
        "word": "あの頃（あのころ）",
        "meaning": "Waktu / saat / masa itu"
    },
    "迎": {
        "kana": "むか",
        "romaji": "Muka",
        "word": "迎える（むかえる）",
        "meaning": "Menjemput / menyambut"
    },
    "行": {
        "kana": "い / ゆ",
        "romaji": "I / Yu",
        "word": "行く（いく）",
        "meaning": "Pergi"
    },
    "風": {
        "kana": "ふう / かぜ",
        "romaji": "Fuu",
        "word": "風化（ふうか）",
        "meaning": "Angin / lapuk terkikis waktu"
    },
    "化": {
        "kana": "か",
        "romaji": "Ka",
        "word": "風化（ふうか）",
        "meaning": "Berubah wujud / melapuk"
    },
    "約": {
        "kana": "やく",
        "romaji": "Yaku",
        "word": "約束（やくそく）",
        "meaning": "Janji / ikrar"
    },
    "束": {
        "kana": "そく / たば",
        "romaji": "Soku",
        "word": "約束（やくそく）",
        "meaning": "Ikatan / berkas / janji"
    },
    "支": {
        "kana": "ささ / し",
        "romaji": "Sasa",
        "word": "支える（ささえる）",
        "meaning": "Menopang / mendukung"
    },
    "歩": {
        "kana": "ある / ほ",
        "romaji": "Aru",
        "word": "歩く（あるく）",
        "meaning": "Berjalan"
    },
    "見": {
        "kana": "み",
        "romaji": "Mi",
        "word": "見る（みる） / 見える（みえる）",
        "meaning": "Melihat / tampak"
    },
    "可": {
        "kana": "か",
        "romaji": "Ka",
        "word": "可哀想（かわいそう）",
        "meaning": "Bisa / layak / patut"
    },
    "哀": {
        "kana": "わい / あい",
        "romaji": "Wai / Ai",
        "word": "可哀想（かわいそう）",
        "meaning": "Sedih / pilu / kasihan"
    },
    "想": {
        "kana": "そう / おも",
        "romaji": "Sou",
        "word": "可哀想（かわいそう）",
        "meaning": "Perasaan / pikiran / membayangkan"
    },
    "皆": {
        "kana": "みな / みんな",
        "romaji": "Minna",
        "word": "皆（みんな）",
        "meaning": "Semua orang / sekalian"
    },
    "心": {
        "kana": "しん / こころ",
        "romaji": "Shin / Kokoro",
        "word": "心（こころ） / 心配（しんぱい）",
        "meaning": "Hati / jiwa / perasaan"
    },
    "配": {
        "kana": "ぱい / はい",
        "romaji": "Pai",
        "word": "心配（しんぱい）",
        "meaning": "Cemas / khawatir / distribusi"
    },
    "今": {
        "kana": "いま / こん",
        "romaji": "Ima",
        "word": "今（いま）",
        "meaning": "Sekarang / saat ini"
    },
    "無": {
        "kana": "む / な",
        "romaji": "Mu",
        "word": "無駄（むだ）",
        "meaning": "Tidak ada / ketiadaan"
    },
    "駄": {
        "kana": "だ",
        "romaji": "Da",
        "word": "無駄（むだ）",
        "meaning": "Sia-sia / percuma"
    },
    "努": {
        "kana": "ど / つと",
        "romaji": "Do",
        "word": "努力（どりょく）",
        "meaning": "Berikhtiar / berusaha keras"
    },
    "力": {
        "kana": "りょく / ちから",
        "romaji": "Ryoku / Chikara",
        "word": "努力（どりょく）",
        "meaning": "Kekuatan / tenaga / daya"
    },
    "積": {
        "kana": "つ",
        "romaji": "Tsu",
        "word": "積もり（つもり） / 積もる",
        "meaning": "Menumpuk / bertimbun"
    },
    "橋": {
        "kana": "はし",
        "romaji": "Hashi",
        "word": "橋（はし）",
        "meaning": "Jembatan"
    },
    "信": {
        "kana": "しん",
        "romaji": "Shin",
        "word": "信じる（しんじる）",
        "meaning": "Percaya / meyakini"
    },
    "来": {
        "kana": "き / らい",
        "romaji": "Ki / Rai",
        "word": "来た（きた） / 未来（みらい）",
        "meaning": "Datang / masa depan"
    },
    "距": {
        "kana": "きょ",
        "romaji": "Kyo",
        "word": "距離（きょり）",
        "meaning": "Jarak"
    },
    "離": {
        "kana": "り / はな",
        "romaji": "Ri / Hana",
        "word": "距離（きょり） / 離れる（はなれる）",
        "meaning": "Menjauh / terpisah"
    },
    "近": {
        "kana": "ちか",
        "romaji": "Chika",
        "word": "近づく（ちかづく）",
        "meaning": "Dekat / mendekat"
    },
    "少": {
        "kana": "すこ / すく",
        "romaji": "Suko",
        "word": "少し（すこし）",
        "meaning": "Sedikit"
    },
    "元": {
        "kana": "げん / もと",
        "romaji": "Gen",
        "word": "元気（げんき）",
        "meaning": "Asal / sehat / semangat"
    },
    "振": {
        "kana": "ふ",
        "romaji": "Fu",
        "word": "振り返る（ふりかえる）",
        "meaning": "Menoleh / mengayun"
    },
    "返": {
        "kana": "かえ",
        "romaji": "Kae",
        "word": "振り返る（ふりかえる）",
        "meaning": "Kembali / membalas"
    },
    "場": {
        "kana": "ば / じょう",
        "romaji": "Ba",
        "word": "場所（ばしょ）",
        "meaning": "Tempat / arena"
    },
    "所": {
        "kana": "しょ / ところ",
        "romaji": "Sho / Tokoro",
        "word": "場所（ばしょ）",
        "meaning": "Tempat / lokasi"
    },
    "連": {
        "kana": "つ / れん",
        "romaji": "Tsu",
        "word": "連れて行く（つれていく）",
        "meaning": "Membawa / mengajak"
    },
    "誓": {
        "kana": "ちか",
        "romaji": "Chika",
        "word": "誓い（ちかい） / 誓う",
        "meaning": "Sumpah / berikrar"
    },
    "続": {
        "kana": "つづ",
        "romaji": "Tzudu",
        "word": "続ける（つづける）",
        "meaning": "Melanjutkan / meneruskan"
    },
    "未": {
        "kana": "み",
        "romaji": "Mi",
        "word": "未来（みらい）",
        "meaning": "Belum / masa depan"
    },
    "向": {
        "kana": "む",
        "romaji": "Mu",
        "word": "向かう（むかう）",
        "meaning": "Menuju / menghadap"
    },
    "走": {
        "kana": "はし",
        "romaji": "Hashi",
        "word": "走る（はしる）",
        "meaning": "Berlari"
    },
    "出": {
        "kana": "だ / で",
        "romaji": "Da / De",
        "word": "走り出す（はしりだす）",
        "meaning": "Keluar / mulai bergerak"
    },
    "一": {
        "kana": "いっ / いち",
        "romaji": "I / Ichi",
        "word": "一緒（いっしょ）",
        "meaning": "Satu / bersama"
    },
    "緒": {
        "kana": "しょ",
        "romaji": "Sho",
        "word": "一緒（いっしょ）",
        "meaning": "Bersama / ikatan"
    },
    "忘": {
        "kana": "わす",
        "romaji": "Wasu",
        "word": "忘れる（わすれる）",
        "meaning": "Melupakan / lupa"
    },
    "食": {
        "kana": "た",
        "romaji": "Ta",
        "word": "食べる（たべる）",
        "meaning": "Makan / makanan"
    },
    "飲": {
        "kana": "の",
        "romaji": "No",
        "word": "飲む（のむ）",
        "meaning": "Minum / minuman"
    },
    "寝": {
        "kana": "ね",
        "romaji": "Ne",
        "word": "寝る（ねる）",
        "meaning": "Tidur"
    },
    "起": {
        "kana": "お",
        "romaji": "O",
        "word": "起きる（おきる）",
        "meaning": "Bangun tidur"
    },
    "聞": {
        "kana": "き",
        "romaji": "Ki",
        "word": "聞く（きく）",
        "meaning": "Mendengar / menyimak"
    },
    "勉": {
        "kana": "べん",
        "romaji": "Ben",
        "word": "勉強（べんきょう）",
        "meaning": "Belajar / tekun"
    },
    "明": {
        "kana": "あした / めい",
        "romaji": "Ashita",
        "word": "明日（あした）",
        "meaning": "Terang / besok"
    },
    "昨": {
        "kana": "きのう / さく",
        "romaji": "Kinou",
        "word": "昨日（きのう）",
        "meaning": "Kemarin / masa lalu"
    },
    "友": {
        "kana": "とも",
        "romaji": "Tomo",
        "word": "友達（ともだち）",
        "meaning": "Teman / kawan"
    },
    "達": {
        "kana": "だち / たつ",
        "romaji": "Dachi",
        "word": "友達（ともだち）",
        "meaning": "Mencapai / jamak"
    },
    "家": {
        "kana": "いえ / うち",
        "romaji": "Ie",
        "word": "家（いえ）",
        "meaning": "Rumah / tempat tinggal"
    },
    "族": {
        "kana": "ぞく",
        "romaji": "Zoku",
        "word": "家族（かぞく）",
        "meaning": "Keluarga / suku"
    },
    "鞄": {
        "kana": "かばん",
        "romaji": "Kaban",
        "word": "鞄（かばん）",
        "meaning": "Tas"
    },
    "鍵": {
        "kana": "かぎ",
        "romaji": "Kagi",
        "word": "鍵（かぎ）",
        "meaning": "Kunci"
    },
    "時": {
        "kana": "とけい / じ",
        "romaji": "Tokei / Ji",
        "word": "時計（とけい）",
        "meaning": "Waktu / jam"
    },
    "計": {
        "kana": "けい",
        "romaji": "Kei",
        "word": "時計（とけい）",
        "meaning": "Mengukur / rencana"
    },
    "傘": {
        "kana": "かさ",
        "romaji": "Kasa",
        "word": "傘（かさ）",
        "meaning": "Payung"
    },
    "財": {
        "kana": "さい",
        "romaji": "Sai",
        "word": "財布（さいふ）",
        "meaning": "Harta / keuangan"
    },
    "布": {
        "kana": "ふ",
        "romaji": "Fu",
        "word": "財布（さいふ）",
        "meaning": "Kain / dompet"
    },
    "携": {
        "kana": "けい",
        "romaji": "Kei",
        "word": "携帯（けいたい）",
        "meaning": "Membawa / portabel"
    },
    "帯": {
        "kana": "たい",
        "romaji": "Tai",
        "word": "携帯（けいたい）",
        "meaning": "Ikat pinggang / zona"
    },
    "机": {
        "kana": "つくえ",
        "romaji": "Tsukue",
        "word": "机（つくえ）",
        "meaning": "Meja"
    },
    "椅": {
        "kana": "い",
        "romaji": "I",
        "word": "椅子（いす）",
        "meaning": "Kursi"
    },
    "子": {
        "kana": "す / こ",
        "romaji": "Su / Ko",
        "word": "椅子（いす） / 子供",
        "meaning": "Anak / imbuhan benda"
    },
    "車": {
        "kana": "くるま / しゃ",
        "romaji": "Kuruma",
        "word": "車（くるま） / 電車",
        "meaning": "Mobil / kendaraan"
    },
    "電": {
        "kana": "でん",
        "romaji": "Den",
        "word": "電車（でんしゃ）",
        "meaning": "Listrik"
    },
    "靴": {
        "kana": "くつ",
        "romaji": "Kutsu",
        "word": "靴（くつ）",
        "meaning": "Sepatu"
    },
    "服": {
        "kana": "ふく",
        "romaji": "Fuku",
        "word": "服（ふく）",
        "meaning": "Pakaian / baju"
    },
    "鉛": {
        "kana": "えん",
        "romaji": "En",
        "word": "鉛筆（えんぴつ）",
        "meaning": "Timbal / timah hitam"
    },
    "筆": {
        "kana": "ぴつ / ふで",
        "romaji": "Pitsu",
        "word": "鉛筆（えんぴつ）",
        "meaning": "Kuas / alat tulis"
    },
    "消": {
        "kana": "け",
        "romaji": "Ke",
        "word": "消しゴム（けしごむ）",
        "meaning": "Menghapus / padam"
    },
    "桃": {
        "kana": "もも",
        "romaji": "Momo",
        "word": "桃（もも）",
        "meaning": "Buah Persik (Peach)"
    },
    "梨": {
        "kana": "なし",
        "romaji": "Nashi",
        "word": "梨（なし）",
        "meaning": "Buah Pir Jepang"
    },
    // ==========================================
    // KANJI TAMBAHAN (NAMA HEWAN & PERCAKAPAN)
    // ==========================================
    "犬": {
        kana: "いぬ",
        romaji: "Inu",
        word: "犬（いぬ）",
        meaning: "Anjing"
    },
    "猫": {
        kana: "ねこ",
        romaji: "Neko",
        word: "猫（ねこ）",
        meaning: "Kucing"
    },
    "鳥": {
        kana: "とり",
        romaji: "Tori",
        word: "小鳥（ことり）/ 鳥",
        meaning: "Burung"
    },
    "魚": {
        kana: "さかな",
        romaji: "Sakana",
        word: "魚（さかな）",
        meaning: "Ikan"
    },
    "馬": {
        kana: "うま",
        romaji: "Uma",
        word: "馬（うま）",
        meaning: "Kuda"
    },
    "牛": {
        kana: "うし",
        romaji: "Ushi",
        word: "牛肉（ぎゅうにく）/ 牛",
        meaning: "Sapi / lembu"
    },
    "豚": {
        kana: "ぶた",
        romaji: "Buta",
        word: "豚肉（ぶたにく）/ 豚",
        meaning: "Babi"
    },
    "羊": {
        kana: "ひつじ",
        romaji: "Hitsuji",
        word: "羊（ひつじ）",
        meaning: "Domba"
    },
    "猿": {
        kana: "さる",
        romaji: "Saru",
        word: "猿（さる）",
        meaning: "Monyet / kera"
    },
    "熊": {
        kana: "くま",
        romaji: "Kuma",
        word: "熊（くま）",
        meaning: "Beruang"
    },
    "象": {
        kana: "ぞう",
        romaji: "Zou",
        word: "象（ぞう）",
        meaning: "Gajah"
    },
    "虎": {
        kana: "とら",
        romaji: "Tora",
        word: "虎（とら）",
        meaning: "Harimau"
    },
    "願": {
        kana: "ねが",
        romaji: "Nega",
        word: "願い（ねがい）/ お願い",
        meaning: "Memohon / meminta / berharap"
    },
    "名": {
        kana: "な",
        romaji: "Na",
        word: "名前（なまえ）",
        meaning: "Nama / ketenaran"
    },
    "前": {
        kana: "まえ",
        romaji: "Mae",
        word: "前（まえ）/ 名前",
        meaning: "Depan / sebelum / muka"
    },
    "何": {
        kana: "なに / なん",
        romaji: "Nani / Nan",
        word: "何（なに）",
        meaning: "Apa / berapa"
    },
    "度": {
        kana: "ど",
        romaji: "Do",
        word: "一度（いちど）/ 今度",
        meaning: "Kali / frekuensi / derajat"
    },
    "言": {
        kana: "い",
        romaji: "I",
        word: "言う（いう）/ 言って",
        meaning: "Berkata / berucap / perkataan"
    },
    "分": {
        kana: "わ / ふん",
        romaji: "Wa / Fun",
        word: "分かる（わかる）/ 五分",
        meaning: "Mengerti / paham / menit / bagian"
    },
    "腹": {
        kana: "なか / はら",
        romaji: "Naka / Hara",
        word: "お腹（おなか）",
        meaning: "Perut"
    },
    "空": {
        kana: "そら / す",
        romaji: "Sora / Su",
        word: "空（そら）/ お腹が空く",
        meaning: "Langit / kosong / hampa"
    },
    "喉": {
        kana: "のど",
        romaji: "Nodo",
        word: "喉（のど）",
        meaning: "Tenggorokan"
    },
    "渇": {
        kana: "かわ",
        romaji: "Kawa",
        word: "渇く（かわく）",
        meaning: "Haus / kering"
    },
    "待": {
        kana: "ま",
        romaji: "Ma",
        word: "待つ（まつ）/ 待って",
        meaning: "Menunggu / menanti"
    },
    "大": {
        kana: "だい / おお",
        romaji: "Dai / Oo",
        word: "大きい（おおきい）/ 大丈夫",
        meaning: "Besar / agung"
    },
    "丈": {
        kana: "じょう",
        romaji: "Jou",
        word: "丈夫（じょうぶ）/ 大丈夫",
        meaning: "Kuat / kokoh / ukuran"
    },
    "夫": {
        kana: "ぶ / おっと",
        romaji: "Bu / Otto",
        word: "大丈夫（だいじょうぶ）/ 夫",
        meaning: "Pria / suami / kokoh"
    },
    "会": {
        kana: "あ",
        romaji: "A",
        word: "会う（あう）/ 会いましょう",
        meaning: "Bertemu / jumpa"
    },
    "疲": {
        kana: "つか",
        romaji: "Tsuka",
        word: "疲れる（つかれる）/ お疲れ様",
        meaning: "Lelah / letih / penat"
    },
    "様": {
        kana: "さま",
        romaji: "Sama",
        word: "皆様（みなさま）/ お疲れ様",
        meaning: "Tuan / nyonya / bentuk kehormatan"
    },
    "助": {
        kana: "たす",
        romaji: "Tasu",
        word: "助ける（たすける）/ 助けて",
        meaning: "Menolong / membantu / menyelamatkan"
    },
    "語": {
        kana: "ご",
        romaji: "Go",
        word: "日本語（にほんご）/ 言語",
        meaning: "Bahasa / kata / percakapan"
    },
};

// 3. DATA HIRAGANA & KATAKANA DASAR (46 Huruf Gojūon)
const kanaData = [
    ["あ", "a", "ア"], ["い", "i", "イ"],
    ["う", "u", "ウ"], ["え", "e", "エ"],
    ["お", "o", "オ"],

    ["か", "ka", "カ"], ["き", "ki", "キ"],
    ["く", "ku", "ク"], ["け", "ke", "ケ"],
    ["こ", "ko", "コ"],

    ["さ", "sa", "サ"], ["し", "shi", "シ"],
    ["す", "su", "ス"], ["せ", "se", "セ"],
    ["そ", "so", "ソ"],

    ["た", "ta", "タ"], ["ち", "chi", "チ"],
    ["つ", "tsu", "ツ"], ["て", "te", "テ"],
    ["と", "to", "ト"],

    ["な", "na", "ナ"], ["に", "ni", "ニ"],
    ["ぬ", "nu", "ヌ"], ["ね", "ne", "ネ"],
    ["の", "no", "ノ"],

    ["は", "ha", "ハ"], ["ひ", "hi", "ヒ"],
    ["ふ", "fu", "フ"], ["へ", "he", "ヘ"],
    ["ほ", "ho", "ホ"],

    ["ま", "ma", "マ"], ["み", "mi", "ミ"],
    ["む", "mu", "ム"], ["め", "me", "メ"],
    ["も", "mo", "モ"],

    ["や", "ya", "ヤ"], ["ゆ", "yu", "ユ"],
    ["よ", "yo", "ヨ"],

    ["ら", "ra", "ラ"], ["り", "ri", "リ"],
    ["る", "ru", "ル"], ["れ", "re", "レ"],
    ["ろ", "ro", "ロ"],

    ["わ", "wa", "ワ"], ["を", "wo", "ヲ"],
    ["ん", "n", "ン"]
];

// Tabel Gojūon Terstruktur (Tepat 5 Kotak Per Baris)
// - Row ya: ya, [kosong], yu, [kosong], yo (2 kotak kosong)
// - Row wa: wa, [kosong], [kosong], [kosong], wo
// - Row n: n sendirian di akhir
const gojuonRows = [
    // a i u e o
    [["あ", "a", "ア"], ["い", "i", "イ"], ["う", "u", "ウ"], ["え", "e", "エ"], ["お", "o", "オ"]],
    // ka ki ku ke ko
    [["か", "ka", "カ"], ["き", "ki", "キ"], ["く", "ku", "ク"], ["け", "ke", "ケ"], ["こ", "ko", "コ"]],
    // sa shi su se so
    [["さ", "sa", "サ"], ["し", "shi", "シ"], ["す", "su", "ス"], ["せ", "se", "セ"], ["そ", "so", "ソ"]],
    // ta chi tsu te to
    [["た", "ta", "タ"], ["ち", "chi", "チ"], ["つ", "tsu", "ツ"], ["て", "te", "テ"], ["と", "to", "ト"]],
    // na ni nu ne no
    [["な", "na", "ナ"], ["に", "ni", "ニ"], ["ぬ", "nu", "ヌ"], ["ね", "ne", "ネ"], ["の", "no", "ノ"]],
    // ha hi fu he ho
    [["は", "ha", "ハ"], ["ひ", "hi", "ヒ"], ["ふ", "fu", "フ"], ["へ", "he", "ヘ"], ["ほ", "ho", "ホ"]],
    // ma mi mu me mo
    [["ま", "ma", "マ"], ["み", "mi", "ミ"], ["む", "mu", "ム"], ["め", "me", "メ"], ["も", "mo", "モ"]],
    // ya (kosong) yu (kosong) yo -> 5 kotak tampilan, 2 kotak kosong
    [["や", "ya", "ヤ"], null, ["ゆ", "yu", "ユ"], null, ["よ", "yo", "ヨ"]],
    // ra ri ru re ro
    [["ら", "ra", "ラ"], ["り", "ri", "リ"], ["る", "ru", "ル"], ["れ", "re", "レ"], ["ろ", "ro", "ロ"]],
    // wa (kosong) (kosong) (kosong) wo
    [["わ", "wa", "ワ"], null, null, null, ["を", "wo", "ヲ"]],
    // n sendirian di akhir pada kotak tengah (simetris & rapi dipandang)
    [null, null, ["ん", "n", "ン"], null, null]
];

// Tabel Dakuon & Handakuon Terstruktur (Tepat 5 Kotak Per Baris)
const dakuonRows = [
    // ga gi gu ge go
    [["が", "ga", "ガ"], ["ぎ", "gi", "ギ"], ["ぐ", "gu", "グ"], ["げ", "ge", "ゲ"], ["ご", "go", "ゴ"]],
    // za ji zu ze zo
    [["ざ", "za", "ザ"], ["じ", "ji", "ジ"], ["ず", "zu", "ズ"], ["ぜ", "ze", "ゼ"], ["ぞ", "zo", "ゾ"]],
    // da ji dzu de do
    [["だ", "da", "ダ"], ["ぢ", "ji", "ヂ"], ["づ", "dzu", "ヅ"], ["で", "de", "デ"], ["ど", "do", "ド"]],
    // ba bi bu be bo
    [["ば", "ba", "バ"], ["び", "bi", "ビ"], ["ぶ", "bu", "ブ"], ["べ", "be", "ベ"], ["ぼ", "bo", "ボ"]],
    // pa pi pu pe po (Handakuon)
    [["ぱ", "pa", "パ"], ["ぴ", "pi", "ピ"], ["ぷ", "pu", "プ"], ["ぺ", "pe", "ペ"], ["ぽ", "po", "ポ"]]
];

// Tabel Yōon (Kombinasi Huruf Baris 'i' + ya/yu/yo kecil) - 3 Kotak Per Baris
const yoonRows = [
    [["きゃ", "kya", "キャ"], ["きゅ", "kyu", "キュ"], ["きょ", "kyo", "キョ"]],
    [["しゃ", "sha", "シャ"], ["しゅ", "shu", "シュ"], ["しょ", "sho", "ショ"]],
    [["ちゃ", "cha", "チャ"], ["ちゅ", "chu", "チュ"], ["ちょ", "cho", "チョ"]],
    [["にゃ", "nya", "ニャ"], ["にゅ", "nyu", "ニュ"], ["にょ", "nyo", "ニョ"]],
    [["ひゃ", "hya", "ヒャ"], ["ひゅ", "hyu", "ヒュ"], ["ひょ", "hyo", "ヒョ"]],
    [["みゃ", "mya", "ミャ"], ["みゅ", "myu", "ミュ"], ["みょ", "myo", "ミョ"]],
    [["りゃ", "rya", "リャ"], ["りゅ", "ryu", "リュ"], ["りょ", "ryo", "リョ"]],
    [["ぎゃ", "gya", "ギャ"], ["ぎゅ", "gyu", "ギュ"], ["ぎょ", "gyo", "ギョ"]],
    [["じゃ", "ja", "ジャ"], ["じゅ", "ju", "ジュ"], ["じょ", "jo", "ジョ"]],
    [["びゃ", "bya", "ビャ"], ["びゅ", "byu", "ビュ"], ["びょ", "byo", "ビョ"]],
    [["ぴゃ", "pya", "ピャ"], ["ぴゅ", "pyu", "ピュ"], ["ぴょ", "pyo", "ピョ"]]
];

// Panduan Lengkap Cara Baca Huruf Kecil & Tanda Khusus
const smallKanaGuide = [
    {
        id: "sokuon",
        category: "促音 (Sokuon) - Tsu Kecil",
        hira: "っ",
        kata: "ッ",
        romaji: "tsu kecil (konsonan ganda)",
        description: "Huruf 'っ' (Hiragana) dan 'ッ' (Katakana) berukuran sekitar 1/4 lebih kecil dari huruf normal 'つ / ツ'. Huruf ini TIDAK dibaca sebagai 'tsu', melainkan berfungsi sebagai tanda jeda atau hentian sejenak (1 ketukan / 1 mora) yang melipatgandakan bunyi konsonan berikutnya (konsonan ganda: kk, ss, tt, pp, dd).",
        rules: [
            "Tahan nafas / hentikan suara sejenak 1 ketukan sebelum mengucapkan konsonan berikutnya.",
            "Sebelum konsonan T: き + っ + と = きっと (kitto) — Bukan kito, ada jeda penekanan konsonan 't'.",
            "Sebelum konsonan K: が + っ + こ + う = がっこう (gakkou) — Jeda penekanan pada konsonan 'k'.",
            "Sebelum konsonan S: ざ + っ + し = ざっし (zasshi) — Jeda penekanan pada konsonan 's'.",
            "Sebelum konsonan P: き + っ + ぷ = きっぷ (kippu) — Jeda penekanan pada konsonan 'p'."
        ],
        examples: [
            { jp: "きっと", romaji: "kitto", meaning: "Pasti / Tentu" },
            { jp: "がっこう", romaji: "gakkou", meaning: "Sekolah" },
            { jp: "きって", romaji: "kitte", meaning: "Perangko" },
            { jp: "混じってて", romaji: "majittete", meaning: "Bercampur (dari lirik lagu)" },
            { jp: "ベッド", romaji: "beddo", meaning: "Tempat tidur (bed)" },
            { jp: "カップ", romaji: "kappu", meaning: "Cangkir (cup)" },
            { jp: "サッカー", romaji: "sakkaa", meaning: "Sepak bola (soccer)" },
            { jp: "チケット", romaji: "chiketto", meaning: "Tiket (ticket)" }
        ]
    },
    {
        id: "yoon",
        category: "拗音 (Yōon) - Ya, Yu, Yo Kecil",
        hira: "ゃ ゅ ょ",
        kata: "ャ ュ ョ",
        romaji: "ya, yu, yo (kecil)",
        description: "Huruf 'ゃ/ャ', 'ゅ/ュ', 'ょ/ョ' ditulis berukuran kecil di sebelah kanan huruf vokal baris 'i' (き, し, ち, に, ひ, み, り, ぎ, じ, び, ぴ). Huruf ini meleburkan vokal 'i' menjadi satu suku kata kombinasi berakhiran bunyi -ya, -yu, atau -yo (diucapkan dalam 1 ketukan lancar).",
        rules: [
            "Huruf baris 'i' + ゃ / ャ = Dibaca melebur berakhiran bunyi '-ya' (Contoh: き + ゃ = kya, bukan ki-ya).",
            "Huruf baris 'i' + ゅ / ュ = Dibaca melebur berakhiran bunyi '-yu' (Contoh: し + ゅ = shu, bukan shi-yu).",
            "Huruf baris 'i' + ょ / ョ = Dibaca melebur berakhiran bunyi '-yo' (Contoh: ち + ょ = cho, き + ょ = kyo).",
            "Pada Katakana, sering dipakai untuk kata modern luar negeri seperti シャツ (shatsu) dan ジュース (juusu)."
        ],
        examples: [
            { jp: "お茶（おちゃ）", romaji: "ocha", meaning: "Teh Jepang" },
            { jp: "牛乳（ぎゅうにゅう）", romaji: "gyuunyuu", meaning: "Susu sapi" },
            { jp: "今日（きょう）", romaji: "kyou", meaning: "Hari ini" },
            { jp: "勉強（べんきょう）", romaji: "benkyou", meaning: "Belajar" },
            { jp: "シャツ", romaji: "shatsu", meaning: "Kemeja (shirt)" },
            { jp: "ジュース", romaji: "juusu", meaning: "Jus (juice)" },
            { jp: "チョコ", romaji: "choko", meaning: "Cokelat (chocolate)" },
            { jp: "メニュー", romaji: "menyuu", meaning: "Menu" }
        ]
    },
    {
        id: "small-vowels",
        category: "特殊音 (Tokushuon) - Vokal Kecil (a, i, u, e, o)",
        hira: "ぁ ぃ ぅ ぇ ぉ",
        kata: "ァ ィ ゥ ェ ォ",
        romaji: "a, i, u, e, o (kecil)",
        description: "Vokal kecil (a, i, u, e, o) terutama digunakan dalam Katakana untuk membentuk bunyi fonem bahasa asing (kata serapan luar negeri) yang aslinya tidak terdapat dalam bahasa Jepang asli. Huruf kecil ini mengubah bunyi vokal konsonan sebelumnya.",
        rules: [
            "Bunyi F: フ (fu) + ァ/ィ/ェ/ォ = ファ (fa), フィ (fi), フェ (fe), フォ (fo).",
            "Bunyi TI / TU: テ (te) + ィ = ティ (ti), ト (to) + ゥ = トゥ (tu).",
            "Bunyi DI / DU: デ (de) + ィ = ディ (di), ド (do) + ゥ = ドゥ (du).",
            "Bunyi SHE / CHE: シ (shi) + ェ = シェ (she), チ (chi) + ェ = チェ (che).",
            "Bunyi W: ウ (u) + ィ/ェ/ォ = ウィ (wi), ウェ (we), ウォ (wo).",
            "Bunyi V: ヴ (vu) + ァ/ィ/ぅ/ぇ/ォ = ヴァ (va), ヴィ (vi), ヴェ (ve), ヴォ (vo)."
        ],
        examples: [
            { jp: "ファイト", romaji: "faito", meaning: "Semangat (fight)" },
            { jp: "パーティー", romaji: "paatii", meaning: "Pesta (party)" },
            { jp: "カフェ", romaji: "kafe", meaning: "Kafe (cafe)" },
            { jp: "フォーク", romaji: "fooku", meaning: "Garpu (fork)" },
            { jp: "シェア", romaji: "shea", meaning: "Berbagi (share)" },
            { jp: "チェック", romaji: "chekku", meaning: "Periksa (check)" },
            { jp: "ウィキ", romaji: "wiki", meaning: "Wiki" },
            { jp: "ディズニー", romaji: "dizunii", meaning: "Disney" }
        ]
    },
    {
        id: "choonpu-particles",
        category: "Tanda Pemanjang (ー) & Partikel Khusus",
        hira: "は (wa) / を (o) / へ (e)",
        kata: "ー (Chōonpu)",
        romaji: "Pemanjang vokal & Perubahan bunyi partikel",
        description: "Aturan bunyi khusus yang wajib diketahui pembelajar bahasa Jepang untuk pembacaan Katakana dan partikel Hiragana.",
        rules: [
            "Tanda 'ー' (Chōonpu) pada Katakana memperpanjang vokal huruf sebelumnya selama 1 ketukan/mora penuh.",
            "Partikel 'は' (ha) jika berfungsi sebagai partikel penanda topik/subjek kalimat DIBACA 'wa'.",
            "Partikel 'を' (wo) jika berfungsi sebagai partikel penanda objek kalimat DIBACA 'o'.",
            "Partikel 'へ' (he) jika berfungsi sebagai partikel penunjuk arah tujuan gerak DIBACA 'e'."
        ],
        examples: [
            { jp: "コーヒー", romaji: "koohii", meaning: "Kopi (vokal o dan i dipanjangkan)" },
            { jp: "ケーキ", romaji: "keeki", meaning: "Kue (cake)" },
            { jp: "スーパー", romaji: "suupaa", meaning: "Supermarket" },
            { jp: "僕は（ぼくは）", romaji: "boku wa", meaning: "Saya (sebagai subjek)" },
            { jp: "夢を（ゆめを）", romaji: "yume o", meaning: "Mimpi (sebagai objek)" },
            { jp: "其処へ（そこへ）", romaji: "soko e", meaning: "Ke sana (sebagai arah tujuan)" }
        ]
    }
];

// 4. DATA HIRAGANA & KATAKANA DAKUON, HANDAKUON, SOKUON, & SMALL KANA
const kanaDakuonData = [
    // Ga, Gi, Gu, Ge, Go
    ["が", "ga", "ガ", "Huruf Hiragana Dakuon 'ga' / Partikel subjek", "〜が（ga）/ がっこう"],
    ["ぎ", "gi", "ギ", "Huruf Hiragana Dakuon 'gi'", "ぎんこう（ginkou）"],
    ["ぐ", "gu", "グ", "Huruf Hiragana Dakuon 'gu'", "ぐあい（guai）"],
    ["げ", "ge", "ゲ", "Huruf Hiragana Dakuon 'ge'", "げんき（genki）"],
    ["ご", "go", "ゴ", "Huruf Hiragana Dakuon 'go'", "ごはん（gohan）"],

    // Za, Ji, Zu, Ze, Zo
    ["ざ", "za", "ザ", "Huruf Hiragana Dakuon 'za'", "いざ / ざっし（zasshi）"],
    ["じ", "ji", "ジ", "Huruf Hiragana Dakuon 'ji'", "信じる / じかん（jikan）"],
    ["ず", "zu", "ズ", "Huruf Hiragana Dakuon 'zu'", "ハズ / ちず（chizu）"],
    ["ぜ", "ze", "ゼ", "Huruf Hiragana Dakuon 'ze'", "ぜんぶ（zenbu）"],
    ["ぞ", "zo", "ゾ", "Huruf Hiragana Dakuon 'zo'", "ぞう（zou）"],

    // Da, Dji, Dzu, De, Do
    ["だ", "da", "ダ", "Huruf Hiragana Dakuon 'da' / Kopula penegas", "〜だ（da）/ だから"],
    ["ぢ", "ji", "ヂ", "Huruf Hiragana Dakuon 'dji/ji'", "はなぢ（hanaji）"],
    ["づ", "dzu", "ヅ", "Huruf Hiragana Dakuon 'dzu/zu'", "近づく / 少しづつ"],
    ["で", "de", "デ", "Huruf Hiragana Dakuon 'de' / Partikel di & dengan", "はだしで / どこで（de）"],
    ["ど", "do", "ド", "Huruf Hiragana Dakuon 'do'", "ほどに / どこ（doko）"],

    // Ba, Bi, Bu, Be, Bo
    ["ば", "ba", "バ", "Huruf Hiragana Dakuon 'ba'", "ならば / ばしょ（basho）"],
    ["び", "bi", "ビ", "Huruf Hiragana Dakuon 'bi'", "日々（ひび）/ びょういん"],
    ["ぶ", "bu", "ブ", "Huruf Hiragana Dakuon 'bu'", "呼ぶ / ぶどう（budou）"],
    ["べ", "be", "ベ", "Huruf Hiragana Dakuon 'be'", "すべて / べんきょう"],
    ["ぼ", "bo", "ボ", "Huruf Hiragana Dakuon 'bo'", "僕（ぼく）/ ぼうし"],

    // Pa, Pi, Pu, Pe, Po (Handakuon)
    ["ぱ", "pa", "パ", "Huruf Hiragana Handakuon 'pa'", "心配（しんぱい）/ ぱん"],
    ["ぴ", "pi", "ピ", "Huruf Hiragana Handakuon 'pi'", "えんぴつ / ぴかぴか"],
    ["ぷ", "pu", "プ", "Huruf Hiragana Handakuon 'pu'", "てんぷら（tenpura）"],
    ["ぺ", "pe", "ペ", "Huruf Hiragana Handakuon 'pe'", "ぺん（pen）"],
    ["ぽ", "po", "ポ", "Huruf Hiragana Handakuon 'po'", "ぽけっと（poketto）"],

    // Sokuon & Small Kana
    ["っ", "tsu (konsonan ganda)", "ッ", "Tanda jeda sokuon (pembuat konsonan ganda tt/kk/ss/pp)", "きっと（kitto）/ 混じってて"],
    ["ゃ", "ya (kecil)", "ャ", "Yōon pembentuk bunyi gabungan (kya, sha, cha)", "おちゃ（ocha）/ でんしゃ"],
    ["ゅ", "yu (kecil)", "ュ", "Yōon pembentuk bunyi gabungan (kyu, shu, chu)", "ぎゅうにゅう（gyuunyuu）"],
    ["ょ", "yo (kecil)", "ョ", "Yōon pembentuk bunyi gabungan (kyo, sho, cho)", "きょう（kyou）/ べんきょう"],
    ["ぁ", "a (kecil)", "ァ", "Vokal kecil pelunak bunyi", "ふぁ（fa）"],
    ["ぃ", "i (kecil)", "ィ", "Vokal kecil pelunak bunyi", "てぃ（ti）"],
    ["ぅ", "u (kecil)", "ゥ", "Vokal kecil pelunak bunyi", "とぅ（tu）"],
    ["ぇ", "e (kecil)", "ェ", "Vokal kecil pelunak bunyi", "しぇ（she）"],
    ["ぉ", "o (kecil)", "ォ", "Vokal kecil pelunak bunyi", "ふぉ（fo）"],
    ["ー", "chouonpu (pemanjang vokal)", "ー", "Tanda pemanjang bunyi vokal pada Katakana", "コーヒー（kouhii）/ マンゴー"]
];

// Peta lengkap untuk lookup Kana interaktif (Gojūon, Dakuon, Handakuon, Sokuon)
const kanaLookup = {};

// Registrasi Kana Dasar
kanaData.forEach(([hira, romaji, kata]) => {
    kanaLookup[hira] = {
        type: "Hiragana",
        char: hira,
        romaji: romaji,
        counterpart: kata,
        word: `${hira} (${romaji})`,
        meaning: `Huruf Hiragana '${hira}' (${romaji})`
    };
    kanaLookup[kata] = {
        type: "Katakana",
        char: kata,
        romaji: romaji,
        counterpart: hira,
        word: `${kata} (${romaji})`,
        meaning: `Huruf Katakana '${kata}' (${romaji})`
    };
});

// Registrasi Kana Dakuon (Teng-teng), Handakuon (Maru), & Sokuon
kanaDakuonData.forEach(([hira, romaji, kata, meaning, word]) => {
    kanaLookup[hira] = {
        type: "Hiragana",
        char: hira,
        romaji: romaji,
        counterpart: kata,
        word: word,
        meaning: meaning
    };
    kanaLookup[kata] = {
        type: "Katakana",
        char: kata,
        romaji: romaji,
        counterpart: hira,
        word: word,
        meaning: meaning.replace("Hiragana", "Katakana")
    };
});

// Registrasi Kana Yōon (Kombinasi)
yoonRows.forEach(row => {
    row.forEach(([hira, romaji, kata]) => {
        kanaLookup[hira] = {
            type: "Hiragana (Yōon)",
            char: hira,
            romaji: romaji,
            counterpart: kata,
            word: `${hira} (${romaji})`,
            meaning: `Bunyi gabungan Hiragana '${hira}' (${romaji})`
        };
        kanaLookup[kata] = {
            type: "Katakana (Yōon)",
            char: kata,
            romaji: romaji,
            counterpart: hira,
            word: `${kata} (${romaji})`,
            meaning: `Bunyi gabungan Katakana '${kata}' (${romaji})`
        };
    });
});

// Tambahan kata-kata khas/frasa dalam lirik agar interaktif
const specialWordsLookup = {
    "しあわせ": {
        kana: "しあわせ",
        romaji: "Shiawase",
        word: "しあわせ（幸せ）",
        meaning: "Kebahagiaan / bahagia"
    },
    "はだし": {
        kana: "はだし",
        romaji: "Hadashi",
        word: "はだし（裸足）",
        meaning: "Kaki telanjang / tanpa alas kaki"
    },
    "フリ": {
        kana: "ふり",
        romaji: "Furi",
        word: "フリ（ふり）",
        meaning: "Pura-pura / bersikap seolah-olah"
    },
    "ハズ": {
        kana: "はず",
        romaji: "Hazu",
        word: "ハズ（はず）",
        meaning: "Seharusnya / mestinya"
    },
    "かまいやしない": {
        kana: "かまいやしない",
        romaji: "Kamaiya shinai",
        word: "構いやしない",
        meaning: "Tidak peduli / masa bodoh"
    },
    "々": {
        kana: "くりかえし",
        romaji: "Noma / Kurikaeshi",
        word: "々（日々 = ひび）",
        meaning: "Tanda pengulangan kanji sebelumnya"
    }
};

// 5. DAFTAR KOSAKATA & HAFALAN (Harian, Benda & Barang, Buah-buahan, Lirik)
const vocabularyData = [
    // ==========================================
    // KATEGORI: KOSAKATA HARIAN (DAILY VOCABULARY)
    // ==========================================
    {
        word: "おはよう",
        kana: "おはよう",
        romaji: "Ohayou",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "おはよう", type: "hiragana" }],
        romajiParts: [{ text: "Ohayou", type: "hiragana" }],
        meaning: "Selamat pagi"
    },
    {
        word: "こんにちは",
        kana: "こんにちは",
        romaji: "Konnichiwa",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "こんにちは", type: "hiragana" }],
        romajiParts: [{ text: "Konnichiwa", type: "hiragana" }],
        meaning: "Halo / Selamat siang"
    },
    {
        word: "こんばんは",
        kana: "こんばんは",
        romaji: "Konbanwa",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "こんばんは", type: "hiragana" }],
        romajiParts: [{ text: "Konbanwa", type: "hiragana" }],
        meaning: "Selamat malam"
    },
    {
        word: "ありがとう",
        kana: "ありがとう",
        romaji: "Arigatou",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "ありがとう", type: "hiragana" }],
        romajiParts: [{ text: "Arigatou", type: "hiragana" }],
        meaning: "Terima kasih"
    },
    {
        word: "すみません",
        kana: "すみません",
        romaji: "Sumimasen",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "すみません", type: "hiragana" }],
        romajiParts: [{ text: "Sumimasen", type: "hiragana" }],
        meaning: "Permisi / Maaf"
    },
    {
        word: "食べる",
        kana: "たべる",
        romaji: "Taberu",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [
            { text: "た", type: "kanji" },
            { text: "べる", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Ta", type: "kanji" },
            { text: "beru", type: "hiragana" }
        ],
        meaning: "Makan"
    },
    {
        word: "飲む",
        kana: "のむ",
        romaji: "Nomu",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [
            { text: "の", type: "kanji" },
            { text: "む", type: "hiragana" }
        ],
        romajiParts: [
            { text: "No", type: "kanji" },
            { text: "mu", type: "hiragana" }
        ],
        meaning: "Minum"
    },
    {
        word: "寝る",
        kana: "ねる",
        romaji: "Neru",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [
            { text: "ね", type: "kanji" },
            { text: "る", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Ne", type: "kanji" },
            { text: "ru", type: "hiragana" }
        ],
        meaning: "Tidur"
    },
    {
        word: "起きる",
        kana: "おきる",
        romaji: "Okiru",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [
            { text: "お", type: "kanji" },
            { text: "きる", type: "hiragana" }
        ],
        romajiParts: [
            { text: "O", type: "kanji" },
            { text: "kiru", type: "hiragana" }
        ],
        meaning: "Bangun tidur"
    },
    {
        word: "見る",
        kana: "みる",
        romaji: "Miru",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [
            { text: "み", type: "kanji" },
            { text: "る", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Mi", type: "kanji" },
            { text: "ru", type: "hiragana" }
        ],
        meaning: "Melihat / Menonton"
    },
    {
        word: "聞く",
        kana: "きく",
        romaji: "Kiku",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [
            { text: "き", type: "kanji" },
            { text: "く", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Ki", type: "kanji" },
            { text: "ku", type: "hiragana" }
        ],
        meaning: "Mendengar / Bertanya"
    },
    {
        word: "勉強する",
        kana: "べんきょうする",
        romaji: "Benkyou suru",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [
            { text: "べんきょう", type: "kanji" },
            { text: "する", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Benkyou", type: "kanji" },
            { text: " suru", type: "hiragana" }
        ],
        meaning: "Belajar"
    },
    {
        word: "今日",
        kana: "きょう",
        romaji: "Kyou",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "きょう", type: "kanji" }],
        romajiParts: [{ text: "Kyou", type: "kanji" }],
        meaning: "Hari ini"
    },
    {
        word: "明日",
        kana: "あした",
        romaji: "Ashita",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "あした", type: "kanji" }],
        romajiParts: [{ text: "Ashita", type: "kanji" }],
        meaning: "Besok"
    },
    {
        word: "昨日",
        kana: "きのう",
        romaji: "Kinou",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "きのう", type: "kanji" }],
        romajiParts: [{ text: "Kinou", type: "kanji" }],
        meaning: "Kemarin"
    },
    {
        word: "友達",
        kana: "ともだち",
        romaji: "Tomodachi",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "ともだち", type: "kanji" }],
        romajiParts: [{ text: "Tomodachi", type: "kanji" }],
        meaning: "Teman / Sahabat"
    },
    {
        word: "家族",
        kana: "かぞく",
        romaji: "Kazoku",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "かぞく", type: "kanji" }],
        romajiParts: [{ text: "Kazoku", type: "kanji" }],
        meaning: "Keluarga"
    },
    {
        word: "家",
        kana: "いえ",
        romaji: "Ie",
        category: "daily",
        categoryLabel: "Harian",
        kanaParts: [{ text: "いえ", type: "kanji" }],
        romajiParts: [{ text: "Ie", type: "kanji" }],
        meaning: "Rumah"
    },

    // ==========================================
    // KATEGORI: NAMA BENDA & BARANG (OBJECTS & ITEMS)
    // ==========================================
    {
        word: "本",
        kana: "ほん",
        romaji: "Hon",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "ほん", type: "kanji" }],
        romajiParts: [{ text: "Hon", type: "kanji" }],
        meaning: "Buku"
    },
    {
        word: "鞄",
        kana: "かばん",
        romaji: "Kaban",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "かばん", type: "kanji" }],
        romajiParts: [{ text: "Kaban", type: "kanji" }],
        meaning: "Tas"
    },
    {
        word: "鍵",
        kana: "かぎ",
        romaji: "Kagi",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "かぎ", type: "kanji" }],
        romajiParts: [{ text: "Kagi", type: "kanji" }],
        meaning: "Kunci"
    },
    {
        word: "時計",
        kana: "とけい",
        romaji: "Tokei",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "とけい", type: "kanji" }],
        romajiParts: [{ text: "Tokei", type: "kanji" }],
        meaning: "Jam / Arloji"
    },
    {
        word: "傘",
        kana: "かさ",
        romaji: "Kasa",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "かさ", type: "kanji" }],
        romajiParts: [{ text: "Kasa", type: "kanji" }],
        meaning: "Payung"
    },
    {
        word: "財布",
        kana: "さいふ",
        romaji: "Saifu",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "さいふ", type: "kanji" }],
        romajiParts: [{ text: "Saifu", type: "kanji" }],
        meaning: "Dompet"
    },
    {
        word: "携帯",
        kana: "けいたい",
        romaji: "Keitai",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "けいたい", type: "kanji" }],
        romajiParts: [{ text: "Keitai", type: "kanji" }],
        meaning: "Ponsel / HP"
    },
    {
        word: "机",
        kana: "つくえ",
        romaji: "Tsukue",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "つくえ", type: "kanji" }],
        romajiParts: [{ text: "Tsukue", type: "kanji" }],
        meaning: "Meja"
    },
    {
        word: "椅子",
        kana: "いす",
        romaji: "Isu",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "いす", type: "kanji" }],
        romajiParts: [{ text: "Isu", type: "kanji" }],
        meaning: "Kursi"
    },
    {
        word: "車",
        kana: "くるま",
        romaji: "Kuruma",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "くるま", type: "kanji" }],
        romajiParts: [{ text: "Kuruma", type: "kanji" }],
        meaning: "Mobil"
    },
    {
        word: "電車",
        kana: "でんしゃ",
        romaji: "Densha",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "でんしゃ", type: "kanji" }],
        romajiParts: [{ text: "Densha", type: "kanji" }],
        meaning: "Kereta api"
    },
    {
        word: "靴",
        kana: "くつ",
        romaji: "Kutsu",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "くつ", type: "kanji" }],
        romajiParts: [{ text: "Kutsu", type: "kanji" }],
        meaning: "Sepatu"
    },
    {
        word: "服",
        kana: "ふく",
        romaji: "Fuku",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "ふく", type: "kanji" }],
        romajiParts: [{ text: "Fuku", type: "kanji" }],
        meaning: "Pakaian / Baju"
    },
    {
        word: "鉛筆",
        kana: "えんぴつ",
        romaji: "Enpitsu",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [{ text: "えんぴつ", type: "kanji" }],
        romajiParts: [{ text: "Enpitsu", type: "kanji" }],
        meaning: "Pensil"
    },
    {
        word: "消しゴム",
        kana: "けしゴム",
        romaji: "Keshigomu",
        category: "objects",
        categoryLabel: "Benda",
        kanaParts: [
            { text: "けし", type: "hiragana" },
            { text: "ゴム", type: "katakana" }
        ],
        romajiParts: [
            { text: "Keshi", type: "hiragana" },
            { text: "gomu", type: "katakana" }
        ],
        meaning: "Penghapus"
    },

    // ==========================================
    // KATEGORI: NAMA BUAH-BUAHAN (FRUITS / 果物)
    // ==========================================
    {
        word: "りんご",
        kana: "りんご",
        romaji: "Ringo",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "りんご", type: "hiragana" }],
        romajiParts: [{ text: "Ringo", type: "hiragana" }],
        meaning: "Apel"
    },
    {
        word: "バナナ",
        kana: "バナナ",
        romaji: "Banana",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "バナナ", type: "katakana" }],
        romajiParts: [{ text: "Banana", type: "katakana" }],
        meaning: "Pisang"
    },
    {
        word: "みかん",
        kana: "みかん",
        romaji: "Mikan",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "みかん", type: "hiragana" }],
        romajiParts: [{ text: "Mikan", type: "hiragana" }],
        meaning: "Jeruk (Mandarin / Mikan)"
    },
    {
        word: "すいか",
        kana: "すいか",
        romaji: "Suika",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "すいか", type: "hiragana" }],
        romajiParts: [{ text: "Suika", type: "hiragana" }],
        meaning: "Semangka"
    },
    {
        word: "いちご",
        kana: "いちご",
        romaji: "Ichigo",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "いちご", type: "hiragana" }],
        romajiParts: [{ text: "Ichigo", type: "hiragana" }],
        meaning: "Stroberi"
    },
    {
        word: "ぶどう",
        kana: "ぶどう",
        romaji: "Budou",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "ぶどう", type: "hiragana" }],
        romajiParts: [{ text: "Budou", type: "hiragana" }],
        meaning: "Anggur"
    },
    {
        word: "メロン",
        kana: "メロン",
        romaji: "Meron",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "メロン", type: "katakana" }],
        romajiParts: [{ text: "Meron", type: "katakana" }],
        meaning: "Melon"
    },
    {
        word: "マンゴー",
        kana: "マンゴー",
        romaji: "Mangou",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "マンゴー", type: "katakana" }],
        romajiParts: [{ text: "Mangou", type: "katakana" }],
        meaning: "Mangga"
    },
    {
        word: "桃",
        kana: "もも",
        romaji: "Momo",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "もも", type: "kanji" }],
        romajiParts: [{ text: "Momo", type: "kanji" }],
        meaning: "Persik (Peach)"
    },
    {
        word: "パイナップル",
        kana: "パイナップル",
        romaji: "Painappuru",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "パイナップル", type: "katakana" }],
        romajiParts: [{ text: "Painappuru", type: "katakana" }],
        meaning: "Nanas"
    },
    {
        word: "レモン",
        kana: "レモン",
        romaji: "Remon",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "レモン", type: "katakana" }],
        romajiParts: [{ text: "Remon", type: "katakana" }],
        meaning: "Lemon"
    },
    {
        word: "梨",
        kana: "なし",
        romaji: "Nashi",
        category: "fruits",
        categoryLabel: "Buah",
        kanaParts: [{ text: "なし", type: "kanji" }],
        romajiParts: [{ text: "Nashi", type: "kanji" }],
        meaning: "Pir Jepang"
    },

    // ==========================================
    // KATEGORI: DARI LIRIK LAGU (LYRICS VOCABULARY)
    // ==========================================
    {
        word: "其処",
        kana: "そこ",
        romaji: "Soko",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [{ text: "そこ", type: "kanji" }],
        romajiParts: [{ text: "Soko", type: "kanji" }],
        meaning: "Di sana / tempat itu"
    },
    {
        word: "夢",
        kana: "ゆめ",
        romaji: "Yume",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [{ text: "ゆめ", type: "kanji" }],
        romajiParts: [{ text: "Yume", type: "kanji" }],
        meaning: "Mimpi / cita-cita"
    },
    {
        word: "信じる",
        kana: "しんじる",
        romaji: "Shinjiru",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [
            { text: "しん", type: "kanji" },
            { text: "じる", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Shin", type: "kanji" },
            { text: "jiru", type: "hiragana" }
        ],
        meaning: "Percaya / meyakini"
    },
    {
        word: "未来",
        kana: "みらい",
        romaji: "Mirai",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [{ text: "みらい", type: "kanji" }],
        romajiParts: [{ text: "Mirai", type: "kanji" }],
        meaning: "Masa depan"
    },
    {
        word: "向かう",
        kana: "むかう",
        romaji: "Mukau",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [
            { text: "む", type: "kanji" },
            { text: "かう", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Mu", type: "kanji" },
            { text: "kau", type: "hiragana" }
        ],
        meaning: "Menuju / menghadap"
    },
    {
        word: "走る",
        kana: "はしる",
        romaji: "Hashiru",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [
            { text: "はし", type: "kanji" },
            { text: "る", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Hashi", type: "kanji" },
            { text: "ru", type: "hiragana" }
        ],
        meaning: "Berlari"
    },
    {
        word: "君",
        kana: "きみ",
        romaji: "Kimi",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [{ text: "きみ", type: "kanji" }],
        romajiParts: [{ text: "Kimi", type: "kanji" }],
        meaning: "Kamu / engkau"
    },
    {
        word: "一緒",
        kana: "いっしょ",
        romaji: "Issho",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [{ text: "いっしょ", type: "kanji" }],
        romajiParts: [{ text: "Issho", type: "kanji" }],
        meaning: "Bersama / sejalan"
    },
    {
        word: "歩く",
        kana: "あるく",
        romaji: "Aruku",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [
            { text: "ある", type: "kanji" },
            { text: "く", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Aru", type: "kanji" },
            { text: "ku", type: "hiragana" }
        ],
        meaning: "Berjalan"
    },
    {
        word: "行く",
        kana: "いく",
        romaji: "Iku",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [
            { text: "い", type: "kanji" },
            { text: "く", type: "hiragana" }
        ],
        romajiParts: [
            { text: "I", type: "kanji" },
            { text: "ku", type: "hiragana" }
        ],
        meaning: "Pergi"
    },
    {
        word: "笑顔",
        kana: "えがお",
        romaji: "Egao",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [{ text: "えがお", type: "kanji" }],
        romajiParts: [{ text: "Egao", type: "kanji" }],
        meaning: "Senyuman / wajah tersenyum"
    },
    {
        word: "忘れる",
        kana: "わすれる",
        romaji: "Wasureru",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [
            { text: "わす", type: "kanji" },
            { text: "れる", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Wasu", type: "kanji" },
            { text: "reru", type: "hiragana" }
        ],
        meaning: "Melupakan / lupa"
    },
    {
        word: "約束",
        kana: "やくそく",
        romaji: "Yakusoku",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [{ text: "やくそく", type: "kanji" }],
        romajiParts: [{ text: "Yakusoku", type: "kanji" }],
        meaning: "Janji"
    },
    {
        word: "努力",
        kana: "どりょく",
        romaji: "Doryoku",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [{ text: "どりょく", type: "kanji" }],
        romajiParts: [{ text: "Doryoku", type: "kanji" }],
        meaning: "Usaha / kerja keras"
    },
    {
        word: "元気",
        kana: "げんき",
        romaji: "Genki",
        category: "lyrics",
        categoryLabel: "Lirik",
        kanaParts: [{ text: "げんき", type: "kanji" }],
        romajiParts: [{ text: "Genki", type: "kanji" }],
        meaning: "Sehat / semangat"
    },

    // ==========================================
    // KATEGORI: NAMA-NAMA HEWAN (ANIMALS)
    // ==========================================
    {
        word: "犬",
        kana: "いぬ",
        romaji: "Inu",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "いぬ", type: "kanji" }],
        romajiParts: [{ text: "Inu", type: "kanji" }],
        meaning: "Anjing"
    },
    {
        word: "猫",
        kana: "ねこ",
        romaji: "Neko",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "ねこ", type: "kanji" }],
        romajiParts: [{ text: "Neko", type: "kanji" }],
        meaning: "Kucing"
    },
    {
        word: "鳥",
        kana: "とり",
        romaji: "Tori",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "とり", type: "kanji" }],
        romajiParts: [{ text: "Tori", type: "kanji" }],
        meaning: "Burung"
    },
    {
        word: "魚",
        kana: "さかな",
        romaji: "Sakana",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "さかな", type: "kanji" }],
        romajiParts: [{ text: "Sakana", type: "kanji" }],
        meaning: "Ikan"
    },
    {
        word: "馬",
        kana: "うま",
        romaji: "Uma",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "うま", type: "kanji" }],
        romajiParts: [{ text: "Uma", type: "kanji" }],
        meaning: "Kuda"
    },
    {
        word: "牛",
        kana: "うし",
        romaji: "Ushi",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "うし", type: "kanji" }],
        romajiParts: [{ text: "Ushi", type: "kanji" }],
        meaning: "Sapi"
    },
    {
        word: "豚",
        kana: "ぶた",
        romaji: "Buta",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "ぶた", type: "kanji" }],
        romajiParts: [{ text: "Buta", type: "kanji" }],
        meaning: "Babi"
    },
    {
        word: "羊",
        kana: "ひつじ",
        romaji: "Hitsuji",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "ひつじ", type: "kanji" }],
        romajiParts: [{ text: "Hitsuji", type: "kanji" }],
        meaning: "Domba"
    },
    {
        word: "猿",
        kana: "さる",
        romaji: "Saru",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "さる", type: "kanji" }],
        romajiParts: [{ text: "Saru", type: "kanji" }],
        meaning: "Monyet"
    },
    {
        word: "うさぎ",
        kana: "うさぎ",
        romaji: "Usagi",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "うさぎ", type: "hiragana" }],
        romajiParts: [{ text: "Usagi", type: "hiragana" }],
        meaning: "Kelinci"
    },
    {
        word: "熊",
        kana: "くま",
        romaji: "Kuma",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "くま", type: "kanji" }],
        romajiParts: [{ text: "Kuma", type: "kanji" }],
        meaning: "Beruang"
    },
    {
        word: "象",
        kana: "ぞう",
        romaji: "Zou",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "ぞう", type: "kanji" }],
        romajiParts: [{ text: "Zou", type: "kanji" }],
        meaning: "Gajah"
    },
    {
        word: "虎",
        kana: "とら",
        romaji: "Tora",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "とら", type: "kanji" }],
        romajiParts: [{ text: "Tora", type: "kanji" }],
        meaning: "Harimau"
    },
    {
        word: "ライオン",
        kana: "らいおん",
        romaji: "Raion",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "らいおん", type: "katakana" }],
        romajiParts: [{ text: "Raion", type: "katakana" }],
        meaning: "Singa"
    },
    {
        word: "パンダ",
        kana: "ぱんだ",
        romaji: "Panda",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "ぱんだ", type: "katakana" }],
        romajiParts: [{ text: "Panda", type: "katakana" }],
        meaning: "Panda"
    },
    {
        word: "ペンギン",
        kana: "ぺんぎん",
        romaji: "Pengin",
        category: "animals",
        categoryLabel: "Hewan",
        kanaParts: [{ text: "ぺんぎん", type: "katakana" }],
        romajiParts: [{ text: "Pengin", type: "katakana" }],
        meaning: "Penguin"
    },

    // ==========================================
    // KATEGORI: KALIMAT PERCAKAPAN SEHARI-HARI (CONVERSATIONS)
    // ==========================================
    {
        word: "はじめまして、よろしくお願いします。",
        kana: "はじめまして、よろしくおねがいします。",
        romaji: "Hajimemashite, yoroshiku onegaishimasu.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "はじめまして、よろしくお", type: "hiragana" },
            { text: "ねが", type: "kanji" },
            { text: "いします。", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Hajimemashite, yoroshiku o", type: "hiragana" },
            { text: "nega", type: "kanji" },
            { text: "ishimasu.", type: "hiragana" }
        ],
        meaning: "Senang berkenalan dengan Anda, mohon bantuannya."
    },
    {
        word: "お名前は何ですか？",
        kana: "おなまえはなんですか？",
        romaji: "Onamae wa nan desu ka?",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "お", type: "hiragana" },
            { text: "な", type: "kanji" },
            { text: "まえ", type: "kanji" },
            { text: "は", type: "hiragana" },
            { text: "なん", type: "kanji" },
            { text: "ですか？", type: "hiragana" }
        ],
        romajiParts: [
            { text: "O", type: "hiragana" },
            { text: "na", type: "kanji" },
            { text: "mae", type: "kanji" },
            { text: " wa ", type: "hiragana" },
            { text: "nan", type: "kanji" },
            { text: " desu ka?", type: "hiragana" }
        ],
        meaning: "Siapa nama Anda?"
    },
    {
        word: "お元気ですか？",
        kana: "おげんきですか？",
        romaji: "Ogenki desu ka?",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "お", type: "hiragana" },
            { text: "げん", type: "kanji" },
            { text: "き", type: "kanji" },
            { text: "ですか？", type: "hiragana" }
        ],
        romajiParts: [
            { text: "O", type: "hiragana" },
            { text: "gen", type: "kanji" },
            { text: "ki", type: "kanji" },
            { text: " desu ka?", type: "hiragana" }
        ],
        meaning: "Bagaimana kabar Anda? (Apakah Anda sehat?)"
    },
    {
        word: "はい、元気です。",
        kana: "はい、げんきです。",
        romaji: "Hai, genki desu.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "はい、", type: "hiragana" },
            { text: "げん", type: "kanji" },
            { text: "き", type: "kanji" },
            { text: "です。", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Hai, ", type: "hiragana" },
            { text: "gen", type: "kanji" },
            { text: "ki", type: "kanji" },
            { text: " desu.", type: "hiragana" }
        ],
        meaning: "Ya, saya sehat / baik-baik saja."
    },
    {
        word: "どういたしまして。",
        kana: "どういたしまして。",
        romaji: "Douitashimashite.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [{ text: "どういたしまして。", type: "hiragana" }],
        romajiParts: [{ text: "Douitashimashite.", type: "hiragana" }],
        meaning: "Sama-sama (kembali)."
    },
    {
        word: "すみません、もう一度言ってください。",
        kana: "すみません、もういちどいってください。",
        romaji: "Sumimasen, mou ichido itte kudasai.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "すみません、もう", type: "hiragana" },
            { text: "いち", type: "kanji" },
            { text: "ど", type: "kanji" },
            { text: "い", type: "kanji" },
            { text: "ってください。", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Sumimasen, mou ", type: "hiragana" },
            { text: "ichi", type: "kanji" },
            { text: "do ", type: "kanji" },
            { text: "i", type: "kanji" },
            { text: "tte kudasai.", type: "hiragana" }
        ],
        meaning: "Permisi / Maaf, tolong katakan sekali lagi."
    },
    {
        word: "分かりました。",
        kana: "わかりました。",
        romaji: "Wakarimashita.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "わ", type: "kanji" },
            { text: "かりました。", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Wa", type: "kanji" },
            { text: "karimashita.", type: "hiragana" }
        ],
        meaning: "Saya mengerti / Saya paham."
    },
    {
        word: "分かりません。",
        kana: "わかりません。",
        romaji: "Wakarimasen.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "わ", type: "kanji" },
            { text: "かりません。", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Wa", type: "kanji" },
            { text: "karimasen.", type: "hiragana" }
        ],
        meaning: "Saya tidak mengerti / tidak tahu."
    },
    {
        word: "これはいくらですか？",
        kana: "これはいくらですか？",
        romaji: "Kore wa ikura desu ka?",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [{ text: "これはいくらですか？", type: "hiragana" }],
        romajiParts: [{ text: "Kore wa ikura desu ka?", type: "hiragana" }],
        meaning: "Ini harganya berapa?"
    },
    {
        word: "トイレはどこですか？",
        kana: "といれはどこですか？",
        romaji: "Toire wa doko desu ka?",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "といれ", type: "katakana" },
            { text: "はどこですか？", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Toire", type: "katakana" },
            { text: " wa doko desu ka?", type: "hiragana" }
        ],
        meaning: "Toilet ada di sebelah mana?"
    },
    {
        word: "お腹が空きました。",
        kana: "おなかがすきました。",
        romaji: "Onaka ga sukimashita.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "お", type: "hiragana" },
            { text: "なか", type: "kanji" },
            { text: "が", type: "hiragana" },
            { text: "す", type: "kanji" },
            { text: "きました。", type: "hiragana" }
        ],
        romajiParts: [
            { text: "O", type: "hiragana" },
            { text: "naka", type: "kanji" },
            { text: " ga ", type: "hiragana" },
            { text: "su", type: "kanji" },
            { text: "kimashita.", type: "hiragana" }
        ],
        meaning: "Perut saya lapar."
    },
    {
        word: "喉が渇きました。",
        kana: "のどがかわきました。",
        romaji: "Nodo ga kawakimashita.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "のど", type: "kanji" },
            { text: "が", type: "hiragana" },
            { text: "かわ", type: "kanji" },
            { text: "きました。", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Nodo", type: "kanji" },
            { text: " ga ", type: "hiragana" },
            { text: "kawa", type: "kanji" },
            { text: "kimashita.", type: "hiragana" }
        ],
        meaning: "Tenggorokan saya haus."
    },
    {
        word: "ちょっと待ってください。",
        kana: "ちょっとまってください。",
        romaji: "Chotto matte kudasai.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "ちょっと", type: "hiragana" },
            { text: "ま", type: "kanji" },
            { text: "ってください。", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Chotto ", type: "hiragana" },
            { text: "ma", type: "kanji" },
            { text: "tte kudasai.", type: "hiragana" }
        ],
        meaning: "Tolong tunggu sebentar."
    },
    {
        word: "大丈夫ですか？",
        kana: "だいじょうぶですか？",
        romaji: "Daijoubu desu ka?",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "だい", type: "kanji" },
            { text: "じょう", type: "kanji" },
            { text: "ぶ", type: "kanji" },
            { text: "ですか？", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Dai", type: "kanji" },
            { text: "jou", type: "kanji" },
            { text: "bu", type: "kanji" },
            { text: " desu ka?", type: "hiragana" }
        ],
        meaning: "Apakah Anda tidak apa-apa / baik-baik saja?"
    },
    {
        word: "また会いましょう！",
        kana: "またあいましょう！",
        romaji: "Mata aimashou!",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "また", type: "hiragana" },
            { text: "あ", type: "kanji" },
            { text: "いましょう！", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Mata ", type: "hiragana" },
            { text: "a", type: "kanji" },
            { text: "imashou!", type: "hiragana" }
        ],
        meaning: "Sampai jumpa lagi!"
    },
    {
        word: "お疲れ様でした。",
        kana: "おつかれさまでした。",
        romaji: "Otsukaresama deshita.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "お", type: "hiragana" },
            { text: "つか", type: "kanji" },
            { text: "れ", type: "hiragana" },
            { text: "さま", type: "kanji" },
            { text: "でした。", type: "hiragana" }
        ],
        romajiParts: [
            { text: "O", type: "hiragana" },
            { text: "tsuka", type: "kanji" },
            { text: "re", type: "hiragana" },
            { text: "sama", type: "kanji" },
            { text: " deshita.", type: "hiragana" }
        ],
        meaning: "Terima kasih atas kerja kerasnya (ungkapan apresiasi)."
    },
    {
        word: "いただきます！",
        kana: "いただきます！",
        romaji: "Itadakimasu!",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [{ text: "いただきます！", type: "hiragana" }],
        romajiParts: [{ text: "Itadakimasu!", type: "hiragana" }],
        meaning: "Selamat makan! (Ungkapan bersyukur sebelum makan)."
    },
    {
        word: "ごちそうさまでした。",
        kana: "ごちそうさまでした。",
        romaji: "Gochisousama deshita.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [{ text: "ごちそうさまでした。", type: "hiragana" }],
        romajiParts: [{ text: "Gochisousama deshita.", type: "hiragana" }],
        meaning: "Terima kasih atas hidangannya (setelah makan)."
    },
    {
        word: "助けてください！",
        kana: "たすけてください！",
        romaji: "Tasukete kudasai!",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "たす", type: "kanji" },
            { text: "けてください！", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Tasu", type: "kanji" },
            { text: "kete kudasai!", type: "hiragana" }
        ],
        meaning: "Tolong saya! / Bantu saya!"
    },
    {
        word: "日本語を勉強しています。",
        kana: "にほんごをべんきょうしています。",
        romaji: "Nihongo wo benkyou shite imasu.",
        category: "conversations",
        categoryLabel: "Percakapan",
        kanaParts: [
            { text: "に", type: "kanji" },
            { text: "ほん", type: "kanji" },
            { text: "ご", type: "kanji" },
            { text: "を", type: "hiragana" },
            { text: "べん", type: "kanji" },
            { text: "きょう", type: "kanji" },
            { text: "しています。", type: "hiragana" }
        ],
        romajiParts: [
            { text: "Ni", type: "kanji" },
            { text: "hon", type: "kanji" },
            { text: "go", type: "kanji" },
            { text: " wo ", type: "hiragana" },
            { text: "ben", type: "kanji" },
            { text: "kyou", type: "kanji" },
            { text: " shite imasu.", type: "hiragana" }
        ],
        meaning: "Saya sedang belajar bahasa Jepang."
    },
];

// 6. SOAL KUIS BAHASA JEPANG
const quizQuestions = [
    {
        question: "Apa arti dari 夢 (ゆめ)?",
        options: ["Masa depan", "Mimpi", "Berjalan", "Kamu"],
        answer: "Mimpi"
    },
    {
        question: "Bagaimana cara membaca 未来?",
        options: ["Mirai", "Yume", "Kimi", "Soko"],
        answer: "Mirai"
    },
    {
        question: "Apa arti dari りんご (Ringo)?",
        options: ["Jeruk", "Apel", "Pisang", "Semangka"],
        answer: "Apel"
    },
    {
        question: "Bagaimana cara membaca 食べる?",
        options: ["Nomu", "Miru", "Taberu", "Kiku"],
        answer: "Taberu"
    },
    {
        question: "Apa arti dari 本 (ほん)?",
        options: ["Buku", "Tas", "Kunci", "Jam"],
        answer: "Buku"
    },
    {
        question: "Bagaimana cara membaca kata 約束?",
        options: ["Yakusoku", "Shinjiru", "Kimi", "Kurou"],
        answer: "Yakusoku"
    },
    {
        question: "Apa arti salam 'おはよう' (Ohayou)?",
        options: ["Selamat pagi", "Selamat malam", "Terima kasih", "Sampai jumpa"],
        answer: "Selamat pagi"
    },
    {
        question: "Apa arti dari 車 (くるま)?",
        options: ["Kereta api", "Mobil", "Sepatu", "Meja"],
        answer: "Mobil"
    }
];

if (typeof window !== 'undefined') {
    window.lyricsData = lyricsData;
    window.kanaData = kanaData;
    window.kanaDakuonData = kanaDakuonData;
    window.gojuonRows = gojuonRows;
    window.dakuonRows = dakuonRows;
    window.yoonRows = yoonRows;
    window.smallKanaGuide = smallKanaGuide;
    window.kanaLookup = kanaLookup;
    window.kanjiReadings = kanjiReadings;
    window.specialWordsLookup = specialWordsLookup;
    window.vocabularyData = vocabularyData;
    window.quizQuestions = quizQuestions;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        lyricsData,
        kanaData,
        kanaDakuonData,
        gojuonRows,
        dakuonRows,
        yoonRows,
        smallKanaGuide,
        kanaLookup,
        kanjiReadings,
        specialWordsLookup,
        vocabularyData,
        quizQuestions
    };
}

