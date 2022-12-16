import { EventHandlerParam, Settings } from "../../types";
import { getTrigger } from "../common/random";
import { EffectPlayer } from "./player";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const eventHandlerRoot = (settings: Settings, { type, event }: EventHandlerParam) => {
  if (!settings.enableAll || (!settings.enableAnimation && !settings.enableSound)) return;
  makeEffects(settings, event);
};

const makeEffects = (settings: Settings, event: Event) => {
  console.log(`** makeEffects: event.type=${event.type}`);
  // trigger or not
  const isTriggered = getTrigger(settings.playMode);
  if (!isTriggered) return;

  // stop.prevent and play next
  event.stopPropagation();
  event.preventDefault();

  new EffectPlayer().play(settings).then();
};
