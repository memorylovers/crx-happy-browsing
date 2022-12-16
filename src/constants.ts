import { PLAY_MODE } from "./types";

export const EFFECT_INTERVAL_TIME = 800; //ms
export const EFFECT_MAX_COUNT = 6;
export const EFFECT_MIN_COUNT = 2;
export const EFFECT_VOLUME = 0.2;
export const CRX_STORE_LINK =
  "https://chrome.google.com/webstore/detail/happppppppppy-browssssssi/pkdicjoonmjmennalcinlenhomdiknnm";
export const CRX_REPO_LINK = "https://github.com/memorylovers/crx-happy-browsing";

export const RARELITTY: { [key in PLAY_MODE]: number } = {
  SLIGHT: 5, // %
  ENJOY: 20, // %
  HAPPY: 99, // %
} as const;

export const PLAY_MODE_LABEL = {
  SLIGHT: "slight",
  ENJOY: "Enjoy",
  HAPPY: "HAPPY",
} as const;

export const isDev = import.meta.env.DEV;
