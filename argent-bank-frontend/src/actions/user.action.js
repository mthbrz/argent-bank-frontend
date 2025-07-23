import axios from "axios";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_DATA ="USER_DATA";
export const USER_CHECKED = "USER_CHECKED";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        { email, password }
      );

      const token = response.data.body.token;
      localStorage.setItem("token", token);

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: { token },
      });
      dispatch(loadUserFromStorage());
    } 
    catch (error) {
      console.error("Login error:", error);
      dispatch({
        type: USER_LOGIN_FAILURE,
        payload:
          error.response?.data?.message || "Login failed",
      });
}
  };
};



export const loadUserFromStorage = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      dispatch({ type: USER_CHECKED });
      return;
    }

    try {

      dispatch({ 
        type: USER_LOGIN_SUCCESS, 
        payload: { token } 
      });

      const response = await axios.get("http://localhost:3001/api/v1/user/profile", {
        headers: {
        Authorization: `Bearer ${token}`,
        },
      });
        
      dispatch({
        type: USER_DATA,
        payload: response.data.body,
      });

    } catch (error) {
        console.error("Error fetching user data:", error);
        dispatch(logoutUser());
    } finally {
        dispatch({ type: USER_CHECKED });
      }
    }
  };


export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_CHECKED });
  };
};


