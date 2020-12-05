const axios = require('axios').default;

const StoreServices = {
    storeList: () => {
        return axios.get('/v1/vendors');
    }
};

export default StoreServices;