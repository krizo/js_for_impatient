import fetch from 'isomorphic-fetch';

export async function fetchJson(url) {
  const response = await fetch(url);
  const jsonStr = await response.text();
  return JSON.parse(jsonStr);
}
