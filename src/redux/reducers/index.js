import { combineReducers } from 'redux';

import filters from './filters';
import pizzas from './pizzas';
import cart from './cart';

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
});

export default rootReducer;

// этот файл объединяет все редюсеры и создает одну ссылку-редюсер,
// которая уже осуществляет взаимодействия с другими редюсерами