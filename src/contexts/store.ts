import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface Store {
  inviteMembersModal: {
    open: boolean
    openModal: () => void
    closeModal: () => void
  }
}

// Create a store with immer middleware and devtools
export const useStore = create<Store>()(
  immer(
    devtools((set) => ({
      inviteMembersModal: {
        open: false,
        openModal: () =>
          set((state) => {
            state.inviteMembersModal.open = true
          }),
        closeModal: () =>
          set((state) => {
            state.inviteMembersModal.open = false
          })
      }
    }))
  )
)
