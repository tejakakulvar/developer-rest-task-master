/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from '../actions/';
import { BrowserRouter as Router, Route, Switch, browserHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

/* import CSS file */
import '../styles/main.css'

/* import UI components */
import Nav from '../components/common/Nav';
import HomePage from './pages/HomePage';
import ClientDashboardPage from './pages/ClientDashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';

class MyRoute extends Route {
   /**
   * Redirect to dashboard if user is already logged in
   * @return {}
   */
  componentWillMount(){
    super.componentWillMount();
    if(!this.props.data.loggedIn){
      console.log('Detected perviously session, redirecting to /dashboard');
      this.context.router.history.replace('/client-dashboard');
    }
  }
}

/* Populated by react-webpack-redux:reducer */
class App extends Component {

  render() {
    return (
        <Router>
          <div className="wrapper" >
            <MyRoute component={Nav} data={this.props.data.auth} />
            <Switch>
              <Route exaact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/client-dashboard" component={ClientDashboardPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </Router>
    );
  }

}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({})
};
function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    data: state
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
