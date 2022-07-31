module.exports = {
    "parser": "babel-eslint",

    "env": {
        "browser": true,
        "react-native/react-native": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12
    },
    "plugins": [
        "react",
        "react-native",
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],

    "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/sort-styles": [
            "error",
            "asc",       {
               "ignoreClassNames": false,
               "ignoreStyleProperties": false
             }     ]
    }
};
