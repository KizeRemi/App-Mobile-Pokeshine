import Store from '../store/member';

export const initialState = Store;

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
    case 'UPDATE_USER':
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
        isLoading: true,
        error: null,
        success: true,
      };
      return initialState;
    }
    case 'LOAD_USER_DETAILS_CONNECTED_SUCCESS': {
      const { data } = action;
      return {
        ...state,
        isLoading: false,
        error: null,
        id: data.id,
        username: data.username,
        signedUp: data.signedUp,
        friendCode: data.friendCode,
        age: data.age,
        region: data.region,
        nbrShinies: data.nbrShinies,
        avatar: data.avatar,
        token: action.token,
        currentHunt: data.currentHunt,
      }
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
