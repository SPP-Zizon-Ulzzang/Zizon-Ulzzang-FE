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
