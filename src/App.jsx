import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { ToastContainer, toast, Bounce } from 'react-toastify';

const App = () => {
  return (
    <>
      <Router>

        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        

        <div className='bg-gray-950 min-h-screen font-sans relative pb-10'>
          <Navbar />

          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>

          <Footer />
        </div>

      </Router>
    </>
  )
}

export default App
