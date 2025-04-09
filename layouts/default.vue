<template>
  <div class="bg-secondary-50 min-h-screen">
    <NavigationBar />
    <SideBar />
    
    <div class="p-4 md:ml-64 pt-20">
      <slot />
    </div>
  </div>
</template>