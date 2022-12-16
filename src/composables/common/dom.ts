import { AnimPos } from "../../types";

export const createAnimContainer = (container: HTMLElement, animPos: AnimPos, animPath: string) => {
  const elm = container.ownerDocument.createElement("div");
  elm.style.position = `fixed`;
  elm.style.top = "0";
  elm.style.left = "0";

  elm.style.width = `${animPos.width}.px`;
  elm.style.height = `${animPos.height}.px`;
  elm.style.zIndex = `99999`;

  elm.style.pointerEvents = "none";
  elm.style.transform = `translate3d(${animPos.left}px, ${animPos.top}px, 0)`;

  elm.setAttribute("data-path", animPath);
  container.appendChild(elm);
  return elm;
};
