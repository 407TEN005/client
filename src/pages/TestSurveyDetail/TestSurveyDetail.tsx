import { useNavigate, useParams } from 'react-router-dom';
import styles from './TestSurveyDetail.module.scss';
import { Question1, Question2, Question3, Question4 } from '@images/index';
import Button from '@src/components/Button';

interface QuestionDateType {
  parent: Record<
    string,
    {
      icon: React.ReactNode;
      titles: string[];
      questions: string[];
    }
  >;
  children: Record<
    string,
    {
      icon: React.ReactNode;
      titles: string[];
      questions: string[];
    }
  >;
}

const QUESTION_DATA: QuestionDateType = {
  parent: {
    '1': {
      icon: <Question1 />,
      titles: ['딸/아들과 2주 뒤 여행을 가기로 했다.', '나는 어떤 유형일까?'],
      questions: [
        '여행 전에 일정표 작성과 예약까지 다 마쳐야 마음이 놓여.',
        '큰 일정은 짜되, 여유 시간은 필수지. 현지에서 상황에 맞게 조율하자고.',
        '숙소, 교통편만 예약하고 나머지는 도착해서 정해도 충분해.',
        '목적지만 정해놓고, 나머지는 즉흥적으로 즐기는게 진정한 여행이지.',
      ],
    },
    '2': {
      icon: <Question2 />,
      titles: ['내가 찾은 식당에서 딸/아들이', '맛없다고 불평한다면 나는?'],
      questions: [
        '"내가 얼마나 열심히 찾은 덴데! 너무 서운하다 얘." 라고 감정을 표현하며 딸/아들을 나무라지.',
        '"그래? 내가 고른 곳이 별로였나 보네. 다음엔 네가 한 번 골라봐." 라며 실망감을 표현하고 선택권을 넘겨버려.',
        '"음식이 입에 안 맞아? 다른 메뉴 시켜볼까?" 라고 물으며 타협점을 찾으려 하지만, 당혹감에 횡설수설할 수 있어.',
        '"이런 것도 여행의 묘미지. 오히려 재밌는 추억이 될거야." 라고 말하며 긍정적, 창의적으로 상황을 바꾸려 노력해.',
      ],
    },
    '3': {
      icon: <Question3 />,
      titles: ['딸/아들이 한 번도 안 해본', '패러글라이딩을 하자고 하면?'],
      questions: [
        '와! 패러글라이딩? 멋진데? 나도 해보고 싶었어. 당장 예약하자. 하늘을 나는 기분, 상상만 해도 신나는데?',
        '패러글라이딩? 흥미로운데? 조금 긴장되긴 하지만 안전 수칙 확인하고 경험 많은 강사님과 함께라면 문제없을 거야.',
        '패러글라이딩이라... 솔직히 조금 무섭네. 위험하진 않을까?',
        '패러글라이딩은 좀 무서운데... 다른 액티비티는 어때?',
      ],
    },
    '4': {
      icon: <Question4 />,
      titles: ['오늘은 여행의 마지막 날,', '딸/아들과 가고 싶은 곳이 다르다면?'],
      questions: [
        '시간이 없으니 내가 정한 곳으로 가는 게 좋겠어. 어른의 경험을 믿어봐.',
        '내가 고른 곳에 가고 싶지만, 네 의견도 중요하니까 한 번 고려해 볼게.',
        '네가 가고 싶은 곳을 우선적으로 고려할게. 그래도 최종 결정은 같이 내리는 게 좋지 않을까?',
        '네 선택을 존중해. 네가 원하는 곳으로 가는 게 맞지.',
      ],
    },
  },
  children: {
    '1': {
      icon: <Question1 />,
      titles: ['엄마/아빠와 2주 뒤 여행을 가기로 했다.', '나는 어떤 유형일까?'],
      questions: [
        '여행 전에 일정표는 물론이고, 예약까지 모두 끝내놓아야 마음이 편하지.',
        '큰 틀만 짜두고, 여유 시간은 필수야. 현지에서 그때그때 상황에 맞게 조율하는 게 여행의 맛 아니겠어?',
        '잘 곳이랑 교통편만 해결하면 됐지. 나머지는 도착해서 즉흥적으로 정하는 게 꿀잼이지!',
        '목적지만 정해두고, 발길 닿는 대로 다니는 게 진정한 여행이라고!',
      ],
    },
    '2': {
      icon: <Question2 />,
      titles: ['내가 찾은 식당에서 엄마/아빠가', '맛없다고 불평한다면 나는?'],
      questions: [
        '"내가 찾은 데라고! 너무한 거 아냐? 다시는 같이 안 가!" 라고 감정을 있는 대로 표출해.',
        '"내가 찾은 곳이 별로였나 보네. 다음엔 엄마/아빠가 가고 싶은 곳으로 가자." 라며 바로 꼬리를 내려.',
        '"음식이 입에 안 맞아? 다른 메뉴 시켜볼까?" 라고 물으며 엄마의 반응을 살핀 다음, 민망함과 당혹감을 드러내.',
        '"이런 것도 여행의 묘미지. 오히려 재밌는 추억이 될거야." 라고 말하며 긍정적, 창의적으로 상황을 바꾸려 노력해.',
      ],
    },
    '3': {
      icon: <Question3 />,
      titles: ['타본 적 없는 패러글라이딩을', '엄마/아빠가 제안한다면?'],
      questions: [
        '와! 대박! 패러글라이딩? 재밌겠는데! 당장 고! 하늘을 난다고 생각하니 벌써부터 신나!',
        '패러글라이딩? 흥미로운데? 조금 긴장되긴 하지만 안전 수칙 확인하고 경험 많은 강사님과 함께라면 문제없을 거야.',
        '패러글라이딩이라... 솔직히 무서운데... 위험하진 않을까?',
        '패러글라이딩? 난 무서워서 싫어. 그런 위험한 건 안 탈래.',
      ],
    },
    '4': {
      icon: <Question4 />,
      titles: ['오늘은 여행의 마지막 날,', '엄마/아빠와 가고 싶은 곳이 다르다면?'],
      questions: [
        '그래! 엄마/아빠가 원하는 곳으로 가자.',
        '엄마/아빠의 의견 따를게. 근데 내 선택도 한 번만 고려해 주면 안 돼?',
        '내가 가고 싶은 곳에 가면 안 돼? 물론 엄마/아빠 의견도 중요하니까 상의는 해보자.',
        '이번엔 내가 가고 싶은 곳으로 가고 싶어. 이해해 줘.',
      ],
    },
  },
};

const TestSurveyDetail = () => {
  const { surveyId } = useParams();
  const navigate = useNavigate();

  if (!surveyId) {
    return null;
  }

  const isLastQuestion = surveyId === '4';

  const handleClick = () => {
    if (isLastQuestion) {
      alert('결과 확인');
    } else {
      navigate(`/test/survey/${Number(surveyId) + 1}`);
    }
  };

  const { icon, titles, questions } = QUESTION_DATA.parent[surveyId];

  return (
    <div className={styles.wrapper}>
      <progress max="4" value={surveyId} className={styles.progress}></progress>

      <div>
        <div>{icon}</div>
        {titles.map((title) => (
          <p>{title}</p>
        ))}
        {questions.map((question) => (
          <Button size="xl" variant="outlined">
            {question}
          </Button>
        ))}
      </div>

      <Button isActive onClick={handleClick}>
        {isLastQuestion ? '결과 확인' : '다음'}
      </Button>
    </div>
  );
};

export default TestSurveyDetail;
