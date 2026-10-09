export const siteVersion = '20261010-3';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
