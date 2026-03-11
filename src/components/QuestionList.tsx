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

  const handleExport = () => {
    const dataStr = JSON.stringify(questions, null, 2);

    const blob = new Blob([dataStr], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "quiz-questions.json";

    a.click();

    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const result = e.target?.result as string;

        const importedData = JSON.parse(result);

        const newQuestions = importedData.questions || importedData;

        setQuestions(newQuestions);

        localStorage.setItem("quizQuestions", JSON.stringify(newQuestions));
      } catch (error) {
        alert("File JSON không hợp lệ");
      }
    };

    reader.readAsText(file);
  };

  return (
    <>
      <div className="flex flex-col gap-5 px-5">
        <input
          type="file"
          accept="application/json"
          onChange={handleImport}
          className="hidden"
          id="importFile"
        />
        <label
          htmlFor="importFile"
          className="py-3 px-5 bg-green-600 rounded-[10px] text-white cursor-pointer w-fit"
        >
          Import
        </label>
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

          <button
            onClick={handleExport}
            className="py-3 px-5 bg-blue-600 rounded-[10px] w-25 text-white cursor-pointer"
          >
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
