import ReactDOM from 'react-dom/client';
import Header from '~/src/components/Header'
import Content from '~/src/components/Content'
import Error from '~/src/components/Error'
import Body from '~/src/components/Body'
import Dynamic from '~/src/components/Dynamic'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from 'react'


const DynamicPage = lazy(() => import('~/src/components/Dynamic'))

const AppLayout = () => {
  return (
    <div className='app py-4 px-4'>
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
      {
        path: '/dynamic',
        // element: <Dynamic />
        element: (<Suspense fallback={<h1>No Data found</h1>}><DynamicPage /></Suspense>)
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)