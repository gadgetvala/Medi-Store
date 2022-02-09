import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Container } from "reactstrap";
import { Table } from "ant-table-extensions";
import Header from "components/header/Header";
function ViewDoctor() {
  const [showLoad, setShowLoad] = useState(false);

  const data = [
    {
      id: 1,
      name: "Sanjay Suthar",
      action: (
        <>
          <Button color="danger" className="record_delete">
            Remove
          </Button>
        </>
      ),
    },
  ];
  const column = [
    {
      key: "id",
      title: "ID",
      align: 'center',
      dataIndex: "id",
      sorter: (record1, record2) => {
        return record1.id > record2.id;
      },
    },
    {
      key: "name",
      title: "Name",
      align: 'center',
      dataIndex: "name",
      sorter: (record1, record2) => {
        return record1.name > record2.name;
      },
    },
    {
      key: "action",
      title: "Action",
      align: 'center',
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
            <h3>All Doctors</h3>
          </CardHeader>
          <CardBody>
            <Table
              style={{ whiteSpace: "pre" }}
              loading={showLoad}
              exportableProps={{
                fileName: "Doctor Data",
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

export default ViewDoctor;
