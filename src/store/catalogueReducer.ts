import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import storeServices from "../services/storeServices";

interface ICatalogState {
  storeList: any[];
  filters: string[];
  storeProducts: any[];
}
  
const initialState: ICatalogState = { 
  storeList: [],
  filters: [],
  storeProducts: []
}

export const fetchStores: any = createAsyncThunk(
  'catalogue/fetchStores',
  async () => {
    const response = await storeServices.storeList();
    return response.data.stores;
  }
)

export const fetchStoreProducts: any = createAsyncThunk(
  'catalogue/fetchStoreProducts',
  async (storeId: string) => {
    const response = await storeServices.storeProductList(storeId);
    return response.data.products;
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
      [fetchStores.fulfilled]: (state, action) => {
        state.storeList = action.payload;
      },
      [fetchStoreProducts.fulfilled]: (state, action) => {
        state.storeProducts = action.payload;
      }
    }
});

export const { setStoreList, setFilters } = catalogSlice.actions;

export const storeList = (state: any) => state.catalogue.storeList;
export const filters = (state: any) => state.catalogue.filters;

export const storeById = (state: any, id: number) => {
  let store = state.catalogue.storeList.find((item: any) => item.id == id);
  return store;
}
export const storeProducts = (state: any) => state.catalogue.storeProducts;

export default catalogSlice.reducer;