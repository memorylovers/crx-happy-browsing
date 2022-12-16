// prettier: https://prettier.io/docs/en/configuration.html
module.exports = {
  plugins: [
    require("prettier-plugin-sh"),
    require("prettier-plugin-md-nocjsp"),
    require("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: ["*.md", "README"],
      options: {
        parser: "markdown-nocjsp",
      },
    },
  ],
};
