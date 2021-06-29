import axios from "./instance";
import "./interceptors/request-interceptor";
import "./interceptors/response-interceptor";
import HttpClient from "./http-client";
import store from '@/store';

const { VUE_APP_API_URL } = process.env;

const key = "Authorization";

axios.defaults.headers.common[key] = `Bearer ` + store.state.auth.accessToken;

export default (resource: string, baseUrl: string = VUE_APP_API_URL) => new HttpClient(resource, baseUrl);
