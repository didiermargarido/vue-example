module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "prettier",
    "prettier/vue",
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": ["error"],
    "quotes": ["error", "single"],
    "vue/html-indent": ["error"],
    "vue/attribute-hyphenation": ["error", "never"],
    "vue/component-definition-name-casing": ["error"],
    "vue/component-name-in-template-casing": ["error"],
    "vue/mustache-interpolation-spacing": ["error"],
    "vue/singleline-html-element-content-newline": ["error"],
    "vue/multiline-html-element-content-newline": ["error"],
    "vue/padding-line-between-blocks": ["error"],
    "vue/prop-name-casing": ["error"],
    "vue/no-multi-spaces": ["error"],
    "vue/html-quotes": ["error"],
    "vue/order-in-components": ["error"],
    "vue/max-attributes-per-line": ["error"],
    "vue/html-closing-bracket-newline": ["error"],
    "vue/html-closing-bracket-spacing": ["error"],
    "vue/script-indent": ["error"],
    "vue/this-in-template": ["error"],
    "vue/v-bind-style": ["error"],
    "vue/v-on-style": ["error"],
    "vue/attributes-order": ["error", {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        "UNIQUE",
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "EVENTS",
        "OTHER_ATTR",
        "CONTENT"
      ],
      "alphabetical": false
    }]
  }
};
