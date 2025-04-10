<template>
  <span class="status-badge" :class="statusClass">{{ statusText }}</span>
</template>

<script setup>
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
    'pending': 'status-pending',
    'approved': 'status-approved',
    'rejected': 'status-rejected',
    'review': 'status-review',
    'incomplete': 'bg-secondary-100 text-secondary-800'
  };
  return classMap[props.status] || '';
});
</script>

<style scoped>
.status-badge {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
}
.status-pending {
  @apply bg-yellow-100 text-yellow-800; /* Using yellow for pending */
}
.status-approved {
  @apply bg-green-100 text-green-800; /* Using green for approved */
}
.status-rejected {
  @apply bg-red-100 text-red-800; /* Using red for rejected */
}
.status-review {
  @apply bg-blue-100 text-blue-800; /* Using blue for review */
}
/* 'incomplete' already uses bg-secondary-100 text-secondary-800 directly */
</style>