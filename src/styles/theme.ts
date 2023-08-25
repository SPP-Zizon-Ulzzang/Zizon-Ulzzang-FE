import { css } from 'styled-components';

export const fonts = {
  Main: css`
    font-family: DM Sans;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem; /* 150% */
    letter-spacing: -0.032rem;
  `,
  Description: css`
    font-family: DM Sans;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.6rem; /* 133.333% */
    letter-spacing: -0.024rem;
  `,
  Button: css`
    font-family: DM Sans;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.4rem; /* 171.429% */
    letter-spacing: -0.028rem;
  `,
  Input_Before: css`
    font-family: DM Sans;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem; /* 200% */
    letter-spacing: -0.024rem;
  `,
  Input_After: css`
    font-family: DM Sans;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem; /* 171.429% */
    letter-spacing: -0.028rem;
  `,
  Information: css`
    font-family: DM Sans;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.35rem; /* 150% */
    letter-spacing: -0.018rem;
  `,
};

export const light = {
  colors: {
    Background: '#FFFFFF',
    Main: '#414141',
    Description: '#727272',
    Button_Active: '#373737',
    Button_Disabled: '#C6C6C6',
    Input_Area: '#F6F6F6',
    Information: '#A6A6A6',
  },
  fonts: { ...fonts },
};

export const dark = {
  colors: {
    Background: '#000000',
    Main: '#414141',
    Description: '#727272',
    Button_Active: '#373737',
    Button_Disabled: '#C6C6C6',
    Input_Area: '#F6F6F6',
    Information: '#A6A6A6',
  },
  fonts: { ...fonts },
};

export const theme = {
  dark,
  light,
};

export type Theme = typeof light;
