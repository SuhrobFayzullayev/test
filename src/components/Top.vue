<template>
  <div class="top w-full px-6">
    <div
      class="top__content custom__container mx-auto my-52 <xl:(my-20) relative"
    >
      <div class="text-block w-1/2 <2md:w-full">
        <div class="text-block__sub-title">
          <Typography
            :label="$t('top.sub_title')"
            size="xs"
            color="extra-light"
            class="font-normal"
          />
        </div>

        <div class="text-block__title mt-1.5">
          <Typography
            :label="$t('top.title')"
            size="lg"
            class="font-bold"
            style="line-height: 1.3 !important"
          />
        </div>

        <div class="text-block__description mt-2.5">
          <Typography :label="$t('top.desc')" size="sm" class="font-light" />
        </div>
      </div>

      <div
        class="bg-banner <2md:hidden bg-cwhite rounded-[40px] overflow-hidden sm:(p-10 pt-6) mt-26 <md:mt-[230px] <sm:mt-[200px] <xs:mt-[170px]"
      >
        <div
          style="border-top-right-radius: 40px"
          class="bg-banner__text-block w-1/2 <sm:(w-2/3 px-10 py-6) mt-7"
        >
          <div class="text-block__title">
            <Typography
              :label="$t('top.spiker.sub_title')"
              size="md"
              class="font-normal"
              transform="uppercase"
              color="light"
            />
          </div>

          <div class="text-block__spiker-name h">
            <Typography
              :label="$t('top.spiker.title')"
              size="lg"
              class="font-bold"
              style="line-height: 1.3 !important"
              transform="uppercase"
            />
          </div>
        </div>
      </div>

      <div
        class="img-block absolute w-full h-full top-0 left-0 flex justify-end items-end <2md:hidden"
      >
        <img
          src="/images/spiker.png"
          class="h-[650px] <lg:(h-[580px]) <2md:(h-[520px]) <md:(h-auto w-1/2) mr-10 <sm:w-2/3"
          alt="Spiker Image"
        />
      </div>

      <div class="teachers-list__item <2md:block hidden mt-10">
        <div class="img-block relative w-full">
          <img
            src="/images/spiker.png"
            alt="Teacher Image"
            class="img-block__image w-2/3 <xs:w-full h-auto rounded-[16px] overflow-hidden"
          />

          <div
            class="bg-cwhite rounded-[40px] overflow-hidden p-6 flex justify-between items-center flex-wrap"
          >
            <div class="text-block__title">
              <Typography
                label="Asosiy spiker"
                size="md"
                class="font-normal"
                transform="uppercase"
                color="light"
              />
            </div>

            <div class="text-block__spiker-name">
              <Typography
                label="Islombek Akhmedov"
                size="lg"
                class="font-bold"
                style="line-height: 1.3 !important"
                transform="uppercase"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
