import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home, Myself, About, Work, Testimonials, Contact } from './pages';
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
    element: <Work />,
  },
  {
    path: 'testimonials',
    element: <Testimonials />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
];

const App = () => {
  const location = useLocation();

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
