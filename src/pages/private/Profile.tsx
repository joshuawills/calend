import MainPrivateLayout from '../../layout/PrivateLayout';
import { Button, Grid, IconButton,
DialogContent, DialogContentText, Alert, CircularProgress, TextField} from '@mui/material'
import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Edit, Send, Delete } from '@mui/icons-material'
import { useSelector } from 'react-redux/es/exports';
import { useAuth } from '../../contexts/AuthContext';
import '../../styling/Profile.css'
import axios from 'axios';

function Profile() {

	const { currentUser, logout } = useAuth(); 
	const navigate = useNavigate();
	const isDarkMode = useSelector((state: any) => state.isDarkMode);
	const [currentEpics, setCurrentEpics] = useState([]);
	const[currentEpicsLength, setCurrentEpicsLength] = useState<number>(0);
	const [category, setCategory] = useState<string>('No category selected.');
	const [error, setError] = useState<string>('');
	const newTitleRef = useRef<HTMLInputElement>(null);
	const createEpicTitleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) root.style.setProperty('--bar-color', "#f5f5f5");
    else root.style.setProperty('--bar-color', "#2d2d2d")
  }, [isDarkMode]);

	useEffect(() => {
		const status = localStorage.getItem('epicManagement');
		localStorage.removeItem('epicManagement');

		if (status !== null) setCategory('Your Epics');

		fetchEpicData();
	}, []);

	async function fetchEpicData() {
		const result = await axios({
			method: 'get',
			url: 'http://localhost:3000/calend/getUserEpics',
			params: {
				userID: currentUser['uid']
			}
		})
		console.log(result['data']['arrayValue']['values'])
		setCurrentEpics(result['data']['arrayValue']['values']);
		setCurrentEpicsLength(result['data']['arrayValue']['values'].length)
	}

	function handleCategory(category: string) {
		setCategory(category);
	}

	async function handleLogout() {
		setError('');
		try {
			await logout(); 
			navigate('/login');
		} catch {
			setError('Failed to logout');
		}
	}

	async function handleEditEpic(e: any) {
		const epicName: string = e['mapValue']['fields']['title']['stringValue'];
		const color: string = e['mapValue']['fields']['color']['stringValue'];
		const uID: string = currentUser['uid'];
		const newTitle: string | undefined = newTitleRef.current?.value;
		if (!newTitle) return;

		const result = await axios({
			method: 'put',
			url: 'http://localhost:3000/calend/editEpic',
			data: {
				'oldEpicName': epicName,
				'color': color,
				'newName': newTitle,
				'userID': uID
			}
		});
		console.log(JSON.stringify(result));
		fetchEpicData();
	}

	async function handleDeleteEpic(e: any) {
		const epicName: string = e['mapValue']['fields']['title']['stringValue'];
		const color: string = e['mapValue']['fields']['color']['stringValue'];
		const uID: string = currentUser['uid'];
		await axios({
			method: 'delete',
			url: 'http://localhost:3000/calend/deleteEpic',
			params: {
				'name': epicName,
				'color': color,
				'userID': uID
			}
		})
		fetchEpicData();
	}

	async function createEpic() {
		console.log('HI')
		const title: string | undefined = createEpicTitleRef.current?.value;
		if (!title) return
		await axios({
			method: 'post',
			url: 'http://localhost:3000/calend/generateEpic',
			data: {
				'uID': currentUser['uid'],
			  'title': title
			}
		})
		fetchEpicData()
	}

	function MapEpics() {
		return (
			<div className = "mapEpics">
				{currentEpics.map((e) => {
					const placeholderA = e['mapValue']['fields']['title']['stringValue'];
					return (
						<div className = "individualEpic" >
							<TextField
							placeholder={placeholderA}
							inputRef={newTitleRef}
							variant = "standard"
							autoFocus
							size="medium"
							style = {{width:'75%'}}
							sx={{
								'& .MuiInputBase-root': {
									border: 'none',
									padding: 0,
								},
								'& .MuiInputBase-input': {
									fontSize: '1.2rem',
									lineHeight: '1.5',
									padding: 0,
									border: 'none',
									color: '#f5f5f5',
									minWidth: 'unset',
								},
								'& .MuiInputBase-input::placeholder': {
									color: '#f5f5f5',
								}
							}}
							InputProps={{ disableUnderline: true }}
						/>
						<IconButton style={{marginLeft:'1rem', color: '#f5f5f5'}} disableRipple onClick={() => handleEditEpic(e)}>
							<Edit />
						</IconButton>
						<IconButton style={{color: '#f5f5f5'}} disableRipple onClick={() => handleDeleteEpic(e)}>
							<Delete />
						</IconButton>
						</div>
					)
				})}
				{(currentEpicsLength < 7) && <div className = "individualEpicNew">
					<TextField
						placeholder='New Epic'
						inputRef={createEpicTitleRef}
						variant = "standard"
						autoFocus
						size="medium"
						style = {{width:'75%'}}
						sx={{
							'& .MuiInputBase-root': {
								border: 'none',
								padding: 0,
							},
							'& .MuiInputBase-input': {
								fontSize: '1.2rem',
								lineHeight: '1.5',
								padding: 0,
								border: 'none',
								color: '#f5f5f5',
								minWidth: 'unset',
							},
							'& .MuiInputBase-input::placeholder': {
								color: '#f5f5f5',
							}
						}}
							InputProps={{ disableUnderline: true }}
					/>
					<IconButton style={{marginLeft:'1rem', color: '#f5f5f5'}} disableRipple onClick={createEpic}>
						<Send />
					</IconButton>
				</div>}
			</div>
		)
	}

	function SpecificSettings() {
		const titleRef = useRef<HTMLInputElement>(null);
		const [epicOneError, setEpicOneError] = useState<boolean>(false);
		const [loadingEpicOne, setLoadingEpicOne] = useState<boolean>(false);

		async function handleInitialEpic() {
			if (!titleRef.current?.value) {
				return setEpicOneError(true);
			}
			setLoadingEpicOne(true);

			await axios({
				method: 'post',
				url: 'http://localhost:3000/calend/generateInitialEpic',
				data: {
					userID: currentUser['uid'],
					title: titleRef.current.value
				}
			})

			setLoadingEpicOne(false);
			fetchEpicData();
		}

		if (category === "Account") {
			return (
				<div className = "userSettings">
					<div style = {{}}>
						<p style={{fontSize:'1rem'}}>User Email: {JSON.stringify(currentUser.email)}</p>
						<Button variant="contained" onClick={handleLogout}>Logout</Button>
					</div>
				</div>
			)
		} else if (category === "Your Epics") {
			return (	
				<div className = "userSettings">
					{currentEpics.length !== 0 ? 
						<MapEpics /> :
						<div className = "noEpics">
							<p>You have no epics 😭. Create your first one now!</p>
							<div style={{display:'flex', margin:0, padding:0, width: '100%', justifyContent: 'center'}}>
								<TextField
									margin="normal"
									inputRef={titleRef}
									placeholder="Put a title here"
									autoFocus
									size="medium"
									style = {{width:'75%'}}
								/>
								{!loadingEpicOne ? <IconButton style={{marginLeft:'1rem'}} disableRipple onClick={handleInitialEpic}>
									<Send />
								</IconButton> : <CircularProgress style={{marginLeft:'1rem', marginTop: '1rem'}}/>}
							</div>
							{epicOneError && <Alert severity="error">Provide a title</Alert>}
						</div>
					}
				</div>
			)
		} else if (category === "No category selected.") {
			return (
				<></>
			)
		} else {
			return (
				<div className = "userSettings">
					<p>No available settings currently</p>
				</div>
			)
		}
	}

	return (
		<MainPrivateLayout>
			<Grid container style={{ height: '100vh', overflow:'hidden' }}>
      <Grid item xs={2} style = {{backgroundColor:'#2f3c5b', boxShadow: '0 3px 6px rgba(0, 0, 255, 0.8), 0 6px 12px rgba(0, 0, 255, 0.8), 0 9px 18px rgba(0, 0, 255, 0.8), 0 12px 24px rgba(0, 0, 255, 0.8)'}}>
				<div className = "categoriesIssueBar" onClick={() => handleCategory("Account")} style = {{color: (category === 'Account') ? '#2b2b2b' : '#f5f5f5', backgroundColor: (category === 'Account') ? '#f5f5f5' : '#2f3c5b'}}>
					Account
				</div>
				<div className = "categoriesIssueBar" onClick={() => handleCategory("Your Epics")} style = {{color: (category === 'Your Epics') ? '#2b2b2b' : '#f5f5f5', backgroundColor: (category === 'Your Epics') ? '#f5f5f5' : '#2f3c5b'}}>
					<Star />
					Epic Management
				</div>
				<div className = "categoriesIssueBar" onClick={() => handleCategory("Your Board")} style = {{color: (category === 'Your Board') ? '#2b2b2b' : '#f5f5f5', backgroundColor: (category === 'Your Board') ? '#f5f5f5' : '#2f3c5b'}}>
					Your Board
				</div>
      </Grid>
      <Grid item xs={10}>
				<SpecificSettings />
      </Grid>
    </Grid>
		</MainPrivateLayout>
	);
}

export default Profile