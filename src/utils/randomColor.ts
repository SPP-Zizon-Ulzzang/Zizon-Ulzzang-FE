import { MBTI_STYLE } from '../constants/result';

const randomIndex = Math.floor(Math.random() * MBTI_STYLE.length);
const randomMBTIStyle = MBTI_STYLE[randomIndex];

export const randomColor = randomMBTIStyle.main_color;
