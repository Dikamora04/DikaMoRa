import { create } from "zustand";
import { STEPS } from "../constants/steps";
import type { Step } from "../constants/steps";
import type { Answer } from "../types/answer";

interface GameState {
  step: Step;
  choice: Answer | null;
  setStep: (newStep: Step) => void;
  setChoice: (choice: Answer | null) => void;
  reset: () => void;
}

const useGameStore = create<GameState>((set) => ({
  step: STEPS.SELECTION,
  choice: null,
  setStep: (newStep) => set({ step: newStep }),
  setChoice: (choice) => set({ choice }),
  reset: () => set({ step: STEPS.SELECTION, choice: null }),
}));

export default useGameStore;
