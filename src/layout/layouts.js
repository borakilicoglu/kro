import FullPageLayout from "./layouts/full/FullPageLayout";
import VerticalLayout from "./VerticalLayout";
import HorizontalLayout from "./HorizontalLayout";

import EmptyLayout from "./layouts/empty/EmptyLayout";
import BasicLayout from "./layouts/vertical/BasicLayout";
import ClassicLayout from "./layouts/vertical/ClassicLayout";

import ClassyLayout from "./layouts/vertical/ClassyLayout";
import CompactLayout from "./layouts/vertical/CompactLayout";
import DenseLayout from "./layouts/vertical/DenseLayout";

import FuturisticLayout from "./layouts/vertical/FuturisticLayout";
import ThinLayout from "./layouts/vertical/ThinLayout";
import CenteredLayout from "./layouts/horizontal/CenteredLayout";

import EnterpriseLayout from "./layouts/horizontal/EnterpriseLayout";
import MaterialLayout from "./layouts/horizontal/MaterialLayout";
import ModernLayout from "./layouts/horizontal/ModernLayout";

const layouts = {
  full: FullPageLayout,
  vertical: VerticalLayout,
  horizontal: HorizontalLayout,
  empty: EmptyLayout,
  centered: CenteredLayout,
  enterprise: EnterpriseLayout,
  material: MaterialLayout,
  modern: ModernLayout,
  basic: BasicLayout,
  classic: ClassicLayout,
  classy: ClassyLayout,
  compact: CompactLayout,
  dense: DenseLayout,
  futuristic: FuturisticLayout,
  thin: ThinLayout,
};

export default layouts;
