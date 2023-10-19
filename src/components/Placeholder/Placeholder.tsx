import { Box, Typography } from '@mui/material';
import React from 'react';

const Placeholder = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} height={"100%"}>
      <Typography variant="h1" fontFamily="">
        Christian Rodrigues
      </Typography>
      <Typography variant="h4">
        Desenvolvedor Full Stack
      </Typography>
    </Box>
  );
}

export default Placeholder;