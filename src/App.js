import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import {AlertState} from "./context/alert/alertState";

function App() {

  return (
      <AlertState>
          <Navbar/>
          <div className={'container pt-4'}>
              <Alert alert={{text: 'Test Allert '}}/>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/profile/:name' element={<Profile/>}/>
              </Routes>
          </div>
      </AlertState>

  );
}

export default App;
