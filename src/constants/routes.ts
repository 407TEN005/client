export const ROUTES = {
  // ? 외부
  login: '/login',
  loading: '/loading',

  // ? 로그인
  authTest: '/auth/test',
  authTestSurvey: '/auth/test/survey',
  authTestResult: '/auth/testResult',
  myTestResult: '/auth/myTestResult',

  travel: '/travel',
  createTravel: '/createTravel',
  travelDetail: '/travel/:travelId',
  travelCommandment: '/travel/:travelId/commandment',
  redirect: '/oauth2/redirect',

  // ? 비로그인
  test: '/test',
  testSurvey: '/test/survey',
  testResult: '/testResult',
  checkType: '/checkType',
  commandment: '/commandment',
} as const;

export default ROUTES;
