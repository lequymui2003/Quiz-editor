import type { OptionItemProps } from "../types/quiz";

export const OptionItem = ({ option, isCorrect }: OptionItemProps) => {
  return (
    <>
      <div className="flex gap-1.5 border border-gray-700 rounded-[10px] p-1.5">
        <input type="radio" checked={isCorrect} readOnly />
        <p>{option.label}</p>
      </div>
    </>
  );
};
