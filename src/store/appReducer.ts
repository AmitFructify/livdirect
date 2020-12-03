import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  isCartOpen: boolean;
}
  
const initialState: AppState = {
  isCartOpen: false
}
  
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCartState: (state, action: PayloadAction<any>) => {
      state.isCartOpen = action.payload.isCartOpen;
      return state;
    }
  },
});

export const isCartOpen = (state: any) => state.app.isCartOpen;

export const { setCartState } = appSlice.actions;

export default appSlice.reducer;