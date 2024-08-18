import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import CardServicios from './components/CardServicios'
import CardImagen from './components/CardImagen'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <CardServicios/>
    <CardImagen/>
  </StrictMode>,
)
