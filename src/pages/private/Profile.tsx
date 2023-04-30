import MainPrivateLayout from '../../layout/PrivateLayout';
import { Avatar, Button, CssBaseline, TextField,
Box, Typography, Container, Alert, Grid} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { useAuth } from '../../contexts/AuthContext';
import '../../styling/Profile.css'

function Profile() {

	const isDarkMode = useSelector((state: any) => state.isDarkMode);

	const navigate = useNavigate();

	let styles: any;
	if (isDarkMode) {
		styles = {
			body: {
				backgroundColor: '#8D8D8D',
				color: '#2d2d2d',
				height: '100vh',
				padding: '8%',
				borderRadius: '2rem'
			},
			bodyTwo: {
				backgroundColor: '#8D8D8D',
				color: '#2d2d2d',
				height: '100vh',
				marginLeft: '3%',
				marginRight: '3%',
				padding: '2%',
				borderRadius: '2rem'
			}
		}
	} else {
		styles = {
			body: {
				backgroundColor: '#2d2d2d',
				color: '#f5f5f5',
				height: '100vh',
				padding: '8%',
				borderRadius: '2rem'
			},
			bodyTwo: {
				backgroundColor: '#2d2d2d',
				color: '#f5f5f5',
				height: '100vh',
				marginLeft: '3%',
				marginRight: '3%',
				padding: '2%',
				borderRadius: '2rem'
			}
		}
	}

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) root.style.setProperty('--bar-color', "#f5f5f5");
    else root.style.setProperty('--bar-color', "#2d2d2d")
  }, [isDarkMode]);

	const [category, setCategory] = useState<string>('No category selected.');

	console.log(isDarkMode);

	const [error, setError] = useState<string>('');

	function handleCategory(category: string) {
		setCategory(category)
	}

	async function handleLogout() {
		setError('');

		try {
			await logout(); 
			navigate('/login');
		} catch {
			setError('Failed to logout')
		}

	}

	const { currentUser, logout } = useAuth(); 

	function SpecificSettings() {
		if (category === "Account") {
			return (
				<div className = "userSettings" style = {{color: '#f5f5f5'}}>
					<p>User Email: {currentUser.email}</p>
					<Button variant="contained" onClick={handleLogout}>Logout</Button>
				</div>
			)
		} else if (category === "No category selected.") {
			return (
				<></>
			)
		} else {
			return (
				<div className = "userSettings" style = {{color: '#f5f5f5'}}>
					<p>No available settings currently</p>
				</div>
			)
		}
	}


	return (
		<MainPrivateLayout>
			<p>Your Settings</p>
			<Grid container style={{ height: '100vh' }}>
      <Grid item xs={2.5}>
        <div style={styles.body}> 
          Categories
					<div className = "issueBar">
						<div className = "categoriesIssueBar" onClick={() => handleCategory("Account")} style = {{color: '#f5f5f5', backgroundColor: (category === 'Account') ? '#251F53' : '#3D348B'}}>
							Account
						</div>
						<div className = "categoriesIssueBar" onClick={() => handleCategory("Visuals")} style = {{color: '#f5f5f5', backgroundColor: (category === 'Visuals') ? '#251F53' : '#3D348B'}}>
							Visuals
						</div>
						<div className = "categoriesIssueBar" onClick={() => handleCategory("Your Board")} style = {{color: '#f5f5f5', backgroundColor: (category === 'Your Board') ? '#251F53' : '#3D348B'}}>
							Your Board
						</div>
					</div>
        </div>
      </Grid>
      <Grid item xs={9.5}>
        <div style={styles.bodyTwo}>
          {category}
					<SpecificSettings />
        </div>
      </Grid>
    </Grid>
		</MainPrivateLayout>
	);
}

export default Profile