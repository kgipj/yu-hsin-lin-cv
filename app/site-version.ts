export const siteVersion = '20261015-1';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
