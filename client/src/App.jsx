import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import privateRoutes from './routes/privateRouter';
import { AdminLayout } from './layouts';

function App() {
  return (
    <Routes>
      {privateRoutes.map((route, index) => {
        const Page = route.component;
        let Layout = AdminLayout
        if (route.layout)
          Layout = route.layout
        else if (route.layout === null)
          Layout = Fragment
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        )
      })}
    </Routes>

  );
}

export default App;
