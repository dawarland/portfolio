import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Projects from './Components/Projects';

const Main = () => {
  return (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/projet' component={Projects}></Route>
      </Switch>
  );
};

export default Main;