import { createReducer } from '@reduxjs/toolkit'

import CounterActionCreator from './CounterActionCreator'

export type CounterStatesType = { count: number }

const CounterReducer = createReducer({ count: 0 }, (builder) => {
  builder
    .addCase(CounterActionCreator.plus, (state, action) => {
      console.log(`PLUS Action`, action)
      state.count++
    })
    .addCase(CounterActionCreator.minus, (state, action) => {
      console.log(`MINUS Action`, action)
      state.count--
    })
    .addDefaultCase((state, action) => state)
})

export default CounterReducer
