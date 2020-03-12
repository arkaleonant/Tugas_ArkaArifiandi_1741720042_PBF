import React from 'react';
import './skinWeb.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="nav">
            <ul>
              <li><Link to="/beranda">Beranda</Link></li>
              <li><Link to="/basic">Basic Fitur</Link></li>
              <li><Link to="/premium">Premium Fitur</Link></li>
              <AuthButton/>
              
            </ul>
            <Switch>
              <Route path="/beranda">
                <Beranda/>
              </Route>
              <Route  path="/basic">
                <BasicFitur/>
              </Route>
              <Route path="/login">
                <LoginPage/>
              </Route>
              <PremiumRoute  path="/premium">
                <ProtectedFitur/>
              </PremiumRoute>              
            </Switch>
        </div>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome! anda sedang di fitur premium{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/premium"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>Anda Sedang tidak masuk di premium fitur.</p>
  );
}

function PremiumRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function Beranda(){
  return(
    <div>
      <br/>
      <h1 align="center">Cinemato Marketplace</h1><br/>
      <p> anda adalah pelanggan setia kami yang selalu mengunjungi website kami sebagaimana mesti</p>
    </div>
  );
}

function BasicFitur(){
  let{path,url}= useRouteMatch();
  return(
    <div>
      <br/>
      <h1 align="center">Basic Fitur</h1><br/>
      <p align="center"> ini adalah basic fitur dimana produk2 yang ada di basic terbatas akan kualitas produk</p>
      <p align="center"> coba anda klik produk kami yang ada dibawah untuk melihat detail dari produk kita</p>
      <div><br/><br/>
      <h2 align="left">Produk Kita</h2><br/>

    </div>
    <div>
      <table>
        <td>
          <Link to={`${url}/jasa pembuatan video dengan mengirim stock video anda`}> Video Maker </Link>
        </td><br/>
        <td>
          <Link to={`${url}/jasa pembuatan content dengan request content yang akan dibuat`}> Content Creator </Link>
        </td><br/>
        <td>
          <Link to={`${url}/pembuatan animasi dan karakter 3D sesuai request dari konsumen`}> Designer 3D </Link>
        </td>

      <Switch>
        <Route exact path={path}>
          <h3>Please Select a topic.</h3>
        </Route>
        <Route path={`${path}/:basicid`}>
          <Basic/>
        </Route>
      </Switch>
      </table>
      </div>
    </div>
  );
}

function ProtectedFitur(){
  return(
    <div>
      <br/>
      <h1 align="center">Premium Feature</h1><br/>
      <p> Ini adalah fitur premium yang bisa dilakukan hanya dengan login saja, jika tidak login anda tidak bisa masuk pada fitur premium</p>
    </div>
  );
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/premium" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  
  return(
    <div>
        <br/><br/><br/><br/><br/>
          <h1>Login untuk masuk ke fitur {from.pathname}</h1><br/>
          <button onClick={login}>Log in</button>  
    </div>
  );
}



function Basic(){ 
  let {basicid} = useParams();

  return(
    <div>
      <h3>{basicid}</h3>
    </div>
  )
}

export default App;
