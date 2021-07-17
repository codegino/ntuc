module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://storage.googleapis.com/coding_challenge_assets/:path*",
      },
    ];
  },
};
