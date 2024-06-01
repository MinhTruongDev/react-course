import axios from "axios";
import NProgress from 'nprogress';
import { store } from '../../redux/store';
NProgress.configure({
    showSpinner: false,
    trickleRate: 0.02,
    trickleSpeed: 50,
});

const instance = axios.create({
    baseURL: 'http://localhost:8081/'
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    console.log(">>>>>Check state: ", store?.getState());
    const access_token = store?.getState()?.loginUser?.account?.access_token;
    config.headers["Authorization"] = "Bearer " + access_token;
    NProgress.start();
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    NProgress.done();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('>>>>>>> API Response: ', response);
    return (response && response.data)
        ? response.data
        : response;
}, function (error) {
    NProgress.done();
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log('>>>>>>>>Error: ', error.response);
    return (error && error.response && error.response.data)
        ? error.response.data
        : Promise.reject(error);
});

export default instance;