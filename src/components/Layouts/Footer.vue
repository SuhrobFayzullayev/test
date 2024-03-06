<script lang="ts" setup>
import { ref } from "vue";
import dayjs from "dayjs";

const value = ref(dayjs().add(1, "day").startOf("day"));
const time = reactive({ DD: "", HH: "", MM: "", SS: "" });

function onChange(arg: number) {
  const result: { $D: number; $H: number; $m: number; $s: number } | any =
    dayjs(arg);

  time.DD = result.$D - 1 > 9 ? `${result.$D - 1}` : `0${result.$D - 1}`;
  time.HH = result.$H - 6 > 9 ? `${result.$H - 6}` : `0${result.$H - 6}`;
  time.MM = result.$m > 9 ? `${result.$m}` : `0${result.$m}`;
  time.SS = result.$s > 9 ? `${result.$s}` : `0${result.$s}`;
}
</script>

<template>
  <ClientOnly>
    <div class="countdown w-full px-6 bg-cwhite py-6 <md:py-2 fixed bottom-0">
      <div class="countdown__content custom__container mx-auto">
        <div class="text-block">
          <div class="text-block__title text-center">
            <Typography
              is="h1"
              :label="$t('footer.title')"
              size="md"
              transform="uppercase"
              class="font-bold my-3"
            />
          </div>

          <div
            class="block__countdown-block hidden <lg:(block mb-4 w-full flex justify-center items-center)"
          >
            <div
              class="text-block__countdown grid grid-cols-4 gap-7 text-center"
            >
              <el-countdown
                @change="onChange"
                format="DD HH mm ss"
                :value="value"
                class="text-block__countdown_hidden hidden"
              />

              <div class="day">
                <Typography
                  is="p"
                  :label="time.DD"
                  size="lg"
                  class="font-black my-0"
                  style="line-height: 1 !important"
                />

                <Typography
                  is="span"
                  :label="$t('footer.day')"
                  size="extra-xs"
                  class="-mt-5"
                />
              </div>

              <div class="hour">
                <Typography
                  is="p"
                  :label="time.HH"
                  size="lg"
                  class="font-black my-0"
                  style="line-height: 1 !important"
                />

                <Typography
                  is="span"
                  :label="$t('footer.hour')"
                  size="extra-xs"
                  class="-mt-5"
                />
              </div>

              <div class="minute">
                <Typography
                  is="p"
                  :label="time.MM"
                  size="lg"
                  class="font-black my-0"
                  style="line-height: 1 !important"
                />

                <Typography
                  is="span"
                  :label="$t('footer.minute')"
                  size="extra-xs"
                  class="-mt-5"
                />
              </div>

              <div class="second">
                <Typography
                  is="p"
                  :label="time.SS"
                  size="lg"
                  class="font-black my-0"
                  style="line-height: 1 !important"
                />

                <Typography
                  is="span"
                  :label="$t('footer.second')"
                  size="extra-xs"
                  class="-mt-5"
                />
              </div>
            </div>
          </div>

          <div class="text-block_list flex items-center justify-center">
            <div class="text-block__title <lg:(pr-10) <sm:hidden">
              <Typography
                is="h5"
                :label="$t('footer.desc')"
                size="xs"
                transform="uppercase"
                class="font-[500] my-0 text-center"
              />
            </div>

            <div
              class="block__countdown-block mx-10 <lg:(hidden w-full flex justify-center items-center)"
            >
              <div
                class="text-block__countdown grid grid-cols-4 gap-7 text-center"
              >
                <el-countdown
                  @change="onChange"
                  format="DD HH mm ss"
                  :value="value"
                  class="text-block__countdown_hidden hidden"
                />

                <div class="day">
                  <Typography
                    is="p"
                    :label="time.DD"
                    size="lg"
                    class="font-black my-0"
                    style="line-height: 1 !important"
                  />

                  <Typography
                    is="span"
                    :label="$t('footer.day')"
                    size="extra-xs"
                    class="-mt-5"
                  />
                </div>

                <div class="hour">
                  <Typography
                    is="p"
                    :label="time.HH"
                    size="lg"
                    class="font-black my-0"
                    style="line-height: 1 !important"
                  />

                  <Typography
                    is="span"
                    :label="$t('footer.hour')"
                    size="extra-xs"
                    class="-mt-5"
                  />
                </div>

                <div class="minute">
                  <Typography
                    is="p"
                    :label="time.MM"
                    size="lg"
                    class="font-black my-0"
                    style="line-height: 1 !important"
                  />

                  <Typography
                    is="span"
                    :label="$t('footer.minute')"
                    size="extra-xs"
                    class="-mt-5"
                  />
                </div>

                <div class="second">
                  <Typography
                    is="p"
                    :label="time.SS"
                    size="lg"
                    class="font-black my-0"
                    style="line-height: 1 !important"
                  />

                  <Typography
                    is="span"
                    :label="$t('footer.second')"
                    size="extra-xs"
                    class="-mt-5"
                  />
                </div>
              </div>
            </div>

            <Button
              :is-link="true"
              :label="$t('button.2')"
              width="fit"
              class="mb-3 mt-4 <lg:(pl-10)"
            />
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
