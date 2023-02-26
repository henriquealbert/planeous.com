import { Box, Modal, Title } from '@mantine/core'
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
    <Modal
      opened={open}
      onClose={closeModal}
      title={<Title fz="xl">{t('title')}</Title>}
      closeOnEscape={false}
      centered
      size="lg"
      padding={32}
      closeOnClickOutside={false}
      overlayBlur={3}
      withCloseButton={false}
    >
      <Box>
        <InviteMembers showCancelBtn />
      </Box>
    </Modal>
  )
}
