import { useState } from 'react';
import FamilyRoleSurvey from './FamilyRoleSurvey';
import TestSurveyDetail from './TestSurveyDetail';
import useTestWithoutAuth from '@apis/useTestWithoutAuth';
import { useRecoilState } from 'recoil';
import testAnswersAtom from '@recoil/testAnswers';

export type ContentType = 'familyRole' | 'question1' | 'question2' | 'question3' | 'question4';

export interface Answer {
  answer: string;
}

const TestSurvey = () => {
  const [answers, setAnswers] = useRecoilState(testAnswersAtom);
  const [questionIndex, setQuestionIndex] = useState(0);

  const { createTestWithoutAuth } = useTestWithoutAuth();

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
