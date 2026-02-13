import type * as eslint from 'eslint/config';

export const configs: {
  readonly next: eslint.Config[];
};

declare const nextConfig: eslint.Config[];
export default nextConfig;
