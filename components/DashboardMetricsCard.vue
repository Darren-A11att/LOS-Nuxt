<template>
  <div class="card">
    <div class="flex items-center justify-between mb-4">
      <h5 class="text-lg font-semibold text-secondary-800">{{ title }}</h5>
      <div class="flex items-center text-sm font-medium" :class="trendColor">
        <span v-if="trend > 0" class="flex items-center">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
          </svg>
          +{{ trend }}%
        </span>
        <span v-if="trend < 0" class="flex items-center">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          {{ trend }}%
        </span>
        <span v-if="trend === 0" class="flex items-center text-secondary-500">
          0%
        </span>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <span class="text-3xl font-bold leading-none text-secondary-900">{{ value }}</span>
      </div>
      <div class="flex-1 w-0 ml-5">
        <div class="text-base font-normal text-secondary-500">{{ description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  trend: {
    type: Number,
    default: 0
  }
});

const trendColor = computed(() => {
  if (props.trend > 0) return 'text-success';
  if (props.trend < 0) return 'text-danger';
  return 'text-secondary-500';
});
</script>