import * as React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import reportWebVitals from './reportWebVitals';

const routes = [
  { path: 'aboutme', element: <div>AboutMe</div> },
  { path: 'skills', element: <div>Skills</div> },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomePage />}>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Route>,
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
