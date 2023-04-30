import MainPublicLayout from '../../layout/PublicLayout';
import { Avatar, Button, CssBaseline, TextField,
Box, Typography, Container, Alert, CircularProgress} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

function LoginPage() {

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const { login } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current?.value, passwordRef.current?.value );
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to log in');
    }
    
    setLoading(false);
  }

  return (
    <MainPublicLayout>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'text.primary' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          {error && <Alert severity="error">Error: {error}</Alert>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
							inputRef={emailRef}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
							inputRef={passwordRef}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            {(!loading) ? <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'text.primary' }}
            >
              Log In
            </Button>: <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></div>}
          </Box>
          <Typography sx = {{fontSize: '1rem'}}>
            Need an account? <Link to = "/signup" style={{textDecoration: 'none'}}>Sign up here</Link>
          </Typography>
          <Typography sx = {{fontSize: '1rem', marginTop: '1rem'}}>
            Forgot your password? <Link to = "/forgot-password" style={{textDecoration: 'none'}}>Click here</Link>
          </Typography>
        </Box>
      </Container>
    </MainPublicLayout>
  )
}

export default LoginPage