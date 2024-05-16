import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import CreateQuote from "./components/CreateQuote";
import Home from "./components/Home";
import OtherProfile from "./components/OtherProfile";
import NotFound from "./components/NotFound";
export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <CreateQuote />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/:userid",
    element: <OtherProfile />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
