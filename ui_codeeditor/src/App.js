import Home from "../src/pages/Home";
import EditorPage from "../src/pages/EditorPage";
import Toaster from "./components/Toaster";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <>Not Found</>,
  },
  {
    path: "editor/:id",
    element: <EditorPage />,
    errorElement: <>Not Found</>,
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
