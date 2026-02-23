// profiles.js - общий файл с данными профилей
// Автоматически сгенерировано редактором 23.02.2026, 22:31:52
const profiles = [
  {
    "name": "Андрей, 55",
    "distance": "12 км от вас",
    "tags": [
      "188 см",
      "Бизнесмен",
      "Спорт",
      "Путешествия",
      "Авто"
    ],
    "description": "Люблю футбол, ищу знакомство для семьи",
    "photos": [
      "https://picsum.photos/500/900?random=1",
      "https://picsum.photos/500/900?random=2",
      "https://picsum.photos/500/900?random=3",
      "https://picsum.photos/500/900?random=4",
      "https://picsum.photos/500/900?random=5"
    ]
  },
  {
    "name": "Мария, 100",
    "distance": "5 км от вас",
    "tags": [
      "172 см",
      "Маркетолог",
      "Йога",
      "Книги",
      "Кофе"
    ],
    "description": "Люблю путешествия и долгие прогулки",
    "photos": [
      "https://picsum.photos/500/900?random=6",
      "https://picsum.photos/500/900?random=7",
      "https://picsum.photos/500/900?random=8",
      "https://picsum.photos/500/900?random=9",
      "https://picsum.photos/500/900?random=10"
    ]
  },
  {
    "name": "Игорь, 34",
    "distance": "20 км от вас",
    "tags": [
      "180 см",
      "Разработчик",
      "Музыка",
      "Горы",
      "Сноуборд"
    ],
    "description": "Ценю искренность и чувство юмора",
    "photos": [
      "https://picsum.photos/500/900?random=11",
      "https://picsum.photos/500/900?random=12",
      "https://picsum.photos/500/900?random=13",
      "https://picsum.photos/500/900?random=14",
      "https://picsum.photos/500/900?random=15"
    ]
  },
  {
    "name": "Залупа, 12",
    "distance": "10 км от вас",
    "tags": [
      "Тег 1",
      "Тег 2"
    ],
    "description": "Описание нового профиля",
    "photos": [
      "https://picsum.photos/500/900?random=100"
    ]
  },
  {
    "name": "Гоша Куценка, 69",
    "distance": "1 км от вас",
    "tags": [
      "Сексоголик",
      "Трудяга"
    ],
    "description": "Люблю кино и секс",
    "photos": [
      "https://is1-ssl.mzstatic.com/image/thumb/Features114/v4/e6/68/c4/e668c4b4-1141-1efd-aa7c-84ab5e5dcd32/pr_source.png/1200x675.jpg",
      "https://lisa.ru/images/cache/2021/11/22/fit_414_530_false_crop_1027_577_0_37_q90_1345142_b5317d29d04d3342ffbd42770.png"
    ]
  },
  {
    "name": "Валентина, 30",
    "distance": "1444 км от вас",
    "tags": [
      "ЖИВУНЕТУЖУ",
      "собачий кайф",
      "копенгаген"
    ],
    "description": "Работаю в YANDEX",
    "photos": [
      "https://i.ytimg.com/vi/wWRSFTulm5g/maxresdefault.jpg"
    ]
  }
];

// Делаем данные доступными глобально
if (typeof module !== 'undefined' && module.exports) {
  module.exports = profiles;
}