

const defaultState = {
  date:[]
};
export const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREASE": {
      state.date.unshift(action.paylaod)
      return {date:[...state.date] };
    }
    default:
      return state
  }
};
