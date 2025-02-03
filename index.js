// @ts-check
import reactNative from "eslint-plugin-react-native";
import nodStudioConfigReact from "@nodstudio/eslint-config-react";

export default [
  ...nodStudioConfigReact,
  {
    plugins: {
      "react-native": reactNative,
    },

    rules: {
      "react-native/no-raw-text": 2,
    },
  },
];
