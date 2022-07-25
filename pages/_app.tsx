import type { AppProps } from "next/app";
import Head from "next/head";
import config from "../config";
import theme from "../config/theme";
import { createGlobalStyle } from "styled-components";
import { DataProvider } from "../data";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<DataProvider>
			<Head>
				<title>{config.siteTitle}</title>
			</Head>
			<GlobalStyle />
			<Component {...pageProps} />
		</DataProvider>
	);
}

// Global CSS
const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: ${theme.colors.primary};
        --color-secondary: ${theme.colors.secondary};
        --font-main: ${theme.font.main}, ${theme.font.fallBacks};
    }
    * {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: var(--font-main);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }
`;

export default MyApp;
