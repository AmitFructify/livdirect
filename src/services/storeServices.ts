const axios = require('axios').default;

const StoreServices = {
    storeList: () => {
        return axios.get('/v1/vendors');
    },
    storeProductList: (storeId: string) => {
        return axios.get(`/v1/vendors/${storeId}/products`);
    },
    storeProduct: (productId: string) => {
        return axios.get(`/v1/products/${productId}`);
    }
};

export default StoreServices;