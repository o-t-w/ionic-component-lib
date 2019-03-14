import "../src/index.css";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import { configure } from "@storybook/react";

function loadStories() {
  const req = require.context("./stories", true, /\.stories\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
