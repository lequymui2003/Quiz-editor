import { useEffect, useState } from "react";
import type { AddQuestionModalProps } from "../types/quiz";

export const AddQuestionModal = ({
  setShowPopup,
  questions,
  setQuestions,
  editingQuestion,
}: AddQuestionModalProps) => {
  const [name, setName] = useState(editingQuestion?.name || "");
  const [optionA, setOptionA] = useState(
    editingQuestion?.options[0]?.label || "",
  );
  const [optionB, setOptionB] = useState(
    editingQuestion?.options[1]?.label || "",
  );
  const [optionC, setOptionC] = useState(
    editingQuestion?.options[2]?.label || "",
  );
  const [optionD, setOptionD] = useState(
    editingQuestion?.options[3]?.label || "",
  );

  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, []);

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

  const handleSave = () => {
    if (!editingQuestion) return;

    const updatedQuestion = {
      ...editingQuestion,
      name,
      options: [
        { value: "a", label: optionA, sortOrder: 1 },
        { value: "b", label: optionB, sortOrder: 2 },
        { value: "c", label: optionC, sortOrder: 3 },
        { value: "d", label: optionD, sortOrder: 4 },
      ],
    };

    const updatedQuestions = questions.map((q) =>
      q.sortOrder === editingQuestion.sortOrder ? updatedQuestion : q,
    );

    setQuestions(updatedQuestions);
    localStorage.setItem("quizQuestions", JSON.stringify(updatedQuestions));
    setShowPopup(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center sm:p-0 px-4">
      <div className="bg-white p-5 rounded-xl w-100 flex flex-col gap-3">
        <h2 className="text-lg font-bold">
          {editingQuestion ? "Sửa câu hỏi" : "Thêm câu hỏi"}
        </h2>

        <input
          value={name}
          placeholder="Nhập câu hỏi"
          className="border p-2"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          value={optionA}
          placeholder="Đáp án A"
          className="border p-2"
          onChange={(e) => setOptionA(e.target.value)}
        />

        <input
          value={optionB}
          placeholder="Đáp án B"
          className="border p-2"
          onChange={(e) => setOptionB(e.target.value)}
        />

        <input
          value={optionC}
          placeholder="Đáp án C"
          className="border p-2"
          onChange={(e) => setOptionC(e.target.value)}
        />

        <input
          value={optionD}
          placeholder="Đáp án D"
          className="border p-2"
          onChange={(e) => setOptionD(e.target.value)}
        />

        <button
          onClick={editingQuestion ? handleSave : handleAdd}
          className="bg-blue-600 text-white p-2 rounded cursor-pointer"
        >
          {editingQuestion ? "Cập nhật" : "Lưu"}
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
