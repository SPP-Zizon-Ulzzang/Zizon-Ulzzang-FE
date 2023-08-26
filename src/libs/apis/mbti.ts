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
    const { data } = await client.get<MBTIInfo>(`/sns/instagram?snsUrl=${snsUrl}`);
    return data;
  } catch (err) {
    console.error(err);
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
  } catch (err) {
    console.error(err);
  }
};
