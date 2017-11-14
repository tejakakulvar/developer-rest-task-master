/*
 * RegisterPage
 *
 * Users login on this page
 * Route: /register
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import AnimatedPageWrapper from '../../utils/animation/AnimatedPageWrapper';
import RegisterForm from '../account/RegisterForm';
// import auth from '../../utils/auth';
// import { login } from '../../actions/AppActions';

class RegisterPage extends React.Component {
  render() {
    const dispatch = this.props.dispatch;
    const { formState, currentlySending } = this.props.data;
    return (
      <div className="form-page__wrapper">
        <div className="form-page__form-wrapper">
          <div className="form-page__form-header">
            <h2 className="form-page__form-heading">Register</h2>
          </div>
          {/* While the form is sending, show the loading indicator,
            otherwise show "Log in" on the submit button */}
          <RegisterForm data={formState}
              dispatch={dispatch}
              location={location}
              history={this.props.history}
              onSubmit={this._register}
              currentlySending={currentlySending}/>
        </div>
      </div>
    );
  }

  _register(username, password) {
    this.dispatch(login(username, password));
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state.auth
  };
}

RegisterPage = AnimatedPageWrapper(RegisterPage);

// Wrap the component to inject dispatch and state into it
export default connect(select)(RegisterPage);
