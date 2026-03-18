import React, { useState } from 'react';
import {
  Box, Container, Typography, Card, CardContent, CardActions,
  Grid, Chip, Button,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FilterListIcon from '@mui/icons-material/FilterList';

const projects = [
  {
    title: 'E-Commerce Web Application',
    description:
      'A full-stack e-commerce platform with real-time inventory management, secure payment flows, product catalog, cart system, and responsive design built with Spring Boot & React.',
    tags: ['Spring Boot', 'React', 'JPA', 'MySQL', 'REST API', 'Material UI'],
    category: 'Full Stack',
    highlight: '30% performance improvement via query optimization',
    highlightColor: '#58a6ff',
    github: 'https://github.com/Prathmeshshingare',
    live: '#',
    accentColor: '#58a6ff',
  },
  {
    title: 'Healthcare EMR System',
    description:
      'Responsive healthcare Electronic Medical Record system with interactive pages, real-time data synchronization, role-based access control, and HIPAA compliance features.',
    tags: ['React', 'Material UI', 'Django', 'MongoDB', 'Redux'],
    category: 'Full Stack',
    highlight: '10+ Responsive UI pages delivered',
    highlightColor: '#a371f7',
    github: 'https://github.com/Prathmeshshingare',
    live: '#',
    accentColor: '#a371f7',
  },
  {
    title: 'Facial Emotion Detection',
    description:
      'ML-based application that detects human emotions in real-time using facial expressions via a CNN model. Won 1st prize at project exhibition.',
    tags: ['Python', 'OpenCV', 'CNN', 'TensorFlow', 'Keras'],
    category: 'AI / ML',
    highlight: 'Classifies Happy, Sad, Angry, Neutral emotions',
    highlightColor: '#a855f7',
    github: 'https://github.com/Prathmeshshingare',
    live: '#',
    accentColor: '#a855f7',
  },
];

const allCategories = ['All', 'Full Stack', 'AI / ML'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: 12,
        background: 'radial-gradient(ellipse at 60% 20%, rgba(168,85,247,0.05) 0%, transparent 50%), #0d1117',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#58a6ff', fontFamily: '"Fira Code",monospace', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', mb: 1 }}>
              {'// featured_projects[]'}
            </Typography>
            <Typography variant="h2" sx={{ color: '#c9d1d9', fontWeight: 700 }}>
              Featured{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg,#58a6ff,#a371f7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Projects
              </Box>
            </Typography>
            <Box sx={{ width: 60, height: 2, background: 'linear-gradient(90deg,#58a6ff,#a371f7)', mx: 'auto', mt: 2, borderRadius: 1 }} />
          </Box>
        </motion.div>

        {/* Filter tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: 6, flexWrap: 'wrap' }}>
          <FilterListIcon sx={{ color: '#8b949e', alignSelf: 'center' }} />
          {allCategories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setFilter(cat)}
              sx={{
                cursor: 'pointer',
                background: filter === cat ? 'rgba(88,166,255,0.15)' : 'rgba(88,166,255,0.04)',
                color: filter === cat ? '#58a6ff' : '#8b949e',
                border: filter === cat ? '1px solid rgba(88,166,255,0.5)' : '1px solid rgba(88,166,255,0.1)',
                fontFamily: '"Fira Code",monospace',
                fontSize: '0.82rem',
                '&:hover': { background: 'rgba(88,166,255,0.1)', color: '#58a6ff' },
                transition: 'all 0.25s ease',
              }}
            />
          ))}
        </Box>

        {/* Cards */}
        <Grid container spacing={3}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <Grid item xs={12} md={6} lg={4} key={project.title}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -10 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: '#161b22',
                      border: `1px solid ${project.accentColor}20`,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        border: `1px solid ${project.accentColor}50`,
                        boxShadow: `0 0 40px ${project.accentColor}15`,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Top line */}
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      {/* Category badge */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Chip
                          label={project.category}
                          size="small"
                          sx={{ background: `${project.accentColor}10`, color: project.accentColor, border: `1px solid ${project.accentColor}30`, fontFamily: '"Fira Code",monospace', fontSize: '0.72rem' }}
                        />
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          {['#ff7b72', '#e3b341', '#58a6ff'].map((c) => (
                            <Box key={c} sx={{ width: 8, height: 8, borderRadius: '50%', background: c, opacity: 0.7 }} />
                          ))}
                        </Box>
                      </Box>

                      <Typography variant="h4" sx={{ color: '#c9d1d9', fontSize: '1.1rem', fontWeight: 600, mb: 1.5 }}>
                        {project.title}
                      </Typography>

                      <Typography variant="body2" sx={{ color: '#8b949e', mb: 3, lineHeight: 1.75, minHeight: 80 }}>
                        {project.description}
                      </Typography>

                      {/* Metric */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, p: 1.5, borderRadius: '6px', background: `${project.highlightColor}08`, border: `1px solid ${project.highlightColor}20` }}>
                        <TrendingUpIcon sx={{ fontSize: 16, color: project.highlightColor, flexShrink: 0 }} />
                        <Typography variant="caption" sx={{ color: project.highlightColor, fontFamily: '"Fira Code",monospace', fontSize: '0.78rem' }}>
                          {project.highlight}
                        </Typography>
                      </Box>

                      {/* Tags */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.7 }}>
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{ background: 'rgba(88,166,255,0.05)', color: '#8b949e', border: '1px solid rgba(88,166,255,0.12)', fontFamily: '"Fira Code",monospace', fontSize: '0.72rem' }}
                          />
                        ))}
                      </Box>
                    </CardContent>

                    <CardActions sx={{ borderTop: `1px solid rgba(88,166,255,0.1)`, px: 3, py: 1.5 }}>
                      <Button
                        size="small"
                        startIcon={<GitHubIcon sx={{ fontSize: '16px !important' }} />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#8b949e', fontFamily: '"Fira Code",monospace', fontSize: '0.78rem', '&:hover': { color: '#58a6ff', background: 'rgba(88,166,255,0.06)' } }}
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        startIcon={<LaunchIcon sx={{ fontSize: '16px !important' }} />}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ color: '#8b949e', fontFamily: '"Fira Code",monospace', fontSize: '0.78rem', '&:hover': { color: '#a371f7', background: 'rgba(163,113,247,0.06)' } }}
                      >
                        Live
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
}
