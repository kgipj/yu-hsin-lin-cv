export const siteVersion = '20261010-15';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
