import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListGenerator from './ListGenerator'

class Products extends React.Component {
    render(){
      //console.log(this.props.data.productlist[0])
        return (
            <div>
              <h1>Products + </h1>
              <h4> General Hospital </h4>
              <ListGenerator data={this.props.generalhospital}/>
              <h4> Chemistry </h4>
              <ListGenerator data={this.props.chemistry}/>
              <h4> Microbiology </h4>
              <ListGenerator data={this.props.microbiology}/>
            </div>

        );
    }
};

// DistributionMap.propTypes = {
//     countries: PropTypes.shape({})
// };


export default Products;
