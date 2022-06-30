# React Pizza
Интернет-магазин по заказу пиццы

Stack: • ReactJS + хуки • React Router • Redux • Redux thunk • json-server • Axios • Classnames

Данный проект изначально был выполнен в виде обычной HTML-верстки. В процессе создания приложения на ReactJS, код верстки разбивался отдельные части или блоки - компоненты. В этом проекте используются функциональные компоненты (например: function App(){}), а не классовые. Поэтому, нам необходимо применять хуки и производить рендер в зависимости от поступивших пропсов (props), делая при этом код удобнее и позволяя переиспользовать его более првильно с точки зрения оптимизации.

## Главная страница (подгрузка данных происходит с json-server порт:3001)
![Главая страница](https://github.com/ElHilarion/react-pizza/blob/main/главная.png)

## Кнопка "добавить" пиццу фиксирует количество выбранных пицц данной категории
![Главая страница](https://github.com/ElHilarion/react-pizza/blob/main/добавление%20пиц.png)

## Информация о выбранных пицах содержится на странице "корзина", где формируется заказ и вычисляется общая стоимость выбранных продуктов. 
![Главая страница](https://github.com/ElHilarion/react-pizza/blob/main/корзина%20с%20пицами.png)

## Сортировка пицц осуществляется по трем типам: цене, популярности, алфавиту. 
![Главая страница](https://github.com/ElHilarion/react-pizza/blob/main/сортировка%20по%20цене.png)

## Фильтрация может осуществляться по категориям: все, мясные, вегетарианская, гриль, отстрые, закрытые.
![Главая страница](https://github.com/ElHilarion/react-pizza/blob/main/фильтрация%20по%20категорям.png)

## В случае, если товар не выбран, корзина содержит небольшое сообщение:
![Главая страница](https://github.com/ElHilarion/react-pizza/blob/main/корзина%20пуста.png)

Используя компонент более высокого порядка React.memo() производим поверхстное сравнение. При этом он не будет глубоко проверять изменения
он просто посмотрит изменился ли items. Вообще, впринцепи ссылка на него изменилась ли, и если ссылка не изменилась, то он не будет делать на него ре-рендер.

Используя хук useDispatch мы можем получать глобальные данные из хранилища Redux.
На json-server отправляется get-запрос на получение данные о всех пицах с помощью useEffect.

При использовании библиотеки Redux, которая является менеджером состояний, осуществялем нашу логику с помощью actions(действия) и redusers(редукторы).
В Redux общее состояние приложения представлено одним объектом JavaScript — state (состояние) или state tree (дерево состояний). Неизменяемое дерево состояний доступно только для чтения, изменить ничего напрямую нельзя. Изменения возможны только при отправке action.
Но мы используем не просто action, а actions creators(генераторы действий). Это функции, создающие действия, в отличие от просто action, который содержит объект.

При запуске action обязательно что-то происходит и состояние приложения изменяется. За это отвечает работа redusers. Это чистая функция, которая вычисляет следующее состояние дерева на основании его предыдущего состояния и применяемого действия.

Также в процессе запуска действия и его обрабтки участвует хранилище (store) — это объект, который, содержит состояние приложения; отображает состояние через getState(); может обновлять состояние через dispatch(); позволяет регистрироваться (или удаляться) в качестве слушателя изменения состояния через subscribe().

Все данные мы храним на фейковом json-server. REST API позволяет нам осуществить поиск данных, по определённым критериям. К примеру, чтобы найти всех пользователей по имени необходимо отправить GET запрос к REST API URL: http://localhost:3000/users?name=Max

# Загрузка и запуск кода. 
Вы можете скачать данный проект и посмотреть его в рабочем состоянии. 

Если вы используете WSCode, то откройте папку с загруженным проектом. Затем откройте новый терминал и введите:

### `npm start` - запуск React

после, откройте еще один отдельный терминал и введите:

### `npm run dev` - запуск json-server 
![Комманды](https://github.com/ElHilarion/react-pizza/blob/main/commands.png)

Готово! Удачного просмотра.
![React и server успешно работают](https://github.com/ElHilarion/react-pizza/blob/main/start%20react%20and%20server.png)

