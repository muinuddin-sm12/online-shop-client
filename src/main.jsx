import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import AuthProvider from "./provider/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <div className="max-w-[1536px]  mx-auto ">
      <RouterProvider router={router} />
    </div>
      <Toaster/>
  </AuthProvider>
);
