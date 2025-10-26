import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TestConfigState {
  mode: "time" | "words" | "quote" | "zen";
  value: number;
  words: number;
  quote: "all" | "short" | "medium" | "long";
  timeLeft: number;
  wordsCount: number;
  isTestRunning: boolean;
  isTestCompleted: boolean;
  punctuation: boolean;
  numbers: boolean;
  language: string;
}

const initialState: TestConfigState = {
  mode: "time",
  value: 30,
  words: 25,
  quote: "short",
  timeLeft: 30,
  wordsCount: 25,
  isTestRunning: false,
  isTestCompleted: false,
  punctuation: false,
  numbers: false,
  language: "english",
};

const testConfigSlice = createSlice({
  name: "testConfig",
  initialState,
  reducers: {
    setMode: (
      state,
      action: PayloadAction<"time" | "words" | "quote" | "zen">
    ) => {
      state.mode = action.payload;

      if (state.mode === "time") {
        state.value = 30;
        state.timeLeft = state.value;
      } else if (state.mode === "words") {
        state.words = 25;
        state.wordsCount = state.words;
      }
      state.isTestCompleted = false;
      state.isTestRunning = false;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
      if (state.mode === "time") state.timeLeft = action.payload;

      state.isTestCompleted = false;
      state.isTestRunning = false;
    },
    setWords: (state, action: PayloadAction<number>) => {
      state.words = action.payload;
      if (state.mode === "words") state.wordsCount = action.payload;

      state.isTestCompleted = false;
      state.isTestRunning = false;
    },
    setQuote: (
      state,
      action: PayloadAction<"all" | "short" | "medium" | "long">
    ) => {
      state.quote = action.payload;

      state.isTestCompleted = false;
      state.isTestRunning = false;
    },
    setTimeLeft: (state, action: PayloadAction<number>) => {
      state.timeLeft = action.payload;
    },
    setWordsCount: (state, action: PayloadAction<number>) => {
      state.wordsCount = action.payload;
    },
    setIsTestRunning: (state, action: PayloadAction<boolean>) => {
      state.isTestRunning = action.payload;
    },
    setIsTestCompleted: (state, action: PayloadAction<boolean>) => {
      state.isTestCompleted = action.payload;
    },
    setPunctuation: (state) => {
      state.punctuation = !state.punctuation;
    },
    setNumbers: (state) => {
      state.numbers = !state.numbers;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    restartState: (state) => {
      state.isTestCompleted = false;
      state.isTestRunning = false;

      if (state.mode === "time") state.value = 30;
      else if (state.mode === "words") state.words = 25;
      else state.quote = "short";
    },
  },
});

export const {
  setMode,
  setValue,
  setWords,
  setQuote,
  setTimeLeft,
  setWordsCount,
  setIsTestCompleted,
  setIsTestRunning,
  setPunctuation,
  setNumbers,
  setLanguage,
  restartState,
} = testConfigSlice.actions;

export default testConfigSlice.reducer;
