export const siteVersion = '20261010-10';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
