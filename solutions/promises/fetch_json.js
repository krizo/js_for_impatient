import fetch from 'isomorphic-fetch';

export function fetchJson(url) {
  return fetch(url)
  .then(response => response.text())
  .then(jsonStr => JSON.parse(jsonStr));
}
