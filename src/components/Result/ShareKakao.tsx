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
        description: 'AI가 분석한 인스타그램 속 나의 MBTI는?',
        imageUrl:
          'https://user-images.githubusercontent.com/73213437/266012479-fe61ae72-b2b2-4c28-b6d0-0880bc17b361.png',
        link: {
          webUrl: route,
          mobileWebUrl: route,
        },
      },
      buttons: [
        {
          title: '나의 인스타그램 MBTI 예측하기',
          link: {
            webUrl: route,
            mobileWebUrl: route,
          },
        },
      ],
    });
  }
};
