import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/navbar/Navbar';
import AdminLogin from './pages/Admin/Login';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/product' element={ <Product />} />
          <Route path='/product/detail' element={ <ProductDetail />} />

          <Route path='/admin/login' element={ <AdminLogin />} />

        </Routes>
      </Router>
     
    </div>

  );
}

export default App;
