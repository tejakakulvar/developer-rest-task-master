import { CHANGE_FORM,SET_AUTH,SENDING_REQUEST,SET_ERROR_MESSAGE } from './../actions/const';

// The initial application state
const initialState = {
  formState: {
    username: '',
    password: '',
    errorMessage: ''
  },
  currentlySending: false,
  loggedIn: (localStorage.isLoggedIn === "true")  // TODO: should remove localStorage for only testing
};


// Takes care of changing the application state
export default function auth(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return Object.assign({}, state, {
        formState: action.newState
      });
      break;
    case SET_AUTH:
      return Object.assign({}, state, {
        loggedIn: action.newState
      });
      break;
    case SENDING_REQUEST:
      return Object.assign({}, state, {
        currentlySending: action.sending
      });
      break;
    case SET_ERROR_MESSAGE:
      return Object.assign({}, state, {
        formState:{
          username: state.formState.username,
          password: state.formState.password,
          errorMessage: action.message
        }
      });
    default:
      return state;
  }
}
