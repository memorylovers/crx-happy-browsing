import { EffectData, Settings } from "../../types";
import { EffectAnimItem } from "./anim";
import { EffectSoundItem } from "./sound";

// set of anim and sound
export class EffectItem {
  private animPlayer: EffectAnimItem;
  private soundPlayer: EffectSoundItem;

  constructor(data: EffectData) {
    this.animPlayer = new EffectAnimItem(data);
    this.soundPlayer = new EffectSoundItem(data);
  }

  play(settings: Settings) {
    if (!settings.enableAll) return;

    this.animPlayer.play(settings);
    this.soundPlayer.play(settings);
  }
}
