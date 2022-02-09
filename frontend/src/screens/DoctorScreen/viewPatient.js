import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";
import { Table } from "ant-table-extensions";
import Header from "components/header/Header";
import { Link } from "react-router-dom";
function ViewPatient() {
  const [showLoad, setShowLoad] = useState(false);

  const data = [
    {
      id: 1,
      patient_id: "61f4f0980207b7070e5aa260",
      action: (
        <>
          <Link to="/doctor/patient/detail/id">
            <Button color="primary" className="record_delete">
              View
            </Button>
          </Link>
        </>
      ),
    },
  ];
  const column = [
    {
      key: "id",
      title: "#",
      align: "center",
      dataIndex: "id",
      sorter: (record1, record2) => {
        return record1.id > record2.id;
      },
    },
    {
      key: "patient_id",
      title: "Patient ID",
      align: "center",
      dataIndex: "patient_id",
      sorter: (record1, record2) => {
        return record1.patient_id > record2.patient_id;
      },
    },
    {
      key: "action",
      title: "Action",
      align: "center",
      dataIndex: "action",
      fixed: "right",
    },
  ];
  return (
    <>
      <Header name="sanjay" />
      <br />
      <Container>
        <Card>
          <CardHeader>
            <h3>All Patient</h3>
          </CardHeader>
          <CardBody>
            <Table
              style={{ whiteSpace: "pre" }}
              loading={showLoad}
              exportableProps={{
                fileName: "Patient Data",
                showColumnPicker: true,
              }}
              pagination={{
                pageSizeOptions: ["5", "10", "30", "60", "100"],
                showSizeChanger: true,
              }}
              columns={column}
              dataSource={data}
            />
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default ViewPatient;
