import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class ListGenerator extends React.Component {
  renderList(){
    return this.props.data.map((data) => {
      return(
      <li className="list-group-item" >
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
      </div>
    )
  }
}

export default ListGenerator;
