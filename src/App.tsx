import { Button, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Aimee Strickland
      </Typography>

      <Typography variant="h5" color="text.secondary" gutterBottom>
        Integrations Developer
      </Typography>

      <Typography sx={{ mt: 3, mb: 4 }}>
        Portfolio site built with React, TypeScript, MUI, and .NET.
      </Typography>

      <Button variant="contained">
        View Projects
      </Button>
    </Container>
  );
}

export default App;