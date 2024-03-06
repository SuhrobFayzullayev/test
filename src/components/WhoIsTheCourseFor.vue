<template>
  <div class="who-is-the-course-for w-full px-6">
    <div
      class="who-is-the-course-for__content custom__container mx-auto bg-cwhite px-8 py-6 rounded-[40px]"
    >
      <div class="text-block__title">
        <Typography
          is="h6"
          :label="t('course.title')"
          size="sm"
          color="light"
          class="font-bold my-0"
        />
      </div>

      <div
        class="text-block__title-devider border-t opacity-50 border-cblue mt-2.5 mb-9"
      ></div>

      <div
        class="who-is-the-course-for__list grid grid-cols-3 <2md:grid-cols-2 <sm:grid-cols-1 gap-2.5"
      >
        <div
          :key="v"
          v-for="v in data"
          class="who-is-the-course-for__list-item bg-clight rounded-[16px] px-4 py-6 flex items-center"
        >
          <div class="icon-block mr-3">
            <img src="/icons/any/check.svg" alt="" />
          </div>

          <div class="text-block w-fit h-fit">
            <Typography
              is="h6"
              :label="v"
              size="xs"
              class="font-normal my-0"
              color="dark"
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
  t("course.1"),
  t("course.2"),
  t("course.3"),
  t("course.4"),
  t("course.5"),
]);
</script>
