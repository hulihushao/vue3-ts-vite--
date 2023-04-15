import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios";
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 10000,
});
//console.log(import.meta.env)
// http request 拦截器
instance.interceptors.request.use(
  (config:AxiosRequestConfig) => {
    // 配置请求头
    config.headers = {
      // 'Content-Type':'application/x-www-form-urlencoded',   // 传参方式表单
      "Content-Type": "application/json;charset=UTF-8", // 传参方式json
      Authorization: ``, // 设置Authorization
      // 'token': token.value // 或者设置token
    };
    return config;
  },
  (error:AxiosError) => {
    return Promise.reject(error);
  }
);

// http response 拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response) {
      // 判断错误状态码
      if (response.status === 400) {
        // 请求400
      } else if (response.status === 401) {
        // 未授权，请重新登录
      } else if (response.status === 403) {
        // 拒绝访问(403)
      }
      return Promise.reject(response.data);
    } else {
      console.log("网络连接异常,请稍后再试!");
    }
  }
);

// 封装 get post 请求
export default function request(url: string, params:object = {}, type = "POST") {
  return new Promise((resolve, reject) => {
    let promise:any
    if (type.toUpperCase() === "GET") {
      promise = instance({ url, params });
    } else if (type.toUpperCase() === "POST") {
      promise = instance({
        method: "POST",
        url,
        data: params,
      });
    }

    promise
      .then((res:AxiosResponse) => {
        resolve(res);
      })
      .catch((err:AxiosError) => {
        reject(err);
      });
  });
}
