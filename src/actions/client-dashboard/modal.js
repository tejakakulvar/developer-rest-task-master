import {HANDLING_MODAL,CLOSING_MODAL} from './../const';

export function handlingmodal(value){
  return{
    type: HANDLING_MODAL,
    payload: value
  };
}

export function closingmodal(){
  return{
    type: CLOSING_MODAL,
    payload: false
  };
}
