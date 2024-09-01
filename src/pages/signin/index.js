import React, { useState } from 'react'
import { Container, Card, Text, Center, HStack, VStack, useToast } from '@chakra-ui/react'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import SButton from '../../components/Button'
import { useMutation } from '@tanstack/react-query'
import { config } from '../../configs'
import axios from 'axios'
import SAlert from '../../components/Alert'

function SignIn() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [token, setToken] = useState(null)
    const toast = useToast()
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    const { mutate, error, isError, isPending } = useMutation({
        mutationFn: async () => {
            const res = await axios.post(`${config.api_host_dev}/v1/auth/signin`, form )

            setToken(res.data.data)
            return res.data.data
        },
        mutationKey: ['sign'],
        onError: () => {
            console.log("error post");        
            setForm({...form, email: '', password: ''})
        },
        onSuccess: () => {
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutate()
    }

    // console.log(isError)
    // console.log("pending", isPending)

    return (
        <HStack height="100vh" backgroundColor="#3b82f6">
            <Container maxW='7xl' height="100%">
                <Center h="100%">
                    <Card size="lg" maxW="lg" paddingX={8} paddingY={16} gap={4} width="35%" shadow="lg">
                        <Text align="left" fontWeight='semibold' color="#3b82f6">semina</Text>
                        <VStack align="left" marginBottom={3}>
                            <Text align="left" variant="gray" fontSize="2xl" color="#6b7280" fontWeight="bold">Hello,</Text>
                            <Text align="left" color="#6b7280" fontSize="md">Please fill email and password to sign in</Text>
                        </VStack>
                        
                        {isError && <SAlert messages={error.response.data.msg} status="error" />}
                        <TextInputWithLabel label="email" type="email" name="email" placeholder="type your email" onChange={handleChange} value={form?.email} />
                        <TextInputWithLabel label="password" type="password" name="password" placeholder="type your password" onChange={handleChange} value={form?.password} />

                        <SButton children="Sign In" colorScheme="blue" loading={isPending} size="md" action={handleSubmit} loadingText={isPending && "Loading.."} />
                    </Card>
                </Center>
            </Container>
        </HStack>
    )
}

export default SignIn