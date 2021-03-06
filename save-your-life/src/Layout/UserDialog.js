import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {addWeight} from '../store/modules/userInfo'
import { useDispatch } from 'react-redux';

export default function UserDialog() {
  const [open, setOpen] = React.useState(false);
  const [weight, setWeight] = React.useState('');
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    alert("Thank you for your check in !")
    setOpen(false);
  };
  
  const handleSubmit = () => {
    if (Number(weight)) {
      dispatch(addWeight(Number(weight)))
    }
    handleClose();
  }

    return (
        <div>
        <Button variant="outlined" onClick={handleClickOpen} style={{left: "820px", background: "white", fontWeight: "bold"}}>
          Daily Check In 🪙
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Good Morning</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Check in with your weight, sleep time and mood today to earn badges!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="weight"
              label="What is your weight today? "
              type="text"
              fullWidth
              variant="standard"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </DialogContent>

          <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              id="weight"
              label="How long is your sleeping time? "
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>


          <DialogContent>
          <TextField
              autoFocus
              margin="dense"
              id="weight"
              label="How are you today? "
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Done For Today</Button>
          </DialogActions>
        </Dialog>
      </div>
    )

    }