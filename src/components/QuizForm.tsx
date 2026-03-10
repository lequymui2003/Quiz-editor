import { QuestionList } from "./QuestionList";

export const QuizForm = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center py-5">
        <div className="w-5xl border border-gray-400 rounded-[10px] p-5 flex flex-col gap-5 justify-center">
          <p className="text-[25px] font-bold text-blue-600 text-center">Quiz</p>
          <QuestionList />
        </div>
      </div>
    </>
  );
};
