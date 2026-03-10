import { QuestionList } from "./QuestionList";
import { data_exam } from "../data/data";
import { useEffect, useState } from "react";

export const QuizForm = () => {
  const savedQuestions = localStorage.getItem("quizQuestions");

  const [questions, setQuestions] = useState(
    savedQuestions ? JSON.parse(savedQuestions) : data_exam.questions,
  );
  
  return (
    <>
      <div className="w-full h-full flex justify-center py-5">
        <div className="w-5xl border border-gray-400 rounded-[10px] p-5 flex flex-col gap-5 justify-center">
          <p className="text-[25px] font-bold text-blue-600 text-center">
            {data_exam.name}
          </p>
          <QuestionList questions={questions} setQuestions={setQuestions} />
        </div>
      </div>
    </>
  );
};
