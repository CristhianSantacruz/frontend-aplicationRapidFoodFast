import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HeaderComponent from './components/HeaderComponent.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewCardFood from './components/NewCardFood.tsx'
import AuthorComponents from './components/AuthorComponents.tsx'

import FooterComponent from './components/FooterComponent.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient}>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/add-food" element={<NewCardFood/>}></Route>
          <Route path="/author" element={<AuthorComponents />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
