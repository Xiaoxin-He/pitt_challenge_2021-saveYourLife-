import styles from './Block.module.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function Block({ children, link }) {
  return (
    <div className={styles.block}>
      {link && (
        <Link to={link} className={styles['link-arrow']}>
          <ArrowForwardIcon></ArrowForwardIcon>
        </Link>
      )}
      {children}
    </div>
  );
}
