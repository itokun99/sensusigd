import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { appRoutes } from 'routes';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          {appRoutes.map((route, index) => (
            <Route
              key={index}
              render={routerProps => (
                <route.component title={route.title} {...routerProps} />
              )}
              exact={route.exact}
              path={route.path}
            />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
