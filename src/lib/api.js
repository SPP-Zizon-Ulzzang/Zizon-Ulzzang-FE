import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const getMBTI = async (snsUrl) => {
  try {
    const data = await client.get(`/sns/instagram?snsUrl=${snsUrl}`);
    console.log("data: ", data.data);
    return data.data;
  } catch (err) {
    console.error(err);
  }
}
