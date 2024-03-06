<script setup lang="ts">
interface IProps {
  openModal: boolean;
  toggleModal: () => void;
}

const { openModal, toggleModal } = defineProps<IProps>();
</script>

<template>
  <div v-if="openModal">
    <div
      class="modal fixed top-0 left-0 bg-[rgba(0,0,0,.5)] w-full h-full z-50"
      @click="toggleModal"
    ></div>
    <div
      class="modal-content max-w-[600px] mx-auto w-full h-fit bg-transparent fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 px-4"
      style="transform: translate(-50%, -50%)"
    >
      <div
        class="bg-cwhite rounded-[8px] <sm:px-6 <sm:py-4 px-8 shadow-md my-10 py-6 max-h-[90vh] overflow-y-auto"
      >
        <div class="text-block__title flex justify-between">
          <Typography
            is="h1"
            :label="$t('logo')"
            size="md"
            transform="uppercase"
            class="font-bold my-0"
          />

          <Typography
            is="span"
            label="x"
            size="sm"
            class="font-bold cursor-pointer my-0 mb-4"
            @click="toggleModal"
          />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
