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
const Mailbox = lazy(() => import("./views/pages/Mailbox"));
const Tasks = lazy(() => import("./views/pages/Tasks"));
const SignIn = lazy(() => import("./views/pages/authentication/SignIn"));
const SignUp = lazy(() => import("./views/pages/authentication/SignUp"));
const SignOut = lazy(() => import("./views/pages/authentication/SignOut"));
const ForgotPassword = lazy(() =>
  import("./views/pages/authentication/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
);
const UnlockSession = lazy(() =>
  import("./views/pages/authentication/UnlockSession")
);
const ConfirmationRequired = lazy(() =>
  import("./views/pages/authentication/ConfirmationRequired")
);

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  permission,
  user,
  fixedHeader,
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
              <LayoutTag
                {...props}
                permission={props.user}
                fixedHeader={fixedHeader}
              >
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
          <AppRoute path="/analytics" component={Analytics} />
          <AppRoute path="/crypto" component={Crypto} />
          <AppRoute path="/calendar" component={Calendar} />
          <AppRoute path="/contacts" component={Contacts} />
          <AppRoute
            path="/ecommerce/inventory"
            component={Inventory}
            fixedHeader
          />
          <AppRoute path="/mailbox" component={Mailbox} />
          <AppRoute path="/tasks" component={Tasks} />
          <AppRoute
            path="/authentication/sign-in"
            component={SignIn}
            fullLayout
          />
          <AppRoute
            path="/authentication/sign-up"
            component={SignUp}
            fullLayout
          />
          <AppRoute
            path="/authentication/sign-out"
            component={SignOut}
            fullLayout
          />
          <AppRoute
            path="/authentication/forgot-password"
            component={ForgotPassword}
            fullLayout
          />
          <AppRoute
            path="/authentication/reset-password"
            component={ResetPassword}
            fullLayout
          />
          <AppRoute
            path="/authentication/unlock-session"
            component={UnlockSession}
            fullLayout
          />
          <AppRoute
            path="/authentication/confirmation-required"
            component={ConfirmationRequired}
            fullLayout
          />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
