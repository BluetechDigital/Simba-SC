/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false, // Disables the X-Powered-By header

	// All routes edge network caching
	async headers() {
		return [
			{
				source: "/(.*)", // Match all routes (adjust as necessary)
				headers: [
					// Force HTTPS
					{
						key: "Strict-Transport-Security",
						value: "max-age=31536000; includeSubDomains; preload",
					},
					// Prevent MIME-type sniffing
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					// Prevent clickjacking
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					// Prevent reflected XSS attacks
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
					// Updated Content Security Policy (CSP) to allow your CMS and Instagram
					// {
					// 	key: "Content-Security-Policy",
					// 	value: `
					// 		default-src 'self';
					// 		img-src 'self' ${process.env.CMS_URL} ${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_ONE} ${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_TWO} ${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_THREE} ${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_FOUR} data:;
					// 		script-src 'self' 'unsafe-inline' 'unsafe-eval';
					// 		style-src 'self' 'unsafe-inline';
					// 		connect-src 'self' ${process.env.CMS_URL};
					// 		frame-src 'self' ${process.env.YOUTUBE_EMBED_REMOTE_PATTERNS_HOSTNAME}; /* Allow embedding YouTube videos */
					// 		object-src 'none';
					// 		frame-ancestors 'none';`
					// 		.replace(/\s{2,}/g, " ")
					// 		.trim(),
					// },
					// Referrer Policy
					{
						key: "Referrer-Policy",
						value: "no-referrer",
					},
					// Permissions-Policy to restrict features like microphone, geolocation, etc.
					{
						key: "Permissions-Policy",
						value: "geolocation=(), microphone=(), camera=(), payment=()",
					},
					// Certificate Transparency (Expect-CT)
					{
						key: "Expect-CT",
						value: "max-age=86400, enforce",
					},
				],
			},
			{
				source: "/[slug]",
				headers: [
					{
						key: "Cache-Control",
						value: "s-maxage=1, stale-while-revalidate=259200",
					},
				],
			},
			{
				source: "/_next/image",
				headers: [
					{
						key: "Cache-Control",
						value: "s-maxage=1, stale-while-revalidate=259200",
					},
				],
			},
		];
	},
	async redirects() {
		if (process.env.NODE_ENV !== "production") {
			return [];
		}
		return [
			{
				source: "/(.*)",
				has: [
					{
						type: "header",
						key: "x-forwarded-proto",
						value: "http",
					},
				],
				permanent: true,
				destination: `${process.env.SITE_URL}/$1`,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: `${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_ONE}`,
				port: "",
				pathname: `${process.env.IMAGE_REMOTE_PATHNAME_ONE}/**`,
			},
			{
				protocol: "https",
				hostname: `${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_TWO}`,
				port: "",
			},
			{
				protocol: "https",
				hostname: `${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_THREE}`,
				port: "",
			},
			{
				protocol: "https",
				hostname: `${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_FOUR}`,
				port: "",
				pathname: `${process.env.IMAGE_REMOTE_PATHNAME_FOUR}/**`,
			},
			{
				protocol: "https",
				hostname: `${process.env.IMAGE_REMOTE_PATTERNS_HOSTNAME_FIVE}`,
				port: "",
				pathname: `${process.env.IMAGE_REMOTE_PATHNAME_FIVE}/**`,
			},
		],
	},
};

export default nextConfig;
