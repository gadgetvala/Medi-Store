import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RolesScreen from "./screens/RolesScreen/RolesScreen";
import DoctorScreen from "./screens/DoctorScreen/DoctorScreen";
import PatientScreen from "./screens/PatientScreen/PatientScreen";
import RegisterPatientScreen from "./screens/RegisterPatientScreen/RegisterPatientScreen";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={RolesScreen} exact />
        <Route path="/doctor" component={DoctorScreen} exact />
        <Route path="/patient" component={PatientScreen} exact />
        <Route
          path="/register-patient"
          component={RegisterPatientScreen}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
