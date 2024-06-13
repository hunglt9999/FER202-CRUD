
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header1 from './components/baitap1/Header'
import HomePage from './components/baitap1/HomePage';
import About from './components/baitap1/About';
import Product from './components/baitap1/Product';


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header1 />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
