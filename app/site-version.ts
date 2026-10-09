export const siteVersion = '20261010-4';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
