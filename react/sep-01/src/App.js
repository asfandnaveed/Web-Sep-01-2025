import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/navbar/Navbar';
import AdminLogin from './pages/Admin/Login';
import FirebaseRegister from './pages/Firebase/FirebaseRegister';
import FirebaseChat from './pages/Firebase/FirebaseChat';
import FirebaseLogin from './pages/Firebase/FirebaseLogin';
import Payment from './pages/Payment';

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar/> */}
        <Routes>

          <Route path='/' element={<Payment />} />
          <Route path='/login' element={<FirebaseLogin />} />
          <Route path="/register" element={<FirebaseRegister />} />
          <Route path='/chat' element={<FirebaseChat />} />
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
