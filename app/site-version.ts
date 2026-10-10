export const siteVersion = '20261010-17';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
