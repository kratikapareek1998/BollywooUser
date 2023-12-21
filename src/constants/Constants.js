/**
 * Declare all the constant keys and their values here for using in throughout the app.
 */

import { Dimensions, Platform } from "react-native";
export const debounceDelay = 300;

export const LocalStorageKeys = {
  ACCESS_TOKEN: "access_token",
  DEVICE_TOKEN: "device_token",
  USER_DATA: "user_data",
  IS_INTRO_SHOW: "is_intro_show",
  SEARCH_DATA: "search_data",
  LOGIN_DATA: "login_data",
  REMEMBER_ME: "remember_me",
  SELECTED_LANGUAGE: "selected_language",
};
export const ApiConstants = {
  APP_VERSION: "1",
  DEVICE_TYPE: Platform.OS,
  CERTIFICATE_TYPE: __DEV__ ? "development" : "distribution",
  GET: "GET",
  POST: "POST",
  POST_WITH_FORM: "POST_WITH_FORM",
  PUT: "PUT",
  DELETE: "DELETE",
  SERVER_DATE_TIME_FORMAT: "YYYY-MM-DD HH:mm:ss",
};
export const AppConstants = {
  DEV: true,
  IS_LOG: true,
  NETWORK_CHECK: false,
  TOUCH_RADIUS: 20,
  TOUCH_OPACITY: 0.5,
  TOUCH_DURATION: 500,
  MALE: "male",
  FEMALE: "female",
  EMAIL_REGEX: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  //MOBILE_REGEX: /^[0][1-9]\d{9}$|^[1-9]\d{9,10}$/,
  MOBILE_REGEX: /^[0][1-9]\d{9}$|^[1-9]\d{9,13}$/,
  NUMBER_OR_DECIMAL_REGEX: /^(\d*\.)?\d+$/,
  NUMBER_REGEX: /^\d+$/,
  CHARACTER_OR_NUMBER_REGEX: /^(?=.*[A-Z])(?=.*\d)[A-Z\d]{4,7}$/,
  NAME_REGEX: /^[^\s].+[a-zA-Z]+[a-zA-Z]+$/,
  FULL_NAME_REGEX: /^[a-zA-z]+([\s][a-zA-Z]+)*$/,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%\^&*])\S{6,50}$/,
  PIN_CODE_REGEX: /^[1-9][0-9]{5,10}$/,
  ADDRESS_REGEX: /^[^\s].+[a-zA-Z0-9\s,.'-]{3,}$/,
  ALPHANUMERIC_REGEX: /^[^\s].+[a-z0-9\s]+$/i,
  CHARACTER_REGEX: /^[a-zA-Z]+$/,
  GST_REGEX:
    /^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{3})+$/,
  DATE_FORMAT_APP: "DD MMM,YYYY",
  TIME_FORMAT_APP: "HH:MM A",
  SUBJECT_MAX_LENGTH: 100,
  MESSAGE_MAX_LENGTH: 1000,
  PRICE_SYMBOL: "₹",
  IS_STAGING_URL: false,
  PRODUCT_COUNT: 0,
  IS_APP_OPEN_FIRST_TIME_HOME: true,
  IS_APP_OPEN_FIRST_TIME: true,
  IS_APP_OPEN_FIRST_TIME_IPAY: true,
  IS_APP_OPEN_FIRST_TIME_CHAT: true,
  STATUS_BAR_HEIGHT: 0,
  OPEN_WITH_DEEP_LINK: {},
  BUILD_VERSION: "I-SHOP v0.0.71",
};
export const StoreConstantValues = {
  USER_ACCESS_TOKEN: "",
  USER_INFO_DATA: "",
  USER_ID: "",
  AUTHORIZATION_DATA: "",
  DEVICE_ID: "",

  //  SHARE_URL: 'https://dealsby.io/register/',

   BASE_URL: "http://woo.bollywoo.ooo/",

  //DEV URL's
  // BASE_URL: "https://dealium.io/api/",
  // PAYMENT_URL: "",

  //QA URL's
  // BASE_URL: "https://ishop-qa.codiantdev.com/api/v1/",
  // PAYMENT_URL: "",

  //  STAGING URL's
 // BASE_URL: "https://dealsby.io/staging/api/",
  // PAYMENT_URL: "",

};

const { width, height } = Dimensions.get("window");

export const MatrixConstant = {
  SCREEN_WIDTH: Dimensions.get("window").width,
  SCREEN_HEIGHT: Dimensions.get("window").height,

  //Margin
  BASE_MARGIN: width / 30,
  DOUBLE_BASE_MARGIN: width / 15,
  SMALL_MARGIN: width / 60,

  //Padding
  BASE_PADDING: width / 30,
  DOUBLE_BASE_PADDING: width / 15,
  SMALL_PADDING: width / 60,

  baseCurvePadding: 27,
  orderBaseCurvePadding: 40,

  BUTTON_HEIGHT: 50, //Button height
  INPUT_HEIGHT: 50, // Input height
  buttonBorderRadius: 6,

  paddingTop:
    Platform.OS === "ios" ? (width === 896 ? 44 : height === 812 ? 40 : 20) : 0,
  HEADER_HEIGHT:
    Platform.OS === "ios"
      ? Dimensions.get("window").height === 896
        ? 88
        : 64
      : 56,
  paddingBottom: Platform.OS === "ios" ? 0 : 25,
};

// export const MediaArray = [
//   {
//     name: "Camera",
//     id: 0,
//     checked: false,
//     image: Images.ic_camera,
//   },
//   {
//     name: "Gallery",
//     id: 1,
//     checked: false,
//     image: Images.ic_gallery,
//   },
// ];
