import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoHeaders = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
  "X-RapidAPI-Host": process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
};
const baseurl = process.env.REACT_APP_CRYPTO_API_URL;

const createRequest = (url) => ({ url, headers: cryptoHeaders });
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseurl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) =>
        createRequest(
          `${process.env.REACT_APP_CRYPTO_API_URL}/coins?limit=${count}`
        ),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) =>
        createRequest(`${process.env.REACT_APP_CRYPTO_API_URL}/coin/${coinId}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('https://coinranking1.p.rapidapi.com/exchanges'),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(
          `${process.env.REACT_APP_CRYPTO_API_URL}/coin/${coinId}/history?timeperiod=${timeperiod}`
        ),
    }),
    
  }),
});
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '95abd21512msha74d639bc40ec7dp14ebafjsn6c0355317a0a',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };
