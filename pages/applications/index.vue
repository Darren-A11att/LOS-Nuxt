<template>
  <div>
    <div class="mb-4 border-b border-secondary-200 pb-3">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-semibold text-secondary-900">Loan Applications</h1>
          <p class="text-secondary-500">Manage and review all loan applications</p>
        </div>
        <div>
          <button type="button" class="btn-primary flex items-center">
            <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
            New Application
          </button>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-secondary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="text" class="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5" placeholder="Search applications">
        </div>
        <div>
          <select class="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
            <option selected>All Status</option>
            <option value="pending">Pending</option>
            <option value="review">In Review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
        <div>
          <select class="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
            <option selected>All Amount</option>
            <option value="0-10000">$0 - $10,000</option>
            <option value="10001-25000">$10,001 - $25,000</option>
            <option value="25001-50000">$25,001 - $50,000</option>
            <option value="50001-100000">$50,001 - $100,000</option>
            <option value="100001+">$100,001+</option>
          </select>
        </div>
        <div>
          <select class="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
            <option selected>Date Range</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="last7days">Last 7 Days</option>
            <option value="last30days">Last 30 Days</option>
            <option value="thismonth">This Month</option>
            <option value="lastmonth">Last Month</option>
          </select>
        </div>
        <div>
          <button class="w-full p-2.5 text-sm font-medium text-secondary-900 bg-white rounded-lg border border-secondary-300 hover:bg-secondary-100 focus:ring-4 focus:outline-none focus:ring-primary-300">
            Filter
          </button>
        </div>
      </div>
    </div>
    
    <div class="mb-6">
      <ApplicationsTable :applications="applications" />
    </div>
    
    <div class="flex items-center justify-between pt-4">
      <div class="flex space-x-2">
        <button class="px-3 py-1 text-sm font-medium text-white bg-primary-600 rounded-md">1</button>
        <button class="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 bg-white rounded-md border border-secondary-300">2</button>
        <button class="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 bg-white rounded-md border border-secondary-300">3</button>
        <button class="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 bg-white rounded-md border border-secondary-300">...</button>
        <button class="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 bg-white rounded-md border border-secondary-300">8</button>
        <button class="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 bg-white rounded-md border border-secondary-300">9</button>
        <button class="px-3 py-1 text-sm font-medium text-secondary-500 hover:text-secondary-900 bg-white rounded-md border border-secondary-300">10</button>
      </div>
      <div class="text-sm text-secondary-500">
        Showing <span class="font-medium">1-10</span> of <span class="font-medium">100</span> applications
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

// Mock data for applications
const applications = [
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
  },
  {
    id: 'APP-2024-1084',
    applicant: 'David Wilson',
    email: 'david.w@example.com',
    amount: 75000,
    date: 'Apr 18, 2024',
    status: 'pending'
  },
  {
    id: 'APP-2024-1083',
    applicant: 'Jessica Martinez',
    email: 'jessica.m@example.com',
    amount: 30000,
    date: 'Apr 17, 2024',
    status: 'review'
  },
  {
    id: 'APP-2024-1082',
    applicant: 'Thomas Anderson',
    email: 'thomas.a@example.com',
    amount: 45000,
    date: 'Apr 16, 2024',
    status: 'approved'
  },
  {
    id: 'APP-2024-1081',
    applicant: 'Lisa Taylor',
    email: 'lisa.t@example.com',
    amount: 60000,
    date: 'Apr 15, 2024',
    status: 'rejected'
  },
  {
    id: 'APP-2024-1080',
    applicant: 'James Wilson',
    email: 'james.w@example.com',
    amount: 40000,
    date: 'Apr 14, 2024',
    status: 'incomplete'
  }
];
</script>