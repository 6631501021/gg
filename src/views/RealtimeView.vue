<template>
  <MainLayout>
    <div class="max-w-5xl mx-auto space-y-6">
      
      <div class="flex justify-between items-end border-b border-gray-200 pb-4">
        <div class="flex items-center gap-4">
          <h1 class="text-2xl font-bold text-red-800">MFU Vision</h1>
          <span class="text-gray-500 font-medium">Live Feed</span>
        </div>
        <div class="relative w-64">
          <svg class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input type="text" placeholder="Search Camera ID..." class="w-full pl-9 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-red-800 outline-none">
        </div>
      </div>

      <div class="space-y-8">
        
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="relative aspect-[16/9] bg-gray-800 flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 bg-slate-700 opacity-50"></div>
            <p class="text-slate-500 font-mono text-sm z-0">CAMERA SIGNAL ACTIVE</p>
            
            <div class="absolute top-4 left-4 z-10">
              <div class="bg-black/70 text-white text-[10px] font-mono px-3 py-1.5 rounded flex items-center gap-2 border border-white/10">
                <div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                LIVE // GATE_01_IN
              </div>
              <div class="mt-1 text-[9px] text-white/70 font-mono drop-shadow-md">2023-11-24 14:32:05 UTC+7</div>
            </div>

            <div class="absolute top-4 right-4 z-10 flex gap-2">
              <div class="bg-black/70 text-white text-[10px] font-mono px-2 py-1 rounded border border-white/10">FPS <span class="font-bold">60.2</span></div>
              <div class="bg-black/70 text-white text-[10px] font-mono px-2 py-1 rounded border border-white/10">LATENCY <span class="font-bold">14ms</span></div>
            </div>

            <div class="absolute border-2 border-red-600 bg-red-600/10 z-20 transition-all duration-300" style="top: 15%; left: 55%; width: 18%; height: 25%;">
              <div class="absolute bottom-0 left-0 bg-red-600 text-white text-[8px] font-bold px-1 py-0.5 whitespace-nowrap">NO HELMET: 0.98</div>
            </div>

            <div class="absolute border-2 border-yellow-400 bg-yellow-400/10 z-20" style="bottom: 15%; right: 10%; width: 12%; height: 10%;">
              <div class="absolute top-0 left-0 bg-yellow-400 text-black text-[8px] font-bold px-1 py-0.5 whitespace-nowrap">PLATE: ABC-123</div>
            </div>

            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-4 px-4 py-2 z-30 border border-white/10">
              <button class="text-white hover:text-red-400"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></button>
              <button class="text-white hover:text-red-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg></button>
              <div class="w-px h-4 bg-white/30"></div>
              <button class="text-white hover:text-red-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg></button>
              <button class="text-white hover:text-red-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg></button>
            </div>
          </div>

          <div class="p-4 bg-white flex items-center justify-between">
            <div class="flex gap-6">
              <label class="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" checked class="w-4 h-4 text-red-800 rounded border-gray-300 focus:ring-red-800 accent-red-800">
                <span class="text-sm font-medium text-gray-700 group-hover:text-red-800 transition-colors">Helmet Detection</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" checked class="w-4 h-4 text-red-800 rounded border-gray-300 focus:ring-red-800 accent-red-800">
                <span class="text-sm font-medium text-gray-700 group-hover:text-red-800 transition-colors">License Plate OCR</span>
              </label>
            </div>
            <button class="bg-red-900 hover:bg-red-950 text-white px-5 py-2 rounded font-medium text-sm transition-all shadow-sm">
              Apply Settings
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden opacity-90">
           <div class="relative aspect-[16/9] bg-gray-900 flex items-center justify-center overflow-hidden">
             <div class="absolute top-4 left-4 z-10">
              <div class="bg-black/70 text-white text-[10px] font-mono px-3 py-1.5 rounded flex items-center gap-2 border border-white/10">
                <div class="w-2 h-2 rounded-full bg-gray-500"></div> LIVE // GATE_02_OUT
              </div>
            </div>
             <p class="text-slate-600 font-mono text-sm">WAITING FOR STREAM...</p>
           </div>
        </div>

      </div>
    </div>
    
    <button class="fixed bottom-8 right-8 w-14 h-14 bg-red-900 hover:bg-red-800 text-white rounded-xl shadow-lg shadow-red-900/30 flex items-center justify-center transition-transform hover:scale-105">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
    </button>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue'
</script>