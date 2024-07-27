export const ROUTES = {
  home: 'home',
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
} as const;

export default ROUTES;
