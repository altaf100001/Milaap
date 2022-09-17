import * as types from "./actionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

const loggedUser = {
  displayName: "",
  email: "",
  emailVerified: false,
  photoURL: "",
  refreshToken: "",
  uid: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case types.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    case types.REGISTER_SUCCESS:
      // return {
      //   ...state,
      //   loading: false,
      //   currentUser: action.payload,
      // };
    case types.LOGIN_SUCCESS:
    case types.GOOGLE_SIGN_IN_SUCCESS:
      let isGoogleLogging = false;

      if (types.GOOGLE_SIGN_IN_SUCCESS) {
        isGoogleLogging = true;

        loggedUser.displayName = action.payload.displayName;
        loggedUser.email = action.payload.email;
        loggedUser.emailVerified = action.payload.emailVerified;
        loggedUser.photoURL = action.payload.photoURL;
        loggedUser.refreshToken = action.payload.refreshToken;
        loggedUser.uid = action.payload.uid;
      }

      return {
        ...state,
        loading: false,
        currentUser: isGoogleLogging ? loggedUser : action.payload,
      };
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
    case types.GOOGLE_SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
