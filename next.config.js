const isProd = process.env.NODE_ENV === "production";

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  assetPrefix: isProd ? "/ManyHands-tina/" : undefined,
  i18n: {
    locales: ['en-gb'],
    defaultLocale: 'en-gb',
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};
