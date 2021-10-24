<<<<<<< Updated upstream
import styles from './dashboard.module.scss'

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <div className={styles['left-panel']}>
=======
import styles from './dashboard.module.scss';
import Block from '../../components/Block';
import DataList from '../../components/DataList';
import Plot from '../../components/Plot';
import Warning from '../../components/Warning';
// import UserDialog from "../../Layout/UserDialog";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      {/* <UserDialog/> */}
      <div className={styles['left-panel']}>
        <Block className="warning" link="/warning">
          <Plot></Plot>
        </Block>
        <Block className="plan" link="/plan">
          <Warning></Warning>
        </Block>
      </div>
      <div className={styles['right-panel']}>

        <Block className="data" link="/data">
          <DataList>
>>>>>>> Stashed changes

            </div>
            <div className={styles['right-panel']}>
                
            </div>
        </div>
    )
}