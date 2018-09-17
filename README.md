<img src="https://github.com/AraBlocks/ara-module-template/blob/master/ara.png" width="30" height="30" /> ara-network-node-signalhub
====

[![Build Status](https://travis-ci.com/AraBlocks/ara-network-node-signalhub.svg?token=r6p7pesHZ9MRJsVsrYFe&branch=master)](https://travis-ci.com/AraBlocks/ara-network-node-signalhub)

An Ara network node that runs a signalhub server to coordinate handshaking.

## Status
This project is in active development.

## Stability

> [Stability][stability-index]: 1 - Experimental. This feature is still under
> active development and subject to non-backwards compatible changes, or even
> removal, in any future version. Use of the feature is not recommended
> in production environments. Experimental features are not subject to
> the Node.js Semantic Versioning model.

> **Important**: While this project is under active development, run `npm link` in `ara-network-node-signalhub` directory & `npm link ara-network-node-signalhub` in `ara-network` directory.

## Dependencies
- [Node](https://nodejs.org/en/download/)
- [ara-network][ara-network]
- [ara-runtime-configuration][ara-runtime-configuration]

## Installation
```sh
$ npm install ara-network ara-network-node-signalhub
```

## Configuration
[ara-runtime-configuration][ara-runtime-configuration] is a dependency of [ara-network][ara-network] and will read from the nearest `.ararc`.  Install [ara-runtime-configuration][ara-runtime-configuration] separately to specify default values not present in an `.ararc`.

Runtime configuration can be specified by targeting the
`[network.node.dns]` _INI_ section or a nested _JSON_ object
`{ network: { node: { signalhub: { ... }}}}`.

### Examples
_INI_ format in an `.ararc`:
```ini
[network.node.signalhub]
maxBroadcasts: Infinity
port = 8881
```

## Usage
```js
const hub = require('ara-network-node-signalhub')
```

#### Command Line (ann)
```bash
$ ann --type signalhub --help
usage: ann -t . [options]

General Options:
  --help, -h     Show help                                             [boolean]
  --debug, -D    Enable debug output                                   [boolean]
  --version, -V  Show version number                                   [boolean]

Configuration Options:
  --type, -t  Node type to start
  --conf, -C  Path to configuration file

Options:
  --port, -p  Port for server to listen on
```

### Examples
#### Command Line (ann)
Invoke a network node with the `ann` (or `ara-network-node`) command line interface:
```sh
$ ann --type signalhub --port 8881
```

## Contributing
- [Commit message format](/.github/COMMIT_FORMAT.md)
- [Commit message examples](/.github/COMMIT_FORMAT_EXAMPLES.md)
- [How to contribute](/.github/CONTRIBUTING.md)

## See Also
- [ara-network][ara-network]
- [ara-runtime-configuration][ara-runtime-configuration]
- [dns-discovery](https://github.com/mafintosh/dns-discovery)

## License
LGPL-3.0

[ara-network]: https://github.com/arablocks/ara-network
[ara-runtime-configuration]: https://github.com/arablocks/ara-runtime-configuration
