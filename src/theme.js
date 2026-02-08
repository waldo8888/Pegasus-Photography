import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#E02B20', // Pegasus Red
        },
        secondary: {
            main: '#1a1a1a', // Dark Gray
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5',
        },
        text: {
            primary: '#1a1a1a',
            secondary: '#666666',
        },
    },
    typography: {
        fontFamily: '"Inter", "Outfit", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 800,
        },
        h2: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 700,
        },
        button: {
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 600,
            textTransform: 'none',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '10px 24px',
                },
                containedPrimary: {
                    color: '#fff',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    color: '#1a1a1a',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                },
            },
        },
    },
});

export default theme;
