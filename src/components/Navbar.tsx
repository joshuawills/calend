import '../styling/Navbar.css'
import { AccountCircle } from '@mui/icons-material'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';

function Navbar() {
  const isDarkMode = useSelector((state: any) => state.isDarkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) root.style.setProperty('--bar-color', "#f5f5f5");
    else root.style.setProperty('--bar-color', "#2d2d2d")
  }, [isDarkMode]);

  const [issueDialog, setIssueDialog] = useState<boolean>(false);

  function TicketDialog() {
    return (
      <div className = "ticketDialog">
        <Dialog open = {issueDialog} onClose={() => {setIssueDialog(false)}} className = "ticketDialog" fullWidth maxWidth = 'sm'>
          <DialogTitle style = {{fontSize: '1.5rem'}}>Create An Issue Here</DialogTitle>
          <DialogContent>
            <DialogContentText style = {{marginBottom: '1rem', fontSize: '1rem'}}>
              Fill in all of the information below...
            </DialogContentText>
            <DialogContentText>
              <div className = "instructionalIssueBar">
                <div className="circle">1</div> <div className = "infoRaw">Provide a title</div>
              </div>
              <div className = "instructionalIssueBar">
                <div className="circle">2</div> <div className = "infoRaw">Provide a description</div>
              </div>
              <div className = "instructionalIssueBar">
                <div className="circle">3</div> <div className = "infoRaw">Level of Priority</div>
              </div>
              <div className = "instructionalIssueBar">
                <div className="circle">4</div> <div className = "infoRaw">Due Date</div>
              </div>
              <div className = "instructionalIssueBar">
                <div className="circle">4</div> <div className = "infoRaw">Epic</div>
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <>
      {issueDialog && <TicketDialog />}
      <div className="navigationHeader">
        <Link to = "/" className="text-link">
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
    </>
  );
}

export default Navbar
