<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

const formRef = ref<FormInstance>();
const form = reactive<{
  phone: string;
  fullname: string;
}>({
  fullname: "",
  phone: "",
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const { data } = defineProps<{ data: any }>();
const { t } = useI18n();
</script>

<template>
  <el-form
    ref="formRef"
    :model="form"
    label-width="120px"
    label-position="top"
    size="large"
    class="demo-dynamic"
  >
    <div class="flex justify-between items-end">
      <div class="text-block__name">
        <Typography
          is="p"
          :label="data.label"
          size="sm"
          class="font-medium mt-3 mb-0"
        />
      </div>

      <div>
        <div class="text-block__name text-right">
          <Typography
            is="span"
            :label="data.oldPrise"
            size="xs"
            color="extra-light"
            decoration="line-through"
            class="font-[500] my-0 mb-0 opacity-50"
          />
        </div>

        <div class="text-block__name text-right">
          <Typography
            is="span"
            :label="data.price"
            size="xs"
            class="font-[500] -mt-3"
          />
        </div>
      </div>
    </div>

    <br />

    <el-form-item
      prop="fullname"
      :label="t('form.name')"
      :rules="[
        {
          required: true,
          message: t('form.error'),
          trigger: ['blur', 'change'],
        },
      ]"
    >
      <el-input v-model="form.fullname" />
    </el-form-item>

    <el-form-item
      prop="phone"
      :label="t('form.phone')"
      :rules="[
        {
          required: true,
          message: t('form.error'),
          trigger: ['blur', 'change'],
        },
        {
          required: true,
          type: 'pattern',
          pattern: new RegExp(/^.{19}$/),
          message: t('form.error_phone'),
          trigger: ['blur', 'change'],
        },
      ]"
      v-mask="'+998 (##) ### ##-##'"
    >
      <el-input v-model="form.phone" />
    </el-form-item>

    <el-row class="my-4 mt-8 w-full">
      <el-button
        @click="submitForm(formRef)"
        size="large"
        class="w-full"
        type="primary"
        >{{ t("form.buy") }}</el-button
      >
    </el-row>
  </el-form>
</template>

<style lang="scss">
:root {
  --el-component-size-large: 45px !important;
  --font-size: 24px !important;
}

.el-form-item__label {
  font-size: 16px !important;
  margin-bottom: 8px !important;
  color: #022d58 !important;

  &::before {
    display: none !important;
  }
}

.el-button--large {
  height: 45px !important;
}
</style>
