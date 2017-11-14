import { CHANGE_FORM,SET_AUTH,SENDING_REQUEST,SET_ERROR_MESSAGE } from './../actions/const';

// The initial application state
const initialState = {
  fund:{
    balance: 8750,
    usedInLast7Days: 1250,
    usedInLast30Days: 2302
  }
};


// Takes care of changing the application state
export default function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
