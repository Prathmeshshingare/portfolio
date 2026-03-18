import React from 'react';
import {
  Box, Container, Typography, Card, CardContent, Chip,
} from '@mui/material';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
  TimelineContent, TimelineDot, TimelineOppositeContent,
} from '@mui/lab';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const experiences = [
  {
    company: 'Capgemini (Symbiosis Program)',
    position: 'Full Stack Developer',
    duration: 'Jan 2025 – Apr 2025',
    type: 'Internship',
    color: '#a371f7',
    icon: <StorageIcon fontSize="small" />,
    description:
      'Built enterprise-level applications with Java and Spring Boot, specializing in backend optimization and RESTful API design.',
    highlights: [
      '20% reduction in API response time via optimization',
      'Java Spring Boot microservices architecture',
      'Enterprise application development',
      'RESTful API design and implementation',
    ],
    tags: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'JPA/Hibernate'],
  },
  {
    company: 'Vidai Solutions',
    position: 'Software Developer',
    duration: 'Jan 2026 – Mar 2026',
    type: 'Full-time',
    color: '#58a6ff',
    icon: <CodeIcon fontSize="small" />,
    description:
      'Developed responsive healthcare EMR solutions using React and Material UI. Built and implemented RESTful APIs using Django for seamless frontend-backend communication.',
    highlights: [
      '10+ responsive UI pages for Healthcare EMR',
      'RESTful APIs with Django for frontend-backend integration',
      'React ecosystem and Material UI mastery',
      'Healthcare domain knowledge & HIPAA compliance',
    ],
    tags: ['React', 'Material UI', 'Django', 'REST API', 'MongoDB', 'Redux'],
  },
];

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true, margin: '-80px' }}
    >
      <Card
        sx={{
          background: '#161b22',
          border: `1px solid ${exp.color}20`,
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            border: `1px solid ${exp.color}60`,
            boxShadow: `0 0 30px ${exp.color}15`,
          },
          transition: 'all 0.3s ease',
        }}
      >
        {/* Top accent line */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />

        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
            <Box>
              <Typography variant="h4" sx={{ color: exp.color, fontFamily: '"Fira Code",monospace', fontSize: '1.1rem' }}>
                {exp.position}
              </Typography>
              <Typography variant="body2" sx={{ color: '#c9d1d9', fontWeight: 600, mt: 0.3 }}>
                {exp.company}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography sx={{ fontFamily: '"Fira Code",monospace', fontSize: '0.78rem', color: '#8b949e' }}>
                {exp.duration}
              </Typography>
              <Chip
                label={exp.type}
                size="small"
                sx={{ mt: 0.5, background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}40`, fontFamily: '"Fira Code",monospace', fontSize: '0.7rem' }}
              />
            </Box>
          </Box>

          <Typography variant="body2" sx={{ color: '#8b949e', mb: 2, lineHeight: 1.7 }}>
            {exp.description}
          </Typography>

          <Box sx={{ mb: 2 }}>
            {exp.highlights.map((h, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.6 }}>
                <FiberManualRecordIcon sx={{ fontSize: 8, color: exp.color, mt: '6px', flexShrink: 0 }} />
                <Typography variant="caption" sx={{ color: '#8b949e', fontSize: '0.85rem' }}>
                  {h}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
            {exp.tags.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{ background: 'rgba(88,166,255,0.06)', color: '#8b949e', border: '1px solid rgba(88,166,255,0.15)', fontFamily: '"Fira Code",monospace', fontSize: '0.75rem' }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: 12,
        background: 'radial-gradient(ellipse at 80% 50%, rgba(163,113,247,0.04) 0%, transparent 60%), #0d1117',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#58a6ff', fontFamily: '"Fira Code",monospace', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', mb: 1 }}>
              {'// work history'}
            </Typography>
            <Typography variant="h2" sx={{ color: '#c9d1d9', fontWeight: 700 }}>
              Professional{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg,#58a6ff,#a371f7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Experience
              </Box>
            </Typography>
            <Box sx={{ width: 60, height: 2, background: 'linear-gradient(90deg,#58a6ff,#a371f7)', mx: 'auto', mt: 2, borderRadius: 1 }} />
          </Box>
        </motion.div>

        {/* Desktop: MUI Timeline */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Timeline position="alternate">
            {experiences.map((exp, i) => (
              <TimelineItem key={i}>
                <TimelineOppositeContent sx={{ flex: 0.3 }}>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }}>
                    <Typography sx={{ color: '#8b949e', fontFamily: '"Fira Code",monospace', fontSize: '0.8rem', pt: 2 }}>
                      {exp.duration}
                    </Typography>
                  </motion.div>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
                    <TimelineDot
                      sx={{
                        background: exp.color,
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 0 20px ${exp.color}50`,
                        color: '#0d1117',
                      }}
                    >
                      {exp.icon}
                    </TimelineDot>
                  </motion.div>
                  {i < experiences.length - 1 && (
                    <TimelineConnector sx={{ background: 'rgba(88,166,255,0.2)' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ flex: 0.7, pb: 6 }}>
                  <ExperienceCard exp={exp} index={i} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Mobile: simple card stack */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 3 }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
