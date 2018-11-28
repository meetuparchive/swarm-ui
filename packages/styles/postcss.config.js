module.exports = {
  "plugins": [
    require("postcss-import"),
    require("autoprefixer"),
    require("cssnano"),
  ],
  "input": "lib/main.css",
  "output": "dist/main.css",
  "autoprefixer": {
    "browsers": "> 5%",
  }
}
