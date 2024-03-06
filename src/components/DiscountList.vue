<script setup>
const { t } = useI18n();
const data = computed(() => [
  {
    label: t("price_card.1.title"),
    oldPrise: t("price_card.1.old_price"),
    price: t("price_card.1.price"),
  },
  {
    label: t("price_card.2.title"),
    oldPrise: t("price_card.2.old_price"),
    price: t("price_card.2.price"),
  },
  {
    label: t("price_card.3.title"),
    oldPrise: t("price_card.3.old_price"),
    price: t("price_card.3.price"),
  },
]);
</script>

<template>
  <div class="discount w-full px-6 py-26 bg-cblue">
    <div class="discount__content custom__container mx-auto">
      <div class="text-block">
        <div class="text-block__title text-center">
          <Typography
            is="h2"
            :label="$t('price_card.title')"
            size="lg"
            transform="uppercase"
            class="font-bold my-0"
            color="white"
          />
        </div>
      </div>

      <div
        id="discount-list"
        class="discount-list grid grid-cols-3 <2md:grid-cols-2 <xs:(grid-cols-1 max-w-[400px] mx-auto) mt-7 gap-6"
      >
        <div
          :key="v"
          v-for="v in data"
          class="discount-list__item h-auto bg-cwhite rounded-[40px] overflow-hidden p-8"
        >
          <div class="text-block">
            <div class="text-block__title">
              <Typography
                is="h4"
                :label="v.label"
                size="sm"
                class="font-semibold my-0"
              />
            </div>

            <div class="text-block__desc">
              <Typography
                is="h2"
                :label="v.oldPrise"
                size="md"
                color="extra-light"
                decoration="line-through"
                class="font-[500] mt-2 mb-0 opacity-50"
              />
            </div>

            <div class="text-block__desc_2">
              <Typography
                is="p"
                :label="v.price"
                size="md"
                class="font-extabold mt-0 mb-4"
              />
            </div>
          </div>

          <Button
            :data="v"
            :label="t('button.1')"
            width="full"
            class="mb-3 mt-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>
