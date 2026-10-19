export const siteVersion = '20261019-1';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
