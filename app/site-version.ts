export const siteVersion = '20261011-4';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
