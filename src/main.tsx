import { createRoot } from 'react-dom/client'
import { HelmetProvider } from "react-helmet-async";

import App from './app/App.tsx'
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css"
import "./styles/font.css"
import "./styles/common.css"

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
)
