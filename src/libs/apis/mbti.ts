import axios from 'axios';
import NProgress from 'nprogress';

import { ChemistryInfo, MBTIInfo, RankInfo } from '../../types/mbti';

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

let requestCount = 0;

client.interceptors.request.use((config) => {
  if (requestCount === 0) {
    NProgress.start();
    NProgress.configure({ showSpinner: false });
    NProgress.configure({ minimum: 0.9 });
    NProgress.configure({ speed: 400 });
  }
  requestCount++;
  return config;
});

client.interceptors.response.use(
  (response) => {
    requestCount--;
    if (requestCount === 0) {
      NProgress.done();
    }
    return response;
  },
  (error) => {
    requestCount--;
    if (requestCount === 0) {
      NProgress.done();
    }
    return Promise.reject(error);
  },
);

export const getMBTI = async (snsUrl: string) => {
  try {
    const { data } = await client.get<MBTIInfo>(`/sns/instagram?snsUrl=${snsUrl}`);
    return data;
  } catch (err: any) {
    console.error(err);
    return err.response?.data.status;
  }
};

export const getRank = async () => {
  try {
    const { data } = await client.get<RankInfo>('/rank');
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getChemistry = async (idList: string[]) => {
  try {
    const queryParams = idList.map((id, index) => `id${index}=${id}`).join('&');
    const { data } = await client.get<ChemistryInfo>(`/sns/instagram/chemistry?${queryParams}`);
    return data;
  } catch (err: any) {
    console.error(err);
    return err.response?.data.status;
  }
};
