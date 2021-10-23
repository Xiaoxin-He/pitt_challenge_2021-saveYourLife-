import styles from './layout.module.scss';
import Header from './header';
import Nav from './nav'
import Content from './content';

export default function Layout() {
  return (
    <div className={styles['syl-layout']}>
      <Header>
        
      </Header>
      <div className={styles['syl-layout-body']}>
        <Nav></Nav>
        <Content></Content>
      </div>
    </div>
  );
}
