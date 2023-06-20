import MainPublicLayout from '../../layout/PublicLayout';
import { Avatar, Button, CssBaseline, TextField,
Box, Typography, Container, Alert, CircularProgress} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function SignUpPage() {

	const passwordRef = useRef<HTMLInputElement>(null);
	const passwordTwoRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
  

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const { signup, currentUser } = useAuth();

  const navigate = useNavigate();


  async function handleSubmit(e: any) {
    e.preventDefault();

    if (passwordRef.current?.value !== passwordTwoRef.current?.value) {
      return setError('Passwords do not match.');
    }

    if (passwordRef.current === null || passwordRef.current.value.length < 6) {
      return setError('Password must be at least 6 characters')
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current?.value, passwordRef.current?.value );
      navigate('/dashboard');
    } catch (err: any) {
      if (err.toString().includes("email address is badly formatted")) setError("Invalid email");
      else setError(err.toString());
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
            Sign up
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
						<TextField
              margin="normal"
							inputRef={passwordTwoRef}
              required
              fullWidth
              name="passwordTwo"
              label="Confirm Password"
              type="password"
              id="passwordTwo"
            />
            {(!loading) ? <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'text.primary' }}
            >
              Sign Up
            </Button> : <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></div>}
          </Box>
          <Typography sx = {{fontSize: '1rem'}}>
            Already have an account? <Link to = "/login" style={{textDecoration: 'none'}}>Login here</Link>
          </Typography>
        </Box>
      </Container>
		</MainPublicLayout>
	);
}

export default SignUpPage