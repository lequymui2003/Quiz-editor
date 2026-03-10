export type Option = {
  value: string;
  label: string;
  sortOrder: number;
};

export type Question = {
  name: string;
  description: string;
  sortOrder: number;
  options: Option[];
  correctOptionValues: string[];
};

export type QuestionListProps = {
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
};

export type QuestionItemProps = {
  question: Question;
};

export type OptionListProps = {
  options: Option[];
  correctOptionValues: string[];
};

export type OptionItemProps = {
  option: Option;
  isCorrect: boolean;
};

export type Quiz = {
  name: string;
  description: string;
  questions: Question[];
};

export type AddQuestionModalProps = {
  setShowPopup: (value: boolean) => void;
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
};
