import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import Layout from "../Layout/layout";
import { theme } from "src/utils/theme";
import styles from "./app-page.module.css";
import { Container } from "@mui/system";
interface CustomPageProps {
  // <--- your custom page props
  title: String;
}

export default function App({
  Component,
  pageProps,
}: AppProps<CustomPageProps>) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Container className={styles.container}>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </ThemeProvider>
  );
}
