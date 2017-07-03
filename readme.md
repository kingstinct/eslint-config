## Usage

This is the base eslint config I use for React Native. It's based on the popular Airbnb-config with a few plugin additions:
* jest
* flowtype
* lodash-fp
* promise
* react-native

I've also made some minor changes to the rules, so if you've got other preferences you might want to override some rules. I highly recommend you to use eslint, flowtype with plugins for your texteditor/IDE.

The two main principles are to catch errors early on and to boost productivity (so for example I've disabled react/sort-comp as it's not fixed automatically yet). Two of the choices I've made that you might need to configure are:
*  **Enforce non-native promises**, I recommend using [bluebird](http://bluebirdjs.com/docs/getting-started.html) for more features.
  * **Why?** Ensuring the same feature set is available on all Promises you expose.
  * **Disable** if you just want to use native ES6 Promises.  Add this to your .eslintrc:
    ```
    { ...,
        rules: { ...,
          'lodash-fp/use-fp': 0
        }
    }
    ```
* **Enforce [lodash-fp](https://github.com/lodash/lodash/wiki/FP-Guide)** instead of lodash.
  * **Why?** Many lodash methods are mutable which might cause hard-to-debug side effects, especially when using redux . With lodash-fp you're safe.
  * **Disable** if you really want to use the mutable lodash flavour (not recommended). Add this to your .eslintrc:
    ```
    { ...,
        rules: { ...,
          'promise/no-native': 0
        }
    }
    ```

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

You can run tests with `npm test`. It will run the lint config on the project itself.
