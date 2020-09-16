const axios = require('axios');

const API_BASE_URL = 'https://randomuser.me/api/'

export const userService = {
    getUser: () => axios.get(`${API_BASE_URL}/?results=20`)
}