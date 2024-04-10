import ReactDOM from 'react-dom/client';
import Header from '~/src/components/Header'
import Content from '~/src/components/Content'
import Error from '~/src/components/Error'
import Body from '~/src/components/Body'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
      {/* <Body /> */}
    </div>
  ) 
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: "/content/:city/:placeName/:info",
        element: <Content />,
      },
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)