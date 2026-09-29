import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'; 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NotFound from "./NotFound";
import Default from "./Default";
import Login from "./Login";
import ProtectedPage from "./ProtectedPage";
import AdminPage from "./AdminPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/', element: <Default />
      },
      {
        path: '/login', element: <Login />
      },
      {
        path: '/protected', element: <ProtectedPage />
      },
      {
        path: '/admin', element: <AdminPage />
      },
      {
        path: '/404', element: <NotFound />
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
