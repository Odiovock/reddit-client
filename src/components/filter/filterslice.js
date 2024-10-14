const initialState = ''

export const fliterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return action.payload;
    case 'filter/clearFilter':
      return '';      
    default:
      return state;
  }
}

export function setFilter(term) {
  return {
    type: 'filter/setFilter',
    payload: term
  }
}

export function clearFilter() {
  return {
    type: 'filter/clearFilter'
  }
}

export const selectFilter = (state) => state.filter;