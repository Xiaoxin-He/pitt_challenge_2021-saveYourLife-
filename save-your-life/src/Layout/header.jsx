import { IconButton, Menu, MenuItem } from '@mui/material';
import styles from './layout.module.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentStatus, setCurrentStatus] = useState("Log Out");
  const history = useHistory();
  

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    history.push("/login");
    setCurrentStatus("Log In");
  };

  return (
    <div className={styles['syl-layout-header']}>
      <div className={styles['syl-layout-header-title']}>SaveYourLife</div>
      <div className={styles['syl-layout-header-user']}>
        <IconButton
          onClick={handleUserClick}
          className={styles['syl-layout-header-user-btn']}
          style={{ color: '#fff' }}
        >
          <AccountCircleIcon></AccountCircleIcon>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleClose}
        >
          <MenuItem onClick={onLogout}>{currentStatus}</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
