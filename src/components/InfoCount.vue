<template>
  <div class="info-count w-full px-6">
    <div class="into-count__content custom__container mx-auto">
      <div class="text-block">
        <div class="text-block__title text-center">
          <Typography
            is="h1"
            :label="$t('infoCount.title')"
            size="lg"
            class="font-bold"
          />
        </div>

        <div
          class="text-block__description text-center max-w-screen-xs mx-auto mt-5"
        >
          <Typography
            is="h1"
            :label="$t('infoCount.desc')"
            size="xs"
            class="font-normal"
          />
        </div>

        <div
          class="text-block__count-list grid grid-cols-4 <xl:grid-cols-2 <md:grid-cols-1 mt-7 gap-5"
        >
          <div
            :key="v"
            v-for="v in data"
            class="text-block__count-item h-[100px] text-center w-fit mx-auto"
          >
            <div class="title px-3">
              <Typography
                is="h1"
                :label="v.count"
                size="xl"
                class="font-bold"
              />
            </div>

            <div class="devider border boder-[#022D58]"></div>

            <div class="description px-3">
              <Typography
                is="h6"
                :label="v.title"
                size="xs"
                class="font-light my-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script setup>
const { t } = useI18n();
const data = computed(() => [
  { title: t("infoCount.count.1"), count: "8" },
  { title: t("infoCount.count.2"), count: "24" },
  { title: t("infoCount.count.3"), count: "10 000" },
  { title: t("infoCount.count.4"), count: t("infoCount.count.free") },
]);
</script>
