const initialState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    },
};
// тут инициализируемые значения, на момент первого 
// вызова редюсера filters мы будем загружать эти данные в state

const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload
        };
    }
    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload
        };
    }
    return state; //если нет необходимости что-то менять, то возвращаем старые значения 
};

export default filters;

// redusers.filters - логика и изменения, связанные с фильтрацией
// данный файл является редюсером фильтрации
// state - хранилище старых данных
// если приходит значение 'SET_SORT_BY', то
// берем состояние initialState,
// берем старые данные из state и
// заменяем sortBy на новые значения => action.payload