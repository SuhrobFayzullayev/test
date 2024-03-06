<script setup lang="ts">
defineProps<{
  error: {
    url: string;
    statusCode: 404 | 500;
    statusMessage: string;
    message: string;
    stack: string;
  };
}>();

const errorDetails: Record<
  404 | 500,
  {
    type: string;
    title: string;
    description: string;
    photo: string;
  }
> = {
  404: {
    type: "404",
    title: "Sorry! Page not found",
    description:
      "The page you are looking for does not exist. It may have been moved or deleted.",
    photo: "/icons/errors/404.svg",
  },
  500: {
    type: "500",
    title: "Internal Server Error",
    description:
      "The server encountered an unexpected situation that prevented it from fulfilling the request",
    photo: "/icons/errors/500.svg",
  },
};

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div
    class="flex min-h-screen w-full items-center justify-center bg-white md:px-24 md:py-20 xl:px-40 xl:py-20"
  >
    <Head>
      <Title>{{ error.statusCode }}</Title>
      <Meta name="description" :content="error.statusMessage" />
    </Head>
    <div
      class="flex h-full w-full flex-row flex-wrap items-center justify-center gap-8 rounded-lg px-10 py-4"
    >
      <img
        :src="errorDetails[error.statusCode].photo"
        alt="Error"
        class="w-full max-w-md"
      />
      <div class="flex w-full max-w-md flex-col gap-4 text-center text-lg">
        <span class="block text-9xl font-bold">
          {{ errorDetails[error.statusCode].type }}
        </span>
        <span class="block">{{ errorDetails[error.statusCode].title }}</span>
        <span class="block">
          {{ errorDetails[error.statusCode].description }}
        </span>
        <div class="mt-2 flex justify-center">
          <ElButton type="danger" round size="large" @click="handleError">
            BackHome
          </ElButton>
        </div>
      </div>
    </div>
  </div>
</template>
