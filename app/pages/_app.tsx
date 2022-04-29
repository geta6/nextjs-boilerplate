import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { reset } from 'styled-reset';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
import { meta } from '../utils/meta';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
    background-color: ${({ theme }) => theme.color.background};
    touch-action: manipulation;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: unset;

    @media only screen and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  body {
    color: ${({ theme }) => theme.color.text};
    font-size: 1rem;
    font-weight: 300;
    line-height: 2;
    overflow: hidden;
  }
`;

export default class extends App {
  render = () => {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={meta.description} />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta name="twitter:card" content="summary" />
          <title>{meta.title}</title>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  };
}
