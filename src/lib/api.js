import axios from 'axios';

export const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const getMBTI = async (link) => {
    try {
        const { data } = await client.get('/sns/instagram', {
            link: link,
        });
      return data.mbti;
    } catch (err) {
      console.error(err);
    }
}
