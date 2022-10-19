import React from 'react'
import { Modal, Box } from '@mui/material'

const ModalCard = ({ open, setOpen }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>Pokemon Habilities Space</Box>
      </Modal>
    </>
  )
}

export default ModalCard