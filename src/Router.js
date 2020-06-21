import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import Fallback from "./@nucleo/components/fallback/Fallback.js";
import { ContextLayout } from "./utility/context/Layout";

// Route-based code splitting
const Finance = lazy(() => import("./views/pages/Finance"));
const Analytics = lazy(() => import("./views/pages/Analytics"));
const Crypto = lazy(() => import("./views/pages/Crypto"));
const Calendar = lazy(() => import("./views/pages/Calendar"));
const Contacts = lazy(() => import("./views/pages/Contacts"));
const Inventory = lazy(() => import("./views/pages/ecommerce/Inventory"));
const Login = lazy(() => import("./views/pages/authentication/login/Login"));

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <ContextLayout.Consumer>
          {(context) => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Fallback />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
const mapStateToProps = (state) => {
  return {
    user: state.auth.login.userRole,
  };
};

const AppRoute = connect(mapStateToProps)(RouteConfig);

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute exact path="/" component={Finance} />
          <AppRoute exact path="/analytics" component={Analytics} />
          <AppRoute path="/crypto" component={Crypto} />
          <AppRoute path="/calendar" component={Calendar} />
          <AppRoute path="/contacts" component={Contacts} />
          <AppRoute path="/ecommerce/inventory" component={Inventory} />
          <AppRoute path="/login" component={Login} fullLayout />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
