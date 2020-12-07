import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  isCartOpen: boolean;
  toaster: {
    isOpen: boolean;
    message: string;
    type: string;
  },
  newInCart: boolean;
}
  
const initialState: AppState = {
  isCartOpen: false,
  toaster: {
    isOpen: false,
    message: "",
    type: ""
  },
  newInCart: false
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
    },
    setNewInCart: (state, action: PayloadAction<any>) => {
      state.newInCart = action.payload;
      return state;
    }
  },
});

export const isCartOpen = (state: any) => state.app.isCartOpen;
export const toaster = (state: any) => state.app.toaster;
export const newInCart = (state: any) => state.app.newInCart;

export const { setCartState, setToaster, setNewInCart } = appSlice.actions;

export default appSlice.reducer;