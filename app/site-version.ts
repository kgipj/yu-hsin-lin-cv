export const siteVersion = '20261011-2';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
