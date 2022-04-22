import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import reducers from './reducers'

const makeStore = () => {
  const store = configureStore({ reducer: reducers })

  return store
}

// export an assembled wrapper
export const storeWrapper = createWrapper(makeStore, { debug: false })
