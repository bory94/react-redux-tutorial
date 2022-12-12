import { useDispatch } from 'react-redux'

import CounterActionCreator from '../redux/counter/CounterActionCreator'

export const Right3 = () => {
  const dispatch = useDispatch()
  const onPlus = () => {
    console.log('onPlus Clicked')
    dispatch(CounterActionCreator.plus({ symbol: '+' }))
  }

  const onMinus = () => {
    console.log('onMinus Clicked')
    dispatch(CounterActionCreator.minus({ symbol: '-' }))
  }
  return (
    <div>
      <h4>Right3</h4>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  )
}
