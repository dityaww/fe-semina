import { Button, Spinner } from '@chakra-ui/react'
import React from 'react'

function SButton({ 
    colorScheme, 
    size, 
    children, 
    loading, 
    loadingText,
    action, 
}) {
  return (
    <Button 
        colorScheme={colorScheme} 
        isLoading={loading}
        loadingText={loadingText}
        size={size} 
        onClick={action}
        >
            {children} 
    </Button>
  )
}

export default SButton