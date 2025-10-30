import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const baseURL = import.meta.env.VITE_BASE_URL;
console.log(baseURL);
const client: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000, // 요청 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
});

// request intercept - 헤더에 accessToken 추가
client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      // 토큰이 있다면 헤더에 추가
      config.headers.Authorization = `Bearer ${token}`;
    }
    // config를 반환해야 요청이 계속 진행됨.
    return config;
  },
  (error: AxiosError) => {
    console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  }
);

// response intercept
client.interceptors.response.use(
  (response: AxiosResponse) => {
    // http status - 2xx
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      // http status가 2xx가 아닌 경우.
      // Token 만료는 서버가 보내주기로 한 status 에 맞게 이곳에서 처리할 수 있다.
      console.error('Response Error:', error.response.data);
      switch (error.response.status) {
        case 401:
          console.log('401 Unauthorized');
          break;
        case 403:
          console.error('403 Forbidden.');
          break;
        case 500:
          console.error('500 Internal Server Error.');
          break;
        default:
          console.error(`Error ${error.response.status}: ${error.message}`);
      }
    } else if (error.request) {
      // 응답을 받지 못한 경우
      console.error('Network Error: No response received.', error.request);
    } else {
      // 요청 설정 중에 오류가 발생한 경우
      console.error('Axios Config Error:', error.message);
    }
    // 컴포넌트에서 catch 할 수 있도록 reject
    return Promise.reject(error);
  }
);

export default client;
