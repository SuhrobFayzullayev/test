<template>
  <div class="sertificate w-full px-6">
    <div class="sertificate__content custom__container mx-auto">
      <div class="text-block">
        <div class="text-block__title text-center">
          <Typography
            is="h2"
            :label="t('why_finexpert.title')"
            size="lg"
            class="font-bold mb-0"
          />
        </div>

        <div
          class="text-block__description max-w-screen-sm mx-auto text-center"
        >
          <Typography
            is="h6"
            :label="t('why_finexpert.desc')"
            size="xs"
            class="font-normal mt-4"
          />
        </div>
      </div>

      <div class="sertificate-list grid grid-cols-2 <sm:grid-cols-1 mt-7 gap-7">
        <div
          :key="v"
          v-for="v in data"
          class="sertificate-list__item h-auto text-center bg-cwhite rounded-[40px] overflow-hidden p-8 <2md:p-6 <sm:(max-w-[400px] mx-auto)"
        >
          <div class="img-block">
            <img :src="v.img" alt="Sertificate Image" class="w-full h-auto" />
          </div>

          <div class="text-block">
            <div class="text-block__name">
              <Typography
                is="h6"
                :label="v.name"
                size="sm"
                color="light"
                class="font-normal my-0"
              />
            </div>

            <div
              class="text-block__title-devider border-t opacity-50 border-cblue mt-2.5 mb-3"
            ></div>

            <div class="text-block__title">
              <Typography
                is="h2"
                :label="v.title"
                size="sm"
                class="font-bold my-2"
              />
            </div>

            <div class="text-block__desc">
              <Typography
                is="h2"
                :label="v.year"
                size="sm"
                color="extra-light"
                class="font-bold my-2"
              />
            </div>
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
    title: t("why_finexpert.sertificate.1.title"),
    name: t("why_finexpert.sertificate.1.name"),
    year: t("why_finexpert.sertificate.1.year"),
    img: "/images/sertificate-1.png",
  },
  {
    title: t("why_finexpert.sertificate.2.title"),
    name: t("why_finexpert.sertificate.2.name"),
    year: t("why_finexpert.sertificate.2.year"),
    img: "/images/sertificate-2.jpeg",
  },
  {
    title: t("why_finexpert.sertificate.3.title"),
    name: t("why_finexpert.sertificate.3.name"),
    year: t("why_finexpert.sertificate.3.year"),
    img: "/images/sertificate-3.jpeg",
  },
  {
    title: t("why_finexpert.sertificate.4.title"),
    name: t("why_finexpert.sertificate.4.name"),
    year: t("why_finexpert.sertificate.4.year"),
    img: "/images/sertificate-2.jpeg",
  },
]);
</script>
