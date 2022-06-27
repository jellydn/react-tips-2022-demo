import "@testing-library/jest-dom/extend-expect";
import { jestPreviewConfigure } from "jest-preview";

import "./index.css";

jestPreviewConfigure({
  autoPreview: true,
});
