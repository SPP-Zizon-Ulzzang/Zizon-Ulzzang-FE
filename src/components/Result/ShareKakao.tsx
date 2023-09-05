declare global {
  interface Window {
    Kakao: any;
  }
}

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
          'https://user-images.githubusercontent.com/73213437/265729071-152b6a7d-057a-4e17-8b21-a6d4b83e95d9.png',
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
