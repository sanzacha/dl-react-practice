# It's Dealer Locator using ReactJS

How to setup the project in our local?

Git checkout https://github.com/Sakthivel/React-Dealer-Locator.git

yarn / npm install

yarn start / npm start

hit http://localhost:3000/

Now, we will able to see our application on our browser.

How to build the project?

yarn build / npm build

Note: yarn/npm watch is running our project so each change build command will run by default.

How to run unit test?

yarn test / npm test

it will run unit test

How to setup eslint into my project?

Step 1

Installing eslint and eslint-config-airbnb

Install eslint plugin for vscode
Install eslint (you can also install this globally but I like to install it locally)
yarn add eslint --dev
Install eslint-config-airbnb which need few other dependencies as well
yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --dev
Create .eslintrc file in the root directory and add the following lines
{
  "extends": [
    "airbnb"
  ]
}
Now, you will start seeing lint errors in your code.

Step 2

Installing prettier for code formatting (If you have prettier plugin installed via vscode plugin, uninstall it as it causes the code formatting twice)

Install prettier and related dependencies
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
Update .eslintrc with following lines

{
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ]
  },
  "plugins": [
    "prettier"
  ]
}

.eslintrc file.
Step 3

VSCode user settings

Add following line to user settings

{
  // other settings
  // formatting using eslint
  // let editor format using prettier for all other files
  "editor.formatOnSave": true,
  // disable editor formatting, so eslint can handle it
  "[javascript]": {
    "editor.formatOnSave": false,
  },
  // available through eslint plugin in vscode
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
}

User settings

Now, whenever you save a file the code will be formatted using the eslint config which is airbnb in this case. Please, comment you find any better ways for doing this.

