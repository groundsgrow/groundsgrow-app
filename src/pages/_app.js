// pages/_app.js
import { ChakraProvider, DarkMode, Flex } from "@chakra-ui/react";
import "../../styles/globals.css";
import chakraTheme from "theme";
import { HomepageTopNav } from "components/navbar";
import { generateBreakpointTypographyCssVars } from "tw-components/utils/typography";
import { Global, css } from "@emotion/react";
import Footer from "components/Footer";

const fontSizeCssVars = generateBreakpointTypographyCssVars();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          ${fontSizeCssVars}
        `}
      />
      <ChakraProvider theme={chakraTheme}>
        <DarkMode>
          <Flex
            sx={{
              // overwrite the theme colors because the home page is *always* in "dark mode"
              "--chakra-colors-heading": "#F2F2F7",
              "--chakra-colors-paragraph": "#AEAEB2",
              "--chakra-colors-borderColor": "rgba(255,255,255,0.1)",
            }}
            justify="center"
            flexDir="column"
            as="main"
            bg="#000"
          >
            <HomepageTopNav />
            <Component {...pageProps} />
            <Footer />
          </Flex>
        </DarkMode>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
