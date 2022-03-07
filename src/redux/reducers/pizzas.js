const initialState = {
    items: [],
    isLoaded: false,
};

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            };
        default:
            return state;
    }
};

export default pizzas;

// action.payload хранит массив всех добавленне пицц
// в pizzas где isLoaded: true, мы устанавливаем true,
// чтобы дать понят приложению, что пиццы получены, значит все хорошо