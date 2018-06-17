[ ![Codeship Status for robertherber/eslint-config-kingstinct-react-native](https://app.codeship.com/projects/3c9221e0-7d0d-0135-0c1c-5a32fb5927cf/status?branch=master)](https://app.codeship.com/projects/245793)
## Usage

### v2.0

Just releasing version 2.0 of this eslint setup. Two major changes are that the installation is easier now. No peerdeps to care about (well - of course you still need to make sure you've got eslint). The other thing is the flowtype-errors plugin which will actually run a flow server and lints that directly. To use it make sure you've got flow-bin installed - and if not go ahead and disable the rules `flowtype-errors/show-errors` and `flowtype-errors/show-warnings` by doing this:
```
    { ...,
        rules: { ...,
          'flowtype-errors/show-errors': 0,
          'flowtype-errors/show-warnings': 0,
        }
    }
```
    

This is the base eslint config I use for React Native. It's based on the popular Airbnb-config with a few plugin additions:
* flowtype
* flowtype-errors (which runs flow-bin)
* import
* jest
* json
* lodash-fp
* promise
* react
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



## Running tests

You can run tests with `npm test`. It will run the lint config on the project itself.
