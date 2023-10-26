export interface AlbumInfoType {
	title: string;
	division: string;
	code: Array<string>;
	type: string;
	discNum: number | undefined;
	discTitle: Array<string> | undefined;
	trackList: Array<Array<string>> | Array<string>;
}

export const AlbumInfos: Array<AlbumInfoType> = [
	{
		title: "BEST OF LAZWARD PIANO -青い箱-",
		division: "Self Cover & Best Album",
		code: ["gzca-5319_5320", "gzca-5317_5318"],
		type: "album",
		discNum: 2,
		discTitle: ["リード曲を中心に", "ラズワルドピアノで聴きたい曲たち。新曲から時を遡っ"],
		trackList: [
			[
				"ハルシネーション",
				"きえるみたい",
				"未完成品",
				"センチメンタリズム",
				"壊して",
				"メリーゴーランド",
				"愛おしい今日",
				"心と体",
				"S・O・S",
				"サファイア！",
				"彼に守ってほしい10のこと",
				"ザクロの実",
				"FRIDAY",
				"スペクタクル",
				"夢のパレード",
				"Stranger",
			],
			[
				"恥ずかしい",
				"眠れぬ夜に",
				"まぜるなきけん",
				"ハイリゲンシュタットの遺書",
				"カレンダーの13月",
				"a girl",
				"変革の気、蜂蜜の夕陽",
				"優しい悪魔",
				"世界の終わり",
				"流れ星",
				"愛と熱、溶解",
				"スメル",
				"吠える虎",
				"さよならのかわりに記憶を消した",
				"白い月",
				"コンセントカー",
			],
		],
	},
	{
		title: "Euphoria",
		division: "4th Album",
		code: ["gzca-5315", "gzca-5314"],
		type: "album",
		discNum: 1,
		discTitle: undefined,
		trackList: [
			"EUPHORIA",
			"最果てへ",
			"ダラダラ",
			"“シグナルはノー”",
			"壊して",
			"プロペラを買ったんだ最近",
			"HEDGEHOG SONG",
			"BABY BABY BABY",
			"モアザンミューズ",
			"黎明",
			"エニウェアエニタイム",
			"ユートピア",
		],
	},
	{
		title: "ハートブレイカー",
		division: "3rd Album",
		code: ["gzca-5298", "gzca-5297"],
		type: "album",
		discNum: 1,
		discTitle: undefined,
		trackList: [
			"heartbreaker",
			"WHAT’s",
			"まぜるなきけん",
			"Black Cherry In The Dirty Forest",
			"Stranger",
			"小さな恋の誓い",
			"眠れぬ夜に",
			"鍵穴",
			"スルー",
			"my little bunny",
			"REVOLVER",
			"バニラフェイク",
			"I JUST WANNA BE A STAR",
			"てとてとめとめ",
			"IN TO",
			"憂うべき",
			"ERROR",
		],
	},
	{
		title: "W.A.H.",
		division: "Mini Album",
		code: ["gzca-5286", "gzca-5287"],
		type: "album",
		discNum: 1,
		discTitle: undefined,
		trackList: ["(entrance)", "Bloomin", "勿忘にくちづけ", "花鬘", "灯", "長い夜", "ひねもす"],
	},
	{
		title: "F.A.R",
		division: "Mini Album",
		code: ["gzca-5284", "gzca-5285"],
		type: "album",
		discNum: 1,
		discTitle: undefined,
		trackList: ["FAR", "ロマンティカ", "プライベートタイム", "さなぎから蝶へ", "苺の実", "softly", "(EXIT)"],
	},
	{
		title: "ロンリーナイト マジックスペル",
		division: "2nd Album",
		code: ["gzca-5278", "gzca-5279"],
		type: "album",
		discNum: 1,
		discTitle: undefined,
		trackList: [
			"Intro",
			"わかんないのはいやだ",
			"WHO R U ?",
			"悪い夢",
			"ダイニング",
			"I was Dreamin’ C U Darlin’",
			"パエリア",
			"夢のパレード",
			"僕の夢",
			"ふれたら消えてしまう",
			"スペクタクル",
			"JOURNEY",
			"犬は犬小屋に帰る",
		],
	},
	{
		title: "はなしはそれからだ",
		division: "1st Album",
		code: ["gzca-5271", "gzca-5272"],
		type: "album",
		discNum: 1,
		discTitle: undefined,
		trackList: [
			"Intro",
			"FRIDAY",
			"彼に守ってほしい10のこと",
			"hanamoge",
			"支配者",
			"昔の話",
			"a girl",
			"プリーズプリーズ",
			"ペースト",
			"ザクロの実",
			"泣いてない",
			"カルカテレパシー",
			"さよならのかわりに記憶を消した",
		],
	},
];

export function getAlbumInfo(albumCode: string): AlbumInfoType | null {
	for (let idx = 0; idx < AlbumInfos.length; idx++) {
		const element: AlbumInfoType = AlbumInfos[idx];

		if (element.code.includes(albumCode)) {
			return element;
		}
	}

	return null;
}
