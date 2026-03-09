# standard-readme-pre-commit

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A [pre-commit](https://pre-commit.com) hook for [standard-readme](https://github.com/RichardLitt/standard-readme).

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

Add the following to your `.pre-commit-config.yaml`:

```yaml
- repo: https://github.com/tkoyama010/standard-readme-pre-commit
  rev: v0.1.0
  hooks:
    - id: standard-readme
```

## Usage

```sh
pre-commit run standard-readme --all-files
```

## Maintainers

[@tkoyama010](https://github.com/tkoyama010)

## Contributing

PRs accepted.

## License

[MIT](LICENSE) © Tetsuo Koyama
