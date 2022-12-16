import { eventHandlerRoot } from "../composables/effects";
import { useSettings } from "../composables/useSettings";
import { EventType } from "../types";
console.log("script loaded!!");

// setup settings
const settings = useSettings();

// add click event listener
function clickListener(e: MouseEvent) {
  eventHandlerRoot(settings.state, { v: document.body, type: EventType.CLICK, event: e });
}

document.body.removeEventListener(EventType.CLICK, clickListener);
document.body.addEventListener(EventType.CLICK, clickListener, true);

// add keydown event listener
function keyDownListener(e: KeyboardEvent) {
  if (e.key != "Enter" || e.isComposing) return;
  eventHandlerRoot(settings.state, { v: document.body, type: EventType.KEY_DOWN, event: e });
}
document.body.removeEventListener(EventType.KEY_DOWN, keyDownListener);
document.body.addEventListener(EventType.KEY_DOWN, keyDownListener, true);
