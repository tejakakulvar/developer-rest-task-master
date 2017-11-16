import { HANDLING_MODAL, CLOSING_MODAL } from './../actions/const';

const modal = {
  visiblevalue: false,
  data: []
}

export default function(state=modal, action){
  switch(action.type){
    case HANDLING_MODAL:
      const modalOpen = {
        visiblevalue: true,
        data: action.payload.data
      };
      return modalOpen;
    case CLOSING_MODAL:
      return modal;
    }
  return modal;
}
