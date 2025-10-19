// Polyfill for @react-native-async-storage/async-storage
const AsyncStorage = {
  getItem: async (key) => {
    return localStorage.getItem(key);
  },
  setItem: async (key, value) => {
    localStorage.setItem(key, value);
  },
  removeItem: async (key) => {
    localStorage.removeItem(key);
  },
  clear: async () => {
    localStorage.clear();
  }
};

// Make it available globally
if (typeof window !== 'undefined') {
  window.AsyncStorage = AsyncStorage;
}

export default AsyncStorage;