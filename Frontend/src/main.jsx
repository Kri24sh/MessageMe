import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthcontextProvider } from './Context/AuthContex.jsx'
import { SocketContextProvider } from './Context/socketcontext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<AuthcontextProvider>
<SocketContextProvider>
    <App />
</SocketContextProvider>
</AuthcontextProvider>
</BrowserRouter>

);
