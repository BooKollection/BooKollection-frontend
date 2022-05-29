import { combineReducers } from 'redux'
import userReducer from './user'
const rootReducer = combineReducers({
  user: userReducer
})
export type IRootState = ReturnType<typeof rootReducer>

export default rootReducer
