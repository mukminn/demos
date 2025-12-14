/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Validate input parameters
    if (!webpack || webpack === null || webpack === undefined) {
      throw new Error("Parameter 'webpack' is required");
    }
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    return config;
  },
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'en-US',
  },
};

module?.exports = nextConfig;
