import React, { useContext } from "react";
// Functionality
import web3 from "web3_config/web3";
import mediStore from "web3_config/medistore";
import { AppContext } from "context/AppContext";
import {
  usePatientDocumentScreenState,
  ACTIONS,
} from "screens/PatientDocumentScreen/usePatientDocumentScreenState";
// Components
import ShowToast from "components/notificationToast/ShowToast";
// Assets
import NoImage from "assets/no_image_placeholder.jpg";
// Styles Import
import { Image } from "antd";
import { Table } from "ant-table-extensions";
import Header from "components/header/Header";
import ClipLoader from "react-spinners/BounceLoader";
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
    key: "document",
    title: "Documents",
    align: "center",
    dataIndex: "document",
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
const PatientDocumentScreen = () => {
  const [state, dispatch] = usePatientDocumentScreenState();
  const { user } = useContext(AppContext);

  const deleteDocuments = async (index) => {
    try {
      // Set State in Loading
      dispatch({ type: ACTIONS.TOGGLE_LOADING, payload: true });

      // Get User Accounts
      const accounts = await web3.eth.getAccounts();

      // Remove Documents
      await mediStore.methods.removePatientDocument(index).send({
        from: accounts[0],
      });

      // Get New Documents array
      const _allUsersDocuments = await mediStore.methods
        .getPatientDocuments()
        .call();

      dispatch({ type: ACTIONS.LOAD_DOCUMENT, payload: _allUsersDocuments });
      dispatch({ type: ACTIONS.TOGGLE_LOADING, payload: false });
    } catch (error) {
      ShowToast(error.message);
    }
  };

  const buildData = () => {
    let data = state.documents.map((document, index) => {
      if (document === "" || document === null) return null;

      let action = (
        <Button
          color="danger"
          className="record_delete"
          onClick={() => deleteDocuments(index)}
        >
          Delete
        </Button>
      );
      let documentPreview = (
        <Image
          width={150}
          height={100}
          src={`https://ipfs.io/ipfs/${document}`}
          placeholder={<ClipLoader />}
          fallback={<Image src={NoImage} width={200} height={200} />}
        />
      );

      return {
        id: index + 1,
        document: documentPreview,
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

export default PatientDocumentScreen;
