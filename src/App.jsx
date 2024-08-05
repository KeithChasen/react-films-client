import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import { Home, Settings, Recommend } from './pages';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children : [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/recommend',
        element: <Recommend />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
