export const shareKakao = (route, title, keyword) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(import.meta.env.VITE_APP_SHARE_KAKAO_LINK_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        description: `🍳 Foodle이 '${keyword}'으로 10가지의 요리를 준비했어요!`,
        imageUrl: "../images/test_food.svg",
        link: {
          mobileWebUrl: route,
          webUrl: route,
        },
      },
      buttons: [
        {
          title: "결과 확인하기",
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
};
