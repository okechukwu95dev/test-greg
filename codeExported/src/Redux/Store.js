import { configureStore } from '@reduxjs/toolkit'
import visionReducer from  '../Redux/Features/VisionSlice'
import dnaReducer from  '../Redux/Features/DnaSlice'
import backgroundReducer from  '../Redux/Features/BackgroundSlice'

export const store = configureStore({
  reducer: {
      vision: visionReducer,
      dna: dnaReducer,
      background: backgroundReducer,



  },
})