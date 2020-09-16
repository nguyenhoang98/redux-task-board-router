import React from "react";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import PagesProducts from "./Pages/PagesProducts/PagesProducts";
import PagesActionProducts from "./Pages/PagesActionProducts/PagesActionProducts";
const routers = [
  {
    component: () => <Home />,
    path: "/",
    exact: true,
  },
  {
    component: () => <PagesProducts />,
    path: "/products",
    exact: false,
  },
  {
    component: (props) => (
      <PagesActionProducts history={props.history} location={props.location} />
    ),
    path: "/add-product",
    exact: true,
  },
  {
    component: (props) => (
      <PagesActionProducts
        history={props.history}
        location={props.location}
        match={props.match}
      />
    ),
    path: "/add-product/:id",
    exact: false,
  },
  {
    component: () => <NotFound />,
    path: "*",
    exact: false,
  },
];
export default routers;
