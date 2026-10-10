export const siteVersion = '20261011-5';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
