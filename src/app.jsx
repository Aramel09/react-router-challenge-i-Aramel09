import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home";
import { information } from "./pages/loaders";
import Profile from "./pages/profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Home />} loader={information} />
      <Route
        path="/userProfile/:id"
        element={<Profile />}
        loader={information}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">React-router Users</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
