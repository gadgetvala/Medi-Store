import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./../Router/MainAppRouter";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
