import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListGenerator from './ListGenerator'

class Products extends React.Component {
    render(){
      console.log(this.props.visiblevalue);
      //console.log(this.props.data.productlist[0])
        return (
            <div>
              <h1>Products <span className="glyphicon glyphicon-plus"></span></h1>
              <h4><b> General Hospital </b></h4>
              <ListGenerator data={this.props.generalhospital} visible={this.props.visiblevalue} handlingmodal = {this.props.handlingmodal}/>
              <h4><b> Chemistry </b></h4>
              <ListGenerator data={this.props.chemistry} visible={this.props.visiblevalue} handlingmodal = {this.props.handlingmodal}/>
              <h4><b> Microbiology </b></h4>
              <ListGenerator data={this.props.microbiology} visible={this.props.visiblevalue} handlingmodal = {this.props.handlingmodal}/>
            </div>

        );
    }
};

// DistributionMap.propTypes = {
//     countries: PropTypes.shape({})
// };


export default Products;
