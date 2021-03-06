import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Landing } from '../pages/Landing';
import { OrphanagesMap } from '../pages/OrphanagesMap';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/map" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  )
}