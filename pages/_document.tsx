import { Html, Head, Main, NextScript } from "next/document";
import config from "../config";
let { siteTitle, description, domain, social, author } = config;

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Primary Tags */}
				<link rel="icon" href="/favicon.ico" />

				{/* Manifest.json is prepared dynamically based on values in config/index.ts */}
				<link rel="manifest" href="/api/manifest.json" />
				<meta charSet="utf-8" />
				<meta name="title" content={siteTitle} />
				<meta name="description" content={description} />
				<meta name="author" content={author} />

				{/* Twitter */}
				<meta name="twitter:title" content={siteTitle} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={new URL(domain).origin.concat("/card.png")} />
				<meta name="twitter:url" content={new URL(domain).origin} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content={social.twitter} />
				<meta name="twitter:creator" content={social.twitter} />

				{/* Facebook */}
				<meta property="og:title" content={siteTitle} />
				<meta property="og:site_name" content={siteTitle} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={new URL(domain).origin} />
				<meta property="og:image" content={new URL(domain).origin.concat("/card.png")} />
				<meta property="og:type" content="website" />

				{/* Fonts */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
