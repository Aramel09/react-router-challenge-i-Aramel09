import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AddContact from "./pages/add-contact";
import Home from "./pages/home";
import Layout from "./pages/layout";
import { information } from "./pages/loaders";
import Profile from "./pages/profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} loader={information} />
      <Route
        path="/userProfile/:id"
        element={<Profile />}
        loader={information}
      />
      <Route path="/Add-Contact" element={<AddContact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
