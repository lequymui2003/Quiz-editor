import { useState } from "react";
import type { QuestionListProps } from "../types/quiz";
import { QuestionItem } from "./QuestionItem";
import { AddQuestionModal } from "../Popup/AddQuestionModal";

export const QuestionList = ({
  questions,
  setQuestions,
}: QuestionListProps) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-5 px-5">
        {questions.map((question) => (
          <QuestionItem key={question.sortOrder} question={question} />
        ))}
        <div className="flex justify-between">
          <button
            className="py-3 px-5 bg-blue-600 rounded-[10px] w-25 text-white cursor-pointer"
            onClick={() => setShowPopup(true)}
          >
            Thêm
          </button>
          <button className="py-3 px-5 bg-blue-600 rounded-[10px] w-25 text-white cursor-pointer">
            Export
          </button>
        </div>
      </div>
      {showPopup && (
        <AddQuestionModal
          setShowPopup={setShowPopup}
          setQuestions={setQuestions}
          questions={questions}
        />
      )}
    </>
  );
};
