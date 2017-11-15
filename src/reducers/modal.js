export default function(state=false, action){
  switch(action.type){
    case 'HANDLING_MODAL':
      return action.payload;
  }
  return state;
}
