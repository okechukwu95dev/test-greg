import { createSlice } from '@reduxjs/toolkit'
import currentImage from '../../assets/BACKGROUND/image1.png'

const initialState = {
  currentBackground: currentImage,
}

export const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    setGlobalBackground: (state, action) => {
        state.currentBackground=  action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setGlobalBackground } = backgroundSlice.actions

export default backgroundSlice.reducer