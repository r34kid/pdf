// profiles.js - общий файл с данными профилей
// Автоматически сгенерировано редактором 23.02.2026, 22:02:38
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
  }
];

// Делаем данные доступными глобально
if (typeof module !== 'undefined' && module.exports) {
  module.exports = profiles;
}