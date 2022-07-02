import { ThemeProvider } from "@mui/styles";
import React, { PropsWithChildren, useEffect, useState } from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createTheme from "@mui/material/styles/createTheme";

export type Props = PropsWithChildren<{}>;

const WrappedComponent = (props: Props) => {
  const container = document.getElementById("custom-root");
  const [theme, setTheme] = useState(createTheme());
  const [cache, setCache] = useState(
    createCache({
      key: "css",
      prepend: true
    })
  );

  useEffect(() => {
    const styleSlot = document.createElement("section");
    styleSlot.id = "style-section-mui";
    styleSlot.innerHTML = "<style></style>";
    // append the styleSlot inside the shadow
    container?.shadowRoot?.appendChild(styleSlot);

    const popSlot = document.createElement("div");
    popSlot.id = "shadow-mui";
    container?.shadowRoot?.appendChild(popSlot);

    const emotionRoot = container?.shadowRoot?.getElementById(
      "style-section-mui"
    );

    const _cache = createCache({
      key: "css",
      prepend: true,
      container: emotionRoot!
    });

    setCache(_cache);

    const _theme = createTheme({
      components: {
        MuiPopover: {
          defaultProps: {
            container: container!.shadowRoot!.getElementById("shadow-mui")
          }
        },
        MuiPopper: {
          defaultProps: {
            container: container!.shadowRoot!.getElementById("shadow-mui")
          }
        }
      }
    });

    setTheme(_theme);
  }, [container]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CacheProvider value={cache}>{props.children}</CacheProvider>
      </ThemeProvider>
    </div>
  );
};

export default WrappedComponent;
