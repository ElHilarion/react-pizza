export const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name,
});
// это action-creator, желательно начать именовать с маленькой буквы
// этот экшин получает значение name (наименование выранной категории: популярность, цена, алфавит)
// и этот экшн создаёт объект с type и payload

//это Action Creator - функция, которая принимает динамические данные и прокидывает их в сам экшн 
export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
});

//это просто Action, который возвращает объект, этот экшн НЕ передает какие-то данные
// const setCategory = ({
//     type: 'SET_CATEGORY',
//     payload: catIndex,
// });

// action.filters - действия фильтрации
// все функии-action которые совершают какие-то действия фильтрации