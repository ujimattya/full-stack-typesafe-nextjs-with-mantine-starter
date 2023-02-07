import "@/styles/globals.css";
import type { AppType } from "next/app";
import { api } from "../utils/api";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "next-themes";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </MantineProvider>
  );
};
export default api.withTRPC(MyApp);
