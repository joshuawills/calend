import React from 'react';
import Navbar from '../components/Navbar';
import { LightMode, DarkMode } from '@mui/icons-material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import '../pages/App.css'

function MainPrivateLayout({children}: {children: React.ReactNode}) {

	const isDarkMode = useSelector((state: any) => state.isDarkMode);
	const dispatch = useDispatch();
	
	const lightTheme= createTheme({
		palette: {
			mode: 'light',
			background: {
				default: "#f5f5f5"
			},
			text: {
				primary: "#2d2d2d"
			}
		}
	});

	const darkTheme= createTheme({
		palette: {
			mode: 'dark',
			background: {
				default: "#2d2d2d"
			},
			text: {
				primary: "#f5f5f5"
			}
		}
	});

	return (
		<ThemeProvider theme={(isDarkMode) ? darkTheme : lightTheme}>
      <CssBaseline />
			<div className="App">
				<Navbar />
					<div className = "App-header">
						<div>{children}</div>
					</div>
					<IconButton onClick = {() => {
						dispatch({type: 'TOGGLE_DARK_MODE'})
					}}>
					{(isDarkMode) ? <LightMode 
						className="btn"
						fontSize="large"
						style={{
							borderRadius: '50%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '60px',
							height: '60px',
							backgroundColor: '#f5f5f5',
							color: '#2d2d2d'
						}}
						/> :
						<DarkMode 
							className="btn"
							fontSize="large"
							style={{
								borderRadius: '50%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '60px',
								height: '60px',		
								backgroundColor: '#2d2d2d',
								color: '#f5f5f5'
							}}
						/>
					}
					</IconButton>
			</div>
		</ThemeProvider >
	)
}

export default MainPrivateLayout