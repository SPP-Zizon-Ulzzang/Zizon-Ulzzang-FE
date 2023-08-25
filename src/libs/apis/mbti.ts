import axios from 'axios';

import { ChemistryInfo, MBTIInfo, RankInfo } from '../../types/mbti';

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

export const getRank = async () => {
  try {
    const data = await client.get<RankInfo>('/rank');
    console.log('data: ', data.data);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};

export const getChemistry = async (idList: string[]) => {
  try {
    const queryParams = idList.map((id, index) => `id${index}=${id}`).join('&');
    const url = `https://mbtigram.shop/chemistry?${queryParams}`;

    const data = await client.get<ChemistryInfo>(`/chemistry?${url}`);
    console.log('data: ', data.data);
    return data.data;
  } catch (err) {
    console.error(err);
  }
};
