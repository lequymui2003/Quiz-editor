export const data_exam = {
  name: "Frontend Basic Quiz",
  description: "This quiz tests basic knowledge of HTML, CSS, and JavaScript.",
  questions: [
    {
      name: "What is React?",
      description: "Choose the correct description of React.",
      sortOrder: 1,
      options: [
        {
          value: "a",
          label: "A JavaScript library for building user interfaces",
          sortOrder: 1,
        },
        {
          value: "b",
          label: "A database management system",
          sortOrder: 2,
        },
        {
          value: "c",
          label: "A CSS framework",
          sortOrder: 3,
        },
      ],
      correctOptionValues: ["a"],
    },
    {
      name: "Which of the following are programming languages?",
      description: "Select all correct answers.",
      sortOrder: 2,
      options: [
        {
          value: "a",
          label: "JavaScript",
          sortOrder: 1,
        },
        {
          value: "b",
          label: "Python",
          sortOrder: 2,
        },
        {
          value: "c",
          label: "HTML",
          sortOrder: 3,
        },
        {
          value: "d",
          label: "Java",
          sortOrder: 4,
        },
      ],
      correctOptionValues: ["b"],
    },
    {
      name: "What does CSS stand for?",
      description: "Choose the correct meaning of CSS.",
      sortOrder: 3,
      options: [
        {
          value: "a",
          label: "Computer Style Sheets",
          sortOrder: 1,
        },
        {
          value: "b",
          label: "Creative Style System",
          sortOrder: 2,
        },
        {
          value: "c",
          label: "Cascading Style Sheets",
          sortOrder: 3,
        },
      ],
      correctOptionValues: ["c"],
    },
  ],
};
