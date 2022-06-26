import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HA from '../assets/images/HA.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={HA} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="21px" textAlign="center" pb="40px">Made with ❤️ by Hislordship </Typography>
    <Typography variant="h5" sx={{ fontSize: { lg: '23px', xs: '10px' } }} mt="1px" textAlign="center" pb="20px">|Contact Via +233248083847|  </Typography>
  </Box>
);

export default Footer;