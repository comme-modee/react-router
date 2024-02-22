import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import User from './pages/User';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  let [authenticate, setAuthenticate] = useState(false)
  const PrivateRoute = () => {
    return authenticate === true ? <User/> : <Navigate to={'/login'}/>
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
