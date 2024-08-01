export const ROUTES = {
  // ? 외부
  login: '/login',
  loading: '/loading',

  // ? 로그인
  // todo : home -> travel 변경 예정
  home: '/travel',
  createTravel: '/createTravel',
  testSurveyDetail: '/test/survey/:surveyId',
  travel: '/travel/:travelId',
  analysis: '/analysis',
  redirect: '/oauth2/redirect',

  // ? 비로그인
  test: '/test',
  testSurvey: '/test/survey',
  testResult: '/testResult',
  checkType: '/checkType',
  commandment: '/commandment',
} as const;

export default ROUTES;
