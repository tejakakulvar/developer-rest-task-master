import React from 'react';
import {connect} from 'react-redux';

class ProductList extends React.Component {
  // renderList(){
  //   return this.props.data.generalhospital.map((data) => {
  //     return (
  //       <div className="panel-body">
  //         <ul className="list-group">
  //           <li key={data.productname} className="list-group-item">{data.productname}</li>
  //           <li key={data.productdescriptionshort} className="list-group-item">{data.productdescriptionshort}</li>
  //           <li key={data.sincedate} className="list-group-item">{data.sincedate}</li>
  //         </ul>
  //       </div>
  //     );
  //   });
  // }
  //{this.renderList()}
  render(){
    console.log(this.props.generalhospital);
    console.log(this.props.microbiology);

    return(
      <div className="panel panel-default">
        <div className="panel-heading"><h4>GeneralHospital</h4></div>

      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    generalhospital: state.productlist[0],
    chemistry: state.productlist[1],
    microbiology: state.productlist[2]
  };
}

export default connect (mapStateToProps)(ProductList);
