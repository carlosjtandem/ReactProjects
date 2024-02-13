import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css'
import { Index } from './pages/Index';
import { Create } from './pages/create';
import  View  from './pages/view';
import  Store from './store/store';

function App() {

  return (
    <>
      <Store>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='view/:bookId' element={<View />}></Route>

            <Route path='*' element={<div>
              <h1>ERROR. Página no existe</h1>
            </div>} />
          </Routes>
        </BrowserRouter>
      </Store>
    </>
  )
}

export default App
