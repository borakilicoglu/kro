import React from "react";

import FullPageLayout from "../../layout/layouts/full/FullPageLayout";
import VerticalLayout from "../../layout/VerticalLayout";
import HorizontalLayout from "../../layout/HorizontalLayout";

import EmptyLayout from "../../layout/layouts/empty/EmptyLayout";
import BasicLayout from "../../layout/layouts/vertical/BasicLayout";
import ClassicLayout from "../../layout/layouts/vertical/ClassicLayout";

import ClassyLayout from "../../layout/layouts/vertical/ClassyLayout";
import CompactLayout from "../../layout/layouts/vertical/CompactLayout";
import DenseLayout from "../../layout/layouts/vertical/DenseLayout";

import FuturisticLayout from "../../layout/layouts/vertical/FuturisticLayout";
import ThinLayout from "../../layout/layouts/vertical/ThinLayout";
import CenteredLayout from "../../layout/layouts/horizontal/CenteredLayout";

import EnterpriseLayout from "../../layout/layouts/horizontal/EnterpriseLayout";
import MaterialLayout from "../../layout/layouts/horizontal/MaterialLayout";
import ModernLayout from "../../layout/layouts/horizontal/ModernLayout";

import themeConfig from "../../configs/themeConfig";
const layouts = {
  full: FullPageLayout,
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
          verticalLayout: layouts["vertical"],
          horizontalLayout: layouts["horizontal"],
          emptyLayout: layouts["empty"],
          basicLayout: layouts["basic"],
          classicLayout: layouts["classic"],
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
