import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["dist/*","plopfile.js", "playwright-report/*"],
}, ...fixupConfigRules(compat.extends(
    // "eslint-config-love", // todo: see if necessary & handle
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:react-hooks/recommended",
)), {
    plugins: {
        react: fixupPluginRules(react),
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {},
}];
