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

    post(url, body){
        return this.instance.post(url,body);
    }
    put(url,body){
        return this.instance.put(url,body);
    }
    delete(url){
        return this.instance.delete(url);
    }
}

export default new AxiosService();