<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between pb-4 bg-white p-4">
      <div>
        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-secondary-500 bg-white border border-secondary-300 focus:outline-none hover:bg-secondary-100 focus:ring-4 focus:ring-secondary-200 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
          <span class="sr-only">Action button</span>
          Actions
          <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
      </div>
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-secondary-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-secondary-900 border border-secondary-300 rounded-lg w-80 bg-secondary-50 focus:ring-primary-500 focus:border-primary-500" placeholder="Search for applications">
      </div>
    </div>
    <table class="w-full text-sm text-left text-secondary-500">
      <thead class="text-xs text-secondary-700 uppercase bg-secondary-50">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-primary-600 bg-secondary-100 border-secondary-300 rounded focus:ring-primary-500 focus:ring-2">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Applicant</th>
          <th scope="col" class="px-6 py-3">Loan Amount</th>
          <th scope="col" class="px-6 py-3">Date</th>
          <th scope="col" class="px-6 py-3">Status</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="application in applications" :key="application.id" class="bg-white border-b hover:bg-secondary-50">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-primary-600 bg-secondary-100 border-secondary-300 rounded focus:ring-primary-500 focus:ring-2">
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
          </td>
          <td class="px-6 py-4">{{ application.id }}</td>
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
</template>

<script setup>
defineProps({
  applications: {
    type: Array,
    required: true
  }
});
</script>