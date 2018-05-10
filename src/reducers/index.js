import member from './member';
import pokemon from './pokemon';
import locale from './locale';
import shiny from './shiny';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  rehydrated,
  member,
  pokemon,
  shiny,
  locale,
};
