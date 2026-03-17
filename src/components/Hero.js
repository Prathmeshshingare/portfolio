import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import TerminalIcon from '@mui/icons-material/Terminal';

const TITLES = [
  'Full Stack Developer',
  'Java & Spring Boot Expert',
  'React UI Engineer',
  'Problem Solver',
];

function Typewriter({ texts }) {
  const [displayed, setDisplayed] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx((t) => (t + 1) % texts.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts]);

  return (
    <Box component="span" sx={{ color: '#58a6ff', fontFamily: '"Fira Code", monospace' }}>
      {displayed}
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          background: '#58a6ff',
          ml: '2px',
          verticalAlign: 'middle',
          animation: 'blink 1s step-end infinite',
        }}
      />
    </Box>
  );
}

const stats = [
  { value: '9.43', label: 'CGPA', color: '#58a6ff' },
  { value: '2+', label: 'Awards', color: '#a371f7' },
  { value: '3+', label: 'Projects', color: '#a855f7' },
  { value: '2+', label: 'Companies', color: '#e3b341' },
];

export default function Hero() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 12,
        pb: 8,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(88,166,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(163,113,247,0.05) 0%, transparent 50%), #0d1117',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid lines background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(88,166,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(88,166,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            {/* Terminal badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  mb: 3,
                  borderRadius: '4px',
                  border: '1px solid rgba(88,166,255,0.3)',
                  background: 'rgba(88,166,255,0.06)',
                  fontFamily: '"Fira Code", monospace',
                  fontSize: '0.8rem',
                  color: '#58a6ff',
                }}
              >
                <TerminalIcon sx={{ fontSize: 16 }} />
                {'~$ ./welcome.sh'}
              </Box>
            </motion.div>

            {/* Name */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <Typography
                variant="h1"
                sx={{
                  mb: 1,
                  fontWeight: 800,
                  color: '#c9d1d9',
                  lineHeight: 1.1,
                }}
              >
                Hi, I'm{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #58a6ff 0%, #a371f7 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Prathmesh
                </Box>
              </Typography>
              <Typography
                variant="h1"
                sx={{ mb: 2, fontWeight: 800, color: '#c9d1d9', lineHeight: 1.1 }}
              >
                Shingare
              </Typography>
            </motion.div>

            {/* Typewriter */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 3,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  color: '#8b949e',
                }}
              >
                {'// '}<Typewriter texts={TITLES} />
              </Typography>
            </motion.div>

            {/* Bio */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <Typography
                variant="body1"
                sx={{ mb: 4, color: '#8b949e', maxWidth: 620, lineHeight: 1.8 }}
              >
                Full Stack Developer with expertise in building scalable backend systems using{' '}
                <Box component="span" sx={{ color: '#58a6ff', fontFamily: '"Fira Code",monospace' }}>Java & Spring Boot</Box>{' '}
                and responsive frontend applications using{' '}
                <Box component="span" sx={{ color: '#a371f7', fontFamily: '"Fira Code",monospace' }}>React & Material UI</Box>.
                Experienced in AI/ML — built a Facial Emotion Detection System using computer vision.
                Currently contributing to healthcare EMR solutions at Vidai Solutions. B.Tech CSE — CGPA:{' '}
                <Box component="span" sx={{ color: '#58a6ff', fontFamily: '"Fira Code",monospace' }}>9.43</Box>.
              </Typography>
            </motion.div>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  sx={{ px: 4, py: 1.4 }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<FileDownloadIcon />}
                  sx={{ px: 4, py: 1.4 }}
                  onClick={() => {
                    const a = document.createElement('a');
                    a.href = '#';
                    a.download = 'Prathmesh_Shingare_Resume.pdf';
                    a.click();
                  }}
                >
                  Resume
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Terminal Panel */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Box
                sx={{
                  background: '#161b22',
                  border: '1px solid rgba(88,166,255,0.2)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 0 40px rgba(88,166,255,0.1)',
                  fontFamily: '"Fira Code", monospace',
                }}
              >
                {/* Terminal title bar */}
                <Box
                  sx={{
                    background: '#111f35',
                    px: 2,
                    py: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    borderBottom: '1px solid rgba(88,166,255,0.1)',
                  }}
                >
                  {['#ff7b72', '#e3b341', '#58a6ff'].map((c) => (
                    <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                  <Typography sx={{ ml: 1, fontSize: '0.75rem', color: '#8b949e', fontFamily: 'inherit' }}>
                    about.js
                  </Typography>
                </Box>
                {/* Terminal body */}
                <Box sx={{ p: 2.5, fontSize: '0.8rem', lineHeight: 2 }}>
                  {[
                    { key: 'name', value: '"Prathmesh Shingare"', c: '#a371f7' },
                    { key: 'role', value: '"Full Stack Developer"', c: '#58a6ff' },
                    { key: 'cgpa', value: '9.43', c: '#e3b341' },
                    { key: 'city', value: '"Pune, India"', c: '#a855f7' },
                    { key: 'available', value: 'true', c: '#58a6ff' },
                  ].map(({ key, value, c }) => (
                    <Box key={key} component="div">
                      <Box component="span" sx={{ color: '#8b949e' }}>{'  '}</Box>
                      <Box component="span" sx={{ color: '#e07070' }}>{key}</Box>
                      <Box component="span" sx={{ color: '#8b949e' }}>{': '}</Box>
                      <Box component="span" sx={{ color: c }}>{value}</Box>
                      <Box component="span" sx={{ color: '#8b949e' }}>{','}</Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Grid container spacing={2} sx={{ mt: 6 }}>
            {stats.map((s) => (
              <Grid item xs={6} sm={3} key={s.label}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                    border: '1px solid rgba(88,166,255,0.1)',
                    borderRadius: '8px',
                    background: 'rgba(88,166,255,0.03)',
                    '&:hover': {
                      border: `1px solid ${s.color}40`,
                      background: `${s.color}08`,
                      boxShadow: `0 0 20px ${s.color}20`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: s.color,
                      fontFamily: '"Fira Code", monospace',
                      fontWeight: 700,
                      fontSize: '1.8rem',
                      mb: 0.5,
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {s.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
