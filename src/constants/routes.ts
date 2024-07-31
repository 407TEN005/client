export const ROUTES = {
  home: 'travel',
  login: 'login',
  createTravel: 'create',
  test: 'test',
  testSurvey: 'test/survey',
  testSurveyDetail: 'test/survey/:surveyId',
  travel: 'travel/:travelId',
  commandment: 'commandment',
  testResult: 'testResult',
  analysis: 'analysis',
  redirect: 'oauth2/redirect',
  checkType: 'checkType',
  loading: 'loading',
} as const;

export default ROUTES;
