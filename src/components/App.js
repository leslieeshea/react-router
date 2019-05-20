import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Red from './red/Red';
import Blue from './blue/Blue';
import Yellow from './yellow/Yellow';
import Color from './color/Color.js';

export default function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/red" component={Red} />
          <Route path="/blue" component={Blue} />
          <Route path="/yellow" component={Yellow} />
          <Route path="/:color" component={Color} />
        </Switch>
      </>
    </Router>
  );
}
