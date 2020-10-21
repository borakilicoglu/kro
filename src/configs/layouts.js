import FullPageLayout from "../layout/layouts/full/FullPageLayout";
import VerticalLayout from "../layout/VerticalLayout";
import HorizontalLayout from "../layout/HorizontalLayout";

import EmptyLayout from "../layout/layouts/empty/EmptyLayout";
import BasicLayout from "../layout/layouts/vertical/BasicLayout";
import ClassicLayout from "../layout/layouts/vertical/ClassicLayout";

import ClassyLayout from "../layout/layouts/vertical/ClassyLayout";
import CompactLayout from "../layout/layouts/vertical/CompactLayout";
import DenseLayout from "../layout/layouts/vertical/DenseLayout";

import FuturisticLayout from "../layout/layouts/vertical/FuturisticLayout";
import ThinLayout from "../layout/layouts/vertical/ThinLayout";
import CenteredLayout from "../layout/layouts/horizontal/CenteredLayout";

import EnterpriseLayout from "../layout/layouts/horizontal/EnterpriseLayout";
import MaterialLayout from "../layout/layouts/horizontal/MaterialLayout";
import ModernLayout from "../layout/layouts/horizontal/ModernLayout";

const layouts = {
  full: FullPageLayout,
  vertical: VerticalLayout,
  horizontal: HorizontalLayout,
  empty: EmptyLayout,
  centered: BasicLayout,
  enterprise: ClassicLayout,
  material: ClassyLayout,
  modern: CompactLayout,
  basic: DenseLayout,
  classic: FuturisticLayout,
  classy: ThinLayout,
  compact: CenteredLayout,
  dense: EnterpriseLayout,
  futuristic: MaterialLayout,
  thin: ModernLayout,
};

export default layouts;
