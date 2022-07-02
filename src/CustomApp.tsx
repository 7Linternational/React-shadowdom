import WrappedComponent from "./WrappedComponent";
import { OfferCardDemo } from "./CustomCard";
import { StyleSheetManager } from "styled-components";
import { useEffect } from "react";
import { inlineStyle } from './styles';

export function CustomApp() {
  const styleObj = document.getElementById("style-section");
  const family = "Rubik";

  useEffect(() => {
    const container = document.getElementById("custom-root");
    const styleSlot = document.createElement("section");
    styleSlot.id = "style-section";
    styleSlot.innerHTML = "<style></style>";
    // append the styleSlot inside the shadow
    container?.shadowRoot?.appendChild(styleSlot);
    const styleDom = container!.shadowRoot!.getElementById("style-section");

    if (styleDom) {
      // add fonts
      var fontFamilyStyle = ``;

      let link = document.createElement('link');
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = 'https://fonts.googleapis.com/css2?family=' + family.replace(' ', '+') + ':wght@300;400;700&display=swap';
      document.head.appendChild(link);
      fontFamilyStyle = `${family}`;

      styleDom!.querySelector("style")!.innerHTML = `
          :host {
            --white: #fff;       
            --button-font-color: ;
            --font-title-color: #fb703c;       
            --font-subtitle-color: #48bbb5;
            --font-family: ${fontFamilyStyle};
          }`;
    }

  }, []);

  return (
    <div>
      <style>{inlineStyle}</style>


      <WrappedComponent>
        <OfferCardDemo />
      </WrappedComponent>

    </div>
  );
}
