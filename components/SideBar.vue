<template>
  <aside class="fixed top-[61px] left-0 z-40 w-64 h-screen pt-6 transition-transform bg-white border-r border-secondary-200 md:translate-x-0" :class="{ '-translate-x-full': !isSidebarOpen }">
    <div class="h-full px-3 pb-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
        <li>
          <NuxtLink to="/" class="flex items-center p-2 text-secondary-900 rounded-lg hover:bg-secondary-100 group" :class="{ 'bg-secondary-100': route.path === '/' }">
            <svg class="w-5 h-5 text-secondary-500 transition duration-75 group-hover:text-secondary-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
            </svg>
            <span class="ml-3">Dashboard</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/applications" class="flex items-center p-2 text-secondary-900 rounded-lg hover:bg-secondary-100 group" :class="{ 'bg-secondary-100': route.path.includes('/applications') && !route.path.includes('/applications/review') }">
            <svg class="w-5 h-5 text-secondary-500 transition duration-75 group-hover:text-secondary-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Applications</span>
            <span class="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100">8</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/applications/review" class="flex items-center p-2 text-secondary-900 rounded-lg hover:bg-secondary-100 group" :class="{ 'bg-secondary-100': route.path.includes('/applications/review') }">
            <svg class="w-5 h-5 text-secondary-500 transition duration-75 group-hover:text-secondary-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
              <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z"/>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Review Queue</span>
            <span class="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100">4</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/reports" class="flex items-center p-2 text-secondary-900 rounded-lg hover:bg-secondary-100 group" :class="{ 'bg-secondary-100': route.path.includes('/reports') }">
            <svg class="w-5 h-5 text-secondary-500 transition duration-75 group-hover:text-secondary-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 11.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Zm.75-4.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"/>
              <path d="M2 19.5A2.5 2.5 0 0 1 4.5 17H13a4 4 0 0 0-4-4H2a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.25V19.5a.5.5 0 0 1-.5.5h-14a.5.5 0 0 1-.5-.5v-4.25a.25.25 0 0 0-.5 0v4.25Z"/>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Reports</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/settings" class="flex items-center p-2 text-secondary-900 rounded-lg hover:bg-secondary-100 group" :class="{ 'bg-secondary-100': route.path.includes('/settings') }">
            <svg class="w-5 h-5 text-secondary-500 transition duration-75 group-hover:text-secondary-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 7.5h-1.775l.31-.31a1 1 0 0 0-1.414-1.414l-2.121 2.121a1 1 0 0 0 0 1.414l2.121 2.121a1 1 0 0 0 1.414-1.414l-.3-.3H18a1 1 0 1 0 0-2Z"/>
              <path d="M2 0h8a2 2 0 0 1 2 2v2H8a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Zm8 16H2a2 2 0 0 1-2-2v-6h2v6h8ZM4 8V6h2v2H4Zm16 0h-2V6.414l-.293.293a3 3 0 1 1-4.242-4.242L14.586 2H12V0h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2Z"/>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
const route = useRoute();
const isSidebarOpen = ref(true);
</script>