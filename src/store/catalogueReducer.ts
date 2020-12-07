import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import storeServices from "../services/storeServices";

interface ICatalogState {
  searchString: string;
  storeList: any[];
  filters: string[];
  storeProducts: any[];
  product: any;
  cartProducts: any[];
  qrProduct: any;
}

const initialState: ICatalogState = {
  searchString: "",
  storeList: [],
  filters: [],
  storeProducts: [],
  product: null,
  cartProducts: [],
  qrProduct: null
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

export const updateProduct: any = createAsyncThunk(
  'catalogue/updateProduct',
  async (requestObj: any) => {
    const response = await storeServices.updateProduct(requestObj);
    return response.data.product;
  }
)

export const fetchCartProducts: any = createAsyncThunk(
  'catalogue/fetchCartProducts',
  async () => {
    const response = await storeServices.cartProducts();
    return response.data.products;
  }
)

export const fetchQRProduct: any = createAsyncThunk(
  'catalogue/fetchQRProduct',
  async (qrCode: string) => {
    const response = await storeServices.qrProduct(qrCode);
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
      state.storeList = action.payload;
    },
    [fetchStoreProducts.fulfilled]: (state, action) => {
      state.storeProducts = action.payload;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
    },
    [fetchCartProducts.fulfilled]: (state, action) => {
      state.cartProducts = action.payload;
    },
    [fetchQRProduct.fulfilled]: (state, action) => {
      state.qrProduct = action.payload;
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
    stores = stores.filter((store: any) => {
      return store.store_kind.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 || store.display_name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
    });
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
  let store = state.catalogue.storeList.find((item: any) => item.id === Number(id));
  return store;
};
export const storeProducts = (state: any) => state.catalogue.storeProducts;
export const product = (state: any) => state.catalogue.product;
export const cartProducts = (state: any) => state.catalogue.cartProducts;
export const qrProduct = (state: any) => state.catalogue.qrProduct;

export default catalogSlice.reducer;