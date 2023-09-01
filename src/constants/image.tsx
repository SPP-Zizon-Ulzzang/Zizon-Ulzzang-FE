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
}

export const RESULT_IMG: ResultImgEntry[] = [
  {
    MBTI: 'ENFJ',
    main: <IcENFJMain />,
    rank: <IcENFJRank />,
  },
  {
    MBTI: 'ENFP',
    main: <IcENFPMain />,
    rank: <IcENFPRank />,
  },
  {
    MBTI: 'ENTJ',
    main: <IcENTJMain />,
    rank: <IcENTJRank />,
  },
  {
    MBTI: 'ENTP',
    main: <IcENTPMain />,
    rank: <IcENTPRank />,
  },
  {
    MBTI: 'ESFJ',
    main: <IcESFJMain />,
    rank: <IcESFJRank />,
  },
  {
    MBTI: 'ESFP',
    main: <IcESFPMain />,
    rank: <IcESFPRank />,
  },
  {
    MBTI: 'ESTJ',
    main: <IcESTJMain />,
    rank: <IcESTJRank />,
  },
  {
    MBTI: 'ESTP',
    main: <IcESTPMain />,
    rank: <IcESTPRank />,
  },
  {
    MBTI: 'INFJ',
    main: <IcINFJMain />,
    rank: <IcINFJRank />,
  },
  {
    MBTI: 'INFP',
    main: <IcINFPMain />,
    rank: <IcINFPRank />,
  },
  {
    MBTI: 'INTJ',
    main: <IcINTJMain />,
    rank: <IcINTJRank />,
  },
  {
    MBTI: 'INTP',
    main: <IcINTPMain />,
    rank: <IcINTPRank />,
  },
  {
    MBTI: 'ISFJ',
    main: <IcISFJMain />,
    rank: <IcISFJRank />,
  },
  {
    MBTI: 'ISFP',
    main: <IcISFPMain />,
    rank: <IcISFPRank />,
  },
  {
    MBTI: 'ISTJ',
    main: <IcISTJMain />,
    rank: <IcISTJRank />,
  },
  {
    MBTI: 'ISTP',
    main: <IcISTPMain />,
    rank: <IcISTPRank />,
  },
];
