const initialState = {
  backgroundType: "image",
  backgroundColor: "#ddf",
  backgroundImageUrl: "/files/hubble-extreme-deep-field.png"
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

    default:
      return state

  }
} 