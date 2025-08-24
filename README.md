# trafalgar

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=CSS&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Stylelint](https://img.shields.io/badge/stylelint-black?style=for-the-badge&logo=stylelint&logoColor=white)
![ESlint](https://img.shields.io/badge/ESlint-black?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-black?style=for-the-badge&logo=prettier&logoColor=white)
![postcss](https://img.shields.io/badge/postcss-black?style=for-the-badge&logo=postcss&logoColor=white)


---
👉 [Посмотреть онлайн (GitHub Pages)](https://zheny179.github.io/trafalgar/)

## 📸 Скриншот


![trafalgar | Home](public/screenshots/1.png)


---


## 🎯 Цели проекта


- 🎯 Познокомится с Minista и основами компонентной архитектуры
- 🎯 Работа с Vite как сборщиком
- 🎯 Применить JSX разметку для создания UI компонентов
- 🎯 Реализовать современные практики веб-разработки

---

## 🛠️ Используемые инструменты и технологии



### Основные технологии:
- **SCSS (Sass)**
- **JavaScript**
- **JSX (без React)**


### Сборка и инструменты:
- **Vite (Minista)**
- **npm**
- **PostCSS (preset-env, pxtorem)**
- **Stylelint**
- **ESlint**
- **Prettier**


### Разработка и дизайн:
- **WebStorm**
- **Figma**

### Оптимизация и качество:
- **Normalize.css (от @a1rth)**
- **БЭМ методология**

### Тестирование:
- **W3C Validator**


---

## 🚀 Как запустить локально
1.  Склонируй репозиторий: <br/>
    ```bash
    git clone https://github.com/Zheny179/trafalgar.git
    ```
2.  Перейдите в папку проекта
    ```bash
    cd trafalgar
    ```
3.  Установите зависимости  <br/>
    ```bash
    npm i
    ```
4.  Запустите проект в режиме разработки: <br/>
    ```bash
    npm run dev
    ```
5.  Для сборки проекта: <br/>
    ```bash
    npm run build
    ```
6.  Для просмотра собранного проекта
    ```bash
    npm run preview
    ```

## 🎨 Структура проекта

```
trafalgar/
├── node_modules/         # Зависимости проекта
├── public/               # Статические файлы
│   └── ...
├── src/                  # Исходный код приложения
│   ├── components/       # Переиспользуемые компоненты
│   ├── pages/            # Компоненты страниц
│   │   └── index.jsx     # Главная домашняя страница
│   ├── assets/           # Обрабатываются
│   │   |── fonts         # Шрифты
│   │   |── icons         # svg 
│   │   └──  images       # Картинки
│   ├── styles/           # Общие стили (переменные, утелитарные классы, mixin)
│   ├── layouts/          # Страница, которые находятся на каждой страницы
│   ├── modules/          # Js модули
│   ├── constants/        # Постоянные константы
│   └── sections/         # Секции страниц
├── .gitignore            # Файлы и папки, игнорируемые Git
├── package.json          # Манифест проекта (зависимости, скрипты)
├── package-lock.json     # Точная версия зависимостей
├── README.md             # Документация проекта
├── jsconfig.json         # Настройка алиасов для IDE
├── postcss.config.js     # Настройки postcss
├── prettier.config.js    # Настройки prettier
├── stylelint.config.js   # Настройки stylelint
├── eslint.config.js      # Настройки eslint
└── minista.config.js     # Настройки Misita
```

## 📜Ссылочки

1. [Minista](https://minista.qranoko.jp/)
2. [Normalize.css](https://www.npmjs.com/package/@a1rth/css-normalize)
3. [Макет сайта](https://www.figma.com/files/team/1438925015229958468/resources/community/file/1150370769219258177?fuid=1438925013166812996)