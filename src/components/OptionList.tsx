import type { OptionListProps } from "../types/quiz";
import { OptionItem } from "./OptionItem";

export const OptionList = ({
  options,
  correctOptionValues,
}: OptionListProps) => {
  return (
    <>
      <div className="flex flex-col gap-2.5">
        {options.map((option) => (
          <OptionItem
            key={option.value}
            option={option}
            isCorrect={correctOptionValues.includes(option.value)}
          />
        ))}
      </div>
    </>
  );
};
