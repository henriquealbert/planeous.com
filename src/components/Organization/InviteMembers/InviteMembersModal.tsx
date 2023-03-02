import { Box, Modal, Title } from '@mantine/core'
import { useStore } from 'contexts/store'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import { useLayoutEffect } from 'react'
import { InviteMembers } from './InviteMembers'

export const InviteMembersModal = () => {
  const { query, push } = useRouter()
  const t = useTranslations('Organizations.InviteMembersModal')
  const { open, closeModal, openModal } = useStore((state) => state.inviteMembersModal)

  useLayoutEffect(() => {
    if (query.inviteMembers === 'true') {
      openModal()
    }
  }, [query.inviteMembers, openModal])

  const handleCloseModal = () => {
    closeModal()
    void push('/app', {
      query: {}
    })
  }

  return (
    <Modal
      opened={open}
      onClose={closeModal}
      closeOnEscape={false}
      centered
      size="lg"
      padding={32}
      closeOnClickOutside={false}
      overlayProps={{
        blur: 3
      }}
      withCloseButton={false}
    >
      <Modal.Header p="0" mb="md">
        <Title fz="xl">{t('title')}</Title>
      </Modal.Header>
      <Box>
        <InviteMembers isModal handleCloseModal={handleCloseModal} />
      </Box>
    </Modal>
  )
}
