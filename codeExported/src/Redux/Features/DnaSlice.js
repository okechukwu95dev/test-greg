import { createSlice } from '@reduxjs/toolkit'
import currentImage from '../../assets/DNA/image1.png'

const initialState = {
  currentDna: currentImage,
}

export const dnaSlice = createSlice({
  name: 'dna',
  initialState,
  reducers: {
    setGlobalDna: (state, action) => {
        state.currentDna=  action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setGlobalDna } = dnaSlice.actions

export default dnaSlice.reducer