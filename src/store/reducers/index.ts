import { combineReducers } from 'redux'
import userReducer from './user'
import loadingReducer from './loading'

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer
})
export type IRootState = ReturnType<typeof rootReducer>

export default rootReducer
