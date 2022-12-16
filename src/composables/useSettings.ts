import { defu } from "defu";
import { reactive } from "vue";
import { SettingParam, Settings, SettingsKey } from "../types";

const DEFAULT_SETTINGS: Settings = {
  enableAll: true,
  enableSound: true,
  enableAnimation: true,
  playMode: "ENJOY",
};

export function useSettings() {
  const state: Settings = reactive(DEFAULT_SETTINGS);

  // load current values
  const loadValue = async () => {
    const current = await chrome.storage.local.get();
    const settings: Settings = defu(current, DEFAULT_SETTINGS);

    // set
    state.enableAll = settings.enableAll;
    state.enableSound = settings.enableSound;
    state.enableAnimation = settings.enableAnimation;
    state.playMode = settings.playMode;
  };
  loadValue().then();

  // listen onchange
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  chrome.storage.onChanged.addListener((changes, _namespace) => {
    Object.keys(state).forEach((key) => {
      if (changes[key] == undefined || changes[key].newValue == undefined) return;
      if (key == "enableAll" && typeof changes[key].newValue === "boolean") {
        state.enableAll = changes[key].newValue;
      }
      if (key == "enableSound" && typeof changes[key].newValue === "boolean") {
        state.enableSound = changes[key].newValue;
      }
      if (key == "enableAnimation" && typeof changes[key].newValue === "boolean") {
        state.enableAnimation = changes[key].newValue;
      }
      if (key == "playMode" && typeof changes[key].newValue === "string") {
        state.playMode = changes[key].newValue;
      }
    });
  });

  // expose
  return {
    state,
    loadValue,
    setValue: ({ key, value }: SettingParam) => chrome.storage.local.set({ [key]: value }),
    getValue: (key: SettingsKey) => chrome.storage.local.get(key),
  };
}
