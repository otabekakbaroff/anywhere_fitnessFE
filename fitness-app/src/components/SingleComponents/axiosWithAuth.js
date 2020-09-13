import axios from 'axios';

const axiosWithAuth=()=>{
    return axios.create({
        baseURL: 'https://anywherefitnezz.herokuapp.com',
        headers:{
            Authorization: localStorage.getItem('token')
        }
    })
}
export default axiosWithAuth;