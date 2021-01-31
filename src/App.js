import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { appRoutes } from 'routes';
import { NotFound404 } from 'pages';
import { DashboardLayout } from 'containers';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            path="/"
            render={routerProps => (
              <DashboardLayout {...routerProps}>
                <Suspense fallback={<div>Loading...</div>}>
                  {appRoutes.map((route, index) => (
                    <Route
                      key={index}
                      render={routerProps2 => (
                        <route.component
                          title={route.title}
                          {...routerProps2}
                        />
                      )}
                      exact={route.exact}
                      path={route.path}
                    />
                  ))}
                </Suspense>
              </DashboardLayout>
            )}
          />
          <Route
            path="*"
            exact
            render={routerProps => (
              <NotFound404
                name="NotFound404"
                title="Halaman Tidak ditemukan"
                {...routerProps}
              />
            )}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
