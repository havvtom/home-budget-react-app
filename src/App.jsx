import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from "./pages/Error"
import Main, { mainLoader } from "./layouts/Main"
import { logoutAction } from "./actions/logout"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction
      },
      {
        path:"logout",
        action: logoutAction
      }
    ]
  },
  
])

function App() {
  

  return (
    <div>
      <RouterProvider router={router}/>
      <ToastContainer />
    </div>
  )
}

export default App
