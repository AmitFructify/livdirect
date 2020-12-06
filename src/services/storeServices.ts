const axios = require('axios').default;

const StoreServices = {
    storeList: () => {
        return axios.get('https://omni-hack.herokuapp.com/v1/vendors');
    },
    storeProductList: (storeId: string) => {
        return axios.get(`https://omni-hack.herokuapp.com/v1/vendors/${storeId}/products`);
    },
    storeProduct: (productId: string) => {
        return axios.get(`https://omni-hack.herokuapp.com/v1/products/${productId}`);
    },
    updateProduct: (requestObj: any) => {
        return axios.put(`https://omni-hack.herokuapp.com/v1/products/${requestObj.productId}`, requestObj.request);
    }
};

export default StoreServices;