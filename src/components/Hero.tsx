import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Aimee Strickland
      </Typography>

      <Typography variant="h5" color="text.secondary" gutterBottom>
        Integrations Developer
      </Typography>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        Building APIs, automations, and internal business applications
      </Typography>

      <Typography sx={{ mt: 3, mb: 4 }}>
        I enjoy turning manual business workflows into scalable applications, integrations, and automation.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
        <Button variant="contained" component={Link} to="/projects">
          View Projects
        </Button>
        <Button variant="outlined" component={Link} to="/contact">
          Contact Me
        </Button>
      </Box>
    </Container>
  );
}

export default App;