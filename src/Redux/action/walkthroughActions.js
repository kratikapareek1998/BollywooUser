import { createAsyncThunk } from '@reduxjs/toolkit';
import { commonApi } from '../../api/CommonApi';
import { ApiConstants, StoreConstantValues } from "../../constants/Constants";
import {WALKTHROUGH} from '../../api/EndPoints';


export const walkthroughData = createAsyncThunk(
  "walkthrough/walkthrough_screen_details",
  async () => {
    const response = await commonApi({
      method: ApiConstants.GET  ,
      url: StoreConstantValues.BASE_URL + WALKTHROUGH,
    })
    console.log('WALKTHROUGH SCREEN DETAILS---', response.data);
    return response.data;
  }
);

