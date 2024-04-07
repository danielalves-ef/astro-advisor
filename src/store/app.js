// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const loading = ref(false);
  const loadingText = ref("text here, cration");

  return { loading, loadingText }
})
