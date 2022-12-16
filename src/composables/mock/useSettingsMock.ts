import { reactive } from "vue";
import { SettingParam, Settings, SettingsKey } from "../../types";

const DEFAULT_SETTINGS: Settings = {
  enableAll: true,
  enableSound: true,
  enableAnimation: true,
  playMode: "ENJOY",
};

export function useSettingsMock() {
  const state: Settings = reactive(DEFAULT_SETTINGS);

  // expose
  return {
    state,
    loadValue: async () => {},
    setValue: ({ key, value }: SettingParam) => ((state as any)[key] = value),
    getValue: (key: SettingsKey) => state[key],
  };
}
