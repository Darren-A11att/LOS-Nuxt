<template>
  <div>
    <div class="mb-4 border-b border-secondary-200 pb-3">
      <h1 class="text-2xl font-semibold text-secondary-900">Dashboard</h1>
      <p class="text-secondary-500">Welcome back, John! Here's what's happening with loan applications today.</p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <DashboardMetricsCard 
        title="New Applications" 
        value="32" 
        description="Last 7 days" 
        :trend="12" 
      />
      <DashboardMetricsCard 
        title="Pending Review" 
        value="8" 
        description="Requiring assessment" 
        :trend="5" 
      />
      <DashboardMetricsCard 
        title="Approval Rate" 
        value="68%" 
        description="Last 30 days" 
        :trend="-2" 
      />
      <DashboardMetricsCard 
        title="Avg. Processing Time" 
        value="1.4 days" 
        description="From application to decision" 
        :trend="-15" 
      />
    </div>
    
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-6">
      <div class="card">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-secondary-900">Applications Overview</h3>
          <div class="flex space-x-2">
            <button class="text-xs font-medium text-secondary-500 hover:text-secondary-900 bg-secondary-100 py-1 px-3 rounded-lg">Week</button>
            <button class="text-xs font-medium text-white bg-primary-600 py-1 px-3 rounded-lg">Month</button>
            <button class="text-xs font-medium text-secondary-500 hover:text-secondary-900 bg-secondary-100 py-1 px-3 rounded-lg">Year</button>
          </div>
        </div>
        <div class="h-80">
          <!-- This is where a chart would be rendered -->
          <div class="h-full flex items-center justify-center bg-secondary-50 rounded-lg">
            <p class="text-secondary-400">Applications Chart</p>
          </div>
        </div>
      </div>
      
      <div class="card">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold text-secondary-900">Application Status Distribution</h3>
          <div>
            <button class="text-secondary-500 hover:text-secondary-900">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="h-80">
          <!-- This is where a chart would be rendered -->
          <div class="h-full flex items-center justify-center bg-secondary-50 rounded-lg">
            <p class="text-secondary-400">Status Distribution Chart</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="card mb-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-secondary-900">Recent Applications</h3>
        <NuxtLink to="/applications" class="text-primary-600 hover:text-primary-800 text-sm font-medium">View all</NuxtLink>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-secondary-500">
          <thead class="text-xs text-secondary-700 uppercase bg-secondary-50">
            <tr>
              <th scope="col" class="px-6 py-3">Applicant</th>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Loan Amount</th>
              <th scope="col" class="px-6 py-3">Date</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="application in recentApplications" :key="application.id" class="bg-white border-b hover:bg-secondary-50">
              <td class="px-6 py-4">
                <div class="flex items-center">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center bg-primary-100 text-primary-700 font-medium mr-3">
                    {{ application.applicant.charAt(0) }}{{ application.applicant.split(' ')[1]?.charAt(0) || '' }}
                  </div>
                  <div class="pl-0">
                    <div class="text-base font-semibold text-secondary-900">{{ application.applicant }}</div>
                    <div class="font-normal text-secondary-500">{{ application.email }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">{{ application.id }}</td>
              <td class="px-6 py-4">${{ application.amount.toLocaleString() }}</td>
              <td class="px-6 py-4">{{ application.date }}</td>
              <td class="px-6 py-4">
                <StatusBadge :status="application.status" />
              </td>
              <td class="px-6 py-4">
                <NuxtLink :to="`/applications/${application.id}`" class="font-medium text-primary-600 hover:underline">View</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

// Mock data for recent applications
const recentApplications = [
  {
    id: 'APP-2024-1089',
    applicant: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    amount: 25000,
    date: 'Apr 23, 2024',
    status: 'pending'
  },
  {
    id: 'APP-2024-1088',
    applicant: 'Michael Johnson',
    email: 'michael.j@example.com',
    amount: 15000,
    date: 'Apr 22, 2024',
    status: 'review'
  },
  {
    id: 'APP-2024-1087',
    applicant: 'Sarah Williams',
    email: 'sarah.w@example.com',
    amount: 50000,
    date: 'Apr 21, 2024',
    status: 'approved'
  },
  {
    id: 'APP-2024-1086',
    applicant: 'Robert Brown',
    email: 'robert.b@example.com',
    amount: 35000,
    date: 'Apr 20, 2024',
    status: 'rejected'
  },
  {
    id: 'APP-2024-1085',
    applicant: 'Emily Davis',
    email: 'emily.d@example.com',
    amount: 20000,
    date: 'Apr 19, 2024',
    status: 'approved'
  }
];
</script>