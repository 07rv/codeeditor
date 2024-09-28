import Home from "../src/pages/Home";
import EditorPage from "../src/pages/EditorPage";
import Toaster from "./components/Toaster";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import SideBar from "./components/SideBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "editor/:id",
    element: (
      <SideBar>
        <EditorPage />
      </SideBar>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
