import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemText, useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', id: 'hero' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'tech-stack' },
  { label: 'Projects', id: 'projects' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: trigger
            ? 'rgba(2, 12, 20, 0.92)'
            : 'transparent',
          backdropFilter: trigger ? 'blur(16px)' : 'none',
          borderBottom: trigger
            ? '1px solid rgba(88, 166, 255, 0.15)'
            : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Fira Code", monospace',
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#58a6ff',
                cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
              onClick={() => scrollTo('hero')}
            >
              <Box component="span" sx={{ color: '#8b949e' }}>{'<'}</Box>
              PS
              <Box component="span" sx={{ color: '#8b949e' }}>{' />'}</Box>
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              >
                <Button
                  onClick={() => scrollTo(link.id)}
                  sx={{
                    color: activeSection === link.id ? '#58a6ff' : '#8b949e',
                    fontFamily: '"Fira Code", monospace',
                    fontSize: '0.85rem',
                    px: 1.5,
                    py: 1,
                    position: 'relative',
                    '&:hover': { color: '#58a6ff', background: 'transparent' },
                    '&::before': activeSection === link.id
                      ? {
                          content: '"▸"',
                          position: 'absolute',
                          left: 4,
                          color: '#58a6ff',
                          fontSize: '0.7rem',
                        }
                      : {},
                  }}
                >
                  {link.label}
                </Button>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <Button
                variant="outlined"
                size="small"
                sx={{ ml: 2, fontFamily: '"Fira Code", monospace', fontSize: '0.8rem' }}
                onClick={() => scrollTo('contact')}
              >
                Hire Me
              </Button>
            </motion.div>
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#58a6ff' }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                width: 260,
                background: '#161b22',
                borderLeft: '1px solid rgba(88, 166, 255, 0.2)',
                p: 3,
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
              <Typography
                sx={{ fontFamily: '"Fira Code", monospace', color: '#58a6ff', fontWeight: 700 }}
              >
                {'<PS />'}
              </Typography>
              <IconButton sx={{ color: '#8b949e' }} onClick={() => setDrawerOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navLinks.map((link) => (
                <ListItem
                  key={link.id}
                  button
                  onClick={() => { scrollTo(link.id); setDrawerOpen(false); }}
                  sx={{
                    mb: 1,
                    borderRadius: 1,
                    color: activeSection === link.id ? '#58a6ff' : '#8b949e',
                    borderLeft: activeSection === link.id
                      ? '2px solid #58a6ff'
                      : '2px solid transparent',
                    '&:hover': { color: '#58a6ff', background: 'rgba(88,166,255,0.06)' },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '0.95rem',
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
}
