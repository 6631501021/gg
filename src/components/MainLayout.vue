<template>
  <div class="flex h-screen bg-gray-50 font-sans">
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col justify-between">
      <div>
        <div class="h-20 flex items-center px-6 border-b border-gray-100">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-red-800 rounded flex items-center justify-center text-white font-bold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <div>
              <h1 class="text-red-800 font-bold text-sm leading-tight">Helmet Detection</h1>
              <p class="text-xs text-gray-500">SECURITY INTELLIGENCE</p>
            </div>
          </div>
        </div>

        <nav class="p-4 space-y-1">
          <router-link to="/" active-class="text-red-800 bg-red-50 border-l-4 border-red-800 font-medium" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-transparent">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            Dashboard
          </router-link>

          <router-link to="/realtime" active-class="text-red-800 bg-red-50 border-l-4 border-red-800 font-medium" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-transparent">
             <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
            Real-time Detection
          </router-link>

          <router-link to="/records" active-class="text-red-800 bg-red-50 border-l-4 border-red-800 font-medium" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-transparent">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Records
          </router-link>

          <router-link to="/analytics" active-class="text-red-800 bg-red-50 border-l-4 border-red-800 font-medium" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-transparent">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            Analytics
          </router-link>
        </nav>
      </div>
      
      <div class="p-4 border-t border-gray-100">
        <button class="flex items-center gap-3 px-4 py-2 text-gray-500 hover:text-red-700 transition-colors w-full">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
          Logout
        </button>
      </div>
    </aside>

    <main class="flex-1 flex flex-col overflow-hidden">
      <header class="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
        <h2 class="text-xl font-bold text-red-800">MFU Vision</h2>
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 bg-gray-300 rounded-full overflow-hidden border-2 border-gray-200">
            <img src="https://i.pravatar.cc/150?img=11" alt="User Profile" class="w-full h-full object-cover"/>
          </div>
        </div>
      </header>
      
      <div class="flex-1 overflow-auto p-8">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script setup>
// Layout Component Logic here
</script>