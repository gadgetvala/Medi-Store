import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, FormGroup, Input, Row } from "reactstrap";

const CustomModal = ({
  header,
  onTextChange,
  placeholder,
  onSubmit,
  isActive,
  setIsActive,
}) => {
  return (
    <Modal
      show={isActive}
      onHide={() => setIsActive(false)}
      dialogClassName="my-modal"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          {header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <FormGroup>
              <label className="form-control-label">ID</label>
              <Input
                onChange={onTextChange}
                id="example3cols1Input"
                placeholder={placeholder}
                required
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button block type="submit" onClick={onSubmit}>
              Submit
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
