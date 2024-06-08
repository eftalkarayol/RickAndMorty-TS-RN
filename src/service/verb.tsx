import {axiosClient} from './instance';
import {AxiosResponse} from 'axios';
interface RequestParams {
  [key: string]: any;
}

export async function getRequest(URL: string, params: RequestParams) {
  const response = await axiosClient.get(`${URL}`, {params: params});
  return response;
}
