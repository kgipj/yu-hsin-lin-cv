export const siteVersion = '20261011-1';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
