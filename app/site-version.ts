export const siteVersion = '20261010-14';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
