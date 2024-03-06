<template>
  <div class="guarantee-intro w-full px-6">
    <div class="guarantee-intro__content custom__container mx-auto">
      <div
        class="guarantee-intro__block flex justify-between items-center flex-wrap <xs:(max-w-[400px] mx-auto)"
      >
        <div class="guarantee-block w-[40%] <xs:(w-full pr-0) pr-12 relative">
          <img
            src="/images/guarantee.png"
            alt="guarantee-intro Image"
            class="guarantee-block__img w-full h-auto"
          />
        </div>

        <div class="text-block w-[60%] <xs:(w-full mt-5)">
          <div class="text-block__title">
            <Typography
              is="h2"
              :label="$t('guarantee.title')"
              size="lg"
              transform="uppercase"
              class="font-bold my-0"
            />
          </div>

          <div class="text-block__name">
            <Typography
              is="h5"
              :label="$t('guarantee.desc')"
              size="sm"
              class="font-normal my-3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
