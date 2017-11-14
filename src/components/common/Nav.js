/**
 *
 * Nav.react.js
 *
 * This component renders the navigation bar
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/account/LoginActions';
import PropTypes from 'prop-types';
import LoadingButton from './LoadingButton';
import cssmodules from 'react-css-modules';
import styles from './nav.cssmodule.scss';

class Nav extends Component {
  render() {
    // Render either the Log In and register buttons, or the logout button
    // based on the current authentication state.
    const navButtons = this.props.loggedIn ? (
        <div>
          <Link to="/client-dashboard" className="btn btn--dash" styleName="btn--nav">Dashboard</Link>
          {this.props.currentlySending ? (
            <LoadingButton styleName="btn--nav" />
          ) : (
            <a href="#" className="btn btn--login" styleName="btn--nav" onClick={this._logout.bind(this)}>Logout</a>
          )}
        </div>
      ) : (
        <div>
          <Link to="/register" className="btn btn--login" styleName="btn--nav">Register</Link>
          <Link to="/login" className="btn btn--login" styleName="btn--nav">Login</Link>
        </div>
      );

    return(
      <div styleName="nav">
        <div styleName="nav__wrapper">
          <Link to="/" styleName="nav__logo-wrapper"><h1 styleName="nav__logo">React Test Task</h1></Link>
          {navButtons}
        </div>
      </div>
    );
  }

  _logout() {
    this.props.dispatch(logout.bind(this)());
  }

  onEnter(){
    debugger;
    console.log('on Enter');
  }
}

Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  currentlySending: PropTypes.bool.isRequired
}

function mapStateToProps(state) { // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    ...state.auth
  };
  return props;
}

export default connect(mapStateToProps)(cssmodules(Nav, styles, {allowMultiple:true}));
