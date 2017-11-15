import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import { Modal } from 'react-bootstrap';


class ListGenerator extends React.Component {
  renderList(){
    return this.props.data.map((data) => {
      return(
      <li className="list-group-item" key={data.productname} onClick={() => this.props.handlingmodal(true)}>
        <Grid>
          <Row>
            <Col md={1}><span className="glyphicon glyphicon-barcode"></span></Col>
            <Col md={3}>
              <div className="productname"><b>{data.productname}</b></div>
              <div className="description">{data.productdescriptionshort}</div>
              <div className="sincedate">{data.sincedate}</div>
            </Col>
            <Col md={1} ><span className="glyphicon glyphicon-list"></span><span className="badge badge-notify ">4</span><span className="glyphicon glyphicon-chevron-right"></span></Col>
          </Row>
        </Grid>
        </li>
      );
    }

    );
  }
  render(){

    const backdropStyle = {
    backgroundColor: 'grey',
    opacity: 0.1
  };
  console.log(this.props.visible);
    return(
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
        <Modal show={this.props.visible} onHide={() => this.props.handlingmodal(false)} backdropStyle={backdropStyle}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
          </Modal.Body>
          <Modal.Footer>
          <h4>Text in a modal</h4>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ListGenerator;
