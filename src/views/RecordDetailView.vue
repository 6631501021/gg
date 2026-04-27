<template>
  <MainLayout>
    <div class="max-w-5xl mx-auto space-y-6">
      
      <div class="flex justify-between items-center">
        <div class="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex gap-2">
          <router-link to="/records" class="hover:text-red-800 transition-colors cursor-pointer">Records</router-link> 
          <span class="text-gray-300">/</span> 
          <span class="text-red-800">View Details</span>
        </div>
        <div class="flex gap-2">
           
        </div>
      </div>

      <div class="flex items-center gap-3">
        <h1 class="text-2xl font-bold text-gray-900">Detection Detail: #HV-0921</h1>
        <span class="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded uppercase">Pending Review</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-6">
          <div class="relative bg-black rounded-xl overflow-hidden shadow-lg aspect-video">
             <img src="/images/nh3.jpg" class="absolute inset-0 w-full h-full object-cover" alt="Evidence">
             <div class="absolute bottom-4 right-4 flex gap-2">
               <div class="bg-red-600 text-white px-3 py-1 rounded text-center shadow-lg">
                 <p class="text-[8px] uppercase font-bold opacity-70 leading-none">Confidence</p>
                 <p class="text-sm font-bold">98.4%</p>
               </div>
               <div class="bg-red-900 text-white px-3 py-1 rounded text-center shadow-lg">
                 <p class="text-[8px] uppercase font-bold opacity-70 leading-none">Alert Type</p>
                 <p class="text-sm font-bold">No Helmet</p>
               </div>
             </div>
          </div>

          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 class="text-[10px] font-bold text-gray-400 uppercase mb-6 tracking-widest border-b pb-2">Audit History</h3>
            <div class="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-gray-100">
               <div class="relative pl-8">
                 <div class="absolute left-0 top-1 w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center ring-4 ring-white"><svg class="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path></svg></div>
                 <p class="text-xs font-bold text-gray-900">Detection Initiated</p>
                 <p class="text-[10px] text-gray-400">2023-11-24 14:32:01</p>
                 <div class="mt-2 p-2 bg-gray-50 rounded text-[10px] text-gray-500 italic">System CAM01-G04 identified a violation 'No Helmet' with high confidence.</div>
               </div>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
             <h4 class="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest flex items-center gap-2">
               <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               Event Metadata
             </h4>
             <div class="space-y-3">
               <div class="flex justify-between"><span class="text-xs text-gray-400">Timestamp</span><span class="text-xs font-mono font-bold">2023-11-24 14:32:01</span></div>
               <div class="flex justify-between"><span class="text-xs text-gray-400">Location</span><span class="text-xs font-bold">Post guard gate</span></div>
               <div class="flex justify-between"><span class="text-xs text-gray-400">Camera ID</span><span class="text-xs font-bold">CAM-01-IN</span></div>
             </div>
          </div>

          <div class="bg-slate-900 text-white p-5 rounded-xl shadow-lg shadow-slate-900/20">
             <h4 class="text-[10px] font-bold text-slate-500 uppercase mb-4 tracking-widest flex items-center gap-2">
               <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.5l1 1H17a2 2 0 012 2v12a2 2 0 01-2 2z"></path></svg>
               Extracted Intel
             </h4>
             <div class="grid grid-cols-2 gap-3">
               <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                 <p class="text-[8px] font-bold text-slate-500 uppercase">Plate Number</p>
                 <p class="text-sm font-bold text-yellow-400 font-mono mt-1">ABD-123</p>
               </div>
               <div class="bg-slate-800 p-3 rounded-lg border border-slate-700">
                 <p class="text-[8px] font-bold text-slate-500 uppercase">Vehicle Type</p>
                 <p class="text-sm font-bold mt-1">Motorcycle</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue'
</script>