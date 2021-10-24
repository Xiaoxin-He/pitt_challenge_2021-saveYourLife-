import { List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import classNames from 'classnames';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './DataList.module.scss';

export default function DataList() {
  const userWeights = useSelector((state) => state.userInfo.weight);
  const userHeight = useSelector((state) => state.userInfo.height);
  const lastWeight = userWeights[userWeights.length - 1].value;
  const bmi = ((lastWeight * 0.45359237) / Math.pow(userHeight / 100, 2)).toFixed(2)
  const dispData = [
    {
      label: 'Height',
      value: `${Math.floor(userHeight / 30.48)}'${Math.floor(
        (userHeight % 30.48) / 2.54
      )}''`,
      status: 0
    },
    {
      label: 'Weight',
      value: `${lastWeight} lbs.`,
      status: 0
    },
    {
      label: 'BMI',
      value: bmi,
      status: bmi > 25 || bmi < 18.5 ? 1 : 0
    }
  ];
  useEffect(() => {
    // TODO: load data from api;
  }, []);
  return (
    <div className={styles['data-list']}>
      <List subheader={<li />}>
        {dispData.map((item) => (
          <Fragment key={`sub-${item.label}`}>
            {/* <ListSubheader className={styles['list-item-title']}>
              {item.label}
            </ListSubheader> */}
            <ListItem divider>
              <ListItemText
                className={classNames({
                  [styles.warning]: item.status !== 0
                })}
                primary={item.label}
                secondary={item.value}
              ></ListItemText>
            </ListItem>
          </Fragment>
        ))}
      </List>
    </div>
  );
}
