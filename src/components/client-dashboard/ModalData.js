import React from 'react';
import { Modal } from 'react-bootstrap';

class ModalData extends React.Component{

  render(){
    const modalStyle = {
      position: 'fixed',
      zIndex: 1040,
      height: 400,
      top: 0, bottom: 0, left: 0, right: 0
    };
    const backdropStyle = {
      backgroundColor: 'grey',
      opacity: 0.1
    };
    return(
      <div>
        <Modal show={this.props.visible} onHide={() => this.props.closingmodal()} backdropStyle={backdropStyle}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.data.productname}
          <h4>Text in a modal</h4>
        </Modal.Body>
        <Modal.Footer>
        <h4>Text in a modal</h4>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default ModalData;
