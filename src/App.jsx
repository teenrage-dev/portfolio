import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { HomePage, MyselfPage } from './pages';
import { Transition } from './components/Transition';

const routes = [
  {
    path: 'myself',
    element: (
      <Transition>
        <MyselfPage />
      </Transition>
    ),
  },
  {
    path: 'about',
    element: (
      <Transition>
        <div>About Page</div>
      </Transition>
    ),
  },
  {
    path: 'work',
    element: (
      <Transition>
        <div>Work Page</div>
      </Transition>
    ),
  },
  {
    path: 'testimonials',
    element: (
      <Transition>
        <div>Testimonials Page</div>
      </Transition>
    ),
  },
  {
    path: 'contact',
    element: (
      <Transition>
        <div>Contact Page</div>
      </Transition>
    ),
  },
];

const App = () => {
  const location = useLocation();
  console.log(location);

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <Transition>
              <HomePage />
            </Transition>
          }
        >
          {routes.map((route) =>
            route.path === 'myself' ? (
              <Route index element={route.element} key={route.path} />
            ) : (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ),
          )}
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
export default App;
