import axios from 'axios';
/** 
 *  "http://localhost:8081/",
 *  "https://jamescerniglia-api.herokuapp.com/",
 * 
 *  */

const base = "https://jamescerniglia-api.herokuapp.com/";
export default () => {
    return axios.create({
        baseURL: base
    })
}