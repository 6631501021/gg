<template>
  <MainLayout>
    <div class="max-w-5xl mx-auto space-y-6">

      <div class="flex justify-between items-end border-b border-gray-200 pb-4">
        <div class="flex items-center gap-4">

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
          class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">
          <div class="relative aspect-[16/9] bg-gray-800 flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 bg-slate-700 opacity-50"></div>
            <p class="text-slate-500 font-mono text-sm z-0">CAMERA SIGNAL ACTIVE</p>
            <!-- On localhost -->
            <!-- <img src="http://localhost:8000/video_feed"
              class="absolute inset-0 w-full h-full object-contain opacity-100" alt="Live AI Feed"> -->

            <!-- On web -->
            <img src="https://honey-separately-stay-does.trycloudflare.com/video_feed"
              class="absolute inset-0 w-full h-full object-contain opacity-100" alt="Live AI Feed">

            <div class="absolute top-4 left-4 z-10">
              <div
                class="bg-black/70 text-white text-[10px] font-mono px-3 py-1.5 rounded flex items-center gap-2 border border-white/10">
                <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                LIVE // {{ cam.name }}
              </div>
              <div class="mt-1 text-[9px] text-white/70 font-mono drop-shadow-md">{{ cam.timestamp }}</div>
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

            <!-- Bounding Boxes -->
            <!-- <div class="absolute border-2 border-red-600 bg-red-600/10 z-20 transition-all duration-300"
              style="top: 20%; left: 45%; width: 18%; height: 25%;">
              <div
                class="absolute bottom-0 left-0 bg-red-600 text-white text-[8px] font-bold px-1 py-0.5 whitespace-nowrap">
                NO HELMET: {{ cam.helmetScore }}</div>
            </div>

            <div class="absolute border-2 border-yellow-400 bg-yellow-400/10 z-20"
              style="bottom: 2%; right: 18%; width: 12%; height: 10%;">
              <div
                class="absolute top-0 left-0 bg-yellow-400 text-black text-[8px] font-bold px-1 py-0.5 whitespace-nowrap">
                PLATE: {{ cam.plate }}</div>
            </div> -->

          </div>
        </div>

      </div>
    </div>

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
            <input type="text" placeholder="rtsp://admin:pass@192.168.1.100/stream"
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

const cameras = ref([
  {
    id: 1,
    name: 'GATE_01_IN',
    timestamp: '2023-11-24 14:32:05 UTC+7',
    fps: '60.2',
    latency: '14ms',
    helmetScore: '0.98',
    plate: 'ABC-123',
    image: '/images/nh3.jpg'
  },
  {
    id: 2,
    name: 'GATE_02_OUT',
    timestamp: '2023-11-24 14:32:10 UTC+7',
    fps: '59.8',
    latency: '16ms',
    helmetScore: '0.95',
    plate: 'XYZ-999',
    image: '/images/nh3.jpg'
  }
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
    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19) + ' UTC+7',
    fps: '60.0',
    latency: '15ms',
    helmetScore: '0.00',
    plate: 'SCANNING...',
    image: '/images/nh2.jpg'
  })
  closeModal()
}

// 💡 ฟังก์ชันที่เพิ่มเข้ามาสำหรับลบกล้อง
const removeCamera = (id) => {
  // ใช้ confirm เพื่อเด้งแจ้งเตือนถามความแน่ใจก่อนลบ
  if (confirm('Are you sure you want to disconnect and remove this camera?')) {
    // กรองเอากล้องที่ id ตรงกันออกไปจาก Array
    cameras.value = cameras.value.filter(cam => cam.id !== id)
  }
}
</script>