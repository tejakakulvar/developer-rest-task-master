import { HANDLING_MODAL, CLOSING_MODAL } from './../actions/const';

const modal = {
  visiblevalue: false,
  data: []
}

export default function(state=modal, action){
  switch(action.type){
    case HANDLING_MODAL:
      return Object.assign({},state,{visiblevalue:true,data:action.payload.data});

    case CLOSING_MODAL:
      return Object.assign({},state,{visiblevalue:false});
    }
  return state;
}
