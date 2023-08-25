import axios from 'axios';

import { MBTIInfo } from '../../types/mbti';

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const getMBTI = async (snsUrl: string) => {
  try {
    const data = await client.get<MBTIInfo>(`/sns/instagram?snsUrl=${snsUrl}`);
    console.log('data: ', data.data);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};