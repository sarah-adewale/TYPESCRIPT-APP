import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/shoppingCartContext'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Header />
      <Container className='mb-4'> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  )
}

export default App