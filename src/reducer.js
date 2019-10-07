const initialState = {
  background: {
    type: "image",
    color: "#ddf",
    imageUrl: process.env.PUBLIC_URL + "/files/hubble-extreme-deep-field.jpg"
  },
  isSettingsMenuOpen: false
}

export default (state=initialState, action) => {
  switch (action.type) {

    case 'SET_BACKGROUND':
      return {
        ...state,
        background: action.background
      }

    case 'SET_IS_SETTINGS_MENU_OPEN':
      return {
        ...state,
        isSettingsMenuOpen: action.value
      }

    default:
      return state

  }
} 