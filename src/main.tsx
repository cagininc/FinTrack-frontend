import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { searchCompanies } from './api';


//test
// searchCompanies("tsla")
//   .then(response => console.log(response))
//   .catch(error => console.error(error));




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
