import { HYDRATE } from 'next-redux-wrapper'
import { LOADING_UPDATE } from '../../actions'

const initialState = {
  open: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.loading }
    case LOADING_UPDATE:
      const newState = { ...state, ...action.payload }
      return newState
    default:
      return state
  }
}

export default reducer
