<template>
  <MainLayout>
    <div class="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">System Overview</h1>
        <p class="text-gray-500 mt-1">MFU Main Gate</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-start">
            <div class="p-2 bg-red-50 text-red-700 rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                </path>
              </svg>
            </div>
            <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12%</span>
          </div>
          <p class="text-xs text-gray-500 font-semibold mt-4 uppercase">Total Detections Today</p>
          <h3 class="text-4xl font-bold text-gray-900 mt-1">1,000</h3>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-start">
            <div class="p-2 bg-red-50 text-red-700 rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z">
                </path>
              </svg>
            </div>
            <span class="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">+4.2%</span>
          </div>
          <p class="text-xs text-gray-500 font-semibold mt-4 uppercase">No Helmet</p>
          <h3 class="text-4xl font-bold text-gray-900 mt-1">500</h3>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-start">
            <div class="p-2 bg-gray-100 text-gray-700 rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2">
                </path>
              </svg>
            </div>
          </div>
          <p class="text-xs text-gray-500 font-semibold mt-4 uppercase">License Plates Logged</p>
          <h3 class="text-4xl font-bold text-gray-900 mt-1">500</h3>
        </div>

        <div class="bg-red-800 p-6 rounded-xl shadow-md text-white">
          <div class="flex justify-between items-start">
            <div class="p-2 bg-red-700/50 rounded-lg">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
            </div>
          </div>
          <p class="text-xs text-red-200 font-semibold mt-4 uppercase">Processing Latency</p>
          <div class="flex items-end gap-2 mt-1">
            <h3 class="text-4xl font-bold">42</h3>
            <span class="text-xl font-medium mb-1">ms</span>
          </div>
          <p class="text-xs text-red-300 mt-2">Optimized performance</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-gray-900">Detection Trends</h3>
            <div class="flex border border-gray-200 rounded-md overflow-hidden">
              <button class="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-700">
                24 HOURS
              </button>
              <button class="px-3 py-1 text-xs font-medium bg-white text-gray-500 border-l border-gray-200">
                7 DAYS
              </button>
            </div>
          </div>
          <!-- <div class="h-64 bg-gray-50 rounded border border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            [ Bar Chart Component Goes Here ]
          </div> -->
          <div class="flex-1 flex items-end gap-2 mt-4 min-h-[300px] border-b-2 border-gray-100 pb-2 relative">
            <div class="w-full bg-red-200/50 rounded-t-sm" style="height: 30%"></div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-gray-900">Recent Alerts</h3>
            <span class="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Live</span>
          </div>

          <div class="space-y-4">
            <div
              class="flex gap-4 items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-transparent hover:border-gray-100 transition-all">
              <div class="w-20 h-14 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                <div class="w-full h-full bg-gray-300"></div>
              </div>
              <div>
                <h4 class="text-sm font-bold text-red-700">No Helmet Detected</h4>
                <p class="text-xs text-gray-500">Post guard gate - IN</p>
                <p class="text-[10px] font-mono text-gray-400 mt-1">PLATE: 1กก-8822</p>
              </div>
              <span class="text-xs text-gray-400 ml-auto">2m ago</span>
            </div>

            <div
              class="flex gap-4 items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-transparent hover:border-gray-100 transition-all">
              <div class="w-20 h-14 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                <div class="w-full h-full bg-gray-300"></div>
              </div>
              <div>
                ผ
                <h4 class="text-sm font-bold text-red-700">No Helmet Detected</h4>
                <p class="text-xs text-gray-500">Post guard gate - OUT</p>
                <p class="text-[10px] font-mono text-gray-400 mt-1">PLATE: 3กข</p>
              </div>
              <span class="text-xs text-gray-400 ml-auto">8m ago</span>
            </div>
          </div>

          <button
            class="w-full mt-4 py-2 text-sm font-bold text-red-800 border border-red-100 rounded-lg hover:bg-red-50 transition-colors">
            VIEW ALL INCIDENTS
          </button>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue'
// นำเข้าข้อมูล API หรือ State Management (Pinia/Vuex) ตรงนี้
</script>
