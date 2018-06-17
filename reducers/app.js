export default (state={}, action) => {
  switch(action.type){
    case "LOGIN_USER":
    console.log('here');
      return {
        ...state,
        isLoggedIn : true
      }
    default:
      return state
  }
}