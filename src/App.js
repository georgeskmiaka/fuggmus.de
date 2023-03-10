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

      
    </div>
  );
}

export default App;
