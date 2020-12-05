const axios = require('axios').default;

const StoreServices = {
    storeList: () => {
        return axios.get('/v1/vendors');
    },
    storeProductList: (storeId: string) => {
        return axios.get(`/v1/vendors/${storeId}/products`);
    }
};

export default StoreServices;