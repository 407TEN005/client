const kakao = (window as any).Kakao;

const useInviteUser = ({
  travelId,
  roomName,
  userName,
}: {
  travelId?: string;
  roomName?: string;
  userName?: string;
}) => {
  const sendDatas = {
    objectType: 'feed',
    content: {
      title: `${userName}님이 '${roomName}' 여행방에 초대했어요 !`,
      description: '하이퍼클로바X와 함께 우리 가족 맞춤형 여행 10계명을 만들어보세요!',
      imageUrl: 'https://i.imgur.com/RPHbQdW.png',
      link: {
        webUrl: `https://tenten.potenday-sixgarlic.site/login?roomId=${travelId}`,
      },
    },
    buttonTitle: '초대받기',
  };

  const handleInvite = () => {
    kakao.Share.sendDefault(sendDatas);
  };

  return { handleInvite };
};

export default useInviteUser;
