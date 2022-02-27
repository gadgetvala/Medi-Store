import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Functionality
import { AppContext } from "context/AppContext";
import { usePatientListScreenState } from "screens/PatientListScreen/usePatientListScreenState";
// Styles Import
import { Table } from "ant-table-extensions";
import Header from "components/header/Header";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";

// Table Columns
const COLUMNS = [
  {
    key: "id",
    title: "ID",
    align: "center",
    dataIndex: "id",
  },
  {
    key: "userAddress",
    title: "User Address",
    align: "center",
    dataIndex: "userAddress",
  },
  {
    key: "action",
    title: "Action",
    align: "center",
    dataIndex: "action",
    fixed: "right",
  },
];

/**
 * Main Component
 */
const PatientListScreen = () => {
  const [state] = usePatientListScreenState();
  const { user } = useContext(AppContext);

  const buildData = () => {
    let data = state.users.map((address, index) => {
      if (address === "" || address === null) return null;

      let action = (
        <Link to={`/doctor/patients/${address}`}>
          <Button color="primary" className="record_delete">
            View
          </Button>
        </Link>
      );

      return {
        id: index + 1,
        userAddress: address,
        action: action,
      };
    });

    data = data.filter((e) => e !== null);

    return data;
  };

  return (
    <>
      <Header name={user.name} />
      <br />
      <Container>
        <Card>
          <CardHeader>
            <h3>All Documents</h3>
          </CardHeader>
          <CardBody>
            <Table
              loading={state.isLoading}
              columns={COLUMNS}
              dataSource={buildData()}
            />
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default PatientListScreen;
