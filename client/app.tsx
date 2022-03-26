<<<<<<< HEAD
import { React, ReactDOMServer } from '../deps.ts';
=======
import { React , ReactRouterDom} from '../deps.ts';
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
>>>>>>> 7b297059eda79fb81fa8264719c9715e04f715c6
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
			h5: any;
      p: any;
<<<<<<< HEAD
			nav: any;
			ul: any;
			a: any;
			li: any;
			span: any;
			img: any;
=======
      li: any;
      ul: any;
>>>>>>> 7b297059eda79fb81fa8264719c9715e04f715c6
    }
  }
}

<<<<<<< HEAD
const App = (props:any) => {
  return (
	<div>
    <nav className="navbar navbar-dark bg-primary">
		<div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src='https://miro.medium.com/max/1400/1*K7cL5EO9bQJei8GrgRhoZQ.png' className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src='https://miro.medium.com/max/1400/1*K7cL5EO9bQJei8GrgRhoZQ.png' className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src='https://miro.medium.com/max/1400/1*K7cL5EO9bQJei8GrgRhoZQ.png' className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    <Main data={'Ok, works'} />
  </div>
	)
};
=======
export const App = ({ isServer, Component, initData }: any) => {

  if (isServer) return (
      <>
          <Navbar />
          <Main />
      </>
  )
>>>>>>> 7b297059eda79fb81fa8264719c9715e04f715c6

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