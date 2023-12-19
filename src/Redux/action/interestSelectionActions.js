import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { commonApi } from "../../api/CommonApi";
import { ApiConstants,StoreConstantValues } from "../../constants/Constants";
import { GET_PREFERENCES_OPTIONS, POST_PREFERENCES_OPTIONS } from "../../api/EndPoints";


export const getInterestSelection = createAsyncThunk(
    "interest/getInterestAPI",
    async () => {
      const response = await commonApi({
        method: ApiConstants.GET  ,
        url: StoreConstantValues.BASE_URL + GET_PREFERENCES_OPTIONS,
      })
      console.log('GET INTEREST---', response.data);
      return response.data;
    }
  );

export const postInterestSelection = createAsyncThunk(
    "interest/postInterest",
    async () => {
      const response = await commonApi({
        method: ApiConstants.POST,
        url: StoreConstantValues.BASE_URL + POST_PREFERENCES_OPTIONS,
      })
      console.log('POST INTEREST---', response.data);
      return (response.data)
    }
  );


