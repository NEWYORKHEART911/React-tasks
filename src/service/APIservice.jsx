import axios from 'axios';

class APIservice {
    getApiData() {
        return axios.get("https://jsonplaceholder.typicode.com/posts");
    }
}

export default new APIservice();