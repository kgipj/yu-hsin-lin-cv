export const siteVersion = '20261010-11';

export function withSiteVersion(path: string) {
  return `${path}?v=${siteVersion}`;
}
