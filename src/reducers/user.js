export const initialState = {
    usersTop: [],
    isLoading: false,
    error: null,
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOAD_USERS_TOP': {
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      }
      case 'LOAD_USERS_TOP_SUCCESS': {
        return {
          ...state,
          usersTop: action.data,
          isLoading: true,
          error: null,
        };
      }
      default:
        return state;
    }
  }               
  