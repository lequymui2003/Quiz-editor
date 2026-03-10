import type { QuestionItemProps } from "../types/quiz";
import { OptionList } from "./OptionList";

export const QuestionItem = ({ question }: QuestionItemProps) => {
  return (
    <>
      <div className="rounded-[10px] bg-gray-200 p-5 flex flex-col gap-2.5">
        <div className="flex gap-5">
          <div className="flex-1">
            <p>{question.name}</p>
          </div>
          <div className="flex gap-1.5">
            <button className="py-2.5 px-1 bg-emerald-500 rounded-[5px] cursor-pointer">
              Sửa
            </button>
            <button className="py-2.5 px-1 bg-red-400 rounded-[5px] cursor-pointer">
              Xóa
            </button>
          </div>
        </div>
        <OptionList
          options={question.options}
          correctOptionValues={question.correctOptionValues}
        />
      </div>
    </>
  );
};
