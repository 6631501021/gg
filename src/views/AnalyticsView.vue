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
          <h3 class="text-3xl font-bold text-gray-900 mt-1">01</h3>
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
              <button class="px-3 py-1 text-xs font-bold bg-white text-gray-900 shadow-sm rounded">Daily</button>
              <button class="px-3 py-1 text-xs font-bold text-gray-500 hover:text-gray-900 rounded">Hourly</button>
            </div>
          </div>
          <div class="flex-1 flex items-end gap-2 mt-4 min-h-[200px] border-b-2 border-gray-100 pb-2 relative">
             <div class="w-full bg-red-200/50 rounded-t-sm" style="height: 30%"></div>
             <div class="w-full bg-red-300 rounded-t-sm" style="height: 45%"></div>
             <div class="w-full bg-red-400 rounded-t-sm" style="height: 60%"></div>
             <div class="w-full bg-red-900 rounded-t-sm relative" style="height: 90%"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-red-900">Peak</span></div>
             <div class="w-full bg-red-800 rounded-t-sm" style="height: 80%"></div>
             <div class="w-full bg-red-400 rounded-t-sm" style="height: 50%"></div>
             <div class="w-full bg-red-200 rounded-t-sm" style="height: 25%"></div>
             <div class="w-full bg-red-200/50 rounded-t-sm" style="height: 20%"></div>
             <div class="w-full bg-red-300 rounded-t-sm" style="height: 35%"></div>
             <div class="w-full bg-red-800 rounded-t-sm" style="height: 75%"></div>
             <div class="w-full bg-white rounded-t-sm" style="height: 10%"></div>
             <div class="w-full bg-red-700 rounded-t-sm" style="height: 60%"></div>
          </div>
          <div class="flex justify-between text-[10px] font-bold text-gray-400 mt-2 px-1">
            <span>06:00</span><span>08:00</span><span>10:00</span><span>12:00</span><span>14:00</span><span>16:00</span><span>18:00</span><span>20:00</span><span>22:00</span>
          </div>
        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 class="text-lg font-bold text-gray-900 mb-6">Violation Types</h3>
          <div class="flex-1 flex items-center justify-center relative">
            <div class="w-48 h-48 rounded-full border-[16px] border-red-900 relative flex items-center justify-center">
              <div class="absolute inset-0 border-[16px] border-yellow-400 rounded-full" style="clip-path: polygon(50% 50%, 100% 0, 100% 30%, 50% 50%); transform: rotate(-45deg);"></div>
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
              <td class="px-6 py-4 font-bold text-gray-900">Main Gate (Phahonyothin)</td>
              <td class="px-6 py-4 font-mono text-gray-600">5,821</td>
              <td class="px-6 py-4 font-mono text-gray-600">42</td>
              <td class="px-6 py-4">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="w-[90%] h-full bg-green-500"></div></div>
              </td>
              <td class="px-6 py-4"><span class="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded uppercase">Optimal</span></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors bg-orange-50/30">
              <td class="px-6 py-4 font-bold text-gray-900">Dormitory Gate</td>
              <td class="px-6 py-4 font-mono text-gray-600">2,110</td>
              <td class="px-6 py-4 font-mono text-gray-600">88</td>
              <td class="px-6 py-4">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="w-[60%] h-full bg-yellow-400"></div></div>
              </td>
              <td class="px-6 py-4"><span class="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded uppercase">Moderate</span></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 font-bold text-gray-900">Medical Center Gate</td>
              <td class="px-6 py-4 font-mono text-gray-600">4,302</td>
              <td class="px-6 py-4 font-mono text-gray-600">15</td>
              <td class="px-6 py-4">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="w-[95%] h-full bg-green-500"></div></div>
              </td>
              <td class="px-6 py-4"><span class="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded uppercase">Optimal</span></td>
            </tr>
            <tr class="hover:bg-gray-50 transition-colors bg-red-50/50">
              <td class="px-6 py-4 font-bold text-gray-900">Stadium Rear Access</td>
              <td class="px-6 py-4 font-mono text-gray-600">942</td>
              <td class="px-6 py-4 font-mono text-gray-600 text-red-600 font-bold">41</td>
              <td class="px-6 py-4">
                <div class="w-32 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="w-[30%] h-full bg-red-600"></div></div>
              </td>
              <td class="px-6 py-4"><span class="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-1 rounded uppercase">Critical</span></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue'
</script>