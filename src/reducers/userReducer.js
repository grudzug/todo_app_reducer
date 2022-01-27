export function userReducer(state, action) {
    switch (action.type) {
      case 'SET_USER': 
        return {
          ...state,
          name: action.user
        }
      default:
        return state
  }
}