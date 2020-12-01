import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HomeState {
    productTree: object
}
  
const initialState: HomeState = { 
    productTree: {}
}
  
const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
      setHomeState(state, action: PayloadAction<object>) {
        state = {...state, ...action.payload};
      }
    },
});

export const { setHomeState } = homeSlice.actions;

export default homeSlice.reducer;