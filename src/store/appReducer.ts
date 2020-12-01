import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  userId: string,
  userName: string
}
  
const initialState: AppState = { 
  userId: "",
  userName: "Amit"
}
  
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<typeof initialState>) => {
      return  action.payload;
    }
  },
});

export const selectUserName = (state: any) => state.app.userName

export const { setUserInfo } = appSlice.actions;

export default appSlice.reducer;