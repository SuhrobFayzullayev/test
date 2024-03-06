<template>
  <div class="video-intro w-full px-6">
    <div class="video-intro__content custom__container mx-auto">
      <div
        class="video-intro__block <md:(max-w-screen-xs mx-auto) <xs:(max-w-[400px]) bg-cwhite rounded-[40px] overflow-hidden px-8 py-9 flex justify-between items-center flex-wrap"
      >
        <div class="video-block w-1/2 <md:(w-full pr-0) pr-12">
          <div class="w-full h-[300px] <2md:h-[240px] overflow-hidden">
            <Video url="''" />
          </div>
        </div>

        <div class="text-block w-1/2 <md:(w-full mt-5)">
          <div class="text-block__title">
            <Typography
              is="h3"
              :label="$t('video_intro.title')"
              size="lg"
              transform="uppercase"
              class="font-bold my-0"
            />
          </div>

          <div class="text-block__name">
            <Typography
              is="h3"
              :label="$t('video_intro.sub_title')"
              size="sm"
              class="font-bold my-0"
            />
          </div>

          <div class="text-block__description">
            <Typography
              is="h3"
              :label="$t('video_intro.desc')"
              size="xs"
              class="font-normal my-4"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
