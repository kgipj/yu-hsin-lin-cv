export const siteVersion = '20261010-7';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
