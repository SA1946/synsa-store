import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { Home, ProductDetail, Service } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path=":id" element={<ProductDetail />} />
      <Route path="service" element={<Service/> } />
      <Route path="accessories" element={<h1>Accessories Page</h1>} />
      <Route path="contactUs" element={<h1>Contact Us</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
