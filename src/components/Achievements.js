import React from 'react';
import {
  Box, Container, Typography, Card, CardContent, Grid, LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';

const achievements = [
  {
    icon: '🏆',
    title: 'Winner – Best Innovative Team Award',
    event: 'Orchathon 2025',
    description:
      'Recognized for developing an innovative and impactful technical solution in a competitive hackathon environment.',
    color: '#e3b341',
  },
  {
    icon: '🥇',
    title: '1st Prize – Project Exhibition',
    event: 'Facial Emotion Detection System',
    description:
      'Awarded for building a machine learning-based emotion detection system using computer vision techniques (OpenCV + CNN).',
    color: '#58a6ff',
  },
];

const stats = [
  { value: '2+', label: 'Major Awards', color: '#e3b341' },
  { value: '100%', label: 'Dedication', color: '#58a6ff' },
  { value: '9.43', label: 'CGPA', color: '#a371f7' },
  { value: '5+', label: 'Tech Domains', color: '#a855f7' },
];

export default function Achievements() {
  return (
    <Box
      id="achievements"
      component="section"
      sx={{
        py: 12,
        background: 'radial-gradient(ellipse at 80% 80%, rgba(227,179,65,0.04) 0%, transparent 50%), #0d1117',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Floating orbs */}
      <Box sx={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(227,179,65,0.06) 0%, transparent 70%)', top: 80, right: -60, pointerEvents: 'none', animation: 'float 8s ease-in-out infinite' }} />
      <Box sx={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(88,166,255,0.05) 0%, transparent 70%)', bottom: 80, left: -60, pointerEvents: 'none' }} />

      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#e3b341', fontFamily: '"Fira Code",monospace', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', mb: 1 }}>
              {'// achievements.log'}
            </Typography>
            <Typography variant="h2" sx={{ color: '#c9d1d9', fontWeight: 700 }}>
              Awards &{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg,#e3b341,#ff7b72)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Achievements
              </Box>
            </Typography>
            <Box sx={{ width: 60, height: 2, background: 'linear-gradient(90deg,#e3b341,#ff7b72)', mx: 'auto', mt: 2, borderRadius: 1 }} />
          </Box>
        </motion.div>

        {/* Achievement Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {achievements.map((a, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -8 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: '#161b22',
                    border: `2px solid ${a.color}30`,
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      border: `2px solid ${a.color}60`,
                      boxShadow: `0 0 40px ${a.color}15`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${a.color}, transparent)` }} />
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                      <Box sx={{ fontSize: '2.8rem', minWidth: 55, textAlign: 'center', filter: 'drop-shadow(0 0 12px rgba(227,179,65,0.4))' }}>
                        {a.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ color: '#c9d1d9', fontWeight: 700, mb: 0.5, fontSize: '1.05rem' }}>
                          {a.title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: a.color, fontFamily: '"Fira Code",monospace', fontWeight: 600, display: 'block', mb: 1.5 }}>
                          $ {a.event}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#8b949e', lineHeight: 1.7, mb: 2 }}>
                          {a.description}
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={100}
                          sx={{
                            height: 3,
                            borderRadius: 2,
                            background: 'rgba(255,255,255,0.06)',
                            '& .MuiLinearProgress-bar': {
                              background: `linear-gradient(90deg, ${a.color}, #fff)`,
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <Grid container spacing={3}>
            {stats.map((s, i) => (
              <Grid item xs={6} sm={3} key={s.label}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      border: `1px solid ${s.color}20`,
                      borderRadius: '10px',
                      background: '#161b22',
                      '&:hover': { border: `1px solid ${s.color}50`, boxShadow: `0 0 20px ${s.color}12` },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{ color: s.color, fontFamily: '"Fira Code",monospace', fontWeight: 700, fontSize: '2rem', mb: 0.5 }}
                    >
                      {s.value}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#8b949e', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.72rem' }}>
                      {s.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
