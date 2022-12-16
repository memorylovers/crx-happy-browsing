import { default as lottie } from "lottie-web/build/player/lottie_light";
import { v4 as uuid4 } from "uuid";
import { EffectData, Settings } from "../../types";
import { createAnimContainer } from "../common/dom";

export class EffectAnimItem {
  private animContainer: HTMLElement;
  private animName: string;

  constructor(private data: EffectData) {
    const { animPath, animPos } = data;
    this.animContainer = createAnimContainer(document.body, animPos, animPath);
    this.animName = uuid4();
  }

  play({ enableAll, enableAnimation }: Settings) {
    if (!enableAll || !enableAnimation) return;

    const path = chrome.runtime.getURL(this.data.animPath);
    const animPlayer = lottie.loadAnimation({
      name: this.animName,
      container: this.animContainer,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: path,
    });
    animPlayer.addEventListener("complete", () => {
      lottie.destroy(this.animName);
      this.animContainer.parentElement?.removeChild(this.animContainer);
    });
  }
}
