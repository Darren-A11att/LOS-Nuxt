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