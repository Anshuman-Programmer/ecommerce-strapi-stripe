import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import "./_app.scss"
import "./_utils.scss"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [{
      path: "/",
      element: <Home/>
    },{
      path: "/products/:id",
      element: <Products/>
    },{
      path: "/product/:id",
      element: <Product/>
    },]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
