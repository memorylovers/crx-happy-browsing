import { Howl } from "howler";
import { EFFECT_VOLUME } from "../../constants";
import { EffectData, Settings } from "../../types";

export class EffectSoundItem {
  constructor(private data: EffectData) {}

  async play({ enableAll, enableSound }: Settings) {
    if (!enableAll || !enableSound) return;

    const path = chrome.runtime.getURL(this.data.soundPath);
    const soundPlayer: Howl = new Howl({
      src: [path],
      onend: () => soundPlayer.unload(),
      autoplay: true,
      loop: false,
      preload: true,
      volume: EFFECT_VOLUME,
    });
  }
}
