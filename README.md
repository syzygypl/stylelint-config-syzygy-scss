# stylelint-config-syzygy-scss
> SYZYGY [`stylelint`](https://github.com/stylelint/stylelint) config for CSS & SCSS

## Installation

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
