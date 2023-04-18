import Dashboard, { dashboardLoader } from "./pages/Dashboard"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from "./pages/Error"
import Main, { mainLoader } from "./layouts/Main"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children:[
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: dashboardLoader
      }
    ]
  },
  
])

function App() {
  

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
