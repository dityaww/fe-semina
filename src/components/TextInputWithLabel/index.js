import React from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

function TextInputWithLabel({ label, type, name, placeholder, value, onChange }) {
  return (
    <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input 
            type={type} 
            placeholder={placeholder} 
            value={value}
            name={name}
            onChange={onChange}
        />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
    </FormControl>
  )
}

export default TextInputWithLabel