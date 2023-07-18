import styled from 'styled-components';

const Login = () => {
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`

    return (
            <StInstaLoginBtn href={authUrl}>Instagram Login</StInstaLoginBtn>
    );
};

export default Login;

const StInstaLoginBtn = styled.a`
  display: flex;
  width: 20rem;
  height: 5rem;
  background-color: #0095f6;
  border-radius: 0.9rem;
  object-fit: cover;

  font-size: 2.5rem;
  color:white;
`;