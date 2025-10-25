export const STEPS = {
  SELECTION: 0,
  PLAY: 1,
  GAMEOVER: 2,
} as const;

export type Step = typeof STEPS[keyof typeof STEPS];
