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
          <input v-model="filterDate" type="date" class="w-full bg-gray-50 border-gray-200 rounded-lg text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-red-800/20">
        </div>
        <div>
          <label class="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Violation Type</label>
          <select v-model="filterType" class="w-full bg-gray-50 border-gray-200 rounded-lg text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-red-800/20">
            <option>All Types</option>
            <option>No Helmet</option>
          </select>
        </div>
        <div>
          <label class="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Location</label>
          <select v-model="filterLocation" class="w-full bg-gray-50 border-gray-200 rounded-lg text-sm px-3 py-2 outline-none focus:ring-2 focus:ring-red-800/20">
            <option>All Locations</option>
            <option>IN</option>
            <option>OUT</option>
          </select>
        </div>
        <div class="flex gap-2">
          <button @click="applyFilters" class="flex-1 bg-red-800 text-white text-sm font-bold py-2 rounded-lg hover:bg-red-900 transition-colors">Apply Filters</button>
          <button @click="resetFilters" class="px-4 py-2 text-sm font-bold text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">Reset</button>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm flex gap-2 transition-all">
          <span class="text-gray-400 font-bold uppercase text-[10px] self-center">Total Records</span>
          <span class="font-bold text-gray-900">{{ filteredRecords.length }}</span>
        </div>
        <div class="bg-red-50 px-4 py-2 rounded-lg border border-red-100 text-sm flex gap-2">
          <span class="text-red-400 font-bold uppercase text-[10px] self-center">No Helmet</span>
          <span class="font-bold text-red-800">{{ noHelmetCount }}</span>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col min-h-[400px]">
        <table class="w-full text-left border-collapse text-sm">
          <thead class="bg-slate-900 text-white uppercase text-[10px] font-bold tracking-wider">
            <tr>
              <th class="px-6 py-4">ID</th>
              <th class="px-6 py-4">Timestamp</th>
              <th class="px-6 py-4">Type</th>
              <th class="px-6 py-4">Image Preview</th>
              <th class="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-if="paginatedRecords.length === 0">
              <td colspan="5" class="px-6 py-12 text-center text-gray-400">No records match your filters.</td>
            </tr>
            <tr v-for="record in paginatedRecords" :key="record.id" class="hover:bg-gray-50 transition-colors group">
              <td class="px-6 py-4 font-medium text-gray-900">{{ record.id }}</td>
              <td class="px-6 py-4 text-gray-500 font-mono text-xs">{{ record.timestamp }}<br><span class="text-[10px] text-gray-400">{{ record.location }}</span></td>
              <td class="px-6 py-4">
                <span :class="record.type === 'No Helmet' ? 'bg-red-50 text-red-700' : 'bg-yellow-50 text-yellow-700'" class="text-[10px] font-bold px-2 py-1 rounded uppercase">
                  {{ record.type }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="w-16 h-10 bg-gray-200 rounded overflow-hidden shadow-sm">
                  <img :src="record.image" class="w-full h-full object-cover" />
                </div>
              </td>
              <td class="px-6 py-4">
                <router-link to="/record/detail" class="text-red-800 font-bold text-[10px] uppercase hover:underline">View Details</router-link>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div class="p-4 border-t border-gray-100 flex justify-between items-center bg-gray-50/50 mt-auto">
          <p class="text-xs text-gray-400 italic">Showing page {{ currentPage }} of {{ totalPages || 1 }}</p>
          <div class="flex gap-1" v-if="totalPages > 0">
            <button 
              v-for="p in totalPages" 
              :key="p" 
              @click="currentPage = p"
              :class="p === currentPage ? 'bg-red-800 text-white' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-100'" 
              class="w-8 h-8 rounded flex items-center justify-center text-xs font-bold transition-colors"
            >
              {{ p }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import MainLayout from '../components/MainLayout.vue'

// ตัวแปรเก็บค่าตัวกรอง
const filterDate = ref('')
const filterType = ref('All Types')
const filterLocation = ref('All Locations')

// ตัวแปรแบ่งหน้า
const currentPage = ref(1)
const itemsPerPage = 4

// ข้อมูลจำลอง (Mock Data)
const allRecords = ref([
  { id: 'HV-0921', timestamp: '2023-11-24 14:32:01', type: 'No Helmet', location: 'IN', image: '/images/nh1.jpg' },
  { id: 'HV-0922', timestamp: '2023-11-24 15:10:22', type: 'No Helmet', location: 'OUT', image: '/images/nh2.jpg' },
  { id: 'HV-0923', timestamp: '2023-11-25 08:15:00', type: 'No Helmet', location: 'IN', image: '/images/nh3.jpg' },
  { id: 'HV-0924', timestamp: '2023-11-25 09:20:45', type: 'No Helmet', location: 'OUT', image: '/images/nh4.jpg' },
  { id: 'HV-0925', timestamp: '2023-11-25 10:05:11', type: 'No Helmet', location: 'IN', image: '/images/nh1.jpg' },
  { id: 'HV-0926', timestamp: '2023-11-26 12:30:00', type: 'No Helmet', location: 'OUT', image: '/images/nh2.jpg' },
  { id: 'HV-0927', timestamp: '2023-11-26 14:12:33', type: 'No Helmet', location: 'IN', image: '/images/nh3.jpg' }
])

// คำนวณข้อมูลหลังผ่านการกรอง
const filteredRecords = computed(() => {
  return allRecords.value.filter(record => {
    const matchType = filterType.value === 'All Types' || record.type === filterType.value
    const matchLoc = filterLocation.value === 'All Locations' || record.location === filterLocation.value
    const matchDate = !filterDate.value || record.timestamp.startsWith(filterDate.value)
    
    return matchType && matchLoc && matchDate
  })
})

// สรุปตัวเลขคนไม่ใส่หมวก
const noHelmetCount = computed(() => {
  return filteredRecords.value.filter(r => r.type === 'No Helmet').length
})

// คำนวณจำนวนหน้าทั้งหมด
const totalPages = computed(() => Math.ceil(filteredRecords.value.length / itemsPerPage))

// ตัดแบ่งข้อมูลเพื่อโชว์เฉพาะหน้าปัจจุบัน
const paginatedRecords = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredRecords.value.slice(start, end)
})

// ฟังก์ชันปุ่ม Apply (จริงๆ Vue ทำให้อัตโนมัติอยู่แล้ว แต่เอาไว้รีเซ็ตหน้ากลับไปหน้า 1)
const applyFilters = () => {
  currentPage.value = 1
}

// ฟังก์ชันปุ่ม Reset
const resetFilters = () => {
  filterDate.value = ''
  filterType.value = 'All Types'
  filterLocation.value = 'All Locations'
  currentPage.value = 1
}
</script>