import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false));

    axios.get(
        `/pizzas?${category !== null ? `category=${category}` : ''
        }&_sort=${sortBy.type}&_order=${sortBy.order}`
    ).then(({ data }) => {
        dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});

// в fetchPizzas выполняется асинхронный запрос данных с пицами
// fetchPizzas - это не просто action, это асинхронный action
// именно благдаря библиотеки redux-thunk мы можем дождать запрос,
// а потом уже сохранить в redux что-то

// fetchPizzas для получения и созранения пицц
// setPizzas только для сохранения пицц

// асинхронно, то есть выполняется вне зависимости от выполнения других функций

// setLoaded будет передавать статус загрузки true / false
// мы говорим "dispatch" получи то, что тебе передаст setLoaded и верни это в Redux