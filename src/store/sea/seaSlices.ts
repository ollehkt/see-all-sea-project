import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Response {
  getOceansBeachInfo: {
    item: []
  }
}

export const seaApi = createApi({
  reducerPath: 'seaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SEA_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getSeaInfo: builder.query({
      query: (area) =>
        `getOceansBeachInfo1?pageNo=1&numOfRows=100&resultType=JSON&SIDO_NM=${area}&ServiceKey=${
          import.meta.env.VITE_SEA_APP_KEY
        }`,
      transformResponse: (res: Response) => res.getOceansBeachInfo.item,
    }),
  }),
})
export const { useGetSeaInfoQuery } = seaApi
