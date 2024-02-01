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
    "declaration-empty-line-before": "never",

    "color-named": "never",

    "declaration-no-important": true,
    "declaration-block-no-duplicate-properties": true,

    "value-keyword-case": "lower",

    "selector-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,

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
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
  },
};
