import MainPublicLayout from "../../layout/PublicLayout"
import { useRef } from "react";
import { Avatar, Button, CssBaseline, TextField,
Box, Typography, Container, Alert, CircularProgress} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

function ForgotPassword() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const { resetPassword } = useAuth();

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);

      await resetPassword(emailRef.current?.value);
      setMessage('Check your inbox for a surprise :)')
    } catch (err) {
      setError('Failed to reset password');
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
            Reset Password
          </Typography>
          {error && <Alert severity="error">Error: {error}</Alert>}
          {message && <Alert severity="success">Success: {message}</Alert>}
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
            {(!loading) ? <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'text.primary' }}
            >
              Send Email
            </Button> : <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></div>}
          </Box>
          <Typography sx = {{fontSize: '1rem', marginTop: '1rem'}}>
            Already have an account? <Link to = "/login" style={{textDecoration: 'none'}}>Login here</Link>
          </Typography>
        </Box>
      </Container>
    </MainPublicLayout>
  )
}

export default ForgotPassword