
import './App.css';

import {
 Routes, Route
} from "react-router-dom";
import Home from './components/home';
import Signin from './components/signin';
import MENU from './components/MENU';

function App() {
  return (
      <>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="login" element={<Signin/>}/>
        <Route path="menu" element={<MENU/>}/>
       
        
      </Routes>
     
      </>

 
  );
}

export default App;
