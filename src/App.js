// import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
