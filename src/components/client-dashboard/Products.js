import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Products extends React.Component {
    render(){
        return (
            <div><h1>Products</h1></div>
        );
    }
};

// DistributionMap.propTypes = {
//     countries: PropTypes.shape({})
// };

Products = connect()(Products);

export default Products;
