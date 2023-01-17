/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	nextConfig,
};

module.exports = {
	// experimental: {
	// 	appDir: true,
	// },
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.themealdb.com",
				port: "",
				pathname: "**",
			},
		],
	},
};
