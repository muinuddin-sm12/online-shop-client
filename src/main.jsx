import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <div className="max-w-[1536px]  mx-auto ">
    <RouterProvider router={router} />
  </div>
);
