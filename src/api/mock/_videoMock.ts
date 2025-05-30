import AxiosMockAdapter from "axios-mock-adapter";

export const registerVideoData = (mock: AxiosMockAdapter) => {
  mock.onGet(/\/video-donations\/v1.*/).reply(() => {
    return [200,
      {
        "general": [
          {
            "videoName": "Sneaky Snitch (Kevin MacLeod) - Background Music (HD)",
            "videoId": "Cm0qaXi9THA",
            "cheese": 2000,
            "createdAt": "2025-05-29T18:57:43"
          },
          {
            "videoName": "늘 (EVER) / 샤메이 COVER",
            "videoId": "taBr0EkZFsE",
            "cheese": 2000,
            "createdAt": "2025-05-29T18:33:28"
          },
          {
            "videoName": "[리 미제라블] No.2 - 200만 지르면 (Two Million Dreams)",
            "videoId": "kaAajLcmfuw",
            "cheese": 2000,
            "createdAt": "2025-05-29T18:07:31"
          },
          {
            "videoName": "아웃트로 1시간 반복재생 [작업용 BGM]",
            "videoId": "kqe-Na05TT0",
            "cheese": 2000,
            "createdAt": "2025-05-29T17:58:42"
          },
          {
            "videoName": "가정교사히트맨리본 ost 츠나 각성 1시간",
            "videoId": "AvXR2fZv_JU",
            "cheese": 2000,
            "createdAt": "2025-05-29T17:50:09"
          },
          {
            "videoName": "Mark Snow - Materia Primoris: The X-Files Theme (Main Title) (Official Audio)",
            "videoId": "Qz2wnSVeITg",
            "cheese": 2020,
            "createdAt": "2025-05-29T17:19:03"
          },
          {
            "videoName": "이별택시 (이별택시)",
            "videoId": "ic_DQjII5bE",
            "cheese": 3260,
            "createdAt": "2025-05-29T16:47:26"
          },
          {
            "videoName": "Sex on the Beach (Paolo Ortelli Vs Degree Reloaded Video Edit)",
            "videoId": "ZwrLojze4ts",
            "cheese": 2000,
            "createdAt": "2025-05-29T16:37:59"
          },
          {
            "videoName": "박명수 - 바다의 왕자 [가사/Lyrics]",
            "videoId": "2rqAdWXmerc",
            "cheese": 2000,
            "createdAt": "2025-05-29T16:29:14"
          },
          {
            "videoName": "폴킴 (Paul Kim) '한강에서 (Feat. BIG Naughty)' | MV",
            "videoId": "YXZl-_xSzMQ",
            "cheese": 2000,
            "createdAt": "2025-05-29T16:24:12"
          },
          {
            "videoName": "George Ezra - Shotgun (Official Video)",
            "videoId": "aAiVsqfbn5g",
            "cheese": 2000,
            "createdAt": "2025-05-29T16:21:08"
          },
          {
            "videoName": "The Biggest Dreamer 2020 Full Ver.(디지몬 테이머즈 극장판 OP) - TULA(툴라)",
            "videoId": "4z9HJ116058",
            "cheese": 2310,
            "createdAt": "2025-05-29T16:03:25"
          },
          {
            "videoName": "Brave Heart (디지몬 어드벤처 진화 테마 / 전영호, 미야자키 아유미) - cover by TULA",
            "videoId": "Y0a__v-FegE",
            "cheese": 2000,
            "createdAt": "2025-05-29T16:00:14"
          },
          {
            "videoName": "[MapleStory BGM] Perion: Nightmare",
            "videoId": "9lwOsX763N0",
            "cheese": 2000,
            "createdAt": "2025-05-29T15:57:13"
          },
          {
            "videoName": "하나코 나나(Hanako Nana) - Born To Run [봉누도 Official Sound Track]",
            "videoId": "H4T4ihraPic",
            "cheese": 2000,
            "createdAt": "2025-05-29T15:51:48"
          },
          {
            "videoName": "Negative Harmony Cover - Never Gonna Give You Up",
            "videoId": "nCNm0I1YIu4",
            "cheese": 2140,
            "createdAt": "2025-05-29T15:46:51"
          },
          {
            "videoName": "「 ONE PIECE OP 11 」TVXQ/Tohoshinki (東方神起) – Share The World (Color Coded Lyrics Kan/Rom/Eng)",
            "videoId": "PCfN6WccvhA",
            "cheese": 2120,
            "createdAt": "2025-05-29T15:42:35"
          },
          {
            "videoName": "Sān-Z, HOYO-MiX - Burning Desires (Official Audio) (From: Zenless Zone Zero)",
            "videoId": null,
            "cheese": 2000,
            "createdAt": "2025-05-29T15:36:47"
          },
          {
            "videoName": "개구리 중사 케로로 노래 모음",
            "videoId": "kgl00RZISz4",
            "cheese": 2000,
            "createdAt": "2025-05-29T15:22:01"
          }
        ],
        "highlighter": [
          {
            "videoName": "Drive",
            "videoId": "XfiHHFC4DLM",
            "cheese": 2730,
            "createdAt": "2025-05-29T16:19:36"
          },
          {
            "videoName": "【가이즈/GUYZ】Shining star 가히리 1기, 2기 한국판 OP",
            "videoId": "l32y4dqlTS0",
            "cheese": 2220,
            "createdAt": "2025-05-29T16:12:30"
          },
          {
            "videoName": "Ryu ga Gotoku Zero - OST [Side B] - 38 - Koi no Disco Queen [EXTENDED]",
            "videoId": "KouVPiIRFls",
            "cheese": 3600,
            "createdAt": "2025-05-29T15:52:43"
          },
          {
            "videoName": "逆光 (Ado)  from ONE PIECE FILM RED ㅣ 藍璃かんな Cover",
            "videoId": "q-QjjmJjU_8",
            "cheese": 2390,
            "createdAt": "2025-05-29T15:43:35"
          },
          {
            "videoName": "달의하루(Dareharu) 『너로피어오라(Flowering)』 MV",
            "videoId": "3vhA8njtoQg",
            "cheese": 2380,
            "createdAt": "2025-05-29T15:28:40"
          },
          {
            "videoName": "푸린 노래 1시간",
            "videoId": "yPJA_giE95U",
            "cheese": 2000,
            "createdAt": "2025-05-29T15:23:54"
          }
        ]
      }
    ];
  })
}

export const registerVideoSetting = (mock: AxiosMockAdapter) => {
  mock.onGet(/\/video-setting\/v1.*/).reply(() => {
    return [200,
      {
        donationActive: true,
        payAmountPerSecond: 50,
        minCurrencyPayAmount: 1000,
        maxDurationLength: 120,
        isYoutubeVideoAllow: true,
        isChzzkClipAllow: false,
        isAllowForSubscriber: false,
      }]
  })
}
