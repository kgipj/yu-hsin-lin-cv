export const siteVersion = '20261010-9';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
