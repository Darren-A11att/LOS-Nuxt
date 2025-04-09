<template>
  <div v-if="hasError">
    <h1>An error occurred</h1>
    <p>Please try again later.</p>
    <p v-if="errorMessage">Error message: {{ errorMessage }}</p>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured, onMounted } from 'vue';

const hasError = ref(false);
const errorMessage = ref('');

onMounted(() => {
  onErrorCaptured((err) => {
    hasError.value = true;
    errorMessage.value = err.message;
    console.error('Global error captured:', err);
    // Prevent the error from propagating further
    return false;
  });
});
</script>
