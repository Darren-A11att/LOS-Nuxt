<template>
  <div>
    <NuxtLayout>
      <ErrorBoundary>
        <NuxtPage />
      </ErrorBoundary>
    </NuxtLayout>
  </div>
</template>

<script setup>
import ErrorBoundary from '~/components/ErrorBoundary.vue';
</script>

<style>
html, body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
</style>
