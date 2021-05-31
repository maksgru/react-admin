import React from 'react';
import { Switch, Route , BrowserRouter} from 'react-router-dom';
import routes from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          routes.map(route => (
            <Route
            key={route.path}
            {...route}
            />
          ))
        }
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
