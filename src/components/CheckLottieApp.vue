<template>
  <div class="twhb-m-8 twhb-mx-auto twhb-flex twhb-max-w-[400px] twhb-flex-col twhb-gap-y-4">
    <div ref="container" class="twhb-h-[400px] twhb-w-[400px] twhb-overflow-hidden twhb-bg-gray-300"></div>
    <div class="twhb-text-gray-400">({{ animIndex }} / {{ anims.length - 1 }}) {{ anim }}</div>

    <div class="twhb-flex twhb-flex-row twhb-gap-x-4">
      <button class="twhb-btn-primary twhb-btn-sm twhb-btn" @click="onClickReplay">Replay</button>
      <button class="twhb-btn-primary twhb-btn-sm twhb-btn" @click="onClickNext">Next</button>
      <button class="twhb-btn-primary twhb-btn-sm twhb-btn" @click="onClickPrepare">Prepare</button>
      <button class="twhb-btn-primary twhb-btn-sm twhb-btn" @click="onClickPlay">Play</button>
      <button class="twhb-btn-primary twhb-btn-sm twhb-btn" @click="onClickDestory">Destroy</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import lottie, { AnimationItem } from "lottie-web";
import { computed, onMounted, ref } from "vue";
import { anims } from "../gen/anims";

const container = ref<HTMLElement | null>(null);
const animIndex = ref(0);
const player = ref<AnimationItem | null>(null);

onMounted(() => {
  prepare();
});

const anim = computed(() => anims[animIndex.value]);
const onClickNext = () => {
  animIndex.value = (animIndex.value + 1) % anims.length;
  prepare();
};

const onClickReplay = () => {
  play();
};

const onClickPrepare = () => {
  prepare();
};

const onClickPlay = () => {
  player.value?.resetSegments(true);
  player.value?.play();
};

const onClickDestory = () => {
  player.value?.destroy();
};

const play = () => {
  if (container.value == null) return;
  const animContainer = document.createElement("div");
  animContainer.className = "anim-container";
  container.value.replaceChildren(animContainer);

  const _amin = lottie.loadAnimation({
    container: animContainer,
    autoplay: true,
    loop: false,
    path: anim.value,
  });
  _amin.addEventListener("DOMLoaded", () => console.log("** lottie: DOMLoaded"));
  _amin.addEventListener("complete", () => console.log("** lottie: complete"));
  _amin.addEventListener("config_ready", () => console.log("** lottie: config_ready"));
  _amin.addEventListener("data_failed", () => console.log("** lottie: data_failed"));
  _amin.addEventListener("data_ready", () => console.log("** lottie: data_ready"));
  _amin.addEventListener("destroy", () => console.log("** lottie: destroy"));
  // _amin.addEventListener("enterFrame", () => console.log("** lottie: enterFrame"));
  _amin.addEventListener("error", () => console.log("** lottie: error"));
  _amin.addEventListener("loaded_images", () => console.log("** lottie: loaded_images"));
  _amin.addEventListener("loopComplete", () => console.log("** lottie: loopComplete"));
  _amin.addEventListener("segmentStart", () => console.log("** lottie: segmentStart"));
  player.value = _amin;
};

const prepare = () => {
  if (container.value == null) return;
  const animContainer = document.createElement("div");
  container.value.replaceChildren(animContainer);

  const _amin = lottie.loadAnimation({
    container: animContainer,
    autoplay: false,
    loop: false,
    path: anim.value,
  });
  _amin.addEventListener("DOMLoaded", () => console.log("** lottie: DOMLoaded"));
  _amin.addEventListener("complete", () => console.log("** lottie: complete"));
  _amin.addEventListener("config_ready", () => console.log("** lottie: config_ready"));
  _amin.addEventListener("data_failed", () => console.log("** lottie: data_failed"));
  _amin.addEventListener("data_ready", () => console.log("** lottie: data_ready"));
  _amin.addEventListener("destroy", () => console.log("** lottie: destroy"));
  // _amin.addEventListener("enterFrame", () => console.log("** lottie: enterFrame"));
  _amin.addEventListener("error", () => console.log("** lottie: error"));
  _amin.addEventListener("loaded_images", () => console.log("** lottie: loaded_images"));
  _amin.addEventListener("loopComplete", () => console.log("** lottie: loopComplete"));
  _amin.addEventListener("segmentStart", () => console.log("** lottie: segmentStart"));
  player.value = _amin;
};
</script>
