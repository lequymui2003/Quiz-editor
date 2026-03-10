import type { QuestionListProps } from "../types/quiz";
import { QuestionItem } from "./QuestionItem";

export const QuestionList = ({ questions }: QuestionListProps) => {
  return (
    <>
      <div className="flex flex-col gap-5 px-5">
        {questions.map((question) => (
          <QuestionItem key={question.sortOrder} question={question} />
        ))}
      </div>
    </>
  );
};
