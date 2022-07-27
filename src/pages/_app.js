import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Navbar from "components/Navbar";
import Layout from "components/Layout";

import theme from "styles/theme";
import GlobalStyles from "styles/global.styles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
