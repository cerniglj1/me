import axios from 'axios';
/** 
 *  "http://localhost:8081/",
 *  "https://jamescerniglia.herokuapp.com/",
 * 
 *  */

const base = "http://localhost:8081/";
export default () => {

    return axios.create({
        baseURL: base
    })
}