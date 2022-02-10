/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  // exclude: [

  // ],
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    './resolveProxyImports-plugin.js',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2017',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    // open: 'none',
    // port: 8081,
  },
  buildOptions: {
    /* ... */
  },
};
