import React from "react";

import FullLayout from "../../layouts/FullpageLayout";
import VerticalLayout from "../../layouts/VerticalLayout";
import HorizontalLayout from "../../layouts/HorizontalLayout";

import EmptyLayout from "../../layouts/EmptyLayout";
import BasicLayout from "../../layouts/BasicLayout";
import ClassicLayout from "../../layouts/ClassicLayout";

import ClassyLayout from "../../layouts/ClassyLayout";
import CompactLayout from "../../layouts/CompactLayout";
import DenseLayout from "../../layouts/DenseLayout";

import FuturisticLayout from "../../layouts/FuturisticLayout";
import ThinLayout from "../../layouts/ThinLayout";
import CenteredLayout from "../../layouts/CenteredLayout";

import EnterpriseLayout from "../../layouts/EnterpriseLayout";
import MaterialLayout from "../../layouts/MaterialLayout";
import ModernLayout from "../../layouts/ModernLayout";

import themeConfig from "../../configs/themeConfig";
const layouts = {
  full: FullLayout,
  vertical: VerticalLayout,
  horizontal: HorizontalLayout,
  empty: EmptyLayout,
  basic: BasicLayout,
  classic: ClassicLayout,
  classy: ClassyLayout,
  compact: CompactLayout,
  dense: DenseLayout,
  futuristic: FuturisticLayout,
  thin: ThinLayout,
  centered: CenteredLayout,
  enterprise: EnterpriseLayout,
  material: MaterialLayout,
  modern: ModernLayout,
};

const ContextLayout = React.createContext();

class Layout extends React.Component {
  state = {
    activeLayout: themeConfig.layout,
    width: window.innerWidth,
    lastLayout: null,
    direction: themeConfig.direction,
  };

  updateWidth = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  handleWindowResize = () => {
    this.updateWidth();
    if (this.state.activeLayout === "horizontal" && this.state.width <= 1199) {
      this.setState({
        activeLayout: "vertical",
        lastLayout: "horizontal",
      });
    }

    if (this.state.lastLayout === "horizontal" && this.state.width >= 1199) {
      this.setState({
        activeLayout: "horizontal",
        lastLayout: "vertical",
      });
    }
  };

  componentDidMount = () => {
    if (window !== "undefined") {
      window.addEventListener("resize", this.handleWindowResize);
    }
    this.handleDirUpdate();
    if (this.state.activeLayout === "horizontal" && this.state.width <= 1199) {
      this.setState({
        activeLayout: "vertical",
      });
    } else if (
      themeConfig.layout === "horizontal" &&
      this.state.width >= 1200
    ) {
      this.setState({
        activeLayout: "horizontal",
      });
    } else {
      this.setState({
        activeLayout: "vertical",
      });
    }
  };

  componentDidUpdate() {
    this.handleDirUpdate();
  }

  handleDirUpdate = () => {
    let dir = this.state.direction;
    if (dir === "rtl")
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    else document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
  };

  render() {
    const { children } = this.props;
    return (
      <ContextLayout.Provider
        value={{
          state: this.state,
          fullLayout: layouts["full"],
          VerticalLayout: layouts["vertical"],
          horizontalLayout: layouts["horizontal"],
          switchLayout: (layout) => {
            this.setState({ activeLayout: layout });
          },
          switchDir: (dir) => {
            this.setState({ direction: dir });
          },
        }}
      >
        {children}
      </ContextLayout.Provider>
    );
  }
}

export { Layout, ContextLayout };
