import {
  IcENFJChemistry,
  IcENFPChemistry,
  IcENTJChemistry,
  IcENTPChemistry,
  IcESFJChemistry,
  IcESFPChemistry,
  IcESTJChemistry,
  IcESTPChemistry,
  IcINFJChemistry,
  IcINFPChemistry,
  IcINTJChemistry,
  IcINTPChemistry,
  IcISFJChemistry,
  IcISFPChemistry,
  IcISTJChemistry,
  IcISTPChemistry,
} from '../assets/icons/chemistry';
import {
  IcENFJMain,
  IcENFPMain,
  IcENTJMain,
  IcENTPMain,
  IcESFJMain,
  IcESFPMain,
  IcESTJMain,
  IcESTPMain,
  IcINFJMain,
  IcINFPMain,
  IcINTJMain,
  IcINTPMain,
  IcISFJMain,
  IcISFPMain,
  IcISTJMain,
  IcISTPMain,
} from '../assets/icons/mbti';
import {
  IcENFJRank,
  IcENFPRank,
  IcENTJRank,
  IcENTPRank,
  IcESFJRank,
  IcESFPRank,
  IcESTJRank,
  IcESTPRank,
  IcINFJRank,
  IcINFPRank,
  IcINTJRank,
  IcINTPRank,
  IcISFJRank,
  IcISFPRank,
  IcISTJRank,
  IcISTPRank,
} from '../assets/icons/rank';

interface ResultImgEntry {
  MBTI: string;
  main: React.ReactNode;
  rank: React.ReactNode;
  chemistry: React.ReactNode;
}

export const RESULT_IMG: ResultImgEntry[] = [
  {
    MBTI: 'ENFJ',
    main: <IcENFJMain />,
    rank: <IcENFJRank />,
    chemistry: <IcENFJChemistry />,
  },
  {
    MBTI: 'ENFP',
    main: <IcENFPMain />,
    rank: <IcENFPRank />,
    chemistry: <IcENFJChemistry />,
  },
  {
    MBTI: 'ENTJ',
    main: <IcENTJMain />,
    rank: <IcENTJRank />,
    chemistry: <IcENTJChemistry />,
  },
  {
    MBTI: 'ENTP',
    main: <IcENTPMain />,
    rank: <IcENTPRank />,
    chemistry: <IcENTPChemistry />,
  },
  {
    MBTI: 'ESFJ',
    main: <IcESFJMain />,
    rank: <IcESFJRank />,
    chemistry: <IcESFJChemistry />,
  },
  {
    MBTI: 'ESFP',
    main: <IcESFPMain />,
    rank: <IcESFPRank />,
    chemistry: <IcESFPChemistry />,
  },
  {
    MBTI: 'ESTJ',
    main: <IcESTJMain />,
    rank: <IcESTJRank />,
    chemistry: <IcESTJChemistry />,
  },
  {
    MBTI: 'ESTP',
    main: <IcESTPMain />,
    rank: <IcESTPRank />,
    chemistry: <IcESTPChemistry />,
  },
  {
    MBTI: 'INFJ',
    main: <IcINFJMain />,
    rank: <IcINFJRank />,
    chemistry: <IcINFJChemistry />,
  },
  {
    MBTI: 'INFP',
    main: <IcINFPMain />,
    rank: <IcINFPRank />,
    chemistry: <IcINFPChemistry />,
  },
  {
    MBTI: 'INTJ',
    main: <IcINTJMain />,
    rank: <IcINTJRank />,
    chemistry: <IcINTJChemistry />,
  },
  {
    MBTI: 'INTP',
    main: <IcINTPMain />,
    rank: <IcINTPRank />,
    chemistry: <IcINTPChemistry />,
  },
  {
    MBTI: 'ISFJ',
    main: <IcISFJMain />,
    rank: <IcISFJRank />,
    chemistry: <IcISFJChemistry />,
  },
  {
    MBTI: 'ISFP',
    main: <IcISFPMain />,
    rank: <IcISFPRank />,
    chemistry: <IcISFPChemistry />,
  },
  {
    MBTI: 'ISTJ',
    main: <IcISTJMain />,
    rank: <IcISTJRank />,
    chemistry: <IcISTJChemistry />,
  },
  {
    MBTI: 'ISTP',
    main: <IcISTPMain />,
    rank: <IcISTPRank />,
    chemistry: <IcISTPChemistry />,
  },
];
