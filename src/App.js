import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NavBar } from './Pages/Modules/Navbar/NavBar'
import { Home } from './Pages/Home/Home'
import { User } from './Pages/User/User'



function App() {
  return (
    <div className="container-fluid app-module">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user/*' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
