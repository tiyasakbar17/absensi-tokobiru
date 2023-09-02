import axios from 'axios';

export enum StatusResponse {
  SUCCESS = 'success',
  FAILED = 'failed',
}

export type AxiosResponseTemplate<T = any> = {
  status: StatusResponse;
  message: string;
  data?: T;
  timestamp?: Date;
  path?: string;
};

export function setToken(token: string): void {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
