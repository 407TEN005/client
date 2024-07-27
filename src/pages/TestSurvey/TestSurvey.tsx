import { useState } from 'react';
import FamilyRoleSurvey from './FamilyRoleSurvey';
import TestSurveyDetail from '../TestSurveyDetail';

export type ContentType = 'familyRole' | 'question1' | 'question2' | 'question3' | 'question4';

export interface Answer {
  answer: string;
}

const TestSurvey = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  console.log('answers : ', answers);

  const handleAnswer = (answer: string) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);

    if (questionIndex < 4) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // 설문조사 완료, 서버로 데이터 전송
      console.log('설문조사 완료', answers);
      // 서버로 전송 로직 추가
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
