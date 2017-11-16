import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListGenerator from './ListGenerator'

class Products extends React.Component {
    render(){
        return (
            <div>
              <h1>Products <span className="glyphicon glyphicon-plus"></span></h1>
              <h4><b> General Hospital </b></h4>
              <ListGenerator data={this.props.generalhospital} modal={this.props.modal} handlingmodal = {this.props.handlingmodal} closingmodal={this.props.closingmodal}/>
              <h4><b> Chemistry </b></h4>
              <ListGenerator data={this.props.chemistry} modal={this.props.modal} handlingmodal = {this.props.handlingmodal} closingmodal={this.props.closingmodal}/>
              <h4><b> Microbiology </b></h4>
              <ListGenerator data={this.props.microbiology} modal={this.props.modal} handlingmodal = {this.props.handlingmodal} closingmodal={this.props.closingmodal}/>
            </div>

        );
    }
};

// DistributionMap.propTypes = {
//     countries: PropTypes.shape({})
// };


export default Products;
