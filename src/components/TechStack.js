import React from 'react';
import {
  Box, Container, Typography, Card, CardContent, Grid, Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DatasetIcon from '@mui/icons-material/Dataset';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BuildIcon from '@mui/icons-material/Build';

const categories = [
  {
    title: 'Backend',
    icon: <StorageIcon sx={{ fontSize: 32 }} />,
    color: '#58a6ff',
    skills: ['Java', 'Spring Boot', 'Django', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Frontend',
    icon: <DesignServicesIcon sx={{ fontSize: 32 }} />,
    color: '#a371f7',
    skills: ['React.js', 'Material UI', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript ES6+'],
  },
  {
    title: 'Databases',
    icon: <DatasetIcon sx={{ fontSize: 32 }} />,
    color: '#a855f7',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'JPA/Hibernate'],
  },
  {
    title: 'AI / ML',
    icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
    color: '#e3b341',
    skills: ['Machine Learning', 'OpenCV', 'CNN', 'TensorFlow', 'Keras'],
  },
];

const tools = [
  'Git & GitHub', 'Docker', 'Agile/Scrum', 'Figma',
  'Linux', 'MySQL Optimization', 'API Documentation', 'Postman',
];

export default function TechStack() {
  return (
    <Box
      id="tech-stack"
      component="section"
      sx={{
        py: 12,
        background: 'radial-gradient(ellipse at 20% 80%, rgba(88,166,255,0.04) 0%, transparent 60%), #0d1117',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#58a6ff', fontFamily: '"Fira Code",monospace', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', mb: 1 }}>
              {'// tech_stack.json'}
            </Typography>
            <Typography variant="h2" sx={{ color: '#c9d1d9', fontWeight: 700 }}>
              Skills &{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg,#58a6ff,#a371f7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Technologies
              </Box>
            </Typography>
            <Box sx={{ width: 60, height: 2, background: 'linear-gradient(90deg,#58a6ff,#a371f7)', mx: 'auto', mt: 2, borderRadius: 1 }} />
          </Box>
        </motion.div>

        {/* Category Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {categories.map((cat, i) => (
            <Grid item xs={12} sm={6} md={3} key={cat.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -8 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: '#161b22',
                    border: `1px solid ${cat.color}20`,
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover': {
                      border: `1px solid ${cat.color}50`,
                      boxShadow: `0 0 30px ${cat.color}15`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${cat.color}, transparent)` }} />
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ color: cat.color, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      {cat.icon}
                    </Box>
                    <Typography variant="h6" sx={{ color: '#c9d1d9', mb: 2.5, fontWeight: 600, fontSize: '1rem' }}>
                      {cat.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                      {cat.skills.map((skill) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                        >
                          <Chip
                            label={skill}
                            size="small"
                            sx={{
                              background: `${cat.color}10`,
                              color: '#c9d1d9',
                              border: `1px solid ${cat.color}30`,
                              fontFamily: '"Fira Code",monospace',
                              fontSize: '0.75rem',
                              '&:hover': { background: `${cat.color}20`, borderColor: cat.color },
                              transition: 'all 0.2s ease',
                            }}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Tools & Other */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
          <Box
            sx={{
              p: 4,
              background: '#161b22',
              border: '1px solid rgba(88,166,255,0.15)',
              borderRadius: '10px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <BuildIcon sx={{ color: '#58a6ff', fontSize: 20 }} />
              <Typography variant="h6" sx={{ color: '#c9d1d9', fontWeight: 600 }}>
                Other Tools & Practices
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
              {tools.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Chip
                    label={t}
                    sx={{
                      background: 'rgba(88,166,255,0.06)',
                      color: '#8b949e',
                      border: '1px solid rgba(88,166,255,0.2)',
                      fontFamily: '"Fira Code",monospace',
                      fontSize: '0.82rem',
                      '&:hover': { background: 'rgba(88,166,255,0.12)', color: '#58a6ff', borderColor: 'rgba(88,166,255,0.4)' },
                      transition: 'all 0.2s ease',
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
