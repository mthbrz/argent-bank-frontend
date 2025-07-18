import axios from "axios";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const USER_LOGOUT = "USER_LOGOUT";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );

      const token = response.data.body.token;

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { token },
      });
    } catch (error) {
      console.error("Login error:", error);
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload:
          error.response?.data?.message || "Login failed",
      });
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: USER_LOGOUT });
  };
};
