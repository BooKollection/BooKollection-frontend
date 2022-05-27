import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import reducers from './reducers'

export const store = configureStore({ reducer: reducers })

export const storeWrapper = createWrapper(() => store, { debug: false })
