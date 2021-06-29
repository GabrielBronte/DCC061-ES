import axios from "./instance";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import Vue from "vue";
import store from "@/store";
import Auth from "@/store/modules/Auth/Auth.module";
import Load from "@/store/modules/Load/Load.module";
import { getModule } from "vuex-module-decorators";
import Notify from "@/core/notify";
const vm: any = new Vue({ store: store });

export default class HttpClient {
  public notify = Notify();
  private loadingStore: Load = getModule(Load, store);

  public constructor(
    private resource: string,
    private baseUrl: string = process.env.VUE_APP_API_URL
  ) {
    this.baseUrl = `${baseUrl}`;
    const myMod = getModule(Auth, store);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${myMod.accessToken}`;
  }

  public get(
    {
      action = "",
      loading = true,
      params = null,
      config = this.defaultConfig
    }:
      {
        action?: string;
        loading?: boolean;
        params?: any;
        config?: AxiosRequestConfig;
      }): Promise<AxiosResponse<any>> {
    this.loadingStore.showLoading(loading);
    return axios({
      method: "GET",
      url: `${this.resource}/${action}${this.createQueryString(params)}`,
      baseURL: this.baseUrl,
      headers: config.headers
    })
      .finally(() => {

        if (loading) {
          this.loadingStore.hideLoading();
        }

      });
  }

  public getCsv(
    {
      action = "",
      loading = true,
      params = null,
      config = this.defaultConfig
    }:
      {
        action?: string;
        loading?: boolean;
        params?: any;
        config?: AxiosRequestConfig;
      }): Promise<AxiosResponse<any>> {
    this.loadingStore.showLoading(loading);
    return axios({
      method: "GET",
      responseType: 'blob',
      url: `${this.resource}/${action}${this.createQueryString(params)}`,
      baseURL: this.baseUrl,
    })
      .finally(() => {

        if (loading) {
          this.loadingStore.hideLoading();
        }

      });
  }



  public deleteWithParam(
    {
      action = "",
      params = null,
      loading = true,
      config = this.defaultConfig
    }:
      {
        action?: string,
        params?: any,
        messages?: string[]
        loading?: boolean,
        config?: AxiosRequestConfig
      }
  ): Promise<AxiosResponse<any>> {
    this.loadingStore.showLoading(loading);
    return axios({
      method: "DELETE",
      url: `${this.resource}/${action}${this.createQueryString(params)}`,
      baseURL: this.baseUrl,
      headers: config.headers
    }).finally(() => {

      if (loading) {
        this.loadingStore.hideLoading();
      }

    });
  }

  public post(
    {
      action = "",
      body,
      loading = true,
      config = this.defaultConfig
    }:
      {
        action?: string,
        body?: any,
        messages?: string[]
        loading?: boolean,
        config?: AxiosRequestConfig
      }
  ): Promise<AxiosResponse<any>> {
    this.loadingStore.showLoading(loading);
    return axios({
      method: "POST",
      url: `${this.resource}/${action}`,
      baseURL: this.baseUrl,
      headers: config.headers,
      data: body
    }).finally(() => {

      if (loading) {
        this.loadingStore.hideLoading();
      }

    });
  }

  public put(
    {
      action = "",
      body,
      loading = true,
      config = this.defaultConfig
    }:
      {
        action?: string,
        body?: any | undefined,
        messages?: string[]
        loading?: boolean,
        config?: AxiosRequestConfig
      }
  ): Promise<AxiosResponse<any>> {
    this.loadingStore.showLoading(loading);
    return axios({
      method: "PUT",
      url: `${this.resource}/${action}`,
      baseURL: this.baseUrl,
      headers: config.headers,
      data: body
    }).finally(() => {

      if (loading) {
        this.loadingStore.hideLoading();
      }

    });
  }

  public patch(
    {
      action = "",
      body,
      loading = true,
      config = this.defaultConfig
    }:
      {
        action?: string,
        body?: any,
        messages?: string[],
        loading?: boolean,
        config?: AxiosRequestConfig
      }
  ): Promise<AxiosResponse<any>> {
    this.loadingStore.showLoading(loading);
    return axios({
      method: "PATCH",
      url: `${this.resource}/${action}`,
      baseURL: this.baseUrl,
      headers: config.headers,
      data: body
    }).finally(() => {

      if (loading) {
        this.loadingStore.hideLoading();
      }

    });
  }

  public delete(
    {
      action = "",
      loading = true,
      config = this.defaultConfig
    }:
      {
        action?: string,
        loading?: boolean,
        messages?: string[],
        config?: AxiosRequestConfig
      }
  ): Promise<AxiosResponse<any>> {
    this.loadingStore.showLoading(loading);
    return axios({
      method: "DELETE",
      url: `${this.resource}/${action}`,
      baseURL: this.baseUrl,
      headers: config.headers
    }).finally(() => {

      if (loading) {
        this.loadingStore.hideLoading();
      }

    });
  }
  public createQueryString(params: any) {
    if (params || (Array.isArray(params) && params.length > 0)) {
      return (
        "?" +
        Object.keys(params)
          .map(key => {
            if(params[key]) {
              const value = params[key];
              if(Array.isArray(value)){
                const query: any[] = [];
                value.forEach(element => {
                  query.push((encodeURIComponent(key) + "=" + encodeURIComponent(element)))
                });
                return query.join("&");
              } else {
                return (encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
              }  
            }
          })
          .join("&")
      );
    } else {
      return "";
    }
  }

  private get defaultConfig(): AxiosRequestConfig {
    return {
      headers: {
        "Content-Type": "application/json"
      }
    };
  }

}
