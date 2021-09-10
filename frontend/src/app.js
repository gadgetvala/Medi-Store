import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RolesScreen from "screens/RolesScreen/RolesScreen";
import DoctorScreen from "screens/DoctorScreen/DoctorScreen";
import PatientScreen from "screens/PatientScreen/PatientScreen";
import RegisterPatientScreen from "screens/RegisterScreen/RegisterScreen";
import { AppProvider } from "context/AppContext";
import NotificationToast from "components/notificationToast/NotificationToast";

const App = (props) => {
  return (
    <>
      <AppProvider>
        <NotificationToast />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={RolesScreen} exact />
            <Route path="/doctor" component={DoctorScreen} exact />
            <Route path="/patient" component={PatientScreen} exact />
            <Route
              path="/register/:slug"
              component={RegisterPatientScreen}
              exact
            />
          </Switch>
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default App;
