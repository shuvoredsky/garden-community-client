import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp.jsx";
import ShareTipForm from "../pages/ShareTipForm.jsx";
import BrowseTips from "../pages/BrowseTips.jsx";
import TipDetails from "../pages/TipDetails.jsx";
import PrivetRoute from "../Components/PrivetRoute.jsx";
import MyTips from "../pages/MyTips.jsx";
import UpdateMyTips from "../pages/UpdateMyTips.jsx";
import ExploreGardenr from "../pages/ExploreGardenr.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/my-tips",
        loader: () =>
          fetch("https://garden-community-server.vercel.app/gardener/"),
        element: (
          <PrivetRoute>
            <MyTips></MyTips>
          </PrivetRoute>
        ),
      },
      {
        path: "/browse-tips",
        Component: BrowseTips,
      },
      {
        path: "/update-tips/:id",
        loader: ({ params }) =>
          fetch(
            `https://garden-community-server.vercel.app/gardener/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <UpdateMyTips></UpdateMyTips>
          </PrivetRoute>
        ),
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
        element: (
          <PrivetRoute>
            <ShareTipForm></ShareTipForm>
          </PrivetRoute>
        ),
      },
      {
        path: "/explore-gardeners",
        Component: ExploreGardenr,
      },
      {
        path: "/gardener/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://garden-community-server.vercel.app/gardener/${params.id}`
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
