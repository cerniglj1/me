import axios from 'axios';
/** 
 *  "http://localhost:8081/",
 *  "https://jamescerniglia.herokuapp.com/",
 * 
 *  */

const base = "https://jamescerniglia.herokuapp.com/";
export default () => {

    return axios.create({
        baseURL: base
    })
}