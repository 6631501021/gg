import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RealtimeView from '../views/RealtimeView.vue' 
import RecordDetailView from '../views/RecordDetailView.vue'
import RecordsView from '../views/RecordsView.vue'
// 👇 บรรทัดนี้ครับที่หายไป! ต้อง Import เข้ามาก่อนถึงจะเรียกใช้ข้างล่างได้
import AnalyticsView from '../views/AnalyticsView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/realtime',
      name: 'realtime',
      component: RealtimeView, 
    },
    {
      path: '/record/detail',
      name: 'recorddetail',
      component: RecordDetailView, 
    },
    {
      path: '/records',
      name: 'records',
      component: RecordsView, 
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: AnalyticsView, 
    },
  ],
})

export default router