import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import Router from 'next/router'
import type { FileWithPath } from '@mantine/dropzone'
import type { FileRejection } from 'types/Dropzone'

interface Store {
  inviteMembersModal: {
    open: boolean
    openModal: () => void
    closeModal: () => void
  }
  createContact: {
    handleImportCSV: () => void
    handleCreateSingleContact: () => void
  }
  importContact: {
    isLoading: boolean
    onDrop: (files: FileWithPath[]) => void
    onReject: (fileRejections: FileRejection[]) => void
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
        closeModal: () => {
          set((state) => {
            state.inviteMembersModal.open = false
          })
        }
      },
      createContact: {
        handleCreateSingleContact: () => {
          prompt('Create new contact modal')
        },
        handleImportCSV: () => {
          void Router.push('/app/contacts/import')
        }
      },
      importContact: {
        isLoading: false,
        onDrop: (files) => {
          console.log('drop', files)
        },
        onReject: (fileRejections) => {
          console.log('reject', fileRejections)
        }
      }
    }))
  )
)
