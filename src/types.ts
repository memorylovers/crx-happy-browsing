// ********************************************************
// * Common
// ********************************************************
export type ToKeyValueTupleWithKey<T, K extends keyof T> = K extends keyof T ? { key: K; value: Pick<T, K>[K] } : never;

export type ToKeyValueTuple<T> = ToKeyValueTupleWithKey<T, keyof T>;

// ********************************************************
// * PlayMode
// ********************************************************
export type PLAY_MODE = "SLIGHT" | "ENJOY" | "HAPPY";

// ********************************************************
// * Settings
// ********************************************************
export type Settings = {
  enableAll: boolean;
  enableSound: boolean;
  enableAnimation: boolean;
  playMode: PLAY_MODE;
};
export type SettingsKey = keyof Settings;
export type SettingParam = ToKeyValueTuple<Settings>;

// ********************************************************
// * Event
// ********************************************************
export const EventType = {
  CLICK: "click",
  KEY_DOWN: "keydown",
  KEY_PRESS: "keypress",
  SUBMIT: "submit",
} as const;
export type EventType = typeof EventType[keyof typeof EventType];

export type EventHandlerParamBase = { v: HTMLElement; type: EventType; event: Event };
export type EventHandlerParamClick = { type: "click"; event: MouseEvent } & EventHandlerParamBase;
export type EventHandlerParamKeyDown = { type: "keydown"; event: KeyboardEvent } & EventHandlerParamBase;
export type EventHandlerParamKeyPress = { type: "keypress"; event: KeyboardEvent } & EventHandlerParamBase;
export type EventHandlerParamSubmit = { type: "submit"; event: SubmitEvent } & EventHandlerParamBase;
export type EventHandlerParam =
  | EventHandlerParamClick
  | EventHandlerParamKeyDown
  | EventHandlerParamKeyPress
  | EventHandlerParamSubmit;

// ********************************************************
// * Effect Data
// ********************************************************
export type EffectData = {
  soundPath: string;
  animPath: string;
  animPos: AnimPos;
};

export type AnimPos = {
  width: number;
  height: number;
  top: number;
  left: number;
};
