import axios from "axios";
import md5 from "md5";
import {config} from "./config";

/**
 * allows us to make http requests type "GET"
 * @param {String} uri 
 * @param {Object} params 
 */
const callApi = (uri, params = {}) => {
    const ts = Date.now();
    const hash = md5(ts+config.private+config.public);
    return axios.get(config.base+uri, {
        params: {
            ts,
            apikey: config.public,
            hash,
            ...params
        }
    });
};

export default callApi;