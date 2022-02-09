import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";
import CardComponent from "../../components/card/Card";
import { Table } from "ant-table-extensions";
import Header from "components/header/Header";
function PatientDetails() {
  const [showLoad, setShowLoad] = useState(false);

  const data = [
    {
      id: 1,
      name: "Blood Test",
      action: (
        <>
          <Button className="record_delete" color="primary">
            View Document
          </Button>
          <Button>Download</Button>
        </>
      ),
    },
  ];
  const column = [
    {
      key: "id",
      title: "ID",
      align: "center",
      dataIndex: "id",
      sorter: (record1, record2) => {
        return record1.id > record2.id;
      },
    },
    {
      key: "name",
      title: "Name",
      align: "center",
      dataIndex: "name",
      sorter: (record1, record2) => {
        return record1.name > record2.name;
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
      <div className="patientScreen_data">
        <h2>Patient Detail</h2>
        <div>
          <CardComponent>
            <p>
              <span className="card_detailsCard--key">Name:</span>
            </p>
            <p>
              <span className="card_detailsCard--key">DOB:</span>
            </p>
            <p>
              <span className="card_detailsCard--key">ID:</span>
            </p>
            <p>
              <span className="card_detailsCard--key">Address:</span>
            </p>
          </CardComponent>
        </div>
      </div>
      </Container>
      <br />
      <Container>
        <Card>
          <CardHeader>
            <h3>Patient All Document</h3>
          </CardHeader>
          <CardBody>
            <Table
              style={{ whiteSpace: "pre" }}
              loading={showLoad}
              exportableProps={{
                fileName: "Records Data",
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

export default PatientDetails;
