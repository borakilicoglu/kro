import React, { PureComponent } from "react";
import classnames from "classnames";
// import Sidebar from "./components/menu/horizontal-menu/HorizontalMenu";
// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
import themeConfig from "../configs/themeConfig";
import { connect } from "react-redux";
import {
  changeNavbarColor,
  changeNavbarType,
  changeFooterType,
  changeMenuColor,
  hideScrollToTop,
  changeMode,
} from "../redux/actions/customizer/index";

class HorizontalLayout extends PureComponent {
  state = {
    width: window.innerWidth,
    sidebarState: false,
    layout: this.props.app.customizer.theme,
    collapsedContent: false,
    sidebarHidden: false,
    currentLang: "en",
    appOverlay: false,
    customizer: false,
    isTouropen: false,
    currRoute: this.props.location.pathname,
    menuOpen: themeConfig.menuOpen,
  };

  updateWidth = () => {
    this.setState((prevState) => ({
      width: window.innerWidth,
    }));
  };

  updateScroll = () => {
    this.setState({ scroll: window.pageYOffset });
  };

  handleCustomizer = (bool) => {
    this.setState({
      customizer: bool,
    });
  };

  componentDidMount() {
    if (window !== "undefined") {
      window.addEventListener("resize", this.updateWidth, false);
      window.addEventListener("scroll", this.updateScroll, false);
    }
    if (this.props.location.pathname === "/pages/profile") {
      this.setState({
        sidebarState: true,
        collapsedContent: true,
      });
    }
    let layout = this.props.app.customizer.theme;
    return layout === "dark"
      ? document.body.classList.add("dark-layout")
      : layout === "semi-dark"
      ? document.body.classList.add("semi-dark-layout")
      : null;
  }

  componentDidUpdate() {
    if (this.state.currRoute !== this.props.location.pathname) {
      this.handleRouteChange();
      this.setState({
        currRoute: this.props.location.pathname,
      });
    }

    let layout = this.props.app.customizer.theme;
    if (layout === "dark") {
      document.body.classList.remove("semi-dark-layout");
      document.body.classList.add("dark-layout");
    } else if (layout === "semi-dark") {
      document.body.classList.remove("dark-layout");
      document.body.classList.add("semi-dark-layout");
    } else {
      return document.body.classList.remove("dark-layout", "semi-dark-layout");
    }
  }

  handleRouteChange = () => {
    if (this.props.location.pathname === "/pages/profile") {
      this.setState({
        collapsedContent: true,
      });
    } else {
      this.setState({
        sidebarState: false,
        collapsedContent: false,
      });
    }
  };

  toggleSidebarMenu = () => {
    this.setState({
      sidebarState: !this.state.sidebarState,
      collapsedContent: !this.state.collapsedContent,
    });
  };

  sidebarMenuHover = () => {
    this.setState({
      sidebarState: !this.state.sidebarState,
    });
  };

  handleSidebarVisibility = () => {
    window.addEventListener("resize", () => {
      if (this.state.sidebarHidden) {
        this.setState({
          sidebarHidden: !this.state.sidebarHidden,
        });
      }
    });
    this.setState({
      sidebarHidden: !this.state.sidebarHidden,
    });
  };

  handleCurrentLanguage = (lang) => {
    this.setState({
      currentLang: lang,
    });
  };

  handleAppOverlay = (value) => {
    if (value.length > 0)
      this.setState({
        appOverlay: true,
      });
    else if (value.length > 0 || value === "") {
      this.setState({
        appOverlay: false,
      });
    }
  };

  handleAppOverlayClick = () => {
    this.setState({
      appOverlay: false,
    });
  };

  render() {
    let customizerProps = this.props.app.customizer;
    let navbarTypeArr = ["sticky", "static", "sticky", "floating", "hidden"];
    let menuThemeArr = [
      "primary",
      "success",
      "danger",
      "info",
      "warning",
      "dark",
    ];
    return <div>Horizontal</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    app: state.customizer,
  };
};
export default connect(mapStateToProps, {
  changeNavbarColor,
  changeNavbarType,
  changeFooterType,
  changeMenuColor,
  hideScrollToTop,
  changeMode,
})(HorizontalLayout);
