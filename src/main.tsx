import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './navigation/Navigation.tsx';
import { BrowserRouter } from "react-router-dom";
import CustomCursor from './components/CustomCursor.tsx';
import Background from './components/Background.tsx';

createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
    <StrictMode>
      <Navigation />
      <CustomCursor />
      <Background />
    </StrictMode>
  </BrowserRouter>
)


