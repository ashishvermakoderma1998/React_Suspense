import { useState } from 'react'
import './App.css'
import { Suspense, lazy } from 'react'

const Cars = lazy(()=> import('./MyCar'));

function App() {
  

  return (
    <>
    <Suspense fallback={<div>Loading....</div>}>
    <Cars/>
    </Suspense>
    </>
  )
}

export default App
