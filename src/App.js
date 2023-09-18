import {BrowserRouter,Routes,Route,Redirect,Navigate} from 'react-router-dom';

import './App.css';
import Home from './pages/home/home';

import Hotel from './pages/hotel/Hotel';


function App() {
  return (
     <BrowserRouter>
      <Routes>
        
          
          <Route path="/" element={<Home/>} />
          
          <Route path="/hotels/:id" element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
