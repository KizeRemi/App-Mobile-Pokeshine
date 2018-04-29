import Store from '../store/member';

export const initialState = Store;

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
    case 'USER_SIGN_UP': {
      return {
        ...state,
        isLoading: true,
        error: null,
        success: false,
      };
    }
    case 'USER_SIGN_UP_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        error: null,
        success: true,
      };
      return initialState;
    }
    case 'USER_LOGIN_SUCCESS': {
      if (action.data) {
        return {
          ...state,
          isLoading: false,
          error: null,
          token: action.data.token,
        };
      }
      return initialState;
    }
    case 'USER_DETAILS_UPDATE': {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: null,
          firstName: action.data.firstName,
          lastName: action.data.lastName,
          signedUp: action.data.signedUp,
          role: action.data.role,
        };
      }
      return initialState;
    }
    case 'USER_ERROR': {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: action.data,
        };
      }
      return initialState;
    }
    case 'USER_RESET_TOKEN': {
      return {
        ...state,
        token: null,
      };
    }
    case 'USER_RESET': {
      return initialState;
    }
    default:
      return state;
  }
}
