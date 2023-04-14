export type ContextType = {
  translateX: number;
  translateY: number;
};

export enum AnimationModes {
  PAN = 'PAN',
  PINCH = 'PINCH',
}

export type AnimationModeState = AnimationModes;
