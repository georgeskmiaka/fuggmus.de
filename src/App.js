import logo from './logo.svg';
import './App.css';
import { Divider } from 'primereact/divider';
import NavBarApp from './modules/nav';

function App() {
  return (
    <div className="App">
      <NavBarApp />
      <div>
        <img src='assets/logo.jpg' alt='logo' />
      </div>
      <Divider />

      <footer>
        <div className='footer'>
          <p>Get connected with us on social networks:</p>
          <a href='https://www.facebook.com/mr.gmiak.dv/'><i className="pi pi-facebook"> </i></a>
          <a href='https://www.instagram.com/gmiak.dv/'><i className="pi pi-instagram"> </i></a>
          <a href='https://twitter.com/gmiak_dv'><i className="pi pi-twitter"> </i></a>
          <a href='https://github.com//gmiak'><i className="pi pi-github"> </i></a>
          <p>Fuggmus Fenster- & Gebäudereinigung</p>
          <p>0177-7950855 0228-94738479</p>
          <p>Schweidnitzer Weg 13 53119 Bonn - gianny-musila@fuggmus.de</p>
          <p className='copyright'>2023 &copy; gmiak.dv, All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
