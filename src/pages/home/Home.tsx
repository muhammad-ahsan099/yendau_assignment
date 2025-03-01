import React from 'react'
import Counter from '../../components/counter/Counter';
import { Box } from "@chakra-ui/react";


const Home = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.100">
            <Counter />
        </Box>
    )
}

export default Home;