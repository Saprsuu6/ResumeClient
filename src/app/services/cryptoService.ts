import { serverBaseurl } from "./defaultService";

export function getCryptos() {
  return fetch(`${serverBaseurl}/getCryptoInfo`, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    },
  }).then((response) => {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  });
}

const baseUrl = "https://api.coingecko.com/api/v3";

export async function coinsInfo() {
  const response = await fetch(
    `${baseUrl}/coins/markets/?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h&locale=en&precision=full`
  );

  if (response.status !== 200) throw new Error("Crypto API error");
  else return response.json();
}
