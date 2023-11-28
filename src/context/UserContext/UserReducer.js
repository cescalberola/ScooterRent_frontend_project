const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.customer,
      };
    case "GET_USER_INFO":
      return {
        ...state,
        user: action.payload,//res.data
      };
      case "LOGOUT":
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};
export default users;