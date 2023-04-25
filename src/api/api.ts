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
export class GetWeather{
  static getIP(params:object|undefined){
    return request("/queryip",params,"get")
  }
}
