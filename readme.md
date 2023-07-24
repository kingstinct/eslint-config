# eslint-config-kingstinct

[![npm (scoped)](https://img.shields.io/npm/v/eslint-config-kingstinct)](https://www.npmjs.com/package/eslint-config-kingstinct)
![CI Status](https://github.com/kingstinct/eslint/workflows/Node.js%20CI/badge.svg)

## Principles

1. As many autofixable rules as possible, because enforcing standards that don't require extra developer effort is (almost) always a good idea.
2. Don't error on non-fixable errors (that don't risk causing unforeseen errors).

If you see something that could be improved based on these principles, please submit a pull request! :)

## Usage

This is the base eslint config we use at Kingstinct. It's based on the popular Airbnb-config with a few plugin additions:

* TypeScript
* import
* jest
* json
* react (use kingstinct/react)
* react-native (use kingstinct/react-native)

I've also made some minor changes to the rules, so if you've got other preferences you might want to override some rules. I highly recommend you to use eslint, flowtype with plugins for your texteditor/IDE.

The two main principles are to catch errors early on and to boost productivity (so for example I've disabled react/sort-comp as it's not fixed automatically yet).

## Install

1. Install the required peerDependencies:

  The easiest way to install the peer dependencies is using the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npx install-peerdeps -D eslint-config-kingstinct
  ```

  You can also install it manually (using NPM):

  ```sh
  (
    export PKG=eslint-config-kingstinct;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  or (if you're using yarn)

  ```sh
  (
    export PKG=eslint-config-kingstinct;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
  )
  ```

  This produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-kingstinct eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
  ```

2. Add `"extends": "eslint-config-kingstinct"` to your .eslintrc (or eslint-config-kingstinct/react or eslint-config-kingstinct/react-native depending on your environment)

3. Install optional dependencies as needed (for React and React Native)

When using React or React Native install the optional peer dependencies manually as needed or run this (similar to above) to install all optionalPeerDependencies:

You can also install it manually (using NPM):

  ```sh
  (
    export PKG=eslint-config-kingstinct;
    npm info "$PKG@latest" optionalPeerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  or (if you're using yarn)

  ```sh
  (
    export PKG=eslint-config-kingstinct;
    npm info "$PKG@latest" optionalPeerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG@latest"
  )
  ```

## BONUS: tsconfig.json
As a convenience we expose a handful of easy-to-use tsconfig.json files, use them like this:
```json
{
  "extends": "eslint-config-kingstinct/tsconfig.expo" // or "eslint-config-kingstinct/tsconfig", "eslint-config-kingstinct/tsconfig.node16"
}
```

## Running tests

You can run tests with `npm test`. It will run the lint config on the project itself.

## Contributing

Let's try to keep general rules in `base.js`, general react rules in `react.js` and react-native specific rules in `react-native.js`

[Made by Kingstinct AB](https://kingstinct.com)
