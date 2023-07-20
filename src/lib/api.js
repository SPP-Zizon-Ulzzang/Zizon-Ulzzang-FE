import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const getMBTIbyInsta = async (snsUrl) => {
  try {
    const data = await client.get(`/sns/instagram?snsUrl=${snsUrl}`);
    console.log("data: ", data.data);
    return data.data;
  } catch (err) {
    console.error(err);
    return err.response?.status; // error status (code)
  }
}

export const getMBTIbyIntroduction = async (text) => {
  try {
    const data = await client.get(`/sns/introduction?text=${text}`);
    console.log("data: ", data.data);
    return data.data;
  } catch (err) {
    console.error(err);
  }
}