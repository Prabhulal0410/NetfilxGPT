import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      // ⭐ SEO: Title for login page
      handle: { title: "Login – NetflixGPT" },
    },
    {
      path: "browse",
      element: <Browse />,
      // ⭐ SEO: Title for browse page
      handle: { title: "Browse Movies – NetflixGPT" },
    },
  ]);

  return (
    <div>
      {/* CSR SEO: React Router Provider */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
