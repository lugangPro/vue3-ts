import Axios from './axios'
import { AxiosResponse } from 'axios'

interface LoginParams {
  username: string
  password: string
}
//封装User类型的接口方法
export class LoginService {
  static async login(params: LoginParams): Promise<AxiosResponse> {
    return Axios('/user', {
      method: 'get',
      responseType: 'json',
      params: {
        ...params
      },
    })
  }

}