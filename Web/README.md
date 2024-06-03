# Web

Prerequisites
- This repo uses [nvm](https://github.com/nvm-sh/nvm#intro), it must be installed first

App Startup
- Run `chmod +x` on `Web/.husky/pre-commit` to ensure linting/formatting is happening as intended on commit
- CD into `Web` and run `nvm use` when opening the solution
- Run `yarn install` from `Web` to install all packages
  - Note: [Yarn](https://yarnpkg.com/) is stored in the repo, there's no need to install it separately
  - If you get an error message containing ` Web@workspace:. must be built because it never has been before or the last one failed
    ` then run `npm install`
- Start the app by using the `Run ForgeUI` run configuration (if on Rider) or run `yarn start` from the `Web` directory

Development Notes
- Use FormattedMessage component for all user facing text, and be sure to run `yarn extract` when any new ones are added
- Text editing gadgets use [Lexical](lexical.dev) under the hood, which has some compatibility issues with some browsers. Chrome is recommended.

Troubleshooting
- If you receive a warning containing `Implicit dependencies on node-gyp are discouraged` when running `yarn install`, you can ignore it per [this comment](https://github.com/yarnpkg/yarn/issues/8052#issuecomment-735764698)
- If you receive a warning containing `Web@workspace:. must be built because it never has been before or the last one failed` just run `yarn rebuild`

