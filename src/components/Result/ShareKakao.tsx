declare global {
  interface Window {
    Kakao: any;
  }
}

// interface ShareKakaoProps {
//   route: string;
// }

const initialize = () => {
  if (!window.Kakao || !window.Kakao.isInitialized()) {
    window.Kakao && window.Kakao.init(import.meta.env.VITE_JS_KEY);
  }
  return window.Kakao;
};

export const shareKakao = (route: string) => {
  const Kakao = initialize();
  if (Kakao) {
    console.log(Kakao);
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'MBTIgram',
        description: 'AI가 분석한 나의 MBTI는?',
        imageUrl:
          'https://user-images.githubusercontent.com/73213437/264984882-aa9dd5d7-8d40-4efe-99ba-fde8829b74b1.png',
        link: {
          webUrl: route,
          mobileWebUrl: route,
        },
      },
      buttons: [
        {
          title: '나의 MBTI 예측하기',
          link: {
            webUrl: route,
            mobileWebUrl: route,
          },
        },
      ],
    });
  }
};
