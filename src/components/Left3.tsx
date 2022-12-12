import { useDispatch, useSelector } from 'react-redux'

import { RootStatesType } from '../redux'
import DarkModeTogglerActionCreator from '../redux/darkmode-toggler/DarkModeTogglerActionCreator'

export const Left3 = () => {
  const dispatch = useDispatch()
  const count = useSelector((state: RootStatesType) => state.counter).count
  const darkMode = useSelector((state: RootStatesType) => state.darkModeToggler).darkMode

  const toggleDarkMode = () => {
    dispatch(DarkModeTogglerActionCreator.toggleMode())
  }
  return (
    <div>
      <h4>Left3</h4>
      <h5>Number = {count}</h5>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'To LightMode' : 'To DarkMode'}
      </button>
    </div>
  )
}
