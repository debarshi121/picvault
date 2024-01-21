/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["cdn.pixabay.com", "pixabay.com"],
	},
	webpack: (config) => {
		config.resolve.fallback = {
			"mongodb-client-encryption": false,
			aws4: false,
		};

		return config;
	},
};

module.exports = nextConfig;
