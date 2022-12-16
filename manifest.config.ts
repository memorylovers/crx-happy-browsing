import { defineManifest } from "@crxjs/vite-plugin";
import pkg from "./package.json";

export const manifest = defineManifest({
  manifest_version: 3,
  name: "Happppppppppy Browssssssing!!!!!!",
  description: pkg.description,
  version: pkg.version,
  icons: {
    "16": "icons/icon_16.png",
    "32": "icons/icon_32.png",
    "48": "icons/icon_48.png",
    "128": "icons/icon_128.png",
  },
  permissions: ["storage"],
  action: {
    default_popup: "pages/popup.html",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/scripts/contentScript"],
    },
  ],
  web_accessible_resources: [
    {
      matches: ["<all_urls>"],
      resources: ["icons/*", "lotties/*", "sound/*"],
      use_dynamic_url: false,
    },
  ],
  host_permissions: ["<all_urls>"],
});
