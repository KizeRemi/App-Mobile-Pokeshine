export const initialState = {
  pokemon: null,
  description: '',
  catchDate: '',
  youtube: '',
  isLoading: false,
  error: null,
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_SHINY':
    case 'NEW_SHINY': {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case 'NEW_SHINY_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case 'LOAD_SHINY_ERROR':
    case 'NEW_SHINY_ERROR': {
      if (action.data) {
        return {
          ...state,
          isLoading: false,
          error: action.data,
        };
      }
    }
    case 'LOAD_SHINY_SUCCESS': {
      const { data } = action;
      if(!data) {
        return initialState;
      }

      return {
        pokemon: data.pokemon,
        description: data.description,
        catchDate: data.catchDate,
        youtube: data.youtube,
        isLoading: false,
        image: data.image,
        tries: data.tries,
        error: action.data,
      };
    }
    default:
      return state;
  }
}
