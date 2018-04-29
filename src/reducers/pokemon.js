import Store from '../store/member';

export const initialState = {
    list: [],
    isLoading: false,
    error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_POKEMON_COLLECTION': {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case 'LOAD_POKEMON_COLLECTION_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        error: null,
        list: action.data,
      };
      return initialState;
    }
    case 'LOAD_POKEMON_COLLECTION_ERROR': {
      if (action.data) {
        return {
          ...state,
          loading: false,
          error: action.data,
        };
      }
      return initialState;
    }
    default:
      return state;
  }
}
