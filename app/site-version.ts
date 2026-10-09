export const siteVersion = '20261010-5';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
