module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "warn",
    "react/prop-types": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/label-has-associated-control": "warn",
  },
};
