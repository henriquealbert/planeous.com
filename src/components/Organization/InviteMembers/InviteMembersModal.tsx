import { Modal } from '@mantine/core'
import { useStore } from 'contexts/store'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import { useLayoutEffect } from 'react'
import { InviteMembers } from './InviteMembers'

export const InviteMembersModal = () => {
  const { query } = useRouter()
  const t = useTranslations('Organizations.InviteMembersModal')
  const { open, closeModal, openModal } = useStore((state) => state.inviteMembersModal)

  useLayoutEffect(() => {
    if (query.inviteMembers === 'true') {
      openModal()
    }
  }, [query.inviteMembers, openModal])

  return (
    <Modal opened={open} onClose={closeModal} title={t('title')}>
      <InviteMembers />
    </Modal>
  )
}
