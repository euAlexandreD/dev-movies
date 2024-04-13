import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: '233dce2ed41d28c36a10825de35d7498',
        language: 'pt-BR',
        page: 1,
    }
})

export default api