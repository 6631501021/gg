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
          <p class="text-xs text-gray-500 font-semibold mt-4 uppercase">VIOLATION TODAY</p>
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
          <p class="text-xs text-gray-500 font-semibold mt-4 uppercase">VIOLATION LAST HOUR</p>
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
          <p class="text-xs text-gray-500 font-semibold mt-4 uppercase">ACTIVE CAMERAS</p>
          <h3 class="text-4xl font-bold text-gray-900 mt-1">1</h3>
        </div>


      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">

          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold text-gray-900">Detection Trends</h3>
            <div class="flex border border-gray-200 rounded-md overflow-hidden">
              <button @click="activeTab = '24h'"
                :class="activeTab === '24h' ? 'bg-gray-100 text-gray-900 font-bold' : 'bg-white text-gray-500 font-medium hover:bg-gray-50'"
                class="px-3 py-1 text-xs transition-colors duration-200">
                24 HOURS
              </button>
              <button @click="activeTab = '7d'"
                :class="activeTab === '7d' ? 'bg-gray-100 text-gray-900 font-bold' : 'bg-white text-gray-500 font-medium hover:bg-gray-50'"
                class="px-3 py-1 text-xs border-l border-gray-200 transition-colors duration-200">
                7 DAYS
              </button>
            </div>
          </div>

          <div class="flex-1 flex items-end gap-2 mt-4 min-h-[300px] border-b-2 border-gray-100 pb-2 relative">
            <div v-for="(item, index) in currentChartData" :key="index"
              class="w-full rounded-t-sm relative transition-all duration-500 ease-out flex flex-col justify-end group"
              :class="item.isPeak ? 'bg-red-900' : 'bg-red-300 hover:bg-red-400'"
              :style="{ height: item.percent + '%' }">
              <span v-if="item.isPeak" class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-red-900">
                Peak
              </span>

              <div
                class="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded pointer-events-none transition-opacity z-10">
                {{ item.percent }}%
              </div>
            </div>
          </div>

          <div class="flex justify-between text-[10px] font-bold text-gray-400 mt-2 px-1">
            <span v-for="(item, index) in currentChartData" :key="'label-' + index">
              {{ item.time }}
            </span>
          </div>

        </div>

        <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold text-gray-900">RECENT VIOLATIONS</h3>
            <span
              class="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase animate-pulse">Live</span>
          </div>

          <div class="space-y-4">
            <div v-for="alert in displayedAlerts" :key="alert.id"
              class="flex gap-4 items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer border border-transparent hover:border-gray-100 transition-all">
              <div class="w-20 h-14 bg-gray-200 rounded overflow-hidden flex-shrink-0 shadow-sm">
                <img :src="alert.image" :alt="alert.plate" class="w-full h-full object-cover" />
              </div>

              <div class="flex-1">
                <h4 class="text-sm font-bold text-red-700">{{ alert.title }}</h4>
                <p class="text-xs text-gray-500">{{ alert.location }}</p>
                <p class="text-[10px] font-mono text-gray-400 mt-1">PLATE: {{ alert.plate }}</p>
              </div>
              <span class="text-xs text-gray-400 ml-auto whitespace-nowrap">{{ alert.time }}</span>
            </div>
          </div>

          <button @click="showAll = !showAll"
            class="w-full mt-4 py-2 text-sm font-bold text-red-800 border border-red-100 rounded-lg hover:bg-red-50 transition-colors">
            {{ showAll ? 'SHOW LESS' : 'VIEW ALL INCIDENTS' }}
          </button>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue'
// นำเข้าข้อมูล API หรือ State Management (Pinia/Vuex) ตรงนี้

import { ref, computed } from 'vue'

// 1. สร้างตัวแปรเก็บสถานะว่าตอนนี้กดแท็บไหนอยู่ (ค่าเริ่มต้นคือ '24h')
const activeTab = ref('24h')

// 2. ข้อมูลจำลองสำหรับ 24 ชั่วโมง
const data24h = [
  { time: '06:00', percent: 30 },
  { time: '08:00', percent: 45 },
  { time: '10:00', percent: 60 },
  { time: '12:00', percent: 90, isPeak: true }, // Peak
  { time: '14:00', percent: 80 },
  { time: '16:00', percent: 50 },
  { time: '18:00', percent: 25 },
  { time: '20:00', percent: 20 },
  { time: '22:00', percent: 35 }
]

// 3. ข้อมูลจำลองสำหรับ 7 วัน
const data7d = [
  { time: 'Mon', percent: 40 },
  { time: 'Tue', percent: 65 },
  { time: 'Wed', percent: 85, isPeak: true }, // Peak
  { time: 'Thu', percent: 45 },
  { time: 'Fri', percent: 70 },
  { time: 'Sat', percent: 30 },
  { time: 'Sun', percent: 20 }
]

// 4. สร้างตัวแปรคำนวณว่าควรดึงข้อมูลชุดไหนมาโชว์
const currentChartData = computed(() => {
  return activeTab.value === '24h' ? data24h : data7d
})

// 1. สร้างตัวแปรเก็บสถานะการกดปุ่ม (ค่าเริ่มต้นคือ false = ยังไม่กด)
const showAll = ref(false)

// 2. ข้อมูลจำลอง 10 รายการ
const recentAlerts = [
  { id: 1, title: 'No Helmet Detected', location: 'Post guard gate - IN', plate: '1กก-8822', time: '2m ago', image: '/images/nh1.jpg' },
  { id: 2, title: 'No Helmet Detected', location: 'Post guard gate - OUT', plate: '3กข-1234', time: '8m ago', image: '/images/nh2.jpg' },
  { id: 3, title: 'No Helmet Detected', location: 'Dormitory Gate - IN', plate: 'ขข-999', time: '15m ago', image: '/images/nh3.jpg' },
  { id: 4, title: 'Multiple Riders (No Helmet)', location: 'Main Gate - OUT', plate: '5งง-5555', time: '22m ago', image: '/images/nh4.jpg' },
  { id: 5, title: 'No Helmet Detected', location: 'Dormitory Gate - OUT', plate: '1กค-1111', time: '30m ago', image: '/images/nh1.jpg' },
  { id: 6, title: 'No Helmet Detected', location: 'Medical Center Gate', plate: '2กจ-4433', time: '45m ago', image: '/images/nh2.jpg' },
  { id: 7, title: 'No Helmet Detected', location: 'Post guard gate - IN', plate: '8กฮ-9090', time: '1h ago', image: '/images/nh3.jpg' },
  { id: 8, title: 'No Helmet Detected', location: 'Stadium Rear Access', plate: '1ขข-100', time: '1.5h ago', image: '/images/nh4.jpg' },
  { id: 9, title: 'No Helmet Detected', location: 'Main Gate - IN', plate: 'ไม่ติดแผ่นป้าย', time: '2h ago', image: '/images/nh1.jpg' },
  { id: 10, title: 'No Helmet Detected', location: 'Post guard gate - OUT', plate: '4กต-2345', time: '3h ago', image: '/images/nh2.jpg' }
]

// 3. คำนวณว่าจะโชว์กี่อัน ถ้า showAll เป็นจริงโชว์หมด ถ้าเป็นเท็จโชว์แค่ 3 อันแรก (.slice(0, 3))
const displayedAlerts = computed(() => {
  return showAll.value ? recentAlerts : recentAlerts.slice(0, 3)
})

</script>
