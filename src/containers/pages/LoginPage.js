import { connect } from 'react-redux';
import LoginPageComponenet from '../../components/pages/LoginPage';


// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state.auth
  };
}
debugger;

// Wrap the component to inject dispatch and state into it
export default connect(select)(LoginPageComponenet);
