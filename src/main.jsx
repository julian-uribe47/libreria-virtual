import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { VirtualLibrery } from './components/VirtualLibrery.jsx'
// import { BookAside } from './components/BookAside.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BookAside /> */}
    <VirtualLibrery />
  </React.StrictMode>,
)
