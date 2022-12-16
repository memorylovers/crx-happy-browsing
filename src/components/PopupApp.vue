<template>
  <div class="twhb-inline-block twhb-min-w-[300px] twhb-shadow-lg">
    <img src="/popup-header.png" class="twhb-w-full" />

    <div class="twhb-p-4">
      <div class="twhb-form-control">
        <div class="twhb-mb-2 twhb-font-bold">Setting</div>

        <label class="twhb-label">
          <span class="twhb-label-text">Play Mode</span>
          <select
            v-model="playMode"
            class="twhb-select-bordered twhb-select twhb-select-sm twhb-w-full twhb-max-w-[12em] twhb-rounded-sm twhb-pt-0.5 twhb-text-xs twhb-font-normal"
          >
            <template v-for="(label, mode) in PLAY_MODE_LABEL" :key="mode">
              <option :value="mode">
                <span>{{ label }}</span>
                <span> ({{ RARELITTY[mode] }}%)</span>
              </option>
            </template>
          </select>
        </label>

        <label class="twhb-label">
          <span class="twhb-label-text">Enable All</span>
          <input v-model="enableAll" type="checkbox" class="twhb-toggle-primary twhb-toggle" />
        </label>

        <label v-if="enableAll" class="twhb-label">
          <span class="twhb-label-text">Enable Animation</span>
          <input
            v-model="enableAnimation"
            type="checkbox"
            class="twhb-toggle-primary twhb-toggle"
            :disabled="!enableAll"
          />
        </label>

        <label v-if="enableAll" class="twhb-label">
          <span class="twhb-label-text">Enable Sound</span>
          <input v-model="enableSound" type="checkbox" class="twhb-toggle-primary twhb-toggle" :disabled="!enableAll" />
        </label>
      </div>

      <div class="twhb-mt-4 twhb-flex twhb-flex-row twhb-gap-1">
        <a :href="CRX_STORE_LINK" class="twhb-rounded-full twhb-p-1 hover:twhb-shadow-lg" target="_blank">
          <Icon icon="mdi:heart" class="twhb-h-5 twhb-w-5 twhb-text-gray-400 hover:twhb-text-pink-400" />
        </a>
        <a :href="CRX_REPO_LINK" class="twhb-rounded-full twhb-p-1 hover:twhb-shadow-lg" target="_blank">
          <Icon
            icon="octicon:mark-github-16"
            class="twhb-h-5 twhb-w-5 twhb-p-px twhb-text-gray-400 hover:twhb-text-neutral"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed } from "vue";
import { useSettings } from "../composables/useSettings";
import { CRX_REPO_LINK, CRX_STORE_LINK, PLAY_MODE_LABEL, RARELITTY } from "../constants";
import { PLAY_MODE } from "../types";

const settings = useSettings();

const enableAll = computed({
  get: () => settings.state.enableAll,
  set: (val: boolean) => settings.setValue({ key: "enableAll", value: val }),
});

const enableAnimation = computed({
  get: () => settings.state.enableAnimation,
  set: (val: boolean) => settings.setValue({ key: "enableAnimation", value: val }),
});

const enableSound = computed({
  get: () => settings.state.enableSound,
  set: (val: boolean) => settings.setValue({ key: "enableSound", value: val }),
});

const playMode = computed({
  get: () => settings.state.playMode,
  set: (val: PLAY_MODE) => settings.setValue({ key: "playMode", value: val }),
});
</script>
