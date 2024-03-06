<script setup>
const data = reactive({
  images: [
    { img: "/images/phone-1.png" },
    { img: "/images/grid-1.png" },
    { img: "/images/phone-2.png" },
    { img: "/images/grid-2.png" },
    { img: "/images/phone-3.png" },
    { img: "/images/grid-3.png" },
    { img: "/images/phone-4.png" },
    { img: "/images/grid-4.png" },
  ],
  media: [
    { type: "img", url: "/images/img-1.png" },
    { type: "img", url: "/images/img-2.png" },
    { type: "img", url: "/images/img-3.png" },
    { type: "img", url: "/images/img-4.png" },
    { type: "img", url: "/images/img-5.png" },
    { type: "img", url: "/images/img-6.png" },
  ],
});
</script>

<template>
  <div class="images w-full px-6">
    <div class="images__content custom__container mx-auto">
      <div class="text-block">
        <div class="text-block__title text-center">
          <Typography
            is="h2"
            :label="$t('images')"
            size="lg"
            transform="uppercase"
            class="font-bold mb-0"
          />
        </div>
      </div>

      <div
        class="images-list__dynamic-grid grid grid-cols-3 mt-7 gap-5 <lg:gap-4 <md:gap-3"
      >
        <div
          :key="v"
          v-for="v in data.images"
          class="images-list__item h-auto text-center bg-transparent rounded-[10px] overflow-hidden"
        >
          <div
            class="img-video-block w-full h-[400px] <xl:h-[360px] <lg:h-[320px] <2md:h-[250px] <md:h-[200px] <sm:h-[160px] <xs:h-[140px]"
          >
            <img
              :src="v.img"
              alt="images Image"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 mt-7 gap-5 <lg:gap-4 <md:gap-3">
        <div
          :key="v"
          v-for="v in data.media"
          class="images-list__item h-auto text-center bg-transparent rounded-[10px] overflow-hidden"
        >
          <div
            class="img-video-block w-full h-[300px] <lg:h-[200px] <md:h-[160px] <xs:h-[120px]"
          >
            <img
              v-if="v.type == 'img'"
              :src="v.url"
              alt="images Image"
              class="w-full h-full object-cover"
            />

            <Video v-else :url="v.url" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.images-list__dynamic-grid {
  .images-list__item:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
  }

  .images-list__item:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
  }

  .images-list__item:nth-child(6) {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 3;
  }

  .images-list__item:nth-child(7) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 4;
  }

  .images-list__item:nth-child(10) {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 5;
    grid-row-end: 5;
  }
  .images-list__item:nth-child(11) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 6;
  }
}
</style>
