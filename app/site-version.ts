export const siteVersion = '20261010-6';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
