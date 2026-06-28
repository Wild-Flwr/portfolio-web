import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme } from './theme/theme';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
</ThemeProvider>
);