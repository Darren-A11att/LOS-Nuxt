<template>
  <nav class="bg-white border-b border-secondary-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50">
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-center mr-4">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-primary-700">LoanAssess</span>
        </NuxtLink>
        <div class="hidden md:flex items-center">
          <NuxtLink to="/" class="py-2 px-3 text-secondary-700 hover:text-primary-600 rounded-lg" :class="{ 'text-primary-600 font-medium': route.path === '/' }">
            Dashboard
          </NuxtLink>
          <NuxtLink to="/applications" class="py-2 px-3 text-secondary-700 hover:text-primary-600 rounded-lg" :class="{ 'text-primary-600 font-medium': route.path.includes('/applications') }">
            Applications
          </NuxtLink>
          <NuxtLink to="/reports" class="py-2 px-3 text-secondary-700 hover:text-primary-600 rounded-lg" :class="{ 'text-primary-600 font-medium': route.path.includes('/reports') }">
            Reports
          </NuxtLink>
        </div>
      </div>
      <div class="flex items-center">
        <div class="relative mr-3">
          <div class="hidden md:block">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-secondary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <input type="text" class="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2" placeholder="Search..." />
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <button type="button" class="flex text-sm bg-secondary-800 rounded-full focus:ring-4 focus:ring-secondary-300 ml-3" id="user-menu-button">
            <span class="sr-only">Open user menu</span>
            <div class="w-8 h-8 rounded-full flex items-center justify-center bg-primary-700 text-white">
              <span>JD</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute();
</script>