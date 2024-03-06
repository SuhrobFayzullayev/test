<script setup lang="ts">
interface IProps {
  label: string;
  isLink?: boolean;
  width?: "full" | "fit";
  data?: any;
}

const props = withDefaults(defineProps<IProps>(), {
  width: "fit",
  to: false,
  data: {},
});

const width = computed(() => {
  switch (props.width) {
    case "full":
      return "w-full";
    case "fit":
      return "w-fit";
    default:
      return "fit";
  }
});

const openModal = ref<boolean>(false);

function toggleClick(): void {
  if (props.isLink) useRouter().push(`/#discount-list`);
  else toggleModal();
}

function toggleModal(): void {
  openModal.value = !openModal.value;
}
</script>

<template>
  <button
    @click="toggleClick"
    type="button"
    class="custom__btn bg-cgreen py-3 px-7 text-cwhite text-center <2md:(py-2 px-5)"
    :class="[width]"
  >
    <typography
      color="white"
      size="extra-xs"
      transform="uppercase"
      :label="props.label"
      class="font-semibold tracking-wider whitespace-nowrap"
    />
  </button>

  <!-- modal -->
  <Modal :open-modal="openModal" :toggle-modal="toggleModal">
    <Form :data="props.data" />
  </Modal>
</template>
