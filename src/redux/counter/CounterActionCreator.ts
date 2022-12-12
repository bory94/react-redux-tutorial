import { createAction } from '@reduxjs/toolkit'

// 사실 symbol을 전달할 필요가 없다. action type만으로 구별할 수 있다.
const CounterActionCreator = {
  plus: createAction<{ symbol: string }>('plus'),
  minus: createAction<{ symbol: string }>('minus'),
}

export default CounterActionCreator
