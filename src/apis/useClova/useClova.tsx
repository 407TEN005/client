import axios from 'axios';

const CLOVA_API_URL = import.meta.env.VITE_CLOVA_API_URL;

const NCP_CLOVASTUDIO_API_KEY = import.meta.env.VITE_NCP_CLOVASTUDIO_API_KEY;
const NCP_APIGW_API_KEY = import.meta.env.VITE_NCP_APIGW_API_KEY;
const NCP_CLOVASTUDIO_REQUEST_ID = import.meta.env.VITE_NCP_CLOVASTUDIO_REQUEST_ID;

const data = {
  messages: [
    {
      role: 'system',
      content:
        '당신은 여행 전문가입니다. 주어진 가족구성원의 여행 유형과 성향자료를 참고하고 여행 10계명을 작성해주세요.\n가족 구성:\n엄마:    "P4": {\n        "name": "느긋한 여유파 부모",\n        "nickname": "느긋한 zen 요가 맘/명상 파파",\n        "traits": {\n          "emotion": "긍정적 태도",\n          "challenge": "매우 소극적",\n          "planning": "조금 계획형",\n          "priority": "자녀 의견 가장 우선"\n        },\n        "strengths": ["스트레스 없는 여행 분위기 조성", "자녀의 의견 존중"],\n        "cautions": ["지나친 여유로 인한 시간 관리 실패", "중요한 결정의 지연"],\n        "communicationTips": [\n          "긍정적 태도 유지하면서도 가족의 니즈에 귀 기울이기",\n          "때로는 새로운 활동에 도전해보는 용기 내기",\n          "전체적인 일정 흐름 정도는 미리 구상해보기",\n          "자녀 의견 존중하되 부모로서의 조언도 적절히 하기"\n        ]\n      }\n딸:      "C1": {\n        "name": "열정 가득 도전 자녀",\n        "nickname": "불꽃 튀는 엣지 있는 막내",\n        "traits": {\n          "emotion": "강한 부정적 감정 표현",\n          "challenge": "매우 도전적",\n          "planning": "완전 즉흥형",\n          "priority": "자녀 의견 가장 우선"\n        },\n        "strengths": ["모험심과 호기심이 풍부", "새로운 경험에 대한 적극성"],\n        "cautions": ["위험한 상황 초래 가능성", "다른 가족 구성원과의 페이스 차이"],\n        "communicationTips": [\n          "강한 감정 표현 전에 심호흡하고 차분히 의사 전달하기",\n          "새로운 도전 시 가족의 안전과 편의도 고려하기",\n          "즉흥적 행동 전에 가족과 간단히 상의하는 습관 들이기",\n          "본인 의견 주장 시 부모님 조언도 경청하기"\n        ]\n      },\n        "strengths": ["안전과 세부사항에 대한 주의깊은 관찰", "문제 예방 능력"],\n        "cautions": ["새로운 경험에 대한 두려움", "과도한 걱정으로 인한 여행 즐거움 감소"],\n        "communicationTips": [\n          "걱정 표현 시 구체적인 우려 사항과 해결책 함께 제시하기",\n          "안전한 범위 내에서 작은 도전부터 시도해보기",\n          "지나친 계획에 얽매이지 않고 융통성 발휘하기",\n          "부모님 의견 존중하면서도 본인의 생각 표현하기"\n        ]\n\n###계명 작성 규칙:\n1. 각 계명은 25자 이내로 작성하세요.\n2. 현대적이고 유머러스한 톤을 사용하세요.\n3. 과도하게 정중하거나 조심스러운 표현은 피하세요.\n4. \'\'\'계획\'\'\', \'\'\'도전\'\'\', \'\'\'안전\'\'\', \'\'\'여유\'\'\', \'\'\'즉흥\'\'\' 표현은 10계명 내에서 각각 한 번만 사용하세요.\n5. 음식, 날씨, 교통과 같이 여행시 발생하는 예상치 못한 일들에 대한 C,P 서로의 스트레스를 해소하는 방식을 제시하세요. 25자 내로 줄이되 맥락을 이해할 수 있게 작성합니다. 최소 1계명을 작성해야 합니다.\n#예시: a) 메뉴는 계획대로, 디저트는 꽂히는 대로! b) 많이 걷게 되도 긍정에너지로 극복! c) 갑자기 비가와도, 짜증 내지 않기!\n6. 부모와 자녀의 \'\'\'name\'\'\', \'\'\'nickname\'\'\'은 직접적으로 계명에 사용하지 않습니다.\n7. 부모(P)와 자녀(C)의 traits 강도 차이에 따라 다음 형식을 사용하세요:\n(1) 강한 P, 약한 C: C(아들/딸), P(아빠/엄마)에게 [P의 trait]하지 말라고 하기\n(2) 강한 P, 중간 C: C(아들/딸), P(아빠/엄마)에게 [C의 trait]도 고려해달라고 요청하기\n(3) 중간 P, 중간 C: P(아빠/엄마)와 C(아들/딸), 서로의 [trait] 존중하며 의견 나누기\'\'\'\n(4) 각 계명은 가족 구성원 간의 대화 형식으로 작성하세요. 한 구성원이 다른 구성원에게 말하는 방식을 사용하세요. \n(5) 예시: \'\'\'딸, 엄마가 걱정할 때 눈 굴리지 말기!\'\'\'\n \'\'\'엄마, 딸의 안전 우려도 들어주기!\'\'\'\n\'\'\' 아빠, 아들의 모험심도 인정해주기!\'\'\'\n8. 부모와 자녀가 잘 맞는 부분에서 시너지를 발산하는 상황의 계명을 1개 포함하세요.\n#예시: a) 어떤 도전이든 즐기는 우린 에너지 뿜뿜! b) 여행 가서도 느긋한 우린 행복한 나무늘보 가족\n9. 각 유형의 name, nickname과 완전히 같은 단어를 사용하지 마세요. 유사한 다른 표현을 사용하세요.\n10. \'\'\'너\'\'\', \'\'\'내가\'\'\', \'\'\'우리\'\'\' 등의 대명사 사용을 피하고, 대신 \'\'\'엄마\'\'\', \'\'\'딸\'\'\' 등 구체적인 가족 관계 명칭을 사용하세요.\n11. 각 계명은 주어진 성향을 하나 이상 반영해야 합니다.\n12. 모든 계명은 중립적인 제3자의 시점에서 작성하세요.\n13. 각 계명에서 부모와 자식 모두의 역할이나 행동이 균형있게 언급되어야 합니다.\n\n###주의사항:\n1. 반드시 10개의 계명을 모두 작성하세요. 10개 미만이면 안 됩니다.\n2. 계명 외의 추가 설명이나 주석은 작성하지 마세요.\n3. 작성 후 각 계명을 검토하여 대명사가 사용되지 않았는지 확인하고, 사용되었다면 적절한 가족 관계 명칭으로 재작성하세요.\n4. 작성 후 각 계명이 25자 이내인지 검토하고, 25자를 넘겼다면 재작성하세요.\n5. 작성 후 nickname과 name이 사용됐는지 확인하고, 사용되었다면 유사한 단어로 맥락을 유지한 채 재작성합니다.\n5. 작성 후 계명의 순서들을 섞고 출력합니다.',
    },
    {
      role: 'assistant',
      content: '',
    },
    {
      role: 'assistant',
      content:
        '1. 불꽃 막내, 엄빠의 여유도 존중하자!\n2. 명상 파파, 엣지있는 막내의 도전도 응원하기!\n3. zen 요가 맘, 막내는 위험한 도전엔 재고 요청하기!\n4. 꼼꼼한 첫째, 새로운 경험에도 마음 열기!\n5. 우리 가족, 중요 결정 전 충분한 토의 필수!\n6. 위기 상황엔 차분한 엄빠, 불꽃막내도 침착하게 소통하기!\n7. 열정 가득한 누나, 엄빠의 세심함도 배우기!\n8. 막둥이 말 끊지 말고 끝까지 경청하기!\n9. 엄빠의 느긋함 속에서도 알찬 하루 만들기!\n10. 무엇이든 즐기는 우리 가족, 어디서든 웃음꽃 만개',
    },
  ],
  topP: 0.8,
  topK: 0,
  maxTokens: 500,
  temperature: 0.5,
  repeatPenalty: 5.0,
  stopBefore: [],
  includeAiFilters: true,
  seed: 0,
};

const useClova = () => {
  const callClovaApi = async () => {
    try {
      const response = await axios.post(CLOVA_API_URL, data, {
        headers: {
          'X-NCP-CLOVASTUDIO-API-KEY': NCP_CLOVASTUDIO_API_KEY,
          'X-NCP-APIGW-API-KEY': NCP_APIGW_API_KEY,
          'X-NCP-CLOVASTUDIO-REQUEST-ID': NCP_CLOVASTUDIO_REQUEST_ID,
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { callClovaApi };
};

export default useClova;
