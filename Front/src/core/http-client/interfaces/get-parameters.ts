import { AxiosRequestConfig } from "axios";

export interface  GetParameters {
    action: string;
    loading: boolean;
    params: any;
    config: AxiosRequestConfig;
}