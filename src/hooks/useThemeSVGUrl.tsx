import { useTheme } from 'styled-components';

function useThemeSVGUrl(urls: string | string[]): {
  [proppName: string]: string;
} {
  const themeName = useTheme().name || 'Light';
  if (!Array.isArray(urls)) {
    urls = [urls];
  }
  const urlObject = {};
  urls.forEach((url) => {
    urlObject[url] = `/assets/${themeName}/${url}.svg`;
  });
  return urlObject;
}

export default useThemeSVGUrl;
