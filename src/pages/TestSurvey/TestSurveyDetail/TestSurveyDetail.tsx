import styles from './TestSurveyDetail.module.scss';
import { Question1, Question2, Question3, Question4 } from '@images/index';
import Button from '@components/Button';
import { useState } from 'react';
import Header from '@components/Header';

interface QuestionDateType {
  parent: Record<
    string,
    {
      icon: React.ReactNode;
      titles: string[];
      questions: {
        value: string;
        text: string;
      }[];
    }
  >;
  children: Record<
    string,
    {
      icon: React.ReactNode;
      titles: string[];
      questions: {
        value: string;
        text: string;
      }[];
    }
  >;
}

const QUESTION_DATA: QuestionDateType = {
  parent: {
    1: {
      icon: <Question1 />,
      titles: ['딸/아들과 2주 뒤 여행을 가기로 했다.', '나는 어떤 유형일까?'],
      questions: [
        {
          value: 'PL1',
          text: '여행 전에 일정표 작성과 예약까지 다 마쳐야 마음이 놓여.',
        },
        {
          value: 'PL2',
          text: '큰 일정은 짜되, 여유 시간은 필수지. 현지에서 상황에 맞게 조율하자고.',
        },
        {
          value: 'PL3',
          text: '숙소, 교통편만 예약하고 나머지는 도착해서 정해도 충분해.',
        },
        {
          value: 'PL4',
          text: '목적지만 정해놓고, 나머지는 즉흥적으로 즐기는게 진정한 여행이지.',
        },
      ],
    },
    2: {
      icon: <Question2 />,
      titles: ['내가 찾은 식당에서 딸/아들이', '맛없다고 불평한다면 나는?'],
      questions: [
        {
          value: 'NE1',
          text: '"내가 얼마나 열심히 찾은 덴데! 너무 서운하다 얘." 라고 감정을 표현하며 딸/아들을 나무라지.',
        },
        {
          value: 'NE2',
          text: '"그래? 내가 고른 곳이 별로였나 보네. 다음엔 네가 한 번 골라봐." 라며 실망감을 표현하고 선택권을 넘겨버려.',
        },
        {
          value: 'NE3',
          text: '"음식이 입에 안 맞아? 다른 메뉴 시켜볼까?" 라고 물으며 타협점을 찾으려 하지만, 당혹감에 횡설수설할 수 있어.',
        },
        {
          value: 'NE4',
          text: '"이런 것도 여행의 묘미지. 오히려 재밌는 추억이 될거야." 라고 말하며 긍정적, 창의적으로 상황을 바꾸려 노력해.',
        },
      ],
    },
    3: {
      icon: <Question3 />,
      titles: ['딸/아들이 한 번도 안 해본', '패러글라이딩을 하자고 하면?'],
      questions: [
        {
          value: 'TR1',
          text: '와! 패러글라이딩? 멋진데? 나도 해보고 싶었어. 당장 예약하자. 하늘을 나는 기분, 상상만 해도 신나는데?',
        },
        {
          value: 'TR2',
          text: '패러글라이딩? 흥미로운데? 조금 긴장되긴 하지만 안전 수칙 확인하고 경험 많은 강사님과 함께라면 문제없을 거야.',
        },
        {
          value: 'TR3',
          text: '패러글라이딩이라... 솔직히 조금 무섭네. 위험하진 않을까?',
        },
        {
          value: 'TR4',
          text: '패러글라이딩은 좀 무서운데... 다른 액티비티는 어때?',
        },
      ],
    },
    4: {
      icon: <Question4 />,
      titles: ['오늘은 여행의 마지막 날,', '딸/아들과 가고 싶은 곳이 다르다면?'],
      questions: [
        {
          value: 'FI1',
          text: '시간이 없으니 내가 정한 곳으로 가는 게 좋겠어. 어른의 경험을 믿어봐.',
        },
        {
          value: 'FI2',
          text: '내가 고른 곳에 가고 싶지만, 네 의견도 중요하니까 한 번 고려해 볼게.',
        },
        {
          value: 'FI3',
          text: '네가 가고 싶은 곳을 우선적으로 고려할게. 그래도 최종 결정은 같이 내리는 게 좋지 않을까?',
        },
        {
          value: 'FI4',
          text: '네 선택을 존중해. 네가 원하는 곳으로 가는 게 맞지.',
        },
      ],
    },
  },
  children: {
    1: {
      icon: <Question1 />,
      titles: ['엄마/아빠와 2주 뒤 여행을 가기로 했다.', '나는 어떤 유형일까?'],
      questions: [
        {
          value: 'PL1',
          text: '여행 전에 일정표는 물론이고, 예약까지 모두 끝내놓아야 마음이 편하지.',
        },
        {
          value: 'PL2',
          text: '큰 틀만 짜두고, 여유 시간은 필수야. 현지에서 그때그때 상황에 맞게 조율하는 게 여행의 맛 아니겠어?',
        },
        {
          value: 'PL3',
          text: '잘 곳이랑 교통편만 해결하면 됐지. 나머지는 도착해서 즉흥적으로 정하는 게 꿀잼이지!',
        },
        {
          value: 'PL4',
          text: '목적지만 정해두고, 발길 닿는 대로 다니는 게 진정한 여행이라고!',
        },
      ],
    },
    2: {
      icon: <Question2 />,
      titles: ['내가 찾은 식당에서 엄마/아빠가', '맛없다고 불평한다면 나는?'],
      questions: [
        {
          value: 'NE1',
          text: '"내가 찾은 데라고! 너무한 거 아냐? 다시는 같이 안 가!" 라고 감정을 있는 대로 표출해.',
        },
        {
          value: 'NE2',
          text: '"내가 찾은 곳이 별로였나 보네. 다음엔 엄마/아빠가 가고 싶은 곳으로 가자." 라며 바로 꼬리를 내려.',
        },
        {
          value: 'NE3',
          text: '"음식이 입에 안 맞아? 다른 메뉴 시켜볼까?" 라고 물으며 엄마의 반응을 살핀 다음, 민망함과 당혹감을 드러내.',
        },
        {
          value: 'NE4',
          text: '"이런 것도 여행의 묘미지. 오히려 재밌는 추억이 될거야." 라고 말하며 긍정적, 창의적으로 상황을 바꾸려 노력해.',
        },
      ],
    },
    3: {
      icon: <Question3 />,
      titles: ['타본 적 없는 패러글라이딩을', '엄마/아빠가 제안한다면?'],
      questions: [
        {
          value: 'TR1',
          text: '와! 대박! 패러글라이딩? 재밌겠는데! 당장 고! 하늘을 난다고 생각하니 벌써부터 신나!',
        },
        {
          value: 'TR2',
          text: '패러글라이딩? 흥미로운데? 조금 긴장되긴 하지만 안전 수칙 확인하고 경험 많은 강사님과 함께라면 문제없을 거야.',
        },
        {
          value: 'TR3',
          text: '패러글라이딩이라... 솔직히 무서운데... 위험하진 않을까?',
        },
        {
          value: 'TR4',
          text: '패러글라이딩? 난 무서워서 싫어. 그런 위험한 건 안 탈래.',
        },
      ],
    },
    4: {
      icon: <Question4 />,
      titles: ['오늘은 여행의 마지막 날,', '엄마/아빠와 가고 싶은 곳이 다르다면?'],
      questions: [
        {
          value: 'FI1',
          text: '그래! 엄마/아빠가 원하는 곳으로 가자.',
        },
        {
          value: 'FI2',
          text: '엄마/아빠의 의견 따를게. 근데 내 선택도 한 번만 고려해 주면 안 돼?',
        },
        {
          value: 'FI3',
          text: '내가 가고 싶은 곳에 가면 안 돼? 물론 엄마/아빠 의견도 중요하니까 상의는 해보자.',
        },
        {
          value: 'FI4',
          text: '이번엔 내가 가고 싶은 곳으로 가고 싶어. 이해해 줘.',
        },
      ],
    },
  },
};

