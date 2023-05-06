import request from "@/utils/axios/axios";
import { Base64 } from "js-base64";

let git_token = import.meta.env.VITE_GITHUB_TOKEN;

git_token = Base64.decode(
  "Z2l0aHViX3BhdF8xMUFMQ0RTWlEwWFJjWFRiMXJOMnZDX2VqNTl0bUlBVVNrVkFGNG5vZUptY3Y2MkxnUEVsZVh1VHNuS1dZVTI5RXFIUEtFQVFOSXdYbkk3ek84"
); //解密
export class Login {
  static login(data: object) {
    return request("", data, "post");
  }
}
export class Component {
  static getComponent(url: string, params: object = {}) {
    return request(url, params, "get");
  }
  static getMd(url:string){
    return request(url, {}, "get");
  }
}
export class GetWeather {
  static weather(params: object = {}) {
    return request("https://api.vvhan.com/api/weather", params, "get");
  }
}
export class Github {
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
