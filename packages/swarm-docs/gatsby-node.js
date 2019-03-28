/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const Shell = require('child_process');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /.inc$/,
          use: ['html-loader'],
        },
      ],
    },
  });
};

exports.onPostBuild = () => {
  Shell.execSync('cp -r src/images/* public/');
};
