/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*?script&module" {
  const script: any;
  export default script;
}

declare module "*?script" {
  const script: any;
  export default script;
}
