import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  isCartOpen: boolean;
  toaster: {
    isOpen: boolean;
    message: string;
    type: string;
  }
}
  
const initialState: AppState = {
  isCartOpen: false,
  toaster: {
    isOpen: false,
    message: "",
    type: ""
  }
}
  
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCartState: (state, action: PayloadAction<any>) => {
      state.isCartOpen = action.payload.isCartOpen;
      return state;
    },
    setToaster: (state, action: PayloadAction<any>) => {
      state.toaster = action.payload;
      return state;
    }
  },
});

export const isCartOpen = (state: any) => state.app.isCartOpen;
export const toaster = (state: any) => state.app.toaster;

export const { setCartState, setToaster } = appSlice.actions;

export default appSlice.reducer;