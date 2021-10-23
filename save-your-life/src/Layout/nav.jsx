import styles from './layout.module.scss';
import routes from '../Routes';
import { Button, ListItem, ListItemButton, MenuList } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className={styles['syl-layout-nav']}>
      {routes.map((route) => (
        <Link
          to={route.link || route.path}
          key={route.name}
          className={styles['syl-layout-nav-item']}
        >
          <route.icon style={{marginRight: '6px'}}></route.icon>
          {route.name}
        </Link>
      ))}
    </div>
  );
}
