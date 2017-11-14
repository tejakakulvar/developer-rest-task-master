/*
 * LoginPage
 *
 * Users login on this page
 * Route: /login
 *
 */

import React, { Component} from 'react';
import { connect } from 'react-redux';
import AnimatedPageWrapper from '../../utils/animation/AnimatedPageWrapper';

import LoginForm from '../account/LoginForm';
// import auth from '../../utils/auth';
import { login } from '../../actions/account/LoginActions';


class LoginPage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { formState, currentlySending } = this.props.data;
    return (
      <div className="form-page__wrapper">
        <div className="form-page__form-wrapper">
          <div className="form-page__form-header">
            <h2 className="form-page__form-heading">Login</h2>
          </div>
          {/* While the form is sending, show the loading indicator,
            otherwise show "Log in" on the submit button */}
          <LoginForm data={formState}
              dispatch={dispatch}
              location={location}
              history={this.props.history}
              onSubmit={this._login}
              currentlySending={currentlySending}/>
        </div>
      </div>
    );
  }

  _login(username, password) {
    this.dispatch(login.bind(this)(username, password));
  }
}
function mapStateToProps(state){
  return{
    data: state.auth
  };
}

// Apply animation for page
export default connect(mapStateToProps)(LoginPage);
