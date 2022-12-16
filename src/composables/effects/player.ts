import { range } from "lodash-es";
import { EFFECT_INTERVAL_TIME } from "../../constants";
import { EffectData, Settings } from "../../types";
import { getEffectNum, pickAnimPath, pickAnimPos, pickSoundPath } from "../common/random";
import { sleep } from "../common/utils";
import { EffectItem } from "./effects";

export class EffectPlayer {
  private items: EffectItem[] = [];

  constructor() {
    const dataList: EffectData[] = getEffectList();
    this.items = dataList.map((data) => new EffectItem(data));
  }

  async play(settings: Settings) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].play(settings);
      await sleep(i * EFFECT_INTERVAL_TIME);
    }
  }
}

// ********************************************************
// * private
// ********************************************************
const getEffectList = (): EffectData[] => {
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  const effectNum = getEffectNum();
  return range(1, effectNum).map(() => ({
    soundPath: pickSoundPath(),
    animPath: pickAnimPath(),
    animPos: pickAnimPos(screenW, screenH),
  }));
};
