import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    rules: {}
  }
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:@next/next/recommended",
    "prettier"),
  {
    rules: {
      semi: ["error", "always"],
      indent: ["error", 2],
    },
  },
];

export default eslintConfig;
