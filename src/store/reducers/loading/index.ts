import { HYDRATE } from 'next-redux-wrapper'
import { USER_UPDATE, USER_DELETE } from '../../actions'

const initialState = {
  id: null,
  name: null,
  email: null,
  token: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user }
    case USER_UPDATE:
      const newState = { ...state, ...action.payload }
      return newState
    case USER_DELETE:
      return {
        id: null,
        name: null,
        email: null,
        token:null
      }
    default:
      return state
  }
}

export default reducer
