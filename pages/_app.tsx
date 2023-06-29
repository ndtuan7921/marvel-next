import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import customTheme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { UserContextProvider } from "../src/context";
import { NextPage } from "next";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import MainLayout from "../src/layouts/MainLayout";
import { Router } from "next/router";
import Loading from "../src/components/Loading";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  isPrivate?: boolean;
};

type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  const protectRoute = Component.isPrivate ?? true;

  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  const layout = getLayout(<Component {...pageProps} />);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={customTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <UserContextProvider>
          {loading ? <Loading /> : layout}
        </UserContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
