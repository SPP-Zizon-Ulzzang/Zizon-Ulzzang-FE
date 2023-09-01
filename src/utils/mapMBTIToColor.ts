import { MBTI_STYLE } from '../constants/result';

export const mapMBTIToColor = (mbti: string) => {
  const matchingMBTI = MBTI_STYLE.find((style) => style.MBTI === mbti);
  const sub_color = matchingMBTI?.sub_color;
  const main_color = matchingMBTI?.main_color;

  return {
    main_color,
    sub_color,
  };
};
