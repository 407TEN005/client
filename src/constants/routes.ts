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
} as const;

export default ROUTES;
