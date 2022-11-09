import { createSlice } from '@reduxjs/toolkit'
import currentImage from '../../assets/VISION/image1.png'

const initialState = {
  currentVision: currentImage,
}

export const visionSlice = createSlice({
  name: 'vision',
  initialState,
  reducers: {
    setGlobalVision: (state, action) => {
        state.currentVision=  action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setGlobalVision } = visionSlice.actions

export default visionSlice.reducer