//API를 fetch하고 json 을 return 하는 함수
//useQuery Hook 을 원래 있던 자리에 대신 끼워넣는다.
// const endDate = Math.floor(Date.now().1000);
// const startDate = endDate - 60 *60* 24*7;

const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  return await fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export async function fetchCoinInfo(coinId: string) {
  return await fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinTickers(coinId: string) {
  return await fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 23 * 1;
  return await fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
