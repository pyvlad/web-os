const initialState = {
  backgroundColor: "#ddf",
  backgroundImageUrl: "/files/hubble-extreme-deep-field.png"
}

export default (state=initialState, action) => {
  switch (action.type) {

    case 'SET_BACKGROUND_COLOR': 
      return {
        ...state, 
        backgroundColor: action.color, 
        backgroundImageUrl: undefined
      }

    case 'SET_BACKGROUND_IMAGE':
      return {
        ...state, 
        backgroundColor: undefined,
        backgroundImageUrl: action.backgroundImageUrl
      }

    default:
      return state

  }
} 