import { createReducer } from '@reduxjs/toolkit'

import DarkModeTogglerActionCreator from './DarkModeTogglerActionCreator'

export type DarkModeStatesType = {
  darkMode: boolean
}

const DarkModeReducer = createReducer({ darkMode: false }, (builder) => {
  builder
    .addCase(DarkModeTogglerActionCreator.toggleMode, (state, action) => {
      state.darkMode = !state.darkMode
      if (state.darkMode) {
        document.querySelectorAll('body, div').forEach((el) => el.classList.add('dark'))
      } else {
        document
          .querySelectorAll('body, div')
          .forEach((el) => el.classList.remove('dark'))
      }
    })
    .addDefaultCase((state, action) => state)
})

export default DarkModeReducer
