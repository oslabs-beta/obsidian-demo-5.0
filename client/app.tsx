import { React , ReactRouterDom} from '../deps.ts';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import Main from './components/Main.tsx';
import { routes } from '../server/routes.ts';
import { Navbar } from './components/Navbar.tsx';


const { Switch, Route } = ReactRouterDom;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h3: any;
      h1: any;
      p: any;
      li: any;
      ul: any;
    }
  }
}

export const App = ({ isServer, Component, initData }: any) => {

  if (isServer) return (
      <>
          <Navbar />
          <Main />
      </>
  )

  return (
      <React.Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
              {routes.map((el, x) => {
                  return <Route
                      {...el}
                      key={x}
                      component={(props: any) => {
                          let _initData;
                          if ((window as any).__INITIAL_DATA__) {
                              _initData = initData;
                              delete (window as any).__INITIAL_DATA__;
                          }
                          if (el.seo) {
                              //@ts-ignore
                              document.title = el.seo.title;
                          }
                          return <el.component {...props} initData={_initData} />;
                      }}
                  />
              })}
          </Switch>
      </React.Suspense>
  );
}