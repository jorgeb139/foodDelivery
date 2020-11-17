const initialState = {
  loginStatus: false,
};

export const SIGNIN_STATUS = "teamly/settings/SIGNIN_STATUS";

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_STATUS:
      const { loginStatus } = action;
      return {
        loginStatus
      };
    default:
      return state;
  }
};

export const verifyLogin = (
  loginStatus  
) => ({
  type: SIGNIN_STATUS,
  loginStatus
});
