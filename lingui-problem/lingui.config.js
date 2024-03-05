const { formatter } = require("@lingui/format-po")

const locales = ["ee", "en"]

if (process.env.NODE_ENV !== "production") {
  locales.push("pseudo")
}

/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: locales,
  sourceLocale: "ee",
  pseudoLocale: "pseudo",
  catalogs: [
    {
      path: "<rootDir>/translations/locales/{locale}",
      include: [
        "<rootDir>/pages",
        "<rootDir>/components",
        "<rootDir>/translations/languages.ts",
      ],
    },
  ],
  format: formatter({ origins: false }),
}