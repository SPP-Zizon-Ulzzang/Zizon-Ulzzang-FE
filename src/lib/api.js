import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const getMBTI = async (snsUrl) => {
  try {
    console.log("snsUrl: ", snsUrl);
    const data = await client.get(`/sns/instagram?snsUrl=${snsUrl}`);
    console.log("data: ", data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
