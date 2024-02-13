import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//the main api with base url
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/v1/",
        credentials: "include",
    }), //have to set true from backend
    endpoints: () => ({})
})