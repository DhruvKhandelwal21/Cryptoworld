import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '95abd21512msha74d639bc40ec7dp14ebafjsn6c0355317a0a',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseurl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) =>({url,headers:cryptoNewsHeaders})
export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({baseurl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory,count}) => createRequest(`https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
})
export const {useGetCryptoNewsQuery} = cryptoNewsApi