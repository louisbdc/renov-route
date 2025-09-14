import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  {
    rules: {
      // Disable unescaped entities to avoid noisy warnings for French apostrophes
      "react/no-unescaped-entities": "off",
      // Prefer warnings for Link usage to avoid blocking builds
      "@next/next/no-html-link-for-pages": "warn",
      // Don't block builds on explicit any; keep as warning for later hardening
      "@typescript-eslint/no-explicit-any": "warn",
      // So underscore-prefixed vars (including catch params) don't warn
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_", "caughtErrorsIgnorePattern": "^_" }
      ],
    },
  },
];

export default eslintConfig;
