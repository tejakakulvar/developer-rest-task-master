import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST, SET_ERROR_MESSAGE } from './../const';
import * as errorMessages from './../message';

export function login(username, password) {
    return (dispatch) => {
        // Show the loading indicator, hide the last error
        dispatch(sendingRequest(true));
        // If no username or password was specified, throw a field-missing error
        if (anyElementsEmpty({ username, password })) {
          dispatch(setErrorMessage(errorMessages.FIELD_MISSING));
          dispatch(sendingRequest(false));
          return;
        }

        preformLogin(username, password, (success, err) => {
          // When the request is finished, hide the loading indicator
          dispatch(sendingRequest(false));
          dispatch(setAuthState(success));
          if (success === true) {
            // If the login worked, forward the user to the dashboard and clear the form
            forwardTo.bind(this)('/client-dashboard');
            dispatch(changeForm({
              username: "",
              password: ""
            }));
          } else {
            switch (err.type) {
              case 'password-incorrect':
                dispatch(setErrorMessage(errorMessages.WRONG_PASSWORD));
                return;
              default:
                dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));
                return;
            }
          }
        });
    }
}

/**
 * Logs the current user out
 */
export function logout() {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    preformLogout((success, err) => {
      if (success === true) {
        dispatch(sendingRequest(false))
        dispatch(setAuthState(false));
        this.props.history.replace('/');
      } else {
        dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));
      }
    });
  }
}


/**
 * Sets the authentication state of the application
 * @param {boolean} newState True means a user is logged in, false means no user is logged in
 */
export function setAuthState(newState) {
  return { type: SET_AUTH, newState };
}

/**
 * Sets the form state
 * @param  {object} newState          The new state of the form
 * @param  {string} newState.username The new text of the username input field of the form
 * @param  {string} newState.password The new text of the password input field of the form
 * @return {object}                   Formatted action for the reducer to handle
 */
export function changeForm(newState) {
  return { type: CHANGE_FORM, newState };
}

/**
 * Sets the requestSending state, which displays a loading indicator during requests
 * @param  {boolean} sending The new state the app should have
 * @return {object}          Formatted action for the reducer to handle
 */
export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending };
}

/**
 * Sets the errorMessage state, which displays the ErrorMessage component when it is not empty
 * @param message
 */
function setErrorMessage(message) {
  return (dispatch) => {
    dispatch({ type: SET_ERROR_MESSAGE, message });

    const form = document.querySelector('.form-page__form-wrapper');
    if (form) {
      form.classList.add('js-form__err-animation');
      // Remove the animation class after the animation is finished, so it
      // can play again on the next error
      setTimeout(() => {
        form.classList.remove('js-form__err-animation');
      }, 150);

      // Remove the error message after 3 seconds
      setTimeout(() => {
        dispatch({ type: SET_ERROR_MESSAGE, message: '' });
      }, 3000);
    }
  }
}


/**
 * Forwards the user
 * @param {string} location The route the user should be forwarded to
 */
function forwardTo(location) {
  console.log('forwardTo(' + location + ')');
  this.history.push(location);
}

/**
 * Checks if any elements of a JSON object are empty
 * @param  {object} elements The object that should be checked
 * @return {boolean}         True if there are empty elements, false if there aren't
 */
function anyElementsEmpty(elements) {
  for (let element in elements) {
    if (!elements[element]) {
      return true;
    }
  }
  return false;
}

/**
 * Trigger the server API to perform login action
 * @param  {string} username
 * @param  {string} password cleartext format
 * @param  {Function} callback function with 2 parameters , sucess and errors
 * @return {null}
 */
function preformLogin(username, password, callback){
  // TODO: shoud replace this timeout to real network request
  setTimeout(()=>{
    let success;
    let error;
    if (username=='jixian' && password=='jixian'){
        success = true;
        // TODO: need to remove localStorage reference, its only for testing
        localStorage.isLoggedIn = true;
    }else{
        success = false
        error = {
          type: 'password-incorrect'
        }
    }
    callback(success,error);
  },1000);
}


function preformLogout(callback){
  // TODO: shoud replace this timeout to real network request
  // TODO: need to remove localStorage reference, its only for testing
  setTimeout(()=>{
    let success = true;
    let error = {};
    localStorage.isLoggedIn = false;
    callback(success,error);
  },1000);
}
