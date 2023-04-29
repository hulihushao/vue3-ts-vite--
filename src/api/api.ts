import request from "@/utils/axios/axios";
let git_token=import.meta.env.VITE_GITHUB_TOKEN
export class Login {
  static login(data: object) {
    return request("", data, "post");
  }
}
export class Component {
  static getComponent(url: string, params: object={}) {
    return request(url, params, "get");
  }
}
export class GetWeather {
  static weather(params: object={}) {
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
        Authorization: `token ${git_token}`
      }
    );
  }
}
