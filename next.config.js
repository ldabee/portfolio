module.exports = {
  webpack: (config) => {
    config.externals = { 'sqlite3': 'commonjs sqlite3', }
    return config
  },
  images: {
    domains: ['upload.wikimedia.org', 'cdn.icon-icons.com', 'images.unsplash.com', 'image.pngaaa.com']
  }
}