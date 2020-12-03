const axios = require('axios').default;

const StoreServices = {
    storeList: () => {
        return axios.get('http://dummy.restapiexample.com/api/v1/employees');
    }
};

export default StoreServices;