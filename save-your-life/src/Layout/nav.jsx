import styles from './layout.module.scss';
import routes from '../Routes';
import { Button, ListItem, ListItemButton, MenuList } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function Nav() {
  const location = useLocation();
  console.log(location)
  return (
    <div className={styles['syl-layout-nav']}>
      {routes.map((route) => (
        <Link
          to={route.link || route.path}
          key={route.name}
          className={classNames(styles['syl-layout-nav-item'], {
            [styles.active]: route.path === location.pathname
          })}
        >
          <route.icon style={{marginRight: '6px'}}></route.icon>
          {route.name}
        </Link>
      ))}
    </div>
  );
}
