import { useEffect, useState } from 'react';
import FamilyRoleSurvey from './FamilyRoleSurvey';
import TestSurveyDetail from './TestSurveyDetail';
import useTestWithoutAuth from '@apis/useTestWithoutAuth';
import { useRecoilState, useResetRecoilState } from 'recoil';
import testAnswersAtom from '@recoil/testAnswers';
import useTestWithAuth from '@apis/useTestWithAuth';
import { useLocation } from 'react-router-dom';

export type ContentType = 'familyRole' | 'question1' | 'question2' | 'question3' | 'question4';

export interface Answer {
  answer: string;
}

const TestSurvey = () => {
  const { pathname } = useLocation();

  const isLogin = pathname.includes('auth');

  const [answers, setAnswers] = useRecoilState(testAnswersAtom);
  const resetAnswers = useResetRecoilState(testAnswersAtom);
  const [initialized, setInitialized] = useState(false);

  const [questionIndex, setQuestionIndex] = useState(0);

  const { createTestWithoutAuth } = useTestWithoutAuth();
  const { createTestWithAuth } = useTestWithAuth();

  const parseAnswer = (value: string[]) => {
    const [familyRole, ...answers] = value;

    return {
      familyRole,
      answers,
    };
  };

  const handleAnswer = async (answer: string) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);

    if (questionIndex < 4) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else if (isLogin) {
      await createTestWithAuth(parseAnswer([...answers, answer]));
    } else {
      await createTestWithoutAuth(parseAnswer([...answers, answer]));
    }
  };

  const handleBack = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prevIndex) => prevIndex - 1);
      setAnswers((prevAnswers) => prevAnswers.slice(0, -1));
    }
  };

  useEffect(() => {
    if (!initialized) {
      resetAnswers();
      setInitialized(true);
    }
  }, [initialized, resetAnswers]);

  if (questionIndex === 0) {
    return <FamilyRoleSurvey onAnswer={handleAnswer} />;
  }

  return (
    <TestSurveyDetail
      questionIndex={questionIndex}
      role={answers[0]}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
};

export default TestSurvey;
