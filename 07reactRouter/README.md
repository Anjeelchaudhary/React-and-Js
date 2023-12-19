# Router Notes

#### # Layout

```
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />              //components
            <Outlet />
            <Footer />             //components
        </>
    )
}

export default Layout
```

#### # Layout 1stMethod

```
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

 const router = createBrowserRouter([
   {
     path: '/',
     element: <Layout /> ,
     children: [
       {
         path: '/',
         element: <Home />
       }, {
         path: '/',
         children: <About />
       }, {
         path: '/',
         children: <Contact />
       },
     ]
   },
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
```

#### # Layout 2ndMethod

```
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
```

#### # Layout

```
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />              //components
            <Outlet />
            <Footer />             //components
        </>
    )
}

export default Layout
```
