<template>
  <div class="lesson-program w-full px-6">
    <div class="lesson-program__content custom__container mx-auto">
      <div class="text-block__title">
        <Typography
          is="h3"
          :label="$t('program.title')"
          size="xl"
          class="font-bold my-10 text-center"
        />
      </div>

      <template :key="i" v-for="(v, i) in data">
        <div
          v-if="i % 2 == 0 ? true : false"
          class="lesson-program__block bg-cwhite rounded-[40px] overflow-hidden px-8 py-9 <md:py-6 <sm:(max-w-screen-[400px] mx-auto) flex justify-between items-center flex-wrap mb-8"
        >
          <div class="img-block lesson-program w-max <sm:w-full">
            <img
              :src="v.img"
              alt="lesson-program Image"
              class="lesson-program__img w-[360px] <xl:w-[300px] h-auto <lg:w-[260px] <2md:w-[220px] <md:w-[200px] <sm:(w-full) overflow-hidden rounded-[16px] bg-red-300"
            />
          </div>

          <div
            class="text-block pl-12 w-[calc(100%-360px)] <xl:w-[calc(100%-300px)] <lg:(w-[calc(100%-260px)] pl-8) <2md:(w-[calc(100%-220px)] pl-6) <md:(w-[calc(100%-200px)]) <sm:(w-full pl-0 mt-5)"
          >
            <div class="text-block__title">
              <Typography
                is="h3"
                :label="v.title"
                size="lg"
                transform="uppercase"
                class="font-bold my-0"
              />
            </div>

            <div
              class="text-block__title-devider border-b border-cdark-blue opacity-20 mt-3 mb-5"
            ></div>

            <div class="text-block__name">
              <Typography
                is="h3"
                :label="v.name"
                size="sm"
                class="font-bold my-0"
              />
            </div>

            <div class="text-block__description">
              <Typography
                is="h3"
                :label="v.desc"
                size="xs"
                class="font-normal my-4"
              />
            </div>
          </div>
        </div>

        <div
          v-else
          class="lesson-program__block bg-cwhite rounded-[40px] overflow-hidden px-8 py-9 <md:py-6 <sm:(max-w-screen-[400px] mx-auto) flex justify-between items-center flex-wrap mb-8"
        >
          <div
            class="text-block pr-12 w-[calc(100%-360px)] <xl:w-[calc(100%-300px)] <lg:(w-[calc(100%-260px)] pr-8) <2md:(w-[calc(100%-220px)] pr-6) <md:(w-[calc(100%-200px)]) <sm:(w-full order-2 pt-0 mt-5)"
          >
            <div class="text-block__title">
              <Typography
                is="h3"
                :label="v.title"
                size="lg"
                transform="uppercase"
                class="font-bold my-0"
              />
            </div>

            <div
              class="text-block__title-devider border-b border-cdark-blue opacity-20 mt-3 mb-5"
            ></div>

            <div class="text-block__name">
              <Typography
                is="h3"
                :label="v.name"
                size="sm"
                class="font-bold my-0"
              />
            </div>

            <div class="text-block__description">
              <Typography
                is="h3"
                :label="v.desc"
                size="xs"
                class="font-normal my-4"
              />
            </div>
          </div>

          <div class="img-block lesson-program w-max <sm:w-full">
            <img
              :src="v.img"
              alt="lesson-program Image"
              class="lesson-program__img w-[360px] <xl:w-[300px] h-auto <lg:w-[260px] <2md:w-[220px] <md:w-[200px] <sm:(w-full) overflow-hidden rounded-[16px] bg-red-300"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
const data = computed(() => [
  {
    title: t("program.list.1.title"),
    name: t("program.list.1.name"),
    desc: t("program.list.1.desc"),
    img: "/images/teacher-5.jpeg",
  },
  {
    title: t("program.list.2.title"),
    name: t("program.list.2.name"),
    desc: t("program.list.2.desc"),
    img: "/images/teacher-6.png",
  },
  {
    title: t("program.list.3.title"),
    name: t("program.list.3.name"),
    desc: t("program.list.3.desc"),
    img: "/images/teacher-3.jpeg",
  },
]);
</script>
