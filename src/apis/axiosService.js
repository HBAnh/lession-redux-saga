import axios from 'axios';

class AxiosService {
    constructor() {
        const instance = axios.create(); // khởi tạo trường hợp
        instance.interceptors.response.use(this.handleSucces,this.handleError) 
        this.instance = instance;
    }
    handleSucces(response) {
        return response;
    }

    handleError(error){
        return error;
    }

    get(url) {
        return this.instance.get(url)
    }
}

export default new AxiosService();