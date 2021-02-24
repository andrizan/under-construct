import React, { Fragment } from "react";
import App, { Container } from "next/app";
import Head from "next/head";

import NProgress from "nprogress";
import Router from "next/router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "../config/style";
import dataProjects from "../src/data/projects";

// >>> Update progress bar on router events
/*
Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
*/

// >>> Global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --size-xxs: ${style.size.xxs};
    --size-xs: ${style.size.xs};
    --size-s: ${style.size.s};
    --size-m: ${style.size.m};
    --size-l: ${style.size.l};
    --size-xl: ${style.size.xl};
    --size-base: ${style.size.base};
    --size-base-fixed: ${style.size.base};
    --size-button: auto;


    @media (max-width: ${style.breakpoint.tabletLandscape}) {
      --size-button: 3rem;
    }

    @media (max-width: ${style.breakpoint.tabletPortrait}) {
      --size-xs: ${style.sizeMobile.xs};
      --size-s: ${style.sizeMobile.s};
      --size-m: ${style.sizeMobile.m};
      --size-l: ${style.sizeMobile.l};
      --size-xl: ${style.sizeMobile.xl};
      --size-base: ${style.sizeMobile.base};
    }
  }

  html, body, #__next {
    height: 100%;
  }


  html {
    font-size: 16px;
    scroll-behavior: smooth;

    @media (max-width: ${style.breakpoint.tabletPortrait}) {
      font-size: 13px;
    }

    @media (min-width: ${style.breakpoint.tabletLandscape}) {
      font-size: 16px;
    }

    @media (min-width: ${style.breakpoint.desktopM}) {
      font-size: 13px;
    }

    @media (min-width: ${style.breakpoint.desktopL}) {
      font-size: 15px;
    }

    @media (min-width: ${style.breakpoint.desktopXL}) {
      font-size: 16px;
    }

    @media (min-width: ${style.breakpoint.desktopXXL}) {
    font-size: 24px;
    }
  }

  body {
    color: ${style.color.dark};
    font-family: ${style.font.sansSerif};
    font-size: 19px;
    background-color: ${style.color.light};

    @media (max-width: ${style.breakpoint.tabletPortrait}) {
      font-size: 15px;
    }

    @media (min-width: ${style.breakpoint.tabletLandscape}) {
      font-size: 19px;
    }

    @media (min-width: ${style.breakpoint.desktopM}) {
      font-size: 15px;
    }

    @media (min-width: ${style.breakpoint.desktopL}) {
      font-size: 16px;
    }

    @media (min-width: ${style.breakpoint.desktopXL}) {
      font-size: 19px;
    }

    @media (min-width: ${style.breakpoint.desktopXXL}) {
      font-size: 28px;
    }
  }

  a img {outline : none;}
  img {border : 0;}
  a {outline : none;}
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Fragment>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          {/* >>> Favicon */}
          <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          {/* >>> CSS reset (destyle.css) */}
          <link rel="stylesheet" href="/static/destyle.css" />

          {/* >>> Google Fonts */}

          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|PT+Serif:400,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
            rel="stylesheet"
          />

          {/* >> Fontawesome */}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
            crossOrigin="anonymous"
          />

          {/* >>> Import CSS for nprogress */}
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />

          <title>Welcome | andrizan</title>
        </Head>

        <ThemeProvider theme={style}>
          <Container>
            <GlobalStyle />

            <Component projects={dataProjects} {...pageProps} />
          </Container>
        </ThemeProvider>
      </Fragment>
    );
  }
}
