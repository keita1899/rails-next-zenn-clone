import { AxiosResponseHeaders, RawAxiosRequestHeaders } from 'axios'

export const storeAuthToken = (
  headers: AxiosResponseHeaders | Partial<RawAxiosRequestHeaders>,
) => {
  localStorage.setItem('access-token', headers['access-token'])
  localStorage.setItem('client', headers['client'])
  localStorage.setItem('uid', headers['uid'])
}
