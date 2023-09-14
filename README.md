# stylelint-config-syzygy-scss
SYZYGY [`stylelint`](https://github.com/stylelint/stylelint) config for CSS & SCSS

> **_NOTE:_**
> [Stylelint plans to remove stylistic rules](https://stylelint.io/migration-guide/to-15/#deprecated-stylistic-rules)
> in favour of pretty printers. Many rules are currently deprecated and will be removed in new major release.
> Take it into consideration and configure Prettier or similar beforehand. To do so disable in your stylelint config
> all the rules marked with the comment `// deprecated` here in `index.js`. 

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

Example to extend the config with `max-empty-lines` rule:

```json
{
  "extends": "stylelint-config-syzygy-scss",
  "rules": {
    "max-empty-lines": 2
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
