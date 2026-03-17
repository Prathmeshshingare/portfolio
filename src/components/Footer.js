import React from 'react';
import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const socials = [
  { icon: <GitHubIcon />, href: 'https://github.com/Prathmeshshingare', label: 'GitHub' },
  { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/prathmesh-shingare-4b216b235', label: 'LinkedIn' },
  { icon: <EmailIcon />, href: 'mailto:prathmeshshingare4@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        background: '#0d1117',
        borderTop: '1px solid rgba(88,166,255,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top glow */}
      <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 200, height: 1, background: 'linear-gradient(90deg, transparent, #58a6ff, transparent)', opacity: 0.5 }} />

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 3 }}>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Typography
              sx={{
                fontFamily: '"Fira Code", monospace',
                fontWeight: 700,
                fontSize: '1.3rem',
                color: '#58a6ff',
                cursor: 'pointer',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Box component="span" sx={{ color: '#8b949e' }}>{'<'}</Box>
              PS
              <Box component="span" sx={{ color: '#8b949e' }}>{' />'}</Box>
            </Typography>
          </motion.div>

          {/* Socials */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socials.map((s) => (
              <motion.div key={s.label} whileHover={{ y: -3 }}>
                <IconButton
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  sx={{
                    color: '#8b949e',
                    border: '1px solid rgba(88,166,255,0.15)',
                    background: 'rgba(88,166,255,0.03)',
                    '&:hover': { color: '#58a6ff', border: '1px solid rgba(88,166,255,0.4)', background: 'rgba(88,166,255,0.08)', boxShadow: '0 0 15px rgba(88,166,255,0.15)' },
                    transition: 'all 0.25s ease',
                  }}
                >
                  {s.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>

          {/* Copyright */}
          <Typography variant="caption" sx={{ color: '#8b949e', fontFamily: '"Fira Code",monospace', fontSize: '0.78rem', textAlign: 'center' }}>
            © {new Date().getFullYear()} Prathmesh Shingare
            <Box component="span" sx={{ color: '#58a6ff' }}> // </Box>
            Built with React & MUI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
