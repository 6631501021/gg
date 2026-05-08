<template>
  <MainLayout>
    <div class="max-w-5xl mx-auto space-y-6">

      <div class="flex justify-between items-end border-b border-gray-200 pb-4">
        <div class="flex items-center gap-4">
            <!-- ใส่ Header หรือ Title ตรงนี้ได้ -->
            <h2 class="text-2xl font-bold text-gray-800">AI Modular Demo</h2>
        </div>
        <div class="relative w-64">
          <svg class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input v-model="searchQuery" type="text" placeholder="Search Camera ID..."
            class="w-full pl-9 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-red-800 outline-none transition-all">
        </div>
      </div>

      <div class="space-y-8">

        <div v-if="filteredCameras.length === 0" class="text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
          <svg class="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z">
            </path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
            </path>
          </svg>
          <p class="text-gray-500 font-medium">No cameras found matching "{{ searchQuery }}"</p>
        </div>

        <div v-for="cam in filteredCameras" :key="cam.id"
          class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 relative">
          
          <!-- ชื่อระบบโมดูล (โชว์เด่นๆ ด้านบนจอ) -->
          <div class="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
            <span class="font-bold text-gray-800">{{ cam.description }}</span>
          </div>

          <div class="relative aspect-[16/9] bg-gray-900 flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 bg-slate-700 opacity-50"></div>
            <p class="text-slate-500 font-mono text-sm z-0">CAMERA SIGNAL ACTIVE</p>
            
            <!-- 🔌 ดึงภาพจาก API ท่อใครท่อมัน (Dynamic URL) -->
            <img :src="cam.streamUrl"
              class="absolute inset-0 w-full h-full object-contain opacity-100" :alt="cam.name">

            <div class="absolute top-4 left-4 z-10">
              <div
                class="bg-black/70 text-white text-[10px] font-mono px-3 py-1.5 rounded flex items-center gap-2 border border-white/10">
                <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                LIVE // {{ cam.name }}
              </div>
            </div>

            <div class="absolute top-4 right-4 z-20 flex items-center gap-2">
              <div
                class="bg-black/70 text-white text-[10px] font-mono px-2 py-1 rounded border border-white/10 hidden sm:block">
                FPS <span class="font-bold">{{ cam.fps }}</span></div>
              <div
                class="bg-black/70 text-white text-[10px] font-mono px-2 py-1 rounded border border-white/10 hidden sm:block">
                LATENCY <span class="font-bold">{{ cam.latency }}</span></div>

              <button @click="removeCamera(cam.id)"
                class="bg-black/70 hover:bg-red-600 text-white p-1.5 rounded border border-white/10 transition-colors ml-1 group"
                title="Remove Camera">
                <svg class="w-4 h-4 opacity-70 group-hover:opacity-100" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Modal เพิ่มกล้อง (ละไว้เหมือนเดิม) -->
    <button @click="showModal = true"
      class="fixed bottom-8 right-8 w-14 h-14 bg-red-900 hover:bg-red-800 text-white rounded-xl shadow-lg shadow-red-900/30 flex items-center justify-center transition-transform hover:scale-105 z-40">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    </button>

    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div class="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-bold text-gray-900">Add New Camera Stream</h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Camera ID / Name</label>
            <input v-model="newCamName" type="text" placeholder="e.g. DORM_FRONT_03"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">RTSP Stream URL (Optional)</label>
            <input type="text" placeholder="http://localhost:8000/video_..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-red-800 focus:border-red-800 outline-none">
          </div>
        </div>

        <div class="mt-8 flex justify-end gap-3">
          <button @click="closeModal"
            class="px-5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">Cancel</button>
          <button @click="addNewCamera"
            class="px-5 py-2 text-sm font-medium text-white bg-red-800 hover:bg-red-900 rounded-lg transition-colors shadow-sm">
            Connect Camera
          </button>
        </div>
      </div>
    </div>

  </MainLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import MainLayout from '../components/MainLayout.vue'

const searchQuery = ref('')
const showModal = ref(false)
const newCamName = ref('')

// 🚨 กำหนด Base URL ของ Backend (ถ้าใช้ Cloudflare tunnel ก็เปลี่ยนตรงนี้ที่เดียวจบ!)
const BACKEND_URL = 'https://transportation-shade-literally-speeches.trycloudflare.com' 
// const BACKEND_URL = 'https://seeds-processors-spots-morgan.trycloudflare.com'

const cameras = ref([
  {
    id: 1,
    name: 'CAM_01_HELMET',
    description: '🧠 Module 1: Helmet Detection System (ตรวจจับหมวกกันน็อก)',
    fps: '60.2',
    latency: '14ms',
    streamUrl: `${BACKEND_URL}/video_helmet` // วิ่งไปท่อที่ 1
  },
  {
    id: 2,
    name: 'CAM_02_MOTO',
    description: '🏍️ Module 2: Motorcycle Tracking System (ติดตามรถมอเตอร์ไซค์)',
    fps: '59.8',
    latency: '16ms',
    streamUrl: `${BACKEND_URL}/video_moto` // วิ่งไปท่อที่ 2
  },
  {
    id: 3,
    name: 'CAM_03_PLATE',
    description: '🔠 Module 3: License Plate & OCR Scanner (อ่านป้ายทะเบียน)',
    fps: '61.3',
    latency: '16ms',
    streamUrl: `${BACKEND_URL}/video_plate` // วิ่งไปท่อที่ 3
  },
])

const filteredCameras = computed(() => {
  if (!searchQuery.value) return cameras.value
  const query = searchQuery.value.toLowerCase()
  return cameras.value.filter(cam => cam.name.toLowerCase().includes(query))
})

const closeModal = () => {
  showModal.value = false
  newCamName.value = ''
}

const addNewCamera = () => {
  const finalName = newCamName.value.trim() || `NEW_CAMERA_0${cameras.value.length + 1}`
  cameras.value.push({
    id: Date.now(),
    name: finalName.toUpperCase(),
    description: '🔧 Custom Added Stream',
    fps: '60.0',
    latency: '15ms',
    streamUrl: `${BACKEND_URL}/video_feed` // ตั้งค่า Default เวลาแอดกล้องใหม่
  })
  closeModal()
}

const removeCamera = (id) => {
  if (confirm('Are you sure you want to disconnect and remove this camera?')) {
    cameras.value = cameras.value.filter(cam => cam.id !== id)
  }
}
</script>