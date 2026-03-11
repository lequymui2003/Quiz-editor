import { useState } from "react";
import type { Question, QuestionListProps } from "../types/quiz";
import { QuestionItem } from "./QuestionItem";
import { AddQuestionModal } from "../Popup/PopupQuestionModal";

export const QuestionList = ({
  questions,
  setQuestions,
}: QuestionListProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  const handleDelete = (sortOrder: number) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa câu hỏi này?");

    if (!confirmDelete) return;

    const updatedQuestions = questions.filter((q) => q.sortOrder !== sortOrder);

    setQuestions(updatedQuestions);

    localStorage.setItem("quizQuestions", JSON.stringify(updatedQuestions));
  };

  return (
    <>
      <div className="flex flex-col gap-5 px-5">
        {questions.map((question) => (
          <QuestionItem
            key={question.sortOrder}
            question={question}
            onEdit={() => {
              setEditingQuestion(question);
              setShowPopup(true);
            }}
            onDelete={() => handleDelete(question.sortOrder)}
          />
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
          editingQuestion={editingQuestion}
        />
      )}
    </>
  );
};
