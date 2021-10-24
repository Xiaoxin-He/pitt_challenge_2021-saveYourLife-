import { useEffect, useState } from 'react';
import Loading from './Loading';
import styles from './warning.module.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function Warning() {
  const [warningList, setWarningList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchList() {
      // TODO: get warning list
      setLoading(true);
      setWarningList([
        { title: 'Overweight', content: 'Your BMI falls within the overweight range. It could indicate that ...' },
      ]);
      setLoading(false);
    }
    fetchList();
  }, []);
  let BlockEle;
  if (loading) {
    BlockEle = Loading;
  } else if (warningList.length === 0) {
    BlockEle = () => (
      <div className={styles['empty-wrapper']}>
        <FavoriteIcon sx={{ fontSize: '40px' }}></FavoriteIcon>
        <div>No warning as of now.</div>
      </div>
    );
  } else {
    BlockEle = () => (
      <div>
        <List>
          {warningList.map((warning, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <WarningAmberIcon
                  className={styles['warning-icon']}
                ></WarningAmberIcon>
              </ListItemAvatar>
              <ListItemText
                primary={warning.title}
                secondary={warning.content}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
  return <BlockEle></BlockEle>;
}
