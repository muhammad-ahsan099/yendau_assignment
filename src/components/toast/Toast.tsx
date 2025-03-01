import React from "react";
import { Box } from "@chakra-ui/react";
import { CircleCheck } from 'lucide-react';


const Toast: React.FC<{ count: number }> = ({ count }) => (
    <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        p={3}
        gap={4}
        background="radial-gradient(53.57% 282.15% at 2.14% 100%, rgba(116, 200, 152, 0.20) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F"
        boxShadow= "0px 4px 8px rgba(40, 41, 50, 0.12), 0px 8px 16px rgba(40, 41, 50, 0.16), 0px 12px 24px rgba(40, 41, 50, 0.20),0px 16px 32px rgba(0, 0, 0, 0.4)"
        borderRadius="8px"
        color="white"
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="500"
        lineHeight="16px"
        border="1px solid transparent"
        style={{
            borderImageSource:
                "radial-gradient(circle, rgba(116, 200, 152, 0.65) 0%, rgba(116, 200, 152, 0.1) 100%)",
            borderImageSlice: 1,
            WebkitMaskImage:
                "radial-gradient(circle at center, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)",
            maskImage:
                "radial-gradient(circle at center, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)",

        }}
    >
        <CircleCheck size={24} color="#74C898" />
        <Box display="flex" flexDirection="column">
            <p>Incremented</p>
            <p>Counter is now {count + 1}</p>
        </Box>
    </Box>
);

export default Toast;