import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Terms from "./pages/Terms";

export const routes = [
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/ourstory",
    element: <OurStory/>
  },
  {
    path: "/shop",
    element: <Shop/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/terms",
    element: <Terms/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/product/:id",
    element: <ProductPage/>
  },
]