const TestSurveyDetail = ({
  questionIndex,
  role,
  onAnswer,
  onBack,
}: {
  questionIndex: number;
  role: string;
  onAnswer: (answer: string) => void;
  onBack: () => void;
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(undefined);

  const handleSelect = (value: string) => {
    if (value === selectedAnswer) {
      setSelectedAnswer(undefined);
    } else {
      setSelectedAnswer(value);
    }
  };

  const handleClick = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer);
      setSelectedAnswer(undefined);
    }
  };

  const isLastQuestion = questionIndex === 4;

  const isParent = role === 'DAD' || role === 'MOM' ? 'parent' : 'children';

  const { icon, titles, questions } = QUESTION_DATA[isParent][questionIndex];

  const isDisabled = selectedAnswer === undefined;

  return (
    <div className={styles.wrapper}>
      <Header onBack={onBack} />
      <progress max="4" value={questionIndex} className={styles.progress}></progress>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.titles}>
            {titles.map((title, index) => (
              <p key={index}>{title}</p>
            ))}
          </div>
          {questions.map(({ value, text }, index) => (
            <div
              key={index}
              className={`${styles.button} ${selectedAnswer === value ? styles.selected : ''}`}
              onClick={() => handleSelect(value)}
            >
              {text}
            </div>
          ))}
        </div>

        <Button size="xl" isActive onClick={handleClick} disabled={isDisabled}>
          {isLastQuestion ? '결과 확인' : '다음'}
        </Button>
      </div>
    </div>
  );
};

export default TestSurveyDetail;
