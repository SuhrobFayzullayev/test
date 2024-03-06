<script setup lang="ts">
interface IProps {
  label: string;
  size: "extra-xs" | "xs" | "sm" | "md" | "lg" | "xl";
  color?: "light" | "dark" | "extra-light" | "white";
  decoration?: "line-through" | "no-underline";
  transform?: "uppercase" | "normal-case";
  is?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const props = withDefaults(defineProps<IProps>(), {
  transform: "normal-case",
  decoration: "no-underline",
  color: "dark",
  is: "p",
});

const fontSize = computed(() => {
  switch (props.size) {
    case "extra-xs":
      return "text-[14px] <2md:text-[12px] <sm:text-[10px]";
    case "xs":
      return "text-[18px] <md:text-[16px]";
    case "sm":
      return "text-[22px] <md:text-[18px]";
    case "md":
      return "text-[28px] <md:text-[24px] <sm:text-[20px]";
    case "lg":
      return "text-[44px] <xl:text-[42px] <lg:text-[38px] <2md:text-[34px] <md:text-[30px] <sm:text-[26px] <xs:text-[22px]";
    case "xl":
      return "text-[48px] <md:text-[46px] <sm:text-[44px]";
    default:
      throw new Error("Font-size is required");
  }
});

const color = computed(() => {
  switch (props.color) {
    case "dark":
      return "text-cdark-blue";
    case "light":
      return "text-cblue";
    case "white":
      return "text-cwhite";
    case "extra-light":
      return "text-cgray";
    default:
      return "text-cdark";
  }
});
</script>

<template>
  <component
    :is="props.is"
    class="custom__title"
    :class="[fontSize, color, transform, decoration]"
  >
    {{ props.label }}
  </component>
</template>
