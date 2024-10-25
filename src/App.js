import ReactDOM from 'react-dom/client';
import Header from '~/src/components/Header'
import Content from '~/src/components/Content'
import Error from '~/src/components/Error'
import Body from '~/src/components/Body'
import Dynamic from '~/src/components/Dynamic'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import store from '~/src/store/index.js'


const DynamicPage = lazy(() => import('~/src/components/Dynamic'))
console.log('app added in the component')
const AppLayout = () => {
  console.log('layoit')
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

root.render(<Provider store={store}><RouterProvider router={appRouter}></RouterProvider></Provider>)