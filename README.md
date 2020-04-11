# Book Store

Приложение Book Store — это онлайн магазин книг по программированию. Проект реализовывается в рамках учебного курса React + Redux - Профессиональная Разработка. Приложение состоит из двух частей. Первая — это список книг. Тут пользователь может посмотреть на описание книги и цену. Вторая часть — это корзина. Пользователь может добавлять книгу в корзину. Если он добавит несколько экзепляров одной и той же книги, то в корзину мы не будем добавлять новые записи, а изменим только количество выбранных книг и общую цену. 

Для доступа к данным создан отдельный сервис. Который будет скрывать детали того как мы получаем данные от остальных компонентов приложения. Управления состоянием приложения происходит с помощью Redux. Book Store также будет использовать mock (имитация) сервера, чтобы работать с данными, но проект легко использовать с настоящим сервером.

## Основные этапы создания приложения

- Инициализация проекта.
- Структура React + Redux проекта.
- Воспомогательные компонеты.
- Redux компоненты.
- Каркас Reacr + Redux приложения.
- Роутинг.
- Чтение данных из Redux Store.
- Отправка действий в Redux Store (Action Dispatch).
- Стилизация.
- Обработка ошибок.
- Redux: работа с элементами массива.
- Организация кода.
- Thunk.
- Реализация поиска и фильтрации.
- Опциональные правки.

## Структура данных

В проекте реализован сервис где лежать данные следующей структуры:

```typescript
data = [
  {
    id: 1,
    title: 'Learning React: Functional Web Development with React and Redux',
    author: 'Alex Banks & Eve Porcello',
    price: 28,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51Q43WRXJzL._SX379_BO1,204,203,200_.jpg'},
  {
    id: 2,
    title: 'React Explained: Your Step-by-Step Guide to React',
    author: 'Zac Gordon',
    price: 25,
    coverImage: 'https://m.media-amazon.com/images/I/51PNQd7RIwL.jpg'},
  {
    id: 3,
    title: 'Pro React 16',
    author: 'Adam Freeman',
    price: 30,
    coverImage: 'https://m.media-amazon.com/images/I/411Forn86vL.jpg'},
  {
    id: 4,
    title: 'The Road to React: Your journey to master plain yet pragmatic React.js',
    author: 'Robin Wieruch',
    price: 24,
    coverImage: 'https://m.media-amazon.com/images/I/31apmbgpwkL.jpg'},
  {
    id: 5,
    title: 'Learning React: A Hands-On Guide to Building Web Applications Using React and Redux',
    author: 'Kirupa Chinnathambi',
    price: 32,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51AFwrzNmdL._SX386_BO1,204,203,200_.jpg'},
  {
    id: 6,
    title: 'Fullstack React: The Complete Guide to ReactJS and Friends',
    author: 'Anthony Accomazzo, Nathaniel Murray, Ari Lerner',
    price: 60,
    coverImage: 'https://m.media-amazon.com/images/I/510UA1iWvgL.jpg'},
  {
    id: 7,
    title: 'React js: The Complete Beginner’s Guide to React',
    author: 'John Bach',
    price: 18,
    coverImage: 'https://m.media-amazon.com/images/I/41HYFUOVdvL.jpg'},
  {
    id: 8,
    title: 'React Material-UI Cookbook: Build captivating user experiences using React and Material-UI',
    author: 'Adam Boduch',
    price: 40,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41w%2Bi7H-9oL._SX403_BO1,204,203,200_.jpg'},
  {
    id: 9,
    title: 'Modern Full-Stack Development: Using TypeScript, React, Node.js, Webpack, and Docker',
    author: 'Frank Zammetti',
    price: 36,
    coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41RoU166LLL._SX348_BO1,204,203,200_.jpg'},
  {
    id: 10,
    title: 'Full-Stack React Projects: Modern web development using React 16, Node, Express, and MongoDB',
    author: 'Shama Hoque',
    price: 38,
    coverImage: 'https://m.media-amazon.com/images/I/51YMrTUR-SL.jpg'}
];
```

## Скетч проекта

![Project Sketch](https://i.pinimg.com/originals/4b/b9/6d/4bb96d2848b8779f812d6824ead2bd31.png)