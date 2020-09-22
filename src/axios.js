import axios from 'axios';

const instance = axios.create({
    baseURL:'https://raystatic-tinder-backend.herokuapp.com/'
})

export default instance;