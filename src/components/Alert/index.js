import React from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'

function SAlert({ messages, status }) {
  return (
    <Alert status={status} fontSize="sm" rounded="md">
        <AlertIcon />
        {messages}
    </Alert>
  )
}

export default SAlert