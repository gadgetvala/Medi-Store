// Global Imports
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Local Imports
import { AppProvider } from "context/AppContext";
import NotificationToast from "components/notificationToast/NotificationToast";
// Screens Imports
import RolesScreen from "screens/RolesScreen/RolesScreen";
import DoctorScreen from "screens/DoctorScreen/DoctorScreen";
import PatientScreen from "screens/PatientScreen/PatientScreen";
import PatientDetails from "screens/DoctorScreen/patientDetails";
import RegisterPatientScreen from "screens/RegisterScreen/RegisterScreen";
import PatientDocumentScreen from "screens/PatientDocumentScreen/PatientDocumentScreen";
// Style Imports
import "antd/dist/antd.css";

/**
 * Main App Driver
 */
const App = () => {
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
              path="/patient/record"
              component={PatientDocumentScreen}
              exact
            />
            {/* <Route path="/doctor/patient/view" component={ViewPatient} exact /> */}
            <Route
              path="/doctor/patient/detail/:id"
              component={PatientDetails}
              exact
            />
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
