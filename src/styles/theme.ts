import { css } from 'styled-components';

export const fonts = {
  Head1: css`
    font-family: 'Pretendard';
    font-size: 4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 4rem; /* 100% */
  `,
  Head2: css`
    font-family: 'DM Sans';
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem; /* 109.091% */
    letter-spacing: 0.022rem;
  `,
  Head3: css`
    font-family: 'DM Sans';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem; /* 150% */
    letter-spacing: -0.032rem;
  `,
  Title1: css`
    font-family: 'DM Sans';
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem; /* 150% */
    letter-spacing: 0.016rem;
  `,
  Title2: css`
    font-family: 'DM Sans';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem; /* 171.429% */
    letter-spacing: 0.014rem;
  `,
  Body1: css`
    font-family: 'DM Sans';
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem; /* 141.176% */
    letter-spacing: -0.034rem;
  `,
  Body2: css`
    font-family: 'DM Sans';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem; /* 160% */
    letter-spacing: -0.03rem;
  `,
  Body3: css`
    font-family: 'DM Sans';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem; /* 171.429% */
    letter-spacing: -0.028rem;
  `,
  Body4: css`
    font-family: 'DM Sans';
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.1rem; /* 150% */
    letter-spacing: -0.028rem;
  `,
  Body5: css`
    font-family: 'DM Sans';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.6rem; /* 133.333% */
    letter-spacing: -0.024rem;
  `,
  Body6: css`
    font-family: 'DM Sans';
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6rem; /* 133.333% */
    letter-spacing: -0.024rem;
  `,
  Body7: css`
    font-family: 'DM Sans';
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.35rem; /* 150% */
    letter-spacing: -0.018rem;
  `,
};

export const light = {
  colors: {
    Black: '#212121',
    White: '#FFFFFF',
    Gray1: '#FBFBFB',
    Gray2: '#EEEEEE',
    Gray3: '#ADADAD',
    Gray4: '#727272',
    Gray5: '#414141',
    Green: '#239F83',
    Purple: '#9F74B1',
    Blue: '#4DC0DC',
    Yellow: '#F1CA77',
    LightGreen: '#D2E7E4',
    LightPurple: '#EADFEE',
    LightBlue: '#C7E3EF',
    LightYellow: '#F6E9CA',
  },
  fonts: { ...fonts },
};

export const dark = {
  colors: {
    Black: '#212121',
    White: '#FFFFFF',
    Gray1: '#FBFBFB',
    Gray2: '#EEEEEE',
    Gray3: '#ADADAD',
    Gray4: '#727272',
    Gray5: '#414141',
    Green: '#239F83',
    Purple: '#9F74B1',
    Blue: '#4DC0DC',
    Yellow: '#F1CA77',
    LightGreen: '#D2E7E4',
    LightPurple: '#EADFEE',
    LightBlue: '#C7E3EF',
    LightYellow: '#F6E9CA',
  },
  fonts: { ...fonts },
};

export const theme = {
  dark,
  light,
};

export type Theme = typeof light;
