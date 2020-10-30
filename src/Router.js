import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./history";
import Fallback from "./@nucleo/components/fallback/Fallback.js";
import { ContextLayout } from "./utility/context/Layout";

// Route-based code splitting
const Finance = lazy(() => import("./views/pages/Finance"));
const Analytics = lazy(() => import("./views/pages/Analytics"));
const Crypto = lazy(() => import("./views/pages/Crypto"));
const Calendar = lazy(() => import("./views/pages/Calendar"));
const Contacts = lazy(() => import("./views/pages/contact/Contacts"));
const Inventory = lazy(() => import("./views/pages/ecommerce/Inventory"));
const Mailbox = lazy(() => import("./views/pages/mailbox/Mailbox"));
const Tasks = lazy(() => import("./views/pages/tasks/Tasks"));
const SignIn = lazy(() => import("./views/pages/authentication/SignIn"));
const SignUp = lazy(() => import("./views/pages/authentication/SignUp"));
const SignOut = lazy(() => import("./views/pages/authentication/SignOut"));
const Classic = lazy(() => import("./views/pages/comingsoon/Classic"));
const Modern = lazy(() => import("./views/pages/comingsoon/Modern"));
const ModernAlt = lazy(() => import("./views/pages/comingsoon/ModernAlt"));
const Fullscreen = lazy(() => import("./views/pages/comingsoon/Fullscreen"));
const FullscreenAlt = lazy(() =>
  import("./views/pages/comingsoon/FullscreenAlt")
);
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

const Error404 = lazy(() => import("./views/pages/errors/Error404"));
const Error500 = lazy(() => import("./views/pages/errors/Error500"));

const Home = lazy(() => import("./views/pages/helpcenter/Home"));
const Faqs = lazy(() => import("./views/pages/helpcenter/Faqs"));
const Guides = lazy(() => import("./views/pages/helpcenter/Guides"));
const Support = lazy(() => import("./views/pages/helpcenter/Support"));

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
            let LayoutTag = context.layouts[context.state.activeLayout];
            return (
              <LayoutTag
                {...props}
                context={context.state}
                permission={props.user}
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
          <AppRoute path="/ecommerce/inventory" component={Inventory} />
          <AppRoute path="/mailbox/:params" component={Mailbox} />
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
          <AppRoute path="/coming-soon/classic" component={Classic} />
          <AppRoute
            path="/coming-soon/fullscreen"
            component={Fullscreen}
            fullLayout
          />
          <AppRoute
            path="/coming-soon/fullscreen-alt"
            component={FullscreenAlt}
            fullLayout
          />
          <AppRoute path="/coming-soon/modern" component={Modern} />
          <AppRoute path="/coming-soon/modern-alt" component={ModernAlt} />

          <AppRoute path="/errors/404" component={Error404} />
          <AppRoute path="/errors/500" component={Error500} />

          <AppRoute path="/help-center" component={Home} />
          <AppRoute path="/help-center/faqs" component={Faqs} />
          <AppRoute path="/help-center/guides" component={Guides} />
          <AppRoute path="/help-center/support" component={Support} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
