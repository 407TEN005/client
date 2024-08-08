const kakao = (window as any).Kakao;

const useShareCommandment = ({ travelId }: { travelId?: string }) => {
  const sendData = {
    objectType: 'feed',
    content: {
      title: `똑똑! 여행 10계명 결과가 도착했어요!`,
      description: '하이퍼클로바X가 생성한 우리 가족 맞춤형 여행 10계명을 확인해보세요!',
      imageUrl: 'https://i.imgur.com/vxYhWbs.png',
      link: {
        webUrl: `https://tenten.potenday-sixgarlic.site/travel/${travelId}/commandment`,
      },
    },
    buttonTitle: '보러가기',
  };

  const handleShare = () => {
    kakao.Share.sendDefault(sendData);
  };

  return { handleShare };
};

export default useShareCommandment;
