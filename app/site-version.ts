export const siteVersion = '20261010-8';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
