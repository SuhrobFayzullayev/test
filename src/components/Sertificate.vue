<template>
  <div class="sertificate w-full px-6">
    <div class="sertificate__content custom__container mx-auto">
      <div class="text-block">
        <div class="text-block__title text-center">
          <Typography
            is="h2"
            :label="t('sertificate.title')"
            size="lg"
            class="font-bold"
          />
        </div>
      </div>

      <div
        class="sertificate-list grid grid-cols-3 <lg:grid-cols-2 <sm:grid-cols-1 mt-7 gap-7"
      >
        <div
          :key="v"
          v-for="v in data"
          class="sertificate-list__item h-auto text-center bg-cwhite rounded-[40px] overflow-hidden p-6 <sm:(max-w-[400px] mx-auto)"
        >
          <div class="img-block">
            <img :src="v.img" alt="Sertificate Image" class="w-full h-auto" />
          </div>

          <div class="text-block">
            <Typography
              is="h2"
              :label="v.title"
              size="sm"
              class="font-bold my-2"
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
  { title: t("sertificate.list.label_one"), img: "/images/sertificate-1.png" },
  { title: t("sertificate.list.label_two"), img: "/images/sertificate-2.jpeg" },
  {
    title: t("sertificate.list.label_three"),
    img: "/images/sertificate-3.jpeg",
  },
]);
</script>
