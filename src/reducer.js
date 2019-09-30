const initialState = {
  backgroundType: "image",
  backgroundColor: "#ddf",
  backgroundImageUrl: process.env.PUBLIC_URL + "/files/hubble-extreme-deep-field.jpg",
  isSettingsMenuOpen: false
}

export default (state=initialState, action) => {
  switch (action.type) {

    case 'SET_BACKGROUND_TYPE':
      return {
        ...state,
        backgroundType: action.bgType
      }

    case 'SET_BACKGROUND_COLOR': 
      return {
        ...state, 
        backgroundColor: action.color
      }

    case 'SET_BACKGROUND_IMAGE':
      return {
        ...state,
        backgroundImageUrl: action.url
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