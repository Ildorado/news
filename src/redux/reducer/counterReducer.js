const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADDCOUNTER': {
      console.log('state:', state);
      return state + 1;
    }
    default:
      return state;
  }
};
export default counterReducer;
