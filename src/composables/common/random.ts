import { random, shuffle } from "lodash-es";
import { EFFECT_MAX_COUNT, EFFECT_MIN_COUNT, RARELITTY } from "../../constants";
import { anims } from "../../gen/anims";
import { sounds } from "../../gen/sounds";
import { AnimPos, PLAY_MODE } from "../../types";

export const getTrigger = (mode: PLAY_MODE) => random(1, 100) <= RARELITTY[mode];

export const getEffectNum = () => random(EFFECT_MIN_COUNT, EFFECT_MAX_COUNT);

export const pickSoundPath = (): string => shuffle(sounds)[0];

export const pickAnimPath = (): string => shuffle(anims)[0];

export const pickAnimPos = (screenW: number, screenH: number): AnimPos => {
  // calc size
  const unitSize = 150;

  const maxSize = Math.ceil(Math.min(screenW, screenH) * 0.9);
  const minSize = Math.max(Math.ceil(maxSize * 0.2), unitSize);

  const size = randUnit(minSize, maxSize, unitSize);

  // calc visible area: x
  const xMargin = 0;
  const xStart = xMargin;
  const xEnd = screenW - size - xMargin;

  // calc visible area: y
  const yMargin = Math.min(minSize, unitSize);
  const yStart = 0;
  const yEnd = screenH - size - yMargin;

  // calc visible area: top/left
  const posUnit = Math.min(Math.floor(size * 0.2), 200);
  const left = randUnit(xStart, xEnd, posUnit);
  const top = randUnit(yStart, yEnd, posUnit);

  const animPos = { width: size, height: size, top, left };
  return animPos;
};

// random number by unit
const randUnit = (min: number, max: number, unit: number) => {
  const maxStep = Math.ceil((max - min) / unit);
  const randomStep = random(0, maxStep - 1, false);
  const randNum = Math.round(randomStep * unit);

  return randNum;
};
