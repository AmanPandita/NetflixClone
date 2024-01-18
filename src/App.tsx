import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './pages/Home';

import { LoginPage } from './pages/LoginPage'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </>
  )
}

export default App;
