import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { Box, Button, Heading, useToast } from "@chakra-ui/react";
import Toast from "../toast/Toast";


const TOAST_DURATION = 3000;

const Counter: React.FC = () => {
    const { count, increment } = useCounter();
    const toast = useToast();

    const handleIncrement = () => {
        increment();
        toast({
            position: "top-right",
            duration: TOAST_DURATION,
            isClosable: true,
            render: () => <Toast count={count} />
        });
    };

    return (
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            p={4}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="md"
            w={64}
        >
            <Heading size="md" mb={2}>Counter: {count}</Heading>
            <Button colorScheme="blue" onClick={handleIncrement}>+1</Button>
        </Box>
    );
};

export default Counter;
