import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { Header } from "./components/Header.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import { About } from "./pages/About.jsx";
import { Services } from "./pages/Services.jsx";
import { ContactPage } from "./pages/ContactPage.jsx"
import { PortfolioPage } from "./pages/PortfolioPage.jsx";

// eslint-disable-next-line react-refresh/only-export-components
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
