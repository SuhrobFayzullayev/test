<template>
  <div class="sertificate w-full px-6">
    <div class="sertificate__content custom__container mx-auto">
      <div class="text-block">
        <div class="text-block__title text-center">
          <Typography
            is="h2"
            :label="$t('teachers.title')"
            size="lg"
            class="font-bold my-0"
          />
        </div>

        <div class="text-block__desc text-center">
          <Typography
            is="h4"
            :label="$t('teachers.desc')"
            size="xs"
            class="font-normal my-0"
          />
        </div>
      </div>

      <div
        class="teachers-list grid grid-cols-2 <lg:(grid-cols-1 max-w-screen-sm mx-auto) <2md:(max-w-screen-xs) <sm:(max-w-full) <xs:(max-w-[400px]) mt-8 gap-5"
      >
        <div
          :key="v + i"
          v-for="(v, i) in data"
          :class="[
            [0, 3, 4, 7, 8, 11, 12, 15, 16].includes(i)
              ? 'bg-cblue <lg:bg-transparent'
              : 'bg-cgreen <lg:bg-transparent',
            i % 2 == 0 ? '<lg:bg-cblue' : '<lg:bg-cgreen',
          ]"
          class="teachers-list__item rounded-[40px] overflow-hidden p-6 flex justify-between items-center flex-wrap"
        >
          <div class="img-block relative w-[45%] <xs:w-full">
            <img
              :src="v.img"
              alt="Teacher Image"
              class="img-block__image w-full h-auto rounded-[16px] overflow-hidden"
            />

            <div
              :class="[
                [0, 3, 4, 7, 8, 11, 12, 15, 16].includes(i)
                  ? 'bg-cblue <lg:bg-transparent'
                  : 'bg-cgreen <lg:bg-transparent',
                i % 2 == 0 ? '<lg:bg-cblue' : '<lg:bg-cgreen',
              ]"
              class="img-block__text-block absolute left-0 bottom-0 w-[85%] pt-3 pr-2"
              style="border-top-right-radius: 12px"
            >
              <Typography
                is="h3"
                :label="v.title"
                size="sm"
                color="white"
                transform="uppercase"
                class="img-block__title font-bold my-0"
                style="line-height: 1.2 !important"
              />
            </div>
          </div>

          <div class="text-block w-[50%] h-fit <xs:(w-full mt-5)">
            <Typography
              is="h6"
              :label="v.desc"
              size="xs"
              color="white"
              class="font-normal my-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();
const data = computed(() => [
  {
    title: t("teachers.list.1.title"),
    desc: t("teachers.list.1.desc"),
    img: "/images/teacher-1.jpeg",
  },
  {
    title: t("teachers.list.2.title"),
    desc: t("teachers.list.2.desc"),
    img: "/images/teacher-2.jpeg",
  },
  {
    title: t("teachers.list.3.title"),
    desc: t("teachers.list.3.desc"),
    img: "/images/teacher-3.jpeg",
  },
  {
    title: t("teachers.list.4.title"),
    desc: t("teachers.list.4.desc"),
    img: "/images/teacher-4.jpeg",
  },
]);
</script>
