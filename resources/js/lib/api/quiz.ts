// lib/api/quiz.ts

export type ApiQuestion = {
  category: string;
  type: "multiple";
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type ApiResponse = {
  response_code: number;
  results: ApiQuestion[];
};

export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
};

// helper decode HTML entities
const decodeHTML = (html: string): string => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

export const fetchQuizQuestions = async (
  amount: number = 10
): Promise<Question[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=21&difficulty=easy&type=multiple`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch quiz questions");
  }

  const data: ApiResponse = await res.json();

  return data.results.map((q) => {
    const options = [...q.incorrect_answers, q.correct_answer]
      .map(decodeHTML)
      .sort(() => Math.random() - 0.5);

    return {
      question: decodeHTML(q.question),
      options,
      correctAnswer: decodeHTML(q.correct_answer),
    };
  });
};
