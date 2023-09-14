"use strict";

module.exports = {
  "plugins": [
    "stylelint-scss",
  ],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
  ],
  "rules": {
    "indentation": 4, // deprecated
    "max-empty-lines": 2, // deprecated
    "no-eol-whitespace": true, // deprecated
    "no-missing-end-of-source-newline": true, // deprecated
    "declaration-colon-newline-after": "always-multi-line", // deprecated
    "declaration-empty-line-before": "never",
    "value-list-max-empty-lines": 0, // deprecated

    "selector-pseudo-element-colon-notation": "double", // deprecated
    "color-named": "never",

    "declaration-no-important": true,
    "declaration-block-no-duplicate-properties": true,

    "property-case": "lower", // deprecated
    "value-keyword-case": "lower",
    "unit-case": "lower", // deprecated
    "color-hex-case": "lower", // deprecated
    "selector-pseudo-element-case": "lower", // deprecated

    "selector-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,

    "number-leading-zero": "never", // deprecated
    "number-no-trailing-zeros": true, // deprecated
    "function-calc-no-unspaced-operator": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-newline-after": true,
    "scss/operator-no-unspaced": true,

    "at-rule-empty-line-before": ["always", {
      "except": [
        "first-nested",
        "blockless-after-same-name-blockless",
      ],
      "ignore": [
        "after-comment",
      ],
      "ignoreAtRules": [
        "use",
        "import",
        "include",
        "else",
        "extend",
      ],
    }],
    // deprecated
    "block-closing-brace-newline-after": [
      "always", {
        "ignoreAtRules": ["if", "else"]
      }
    ],
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
  },
};
