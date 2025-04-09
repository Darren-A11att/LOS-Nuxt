<template>
  <div>
    <div class="mb-4 border-b border-secondary-200 pb-3">
      <h1 class="text-2xl font-semibold text-secondary-900">Application Review Queue</h1>
      <p class="text-secondary-500">Review and process applications requiring assessment</p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
      <div class="card bg-primary-50 border border-primary-200">
        <div class="flex flex-col items-center">
          <div class="text-3xl font-bold text-primary-800 mb-1">8</div>
          <div class="text-sm text-primary-600 font-medium">Total Applications</div>
        </div>
      </div>
      <div class="card bg-yellow-50 border border-yellow-200">
        <div class="flex flex-col items-center">
          <div class="text-3xl font-bold text-yellow-800 mb-1">4</div>
          <div class="text-sm text-yellow-600 font-medium">In Review</div>
        </div>
      </div>
      <div class="card bg-green-50 border border-green-200">
        <div class="flex flex-col items-center">
          <div class="text-3xl font-bold text-green-800 mb-1">3</div>
          <div class="text-sm text-green-600 font-medium">Approved Today</div>
        </div>
      </div>
      <div class="card bg-red-50 border border-red-200">
        <div class="flex flex-col items-center">
          <div class="text-3xl font-bold text-red-800 mb-1">1</div>
          <div class="text-sm text-red-600 font-medium">Rejected Today</div>
        </div>
      </div>
    </div>
    
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-secondary-900">Applications Queue</h2>
      <div class="flex space-x-2">
        <button class="px-3 py-1 text-sm text-secondary-500 hover:text-secondary-900 bg-white rounded-md border border-secondary-300">
          <span class="sr-only">Sort by</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
        </button>
        <button class="px-3 py-1 text-sm text-secondary-500 hover:text-secondary-900 bg-white rounded-md border border-secondary-300">
          <span class="sr-only">Filter</span>
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
      <div v-for="app in reviewApplications" :key="app.id" class="card border border-secondary-200 hover:border-primary-300 hover:shadow-lg transition-all">
        <div class="flex justify-between mb-3">
          <span class="text-sm font-medium text-secondary-500">{{ app.id }}</span>
          <StatusBadge :status="app.status" />
        </div>
        <h3 class="text-lg font-semibold text-secondary-900 mb-1">{{ app.applicant }}</h3>
        <p class="text-sm text-secondary-500 mb-3">{{ app.email }}</p>
        
        <div class="space-y-2 mb-4">
          <div class="flex justify-between text-sm">
            <span class="text-secondary-500">Amount:</span>
            <span class="font-medium text-secondary-900">${{ app.amount.toLocaleString() }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-secondary-500">Credit Score:</span>
            <span class="font-medium" :class="getCreditScoreClass(app.creditScore)">{{ app.creditScore }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-secondary-500">DTI Ratio:</span>
            <span class="font-medium text-secondary-900">{{ app.dti }}%</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-secondary-500">Risk Score:</span>
            <span class="font-medium" :class="getRiskTextClass(app.riskScore)">{{ app.riskScore }}/100</span>
          </div>
        </div>
        
        <div class="w-full bg-secondary-200 rounded-full h-1.5 mb-4">
          <div :class="getRiskScoreClass(app.riskScore)" :style="`width: ${app.riskScore}%`" class="h-1.5 rounded-full"></div>
        </div>
        
        <div class="flex justify-between text-sm mb-4">
          <span class="text-secondary-500">Submitted {{ app.date }}</span>
          <span class="text-secondary-500">{{ app.timeInQueue }} in queue</span>
        </div>
        
        <div class="flex space-x-2">
          <NuxtLink :to="`/applications/${app.id}`" class="w-full px-3 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 font-medium text-sm text-center">Review</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

// Mock data for applications in review queue
const reviewApplications = [
  {
    id: 'APP-2024-1089',
    applicant: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    amount: 25000,
    creditScore: 710,
    dti: 28,
    riskScore: 72,
    date: 'Apr 23, 2024',
    timeInQueue: '2h 15m',
    status: 'review'
  },
  {
    id: 'APP-2024-1088',
    applicant: 'Michael Johnson',
    email: 'michael.j@example.com',
    amount: 15000,
    creditScore: 680,
    dti: 32,
    riskScore: 65,
    date: 'Apr 22, 2024',
    timeInQueue: '1d 3h',
    status: 'review'
  },
  {
    id: 'APP-2024-1084',
    applicant: 'David Wilson',
    email: 'david.w@example.com',
    amount: 75000,
    creditScore: 790,
    dti: 18,
    riskScore: 85,
    date: 'Apr 18, 2024',
    timeInQueue: '5d 7h',
    status: 'pending'
  },
  {
    id: 'APP-2024-1083',
    applicant: 'Jessica Martinez',
    email: 'jessica.m@example.com',
    amount: 30000,
    creditScore: 640,
    dti: 36,
    riskScore: 58,
    date: 'Apr 17, 2024',
    timeInQueue: '6d 5h',
    status: 'review'
  },
  {
    id: 'APP-2024-1075',
    applicant: 'Thomas Garcia',
    email: 'thomas.g@example.com',
    amount: 22000,
    creditScore: 720,
    dti: 25,
    riskScore: 76,
    date: 'Apr 15, 2024',
    timeInQueue: '8d 1h',
    status: 'pending'
  },
  {
    id: 'APP-2024-1072',
    applicant: 'Sophia Lee',
    email: 'sophia.l@example.com',
    amount: 55000,
    creditScore: 810,
    dti: 15,
    riskScore: 92,
    date: 'Apr 12, 2024',
    timeInQueue: '11d 4h',
    status: 'pending'
  },
  {
    id: 'APP-2024-1071',
    applicant: 'Robert Adams',
    email: 'robert.a@example.com',
    amount: 18000,
    creditScore: 620,
    dti: 42,
    riskScore: 45,
    date: 'Apr 11, 2024',
    timeInQueue: '12d 6h',
    status: 'pending'
  },
  {
    id: 'APP-2024-1065',
    applicant: 'Emily Clark',
    email: 'emily.c@example.com',
    amount: 40000,
    creditScore: 750,
    dti: 22,
    riskScore: 81,
    date: 'Apr 9, 2024',
    timeInQueue: '14d 3h',
    status: 'review'
  }
];

function getCreditScoreClass(score) {
  if (score >= 750) return 'text-success';
  if (score >= 650) return 'text-primary-600';
  if (score >= 580) return 'text-warning';
  return 'text-danger';
}

function getRiskScoreClass(score) {
  if (score >= 80) return 'bg-success';
  if (score >= 60) return 'bg-primary-600';
  if (score >= 40) return 'bg-warning';
  return 'bg-danger';
}

function getRiskTextClass(score) {
  if (score >= 80) return 'text-success';
  if (score >= 60) return 'text-primary-600';
  if (score >= 40) return 'text-warning';
  return 'text-danger';
}
</script>