import config from "../config";
import theme from "../config/theme";

const getManifest = () => ({
	name: config.siteTitle,
	description: config.description,
	short_name: config.shortName,
	start_url: "/",
	lang: "en-IN",
	display: "standalone",
	background_color: "#ffffff",
	theme_color: theme.colors.primary,
	orientation: "portrait-primary",
	icons: [
		{
			src: "/favicon.ico",
			sizes: "32x32",
			type: "image/x-icon",
		},
		{
			src: "/logo192.png",
			type: "image/png",
			sizes: "192x192",
		},
		{
			src: "/logo512.png",
			type: "image/png",
			sizes: "512x512",
		},
	],
});

export default getManifest;
