import '../styling/Navbar.css'
import { AccountCircle, Help, Close, Send } from '@mui/icons-material'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Slider, Select, MenuItem, FormControl, 
InputLabel, DialogActions, Button, Tooltip, IconButton, Alert } from '@mui/material'
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useAuth } from '../contexts/AuthContext';
import { useSelector } from 'react-redux/es/exports';
import axios from 'axios'

function Navbar() {
  const isDarkMode = useSelector((state: any) => state.isDarkMode);
  const [currentEpics, setCurrentEpics] = useState([]);
  const [currentEpicsLength, setCurrentEpicsLength] = useState<number>(0);
  const { currentUser, logout } = useAuth(); 
  const [issueDialog, setIssueDialog] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) root.style.setProperty('--bar-color', "#f5f5f5");
    else root.style.setProperty('--bar-color', "#2d2d2d")
  }, [isDarkMode]);

  useEffect(() => {
		fetchEpicData();
	}, [issueDialog]);

  async function fetchEpicData() {
		const result = await axios({
			method: 'get',
			url: 'http://localhost:3001/calend/getUserEpics',
			params: {
				userID: currentUser['uid']
			}
		})
		setCurrentEpics(result['data']['arrayValue']['values']);
    setCurrentEpicsLength(result['data']['arrayValue']['values'].length)
	}


  function TicketDialog() {
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);
    const [epic, setEpic] = useState<string>("");
    const [priority, setPriority] = useState<number>(-1);
    const [dueDate, setDueDate] = useState<Date | null>(null);
    const [error, setError] = useState<boolean>(false);

    function handleDialogClose(event: any, reason: any) {
      if (reason && reason == "backdropClick") 
        return;
      setIssueDialog(false);
    }

    function handleEpicLink() {
      localStorage.setItem('epicManagement', 'true');
      window.location.href = '/profile'
    }

    async function handleIssueCreation() {
      setError(false);
      const title = titleRef.current?.value;
      const description = descriptionRef.current?.value;
      if (!title) return setError(true);

      const result = await axios({
        method: 'post',
        url: 'http://localhost:3001/calend/generateIncident',
        data: {
          'title': title,
          'description': (description) ? description : 'NONE',
          'priority': (priority !== -1) ? priority : 'NONE',
          'dueDate': (dueDate) ? dueDate : 'NONE',
          'epic': (epic.length > 0) ? epic : 'NONE',
          'userID': currentUser['uid']
        }
      });
      setIssueDialog(false);
    }

    return (
      <div className = "ticketDialog">
        <Dialog open = {issueDialog} onClose={handleDialogClose} className = "ticketDialog" fullWidth maxWidth = 'sm' disableEscapeKeyDown>
          <DialogTitle style = {{fontSize: '1.5rem', display: 'flex', justifyContent:'space-between'}}>Create An Issue Here
          <Button onClick={() => setIssueDialog(false)}>
            <Close />
          </Button>
          </DialogTitle>
          <DialogContent>
            <DialogContentText style = {{marginBottom: '1rem', fontSize: '1rem'}}>
              Fill in all of the information below...
            </DialogContentText>
            <DialogContentText>
              <div className = "instructionalIssueBar">
                <div className="circle">1</div> <div className = "infoRaw">Provide a title <i>*Required</i></div>
              </div>
              <TextField
                margin="normal"
                inputRef={titleRef}
                placeholder="Physics homework"
                autoFocus
                size="small"
                style = {{width:'75%'}}
              />
              <div className = "instructionalIssueBar">
                <div className="circle">2</div> <div className = "infoRaw">Provide a description</div>
              </div>
              <TextField
                margin="normal"
                inputRef={descriptionRef}
                placeholder="Complete the bibliography for the report"
                autoFocus
                size="small"
                multiline
                fullWidth
              />
              <div className = "instructionalIssueBar">
                <div className="circle">3</div> <div className = "infoRaw">Level of Priority</div>
              </div>
              <Slider
                defaultValue={3}
                min={1}
                max={5}
                valueLabelDisplay="auto"
                valueLabelFormat={(x) => {
                  switch(x) {
                    case 1: { return 'Low' }
                    case 2: { return 'Lowish' }
                    case 3: { return 'Medium' }
                    case 4: { return 'Highish' }
                    case 5: { return 'High' }
                  }

                }}
                step={1}
                onChange={(event: Event, newValue: any) => {setPriority(newValue)}}
                style = {{width: '50%', marginLeft: '25%', marginTop: '0.5rem'}}
              />
              <div className = "instructionalIssueBar">
                <div className="circle">4</div> <div className = "infoRaw">Due Date</div>
              </div>
              <LocalizationProvider dateAdapter={AdapterDayjs} >
                <div style = {{display: 'flex', margin:'0.5rem'}}>
                  <DatePicker  disablePast  /* value={dayjs(dueDate)} */ onChange={(newValue: any) => setDueDate(newValue)}/>
                </div>
              </LocalizationProvider>
              <div className = "instructionalIssueBar">
                <div className="circle">5</div> <div className = "infoRaw">Epic
                {(currentEpicsLength === 0) && <Tooltip placement="top" arrow title="Create your first epic here">
                  <IconButton size = "small" sx={{ marginLeft: '1rem'}} onClick={handleEpicLink}>
                    <Help />
                  </IconButton>
                </Tooltip>}
                </div>
              </div>
              <FormControl style={{ marginTop: '1rem', minWidth: '10rem' }} size="small">
                <InputLabel>Epic
                </InputLabel>
                <Select value ={epic} label="Epic" onChange={(e: any) => {setEpic(e.target.value)}}>
                  {currentEpics.map((epic) => (
                    <MenuItem key = {epic['mapValue']['fields']['title']['stringValue']} value = {epic['mapValue']['fields']['title']['stringValue']}>
                      {epic['mapValue']['fields']['title']['stringValue']}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </DialogContentText>
            <DialogActions>
              {error && <Alert severity="error" style={{marginRight:'1rem'}}>Ensure you provide a title</Alert>}
              <Button onClick={() => handleIssueCreation()}>
                <Send />
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <>
      {issueDialog && <TicketDialog />}
      <div className="navigationHeader">
        <Link to = "/dashboard" className="text-link">
          <div className="navigationLogo"> 
            {(isDarkMode) ? <img src="https://i.ibb.co/CWz68jy/darkmode.png" alt="darkmode"/> : <img src="https://i.ibb.co/5s7SjK5/lightmode.png" alt="lightmode" />}
          </div>
        </Link>
        <div className="navigationUserInteraction">
          <ul>
            <li><Link to = "/board" className="text-link">your board</Link></li>
            <li><Link to = "/calendar" className="text-link">your calendar</Link></li>
            <li><Link to = "/deadlines" className="text-link">your deadlines</Link></li>
            <li className = "create-issue" onClick={() => setIssueDialog(true)}>create a new issue</li>
            <li><Link to = "/profile" className="text-link"><AccountCircle fontSize="large" /></Link></li>
          </ul>
        </div>
      </div>
      <div className="neon-line"></div>
    </>
  );
}

export default Navbar
