const webpack = require("webpack");
const glob = require("glob");

require("dotenv").config();

module.exports = {
  webpack: function (config) {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  exportPathMap: async function () {
    const routes = {
      "/": { page: "/" },
      "/info": { page: "/info" },
    };
    //get all .md files in the posts dir
    const helps = glob.sync("src/posts/**/*.md");

    //remove path and extension to leave filename only
    const helpSlugs = helps.map((file) =>
      file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim()
    );

    //add each help to the routes obj
    helpSlugs.forEach((help) => {
      routes[`/help/${help}`] = { page: "/help/[slug]", query: { slug: help } };
    });

    return routes;
  },
};
