<template>
  <MainLayout>
    <div class="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Detection Records</h1>
        <p class="text-gray-500 text-sm">Review historical security data and archived violation detections.</p>
      </div>

      <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label class="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Date Range</label>
          <input type="date" class="w-full bg-gray-50 border-gray-200 rounded-lg text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-red-800/20">
        </div>
        <div>
          <label class="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Violation Type</label>
          <select class="w-full bg-gray-50 border-gray-200 rounded-lg text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-red-800/20">
            <option>All Types</option>
            <option>No Helmet</option>
            <option>Speeding</option>
          </select>
        </div>
        <div>
          <label class="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Location</label>
          <select class="w-full bg-gray-50 border-gray-200 rounded-lg text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-red-800/20">
            <option>All Locations</option>
            <option>Main Gate</option>
            <option>Dormitory Gate</option>
          </select>
        </div>
        <div class="flex gap-2">
          <button class="flex-1 bg-red-800 text-white text-sm font-bold py-2 rounded-lg hover:bg-red-900 transition-colors">Apply Filters</button>
          <button class="px-4 py-2 text-sm font-bold text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50">Reset</button>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm flex gap-2">
          <span class="text-gray-400 font-bold uppercase text-[10px] self-center">Total Records</span>
          <span class="font-bold text-gray-900">14,282</span>
        </div>
        <div class="bg-red-50 px-4 py-2 rounded-lg border border-red-100 text-sm flex gap-2">
          <span class="text-red-400 font-bold uppercase text-[10px] self-center">No Helmet</span>
          <span class="font-bold text-red-800">843</span>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table class="w-full text-left border-collapse text-sm">
          <thead class="bg-slate-900 text-white uppercase text-[10px] font-bold tracking-wider">
            <tr>
              <th class="px-6 py-4">Number</th>
              <th class="px-6 py-4">Timestamp</th>
              <th class="px-6 py-4">Type</th>
              <th class="px-6 py-4">Image Preview</th>
              <th class="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="i in 4" :key="i" class="hover:bg-gray-50 transition-colors group">
              <td class="px-6 py-4 font-medium text-gray-900">{{ i }}</td>
              <td class="px-6 py-4 text-gray-500 font-mono text-xs">2023-11-24 14:32:01</td>
              <td class="px-6 py-4">
                <span class="bg-red-50 text-red-700 text-[10px] font-bold px-2 py-1 rounded uppercase">No Helmet</span>
              </td>
              <td class="px-6 py-4">
                <div class="w-16 h-10 bg-gray-200 rounded overflow-hidden">
                  <div class="w-full h-full bg-slate-300"></div>
                </div>
              </td>
              <td class="px-6 py-4">
                <router-link to="/record/detail" class="text-red-800 font-bold text-[10px] uppercase hover:underline">View Details</router-link>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div class="p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50/50">
          <p class="text-xs text-gray-400 italic">Showing 1-25 of 14,282 detections</p>
          <div class="flex gap-1">
            <button v-for="p in 3" :key="p" :class="p === 1 ? 'bg-red-800 text-white' : 'bg-white text-gray-500 border border-gray-200'" class="w-8 h-8 rounded flex items-center justify-center text-xs font-bold">{{ p }}</button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue'
</script>