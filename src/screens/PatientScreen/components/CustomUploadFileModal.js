import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, FormGroup, Row } from "reactstrap";

const CustomUploadFileModal = ({
  header,
  onChange,
  onSubmit,
  isActive,
  setIsActive,
}) => {
  return (
    <Modal
      show={isActive}
      onHide={setIsActive}
      dialogClassName="my-modal"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          Add New Document
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <FormGroup>
              <label className="form-control-label">{header}</label>
              <Col>
                <div className="custom-file">
                  <input
                    className="custom-file-input"
                    onChange={onChange}
                    id="projectCoverUploads"
                    type="file"
                  />
                </div>
              </Col>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col onClick={onSubmit}>
            <Button block type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CustomUploadFileModal;
