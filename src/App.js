import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './utils/Route'

function App() {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
