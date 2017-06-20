## Usage

This is the base eslint config I use for React Native. It's based on the popular Airbnb-config with a few plugin additions:
* jest
* flowtype
* lodash-fp (immutable flavour of lodash)
* promise
* prettier
* react-native

I've also made some minor changes to the rules. I highly recommend you to use eslint, prettier and flowtype with plugins for your texteditor/IDE.

### eslint-config-kingstinct-react-native

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-kingstinct-react-native@latest" peerDependencies
  ```

  Linux/OSX users can run (if you're using NPM)

  ```sh
  (
    export PKG=eslint-config-kingstinct-react-native;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  or (if you're using yarn)

  ```sh
  (
    export PKG=eslint-config-kingstinct-react-native;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-kingstinct-react-native eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

  Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-kingstinct-react-native
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-kingstinct-react-native eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "kingstinct-react-native"` to your .eslintrc

## Running tests

You can run tests with `npm test`. It will run the lint config on the project itself and also check for compatibility issues between eslint and prettier.
