import axios from "axios";

const api = axios.create({
    baseURL: 'https://60330c61a223790017acf9f1.mockapi.io/',
});

export default api;