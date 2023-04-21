import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import Router from 'next/router'
import type { FileWithPath } from '@mantine/dropzone'
import type { ParsedCsvResult } from 'utils/parseCsv'
import { parseCsv } from 'utils/parseCsv'

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
    showPageTitle: string | null
    isLoading: boolean
    csvData: ParsedCsvResult | null
    step: number
    onDrop: (files: FileWithPath[], nextPageTitle: string) => Promise<void>
    handleStepBack: () => void
    handleStepForward: () => void
    resetImport: () => void
    updatePageTitle: (newPageTitle: string | null) => void
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
          void Router.push('/contacts/import')
        }
      },
      importContact: {
        showPageTitle: '',
        step: 1,
        isLoading: false,
        csvData: null,
        onDrop: async (files, nextPageTitle) => {
          if (!files[0]) return
          // Set loading state
          set((state) => {
            state.importContact.isLoading = true
          })

          const parsed = await parseCsv(files[0])

          set((state) => {
            state.importContact.isLoading = false
            state.importContact.csvData = parsed
            state.importContact.showPageTitle = nextPageTitle
            state.importContact.step += 1
          })
        },
        handleStepBack: () => {
          set((state) => {
            state.importContact.step -= 1
          })
        },
        handleStepForward: () => {
          set((state) => {
            state.importContact.step += 1
          })
        },
        resetImport: () => {
          set((state) => {
            state.importContact.step = 1
            state.importContact.csvData = null
            state.importContact.showPageTitle = ''
          })
        },
        updatePageTitle: (newPageTitle) => {
          set((state) => {
            state.importContact.showPageTitle = newPageTitle
          })
        }
      }
    }))
  )
)
