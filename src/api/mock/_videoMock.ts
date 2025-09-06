import AxiosMockAdapter from "axios-mock-adapter";

export const registerVideoData = (mock: AxiosMockAdapter) => {
  mock.onGet(/\/video-donations$/).reply(() => {
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
  mock.onGet(/\/video-setting.*/).reply(() => {
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

export const registerRanking = (mock: AxiosMockAdapter) => {
  mock.onGet(/\/ranking/).reply(() => {
    return [200,
      {
        "ranking": [
          {
            "rank": 1,
            "element": {
              "videoName": "\"죽은 왕의 송곳니, 빅딕\"",
              "videoId": "cocSbxVFdGo",
              "cheese": 266610,
              "count": 27
            }
          },
          {
            "rank": 2,
            "element": {
              "videoName": "MAV 송",
              "videoId": "Y8xLipMKbO8",
              "cheese": 132174,
              "count": 29
            }
          },
          {
            "rank": 2,
            "element": {
              "videoName": "장난전화에서 시작된 ㅈ대로의 아버지 [콩밥특별시 6편]",
              "videoId": "pn6598Dlm2s",
              "cheese": 214000,
              "count": 25
            }
          },
          {
            "rank": 4,
            "element": {
              "videoName": "지금 이 순간 정답은 없다, 짐빔은 있다",
              "videoId": "F9F3xs_Nf3s",
              "cheese": 180055,
              "count": 22
            }
          },
          {
            "rank": 5,
            "element": {
              "videoName": "워해머 40k  블러드 엔젤 설명회 #생귀니우스 #워해머40000 #warhammer40k",
              "videoId": "Z4kLfygHrQw",
              "cheese": 203910,
              "count": 19
            }
          },
          {
            "rank": 6,
            "element": {
              "videoName": "[BONUS TRACK] 일일 사도 체험 - 죠안 BBANGMIX ver.",
              "videoId": "eyUTbB6ScQc",
              "cheese": 109200,
              "count": 28
            }
          },
          {
            "rank": 7,
            "element": {
              "videoName": "콩밥특별시 시청자 만 명을 웃긴 레전드 뺑소니 사건",
              "videoId": "L40N9WSTPXA",
              "cheese": 214640,
              "count": 14
            }
          },
          {
            "rank": 7,
            "element": {
              "videoName": "21세기 조현병 환자 (Kanye West - Power) [실프.콩밥특별시] 자막",
              "videoId": "FEq2M-klpJo",
              "cheese": 170620,
              "count": 16
            }
          },
          {
            "rank": 9,
            "element": {
              "videoName": "xx하지 않으면 나갈 수 없는 방",
              "videoId": null,
              "cheese": 87140,
              "count": 48
            }
          },
          {
            "rank": 10,
            "element": {
              "videoName": "레전드 경찰 뺑소니 사건 발생 [콩밥특별시 2화]",
              "videoId": "VBL7STiBmf4",
              "cheese": 129100,
              "count": 13
            }
          }
        ],
        "now": "2025-06-13T05:00:00"
      }
    ]
  })
}

export const registerVideoDating = (mock: AxiosMockAdapter) => {
  mock.onGet(/\/video-donations\/video-donating/).reply(() => {
    return [200,
      [
        "asdsada",
        "asdasdasda",
      ]
    ];
  })
}
