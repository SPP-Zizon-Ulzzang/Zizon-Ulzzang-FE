import { ChemistryInfo, MBTIInfo, RankInfo } from '../../types/mbti';
import { client } from './axios';

export const getMBTI = async (snsUrl: string) => {
  try {
    const { data } = await client.get<MBTIInfo>(`/sns/instagram?snsUrl=${snsUrl}`);
    console.log(data);
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
