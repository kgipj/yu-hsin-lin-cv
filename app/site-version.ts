export const siteVersion = '20261010-20';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
