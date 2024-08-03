import React from 'react'
import AppRouter from './Utils/AppRouter'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
  const Router= createBrowserRouter(AppRouter)
  return <>
        <RouterProvider router={Router} />
  </>

}

export default App