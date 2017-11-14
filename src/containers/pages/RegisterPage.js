import { connect } from 'react-redux';
import RegisterPageComponenet from '../../components/pages/RegisterPage';


// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state.auth
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(RegisterPageComponenet);
