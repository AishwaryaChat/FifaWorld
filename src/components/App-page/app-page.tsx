import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import Layout from "../Layout/layout";
import { theme } from "src/utils/theme";
interface CustomPageProps {
  // <--- your custom page props
}

export default function App({
  Component,
  pageProps,
}: AppProps<CustomPageProps>) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
