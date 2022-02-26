module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          http: require.resolve("stream-http"),
          buffer: require.resolve("buffer"),
          https: require.resolve("https-browserify"),
          process: require.resolve("process/browser"),
          querystring: require.resolve("querystring-es3"),
          stream: require.resolve("stream-browserify"),
          vm: require.resolve("vm-browserify"),
          timers: require.resolve("timers-browserify"),
          url: require.resolve("url"),
          // assert: require.resolve('assert'),
          // console: require.resolve('console-browserify'),
          // constants: require.resolve('constants-browserify'),
          // crypto: require.resolve('crypto-browserify'),
          // domain: require.resolve('domain-browser'),
          // events: require.resolve('events'),
          // os: require.resolve('os-browserify/browser'),
          // path: require.resolve('path-browserify'),
          // punycode: require.resolve('punycode'),
          // string_decoder: require.resolve('string_decoder'),
          // sys: require.resolve('util'),
          // tty: require.resolve('tty-browserify'),
          // util: require.resolve('util'),
          // zlib: require.resolve('browserify-zlib'),
          // mainFields: ['module', 'main'],
        },
      },
    },
  },
};
