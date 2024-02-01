# stylelint-config-syzygy-scss
SYZYGY [`stylelint`](https://github.com/stylelint/stylelint) config for CSS & SCSS 

## Installation

Make sure you have `stylelint` and `stylelint-scss` plugin installed:
```bash
npm install --save-dev stylelint stylelint-scss
```

then install the config:
```bash
npm install --save-dev stylelint-config-syzygy-scss
```

## Usage

Simply set your `stylelint` config to extend `stylelint-config-syzygy-scss`:

```json
{
  "extends": "stylelint-config-syzygy-scss"
}
```

### Modifying the config

You can always extend / overwrite the config to better fit your needs.
To do so add `"rules"` key to your config and define your rules.

Example to extend the config with `scss/at-else-empty-line-before` rule:

```json
{
  "extends": "stylelint-config-syzygy-scss",
  "rules": {
    "scss/at-else-empty-line-before": "always"
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
