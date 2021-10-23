import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './DataList.module.scss';

export default function DataList() {
  const [dispData, setDispData] = useState([]);
  useEffect(() => {
    // TODO: load data from api;
    setDispData([
      {
        label: 'Height',
        value: "5'7''",
        status: 0
      },
      {
        label: 'Weight',
        value: '180 lbs.',
        status: 0
      },
      {
        label: 'BMI',
        value: '28.2',
        status: 1
      }
    ]);
  }, []);
  return (
    <div className={styles['data-list']}>
      <List subheader={<li />}>
        {dispData.map((item) => (
          <>
            <ListSubheader className={styles['list-item-title']}>
              {item.label}
            </ListSubheader>
            <ListItem divider>
              <ListItemText
                className={classNames({
                  [styles.warning]: item.status !== 0
                })}
              >
                {item.value}
              </ListItemText>
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );
}
