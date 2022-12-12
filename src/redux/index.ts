import { combineReducers, configureStore } from '@reduxjs/toolkit'

import CounterReducer, { CounterStatesType } from './counter/CounterReducer'
import DarkModeTogglerReducer, {
  DarkModeStatesType,
} from './darkmode-toggler/DarkModeReducer'

export type RootStatesType = {
  counter: CounterStatesType
  darkModeToggler: DarkModeStatesType
}

const RootReducer = combineReducers({
  counter: CounterReducer,
  darkModeToggler: DarkModeTogglerReducer,
})

const AppStore = configureStore({ reducer: RootReducer })

export default AppStore
