<script setup lang="ts">
const { url } = defineProps<{ url: string }>();

const video = ref<HTMLVideoElement>();
const isPlaying = ref(false);

function onChange() {
  if (url.length > 3) {
    video.value?.addEventListener("ended", function () {
      isPlaying.value = false;
      return;
    });

    if (!isPlaying.value) {
      video.value?.play();
      isPlaying.value = true;
    } else {
      video.value?.pause();
      isPlaying.value = false;
    }
  } else ElMessage.error("Video no aviable !!!");
}
</script>

<template>
  <div @click="onChange" class="cursor-pointer relative w-full h-full">
    <video
      ref="video"
      class="video-block__img w-full h-full object-cover rounded-[16px] bg-clight"
      :src="url"
    ></video>

    <div
      v-if="!isPlaying"
      class="video-block__icon cursor-pointer absolute w-[calc(100%-3rem)] <md:(w-full) h-full top-0 left-0 flex justify-center items-center"
    >
      <img src="/icons/any/play.svg" class="w-[60px]" alt="" />
    </div>
  </div>
</template>
