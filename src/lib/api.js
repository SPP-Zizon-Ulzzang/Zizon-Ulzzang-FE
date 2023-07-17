import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const getMBTI = async (_link) => {
  try {
    console.log("링크: ", _link)
    const {data}  = await client.get('/sns/instagram', {
        snsUrl: _link,
      });
      console.log("data: ", data)
      return data;
    } catch (err) {
      console.error(err);
    }
}
