import React from 'react';
import { Box, IconButton, Avatar, Container } from '@mui/material';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',        
        bgcolor: ' rgb(239, 125, 163)',       
        py: 3,
        mt: 8,
        position: 'relative',
        bottom: 0,
      }}
    >
    
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box display="flex" gap={4} flexWrap="wrap" justifyContent="center">
          {[FaFacebookF, FaInstagram, FaTwitter, FaPinterestP].map((Icon, idx) => (
            <IconButton
              key={idx}
              color="primary"
              sx={{
                '&:hover': { transform: 'scale(1.3)', color: '#e91e63' },
                transition: 'transform 0.3s, color 0.3s',
              }}
              aria-label={`social media ${Icon.displayName || idx}`}
            >
              <Avatar sx={{ bgcolor: '#eee' }}>
                <Icon />
              </Avatar>
            </IconButton>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
