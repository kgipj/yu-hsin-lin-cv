export const siteVersion = '20261010-16';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
