import { useEffect } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";

import Navbar from "components/Navbar";
import Layout from "components/Layout";
import Analytics from "components/Analytics";

import theme from "styles/theme";
import GlobalStyles from "styles/global.styles";

const languages = {
  en: require("../locale/en.json"),
  pt: require("../locale/pt.json"),
};

import * as gtag from "lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const messages = languages[locale];

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <IntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="theme-color" content="#B4FFFE" />
          <title>Victor Menezes</title>
          <link rel="shortcut icon" href="/assets/img/favicon.ico" />
          <link
            rel="apple-touch-icon"
            href="/assets/img/apple-touch-icon.png"
          />
          <meta
            name="description"
            content="Um blog sobre ciência da computação e ciência. Feito por um entusiasta de matemática, física e programação."
          />
        </Head>
        <NextSeo
          canonical="https://victormenezes.fly.dev/"
          openGraph={{
            url: "https://victormenezes.fly.dev/",
            site_name: "Victor Menezes",
            locale: "en_US",
            type: "website",
          }}
        />
        <GlobalStyles />
        <Layout>
          <Navbar />
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
