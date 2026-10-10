export const siteVersion = '20261010-19';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
