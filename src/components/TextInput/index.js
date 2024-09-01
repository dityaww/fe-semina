import React from 'react'
import { Input } from '@chakra-ui/react'

function TextInput({ size, type, placeholder, name, value, onChange }) {
  return (
    <Input 
      size={size} 
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder} />
  )
}

export default TextInput