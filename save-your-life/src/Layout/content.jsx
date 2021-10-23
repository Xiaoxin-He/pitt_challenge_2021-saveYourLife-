import { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Loading from '../components/Loading';
import routes from '../Routes';
import styles from './layout.module.scss';


export default function Content() {
  let match = useRouteMatch();
  return (
    <div className={styles['syl-layout-content']}>
      <Suspense fallback={<Loading></Loading>}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.name} path={route.path}>
              <route.component></route.component>
            </Route>
          ))}
        </Switch>
      </Suspense>
    </div>
  );
}
