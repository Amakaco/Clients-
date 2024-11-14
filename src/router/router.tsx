import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import StartPage from "../Pages/StartPage";
import CreateGoal from "../Pages/CreateGoal";
import ViewGoals from "../Pages/ViewGoals";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, path: "/", element: <StartPage /> },
      { index: true, path: "Create", element: <CreateGoal /> },
      { index: true, path: "View", element: <ViewGoals /> },

      // { path: "/sider", element: <Sider /> },
    ],
  },
]);
