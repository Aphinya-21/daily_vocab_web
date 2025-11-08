export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Word = {
    word: string;
    meaning: string;
    difficulty_level: Difficulty;
};
