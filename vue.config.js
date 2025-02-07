const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    host: "70.34.195.242",
    port: 8080,
    allowedHosts: "all", // Allow all hosts (or specify a domain)
  }
};
