import { CircularProgress } from '@mui/material';
import styles from './Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <CircularProgress></CircularProgress>
    </div>
  );
}
