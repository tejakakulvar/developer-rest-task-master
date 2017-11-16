import React from 'react';
import { Modal } from 'react-bootstrap';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class ModalData extends React.Component{

  render(){
    const backdropStyle = {
      backgroundColor: 'grey',
      opacity: 0.1
    };
    return(
      <div>
        <Modal show={this.props.visible} onHide={() => this.props.closingmodal()} backdropStyle={backdropStyle}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Grid>
              <Row>
                <Col md={9}>
                  <Row>
                      <Col md={1}><span className="glyphicon glyphicon-barcode"></span></Col>
                      <Col md={8}>
                        <div className="productname"><h4>{this.props.data.productname}</h4></div>
                        <div className="modalData-descriptionshort">{this.props.data.productdescriptionshort}</div>
                        <div className="modalData-sincedate">{this.props.data.sincedate}</div>
                      </Col>
                  </Row>
                </Col>
              </Row>
            </Grid>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Row>
              <Col md={8}>
                <Row>
                  <Col md={2}><div><img src={this.props.data.imageurl} alt="image" className="img-rounded modal-image"></img></div></Col>
                  <Col md={6}>
                    <div className="productname"><h4>Summary</h4></div>
                    <div>{this.props.data.summary}</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <div className="productname"><h4>Description</h4></div>
          <div>{this.props.data.description}</div>
        </Modal.Body>
        <Modal.Footer>
          <table>
            <tr>
              <td className="discoverybutton">
                <Button className="btn btn-primary pull-left" type="submit"><span className="glyphicon glyphicon-search"></span> Discovery </Button>
              </td>
              <td>
                <div className="btn-group" >
                  <Button className="btn btn-default"><span className="glyphicon glyphicon-edit"></span>  Edit</Button>
                  <Button className="btn btn-default"><span className="glyphicon glyphicon-trash"></span> Delete</Button>
                </div>
              </td>
            </tr>
          </table>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default ModalData;
