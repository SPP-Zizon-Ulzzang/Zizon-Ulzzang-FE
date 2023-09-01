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
          'https://user-images.githubusercontent.com/73213437/265080566-244f072d-9cc4-4045-b68e-135c971c058e.png',
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
