import React, { useState, useEffect } from 'react';
import {
  Box, Container, Typography, TextField, Button, Grid,
  Card, CardContent, IconButton, Snackbar, Alert, CircularProgress, Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ───────────────────────────────────────────────────────────
// Replace these with your real EmailJS credentials:
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
// ──────────────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'prathmeshshingare4@gmail.com',
    href: 'mailto:prathmeshshingare4@gmail.com',
    color: '#58a6ff',
    copyable: true,
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+91 9890706084',
    href: 'tel:+919890706084',
    color: '#a371f7',
    copyable: false,
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'prathmesh-shingare',
    href: 'https://linkedin.com/in/prathmesh-shingare-4b216b235',
    color: '#0077b5',
    copyable: false,
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: '@Prathmeshshingare',
    href: 'https://github.com/Prathmeshshingare',
    color: '#c9d1d9',
    copyable: false,
  },
];

const fieldSx = (color = '#58a6ff') => ({
  '& .MuiOutlinedInput-root': {
    color: '#c9d1d9',
    fontFamily: '"Fira Code", monospace',
    fontSize: '0.9rem',
    '& fieldset': { borderColor: 'rgba(88,166,255,0.2)' },
    '&:hover fieldset': { borderColor: 'rgba(88,166,255,0.4)' },
    '&.Mui-focused fieldset': {
      borderColor: color,
      boxShadow: `0 0 0 3px ${color}15`,
    },
    background: 'rgba(88,166,255,0.02)',
  },
  '& .MuiInputLabel-root': {
    color: '#8b949e',
    fontFamily: '"Fira Code", monospace',
    fontSize: '0.9rem',
    '&.Mui-focused': { color: color },
  },
});

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    // Only initialize if proper keys are set (not equal to placeholder values)
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
       emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Check if the credentials are still placeholders
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
       setTimeout(() => {
         setSnack({ 
           open: true, 
           message: '⚠️ EmailJS is not configured! Please update your credentials in Contact.js to send emails.', 
           severity: 'warning' 
         });
         setLoading(false);
       }, 500);
       return;
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: 'prathmeshshingare4@gmail.com',
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      });
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setSnack({ open: true, message: '✅ Message sent! I\'ll get back to you soon.', severity: 'success' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      // Give a more descriptive error if possible
      const errorMsg = err.text ? err.text : 'Failed to send. Please try emailing me directly.';
      setSnack({ open: true, message: `❌ ${errorMsg}`, severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('prathmeshshingare4@gmail.com');
    setSnack({ open: true, message: '📋 Email copied to clipboard!', severity: 'success' });
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 12,
        background: 'radial-gradient(ellipse at 30% 60%, rgba(88,166,255,0.05) 0%, transparent 60%), #0d1117',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="caption" sx={{ color: '#58a6ff', fontFamily: '"Fira Code",monospace', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', mb: 1 }}>
              {'// contact.init()'}
            </Typography>
            <Typography variant="h2" sx={{ color: '#c9d1d9', fontWeight: 700 }}>
              Get In{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg,#58a6ff,#a371f7)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Touch
              </Box>
            </Typography>
            <Box sx={{ width: 60, height: 2, background: 'linear-gradient(90deg,#58a6ff,#a371f7)', mx: 'auto', mt: 2, borderRadius: 1 }} />
            <Typography variant="body2" sx={{ color: '#8b949e', mt: 2, fontFamily: '"Fira Code",monospace' }}>
              {'>'} Always open to new opportunities and collaborations
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Left — Contact Info */}
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {contactInfo.map((info) => (
                  <Card
                    key={info.label}
                    sx={{
                      background: '#161b22',
                      border: `1px solid ${info.color}20`,
                      '&:hover': { border: `1px solid ${info.color}50`, boxShadow: `0 0 20px ${info.color}10` },
                      transition: 'all 0.3s ease',
                      cursor: info.href !== '#' ? 'pointer' : 'default',
                    }}
                    onClick={() => info.href !== '#' && window.open(info.href, '_blank')}
                  >
                    <CardContent sx={{ p: '14px 16px !important', display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ color: info.color, display: 'flex' }}>{info.icon}</Box>
                      <Box sx={{ flex: 1, overflow: 'hidden' }}>
                        <Typography variant="caption" sx={{ color: '#8b949e', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {info.label}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#c9d1d9', fontFamily: '"Fira Code",monospace', fontSize: '0.8rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {info.value}
                        </Typography>
                      </Box>
                      {info.copyable && (
                        <IconButton
                          size="small"
                          onClick={(e) => { e.stopPropagation(); copyEmail(); }}
                          sx={{ color: '#8b949e', '&:hover': { color: '#58a6ff', background: 'rgba(88,166,255,0.08)' } }}
                        >
                          <ContentCopyIcon fontSize="small" />
                        </IconButton>
                      )}
                    </CardContent>
                  </Card>
                ))}

                {/* Availability badge */}
                <Box sx={{ mt: 2, p: 2, borderRadius: '8px', border: '1px solid rgba(88,166,255,0.2)', background: 'rgba(88,166,255,0.04)', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#58a6ff', boxShadow: '0 0 10px #58a6ff', animation: 'glowPulse 2s ease-in-out infinite', flexShrink: 0 }} />
                  <Box>
                    <Typography variant="caption" sx={{ color: '#58a6ff', fontFamily: '"Fira Code",monospace', fontWeight: 600, display: 'block' }}>
                      Available for work
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#8b949e', fontSize: '0.75rem' }}>
                      Open to full-time & freelance
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right — Form */}
          <Grid item xs={12} md={8}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Card
                sx={{
                  background: '#161b22',
                  border: '1px solid rgba(88,166,255,0.15)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,#58a6ff,#a371f7,transparent)' }} />

                {/* Terminal header */}
                <Box sx={{ px: 3, py: 2, borderBottom: '1px solid rgba(88,166,255,0.1)', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  {['#ff7b72', '#e3b341', '#58a6ff'].map((c) => (
                    <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                  ))}
                  <Typography sx={{ ml: 1, fontFamily: '"Fira Code",monospace', fontSize: '0.78rem', color: '#8b949e' }}>
                    send_message.sh
                  </Typography>
                </Box>

                <CardContent sx={{ p: 4 }}>
                  {sent ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                      <Box sx={{ textAlign: 'center', py: 6 }}>
                        <CheckCircleIcon sx={{ fontSize: 64, color: '#58a6ff', mb: 2 }} />
                        <Typography variant="h5" sx={{ color: '#c9d1d9', mb: 1, fontFamily: '"Fira Code",monospace' }}>
                          Message Sent!
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#8b949e', mb: 3 }}>
                          Thanks for reaching out. I'll get back to you as soon as possible.
                        </Typography>
                        <Button variant="outlined" onClick={() => setSent(false)}>
                          Send Another
                        </Button>
                      </Box>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={2.5}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth label="Name" name="name" value={form.name}
                            onChange={handleChange} required sx={fieldSx()}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth label="Email" name="email" type="email"
                            value={form.email} onChange={handleChange} required sx={fieldSx('#a371f7')}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth label="Subject" name="subject" value={form.subject}
                            onChange={handleChange} required sx={fieldSx()}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth label="Message" name="message" value={form.message}
                            onChange={handleChange} required multiline rows={5} sx={fieldSx()}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            size="large"
                            disabled={loading}
                            endIcon={loading ? <CircularProgress size={18} sx={{ color: '#0d1117' }} /> : <SendIcon />}
                            sx={{ py: 1.5, fontSize: '1rem' }}
                          >
                            {loading ? 'Sending...' : 'Send Message'}
                          </Button>
                          <Typography variant="caption" sx={{ color: '#8b949e', fontFamily: '"Fira Code",monospace', display: 'block', mt: 1.5, textAlign: 'center' }}>
                            {'>'} Powered by EmailJS — your message goes straight to my inbox
                          </Typography>
                        </Grid>
                      </Grid>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          severity={snack.severity}
          onClose={() => setSnack({ ...snack, open: false })}
          sx={{
            background: snack.severity === 'success' ? 'rgba(88,166,255,0.12)' : 'rgba(255,123,114,0.12)',
            color: snack.severity === 'success' ? '#58a6ff' : '#ff7b72',
            border: `1px solid ${snack.severity === 'success' ? 'rgba(88,166,255,0.3)' : 'rgba(255,123,114,0.3)'}`,
            fontFamily: '"Fira Code",monospace',
            backdropFilter: 'blur(10px)',
          }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
