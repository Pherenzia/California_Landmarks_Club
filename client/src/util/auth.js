import { createContext, useContext, useEffect, useReducer } from "react";
import decode from "jwt-decode";
import * as API from "./api";

export const token = {
  set(value) {
    if (value) {
      localStorage.setItem("token", value);
      return;
    }
    localStorage.removeItem("token");
  },
  get() {
    return localStorage.getItem("token") || "";
  },
};

const parseToken = (token) => {
  const { exp, data } = decode(token);

  if (!exp || exp < Date.now() / 1000) {
    return { isLoggedIn: false, user: null };
  }

  return { isLoggedIn: true, user: data };
};

// actions
const LOADING = "LOADING";
const LOGOUT = "LOGOUT";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const ERROR = "ERROR";

const defaultState = {
  authToken: "",
  loading: false,
  error: null,
  isLoggedIn: false,
  user: null,
};

const initState = (initialState) => {
  const authToken = token.get();
  if (!authToken) {
    return initialState;
  }
  return {
    ...initialState,
    authToken,
    ...parseToken(authToken),
  };
};

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGOUT:
      return { ...defaultState, authToken: "" };

    case LOADING:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      const authToken = action.payload;
      const { user, isLoggedIn } = parseToken(authToken);
      return { ...state, loading: false, authToken, user, isLoggedIn };

    case ERROR:
      return {
        ...defaultState,
        error: action.payload,
      };

    default:
      throw new Error(`Invalid action '${action.type}'`);
  }
};

const authCtx = createContext({
  ...defaultState,
  login: async () => {},
  logout: async () => {},
  signup: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, defaultState, initState);

  useEffect(() => {
    token.set(state.authToken);
  }, [state.authToken]);

  const login = async ({ email, password }) => {
    dispatch({ type: LOADING });
    try {
      // TODO: implement improved validation.
      if (!email || !password) {
        // TODO: implement improved error message.
        throw new Error("The email or password you entered is incorrect.");
      }
      const data = await API.login({ email, password });
      dispatch({ type: LOGIN_SUCCESS, payload: data.token });
    } catch (error) {
      console.log(error);
      dispatch({ type: ERROR, payload: error.message });
    }
  };

  const signup = async ({ email, password, username }) => {
    dispatch({ type: LOADING });
    try {
      // TODO: implement improved validation.
      if (!email || !password || !username) {
        // TODO: implement improved error message
        throw new Error("The email or password or username you entered is incorrect.");
      }

      const data = await API.register({ email, username, password });
      dispatch({ type: LOGIN_SUCCESS, payload: data.token });
    } catch (error) {
      console.error(error);
      dispatch({ type: ERROR, payload: error.message });
    }
  };

  const logout = async () => {
    dispatch({ type: LOGOUT });
  };

  const auth = {
    ...state,
    login,
    logout,
    signup,
  };
  return <authCtx.Provider value={auth}>{children}</authCtx.Provider>;
};

export const useAuth = () => useContext(authCtx);
