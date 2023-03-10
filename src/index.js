import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>{/* 이렇게 하면 App전체를 감싸고 있어서 안에서 routes, route 쓰기 편함 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
