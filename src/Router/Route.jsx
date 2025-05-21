import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home";
import About from "../pages/MyTips.jsx";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp.jsx";
import ShareTipForm from "../pages/ShareTipForm.jsx";
import BrowseTips from "../pages/BrowseTips.jsx";
import TipDetails from "../pages/TipDetails.jsx";
import PrivetRoute from "../Components/PrivetRoute.jsx";
import MyTips from "../pages/MyTips.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/my-tips",
        loader: () => fetch("http://localhost:3000/gardener/"),
        Component: MyTips,
      },
      {
        path: "/browse-tips",
        Component: BrowseTips,
      },
      {
        path: "/update-tips/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/gardener/${params.id}`),
        Component: BrowseTips,
      },
      {
        path: "/sign-in",
        Component: SignIn,
      },
      {
        path: "/sign-up",
        Component: SignUp,
      },
      {
        path: "/share-tip",
        Component: ShareTipForm,
      },
      {
        path: "/gardener/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:3000/gardener/${params.id}`
          );
          return await res.json();
        },
        element: (
          <PrivetRoute>
            <TipDetails></TipDetails>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
