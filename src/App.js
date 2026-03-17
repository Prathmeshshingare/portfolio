import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const devTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0d1117',
      paper: '#161b22',
    },
    primary: {
      main: '#58a6ff',
      light: '#5fffa8',
      dark: '#00cc6a',
      contrastText: '#0d1117',
    },
    secondary: {
      main: '#a371f7',
      light: '#69e4ff',
      dark: '#0099bb',
    },
    error: { main: '#ff7b72' },
    warning: { main: '#e3b341' },
    success: { main: '#58a6ff' },
    text: {
      primary: '#c9d1d9',
      secondary: '#8b949e',
    },
  },
  typography: {
    fontFamily: '"Inter", "Fira Code", monospace',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
      '@media (max-width:768px)': { fontSize: '2.2rem' },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (max-width:768px)': { fontSize: '1.8rem' },
    },
    h3: { fontWeight: 600, fontSize: '1.5rem' },
    h4: { fontWeight: 600, fontSize: '1.25rem' },
    body1: { fontSize: '1.05rem', lineHeight: 1.7 },
    body2: { fontSize: '0.95rem', lineHeight: 1.6 },
    caption: { fontFamily: '"Fira Code", monospace', fontSize: '0.85rem' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.95rem',
          borderRadius: '6px',
          transition: 'all 0.25s ease',
          letterSpacing: '0.02em',
        },
        contained: {
          background: 'linear-gradient(135deg, #58a6ff 0%, #a371f7 100%)',
          color: '#0d1117',
          boxShadow: '0 0 20px rgba(88, 166, 255, 0.2)',
          '&:hover': {
            background: 'linear-gradient(135deg, #00cc6a 0%, #00a8cc 100%)',
            boxShadow: '0 0 30px rgba(88, 166, 255, 0.5)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderColor: '#58a6ff',
          color: '#58a6ff',
          '&:hover': {
            backgroundColor: 'rgba(88, 166, 255, 0.08)',
            borderColor: '#5fffa8',
            boxShadow: '0 0 20px rgba(88, 166, 255, 0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.8rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={devTheme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
