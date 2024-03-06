<script setup lang="ts">
const { locale, setLocale } = useI18n();

const inActiveLang = computed(() => (locale.value === "uz" ? "ru" : "uz"));
</script>
<template>
  <div class="header w-full px-6">
    <div
      class="navigation custom__container mx-auto flex justify-between items-center py-5"
    >
      <nuxt-link to="/" class="logo w-fit">
        <img
          class="logo__img w-[240px] <2md:w-[200px] <sm:(w-[180px])"
          src="/icons/any/logo.svg"
          alt="Logo Image"
        />
      </nuxt-link>

      <div class="right-side flex justify-between items-center w-fit">
        <div class="language-switcher flex justify-between items-center w-fit">
          <img
            src="/icons/any/globus.svg"
            alt="Switch Logo"
            class="language-switcher__logo"
          />

          <button
            @click="setLocale(inActiveLang)"
            type="button"
            class="language-switcher__button"
          >
            <span class="language-switcher__button-setible-lang">
              <Typography
                :label="inActiveLang"
                color="dark"
                size="xs"
                transform="uppercase"
                class="ml-2 font-semibold"
              />
            </span>
          </button>
        </div>

        <div class="apply ml-7 <md:hidden">
          <Button :label="$t('button.1')" :is-link="true" />
        </div>
      </div>
    </div>
  </div>
</template>
