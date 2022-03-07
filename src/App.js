import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// App - функциональный компонент
// хук useDispatch позволяет получать глобальные данные из хранилища Redux
// на json-server отправляется get-запрос на получение данные о всех пицах 
// с помощью React.useEffect 