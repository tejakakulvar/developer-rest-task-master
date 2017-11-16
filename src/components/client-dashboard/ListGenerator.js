import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import ModalData from './ModalData'

class ListGenerator extends React.Component {
  handling({data},event){
    event.preventDefault();
    this.props.handlingmodal({data});
  }
  renderList(){
    return this.props.data.map((data) => {
      return(
      <li className="list-group-item" key={data.productname} onClick={(event)=>this.handling({data},event)}>
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

    return(
      <div>
        <ul className="list-group">
          {this.renderList()}
        </ul>
        <ModalData closingmodal={this.props.closingmodal} data={this.props.modal.data} visible={this.props.modal.visiblevalue} handlingmodal = {this.props.handlingmodal}/>
      </div>
    )
  }
}

export default ListGenerator;
