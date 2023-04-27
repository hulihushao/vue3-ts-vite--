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
  static getIP(params: object | undefined) {
    return request("/queryip", params, "get");
  }
}
export class Github {
  static getCommits() {
    return request(
      "https://api.github.com/repos/hulihushao/vue3-ts-vite--/commits?per_page=10&sha=main",
      {},
      "get",
      {
        Authorization: `token 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 `, // 设置Authorization
      }
    );
  }
}
