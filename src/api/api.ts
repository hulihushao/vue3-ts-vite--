import request from "@/utils/axios/axios";
import { Base64 } from "js-base64";

let git_token = import.meta.env.VITE_GITHUB_TOKEN;

git_token = Base64.decode(
  "Z2l0aHViX3BhdF8xMUFMQ0RTWlEwWFJjWFRiMXJOMnZDX2VqNTl0bUlBVVNrVkFGNG5vZUptY3Y2MkxnUEVsZVh1VHNuS1dZVTI5RXFIUEtFQVFOSXdYbkk3ek84"
); //解密
/**
 * 登录
 */
export class Login {
  //登录
  static login(data: object) {
    return request("", data, "post");
  }
}
/**
 * 组件
 */
export class Component {
  //获取组件代码
  static getComponent(url: string, params: object = {}) {
    return request(
      "https://raw.githubusercontent.com/hulihushao/vue3-ts-vite--/main" + url,
      params,
      "get"
    );
  }
  //获取文档
  static getMd(url: string) {
    return request(url, {}, "get");
  }
}
/**
 * 天气
 */
export class GetWeather {
  //获取天气
  static weather(params: object = {}) {
    return request("https://api.vvhan.com/api/weather", params, "get");
  }
}
/**
 * github
 */
export class Github {
  //获取提交记录
  static getCommits() {
    return request(
      "https://api.github.com/repos/hulihushao/vue3-ts-vite--/commits?per_page=10&sha=main",
      {},
      "get",
      {
        //解除githubAPI请求次数限制为5000，有效期一个月
        Authorization: `token ${git_token}`,
      }
    );
  }
}
