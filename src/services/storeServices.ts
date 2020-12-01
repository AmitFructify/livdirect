const axios = require('axios').default;

const StoreServices = {
    storeList: async (filter: string) => {
        return axios.get('http://demo.traccar.org/api/calendars')
        .then(function (response: any) {
            // handle success
            console.log(response);
        })
        .catch(function (error: Error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
};

export default StoreServices;