export const siteVersion = '20261010-21';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
