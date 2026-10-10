export const siteVersion = '20261010-12';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
