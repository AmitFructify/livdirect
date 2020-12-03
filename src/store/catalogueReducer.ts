import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import storeServices from "../services/storeServices";

interface ICatalogState {
  storeList: any[];
  filters: string[];
}
  
const initialState: ICatalogState = { 
  storeList: [],
  filters: [],
}

export const fetchStores: any = createAsyncThunk(
  'catalogue/fetchStores',
  async (userId, thunkAPI) => {
    const response = await storeServices.storeList();
    return response.data.data;
  }
)
  
const catalogSlice = createSlice({
    name: 'catalogue',
    initialState,
    reducers: {
      setStoreList(state, action: PayloadAction<any>) {
        state.storeList = action.payload;
        return state;
      },
      setFilters(state, action: PayloadAction<any>) {
        state.filters = action.payload;
        return state;
      }
    },
    extraReducers: {
      // Add reducers for additional action types here, and handle loading state as needed
      [fetchStores.fulfilled]: (state, action) => {
        // Add user to the state array
        state.storeList = action.payload;
      }
    }
});

export const { setStoreList, setFilters } = catalogSlice.actions;
export const storeList = (state: any) => state.catalogue.storeList;
export const filters = (state: any) => state.catalogue.filters;
// export const storeById = (storeId: string, state: any) => {
//   state.catalogue.storeList.find((store: any) => store.id ==storeId);
// }

export default catalogSlice.reducer;