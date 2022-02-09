import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RolesScreen from "screens/RolesScreen/RolesScreen";
import DoctorScreen from "screens/DoctorScreen/DoctorScreen";
import PatientScreen from "screens/PatientScreen/PatientScreen";
import RegisterPatientScreen from "screens/RegisterScreen/RegisterScreen";
import { AppProvider } from "context/AppContext";
import NotificationToast from "components/notificationToast/NotificationToast";
import ViewRecord from "screens/PatientScreen/viewRecord";
import 'antd/dist/antd.css';
import ViewDoctor from "screens/PatientScreen/viewDoctor";
import ViewPatient from "screens/DoctorScreen/viewPatient";
import PatientDetails from "screens/DoctorScreen/patientDetails";
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
            <Route path="/patient/record/view" component={ViewRecord} exact />
            <Route path="/patient/doctor/view" component={ViewDoctor} exact />
            <Route path="/doctor/patient/view" component={ViewPatient} exact />
            <Route path="/doctor/patient/detail/:id" component={PatientDetails} exact />
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
