export const siteVersion = '20261010-18';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
