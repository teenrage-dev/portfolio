import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home, Myself, About } from './pages';
import { Transition } from './components/Transition';

const routes = [
  {
    path: 'myself',
    element: <Myself />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'work',
    element: <div>Work Page</div>,
  },
  {
    path: 'testimonials',
    element: <div>Testimonials Page</div>,
  },
  {
    path: 'contact',
    element: <div>Contact Page</div>,
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
              <Home />
            </Transition>
          }
        >
          {routes.map((route) =>
            route.path === 'myself' ? (
              <Route index element={route.element} key={route.path} />
            ) : (
              <Route
                path={route.path}
                element={<Transition>{route.element}</Transition>}
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