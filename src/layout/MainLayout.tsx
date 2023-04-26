import React from 'react';
import Navbar from '../components/Navbar';
import { Settings } from '@mui/icons-material'


function MainLayout({children}: {children: React.ReactNode}) {
return (
	<div className="App">
		<Navbar />
			<div className = "App-header">
				<div>{children}</div>
			</div>
		<Settings
		className="btn"
		fontSize="large"
		style={{
			backgroundColor: '#2d2d2d',
			color: '#f5f5f5',
			borderRadius: '50%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '40px',
			height: '40px',
		}}
		/>
	</div>
	)
}

export default MainLayout