export function getCryptos() {
  return fetch(`${import.meta.env.VITE_BASE_URL}/getCryptoInfo`, {
    method: 'GET',
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      Connection: 'keep-alive'
    }
  }).then((response) => {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  });
}
