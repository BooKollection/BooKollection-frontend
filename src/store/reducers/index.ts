import { combineReducers } from 'redux'
import userReducer from './user'
import loadingReducer from './loading'
import snackbarReducer from './snackbar'
const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  snackbar: snackbarReducer
})
export type IRootState = ReturnType<typeof rootReducer>

export default rootReducer
