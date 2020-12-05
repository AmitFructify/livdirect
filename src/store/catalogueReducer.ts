import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import storeServices from "../services/storeServices";

interface ICatalogState {
  searchString: string;
  storeList: any[];
  filters: string[];
  storeProducts: any[];
  product: any;
}

const initialState: ICatalogState = {
  searchString: "",
  storeList: [],
  filters: [],
  storeProducts: [],
  product: null
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

export const fetchProduct: any = createAsyncThunk(
  'catalogue/fetchProduct',
  async (productId: string) => {
    const response = await storeServices.storeProduct(productId);
    return response.data;
  }
)

const catalogSlice = createSlice({
  name: 'catalogue',
  initialState,
  reducers: {
    setSearchString(state, action: PayloadAction<any>) {
      state.searchString = action.payload;
      return state;
    },
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
      if (action.payload) {
        state.storeList = action.payload;
      }
    },
    [fetchStoreProducts.fulfilled]: (state, action) => {
      state.storeProducts = action.payload;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
    }
  }
});

export const { setSearchString, setStoreList, setFilters } = catalogSlice.actions;

export const searchString = (state: any) => state.catalogue.searchString;
export const filters = (state: any) => state.catalogue.filters;
export const storeList = (state: any) => {
  let stores = state.catalogue.storeList;
  let searchInput = state.catalogue.searchString;
  if (searchInput) {
    stores = stores.filter((store: any) => store.store_kind.toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
  }

  if (state.catalogue.filters.includes("Sample Delivery")) {
    stores = stores.filter((store: any) => store.sample_delivery);
  }

  if (state.catalogue.filters.includes("Virtual Assist")) {
    stores = stores.filter((store: any) => store.virtual_assistance);
  }

  return stores;
};


export const storeById = (state: any, id: number) => {
  let store = state.catalogue.storeList.find((item: any) => item.id == id);
  return store;
};
export const storeProducts = (state: any) => state.catalogue.storeProducts;
export const product = (state: any) => state.catalogue.product;

export default catalogSlice.reducer;