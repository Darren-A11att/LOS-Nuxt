<template>
  <span class="status-badge" :class="statusClass">{{ statusText }}</span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  status: {
    type: String,
    required: true,
    validator: (value) => ['pending', 'approved', 'rejected', 'review', 'incomplete'].includes(value)
  }
});

const statusText = computed(() => {
  const statusMap = {
    'pending': 'Pending',
    'approved': 'Approved',
    'rejected': 'Rejected',
    'review': 'In Review',
    'incomplete': 'Incomplete'
  };
  return statusMap[props.status] || 'Unknown';
});

const statusClass = computed(() => {
  const classMap = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'approved': 'bg-green-100 text-green-800',
    'rejected': 'bg-red-100 text-red-800',
    'review': 'bg-blue-100 text-blue-800',
    'incomplete': 'bg-secondary-100 text-secondary-800'
  };
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  return `${baseClasses} ${classMap[props.status] || ''}`;
});
</script>

<style scoped>
/* Base styles are now included in the computed class */
/* Remove all status-* specific styles and the base .status-badge style */
</style>