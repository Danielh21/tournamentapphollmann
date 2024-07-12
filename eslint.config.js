// eslint.config.js
export default [
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    extends: ["some-other-config-you-use", "prettier"],
  },
]
