import React from 'react';
import foto from './foto.jpg';
import './App.css';


function App() {
  return (
    <div className="App" align="center">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">BIODATA</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Data Anda <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Data Hobi</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pendidikan
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Sarjana</a>
              <a class="dropdown-item" href="#">Magister</a>
              <a class="dropdown-item" href="#">Doktoral</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Professor</a>
            </div>
          </li>
        </ul>
      </nav> <br></br><br></br><br></br>

    <body align="center">
      <h1 align="center">BIODATA DIRI</h1>
      <table width="800" border="0" cellspacing="0" cellpadding="2" align="center">
        <tr>
          <td rowspan="10" align="center"><img src={foto} alt="foto" width="250px" heigth="400px" image-align="center"/></td>
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
          <td>Futsal</td>
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

    <footer>
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
      <a class="navbar-brand" href="#" align="center" >arkaarif69@gmail.com.2020</a>
    </nav>
    </footer>
    </div>
  );
}

export default App;
