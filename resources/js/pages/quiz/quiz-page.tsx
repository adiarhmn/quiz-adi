import { useCallback, useEffect, useState } from 'react';
import { fetchQuizQuestions, type Question } from '@/lib/api/quiz';

export default function QuizPage() {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [timeLeft, setTimeLeft] = useState<number>(100);
    const [loading, setLoading] = useState<boolean>(true);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
        const loadQuestions = async () => {
            try {
                const data = await fetchQuizQuestions(10);
                setQuestions(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadQuestions();
    }, []);

    // Start timer on component mount
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleAnswer = (option: string): void => {
        setAnswers((prev) => ({
            ...prev,
            [currentIndex]: option,
        }));
    };

    // Calculate score and mark quiz as submitted
    const handleSubmit = useCallback(() => {
        if (isSubmitted) return;

        let total = 0;

        questions.forEach((q, index) => {
            if (answers[index] === q.correctAnswer) {
                total++;
            }
        });

        setScore(total);
        setIsSubmitted(true);
    }, [answers, isSubmitted, questions]);

    // Auto-submit when time runs out
    useEffect(() => {
        if (timeLeft === 0 && !isSubmitted && questions.length > 0) {
            handleSubmit();
        }
    }, [timeLeft, isSubmitted, questions, handleSubmit]);

    const formatTime = (seconds: number): string => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    if (loading) {
        return <div className="flex min-h-screen items-center justify-center text-gray-600">Loading questions...</div>;
    }

    const currentQuestion = questions[currentIndex];
    const answeredCount = Object.keys(answers).length;

    if (isSubmitted) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <div className="rounded-2xl bg-white p-10 text-center shadow-md">
                    <h1 className="mb-4 text-3xl font-semibold text-gray-900">Quiz Completed</h1>
                    <p className="mb-6 text-lg text-gray-600">Your Score</p>
                    <div className="mb-8 text-4xl font-bold text-orange-600">
                        {score} / {questions.length}
                    </div>

                    <button onClick={() => window.location.reload()} className="rounded-lg bg-orange-600 px-6 py-2 text-white hover:bg-orange-700">
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-4">
                    {/* LEFT - Question */}
                    <div className="rounded-2xl border border-gray-100 bg-white p-10 shadow-sm lg:col-span-3">
                        <div className="mb-6 flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                                Question {currentIndex + 1} of {questions.length}
                            </span>
                            <span className="text-sm font-medium text-orange-600">{answeredCount} Answered</span>
                        </div>

                        <h1 className="mb-8 text-2xl leading-relaxed font-semibold text-gray-900">{currentQuestion.question}</h1>

                        <div className="space-y-4">
                            {currentQuestion.options.map((option, i) => {
                                const selected = answers[currentIndex] === option;

                                return (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswer(option)}
                                        className={`w-full rounded-xl border px-5 py-4 text-left transition-all duration-150 ${
                                            selected
                                                ? 'border-orange-600 bg-orange-600 text-white shadow-md'
                                                : 'border-gray-200 bg-white hover:border-orange-400 hover:bg-orange-50'
                                        } `}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Navigation */}
                        <div className="mt-10 flex justify-between">
                            <button
                                disabled={currentIndex === 0}
                                onClick={() => setCurrentIndex((prev) => prev - 1)}
                                className="rounded-lg border px-5 py-2 text-gray-600 disabled:opacity-40"
                            >
                                Previous
                            </button>

                            {currentIndex === questions.length - 1 ? (
                                <button onClick={handleSubmit} className="rounded-lg bg-orange-600 px-5 py-2 text-white">
                                    Submit
                                </button>
                            ) : (
                                <button
                                    disabled={currentIndex === questions.length - 1}
                                    onClick={() => setCurrentIndex((prev) => prev + 1)}
                                    className="rounded-lg bg-orange-600 px-6 py-2 text-white hover:bg-orange-700 disabled:opacity-40"
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>

                    {/* RIGHT - Sidebar */}
                    <div className="sticky top-6 h-fit space-y-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                        {/* Timer */}
                        <div>
                            <p className="mb-2 text-sm text-gray-500">Time Remaining</p>
                            <div className="text-3xl font-bold text-orange-600">{formatTime(timeLeft)}</div>
                        </div>

                        {/* Progress */}
                        <div>
                            <p className="mb-3 text-sm text-gray-500">Progress</p>
                            <div className="h-2 w-full rounded-full bg-gray-200">
                                <div
                                    className="h-2 rounded-full bg-orange-600 transition-all"
                                    style={{
                                        width: `${(answeredCount / questions.length) * 100}%`,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Question Grid */}
                        <div>
                            <p className="mb-3 text-sm text-gray-500">Questions</p>
                            <div className="grid grid-cols-5 gap-2">
                                {questions.map((_, i) => {
                                    const isAnswered = Boolean(answers[i]);
                                    const isActive = i === currentIndex;

                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentIndex(i)}
                                            className={`h-10 rounded-lg text-sm font-medium transition ${
                                                isAnswered ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            } ${isActive ? 'ring-2 ring-orange-600' : ''} `}
                                        >
                                            {i + 1}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
