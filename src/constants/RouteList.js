import Home from '../Screens/Home/Home'
import About from '../Screens/About/About'
import Products from '../Screens/Product Data/Products'
import ProductDetailedPage from '../Screens/Product Data/ProductDetailedPage';

export const RouteList = [{
    path: "/",
    element: <Home />
}, {
    path: "/about",
    element: <About />
}, {
    path: "/products",
    element: <Products />
}, {
    path: "/products/:id",
    element: <ProductDetailedPage />
}];
