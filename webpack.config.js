/**
 * @type {import('webpack').Configuration}
 */

module.exports = {
  entry: "./src/index.js",

  mode: "production",

  output: {
    filename: "[name].[chunkhash:8].js"
  },

  optimization: {
    moduleIds: "named",
    chunkIds: "named",
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: 10
        },
        default: {
          test: /[\\/]src[\\/](common|module).*[\\/]/,
          name(module, chunks) {
            const moduleFileName = module.context.split('/').reduceRight(item => item);
            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${moduleFileName}~${allChunksNames}`;
          },
          priority: 0,
          enforce: true
        }
      }
    }
  }
};
