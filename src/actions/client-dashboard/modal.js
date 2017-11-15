import {HANDLING_MODAL} from './../const';
export default function handlingModal(value){
  console.log(value);
  return{
    type: HANDLING_MODAL,
    payload: value
  };
}
