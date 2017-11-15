import { connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import AnimatedPageWrapper from '../../utils/animation/AnimatedPageWrapper';
import $ from 'jquery';
import { Grid, Row, Col } from 'react-bootstrap';


import DistributionMap from '../../components/client-dashboard/DistributionMap';
import Overview from '../../components/client-dashboard/Overview';
import Products from '../../components/client-dashboard/Products';

class DashboardPage extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-indicator">
          <ul>
            <li className="dashboard-selector world-map">
                <svg viewBox="0 0 24 24"><circle/></svg>
                <span><a onClick={()=>{this.toggleLayer('world-map')}} href="javascript:;" >Distrbution</a></span>
            </li>
            <li className="dashboard-selector dashboard-gauges">
                <svg viewBox="0 0 24 24"><circle/></svg>
                <span><a onClick={()=>{this.toggleLayer('dashboard-gauges')}} href="javascript:;" >Dashboard</a></span>
            </li>
          </ul>
        </div>
        <div className="dashboard-frame world-map">
            <DistributionMap />
        </div>
        <div className="dashboard-frame dashboard-gauges">
            <Grid>
                <Row className="show-grid">
                    <Col md={9} ><Overview /></Col>
                    <Col md={3} ><Products generalhospital={this.props.data.productlist[0]}
                                            chemistry = {this.props.data.productlist[1]}
                                            microbiology = {this.props.data.productlist[2]}/></Col>
                </Row>
            </Grid>
        </div>
      </div>
    );
  }

  toggleLayer(layer){
    let thisDOM = ReactDOM.findDOMNode(this);
    // reset css class
    $(thisDOM).find('.dashboard-frame').removeClass('dashboard-frame-active');
    $(thisDOM).find('ul li').removeClass('dashboard-selector-active');

    // apply active css class
    $(thisDOM).find('div.'+layer).addClass('dashboard-frame-active');
    $(thisDOM).find('li.'+layer).addClass('dashboard-selector-active');
  }

  componentDidMount() {
    // add mouse over effects by using jQuery
    let thisDOM = ReactDOM.findDOMNode(this);
    $(thisDOM).find('ul li').each((idx,el)=>{
        $(el).hover(
            ()=>{ $(el).addClass('dashboard-selector-hover');}, // mouse in
            ()=>{ $(el).removeClass('dashboard-selector-hover');} // mouse out
        );
    });

    this.toggleLayer('dashboard-gauges');
  }

}

// Which props do we want to inject, given the global state?
function select(state) {
    return {
        data: state,
    };
}

DashboardPage = AnimatedPageWrapper(DashboardPage);

// Wrap the component to inject dispatch and state into it
export default connect(select)(DashboardPage);
