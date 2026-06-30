import Products from '../pages/products';
import MainNavbar from '../pages/navbar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom"
import Signup from '../pages/signup';
import Product from "../pages/product"
import Cart from '../pages/cart';
import Login from '../pages/login';

function App() {
  return (
    <>
      <div style={{overflow:"hidden"}}>
        <MainNavbar/>
        <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
        <Route path="/user/signup" element={<Signup/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
