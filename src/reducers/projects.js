import { CHANGE_FORM,SET_AUTH,SENDING_REQUEST,SET_ERROR_MESSAGE } from './../actions/const';

// The initial application state
const initialState = {
    projects:[
        {
            type: 'Ready to Submit',
            name: 'Export product A to China'
        },
        {
            type: 'Ready to Submit',
            name: 'Export product A to Japan'
        },
        {
            type: 'Ready to Submit',
            name: 'Export product A to Koeran'
        },
        {
            type: 'Ready to Submit',
            name: 'Export product A to Koeran'
        },

        {
            type: 'In Progress',
            name: 'Export product A to China'
        },
        {
            type: 'In Progress',
            name: 'Export product B to Japan'
        },
        {
            type: 'In Progress',
            name: 'Export product B to Japan'
        },
        {
            type: 'Pending Review',
            name: 'Export product A to China'
        },
        {
            type: 'Pending Review',
            name: 'Export product A to China'
        },

        {
            type: 'Finished',
            name: 'Export product A to China'
        }
    ]
};


// Takes care of changing the application state
export default function auth(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
