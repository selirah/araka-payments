import axios, { AxiosResponse } from 'axios';

const API_ENDPOINT = process.env.apiEndpoint;

export async function callApiGet(path: string): Promise<AxiosResponse> {
  return await axios.get(`${API_ENDPOINT}/api/${path}`);
}

export async function callApiPost(
  path: string,
  payload: any
): Promise<AxiosResponse> {
  return await axios.post(`${API_ENDPOINT}/api/${path}`, payload);
}
