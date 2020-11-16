import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        currentLocation: action.payload
      }
    case 'SET_CURRENT_WEATHER':
      return {
        ...state,
        currentWeatherAtLocation: action.payload
      }
    case 'SET_CURRENT_LOCATION_DETAILS':
      return {
        ...state,
        currentLocationDetails: action.payload
      }
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}
export default rootReducer