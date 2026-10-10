export const siteVersion = '20261011-3';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
