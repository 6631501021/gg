<template>
  <MainLayout>
    <div class="max-w-6xl mx-auto space-y-6">
      
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Detection Intelligence</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-start mb-4">
            <svg class="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">+12%</span>
          </div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Detections</p>
          <h3 class="text-3xl font-bold text-gray-900 mt-1">14,282</h3>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-start mb-4">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            <span class="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">+4%</span>
          </div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Critical Violations</p>
          <h3 class="text-3xl font-bold text-gray-900 mt-1">186</h3>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-start mb-4">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
            <span class="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">STABLE</span>
          </div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Active Gates</p>
          <h3 class="text-3xl font-bold text-gray-900 mt-1">02</h3>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-start mb-4">
            <svg class="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span class="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">-1.2s</span>
          </div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Avg Response Time</p>
          <h3 class="text-3xl font-bold text-gray-900 mt-1">4.8s</h3>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div class="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-lg font-bold text-gray-900">Peak Violation Times</h3>
            <div class="flex bg-gray-100 p-1 rounded-lg">
              <button 
                @click="activeTab = 'daily'"
                :class="[
                  'px-3 py-1 text-xs font-bold rounded transition-colors', 
                  activeTab === 'daily' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                ]"
              >
                Daily
              </button>
              <button 
                @click="activeTab = 'hourly'"
                :class="[
                  'px-3 py-1 text-xs font-bold rounded transition-colors', 
                  activeTab === 'hourly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                ]"
              >
                Hourly
              </button>
            </div>
          </div>
          
          <div class="flex-1 flex items-end gap-2 mt-4 min-h-[200px] border-b-2 border-gray-100 pb-2 relative">
             <div 
               v-for="(bar, index) in currentGraph.bars" 
               :key="index"
               :class="['w-full rounded-t-sm transition-all duration-500 ease-out', bar.color, bar.isPeak ? 'relative' : '']" 
               :style="{ height: bar.height + '%' }"
             >
               <span v-if="bar.isPeak" class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-red-900">Peak</span>
             </div>
          </div>
          
          <div class="flex justify-between text-[10px] font-bold text-gray-400 mt-2 px-1">
            <span v-for="(label, index) in currentGraph.labels" :key="index">{{ label }}</span>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 class="text-lg font-bold text-gray-900 mb-6">Violation Types</h3>
          <div class="flex-1 flex items-center justify-center relative">
            <div class="w-48 h-48 rounded-full border-[16px] border-red-900 relative flex items-center justify-center">
              <div class="absolute inset-0 border-[16px] border-yellow-400 rounded-full transition-all duration-500" style="clip-path: polygon(50% 50%, 100% 0, 100% 30%, 50% 50%); transform: rotate(-45deg);"></div>
              <div class="text-center">
                <h2 class="text-4xl font-black text-red-900 leading-none">72%</h2>
                <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Unauthorized</p>
              </div>
            </div>
          </div>
          <div class="mt-6 flex justify-between items-center text-sm border-t border-gray-100 pt-4">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-900"></div>
              <span class="font-bold text-gray-700">No Helmet</span>
            </div>
            <span class="text-gray-500 font-mono">72%</span>
          </div>
        </div>

      </div>

      <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div class="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 class="text-lg font-bold text-gray-900">Cross-Gate Comparison</h3>
          <span class="text-[10px] text-gray-400 font-medium">Sync Time: Just Now</span>
        </div>
        <table class="w-full text-left border-collapse text-sm">
          <thead class="bg-slate-900 text-white uppercase text-[10px] font-bold tracking-wider">
            <tr>
              <th class="px-6 py-4">Campus Gate Name</th>
              <th class="px-6 py-4">Detections</th>
              <th class="px-6 py-4">Violations</th>
              <th class="px-6 py-4">Compliance Rate</th>
              <th class="px-6 py-4">Security Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 font-bold text-gray-900">Main Gate (IN)</td>
              <td class="px-6 py-4 font-mono text-gray-600">5,821</td>
              <td class="px-6 py-4 font-mono text-gray-600">42</td>
              <td class="px-6 py-4">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="w-[90%] h-full bg-green-500"></div></div>
              </td>
              <td class="px-6 py-4"><span class="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded uppercase">Optimal</span></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors bg-orange-50/30">
              <td class="px-6 py-4 font-bold text-gray-900">Main Gate (OUT)</td>
              <td class="px-6 py-4 font-mono text-gray-600">2,110</td>
              <td class="px-6 py-4 font-mono text-gray-600">88</td>
              <td class="px-6 py-4">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="w-[60%] h-full bg-yellow-400"></div></div>
              </td>
              <td class="px-6 py-4"><span class="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded uppercase">Moderate</span></td>
            </tr>
            
            
          </tbody>
        </table>
      </div>

    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import MainLayout from '../components/MainLayout.vue'

// เก็บสถานะว่ากดปุ่มไหนอยู่ (ค่า Default คือรายวัน)
const activeTab = ref('daily')

// 🌟 ข้อมูลกราฟจำลอง 2 ชุด
const graphData = {
  daily: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    bars: [
      { height: 45, color: 'bg-red-300' },
      { height: 60, color: 'bg-red-400' },
      { height: 50, color: 'bg-red-400' },
      { height: 95, color: 'bg-red-900', isPeak: true }, // วันพฤหัส Peak สุดๆ
      { height: 75, color: 'bg-red-800' },
      { height: 30, color: 'bg-red-200' },
      { height: 20, color: 'bg-red-200/50' }
    ]
  },
  hourly: {
    labels: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    bars: [
      { height: 20, color: 'bg-red-200/50' },
      { height: 35, color: 'bg-red-300' },
      { height: 45, color: 'bg-red-400' },
      { height: 80, color: 'bg-red-800' },
      { height: 90, color: 'bg-red-900', isPeak: true }, // ตอนบ่าย 2 คนทำผิดเยอะสุด
      { height: 60, color: 'bg-red-700' },
      { height: 30, color: 'bg-red-300' },
      { height: 15, color: 'bg-red-200/50' },
      { height: 10, color: 'bg-white' }
    ]
  }
}

// 🌟 ใช้ Computed เพื่อให้ข้อมูลเปลี่ยนไปมาอัตโนมัติเวลากดปุ่ม
const currentGraph = computed(() => {
  return graphData[activeTab.value]
})
</script>