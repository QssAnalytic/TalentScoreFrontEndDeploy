import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestion, IStage } from "../types";
import getToken from "helper/getToken";

import { useEffect, useState } from "react";


function GetStage(accessToken?:string) {
   accessToken = accessToken || getToken()

  // const accessToken = localStorage.getItem('access_token') || ''
  const stageApi = createApi(
    {
      reducerPath: "stageApi",
      baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL
      }),
      endpoints: (builder) => ({
        getStage: builder.query<IStage[], void>({
          query: () => ({
            url: "stage-parent-lists/",
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          }),
        }),
        getSubStage: builder.query<IStage[], void>({
          query: () => ({
            url: "stage-parent-lists/",
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          }),
        }),
        getQuestions: builder.query<IQuestion[], string | undefined>({
          query: (subStageName) => ({
            url: `question-lists/${subStageName}`,
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          })
        }),
        getDependQuestions: builder.query<IQuestion[], { subSlugName?: string; dependQuestionId?: number }>({

          query: ({ subSlugName, dependQuestionId }) => ({
            url: `question-lists/${subSlugName}/${dependQuestionId}`,
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            }
          }),
        }),

      }),
    }
  );



  let {
    useGetStageQuery,
    useGetSubStageQuery,
    useGetQuestionsQuery,
    useGetDependQuestionsQuery,
  } = stageApi;




  return { useGetStageQuery, useGetQuestionsQuery, stageApi }
}


export default GetStage