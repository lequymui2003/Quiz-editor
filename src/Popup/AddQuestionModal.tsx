import { useState } from "react";
import type { AddQuestionModalProps } from "../types/quiz";

export const AddQuestionModal = ({
  setShowPopup,
  questions,
  setQuestions,
}: AddQuestionModalProps) => {
  const [name, setName] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");

  const handleAdd = () => {
    const newQuestion = {
      name,
      description: "",
      sortOrder: questions.length + 1,
      options: [
        { value: "a", label: optionA, sortOrder: 1 },
        { value: "b", label: optionB, sortOrder: 2 },
        { value: "c", label: optionC, sortOrder: 3 },
        { value: "d", label: optionD, sortOrder: 4 },
      ],
      correctOptionValues: ["a"],
    };

    const updatedQuestions = [...questions, newQuestion];

    setQuestions(updatedQuestions);
    localStorage.setItem("quizQuestions", JSON.stringify(updatedQuestions));
    setShowPopup(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-5 rounded-xl w-[400px] flex flex-col gap-3">
        <h2 className="text-lg font-bold">Thêm câu hỏi</h2>

        <input
          placeholder="Nhập câu hỏi"
          className="border p-2"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Đáp án A"
          className="border p-2"
          onChange={(e) => setOptionA(e.target.value)}
        />

        <input
          placeholder="Đáp án B"
          className="border p-2"
          onChange={(e) => setOptionB(e.target.value)}
        />

        <input
          placeholder="Đáp án C"
          className="border p-2"
          onChange={(e) => setOptionC(e.target.value)}
        />

        <input
          placeholder="Đáp án D"
          className="border p-2"
          onChange={(e) => setOptionD(e.target.value)}
        />

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white p-2 rounded cursor-pointer"
        >
          Lưu
        </button>

        <button
          onClick={() => setShowPopup(false)}
          className="bg-gray-400 text-white p-2 rounded cursor-pointer"
        >
          Hủy
        </button>
      </div>
    </div>
  );
};
