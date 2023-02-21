import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface Store {
  count: number
  actions: {
    increment: () => void
  }
}

// Create a store with immer middleware and devtools
// Example with Zustand + Immer
export const useStore = create<Store>()(
  immer(
    devtools((set) => ({
      count: 0,
      actions: {
        increment: () => set((state) => state.count++)
      }
    }))
  )
)
