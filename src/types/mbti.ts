export interface MBTIgramResponse {
  status: number;
  success: boolean;
  message: string;
}

export interface MBTIInfo extends MBTIgramResponse {
  mbti: string;
  prob: {
    [key: string]: number;
  };
}

export interface RankInfo extends MBTIgramResponse {
  rank: {
    [key: string]: string;
  };
}

interface MemberData {
  instaId: string;
  mbti: string;
  relationships: number[];
}

export interface ChemistryInfo extends MBTIgramResponse {
  data: {
    member: number;
    member_mbti: string[];
    avg: number;
    member_data: MemberData[];
  };
}
