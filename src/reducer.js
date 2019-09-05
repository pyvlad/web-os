const initialState = {
  backgroundType: "image",
  backgroundColor: "#ddf",
  backgroundImageUrl: process.env.PUBLIC_URL + "/files/hubble-extreme-deep-field.jpg"
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

    case 'SET_DESKTOP_SIZE':
      return {
        ...state,
        desktopWidth: action.width,
        desktopHeight: action.height
      }

    default:
      return state

  }
} 