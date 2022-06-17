import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage(state, action) {
      state && clearTimeout(state.timeoutId)
      return {
        ...state,
        message: action.payload
      }
    },
    removeNotification() {
      return null
    },
    setTimeoutId(state, action) {
      return {
        ...state,
        timeoutId: action.payload
      }
    }
  }
})

export const setNotification = (message, time) => {
  return dispatch => {
    dispatch(setMessage(message))
    const timeoutId = setTimeout(() => {
      dispatch(removeNotification())
    }, time*1000)
    dispatch(setTimeoutId(timeoutId)) 
  }
}

export default notificationSlice.reducer
export const {setMessage, removeNotification, setTimeoutId} = notificationSlice.actions