import Head from "next/head";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";

import Navbar from "components/Navbar";
import Layout from "components/Layout";

import theme from "styles/theme";
import GlobalStyles from "styles/global.styles";

const languages = {
  en: require("../locale/en.json"),
  pt: require("../locale/pt.json"),
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = languages[locale];

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
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
    </IntlProvider>
  );
}

export default MyApp;
