import React from 'react';
import foto from './foto.jpg';
// import "node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player';
import './navbar.css';
import './login.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="nav" align="center">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li>
          <div class="dropdown">
            <a>Portofolio</a>
            <div class="dropdown-content">
              <a><Link to="/wedding">Wedding</Link></a>
              <a><Link to="/event">Event</Link></a>
              <a><Link to="/couple">Couple</Link></a>
              <a><Link to="/holiday">Holiday</Link></a>
            </div>
        </div>
        </li>
        <li><Link to="/tentang">Tentang Kami</Link></li>
          <p className="p-auth" align="right"><AuthButton/></p>
      </ul>
          <Switch>
              <Route path="/home">
                <Home/>
              </Route>
              <Route  path="/tentang">
                <Tentang/>
              </Route>
              <Route path="/login">
                <LoginPage/>
              </Route>
              <Route path="/wedding">
                <Wedding/>
              </Route>
              <Route  path="/event">
                <Event/>
              </Route>
              <Route path="/couple">
                <Couple/>
              </Route>
              <Route path="/holiday"> 
                <Holiday/>
              </Route>
              <OrderRoute  path="/order">
                <ProtectedFitur/>
              </OrderRoute>              
            </Switch>        
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
      Welcome! anda sudah login{" "}
      <button className="btn btn-danger"
        onClick={() => {
          fakeAuth.signout(() => history.push("/order"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <p>Anda Sedang tidak login</p>
  );
}

function OrderRoute({ children, ...rest }) {
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

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/order" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };
  
  return(
    <div align="center">
        <br/><br/>
          <table className="form">
          <thead>
            <p className="h1"> Login untuk fitur {from.pathname}</p><br/>
          </thead>
            <td>
              <form>
                <label> Username </label><br/>
                <input type="text" placeholder="Input Username"/> <br/><br/>
                <label> Password </label><br/>
                <input type="password" placeholder="Input Password"/> <br/>
              </form>
              <button className="btn btn-danger">Cancel</button>
              <button className="btn btn-primary" onClick={login} >Log in</button><br/>
          </td>
      </table>
            
    </div>
  );
}

function ProtectedFitur(){
  return(
    <div align="center">
      <br/>
      <h1 align="center">Pemesanan</h1>
      <p> Lakukan pengisian data diri untuk pemesanan jasa kami</p>
      <table className="form">
            <td>
              <form>
                <label> Nama </label><br/>
                <input type="text" placeholder="Input Nama"/> <br/>
                <label> Alamat </label><br/>
                <input type="text" placeholder="Input Alamat"/> <br/>
                <label> No.Hanphone </label><br/>
                <input type="text" placeholder="Input Nama"/> <br/> 
                <label> Region </label><br/>
                <input type="text" placeholder="Kota Malang" disabled/> <br/>
                
              </form>
              <button className="btn btn-danger">Cancel</button>
              <button className="btn btn-primary">Pesan</button><br/>
          </td>
      </table>
    </div>
  );
}

function Home(){
  return(
    <div align="center"><br/>
      <h2 align="center">Malang Creative</h2>
      <p>perusahaan industri di bidang videographer yang berbasis di kota malang . kami menawarkan kenangan / momen indah anda untuk kkami dokumentasi
         agar memiliki kesan tersendiri bagi anda, dengan harga yang sangat kompetitif dengan kompetitor lain, MalangCreative menawarkan kualitas jasa
         video maker dari tim malangCreative yang sangat tinggi untuk konsumen kami. With Malang your video will be Creative
      </p><br/><br/>
      <img src="https://krishnalearningcenter.com/wp-content/uploads/2019/01/adult-beautiful-bush-1264210-2000x1200.jpg" width="490px" height="300px" align="left"/>
      <img src="https://brandmybusiness.in/fotography/wp-content/uploads/2018/05/Walk.jpg" width="505px" height="300px" align="left"/>
      <img src="https://lh3.googleusercontent.com/jbSq2MJBw6NAvB_jUstr6xhDB-ZUhOGHTwxVYS_z0ds5hot8uznm89qGknr1yQ5YoNGsgRtX-cpn6_Fxrw=w1080-h608-p-no-v0" width="520px" height="300px" align="left"/><br/>
      <img src="https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela.jpg" width="490px" height="300px" align="left"/>
      <img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/12/2019/12/iStock-645926902-e1576773153344-630x335.jpg" width="505px" height="300px" align="left"/>
      <img src="https://www.unitec.ac.nz/sites/default/files/public/Unitec_Website_1594x675_Photography.jpg?timestamp=1497842425" width="520px" height="300px" align="left"/>
      
      
    </div>
  )
}

function Wedding(){
  return(
    <div>
      <h3>Teaser Of Wedding Clip</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=-qu4z67uxnA" /><br/>
      <h3>Official Video Wedding Clip</h3>
      <ReactPlayer url="https://www.youtube.com/watch?v=pYvXdZR7-cI " />
    </div>
  )
}

function Event(){
  return(
    <div>
       <h3>HSE Event On Daihatsu Company</h3>
       <ReactPlayer url="https://youtu.be/kNk-61fPzhk" />
    </div>
  )
}

function Couple(){
  return(
    <div>
      <h3>Brithday Eve</h3>
      <ReactPlayer url="https://youtu.be/PpY4_9zeMx4" />
    </div>
  )
}

function Holiday(){
  return(
    <div>
      <h3>Bromo Mountain Vacation's</h3>
      <ReactPlayer url="https://youtu.be/5pbirszZdD0" />
    </div>
  )
}

function Tentang(){
  return(
    <div align="center">
      <body align="center">
        <h1 align="center">BIODATA DIRI</h1>
        <table width="800" border="0" cellspacing="0" cellpadding="2" align="center" >
          <tr>
            <td rowspan="10" align="center"><img src={foto} alt="foto" width="250px" heigth="400px" /></td>
            <td>Nama</td>
            <td>:</td>
            <td>Arka Arifiandi Leonanta</td>
          </tr>
          <tr>
            <td>TTL </td>
            <td>:</td>
            <td>Malang, 06 Agustus 1998</td>
          </tr>
          <tr>
            <td>Jenis Kelamin </td>
            <td>:</td>
            <td>Laki - Laki</td>
          </tr>
          <tr>
            <td>Alamat </td>
            <td>:</td>
            <td>Perum Joyo Grand 10/165, Merjosari, Lowokwaru</td>
          </tr>
          <tr>
            <td>No. Handphone</td>
            <td>:</td>
            <td>082123494327</td>
          </tr>
          <tr>
            <td>Status </td>
            <td>:</td>
            <td>Mahasiswa</td>
          </tr>
          <tr>
            <td>Hobi</td>
            <td>:</td>
            <td>Fotografi, Videografi</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>arkaarif692gmail.com</td>
          </tr>
          <tr>
            <td>Github</td>
            <td>:</td>
            <td>arkaleonant</td>
          </tr>
      </table>  
      </body>
    </div>
  )
}

export default App;
