# Common eslint config for Next.js

```ts
// eslint.config.mjs
import config from '@ai-soft-jp/eslint-config';
import configNext from '@ai-soft-jp/eslint-config-next';
import { defineConfig } from 'eslint/config';
export default defineConfig(config, configNext);
```
