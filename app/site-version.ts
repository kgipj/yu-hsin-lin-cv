export const siteVersion = '20261010-13';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
