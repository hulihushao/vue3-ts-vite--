import request from "@/utils/axios/axios";
export class Login {
  static login(data: object) {
    return request("", data, "post");
  }
}
export class Component {
  static getComponent(url: string, params: object | null | undefined) {
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
       // Authorization: `token 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`
      }
    );
  }
}
