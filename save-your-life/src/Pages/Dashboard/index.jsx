import styles from './dashboard.module.scss';
import Block from '../../components/Block';
import DataList from '../../components/DataList';
import Plot from '../../components/Plot';
import Warning from '../../components/Warning';

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles['left-panel']}>
        <Block className="warning">
          <Plot></Plot>
        </Block>
        <Block className="plan" link="/warning">
          <Warning></Warning>
        </Block>
      </div>
      <div className={styles['right-panel']}>
        <Block className="data" link="/data">
          <DataList>

          </DataList>
        </Block>
      </div>
    </div>
  );
}
