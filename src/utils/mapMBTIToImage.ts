import { RESULT_IMG } from '../constants/image';

export const mapMBTIToImage = (mbti: string) => {
  const matchingMBTI = RESULT_IMG.find((item) => item.MBTI === mbti);
  const main_image = matchingMBTI?.main;
  const rank_image = matchingMBTI?.rank;
  const chemistry_image = matchingMBTI?.chemistry;

  return {
    main_image,
    rank_image,
    chemistry_image,
  };
};
