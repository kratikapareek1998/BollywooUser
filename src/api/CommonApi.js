import { useState } from "react";
// import NetInfo from "@react-native-community/netinfo";
import axios from "axios";
import { printConsole } from "../utils/Util";
import {
  ApiConstants,
  AppConstants,
} from "../constants/Constants";



const API = axios.create();

let timeout = 900000;
let noNetworkObj = {
  status: 999,
};
let networkErr = {
  status: 0,
};
let headers = { headers: { "Content-Type": "multipart/form-data" } }

API.interceptors.request.use((response) => {
  return response
}, (error) => {
  if (error && error.response == undefined) {
    return Promise.reject(
      console.log('Error Axios Inteceptor')
    )
  } else if (error && error.response && error.response.status === 401) {
    return Promise.reject(
      console.log('Error Axios Inteceptor 401')
    );
  } else if (error && error.response && error.response.status === 500) {
    return Promise.reject(
      console.log('Error Axios Inteceptor Server Error 500')
    );
  }
})

API.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log('Server Error ------', error);
  if (error && error.response && error.response.status === 500) {
    return Promise.reject(
      console.log(' Inteceptor Error 500')
    )
  } else if (error && error.response && error.response.status === 401) {
    return Promise.reject(
      console.log('Error Inteceptor 401')
    );
  }

  console.log('Interceptor error', error);
  return Promise.reject(error);
});


export const commonApi = async ({

  method = "GET",
  url,
  params = {},

}) => {


  switch (method) {
    case "GET":
      try {
        const response = axios.get(url, params)
        return response;
      } catch (error) {
        if (axios.isCancel(error)) {
          return error;
        } else {
          return catchError(error);
        }
      }
    case "POST":
      return axios
        .post(url, params)
        .then((response) => {
          printConsole("POST RESPONSE:- ", response);
          return response;
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            return error;
          } else {
            catchError(error);
            return error.response;
          }
        });
    case "PUT":
      return axios
        .put(url, params)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            return error;
          } else {
            catchError(error);
            return error.response;
          }
        });
    case "DELETE":
      return axios
        .delete(url, {

          params: params,
          timeout: timeout,
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            return error;
          } else {
            catchError(error);
            return error.response;
          }
        });


    case "POST_WITH_FORM":
      console.log('url, params--', url, params, headers);
      try {
        const response = await API.post(url, params, headers);
        return response;
      } catch (error) {
        if (axios.isCancel(error)) {
          console.error('AXIOS ERROR RESPONCE---', error)
          return error;
        } else {
          return catchError(error);
        }
      }
  }
};




const catchError = (error, color) => {
  if (error && error?.message) {
    // Alert.alert(
    //   R.strings.noInternet,
    //   R.strings.checkYourConnection,
    //   [
    //     { text: 'Cancel', onPress: () => console.log('Yes button clicked') },
    //     { text: 'Retry', onPress: () => console.log('Yes button clicked',), style: 'cancel' },
    //   ],
    //   {
    //     cancelable: true
    //   }
    // );
    return error?.response;
  } else if (error && error?.message && error?.message == 'Network Error') {
    return response = { "message": "Something went wrong ? Please try Again", "response": {}, "status": false }
  }

};
