<template>
  <div class="opportinities w-full px-6">
    <div class="opportinities__content custom__container mx-auto">
      <div
        class="opportinities-list grid grid-cols-3 <2md:grid-cols-2 <sm:grid-cols-1 gap-6"
      >
        <div
          :key="v"
          v-for="v in data"
          class="opportinities-list__item bg-cblue rounded-[16px] px-6 py-8"
        >
          <div class="text-block w-full h-fit">
            <Typography
              is="h5"
              :label="v"
              size="sm"
              class="font-bold my-0 text-center"
              color="white"
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
  t("opportunities.1"),
  t("opportunities.2"),
  t("opportunities.3"),
]);
</script>
