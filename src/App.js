import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routers";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto px-3 bg-[#EEEEEE]">
      <RouterProvider router={router}></RouterProvider>
    </div>

  );
}

export default App;
